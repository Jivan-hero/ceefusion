-- CeeFusion authentication profile schema.
-- Run in the Supabase SQL editor as the project owner.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text not null check (char_length(trim(name)) >= 3),
  email text not null,
  target_exam text not null default 'cee' check (target_exam in ('cee', 'neet', 'both')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

alter table public.profiles drop constraint if exists profiles_name_safe;
alter table public.profiles add constraint profiles_name_safe
  check (
    char_length(trim(name)) between 3 and 80
    and name !~ '[<>[:cntrl:]]'
  ) not valid;

drop policy if exists "Users can read their own profile" on public.profiles;
create policy "Users can read their own profile"
on public.profiles for select
to authenticated
using ((select auth.uid()) = id);

drop policy if exists "Users can update their own profile" on public.profiles;
create policy "Users can update their own profile"
on public.profiles for update
to authenticated
using ((select auth.uid()) = id)
with check ((select auth.uid()) = id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, name, email, target_exam)
  values (
    new.id,
    coalesce(nullif(trim(new.raw_user_meta_data ->> 'name'), ''), 'New Student'),
    coalesce(new.email, ''),
    case
      when new.raw_user_meta_data ->> 'target_exam' in ('cee', 'neet', 'both')
        then new.raw_user_meta_data ->> 'target_exam'
      else 'cee'
    end
  )
  on conflict (id) do update set
    name = excluded.name,
    email = excluded.email,
    target_exam = excluded.target_exam,
    updated_at = now();
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert or update of raw_user_meta_data on auth.users
  for each row execute procedure public.handle_new_user();

-- Server-side quota for the Gemini-backed tutor. The table is never exposed
-- to browser roles; only the Edge Function's service role can consume quota.
create table if not exists public.course_chat_rate_limits (
  user_id uuid not null references auth.users(id) on delete cascade,
  window_started_at timestamptz not null,
  request_count integer not null default 0 check (request_count >= 0),
  primary key (user_id, window_started_at)
);

alter table public.course_chat_rate_limits enable row level security;
revoke all on table public.course_chat_rate_limits from anon, authenticated;

create or replace function public.consume_course_chat_quota(
  p_user_id uuid,
  p_limit integer default 12
)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_window timestamptz := date_trunc('minute', now());
  v_count integer;
  v_limit integer := greatest(1, least(coalesce(p_limit, 12), 120));
begin
  if p_user_id is null then
    return false;
  end if;

  delete from public.course_chat_rate_limits
  where user_id = p_user_id
    and window_started_at < now() - interval '1 day';

  insert into public.course_chat_rate_limits (user_id, window_started_at, request_count)
  values (p_user_id, v_window, 1)
  on conflict (user_id, window_started_at)
  do update set request_count = public.course_chat_rate_limits.request_count + 1
  returning request_count into v_count;

  return v_count <= v_limit;
end;
$$;

revoke all on function public.consume_course_chat_quota(uuid, integer) from public, anon, authenticated;
grant execute on function public.consume_course_chat_quota(uuid, integer) to service_role;
