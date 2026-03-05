'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { LogOut, BookOpen, BarChart3, Settings, Search, Clock, Target, Zap } from 'lucide-react'

interface TopicDrill {
  id: string
  name: string
  category: string
  description: string
  questionCount: number
  timeEstimate: number
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  certificationLevels: string[]
  icon: React.ReactNode
}

const topicDrills: TopicDrill[] = [
  {
    id: 'cardiac-basics',
    name: 'Cardiac Basics',
    category: 'Cardiac Care',
    description: 'Fundamental concepts of cardiac physiology and basic assessment',
    questionCount: 15,
    timeEstimate: 12,
    difficulty: 'beginner',
    certificationLevels: ['Basic', 'Intermediate', 'Paramedic'],
    icon: '❤️'
  },
  {
    id: 'arrhythmia-recognition',
    name: 'Arrhythmia Recognition',
    category: 'Cardiac Care',
    description: 'Learn to identify and interpret common cardiac arrhythmias on ECG',
    questionCount: 20,
    timeEstimate: 18,
    difficulty: 'advanced',
    certificationLevels: ['Intermediate', 'Paramedic'],
    icon: '⚡'
  },
  {
    id: 'trauma-assessment',
    name: 'Trauma Assessment',
    category: 'Trauma Care',
    description: 'Primary and secondary survey techniques for trauma patients',
    questionCount: 18,
    timeEstimate: 15,
    difficulty: 'intermediate',
    certificationLevels: ['Basic', 'Intermediate', 'Paramedic'],
    icon: '🩹'
  },
  {
    id: 'head-spine-injury',
    name: 'Head & Spine Injuries',
    category: 'Trauma Care',
    description: 'Management and immobilization of head and spinal cord injuries',
    questionCount: 17,
    timeEstimate: 14,
    difficulty: 'intermediate',
    certificationLevels: ['Basic', 'Intermediate', 'Paramedic'],
    icon: '🧠'
  },
  {
    id: 'pharmacology-basics',
    name: 'Pharmacology Basics',
    category: 'Pharmacology',
    description: 'Drug classification, routes of administration, and basic calculations',
    questionCount: 20,
    timeEstimate: 16,
    difficulty: 'beginner',
    certificationLevels: ['Intermediate', 'Paramedic'],
    icon: '💊'
  },
  {
    id: 'medication-interactions',
    name: 'Drug Interactions & Contraindications',
    category: 'Pharmacology',
    description: 'Understanding drug interactions and contraindications in emergency care',
    questionCount: 19,
    timeEstimate: 17,
    difficulty: 'advanced',
    certificationLevels: ['Paramedic'],
    icon: '⚗️'
  },
  {
    id: 'pediatric-assessment',
    name: 'Pediatric Assessment',
    category: 'Pediatrics',
    description: 'Age-appropriate assessment and vital sign interpretation in children',
    questionCount: 16,
    timeEstimate: 13,
    difficulty: 'intermediate',
    certificationLevels: ['Basic', 'Intermediate', 'Paramedic'],
    icon: '👶'
  },
  {
    id: 'pediatric-emergencies',
    name: 'Pediatric Emergencies',
    category: 'Pediatrics',
    description: 'Common pediatric emergencies and specialized treatment protocols',
    questionCount: 18,
    timeEstimate: 15,
    difficulty: 'advanced',
    certificationLevels: ['Intermediate', 'Paramedic'],
    icon: '🚑'
  },
  {
    id: 'anatomy-basics',
    name: 'Anatomy Fundamentals',
    category: 'Anatomy',
    description: 'Human anatomy review covering body systems and structures',
    questionCount: 22,
    timeEstimate: 18,
    difficulty: 'beginner',
    certificationLevels: ['Basic', 'Intermediate', 'Paramedic'],
    icon: '🫀'
  },
  {
    id: 'medical-emergencies',
    name: 'Medical Emergencies Overview',
    category: 'Medical Care',
    description: 'Recognition and initial management of common medical emergencies',
    questionCount: 20,
    timeEstimate: 17,
    difficulty: 'intermediate',
    certificationLevels: ['Basic', 'Intermediate', 'Paramedic'],
    icon: '🏥'
  },
  {
    id: 'respiratory-emergency',
    name: 'Respiratory Emergencies',
    category: 'Medical Care',
    description: 'Airway management, breathing assessment, and respiratory distress',
    questionCount: 17,
    timeEstimate: 14,
    difficulty: 'intermediate',
    certificationLevels: ['Basic', 'Intermediate', 'Paramedic'],
    icon: '💨'
  },
  {
    id: 'shock-management',
    name: 'Shock & Hypoperfusion',
    category: 'Medical Care',
    description: 'Types of shock, pathophysiology, and management strategies',
    questionCount: 15,
    timeEstimate: 13,
    difficulty: 'advanced',
    certificationLevels: ['Intermediate', 'Paramedic'],
    icon: '⚠️'
  },
  {
    id: 'patient-safety',
    name: 'Patient Safety & Handling',
    category: 'Professional Standards',
    description: 'Proper lifting techniques, safety protocols, and infection control',
    questionCount: 14,
    timeEstimate: 11,
    difficulty: 'beginner',
    certificationLevels: ['Basic', 'Intermediate', 'Paramedic'],
    icon: '🛡️'
  },
  {
    id: 'communication-ethics',
    name: 'Communication & Ethics',
    category: 'Professional Standards',
    description: 'Patient communication, documentation, and professional ethics',
    questionCount: 16,
    timeEstimate: 13,
    difficulty: 'beginner',
    certificationLevels: ['Basic', 'Intermediate', 'Paramedic'],
    icon: '📋'
  },
  {
    id: 'wound-hemorrhage',
    name: 'Wound & Hemorrhage Control',
    category: 'Trauma Care',
    description: 'Wound classification, hemorrhage control, and dressing techniques',
    questionCount: 17,
    timeEstimate: 14,
    difficulty: 'intermediate',
    certificationLevels: ['Basic', 'Intermediate', 'Paramedic'],
    icon: '🩸'
  },
  {
    id: 'burn-management',
    name: 'Burn Management',
    category: 'Trauma Care',
    description: 'Burn classification, depth assessment, and treatment protocols',
    questionCount: 15,
    timeEstimate: 12,
    difficulty: 'intermediate',
    certificationLevels: ['Basic', 'Intermediate', 'Paramedic'],
    icon: '🔥'
  }
]

export default function TopicDrillsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const categories = Array.from(new Set(topicDrills.map(d => d.category))).sort()
  const difficulties = ['beginner', 'intermediate', 'advanced']

  const filteredDrills = topicDrills.filter(drill => {
    const matchesSearch = drill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      drill.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedCategory || drill.category === selectedCategory
    const matchesDifficulty = !selectedDifficulty || drill.difficulty === selectedDifficulty
    return matchesSearch && matchesCategory && matchesDifficulty
  })

  const handleLogout = () => {
    localStorage.removeItem('userRole')
    setIsLoggedIn(false)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'intermediate':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
      case 'advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getDifficultyLabel = (difficulty: string) => {
    return difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">E</span>
            </div>
            <span className="font-bold text-xl text-foreground">EMTQUIZ</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/dashboard">
              <Button variant="outline" size="sm">
                <BookOpen className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
            </Link>
            <Link href="/practice-tests">
              <Button variant="outline" size="sm">
                <Zap className="w-4 h-4 mr-2" />
                Practice Tests
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
      </nav>

      {/* Header */}
      <section className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold">Topic Drills</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Master specific topics with focused practice drills. Each drill contains 15-20 questions designed to help you master key concepts.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search drills by name or topic..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-semibold text-muted-foreground py-2">Category:</span>
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedCategory === null
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedCategory === cat
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-semibold text-muted-foreground py-2">Difficulty:</span>
              <button
                onClick={() => setSelectedDifficulty(null)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedDifficulty === null
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                All
              </button>
              {difficulties.map(diff => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedDifficulty === diff
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  {getDifficultyLabel(diff)}
                </button>
              ))}
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Showing {filteredDrills.length} of {topicDrills.length} drills
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                  viewMode === 'list'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {/* Drills Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDrills.map(drill => (
              <Card key={drill.id} className="border-border hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-3xl">{drill.icon}</span>
                    <Badge className={getDifficultyColor(drill.difficulty)}>
                      {getDifficultyLabel(drill.difficulty)}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{drill.name}</CardTitle>
                  <CardDescription className="text-sm">{drill.category}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <p className="text-sm text-muted-foreground">{drill.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Questions</span>
                      <span className="font-semibold">{drill.questionCount}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Est. Time
                      </span>
                      <span className="font-semibold">{drill.timeEstimate} min</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-2">
                    {drill.certificationLevels.map(level => (
                      <Badge key={level} variant="outline" className="text-xs">
                        {level}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <div className="p-6 pt-0">
                  <Link href={`/quiz/drill-${drill.id}`} className="w-full block">
                    <Button className="w-full">Start Drill</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Drills List View */}
        {viewMode === 'list' && (
          <div className="space-y-3">
            {filteredDrills.map(drill => (
              <Card key={drill.id} className="border-border hover:shadow-md transition-shadow">
                <div className="p-6 flex items-center justify-between gap-4">
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{drill.icon}</span>
                      <div>
                        <h3 className="font-semibold text-lg">{drill.name}</h3>
                        <p className="text-sm text-muted-foreground">{drill.category}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{drill.description}</p>
                    <div className="flex flex-wrap gap-2 items-center">
                      <Badge className={getDifficultyColor(drill.difficulty)}>
                        {getDifficultyLabel(drill.difficulty)}
                      </Badge>
                      {drill.certificationLevels.map(level => (
                        <Badge key={level} variant="outline" className="text-xs">
                          {level}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3 flex-shrink-0">
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">{drill.questionCount} Questions</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1 justify-end">
                        <Clock className="w-4 h-4" />
                        {drill.timeEstimate} min
                      </div>
                    </div>
                    <Link href={`/quiz/drill-${drill.id}`}>
                      <Button size="sm">Start</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredDrills.length === 0 && (
          <div className="text-center py-12">
            <Target className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No drills found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your filters or search terms
            </p>
            <Button onClick={() => {
              setSearchTerm('')
              setSelectedCategory(null)
              setSelectedDifficulty(null)
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
