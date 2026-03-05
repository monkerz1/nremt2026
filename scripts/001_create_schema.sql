-- Create users profiles table
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  first_name text,
  last_name text,
  certification_level text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.profiles enable row level security;

create policy "profiles_select_own" on public.profiles for select using (auth.uid() = id);
create policy "profiles_insert_own" on public.profiles for insert with check (auth.uid() = id);
create policy "profiles_update_own" on public.profiles for update using (auth.uid() = id);

-- Create quiz sessions table
create table if not exists public.quiz_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  quiz_name text not null,
  quiz_type text not null,
  certification_level text not null,
  score integer not null,
  total_questions integer not null,
  passed boolean not null,
  time_spent integer,
  questions_answered jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.quiz_sessions enable row level security;

create policy "quiz_sessions_select_own" on public.quiz_sessions for select using (auth.uid() = user_id);
create policy "quiz_sessions_insert_own" on public.quiz_sessions for insert with check (auth.uid() = user_id);
create policy "quiz_sessions_update_own" on public.quiz_sessions for update using (auth.uid() = user_id);

-- Create quiz questions table
create table if not exists public.quiz_questions (
  id uuid primary key default gen_random_uuid(),
  quiz_name text not null,
  category text not null,
  certification_level text not null,
  question_text text not null,
  options jsonb not null,
  correct_answer integer not null,
  explanation text,
  difficulty text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.quiz_questions enable row level security;

create policy "quiz_questions_select_all" on public.quiz_questions for select using (true);

-- Create user progress table
create table if not exists public.user_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  total_quizzes_completed integer default 0,
  total_questions_answered integer default 0,
  total_correct_answers integer default 0,
  average_score integer default 0,
  certification_level text,
  last_quiz_date timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.user_progress enable row level security;

create policy "user_progress_select_own" on public.user_progress for select using (auth.uid() = user_id);
create policy "user_progress_insert_own" on public.user_progress for insert with check (auth.uid() = user_id);
create policy "user_progress_update_own" on public.user_progress for update using (auth.uid() = user_id);

-- Create trigger to auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, first_name, last_name, certification_level)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'first_name', null),
    coalesce(new.raw_user_meta_data ->> 'last_name', null),
    coalesce(new.raw_user_meta_data ->> 'certification_level', 'EMT-Basic')
  )
  on conflict (id) do nothing;

  insert into public.user_progress (user_id, certification_level)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'certification_level', 'EMT-Basic')
  )
  on conflict (user_id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user();

-- Create indexes for better performance
create index if not exists idx_quiz_sessions_user_id on public.quiz_sessions(user_id);
create index if not exists idx_quiz_sessions_created_at on public.quiz_sessions(created_at);
create index if not exists idx_quiz_questions_category on public.quiz_questions(category);
create index if not exists idx_quiz_questions_cert_level on public.quiz_questions(certification_level);
