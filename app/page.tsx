'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, BookOpen, BarChart3, Clock, Users, Zap, Menu, X } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Scroll-triggered fade-in
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('opacity-100')
          }
        }),
        { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
      )
      document.querySelectorAll('.fade-section').forEach(el => observer.observe(el))
      return () => observer.disconnect()
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const menuSections = [
    {
      title: 'Product',
      links: [
        { label: 'Practice Tests', href: '#' },
        { label: 'Topic Drills', href: '#' },
        { label: 'Analytics', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
        { label: 'Security', href: '/security' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">E</span>
            </div>
            <span className="font-bold text-xl text-foreground">EMSQUIZ</span>
          </div>
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="/features">
                <Button variant="ghost" size="sm">Features</Button>
              </Link>
              <div className="relative group">
                <Button variant="ghost" size="sm">More</Button>
                <div className="absolute right-0 mt-0 w-64 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4 z-10">
                  <div className="grid grid-cols-1 gap-6">
                    {menuSections.map((section) => (
                      <div key={section.title}>
                        <h4 className="font-semibold text-foreground mb-2 text-sm">{section.title}</h4>
                        <ul className="space-y-1">
                          {section.links.map((link) => (
                            <li key={link.label}>
                              <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                {link.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Link href="/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/register">
                <Button>Get Started</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <Link href="/login" className="hidden sm:block">
                <Button variant="ghost" size="sm">Sign In</Button>
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
              <Link href="/features" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">Features</Button>
              </Link>
              
              {menuSections.map((section) => (
                <div key={section.title}>
                  <h4 className="font-semibold text-foreground mb-2 px-2 text-sm">{section.title}</h4>
                  <ul className="space-y-1 pl-2">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a 
                          href={link.href} 
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <Link href="/register" className="block sm:hidden" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        {/* Heartbeat SVG */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
          <svg viewBox="0 0 600 100" className="w-full max-w-4xl" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="0,50 80,50 110,20 140,80 170,10 200,90 230,50 600,50" className="text-primary stroke-primary" strokeWidth="3"/>
          </svg>
        </div>

        {/* Animated heartbeat line above the stats */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <svg viewBox="0 0 300 60" className="w-64 h-12" fill="none">
                <polyline
                  points="0,30 50,30 70,10 90,50 110,5 130,55 150,30 300,30"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                  style={{
                    strokeDasharray: 400,
                    strokeDashoffset: 400,
                    animation: 'drawLine 2s ease forwards'
                  }}
                />
              </svg>
            </div>
            <style>{`
              @keyframes drawLine {
                to { stroke-dashoffset: 0; }
              }
              .fade-section {
                opacity: 0;
                transform: translateY(24px);
                transition: opacity 0.7s ease, transform 0.7s ease;
              }
              .fade-section.opacity-100 {
                opacity: 1 !important;
                transform: translateY(0) !important;
              }
            `}</style>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance leading-tight">
              Master Your EMT & Paramedic Certification
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              Prepare for your NREMT national certification exam with comprehensive practice tests, expert-crafted questions, and detailed explanations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            {[
              { value: '500+', label: 'Practice Questions' },
              { value: '4 Levels', label: 'EMT-Basic to Paramedic' },
              { value: '95%', label: 'Pass Rate' },
            ].map((stat) => (
              <div key={stat.label} className="text-center bg-background/60 backdrop-blur border border-border rounded-2xl py-6 px-4 shadow-sm">
                <div className="text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="w-full overflow-hidden -mt-1 leading-none">
        <svg viewBox="0 0 1440 60" className="w-full h-12 text-card/50 fill-current" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* Features Section */}
      <section id="features" className="fade-section py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Pass</h2>
            <p className="text-lg text-muted-foreground">Complete preparation platform for EMT and Paramedic certification</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <Card className="border-border">
              <CardHeader>
                <BookOpen className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Practice Questions</CardTitle>
                <CardDescription>500+ expert-crafted questions covering all topics</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">From basic anatomy to advanced pharmacology, practice with questions modeled after the NREMT exam.</p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-border">
              <CardHeader>
                <Clock className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Timed Exams</CardTitle>
                <CardDescription>Full-length practice exams with realistic time pressure</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Simulate the real exam experience with our timed practice tests to build confidence and manage your time.</p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-border">
              <CardHeader>
                <Zap className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Topic Drills</CardTitle>
                <CardDescription>Focus on specific areas you need to master</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Practice targeted drills on pharmacology, trauma, cardiac care, and more to build strong fundamentals.</p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="border-border">
              <CardHeader>
                <CheckCircle2 className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Detailed Explanations</CardTitle>
                <CardDescription>Learn why answers are right or wrong</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Every question includes comprehensive explanations to deepen your understanding and retention.</p>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="border-border">
              <CardHeader>
                <BarChart3 className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Performance Analytics</CardTitle>
                <CardDescription>Track your progress with detailed insights</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">See your strengths and weaknesses by category to focus your study time effectively.</p>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="border-border">
              <CardHeader>
                <Users className="w-10 h-10 text-primary mb-2" />
                <CardTitle>All Levels Covered</CardTitle>
                <CardDescription>EMT-Basic through Paramedic certification</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Comprehensive content for EMT-Basic, EMT-Intermediate, Paramedic, and advanced practice modules.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certification Levels */}
      <section className="fade-section py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Choose Your Certification Level</h2>
            <p className="text-lg text-muted-foreground">Prepare for your specific EMT or Paramedic certification</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'EMT-Basic', questions: '150+ questions', duration: '2-3 weeks' },
              { title: 'EMT-Intermediate', questions: '120+ questions', duration: '2 weeks' },
              { title: 'Paramedic (NREMT)', questions: '250+ questions', duration: '6-8 weeks' },
              { title: 'Advanced Practice', questions: 'Mixed modules', duration: 'Flexible' }
            ].map((level) => (
              <Card key={level.title} className="border-border text-center">
                <CardHeader>
                  <CardTitle>{level.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Questions</p>
                    <p className="font-semibold">{level.questions}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Typical Study Time</p>
                    <p className="font-semibold">{level.duration}</p>
                  </div>
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
          <p className="text-lg mb-8 opacity-90">Join thousands of students who have successfully passed their EMT and Paramedic exams using EMSQUIZ.</p>
          <Link href="/register">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              Start Your Free Trial Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Wave into footer */}
      <div className="w-full overflow-hidden -mb-1 leading-none">
        <svg viewBox="0 0 1440 60" className="w-full h-12 fill-current text-primary/5" preserveAspectRatio="none">
          <path d="M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">E</span>
                </div>
                <span className="font-bold text-foreground">EMSQUIZ</span>
              </div>
              <p className="text-sm text-muted-foreground">Prepare for your EMT and Paramedic certification with confidence.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Practice Tests</a></li>
                <li><a href="#" className="hover:text-foreground">Topic Drills</a></li>
                <li><a href="#" className="hover:text-foreground">Analytics</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/blog" className="hover:text-foreground">Blog</a></li>
                <li><a href="/faq" className="hover:text-foreground">FAQ</a></li>
                <li><a href="/contact" className="hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/privacy" className="hover:text-foreground">Privacy</a></li>
                <li><a href="/terms" className="hover:text-foreground">Terms</a></li>
                <li><a href="/security" className="hover:text-foreground">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <div className="flex justify-center mb-3">
              <svg viewBox="0 0 120 24" className="w-20 h-4 opacity-40" fill="none">
                <polyline points="0,12 20,12 28,4 36,20 44,2 52,22 60,12 120,12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p>&copy; {new Date().getFullYear()} EMSQUIZ. All rights reserved. Preparing EMT and Paramedic professionals for success.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
