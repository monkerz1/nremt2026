'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LogOut, BookOpen, Clock, Zap, BarChart3, Settings } from 'lucide-react'
import { emtBasicQuestions, paramedicQuestions, advancedPracticeQuestions } from '@/lib/mockData'

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [recentSessions, setRecentSessions] = useState<any[]>([])
  const [stats, setStats] = useState({
    totalQuestions: 0,
    questionsCorrect: 0,
    averageScore: 0,
    studyStreak: 0
  })

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (!userData) {
      router.push('/login')
      return
    }

    const parsedUser = JSON.parse(userData)
    setUser(parsedUser)

    // Load mock sessions
    const sessions = localStorage.getItem('sessions')
    if (sessions) {
      setRecentSessions(JSON.parse(sessions).slice(0, 3))
    }

    // Calculate stats
    const allSessions = sessions ? JSON.parse(sessions) : []
    let correct = 0
    let total = 0
    let scoreSum = 0

    allSessions.forEach((session: any) => {
      if (session.score !== undefined) {
        correct += Math.round(session.score / 100 * 10)
        total += 10
        scoreSum += session.score
      }
    })

    setStats({
      totalQuestions: total,
      questionsCorrect: correct,
      averageScore: allSessions.length > 0 ? Math.round(scoreSum / allSessions.length) : 0,
      studyStreak: 3
    })

    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/')
  }

  if (isLoading || !user) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  const quizzes = [
    {
      id: 'practice-basic',
      title: 'EMT-Basic Practice',
      type: 'practice',
      level: 'basic',
      questions: emtBasicQuestions.length,
      duration: '20-30 min',
      icon: BookOpen
    },
    {
      id: 'exam-basic',
      title: 'EMT-Basic Exam Simulation',
      type: 'exam',
      level: 'basic',
      questions: 100,
      duration: '90 min',
      icon: Clock
    },
    {
      id: 'drill-basic',
      title: 'Topic Drill: Cardiac Emergencies',
      type: 'drill',
      level: 'basic',
      questions: 15,
      duration: '10 min',
      icon: Zap
    },
    {
      id: 'practice-paramedic',
      title: 'Paramedic Practice',
      type: 'practice',
      level: 'paramedic',
      questions: paramedicQuestions.length,
      duration: '30-40 min',
      icon: BookOpen
    },
    {
      id: 'exam-paramedic',
      title: 'Paramedic NREMT Exam Simulation',
      type: 'exam',
      level: 'paramedic',
      questions: 250,
      duration: '120 min',
      icon: Clock
    },
    {
      id: 'advanced',
      title: 'Advanced Practice Module',
      type: 'drill',
      level: 'paramedic',
      questions: advancedPracticeQuestions.length,
      duration: '15 min',
      icon: Zap
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">E</span>
            </div>
            <div>
              <h1 className="font-bold text-foreground">Welcome, {user.name}!</h1>
              <p className="text-sm text-muted-foreground">
                Preparing for {user.certificationLevel.toUpperCase()}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/practice-tests">
              <Button variant="outline" size="sm">
                <BookOpen className="w-4 h-4 mr-2" />
                All Tests
              </Button>
            </Link>
            <Link href="/topic-drills">
              <Button variant="outline" size="sm">
                <Zap className="w-4 h-4 mr-2" />
                Topic Drills
              </Button>
            </Link>
            <Link href="/analytics">
              <Button variant="outline" size="sm">
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </Button>
            </Link>
            <Link href="/admin">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Admin
              </Button>
            </Link>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalQuestions}</div>
              <p className="text-xs text-muted-foreground mt-1">Completed</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Correct Answers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.questionsCorrect}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stats.totalQuestions > 0 ? Math.round((stats.questionsCorrect / stats.totalQuestions) * 100) : 0}% accuracy
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Average Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.averageScore}%</div>
              <p className="text-xs text-muted-foreground mt-1">Latest tests</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Study Streak</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">{stats.studyStreak} days</div>
              <p className="text-xs text-muted-foreground mt-1">Keep it up!</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        {recentSessions.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
            <div className="grid gap-4">
              {recentSessions.map((session, idx) => (
                <Card key={idx} className="flex items-center justify-between p-4">
                  <div>
                    <p className="font-medium">{session.quizName}</p>
                    <p className="text-sm text-muted-foreground">{new Date(session.date).toLocaleDateString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-lg">{session.score}%</p>
                    <p className={`text-sm ${session.passed ? 'text-primary' : 'text-destructive'}`}>
                      {session.passed ? 'Passed' : 'Review needed'}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Available Quizzes */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Available Quizzes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizzes.map((quiz) => {
              const Icon = quiz.icon
              return (
                <Card key={quiz.id} className="border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{quiz.title}</CardTitle>
                        <CardDescription>{quiz.type === 'practice' ? 'Practice Mode' : quiz.type === 'exam' ? 'Exam Mode' : 'Topic Drill'}</CardDescription>
                      </div>
                      <Icon className="w-5 h-5 text-primary opacity-60" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{quiz.questions} questions</span>
                      <span className="text-muted-foreground">{quiz.duration}</span>
                    </div>
                    <Link href={`/quiz/${quiz.id}`}>
                      <Button className="w-full">Start Quiz</Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
