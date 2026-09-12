-- Progress belongs exclusively to the authenticated student.
create table if not exists public.attempts (
  id uuid primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  mode text not null check (mode in ('practice','exam')),
  started_at timestamptz not null,
  completed_at timestamptz not null default now(),
  answers jsonb not null check (jsonb_typeof(answers) = 'array' and jsonb_array_length(answers) between 1 and 200),
  constraint chronological check (completed_at >= started_at)
);
create index if not exists attempts_user_completed on public.attempts(user_id,completed_at);
alter table public.attempts enable row level security;
revoke all on public.attempts from anon, authenticated;
grant select, insert on public.attempts to authenticated;
create policy "read own attempts" on public.attempts for select to authenticated using ((select auth.uid())=user_id);
create policy "insert own attempts" on public.attempts for insert to authenticated with check ((select auth.uid())=user_id);
-- Results are immutable: no client update/delete policy or grant.
