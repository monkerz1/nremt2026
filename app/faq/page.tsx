'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import { Search, ArrowLeft, ChevronRight } from 'lucide-react'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

const faqData: FAQItem[] = [
  // Getting Started
  {
    id: 'gs-1',
    category: 'Getting Started',
    question: 'How do I create an account on EMSQUIZ?',
    answer: 'Creating an account is simple and free. Click on "Get Started" or "Sign Up" on our homepage, enter your email address, create a password, and select your certification level (EMT-Basic, EMT-Intermediate, or Paramedic). You can start using the platform immediately after registration.'
  },
  {
    id: 'gs-2',
    category: 'Getting Started',
    question: 'What certification levels does EMSQUIZ support?',
    answer: 'EMTQUIZ supports four certification levels: EMT-Basic, EMT-Intermediate, Paramedic (NREMT), and Advanced Practice Modules. Each level contains progressively advanced questions and topics tailored to the specific national certification exam requirements.'
  },
  {
    id: 'gs-3',
    category: 'Getting Started',
    question: 'Can I change my certification level after signing up?',
    answer: 'Yes, absolutely. You can change your certification level at any time in your account settings. All your progress and quiz results will be saved, and you can switch between levels to practice different certification tracks.'
  },
  {
    id: 'gs-4',
    category: 'Getting Started',
    question: 'Do I need to download anything to use EMTQUIZ?',
    answer: 'No, EMTQUIZ is completely web-based. You can access it from any device with an internet connection and a modern web browser. No software installation is required.'
  },

  // Study Methods
  {
    id: 'sm-1',
    category: 'Study Methods',
    question: 'What is the difference between Practice Mode and Exam Mode?',
    answer: 'Practice Mode allows you to answer questions at your own pace and see instant feedback and explanations after each question. This is great for learning. Exam Mode simulates the real NREMT experience with timed questions and no feedback until the end, helping you build test-taking stamina and time management skills.'
  },
  {
    id: 'sm-2',
    category: 'Study Methods',
    question: 'How long should I spend on each quiz?',
    answer: 'The time needed varies based on quiz type. Full-length practice exams typically take 2-3 hours. Topic drills take 15-20 minutes each. We recommend studying for 30-60 minutes daily to maintain consistency. Start with topic drills to learn specific concepts, then move to full-length exams as you progress.'
  },
  {
    id: 'sm-3',
    category: 'Study Methods',
    question: 'What is a Topic Drill and how should I use it?',
    answer: 'Topic Drills are focused, 10-20 question sets on specific subjects like Cardiac Care, Pharmacology, or Trauma Assessment. They\'re ideal for targeted studying when you want to master a particular concept. We recommend using drills to strengthen weak areas identified in your analytics before taking full practice exams.'
  },
  {
    id: 'sm-4',
    category: 'Study Methods',
    question: 'How many practice questions does EMSQUIZ have?',
    answer: 'EMSQUIZ contains over 500 practice questions across all certification levels. Our question bank is continuously expanded with new content. Each question includes detailed explanations to help you understand the concepts, not just memorize answers.'
  },
  {
    id: 'sm-5',
    category: 'Study Methods',
    question: 'Can I retake quizzes to improve my score?',
    answer: 'Yes, you can retake any quiz unlimited times. Retaking quizzes is an excellent study technique. Your best scores are tracked separately so you can monitor your improvement over time. Each attempt provides fresh learning opportunities.'
  },

  // Exam Preparation
  {
    id: 'ep-1',
    category: 'Exam Preparation',
    question: 'How long should I study before taking the NREMT exam?',
    answer: 'Most students spend 4-8 weeks preparing for their certification exam. The exact timeline depends on your background, experience, and current knowledge. EMTQUIZ helps you track your progress and identify when you\'re ready through analytics showing your pass rate and performance trends.'
  },
  {
    id: 'ep-2',
    category: 'Exam Preparation',
    question: 'Will EMSQUIZ questions match the actual NREMT exam?',
    answer: 'Our questions are modeled after the NREMT exam format and difficulty level. While we cannot guarantee exact matches (as the official exam is proprietary), our content covers all tested domains and follows the same structure to ensure you\'re well-prepared for the real exam.'
  },
  {
    id: 'ep-3',
    category: 'Exam Preparation',
    question: 'What topics are covered on the Paramedic NREMT exam?',
    answer: 'The Paramedic NREMT exam covers: Airway Management, Respiration, Circulation, Medical Emergencies (cardiac, respiratory, trauma), Pharmacology, Obstetrics, Pediatrics, Environmental Emergencies, Operations, and Hazmat. EMSQUIZ has comprehensive content for all these domains.'
  },
  {
    id: 'ep-4',
    category: 'Exam Preparation',
    question: 'What is a passing score on the NREMT exam?',
    answer: 'The NREMT uses Computer Adaptive Testing (CAT) which means the exam adapts based on your answers. There is no fixed passing score. Instead, you pass when the exam is 95% confident you\'re above the passing standard. On EMTQUIZ, consistently scoring 80% or higher indicates good exam readiness.'
  },

  // Analytics & Progress
  {
    id: 'ap-1',
    category: 'Analytics & Progress',
    question: 'What do the analytics show me?',
    answer: 'Our analytics dashboard shows your overall pass rate, average score, performance trends over time, breakdown by category, weak areas needing improvement, and your strongest topics. This data helps you focus your study efforts where they\'re needed most.'
  },
  {
    id: 'ap-2',
    category: 'Analytics & Progress',
    question: 'How can I use performance analytics to improve?',
    answer: 'Use the "Areas to Improve" section to identify weak topics, then take Topic Drills in those areas. Track your progress in the Performance tab to see if your scores are improving. When a category reaches 80%+ success rate, move on to new topics or full-length exams.'
  },
  {
    id: 'ap-3',
    category: 'Analytics & Progress',
    question: 'Can I compare my performance across different certification levels?',
    answer: 'Yes, the analytics dashboard shows your performance broken down by certification level. You can see how many tests you\'ve completed at each level, your average score for each, and your progress toward mastery of each certification track.'
  },

  // Technical
  {
    id: 'tech-1',
    category: 'Technical',
    question: 'What devices and browsers does EMTQUIZ support?',
    answer: 'EMTQUIZ works on all modern devices including desktop computers, tablets, and smartphones. We support current versions of Chrome, Firefox, Safari, and Edge. For the best experience, we recommend using a device with a screen size of at least 4 inches and a stable internet connection.'
  },
  {
    id: 'tech-2',
    category: 'Technical',
    question: 'What happens if my internet connection drops during a quiz?',
    answer: 'EMTQUIZ automatically saves your progress. If your connection drops, your session will be saved and you can resume from where you left off. However, if you\'re in Exam Mode with a time limit, the timer will continue running, so reconnect as quickly as possible.'
  },
  {
    id: 'tech-3',
    category: 'Technical',
    question: 'Is my data secure on EMSQUIZ?',
    answer: 'Yes, we take security seriously. Your data is stored securely using industry-standard encryption. We never sell or share your personal information. Your quiz results and progress are private and only accessible to you.'
  },
  {
    id: 'tech-4',
    category: 'Technical',
    question: 'Can I export my quiz results?',
    answer: 'Yes, you can download your detailed performance reports and analytics from your dashboard. These can be useful for reviewing your progress or sharing with mentors or instructors.'
  },

  // Account & Support
  {
    id: 'as-1',
    category: 'Account & Support',
    question: 'How do I reset my password?',
    answer: 'Click on "Sign In", then select "Forgot Password". Enter your email address and we\'ll send you a secure link to reset your password. Follow the link and create a new password. If you don\'t receive the email, check your spam folder.'
  },
  {
    id: 'as-2',
    category: 'Account & Support',
    question: 'Can I delete my account?',
    answer: 'Yes, you can delete your account from your account settings. Please note that this action is permanent and cannot be undone. All your quiz results and progress will be deleted. Contact us before deleting if you want to export your data.'
  },
  {
    id: 'as-3',
    category: 'Account & Support',
    question: 'How do I contact EMSQUIZ support?',
    answer: 'You can reach our support team by sending an email to support@emsquiz.com or using the contact form on our website. We typically respond within 24 hours on business days. For urgent issues, use the live chat feature if available.'
  },
  {
    id: 'as-4',
    category: 'Account & Support',
    question: 'Can I get a refund?',
    answer: 'We offer a 30-day money-back guarantee if you\'re not satisfied with EMSQUIZ. Contact our support team with your refund request, and we\'ll process it promptly. Most refunds are issued within 5-7 business days.'
  }
]

const categories = Array.from(new Set(faqData.map(item => item.category)))

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredFAQs = faqData.filter(item => {
    const matchesSearch = searchTerm === '' || 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === null || item.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
              <div>
                <h1 className="font-bold text-foreground text-xl">Frequently Asked Questions</h1>
                <p className="text-sm text-muted-foreground">Find answers to common questions</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search FAQ..."
              className="pl-10 py-6 text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              All Categories
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        {filteredFAQs.length > 0 ? (
          <div className="space-y-4">
            {categories.map((category) => {
              const categoryFAQs = filteredFAQs.filter(item => item.category === category)
              if (categoryFAQs.length === 0) return null

              return (
                <div key={category}>
                  <h2 className="text-lg font-semibold text-foreground mb-3">{category}</h2>
                  <Card className="mb-6">
                    <CardContent className="p-0">
                      <Accordion type="single" collapsible className="w-full">
                        {categoryFAQs.map((item, index) => (
                          <AccordionItem key={item.id} value={item.id} className={index !== categoryFAQs.length - 1 ? 'border-b border-border' : ''}>
                            <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 transition-colors">
                              <span className="text-left font-medium text-foreground">{item.question}</span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 py-4 bg-muted/30">
                              <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        ) : (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">No results found for "{searchTerm}"</p>
              <Button
                variant="link"
                onClick={() => setSearchTerm('')}
                className="mt-2"
              >
                Clear search
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Still Have Questions Section */}
        <Card className="mt-12 bg-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle>Still Have Questions?</CardTitle>
            <CardDescription>Can't find the answer you're looking for? We're here to help.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="#">
                  Contact Support
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/blog">
                  Read Our Blog
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
