'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { emtBasicQuestions, paramedicQuestions, advancedPracticeQuestions, Question } from '@/lib/mockData'
import { ChevronLeft, ChevronRight, Check, X } from 'lucide-react'

export default function QuizPage() {
  const router = useRouter()
  const params = useParams()
  const quizId = params?.quizId as string
  
  const [user, setUser] = useState<any>(null)
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [isReviewMode, setIsReviewMode] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [score, setScore] = useState(0)
  const [showExplanation, setShowExplanation] = useState(false)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (!userData) {
      router.push('/login')
      return
    }

    const parsedUser = JSON.parse(userData)
    setUser(parsedUser)

    // Load questions based on quiz ID
    let quizQuestions: Question[] = []
    if (quizId?.includes('basic')) {
      quizQuestions = emtBasicQuestions
    } else if (quizId?.includes('paramedic')) {
      quizQuestions = paramedicQuestions
    } else if (quizId?.includes('advanced')) {
      quizQuestions = advancedPracticeQuestions
    }

    setQuestions(quizQuestions)
  }, [quizId, router])

  const currentQuestion = questions[currentQuestionIndex]
  const selectedAnswer = answers[currentQuestionIndex]
  const isAnsweredCorrectly = selectedAnswer === currentQuestion?.correctAnswer

  const handleSelectAnswer = (optionIndex: number) => {
    if (!isReviewMode && !quizCompleted) {
      setAnswers({
        ...answers,
        [currentQuestionIndex]: optionIndex
      })
      setShowExplanation(false)
    }
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setShowExplanation(false)
    } else {
      completeQuiz()
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setShowExplanation(false)
    }
  }

  const completeQuiz = () => {
    // Calculate score
    let correctCount = 0
    Object.keys(answers).forEach((key) => {
      const idx = parseInt(key)
      if (answers[idx] === questions[idx].correctAnswer) {
        correctCount++
      }
    })

    const finalScore = Math.round((correctCount / questions.length) * 100)
    setScore(finalScore)
    setQuizCompleted(true)

    // Save session
    const sessions = localStorage.getItem('sessions') || '[]'
    const parsedSessions = JSON.parse(sessions)
    parsedSessions.push({
      quizId,
      quizName: quizId?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      score: finalScore,
      passed: finalScore >= 70,
      date: new Date().toISOString(),
      answers
    })
    localStorage.setItem('sessions', JSON.stringify(parsedSessions))
  }

  if (!user || questions.length === 0) {
    return <div className="flex items-center justify-center min-h-screen">Loading quiz...</div>
  }

  if (quizCompleted) {
    const passed = score >= 70
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <Card>
            <CardHeader className="text-center pb-8">
              <div className="flex justify-center mb-4">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center ${passed ? 'bg-primary' : 'bg-secondary'}`}>
                  {passed ? (
                    <Check className="w-10 h-10 text-primary-foreground" />
                  ) : (
                    <X className="w-10 h-10 text-secondary-foreground" />
                  )}
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-2">
                {passed ? 'Congratulations!' : 'Keep Studying!'}
              </h1>
              <p className="text-muted-foreground">
                {passed ? 'You passed the quiz!' : 'Review the materials and try again.'}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-card/50 p-6 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-2">Your Score</p>
                <p className="text-5xl font-bold text-primary">{score}%</p>
                <p className="text-sm text-muted-foreground mt-2">
                  {Object.values(answers).filter((ans, idx) => ans === questions[idx].correctAnswer).length} out of {questions.length} correct
                </p>
              </div>

              <div className="space-y-3">
                <Button
                  className="w-full"
                  onClick={() => {
                    setCurrentQuestionIndex(0)
                    setAnswers({})
                    setQuizCompleted(false)
                    setShowExplanation(false)
                    setIsReviewMode(true)
                  }}
                >
                  Review Answers
                </Button>
                <Link href="/dashboard" className="block">
                  <Button variant="outline" className="w-full">
                    Back to Dashboard
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <span className="text-sm font-medium">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
          </div>
          <Progress value={progressPercent} className="h-2" />
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Card>
          <CardContent className="pt-8">
            {/* Question */}
            <div className="mb-8">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-semibold text-foreground flex-1 pr-4">
                  {currentQuestion?.text}
                </h2>
                <div className="text-xs font-medium px-2 py-1 bg-muted rounded">
                  {currentQuestion?.difficulty.toUpperCase()}
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                Category: {currentQuestion?.category}
              </div>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-8">
              <RadioGroup value={selectedAnswer !== undefined ? selectedAnswer.toString() : ''} onValueChange={(val) => handleSelectAnswer(parseInt(val))}>
                {currentQuestion?.options.map((option, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <RadioGroupItem 
                      value={idx.toString()} 
                      id={`option-${idx}`}
                      disabled={isReviewMode || quizCompleted}
                      className={isReviewMode || quizCompleted ? 'cursor-default' : 'cursor-pointer'}
                    />
                    <Label
                      htmlFor={`option-${idx}`}
                      className={`flex-1 p-3 rounded-lg border-2 transition-colors cursor-pointer ${
                        selectedAnswer === idx
                          ? isAnsweredCorrectly
                            ? 'border-primary bg-primary/5'
                            : 'border-destructive bg-destructive/5'
                          : 'border-border hover:border-primary/50'
                      } ${isReviewMode || quizCompleted ? 'cursor-default' : ''}`}
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Show Explanation Button */}
            {selectedAnswer !== undefined && !showExplanation && (
              <Button
                variant="outline"
                className="w-full mb-6"
                onClick={() => setShowExplanation(true)}
              >
                Show Explanation
              </Button>
            )}

            {/* Explanation */}
            {showExplanation && (
              <div className="mb-8 p-4 bg-card/50 rounded-lg border border-border">
                <div className="flex items-start gap-3">
                  {isAnsweredCorrectly ? (
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  ) : (
                    <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="font-semibold mb-2">
                      {isAnsweredCorrectly ? 'Correct!' : 'Incorrect'}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {currentQuestion?.explanation}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={selectedAnswer === undefined && !isReviewMode}
                className="flex-1"
              >
                {currentQuestionIndex === questions.length - 1 ? 'Complete Quiz' : 'Next'}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
