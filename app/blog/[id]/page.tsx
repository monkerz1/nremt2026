'use client'

import Link from 'next/link'
import { useRouter, useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Calendar, User, Clock, BookOpen, LogOut, Settings, Share2 } from 'lucide-react'
import { useEffect, useState } from 'react'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: number
  category: string
  image: string
  featured: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How to Prepare for the NREMT Paramedic Exam in 8 Weeks',
    excerpt: 'A comprehensive study guide for paramedic candidates. Learn the best practices for preparation, time management, and test-taking strategies.',
    content: `
# How to Prepare for the NREMT Paramedic Exam in 8 Weeks

Preparing for the NREMT Paramedic exam is a significant undertaking, but with a structured approach and dedication, you can maximize your chances of success. This comprehensive guide will walk you through an 8-week preparation plan designed to help you master all the essential content.

## Week 1-2: Assessment and Foundation Building

Start by taking a diagnostic practice exam to identify your baseline knowledge and weak areas. Use this information to create a personalized study plan that emphasizes topics where you need the most improvement.

### Key Activities:
- Complete a full-length diagnostic exam
- Review your results and identify weak areas
- Establish a daily study routine (minimum 2-3 hours per day)
- Begin with foundational anatomy and physiology

## Week 3-4: Core Content Mastery

This is where you dive deep into the paramedic curriculum. Focus on high-yield topics that frequently appear on the exam.

### Focus Areas:
- Pharmacology and medication administration
- Cardiac rhythms and ACLS protocols
- Trauma assessment and management
- Medical emergencies and pathophysiology

## Week 5-6: Advanced Topics and Practice

Now that you have a solid foundation, tackle more complex scenarios and case studies.

### Study Strategy:
- Practice complex patient scenarios
- Study difficult pharmacology topics in depth
- Review uncommon but testable conditions
- Take weekly practice exams

## Week 7: Full-Length Exam Practice

This week is critical for building test endurance and identifying any remaining knowledge gaps.

### Daily Tasks:
- Take 3-4 full-length practice exams
- Review every question, especially incorrect ones
- Time yourself to improve your pace
- Focus on your weakest areas

## Week 8: Final Review and Test Day Preparation

Use this final week for light review and mental preparation.

### Final Week Activities:
- Review key concepts and mnemonics
- Take one final practice exam
- Get adequate sleep and exercise
- Prepare your test day logistics

## Study Tips for Success

1. **Active Learning**: Don't just read; quiz yourself regularly
2. **Spaced Repetition**: Review material multiple times over the course of your prep
3. **Study Groups**: Connect with other candidates for accountability
4. **Practice Questions**: Aim for at least 2,000-3,000 practice questions
5. **Teach Others**: Explaining concepts to someone else reinforces your knowledge

## Test Day Strategies

- Arrive early to familiarize yourself with the testing environment
- Read questions carefully and avoid second-guessing
- Manage your time effectively throughout the exam
- Stay calm and remember your preparation

Remember, passing the NREMT requires not just knowledge but also confidence and test-taking skills. Use these 8 weeks wisely, stay focused, and believe in yourself.
    `,
    author: 'Dr. Sarah Mitchell',
    date: '2024-02-15',
    readTime: 12,
    category: 'Study Tips',
    image: '📚',
    featured: true
  },
  {
    id: 2,
    title: 'Master Cardiac Rhythms: EMT-P Essential Knowledge',
    excerpt: 'Understanding the 12 critical cardiac rhythms you need for the paramedic exam. Includes mnemonics and visual guides.',
    content: `
# Master Cardiac Rhythms: EMT-P Essential Knowledge

Cardiac rhythm interpretation is a fundamental skill for paramedics and one of the most heavily tested topics on the NREMT. Let's break down the essential rhythms you need to master.

## The 12 Critical Rhythms

### 1. Normal Sinus Rhythm (NSR)
The gold standard. Regular rhythm, rate 60-100 bpm, normal P-QRS-T pattern.

### 2. Atrial Fibrillation (AFib)
Irregular rhythm with no discernible P waves. Rate varies. Treatment depends on rate.

### 3. Ventricular Fibrillation (VFib)
Chaotic, disorganized rhythm. This is a "shock-able" rhythm requiring immediate defibrillation.

### 4. Atrial Flutter
Sawtooth pattern of P waves. Regular rhythm typically with 2:1 conduction.

### 5. Supraventricular Tachycardia (SVT)
Narrow complex tachycardia above 150 bpm. Regular rhythm with absent P waves.

### 6. Ventricular Tachycardia (VTach)
Wide complex rhythm at 100-250 bpm. Pulse-check is critical - pulseless VTach is a shock-able rhythm.

### 7. Asystole
Flat line. No electrical activity. This is NOT a shock-able rhythm.

### 8. Pulseless Electrical Activity (PEA)
Organized electrical activity without a palpable pulse. Treat the underlying cause.

### 9. Sinus Bradycardia
Normal rhythm at less than 60 bpm. Evaluate for symptoms and hemodynamic compromise.

### 10. Sinus Tachycardia
Normal rhythm at greater than 100 bpm. Usually a response to fever, pain, or hypovolemia.

### 11. Heart Blocks
- 1st Degree: Prolonged PR interval but all P waves conduct
- 2nd Degree Type I: Progressive PR prolongation until a beat is dropped
- 2nd Degree Type II: Dropped beats without progressive PR changes
- 3rd Degree: Complete dissociation between P waves and QRS complexes

### 12. Bundle Branch Blocks
Wide QRS complexes (>0.12 seconds) due to delayed ventricular depolarization.

## ACLS Treatment Algorithms

Remember these key treatment approaches:
- VFib/Pulseless VTach: CPR, Defib, Epi, Amio/Lido
- PEA/Asystole: CPR, Epi only
- SVT with pulse: Vagal maneuvers, Adenosine

## Memory Aids

**SHAFT for Bradycardia Treatment:**
- Sinus Bradycardia
- Heart block
- Aystole
- Fusion beats
- Timing issues

**Shock-able Rhythms = VFib & Pulseless VTach**

## Practice Tips

1. Analyze one strip per day
2. Learn normal first, then deviations
3. Follow the "steps of rhythm interpretation"
4. Practice with actual 12-lead ECGs
5. Study the rate calculation methods

Master these rhythms, and you'll be well-prepared for the cardiac component of your exam.
    `,
    author: 'Prof. James Chen',
    date: '2024-02-12',
    readTime: 15,
    category: 'Cardiac Care',
    image: '❤️',
    featured: true
  },
  {
    id: 3,
    title: 'Pharmacology Made Simple: Common Medications for EMT Exams',
    excerpt: 'A simplified approach to learning paramedic medications. Focus on mechanism of action and clinical applications.',
    content: `
# Pharmacology Made Simple: Common Medications for EMT Exams

Pharmacology doesn't have to be complicated. Let's break down the essential medications paramedics need to know with a focus on mechanism of action and clinical application.

## The Essential Medication Framework

For each medication, remember these key points:
1. **Classification**: What type of drug is it?
2. **Mechanism**: How does it work?
3. **Indications**: When do we use it?
4. **Contraindications**: When do we NOT use it?
5. **Dosage**: How much and how often?
6. **Route**: IV, IM, Intranasal, etc.

## Core Medications by System

### Cardiovascular Medications

**Epinephrine (Adrenaline)**
- Classification: Sympathomimetic
- Mechanism: Increases heart rate and contractility
- Indications: Cardiac arrest, anaphylaxis, hypotension
- Dose: 0.1-0.5 mg IM for anaphylaxis; IV during resuscitation

**Amiodarone**
- Classification: Antiarrhythmic
- Mechanism: Blocks multiple ion channels
- Indications: VFib, pulseless VTach, SVT with pulse
- Dose: 300 mg IV for arrest; 150 mg over 10 min for stable rhythms

**Nitroglycerin**
- Classification: Nitrate
- Mechanism: Vasodilator, reduces preload
- Indications: Chest pain, pulmonary edema
- Dose: 0.3-0.6 mg sublingual; IV dosing varies

### Respiratory Medications

**Albuterol**
- Classification: Beta-2 agonist
- Mechanism: Bronchodilation
- Indications: Asthma, COPD exacerbation
- Dose: 2.5 mg nebulized or 2 puffs inhaled

**Ipratropium**
- Classification: Anticholinergic
- Mechanism: Decreases mucus production, bronchodilation
- Indications: COPD with bronchospasm
- Dose: 0.5 mg nebulized

### Neurological Medications

**Dextrose**
- Classification: Simple sugar
- Mechanism: Increases blood glucose
- Indications: Altered mental status with hypoglycemia
- Dose: 0.5-1 g/kg IV

**Naloxone (Narcan)**
- Classification: Opioid antagonist
- Mechanism: Blocks opioid receptors
- Indications: Opioid overdose
- Dose: 0.4-2 mg IV/IM/Intranasal

## Memory Techniques

Create acronyms and mnemonics:
- **CHAMP S** for chest pain medications: Colace, Heparin, Aspirin, Morphine, Plavix, Statins
- Group medications by route for easier retention
- Use color-coding for different drug classes

## Study Strategy

1. Master core medications first (epinephrine, glucose, naloxone)
2. Learn by mechanism, not alphabetically
3. Practice case scenarios to reinforce applications
4. Quiz yourself on indications and contraindications
5. Review drug interactions frequently

With consistent practice and these simplified frameworks, you'll master paramedic pharmacology.
    `,
    author: 'Dr. Emily Rodriguez',
    date: '2024-02-10',
    readTime: 14,
    category: 'Pharmacology',
    image: '💊',
    featured: false
  }
]

export default function BlogPostPage() {
  const params = useParams()
  const router = useRouter()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    const postId = Array.isArray(params.id) ? parseInt(params.id[0]) : parseInt(params.id as string)
    const foundPost = blogPosts.find(p => p.id === postId)
    
    if (foundPost) {
      setPost(foundPost)
      const related = blogPosts
        .filter(p => p.category === foundPost.category && p.id !== foundPost.id)
        .slice(0, 3)
      setRelatedPosts(related)
    }
  }, [params.id])

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/blog">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
            <div className="hidden md:flex items-center gap-2">
              <Link href="/dashboard">
                <Button variant="outline" size="sm">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <article>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="default">{post.category}</Badge>
              <span className="text-2xl">{post.image}</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-balance">{post.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 py-6 border-t border-b border-border">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none mb-12">
            <div className="prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-code:text-primary">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('#')) {
                  const level = paragraph.match(/^#+/)?.[0].length || 1
                  const text = paragraph.replace(/^#+\s/, '')
                  const HeadingTag = `h${Math.min(level, 6)}` as const
                  return (
                    <HeadingTag key={index} className="mt-8 mb-4 font-bold text-foreground">
                      {text}
                    </HeadingTag>
                  )
                }
                if (paragraph.startsWith('-')) {
                  return (
                    <li key={index} className="ml-6 text-muted-foreground">
                      {paragraph.replace(/^-\s/, '')}
                    </li>
                  )
                }
                if (paragraph.startsWith('**')) {
                  return (
                    <p key={index} className="text-foreground font-semibold">
                      {paragraph.replace(/\*\*/g, '')}
                    </p>
                  )
                }
                if (paragraph.trim() === '') {
                  return null
                }
                return (
                  <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                )
              })}
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="border-t border-border pt-12">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="text-xs">{relatedPost.category}</Badge>
                          <span className="text-2xl">{relatedPost.image}</span>
                        </div>
                        <CardTitle className="text-sm line-clamp-2">{relatedPost.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs text-muted-foreground">{relatedPost.readTime} min read</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EMSQuiz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
