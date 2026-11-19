-- CeeFusion production security hardening.

alter table public.profiles enable row level security;

alter table public.profiles drop constraint if exists profiles_name_safe;
alter table public.profiles add constraint profiles_name_safe
  check (
    char_length(trim(name)) between 3 and 80
    and name !~ '[<>[:cntrl:]]'
  ) not valid;

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
