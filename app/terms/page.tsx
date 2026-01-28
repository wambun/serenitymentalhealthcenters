import { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { siteConfig } from '@/data/config/site.settings';

export const metadata: Metadata = {
  title: 'Terms of Service | Serenity Mental Health Centers',
  description: 'Terms and conditions for using Serenity Mental Health Centers website and services.',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Header */}
        <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-display-sm font-bold text-neutral-900 text-center">
              Terms of Service
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
              <h2>Agreement to Terms</h2>
              <p>
                By accessing or using the Serenity Mental Health Centers website and services,
                you agree to be bound by these Terms of Service. If you do not agree to these
                terms, please do not use our website or services.
              </p>

              <h2>Services Description</h2>
              <p>
                Serenity Mental Health Centers provides psychiatric and mental health services,
                including but not limited to:
              </p>
              <ul>
                <li>Psychiatric evaluations and consultations</li>
                <li>Medication management</li>
                <li>TMS (Transcranial Magnetic Stimulation) therapy</li>
                <li>Ketamine therapy</li>
                <li>ADHD testing and treatment</li>
              </ul>
              <p>
                This website provides information about our services and allows you to request
                appointments. It is not intended to provide medical advice, diagnosis, or treatment.
              </p>

              <h2>Medical Disclaimer</h2>
              <p>
                <strong>This website does not provide medical advice.</strong> The information
                provided on this website is for general informational purposes only and is not
                a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <p>
                Always seek the advice of your physician or other qualified health provider
                with any questions you may have regarding a medical condition. Never disregard
                professional medical advice or delay seeking it because of something you have
                read on this website.
              </p>
              <p>
                <strong>If you are experiencing a medical emergency, call 911 immediately.</strong>
              </p>

              <h2>Appointment Requests</h2>
              <p>
                Submitting an appointment request through our website does not guarantee an
                appointment. Our staff will contact you to confirm availability and schedule
                your appointment. We reserve the right to refuse service at our discretion.
              </p>

              <h2>Patient Responsibilities</h2>
              <p>As a patient, you agree to:</p>
              <ul>
                <li>Provide accurate and complete information about your health history</li>
                <li>Arrive on time for scheduled appointments</li>
                <li>Provide at least 24 hours notice for appointment cancellations</li>
                <li>Pay for services as agreed upon</li>
                <li>Follow your treatment plan as prescribed</li>
              </ul>

              <h2>Cancellation Policy</h2>
              <p>
                We require at least 24 hours notice for appointment cancellations. Late
                cancellations or no-shows may be subject to a cancellation fee. Please
                contact your local clinic for specific cancellation policies.
              </p>

              <h2>Payment and Insurance</h2>
              <p>
                We accept various insurance plans and payment methods. Insurance coverage
                varies by plan and service. You are responsible for understanding your
                insurance benefits and any out-of-pocket costs. Payment is due at the
                time of service unless other arrangements have been made.
              </p>

              <h2>Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, images, and
                software, is the property of Serenity Mental Health Centers and is protected
                by copyright and other intellectual property laws. You may not reproduce,
                distribute, or create derivative works without our written permission.
              </p>

              <h2>Website Use</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Transmit viruses or malicious code</li>
                <li>Interfere with the proper functioning of the website</li>
                <li>Collect information about other users without consent</li>
              </ul>

              <h2>Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Serenity Mental Health Centers shall
                not be liable for any indirect, incidental, special, consequential, or
                punitive damages arising from your use of the website or services.
              </p>

              <h2>Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Serenity Mental Health Centers and
                its officers, directors, employees, and agents from any claims, damages, or
                expenses arising from your use of the website or violation of these terms.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with
                the laws of the state in which services are provided, without regard to
                conflicts of law principles.
              </p>

              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes
                will be effective immediately upon posting to the website. Your continued
                use of the website after changes constitutes acceptance of the modified terms.
              </p>

              <h2>Contact Information</h2>
              <p>
                If you have questions about these Terms of Service, please contact us:
              </p>
              <ul>
                <li>Phone: {siteConfig.phone}</li>
                <li>Email: {siteConfig.email}</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
