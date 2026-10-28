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
