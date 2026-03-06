'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function TermsPage() {
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
              <h1 className="font-bold text-foreground text-xl">Terms of Service</h1>
              <p className="text-sm text-muted-foreground">Last updated: March 2024</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-sm max-w-none text-foreground space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using EMSQUIZ, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. We reserve the right to modify these terms at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
            <p className="text-muted-foreground">
              Permission is granted to temporarily download one copy of the materials (information or software) on EMSQUIZ for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on EMSQUIZ</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              <li>Selling, trading, or exploiting the materials for any purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
            <p className="text-muted-foreground">
              The materials on EMSQUIZ are provided on an "as is" basis. EMSQUIZ makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
            <p className="text-muted-foreground">
              In no event shall EMSQUIZ or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on EMSQUIZ, even if EMSQUIZ or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Accuracy of Materials</h2>
            <p className="text-muted-foreground">
              The materials appearing on EMSQUIZ could include technical, typographical, or photographic errors. EMSQUIZ does not warrant that any of the materials on our website are accurate, complete, or current. EMSQUIZ may make changes to the materials contained on our website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Materials Reference</h2>
            <p className="text-muted-foreground">
              EMSQUIZ has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by EMSQUIZ of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
            <p className="text-muted-foreground">
              EMSQUIZ may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
            <p className="text-muted-foreground">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which EMSQUIZ operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. User Accounts</h2>
            <p className="text-muted-foreground">
              When you create an account on EMSQUIZ, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account information and password. You agree to accept responsibility for all activities that occur under your account. You agree to notify EMSQUIZ immediately of any unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. User Content</h2>
            <p className="text-muted-foreground">
              Any content you submit, post, or display on EMSQUIZ is considered non-confidential and non-proprietary. By submitting content to EMSQUIZ, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute such content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Prohibited Conduct</h2>
            <p className="text-muted-foreground">
              You agree that you will not use EMSQUIZ in any way that:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
              <li>Violates any applicable law or regulation</li>
              <li>Infringes the intellectual property rights of any party</li>
              <li>Sends spam or unsolicited communications</li>
              <li>Attempts to gain unauthorized access to our systems</li>
              <li>Harasses, threatens, or intimidates other users</li>
              <li>Contains malicious code or viruses</li>
              <li>Constitutes unlawful or harmful content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Intellectual Property Rights</h2>
            <p className="text-muted-foreground">
              All content on EMSQUIZ, including text, graphics, logos, images, audio clips, and software, is the property of EMSQUIZ or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or transmit the content except as permitted by these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">13. Educational Disclaimer</h2>
            <p className="text-muted-foreground">
              EMSQUIZ provides educational materials to help prepare for EMT and Paramedic certification exams. While we strive for accuracy, we do not guarantee that all information is current or completely accurate. EMSQUIZ is not affiliated with, endorsed by, or associated with the National Registry of Emergency Medical Technicians (NREMT). Users are responsible for verifying information with official sources and consulting with qualified instructors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">14. Subscription and Payments</h2>
            <p className="text-muted-foreground">
              If you subscribe to EMSQUIZ services, you agree to pay all charges incurred. EMSQUIZ reserves the right to change pricing with 30 days' notice. Subscriptions automatically renew unless cancelled. You can cancel at any time through your account settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">15. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              Under no circumstances shall EMSQUIZ, its affiliates, officers, or employees be liable for any indirect, incidental, special, or consequential damages arising out of or in any way connected with your use of EMSQUIZ, including loss of profits, loss of data, or business interruption.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">16. Termination</h2>
            <p className="text-muted-foreground">
              EMSQUIZ reserves the right to terminate or suspend your account and access to our services at any time for any reason, including but not limited to violation of these terms of service. Upon termination, your right to use EMSQUIZ immediately ceases.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">17. Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these terms of service, please contact us at:
            </p>
            <div className="mt-3 text-muted-foreground">
              <p>Email: legal@emtquiz.com</p>
              <p>Address: 123 Medical Center Drive, Healthcare City, HC 12345</p>
              <p>Phone: 1-800-EMT-QUIZ</p>
            </div>
          </section>

          <section className="bg-muted/50 p-6 rounded-lg mt-8">
            <p className="text-sm text-muted-foreground">
              <strong>Last Updated:</strong> March 2024. These terms of service may be updated at any time. Your continued use of EMSQUIZ following any changes constitutes your acceptance of the new terms.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
