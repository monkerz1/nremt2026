'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Clock, Zap, CheckCircle2, BarChart3, Users, Target, Lightbulb, TrendingUp, Shield, Smartphone, Award } from 'lucide-react'

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: BookOpen,
      title: 'Comprehensive Question Bank',
      description: 'Access 500+ expertly-crafted questions covering all EMT and Paramedic certification levels. Each question includes detailed explanations and references to help you understand the concepts.',
      details: [
        '500+ practice questions',
        'All topics covered',
        'Regular updates',
        'Expert-reviewed content'
      ]
    },
    {
      icon: Clock,
      title: 'Timed Practice Exams',
      description: 'Simulate the real NREMT exam experience with full-length, timed practice tests. Build confidence and learn to manage your time effectively under exam pressure.',
      details: [
        'Realistic time limits',
        'Full-length simulations',
        'Score immediately',
        'Review mode included'
      ]
    },
    {
      icon: Target,
      title: 'Topic Drills',
      description: 'Focus on specific areas with targeted practice drills. Perfect for strengthening weak areas or reviewing particular topics before your exam.',
      details: [
        'Focused practice sets',
        '10-20 questions per drill',
        'Category-specific learning',
        'Progress tracking'
      ]
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track your progress with detailed performance analytics. Identify weak areas, monitor trends, and get personalized recommendations for improvement.',
      details: [
        'Score trends over time',
        'Category breakdown',
        'Accuracy metrics',
        'Personalized insights'
      ]
    },
    {
      icon: CheckCircle2,
      title: 'Detailed Explanations',
      description: 'Every question includes comprehensive explanations for correct and incorrect answers. Learn the why behind each answer to deepen your understanding.',
      details: [
        'In-depth rationales',
        'Clinical reasoning',
        'Key concepts highlighted',
        'Evidence-based content'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Performance Insights',
      description: 'Get actionable insights based on your performance. Our algorithm identifies your learning patterns and suggests targeted study strategies.',
      details: [
        'Weak area identification',
        'Study recommendations',
        'Performance patterns',
        'Growth tracking'
      ]
    }
  ]

  const quizModes = [
    {
      name: 'Practice Mode',
      description: 'Learn at your own pace with immediate feedback and explanations after each question.',
      icon: Lightbulb,
      features: ['Self-paced learning', 'Instant feedback', 'Review anytime', 'No time pressure']
    },
    {
      name: 'Exam Mode',
      description: 'Take full-length practice exams with realistic time constraints to prepare for the actual NREMT test.',
      icon: Award,
      features: ['Timed exams', 'Full-length tests', 'Score at completion', 'Realistic experience']
    },
    {
      name: 'Topic Drills',
      description: 'Drill down on specific topics with focused question sets to master particular areas of study.',
      icon: Target,
      features: ['Focused practice', 'Category specific', 'Flexible length', 'Quick review']
    }
  ]

  const certificationLevels = [
    {
      name: 'EMT-Basic',
      questions: '150+',
      duration: '2-3 weeks',
      description: 'Entry-level emergency medical technician certification. Master foundational knowledge in patient assessment, basic life support, and emergency scene safety.',
      color: 'bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-900'
    },
    {
      name: 'EMT-Intermediate',
      questions: '120+',
      duration: '2 weeks',
      description: 'Mid-level certification with expanded skills. Build on basic knowledge with IV access, medication administration, and advanced patient care techniques.',
      color: 'bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:border-amber-900'
    },
    {
      name: 'Paramedic (NREMT)',
      questions: '250+',
      duration: '6-8 weeks',
      description: 'Advanced certification level. Comprehensive coverage of pharmacology, advanced airway management, 12-lead ECG interpretation, and critical care interventions.',
      color: 'bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-900'
    },
    {
      name: 'Advanced Practice',
      questions: 'Mixed',
      duration: 'Flexible',
      description: 'Specialized modules covering pediatrics, trauma, cardiac emergencies, environmental emergencies, and other critical scenarios.',
      color: 'bg-purple-50 border-purple-200 dark:bg-purple-950/20 dark:border-purple-900'
    }
  ]

  const platformBenefits = [
    {
      icon: Shield,
      title: 'Proven Results',
      description: '95% of our students pass their certification exam on the first attempt.'
    },
    {
      icon: Smartphone,
      title: 'Study Anywhere',
      description: 'Access our platform on desktop, tablet, or mobile. Study whenever and wherever you want.'
    },
    {
      icon: Users,
      title: 'Expert Content',
      description: 'Questions written by experienced paramedics and EMTs who understand what it takes to pass.'
    },
    {
      icon: Zap,
      title: 'Instant Feedback',
      description: 'Get immediate feedback on your answers with detailed explanations for every question.'
    },
    {
      icon: TrendingUp,
      title: 'Track Progress',
      description: 'Monitor your improvement over time with comprehensive progress tracking and analytics.'
    },
    {
      icon: Target,
      title: 'Focused Learning',
      description: 'Identify weak areas and focus your study time where it matters most for maximum improvement.'
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">E</span>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline">EMSQUIZ</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
            Everything You Need to Master Your EMT/Paramedic Certification
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-balance">
            Discover the complete toolkit designed to help you pass your NREMT certification exam with confidence.
          </p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Core Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Our platform combines comprehensive content with powerful learning tools.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quiz Modes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Three Powerful Quiz Modes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Choose the learning style that works best for you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quizModes.map((mode, index) => {
              const Icon = mode.icon
              return (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>{mode.name}</CardTitle>
                    <CardDescription>{mode.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {mode.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certification Levels Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">All Certification Levels Covered</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Prepare for any EMT or Paramedic certification with specialized content.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationLevels.map((level, index) => (
              <Card key={index} className={`border-2 ${level.color}`}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <CardTitle className="text-2xl">{level.name}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{level.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Questions</p>
                      <p className="text-2xl font-bold text-primary">{level.questions}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Typical Duration</p>
                      <p className="text-2xl font-bold text-primary">{level.duration}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose EMSQUIZ</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Everything you need to succeed on your certification exam.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformBenefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="border-border text-center">
                  <CardHeader>
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'How many practice questions are included?',
                a: 'EMSQUIZ includes 500+ practice questions covering all EMT-Basic, EMT-Intermediate, Paramedic, and advanced practice modules. New questions are added regularly.'
              },
              {
                q: 'Can I access the platform on mobile?',
                a: 'Yes! EMSQUIZ is fully responsive and works seamlessly on desktop, tablet, and mobile devices. Study wherever and whenever you want.'
              },
              {
                q: 'What is your pass rate?',
                a: 'Our students have a 95% pass rate on their first attempt at the NREMT certification exam. We focus on quality content and effective learning strategies.'
              },
              {
                q: 'Can I get detailed explanations for every question?',
                a: 'Absolutely! Every question in our database includes a comprehensive explanation covering the correct answer, why other options are incorrect, and relevant clinical reasoning.'
              },
              {
                q: 'How do I track my progress?',
                a: 'Our analytics dashboard provides detailed insights into your performance, including score trends, category breakdowns, accuracy metrics, and personalized improvement recommendations.'
              },
              {
                q: 'Are there practice exams that simulate the real NREMT?',
                a: 'Yes. Our Exam Mode provides full-length, timed practice tests that simulate the real NREMT experience with appropriate difficulty distribution and time constraints.'
              }
            ].map((item, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">{item.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Pass Your EMT Certification?</h2>
          <p className="text-lg mb-8 opacity-90">Start your free trial today and discover why thousands of students trust EMSQUIZ to help them ace their certification exams.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" variant="secondary">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EMSQUIZ. All rights reserved. Preparing EMT and Paramedic professionals for success.</p>
        </div>
      </footer>
    </div>
  )
}
