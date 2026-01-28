import { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { siteConfig } from '@/data/config/site.settings';

export const metadata: Metadata = {
  title: 'Privacy Policy | Serenity Mental Health Centers',
  description: 'Learn how Serenity Mental Health Centers protects your privacy and handles your personal health information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Header */}
        <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-display-sm font-bold text-neutral-900 text-center">
              Privacy Policy
            </h1>
            <p className="mt-4 text-body-lg text-neutral-600 text-center">
              Last updated: January 2025
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2>Introduction</h2>
              <p>
                Serenity Mental Health Centers (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website or use our services.
              </p>

              <h2>Information We Collect</h2>
              <h3>Personal Information</h3>
              <p>We may collect personal information that you provide directly to us, including:</p>
              <ul>
                <li>Name, email address, phone number, and mailing address</li>
                <li>Date of birth and insurance information</li>
                <li>Medical history and health information</li>
                <li>Payment and billing information</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>
                When you visit our website, we may automatically collect certain information about
                your device, including your IP address, browser type, operating system, and browsing behavior.
              </p>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our healthcare services</li>
                <li>Process appointments and communicate with you about your care</li>
                <li>Send administrative information, such as appointment reminders</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>

              <h2>HIPAA Compliance</h2>
              <p>
                As a healthcare provider, we are committed to protecting your Protected Health
                Information (PHI) in accordance with the Health Insurance Portability and
                Accountability Act (HIPAA). We maintain physical, electronic, and procedural
                safeguards to protect your health information.
              </p>
              <p>
                For more information about how we handle your medical records and PHI, please
                request a copy of our Notice of Privacy Practices at any of our locations or
                contact our Privacy Officer.
              </p>

              <h2>Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to
                outside parties except in the following circumstances:
              </p>
              <ul>
                <li>With your consent or at your direction</li>
                <li>To healthcare providers involved in your care</li>
                <li>To process payments and verify insurance</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights, privacy, safety, or property</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to
                protect your personal information against unauthorized access, alteration,
                disclosure, or destruction. However, no method of transmission over the
                Internet is 100% secure.
              </p>

              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access and receive a copy of your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt out of marketing communications</li>
                <li>File a complaint with the Department of Health and Human Services</li>
              </ul>

              <h2>Children&apos;s Privacy</h2>
              <p>
                Our services are not directed to children under 13. We do not knowingly collect
                personal information from children under 13 without parental consent. If you
                believe we have collected information from a child under 13, please contact us.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any
                changes by posting the new Privacy Policy on this page and updating the
                &quot;Last updated&quot; date.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our privacy practices,
                please contact us:
              </p>
              <ul>
                <li>Phone: {siteConfig.phone}</li>
                <li>Email: {siteConfig.email}</li>
                <li>Address: Serenity Mental Health Centers Corporate Office</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
