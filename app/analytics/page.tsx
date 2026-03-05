'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts'
import { ArrowLeft, TrendingUp, Target, Clock, Zap, LogOut, BookOpen, Settings } from 'lucide-react'

export default function AnalyticsPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [sessions, setSessions] = useState<any[]>([])
  const [categoryStats, setCategoryStats] = useState<any[]>([])

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (!userData) {
      router.push('/login')
      return
    }

    const parsedUser = JSON.parse(userData)
    setUser(parsedUser)

    // Load sessions
    const sessionData = localStorage.getItem('sessions')
    if (sessionData) {
      const parsed = JSON.parse(sessionData)
      setSessions(parsed)

      // Process data for charts
      const categoryMap: Record<string, { correct: number; total: number; times: number[] }> = {}
      parsed.forEach((session: any) => {
        const category = session.quizName?.split('-')[0] || 'General'
        if (!categoryMap[category]) {
          categoryMap[category] = { correct: 0, total: 0, times: [] }
        }
        categoryMap[category].total += 1
        categoryMap[category].times.push(session.timeSpent || 0)
        if (session.passed) {
          categoryMap[category].correct += 1
        }
      })

      const stats = Object.entries(categoryMap).map(([name, data]) => ({
        name,
        correct: data.correct,
        total: data.total,
        percentage: Math.round((data.correct / data.total) * 100),
        avgTime: Math.round(data.times.reduce((a, b) => a + b, 0) / data.times.length / 60)
      }))
      setCategoryStats(stats)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/')
  }

  const performanceData = sessions
    .sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(-10)
    .map((session: any, idx: number) => ({
      name: `Test ${idx + 1}`,
      score: session.score,
      questions: session.totalQuestions || 50
    }))

  const passFailData = [
    { name: 'Passed', value: sessions.filter((s: any) => s.passed).length },
    { name: 'Failed', value: sessions.filter((s: any) => !s.passed).length }
  ]

  const certificationStats = [
    { 
      name: 'EMT-Basic', 
      completed: sessions.filter((s: any) => s.quizName?.includes('Basic')).length,
      avgScore: Math.round(sessions
        .filter((s: any) => s.quizName?.includes('Basic'))
        .reduce((sum, s: any) => sum + s.score, 0) / Math.max(sessions.filter((s: any) => s.quizName?.includes('Basic')).length, 1)) || 0
    },
    { 
      name: 'EMT-Intermediate', 
      completed: sessions.filter((s: any) => s.quizName?.includes('Intermediate')).length,
      avgScore: Math.round(sessions
        .filter((s: any) => s.quizName?.includes('Intermediate'))
        .reduce((sum, s: any) => sum + s.score, 0) / Math.max(sessions.filter((s: any) => s.quizName?.includes('Intermediate')).length, 1)) || 0
    },
    { 
      name: 'Paramedic', 
      completed: sessions.filter((s: any) => s.quizName?.includes('Paramedic')).length,
      avgScore: Math.round(sessions
        .filter((s: any) => s.quizName?.includes('Paramedic'))
        .reduce((sum, s: any) => sum + s.score, 0) / Math.max(sessions.filter((s: any) => s.quizName?.includes('Paramedic')).length, 1)) || 0
    }
  ]

  const weakAreasList = categoryStats
    .sort((a, b) => a.percentage - b.percentage)
    .slice(0, 5)

  const strongAreasList = categoryStats
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 5)

  const totalQuizzes = sessions.length
  const passedQuizzes = sessions.filter((s: any) => s.passed).length
  const averageScore = totalQuizzes > 0 ? Math.round(sessions.reduce((sum, s: any) => sum + s.score, 0) / totalQuizzes) : 0
  const passRate = totalQuizzes > 0 ? Math.round((passedQuizzes / totalQuizzes) * 100) : 0

  const COLORS = ['#1e40af', '#7c3aed']
  const categoryColors = ['#0ea5e9', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
              <div>
                <h1 className="font-bold text-foreground text-xl">Progress Analytics</h1>
                <p className="text-sm text-muted-foreground">Track your certification prep journey</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/dashboard">
                <Button variant="outline" size="sm">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Dashboard
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
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Tests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{totalQuizzes}</div>
              <p className="text-xs text-muted-foreground mt-2">Completed</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pass Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">{passRate}%</div>
              <p className="text-xs text-muted-foreground mt-2">{passedQuizzes} passed</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Average Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">{averageScore}%</div>
              <p className="text-xs text-muted-foreground mt-2">Overall performance</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Study Streak</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">7</div>
              <p className="text-xs text-muted-foreground mt-2">Days active</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for different views */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Pass/Fail Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Pass/Fail Distribution</CardTitle>
                  <CardDescription>Your overall test results</CardDescription>
                </CardHeader>
                <CardContent>
                  {passFailData.some(d => d.value > 0) ? (
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={passFailData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, value }) => `${name}: ${value}`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {passFailData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="h-64 flex items-center justify-center text-muted-foreground">
                      No test data yet. Start taking tests to see your results!
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Certification Level Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Certification Progress</CardTitle>
                  <CardDescription>Tests completed by level</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {certificationStats.map((cert) => (
                      <div key={cert.name}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">{cert.name}</span>
                          <span className="text-sm text-muted-foreground">{cert.completed} tests</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${Math.min(cert.completed * 20, 100)}%` }}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Avg Score: {cert.avgScore}%</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Weak vs Strong Areas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Weak Areas */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="w-5 h-5 text-destructive" />
                    Areas to Improve
                  </CardTitle>
                  <CardDescription>Topics with lowest performance</CardDescription>
                </CardHeader>
                <CardContent>
                  {weakAreasList.length > 0 ? (
                    <div className="space-y-3">
                      {weakAreasList.map((area, index) => (
                        <div key={area.name} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="text-sm font-bold text-destructive">{index + 1}</div>
                            <div>
                              <p className="font-medium text-sm">{area.name}</p>
                              <p className="text-xs text-muted-foreground">{area.total} tests taken</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-destructive">{area.percentage}%</p>
                            <p className="text-xs text-muted-foreground">Success rate</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No data yet</p>
                  )}
                </CardContent>
              </Card>

              {/* Strong Areas */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    Strongest Areas
                  </CardTitle>
                  <CardDescription>Topics with highest performance</CardDescription>
                </CardHeader>
                <CardContent>
                  {strongAreasList.length > 0 ? (
                    <div className="space-y-3">
                      {strongAreasList.map((area, index) => (
                        <div key={area.name} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="text-sm font-bold text-accent">{index + 1}</div>
                            <div>
                              <p className="font-medium text-sm">{area.name}</p>
                              <p className="text-xs text-muted-foreground">{area.total} tests taken</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-accent">{area.percentage}%</p>
                            <p className="text-xs text-muted-foreground">Success rate</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No data yet</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Performance Tab */}
          <TabsContent value="performance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Score Progression</CardTitle>
                <CardDescription>Your test scores over time (last 10 tests)</CardDescription>
              </CardHeader>
              <CardContent>
                {performanceData.length > 0 ? (
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                      <XAxis dataKey="name" stroke="var(--muted-foreground)" />
                      <YAxis stroke="var(--muted-foreground)" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'var(--card)',
                          border: '1px solid var(--border)',
                          borderRadius: '8px'
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="score"
                        stroke="var(--primary)"
                        strokeWidth={2}
                        dot={{ fill: 'var(--primary)' }}
                        activeDot={{ r: 6 }}
                        name="Score %"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-80 flex items-center justify-center text-muted-foreground">
                    No test data yet. Start taking tests to see your progression!
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Score Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Score Distribution</CardTitle>
                <CardDescription>Test scores by performance range</CardDescription>
              </CardHeader>
              <CardContent>
                {performanceData.length > 0 ? (
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                      <XAxis dataKey="name" stroke="var(--muted-foreground)" />
                      <YAxis stroke="var(--muted-foreground)" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'var(--card)',
                          border: '1px solid var(--border)',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar dataKey="score" fill="var(--primary)" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    No test data yet
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Categories Tab */}
          <TabsContent value="categories" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance by Category</CardTitle>
                <CardDescription>Your success rate in each topic area</CardDescription>
              </CardHeader>
              <CardContent>
                {categoryStats.length > 0 ? (
                  <ResponsiveContainer width="100%" height={350}>
                    <RadarChart data={categoryStats}>
                      <PolarGrid stroke="var(--border)" />
                      <PolarAngleAxis dataKey="name" stroke="var(--muted-foreground)" />
                      <PolarRadiusAxis stroke="var(--muted-foreground)" />
                      <Radar
                        name="Success Rate %"
                        dataKey="percentage"
                        stroke="var(--primary)"
                        fill="var(--primary)"
                        fillOpacity={0.6}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'var(--card)',
                          border: '1px solid var(--border)',
                          borderRadius: '8px'
                        }}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-80 flex items-center justify-center text-muted-foreground">
                    No category data yet
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Category Details */}
            <Card>
              <CardHeader>
                <CardTitle>Detailed Category Results</CardTitle>
                <CardDescription>Complete breakdown of each topic</CardDescription>
              </CardHeader>
              <CardContent>
                {categoryStats.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left font-semibold py-2">Category</th>
                          <th className="text-center font-semibold py-2">Tests</th>
                          <th className="text-center font-semibold py-2">Correct</th>
                          <th className="text-center font-semibold py-2">Success %</th>
                          <th className="text-center font-semibold py-2">Avg Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categoryStats.map((stat) => (
                          <tr key={stat.name} className="border-b border-border hover:bg-muted/50">
                            <td className="py-3 font-medium">{stat.name}</td>
                            <td className="text-center">{stat.total}</td>
                            <td className="text-center">{stat.correct}</td>
                            <td className="text-center">
                              <span className={`font-semibold ${stat.percentage >= 80 ? 'text-accent' : stat.percentage >= 60 ? 'text-secondary' : 'text-destructive'}`}>
                                {stat.percentage}%
                              </span>
                            </td>
                            <td className="text-center text-muted-foreground">{stat.avgTime} min</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-muted-foreground">No category data available</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
