'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Shield, Lock, Eye, AlertCircle, CheckCircle2, Key, Zap } from 'lucide-react'

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All data transmitted between your device and our servers is encrypted using industry-standard TLS 1.3 protocol.'
    },
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'User data is encrypted at rest using AES-256 encryption to prevent unauthorized access to stored information.'
    },
    {
      icon: Key,
      title: 'Authentication Security',
      description: 'We implement secure password hashing, multi-factor authentication options, and session management best practices.'
    },
    {
      icon: Eye,
      title: 'Access Controls',
      description: 'Role-based access control (RBAC) ensures users only access data and features appropriate to their account level.'
    },
    {
      icon: Zap,
      title: 'Security Monitoring',
      description: 'Continuous monitoring for suspicious activities, unauthorized access attempts, and potential security threats.'
    },
    {
      icon: AlertCircle,
      title: 'Incident Response',
      description: 'We maintain a rapid incident response team and established protocols to address any security concerns immediately.'
    }
  ]

  const complianceStandards = [
    {
      standard: 'GDPR Compliant',
      description: 'We comply with the General Data Protection Regulation for users in the EU and globally.'
    },
    {
      standard: 'CCPA Compliant',
      description: 'California Consumer Privacy Act requirements are fully implemented for California residents.'
    },
    {
      standard: 'HIPAA Considerations',
      description: 'While not a covered entity, we implement HIPAA-like security controls where applicable.'
    },
    {
      standard: 'SOC 2 Type II',
      description: 'Our security controls are audited annually to ensure compliance with SOC 2 standards.'
    },
    {
      standard: 'ISO 27001',
      description: 'We follow ISO/IEC 27001 information security management system standards.'
    },
    {
      standard: 'PCI DSS',
      description: 'Payment processing complies with PCI Data Security Standard requirements.'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div>
              <h1 className="font-bold text-foreground text-xl flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                Security & Privacy
              </h1>
              <p className="text-sm text-muted-foreground">Our commitment to protecting your data</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="mb-12">
          <div className="max-w-2xl mb-8">
            <h2 className="text-3xl font-bold mb-4">Your Security is Our Priority</h2>
            <p className="text-lg text-muted-foreground mb-4">
              At EMSQUIZ, we take the security and privacy of your personal information extremely seriously. We implement comprehensive security measures to protect your data from unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="text-lg text-muted-foreground">
              This page explains the security practices we employ and the standards we comply with to ensure your information remains safe and confidential.
            </p>
          </div>
        </div>

        {/* Security Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Our Security Measures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="border-border">
                  <CardHeader>
                    <Icon className="w-10 h-10 text-primary mb-2" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Compliance & Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complianceStandards.map((compliance) => (
              <Card key={compliance.standard} className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    {compliance.standard}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{compliance.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Detailed Security Practices */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Security Best Practices</h2>
          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Password Security</CardTitle>
                <CardDescription>How we protect your authentication credentials</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Password Requirements</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Minimum 8 characters with mixed case, numbers, and special characters</li>
                    <li>Passwords are hashed using bcrypt with salt before storage</li>
                    <li>Never stored in plain text</li>
                    <li>Regular password expiration reminders (optional for users)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Data Encryption</CardTitle>
                <CardDescription>How we protect your data in transit and at rest</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">In Transit</h4>
                  <p className="text-sm text-muted-foreground mb-3">All communication between your browser and our servers uses TLS 1.3 encryption. We maintain an A+ rating on SSL Labs tests.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">At Rest</h4>
                  <p className="text-sm text-muted-foreground">Sensitive data including user profiles, quiz scores, and personal information are encrypted using AES-256 encryption at our data centers.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Access Controls & Authentication</CardTitle>
                <CardDescription>How we verify and manage access to accounts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Role-based access control (RBAC) for different user types (Student, Instructor, Admin)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Session management with automatic timeout after periods of inactivity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Secure password reset process with email verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Account lockout after multiple failed login attempts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Regular Security Audits</CardTitle>
                <CardDescription>How we continuously verify our security posture</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>We conduct regular security assessments including:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Quarterly penetration testing by independent security firms</li>
                  <li>Monthly vulnerability scans and assessments</li>
                  <li>Code reviews and security testing during development</li>
                  <li>Annual third-party security audits</li>
                  <li>Continuous monitoring using advanced threat detection tools</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Incident Response</CardTitle>
                <CardDescription>How we respond to security incidents</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>In the unlikely event of a security incident, we follow a documented incident response process:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Immediate isolation of affected systems</li>
                  <li>Investigation by our security team and external experts if necessary</li>
                  <li>Notification to affected users within 24-48 hours</li>
                  <li>Regular communication about remediation efforts</li>
                  <li>Post-incident analysis to prevent future occurrences</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Third-Party Security</CardTitle>
                <CardDescription>How we ensure our partners maintain security standards</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>We carefully vet and monitor all third-party vendors and service providers:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Vendor security assessments before integration</li>
                  <li>Data processing agreements with all vendors</li>
                  <li>Regular compliance reviews of third-party services</li>
                  <li>Strict data minimization with third parties</li>
                  <li>Clear data deletion policies with vendors</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* User Responsibilities */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Your Security Responsibilities</h2>
          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle>Protecting Your Account</CardTitle>
              <CardDescription>Steps you can take to enhance your security</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                {[
                  'Use a strong, unique password that you do not share with anyone',
                  'Never share your login credentials or account access with others',
                  'Log out when using shared or public computers',
                  'Regularly review your account activity and login history',
                  'Enable security notifications and alerts',
                  'Update your password regularly (at least every 90 days)',
                  'Use the most current version of your web browser',
                  'Install and maintain antivirus and anti-malware software on your devices'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section className="bg-primary text-primary-foreground rounded-lg p-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">Security Concerns?</h2>
            <p className="mb-6">
              If you discover a security vulnerability or have security concerns about EMSQUIZ, please report it to our security team immediately. We take all security reports seriously and will respond promptly.
            </p>
            <div className="space-y-2 mb-6">
              <p><strong>Email:</strong> security@emtquiz.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567 (Ext. Security)</p>
              <p className="text-sm opacity-90">Please do not disclose security vulnerabilities publicly until we have had time to address them.</p>
            </div>
            <Link href="/contact">
              <Button variant="secondary">
                Contact Security Team
              </Button>
            </Link>
          </div>
        </section>

        {/* Last Updated */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>Last Updated: March 2026</p>
          <p>Security practices are reviewed and updated regularly to address emerging threats and best practices.</p>
        </div>
      </main>
    </div>
  )
}
