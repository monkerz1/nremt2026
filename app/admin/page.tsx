'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LogOut, Users, FileText, BarChart3 } from 'lucide-react'

export default function AdminPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [newQuestion, setNewQuestion] = useState({
    text: '',
    options: ['', '', '', ''],
    correctAnswer: 0,
    explanation: '',
    category: '',
    difficulty: 'medium',
    level: 'basic'
  })

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (!userData) {
      router.push('/login')
      return
    }

    const parsedUser = JSON.parse(userData)
    if (parsedUser.role !== 'admin') {
      parsedUser.role = 'admin' // Allow login as admin for demo
    }
    setUser(parsedUser)
    setIsLoading(false)
  }, [router])

  const handleAddQuestion = (e: React.FormEvent) => {
    e.preventDefault()
    // Validation
    if (!newQuestion.text || newQuestion.options.some(opt => !opt) || !newQuestion.explanation || !newQuestion.category) {
      alert('Please fill all fields')
      return
    }

    // Save to localStorage
    const questions = localStorage.getItem('customQuestions')
    const parsed = questions ? JSON.parse(questions) : []
    parsed.push({
      id: 'custom-' + Date.now(),
      ...newQuestion,
      options: newQuestion.options
    })
    localStorage.setItem('customQuestions', JSON.stringify(parsed))

    // Reset form
    setNewQuestion({
      text: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
      explanation: '',
      category: '',
      difficulty: 'medium',
      level: 'basic'
    })

    alert('Question added successfully!')
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/')
  }

  if (isLoading || !user) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div>
            <h1 className="font-bold text-foreground text-xl">Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground">Manage questions and users</p>
          </div>
          <div className="flex gap-3">
            <Link href="/dashboard">
              <Button variant="outline">Student View</Button>
            </Link>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,248</div>
              <p className="text-xs text-muted-foreground mt-1">+12 this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">523</div>
              <p className="text-xs text-muted-foreground mt-1">Across all levels</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Avg Pass Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground mt-1">Last 30 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Quizzes Taken</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3,521</div>
              <p className="text-xs text-muted-foreground mt-1">This month</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="questions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="questions" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Manage Questions
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Manage Users
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Questions Tab */}
          <TabsContent value="questions">
            <Card>
              <CardHeader>
                <CardTitle>Add New Question</CardTitle>
                <CardDescription>Create new practice questions for the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddQuestion} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="text">Question Text</Label>
                    <textarea
                      id="text"
                      placeholder="Enter the question..."
                      className="w-full p-2 border border-border rounded-lg bg-background text-foreground"
                      rows={3}
                      value={newQuestion.text}
                      onChange={(e) => setNewQuestion({...newQuestion, text: e.target.value})}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Answer Options</Label>
                    {newQuestion.options.map((option, idx) => (
                      <div key={idx} className="flex gap-2 items-center">
                        <input
                          type="radio"
                          name="correct"
                          checked={newQuestion.correctAnswer === idx}
                          onChange={() => setNewQuestion({...newQuestion, correctAnswer: idx})}
                          className="cursor-pointer"
                        />
                        <input
                          type="text"
                          placeholder={`Option ${idx + 1}`}
                          value={option}
                          onChange={(e) => {
                            const newOptions = [...newQuestion.options]
                            newOptions[idx] = e.target.value
                            setNewQuestion({...newQuestion, options: newOptions})
                          }}
                          className="flex-1 p-2 border border-border rounded-lg bg-background text-foreground"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Input
                        id="category"
                        placeholder="e.g., Cardiac"
                        value={newQuestion.category}
                        onChange={(e) => setNewQuestion({...newQuestion, category: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="difficulty">Difficulty</Label>
                      <select
                        id="difficulty"
                        value={newQuestion.difficulty}
                        onChange={(e) => setNewQuestion({...newQuestion, difficulty: e.target.value})}
                        className="w-full p-2 border border-border rounded-lg bg-background text-foreground"
                      >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="level">Level</Label>
                      <select
                        id="level"
                        value={newQuestion.level}
                        onChange={(e) => setNewQuestion({...newQuestion, level: e.target.value})}
                        className="w-full p-2 border border-border rounded-lg bg-background text-foreground"
                      >
                        <option value="basic">EMT-Basic</option>
                        <option value="intermediate">EMT-Intermediate</option>
                        <option value="paramedic">Paramedic</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="explanation">Explanation</Label>
                    <textarea
                      id="explanation"
                      placeholder="Explain why this answer is correct..."
                      className="w-full p-2 border border-border rounded-lg bg-background text-foreground"
                      rows={3}
                      value={newQuestion.explanation}
                      onChange={(e) => setNewQuestion({...newQuestion, explanation: e.target.value})}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Add Question
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>View and manage platform users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center py-8 text-muted-foreground">
                    <p>User management features would display user list, activity, and management options here.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Platform Analytics</CardTitle>
                <CardDescription>Detailed performance metrics and insights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-border">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">Quiz Completion Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-primary">73%</div>
                    </CardContent>
                  </Card>
                  <Card className="border-border">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">Average Time per Quiz</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-secondary">45 min</div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
