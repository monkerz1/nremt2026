# Supabase Setup Guide for EMSQUIZ

## Step 1: Create Supabase Tables

Copy and paste the following SQL into your Supabase SQL Editor (go to SQL Editor in your Supabase dashboard).

### Table 1: Profiles
```sql
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  role TEXT DEFAULT 'student', -- 'student', 'admin'
  certification_level TEXT, -- 'EMT-Basic', 'EMT-Intermediate', 'Paramedic'
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON public.profiles
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
```

### Table 2: Quiz Sessions
```sql
CREATE TABLE IF NOT EXISTS public.quiz_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  quiz_name TEXT NOT NULL,
  certification_level TEXT,
  quiz_type TEXT, -- 'practice', 'exam', 'drill'
  score INT,
  total_questions INT,
  passed BOOLEAN,
  time_spent INT, -- in seconds
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE public.quiz_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own sessions" ON public.quiz_sessions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create sessions" ON public.quiz_sessions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own sessions" ON public.quiz_sessions
  FOR UPDATE USING (auth.uid() = user_id);
```

### Table 3: Quiz Questions
```sql
CREATE TABLE IF NOT EXISTS public.quiz_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quiz_id TEXT NOT NULL,
  category TEXT,
  question_text TEXT NOT NULL,
  option_a TEXT,
  option_b TEXT,
  option_c TEXT,
  option_d TEXT,
  correct_answer TEXT,
  explanation TEXT,
  difficulty TEXT,
  certification_level TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE public.quiz_questions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view questions" ON public.quiz_questions
  FOR SELECT USING (true);

CREATE POLICY "Only admins can insert questions" ON public.quiz_questions
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
```

### Table 4: User Progress
```sql
CREATE TABLE IF NOT EXISTS public.user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  category TEXT NOT NULL,
  correct_answers INT DEFAULT 0,
  total_attempts INT DEFAULT 0,
  average_score INT DEFAULT 0,
  last_updated TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, category)
);

ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own progress" ON public.user_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own progress" ON public.user_progress
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own progress" ON public.user_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);
```

### Create Trigger for Auto Profile Creation
```sql
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'role', 'student')
  )
  ON CONFLICT (id) DO NOTHING;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();
```

## Step 2: Environment Variables

Add these to your `.env.local` file (get values from Supabase project settings):

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Step 3: Enable Email Authentication

1. Go to Authentication → Providers in your Supabase dashboard
2. Make sure "Email" is enabled
3. Go to Authentication → Email Templates
4. Configure the email confirmation template if needed

## Step 4: Setup Complete

The Supabase client files are now in place:
- `/lib/supabase/client.ts` - Browser client
- `/lib/supabase/server.ts` - Server client
- `/lib/supabase/proxy.ts` - Session proxy
- `/middleware.ts` - Token refresh middleware

Your authentication and data will now sync with Supabase instead of using localStorage.

## Features Now Available

✅ Real user authentication with Supabase Auth
✅ Persistent data storage across devices
✅ Quiz session tracking
✅ User progress analytics
✅ Admin role management
✅ Row Level Security for data protection

## Database Schema

- **profiles** - User accounts with roles and certification levels
- **quiz_sessions** - All quiz attempts with scores and timing
- **quiz_questions** - Question bank for all quizzes
- **user_progress** - Category-based performance tracking
