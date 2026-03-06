'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Search, Calendar, User, BookOpen, LogOut, Settings } from 'lucide-react'
import { useRouter } from 'next/navigation'

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
    content: 'Full article content here...',
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
    content: 'Full article content here...',
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
    content: 'Full article content here...',
    author: 'Dr. Emily Rodriguez',
    date: '2024-02-10',
    readTime: 14,
    category: 'Pharmacology',
    image: '💊',
    featured: false
  },
  {
    id: 4,
    title: 'Trauma Assessment: From Primary Survey to Transport',
    excerpt: 'Step-by-step guide to performing thorough trauma assessments. Includes real-world scenarios and decision-making frameworks.',
    content: 'Full article content here...',
    author: 'Captain Michael Torres',
    date: '2024-02-08',
    readTime: 16,
    category: 'Trauma Care',
    image: '🚑',
    featured: false
  },
  {
    id: 5,
    title: 'Test Day Tips: What Every EMT-Basic Should Know',
    excerpt: 'Practical advice for managing test anxiety, time management strategies, and last-minute review techniques.',
    content: 'Full article content here...',
    author: 'Jennifer Lee',
    date: '2024-02-05',
    readTime: 10,
    category: 'Test Strategy',
    image: '✅',
    featured: false
  },
  {
    id: 6,
    title: 'Common NREMT Mistakes and How to Avoid Them',
    excerpt: 'Analysis of the most frequent errors made by candidates and proven strategies to prevent them during your exam.',
    content: 'Full article content here...',
    author: 'Dr. David Kumar',
    date: '2024-02-01',
    readTime: 13,
    category: 'Study Tips',
    image: '⚠️',
    featured: false
  },
  {
    id: 7,
    title: 'Pediatric Assessment: Age-Specific Approaches',
    excerpt: 'Understanding developmental differences and adapting your assessment and treatment for pediatric patients.',
    content: 'Full article content here...',
    author: 'Dr. Lisa Anderson',
    date: '2024-01-28',
    readTime: 11,
    category: 'Pediatrics',
    image: '👶',
    featured: false
  },
  {
    id: 8,
    title: 'Building Confidence Before Your Certification Exam',
    excerpt: 'Mental preparation techniques, confidence-building exercises, and mindset strategies for exam success.',
    content: 'Full article content here...',
    author: 'Coach Robert Martinez',
    date: '2024-01-25',
    readTime: 9,
    category: 'Mental Preparation',
    image: '💪',
    featured: false
  }
]

const categories = ['All', 'Study Tips', 'Cardiac Care', 'Pharmacology', 'Trauma Care', 'Test Strategy', 'Pediatrics', 'Mental Preparation']

export default function BlogPage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/')
  }

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPosts = filteredPosts.filter(post => post.featured).slice(0, 2)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <span className="font-bold text-xl text-foreground">EMSQUIZ</span>
            </Link>
            <div className="hidden md:flex items-center gap-3">
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

      {/* Hero Section */}
      <section className="border-b border-border py-12 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-balance">EMSQUIZ Blog</h1>
          <p className="text-lg text-muted-foreground mb-8">Expert insights, study tips, and preparation strategies for EMT and Paramedic certification success</p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search blog posts..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Badge
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className="cursor-pointer px-3 py-2"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              {featuredPosts.map(post => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-primary/20">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="default">{post.category}</Badge>
                        <span className="text-2xl">{post.image}</span>
                      </div>
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User className="w-4 h-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {formatDate(post.date)}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{post.readTime} min read</p>
                          <ArrowRight className="w-5 h-5 text-primary mt-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            {selectedCategory !== 'All' ? `${selectedCategory} Articles` : 'All Articles'}
          </h2>

          {regularPosts.length === 0 && filteredPosts.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground mb-4">No articles found matching your criteria.</p>
                <Button variant="outline" onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}>
                  Reset Filters
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map(post => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer flex flex-col">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="outline">{post.category}</Badge>
                        <span className="text-3xl">{post.image}</span>
                      </div>
                      <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between">
                      <div />
                      <div className="pt-4 border-t border-border space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {formatDate(post.date)}
                          </div>
                          <span className="text-xs font-medium">{post.readTime} min</span>
                        </div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="mb-6 opacity-90">Get the latest study tips, exam strategies, and certification prep articles delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                placeholder="Enter your email" 
                type="email"
                className="bg-primary-foreground text-foreground placeholder:text-muted-foreground"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EMTQUIZ. All rights reserved. Resources for EMT and Paramedic certification success.</p>
        </div>
      </footer>
    </div>
  )
}
