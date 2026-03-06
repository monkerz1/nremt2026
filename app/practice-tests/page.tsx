'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { BookOpen, Clock, Target, Filter, Grid, List, ArrowRight, LogOut, BarChart3, Settings, Zap } from 'lucide-react'

interface PracticeTest {
  id: string
  name: string
  level: 'basic' | 'intermediate' | 'paramedic'
  type: 'practice' | 'exam' | 'drill'
  category: string
  questionCount: number
  timeLimit?: number
  difficulty: 'easy' | 'medium' | 'hard'
  description: string
}

const practiceTests: PracticeTest[] = [
  {
    id: 'emtb-anatomy-drill',
    name: 'Anatomy Fundamentals',
    level: 'basic',
    type: 'drill',
    category: 'Anatomy',
    questionCount: 20,
    difficulty: 'easy',
    description: 'Master basic human anatomy essential for EMT-Basic certification'
  },
  {
    id: 'emtb-vitals-drill',
    name: 'Vital Signs Practice',
    level: 'basic',
    type: 'drill',
    category: 'Assessment',
    questionCount: 15,
    difficulty: 'easy',
    description: 'Practice assessing and interpreting vital signs'
  },
  {
    id: 'emtb-trauma-practice',
    name: 'Trauma Management',
    level: 'basic',
    type: 'practice',
    category: 'Trauma',
    questionCount: 40,
    timeLimit: 90,
    difficulty: 'medium',
    description: 'Comprehensive trauma management for EMT-Basic level'
  },
  {
    id: 'emtb-medical-exam',
    name: 'Medical Emergencies Full Exam',
    level: 'basic',
    type: 'exam',
    category: 'Medical',
    questionCount: 100,
    timeLimit: 120,
    difficulty: 'medium',
    description: 'Full-length medical emergencies exam for EMT-Basic'
  },
  {
    id: 'emti-cardiac-drill',
    name: 'Cardiac Rhythms',
    level: 'intermediate',
    type: 'drill',
    category: 'Cardiac',
    questionCount: 25,
    difficulty: 'medium',
    description: 'Cardiac rhythm interpretation and management'
  },
  {
    id: 'emti-pharmacology-practice',
    name: 'Pharmacology Essentials',
    level: 'intermediate',
    type: 'practice',
    category: 'Pharmacology',
    questionCount: 50,
    timeLimit: 90,
    difficulty: 'hard',
    description: 'Drug interactions and medications for Intermediate level'
  },
  {
    id: 'para-airway-drill',
    name: 'Airway Management',
    level: 'paramedic',
    type: 'drill',
    category: 'Airway',
    questionCount: 30,
    difficulty: 'hard',
    description: 'Advanced airway management techniques'
  },
  {
    id: 'para-full-exam',
    name: 'NREMT Paramedic Full Exam',
    level: 'paramedic',
    type: 'exam',
    category: 'Mixed',
    questionCount: 250,
    timeLimit: 180,
    difficulty: 'hard',
    description: 'Complete NREMT Paramedic certification exam'
  }
]

export default function PracticeTestsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLevel, setSelectedLevel] = useState<string>('all')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredTests = practiceTests.filter(test => {
    const matchesSearch = test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         test.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLevel = selectedLevel === 'all' || test.level === selectedLevel
    const matchesType = selectedType === 'all' || test.type === selectedType
    const matchesCategory = selectedCategory === 'all' || test.category === selectedCategory

    return matchesSearch && matchesLevel && matchesType && matchesCategory
  })

  const categories = Array.from(new Set(practiceTests.map(t => t.category))).sort()

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('currentUser')
      window.location.href = '/'
    }
  }

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'basic': return 'bg-blue-100 text-blue-800'
      case 'intermediate': return 'bg-amber-100 text-amber-800'
      case 'paramedic': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">E</span>
            </div>
            <span className="font-bold text-xl text-foreground">EMSQuiz</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/dashboard">
              <Button variant="outline" size="sm">
                <BookOpen className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
            </Link>
            <Link href="/topic-drills">
              <Button variant="outline" size="sm">
                <Target className="w-4 h-4 mr-2" />
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Practice Tests</h1>
          <p className="text-lg text-muted-foreground">Choose from hundreds of practice questions organized by certification level and topic</p>
        </div>

        <div className="mb-8 p-6 bg-card rounded-lg border border-border">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold">Filters</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <Input
                type="text"
                placeholder="Search tests or categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>

            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Certification Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="basic">EMT-Basic</SelectItem>
                <SelectItem value="intermediate">EMT-Intermediate</SelectItem>
                <SelectItem value="paramedic">Paramedic</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Test Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="practice">Practice</SelectItem>
                <SelectItem value="exam">Full Exam</SelectItem>
                <SelectItem value="drill">Drill</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(cat => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
            <span className="text-sm text-muted-foreground">View:</span>
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredTests.length} of {practiceTests.length} tests
          </p>
        </div>

        {filteredTests.length === 0 ? (
          <Card className="border-border text-center py-12">
            <CardContent>
              <p className="text-lg text-muted-foreground mb-4">No tests match your filters</p>
              <Button variant="outline" onClick={() => {
                setSearchTerm('')
                setSelectedLevel('all')
                setSelectedType('all')
                setSelectedCategory('all')
              }}>
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {filteredTests.map(test => (
              <Card key={test.id} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={getLevelBadgeColor(test.level)}>
                      {test.level.charAt(0).toUpperCase() + test.level.slice(1)}
                    </Badge>
                    <Badge variant="outline">{test.type.charAt(0).toUpperCase() + test.type.slice(1)}</Badge>
                  </div>
                  <CardTitle className="text-lg">{test.name}</CardTitle>
                  <CardDescription>{test.category}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-foreground">{test.description}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{test.questionCount} questions</span>
                      </div>
                      {test.timeLimit && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{test.timeLimit} min</span>
                        </div>
                      )}
                    </div>
                    <span className={`font-semibold ${
                      test.difficulty === 'easy' ? 'text-green-600' :
                      test.difficulty === 'medium' ? 'text-amber-600' :
                      'text-red-600'
                    }`}>
                      {test.difficulty.charAt(0).toUpperCase() + test.difficulty.slice(1)}
                    </span>
                  </div>
                  <Link href={`/quiz/${test.id}`} className="block">
                    <Button className="w-full">
                      Start Test
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
