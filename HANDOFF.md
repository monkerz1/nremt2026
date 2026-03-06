# EMTQUIZ Project Handoff Document

## Project Overview
EMTQUIZ is a comprehensive EMT and Paramedic certification exam preparation platform built with Next.js 16, React, Tailwind CSS, and Supabase. The platform allows users to study for their national EMT/Paramedic certification exams through practice tests, topic drills, analytics, and an admin management system.

---

## What Was Built

### Architecture
- **Framework**: Next.js 16 (App Router)
- **Frontend**: React with TypeScript, Tailwind CSS v4
- **Backend**: Supabase PostgreSQL with Row Level Security (RLS)
- **Authentication**: Email/Password with Supabase Auth
- **Styling**: Professional medical-focused blue-green color scheme
- **Package Manager**: pnpm

### Core Features Implemented

#### 1. **Public Pages** (No Auth Required)
- `app/page.tsx` - Landing page with hero, features, CTA, footer
- `app/features/page.tsx` - Detailed feature showcase
- `app/blog/page.tsx` - Blog listing with search and category filtering
- `app/blog/[id]/page.tsx` - Individual blog post pages
- `app/faq/page.tsx` - FAQ with collapsible questions
- `app/contact/page.tsx` - Contact form with info cards
- `app/privacy/page.tsx` - Privacy policy
- `app/terms/page.tsx` - Terms of service
- `app/security/page.tsx` - Security practices documentation

#### 2. **Authentication Pages**
- `app/login/page.tsx` - Email/password login
- `app/register/page.tsx` - New user registration with certification level selection

#### 3. **Student Dashboard Pages** (Auth Required)
- `app/dashboard/page.tsx` - Main dashboard with stats, recent activity, quick access
- `app/practice-tests/page.tsx` - Browse all practice tests with filtering/search
- `app/topic-drills/page.tsx` - Browse topic-specific drills
- `app/quiz/[quizId]/page.tsx` - Quiz engine with three modes (Practice, Exam, Drill)
- `app/analytics/page.tsx` - Comprehensive analytics with charts and performance breakdown

#### 4. **Admin Pages** (Auth + Admin Role Required)
- `app/admin/page.tsx` - Admin dashboard for managing questions and users

### Quiz System Features
- **Three Quiz Modes**:
  - Practice Mode: Self-paced with instant explanations
  - Exam Mode: Full-length timed tests (realistic NREMT simulation)
  - Topic Drills: 10-20 focused questions on specific topics

- **Question Bank**: 500+ sample questions covering:
  - 4 Certification Levels: EMT-Basic, EMT-Intermediate, Paramedic (NREMT), Advanced Practice
  - 8+ Topics: Anatomy, Cardiac, Trauma, Pharmacology, Pediatrics, Medical, Respiratory, Advanced Care
  - Difficulty Levels: Easy, Medium, Hard
  - Detailed explanations for every answer

- **Analytics Dashboard**:
  - Score progression charts
  - Pass/fail distribution
  - Performance by category (radar chart)
  - Weak/strong areas identification
  - Detailed category breakdown table
  - Certification level progress tracking

### Design System
- **Color Palette**: Medical blue-green theme
  - Primary: Medical blue (#0ea5e9)
  - Secondary: Healthcare green (#10b981)
  - Accent: Clinical purple (#7c3aed)
  - Neutrals: Grays and whites with proper contrast

- **Typography**: Clean, professional
  - Geist font family (sans-serif)
  - Proper heading hierarchy (h1-h6)
  - Line-height: 1.4-1.6 for readability

- **Layout**: Mobile-first, responsive design
  - Flexbox-based layouts
  - Responsive grid systems
  - Touch-friendly buttons and spacing

### Navigation & User Experience
- **Header Navigation**: 
  - Logo (E / EMTQUIZ) links to home page on all pages
  - "More" dropdown menu showing all footer sections (Product, Resources, Legal)
  - Mobile hamburger menu for small screens
  - Sign In / Get Started buttons

- **Footer**: 
  - 4 sections: Product, Resources, Legal links
  - Dynamic copyright year using `new Date().getFullYear()`
  - Consistent across all pages

---

## Supabase Integration - Current Status

### What's Been Completed

#### 1. **Database Schema Created**
Executed SQL commands in Supabase to create:

- **`profiles` table**: User account data
  - id (references auth.users)
  - email
  - full_name
  - certification_level (EMT-Basic, EMT-Intermediate, Paramedic, Advanced)
  - created_at
  - updated_at

- **`quiz_sessions` table**: Quiz attempt records
  - id (UUID, auto-generated)
  - user_id (references profiles)
  - quiz_id (quiz identifier)
  - quiz_name (display name)
  - certification_level
  - questions_attempted (count)
  - correct_answers (count)
  - score (percentage)
  - time_spent (seconds)
  - passed (boolean)
  - started_at
  - completed_at

- **`quiz_questions` table**: Question bank (for future migration)
  - id (UUID)
  - certification_level
  - topic
  - difficulty
  - question_text
  - options (JSON array)
  - correct_answer
  - explanation
  - created_at

- **`user_progress` table**: Performance tracking
  - id (UUID)
  - user_id (references profiles)
  - category (topic name)
  - total_attempts
  - correct_answers
  - last_attempted_at
  - updated_at

#### 2. **Row Level Security (RLS) Policies**
All tables have RLS enabled with policies allowing users to:
- **SELECT**: View only their own data
- **INSERT**: Create only their own records
- **UPDATE**: Modify only their own records
- **DELETE**: Remove only their own records

#### 3. **Automatic Profile Creation**
- Database trigger automatically creates a profile when user signs up
- Trigger function: `public.handle_new_user()`
- Prevents signup delays by creating profile with security definer privileges

#### 4. **Supabase Client Files Created**
- `lib/supabase/client.ts` - Browser-side Supabase client using createBrowserClient
- `lib/supabase/server.ts` - Server-side Supabase client using createServerClient
- `lib/supabase/proxy.ts` - Session handling and token refresh
- `middleware.ts` - Authentication middleware for token refresh

#### 5. **Environment Variables Required**
Add these to your Vercel project settings (Settings → Vars):
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - (Optional) For server-side operations

---

## What Still Needs to Be Done

### Priority 1: Authentication Migration
1. **Update login/register pages** to use Supabase client
   - Replace localStorage calls with Supabase auth methods
   - Use `supabase.auth.signUp()` for registration
   - Use `supabase.auth.signInWithPassword()` for login
   - Handle email confirmation flow

2. **Protect routes** with middleware
   - Check for valid session in middleware.ts
   - Redirect unauthenticated users to /login
   - Refresh tokens automatically

3. **User metadata** from signup
   - Store certification_level in user.user_metadata
   - Store role (student/admin) in metadata
   - Retrieve in dashboard and admin pages

### Priority 2: Data Persistence Migration
1. **Replace localStorage in Dashboard**
   - Fetch user stats from `quiz_sessions` table
   - Update progress on quiz completion
   - Remove localStorage dependency

2. **Quiz Engine Integration**
   - Store quiz attempts in `quiz_sessions` table
   - Save individual question responses
   - Track time spent accurately
   - Calculate scores and pass/fail status

3. **Analytics Dashboard**
   - Fetch session history from database
   - Query user_progress for category breakdown
   - Generate charts from database data instead of mock data

### Priority 3: Admin Functionality
1. **Admin Panel**
   - Implement question management (CRUD operations)
   - Add question import/export
   - User management and analytics
   - Add admin-only RLS policies

### Priority 4: Advanced Features
1. **Real Questions Database**
   - Migrate from mockData.ts to database
   - Implement question search and filtering
   - Version control for question updates

2. **Email Notifications**
   - Send confirmation emails on signup
   - Password reset emails
   - Study reminders

3. **Payment Integration** (if applicable)
   - Stripe integration for premium features
   - Subscription management

---

## Important Notes

### Current Data Storage
- **Currently**: Uses localStorage (in-browser storage)
- **After Migration**: Uses Supabase PostgreSQL
- **User Data Not Preserved**: localStorage data won't migrate automatically - users will need to retake tests

### Authentication Email Confirmation
- By default, Supabase requires email confirmation before first login
- Can be disabled in Supabase settings (Settings → Authentication → Email)
- If enabled, user receives confirmation email before account is active

### Row Level Security (RLS)
- All queries automatically filter to user's own data
- This is enforced at database level (secure by default)
- Admin role needs special RLS policies to view all user data

### Session Management
- Token refresh happens automatically in middleware.ts
- Cookies are HTTP-only for security
- Session lasts until logout or token expiration

---

## File Structure Overview

```
app/
├── page.tsx (landing)
├── login/page.tsx
├── register/page.tsx
├── dashboard/page.tsx
├── practice-tests/page.tsx
├── topic-drills/page.tsx
├── quiz/[quizId]/page.tsx
├── analytics/page.tsx
├── admin/page.tsx
├── blog/page.tsx
├── blog/[id]/page.tsx
├── faq/page.tsx
├── contact/page.tsx
├── privacy/page.tsx
├── terms/page.tsx
├── security/page.tsx
└── layout.tsx

lib/
├── supabase/
│   ├── client.ts
│   ├── server.ts
│   └── proxy.ts
├── mockData.ts (to be migrated to database)
└── utils.ts

middleware.ts (new - handles auth and token refresh)

scripts/
└── 001_create_schema.sql (database schema)

public/
└── (assets if any)
```

---

## Next Steps - Quick Checklist

### Immediate (Start Here)
- [ ] Add environment variables to Vercel project
- [ ] Test Supabase connection with a simple query
- [ ] Migrate login/register to Supabase auth
- [ ] Test user signup and profile creation

### Short Term (Next Priority)
- [ ] Update dashboard to fetch user data from database
- [ ] Migrate quiz engine to save attempts to database
- [ ] Update analytics to use database queries
- [ ] Remove mockData.ts dependency

### Medium Term
- [ ] Admin functionality for question management
- [ ] Real questions migration from mockData to database
- [ ] Email confirmation and password reset flows
- [ ] User role management

### Long Term
- [ ] Premium features and payment integration
- [ ] Advanced analytics and reporting
- [ ] Study group/community features
- [ ] Mobile app consideration

---

## Resources

- **Supabase Docs**: https://supabase.com/docs
- **Next.js 16 Docs**: https://nextjs.org/docs
- **React Documentation**: https://react.dev
- **Tailwind CSS v4**: https://tailwindcss.com

## Git Repository
- **Repo**: `monkerz1/nremt2026`
- **Main Branch**: `main`
- **Current Connection**: Connected to v0 project

---

## Contact & Support

For questions about the setup or next steps, refer to the SUPABASE_SETUP.md file for detailed SQL schema and client configuration instructions.

Last Updated: March 5, 2026
