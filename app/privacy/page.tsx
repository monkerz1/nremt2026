'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div>
              <h1 className="font-bold text-foreground text-xl">Privacy Policy</h1>
              <p className="text-sm text-muted-foreground">Last updated: March 2024</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle>Introduction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-relaxed">
              <p>
                EMSQuiz ("we", "us", "our", or "Company") operates the EMSQuiz website and mobile application (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
              <p>
                We are committed to protecting your privacy and ensuring you have a positive experience on our platform. This Privacy Policy explains our online information practices and the choices you can make about how your information is collected and used.
              </p>
            </CardContent>
          </Card>

          {/* Information Collection */}
          <Card>
            <CardHeader>
              <CardTitle>Information Collection and Use</CardTitle>
              <CardDescription>Types of data we collect</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-sm">
              <div>
                <h3 className="font-semibold mb-2">Personal Information</h3>
                <p className="text-muted-foreground mb-3">We collect certain personally identifiable information when you register and use EMTQUIZ, including:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                  <li>Name and email address</li>
                  <li>Password and account credentials</li>
                  <li>Certification level and EMT experience</li>
                  <li>Phone number (optional)</li>
                  <li>Profile information and preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Usage Data</h3>
                <p className="text-muted-foreground mb-3">We automatically collect certain information about your activity on our Service:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                  <li>Quiz performance and scores</li>
                  <li>Time spent on the platform</li>
                  <li>Questions answered and responses</li>
                  <li>Study patterns and progress</li>
                  <li>Device information and IP address</li>
                  <li>Browser type and operating system</li>
                  <li>Pages visited and features used</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Cookies and Tracking Technologies</h3>
                <p className="text-muted-foreground">
                  We use cookies, localStorage, and similar technologies to enhance your experience, remember your preferences, and analyze how you use our Service. You can control cookie settings through your browser preferences.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Use of Data */}
          <Card>
            <CardHeader>
              <CardTitle>Use of Data</CardTitle>
              <CardDescription>How we use your information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p className="text-muted-foreground">EMTQUIZ uses the collected data for various purposes:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• To provide and maintain our Service</li>
                <li>• To track your progress and provide personalized learning recommendations</li>
                <li>• To notify you about changes to our Service</li>
                <li>• To allow you to participate in interactive features of our Service</li>
                <li>• To provide customer support and respond to your inquiries</li>
                <li>• To gather analysis or valuable information so we can improve our Service</li>
                <li>• To monitor the usage of our Service</li>
                <li>• To detect, prevent and address technical issues</li>
                <li>• To send promotional communications and updates (with your consent)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
              <CardDescription>How we protect your information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Secure authentication mechanisms</li>
                <li>Regular security audits and testing</li>
                <li>Access controls and user authentication</li>
                <li>Confidentiality agreements with our service providers</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card>
            <CardHeader>
              <CardTitle>Data Retention</CardTitle>
              <CardDescription>How long we keep your data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                EMTQUIZ will retain your Personal Data only for as long as necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations.
              </p>
              <p>
                If you wish to delete your account and associated data, you can request this through your account settings or by contacting us directly. We will process deletion requests within 30 days, except where we are required to retain data for legal or regulatory purposes.
              </p>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardHeader>
              <CardTitle>Your Privacy Rights</CardTitle>
              <CardDescription>What you can do with your data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <p className="text-muted-foreground">You have the following rights regarding your personal data:</p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Right to Access</h4>
                  <p className="text-muted-foreground">You have the right to request access to your personal data. You can download a copy of your data from your account settings.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Right to Correction</h4>
                  <p className="text-muted-foreground">You have the right to correct any inaccurate or incomplete personal data. You can update your profile information at any time.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Right to Deletion</h4>
                  <p className="text-muted-foreground">You have the right to request deletion of your personal data, subject to certain legal exceptions. Contact us to submit a deletion request.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Right to Withdraw Consent</h4>
                  <p className="text-muted-foreground">If we rely on your consent to process personal data, you have the right to withdraw that consent at any time.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Right to Opt-Out</h4>
                  <p className="text-muted-foreground">You can opt out of marketing communications by clicking the unsubscribe link in our emails or adjusting your preferences.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sharing of Data */}
          <Card>
            <CardHeader>
              <CardTitle>Disclosure of Data</CardTitle>
              <CardDescription>When we share your information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                We do not sell, trade, or rent your personal information to third parties. However, we may share your data in the following circumstances:
              </p>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-foreground mb-1">Service Providers</p>
                  <p>We may share data with third-party service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Legal Compliance</p>
                  <p>We may disclose personal data if required by law or if we have a good faith belief that disclosure is necessary to comply with legal obligations or protect our rights.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Business Transfer</p>
                  <p>In the event of a merger, acquisition, or sale of assets, your personal data may be transferred as part of that transaction. We will notify you of such change.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Third-Party Links */}
          <Card>
            <CardHeader>
              <CardTitle>Third-Party Links</CardTitle>
              <CardDescription>External websites and services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Our Service may contain links to third-party websites and services that are not operated by EMTQUIZ. This Privacy Policy does not apply to third-party websites, and we are not responsible for their privacy practices.
              </p>
              <p>
                We encourage you to review the privacy policies of any third-party websites before providing your personal information or using their services. Your use of third-party websites is at your own risk.
              </p>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card>
            <CardHeader>
              <CardTitle>Children's Privacy</CardTitle>
              <CardDescription>Protection for young users</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Our Service is not intended for children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If we become aware that we have collected personal data from a child under 13, we will take steps to delete such information and terminate the child's account.
              </p>
              <p>
                If you are a parent or guardian and believe we have collected data from your child, please contact us immediately at privacy@emtquiz.com.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Policy */}
          <Card>
            <CardHeader>
              <CardTitle>Changes to This Privacy Policy</CardTitle>
              <CardDescription>Updates and notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy.
              </p>
              <p>
                Your continued use of EMTQUIZ following the posting of revised Privacy Policy means that you accept and agree to the changes. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
              </p>
            </CardContent>
          </Card>

          {/* Contact Us */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>How to reach us about privacy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: privacy@emtquiz.com</p>
                <p>Mailing Address: EMTQUIZ, Inc.<br />123 Medical Plaza Drive<br />Healthcare City, ST 12345<br />United States</p>
                <p>Phone: 1-800-EMT-QUIZ (1-800-368-7849)</p>
              </div>
              <p className="text-muted-foreground mt-4">
                We will respond to your inquiry within 30 days of receipt.
              </p>
            </CardContent>
          </Card>

          {/* Acknowledgment */}
          <div className="bg-muted p-6 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">
              By accessing and using EMTQUIZ, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EMSQuiz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
