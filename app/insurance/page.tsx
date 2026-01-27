import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import PageHeader from '@/components/page/PageHeader';
import { insuranceByState, insuranceDisclaimer, majorCarriers } from '@/data/insurance';
import { Check, Phone, ArrowRight, Shield, CreditCard, HelpCircle } from 'lucide-react';
import { NewsletterSection, CTASection } from '@/components/landing';

export const metadata: Metadata = {
  title: 'Insurance | Serenity Mental Health Centers',
  description:
    'We accept most major insurance plans including Aetna, BlueCross BlueShield, Cigna, Humana, UnitedHealthcare, Medicare, TriCare, and more.',
};

const majorInsuranceLogos = [
  { name: 'Aetna', color: '#7C3AED' },
  { name: 'BlueCross BlueShield', color: '#2563EB' },
  { name: 'Cigna', color: '#EA580C' },
  { name: 'Humana', color: '#16A34A' },
  { name: 'UnitedHealthcare', color: '#2563EB' },
  { name: 'Medicare', color: '#DC2626' },
  { name: 'TriCare', color: '#0891B2' },
  { name: 'Optum', color: '#EA580C' },
];

export default function InsurancePage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <PageHeader
          title="Insurance & Payment"
          description="We believe mental health care should be accessible. We accept most major insurance plans and offer flexible payment options."
        />

        {/* Major Insurance Logos */}
        <section className="py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-neutral-900 tracking-tight">
                We Accept Most Major Insurance Plans
              </h2>
              <p className="mt-4 text-body-lg text-neutral-600 max-w-2xl mx-auto">
                Over 20+ insurance carriers accepted across our locations
              </p>
            </div>

            {/* Insurance Logo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {majorInsuranceLogos.map((insurance) => (
                <div
                  key={insurance.name}
                  className="flex items-center justify-center p-6 bg-neutral-50 rounded-xl border border-neutral-100 hover:border-primary-200 hover:shadow-md transition-all"
                >
                  <div className="text-center">
                    <div
                      className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                      style={{ backgroundColor: `${insurance.color}15` }}
                    >
                      <Shield
                        className="w-6 h-6"
                        style={{ color: insurance.color }}
                      />
                    </div>
                    <span className="text-body-sm font-medium text-neutral-700">
                      {insurance.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits of Using Insurance */}
        <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-display-sm font-bold text-neutral-900 tracking-tight">
                  Using Your Insurance Benefits
                </h2>
                <p className="mt-4 text-body-lg text-neutral-600">
                  Most insurance plans cover mental health services, including TMS therapy,
                  ketamine treatment, and medication management. Our team will work with
                  your insurance to maximize your benefits.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    'Free insurance verification before your first visit',
                    'We handle prior authorizations for treatments',
                    'Transparent cost estimates upfront',
                    'Assistance with appeals if coverage is denied',
                    'Flexible payment plans for remaining balances',
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-body-md text-neutral-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href="/appointment"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-body-md font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/25"
                  >
                    Verify My Insurance
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-neutral-100">
                <h3 className="text-heading-lg font-bold text-neutral-900 mb-6">
                  Quick Insurance Check
                </h3>
                <p className="text-body-md text-neutral-600 mb-6">
                  Call us with your insurance information and we&apos;ll verify your coverage
                  within 24 hours.
                </p>
                <a
                  href="tel:844-310-1649"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-body-md font-medium">Call 844-310-1649</span>
                </a>
                <p className="mt-4 text-body-sm text-neutral-500 text-center">
                  Have your insurance card ready
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance by State */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-neutral-900 tracking-tight">
                Insurance Accepted by State
              </h2>
              <p className="mt-4 text-body-lg text-neutral-600 max-w-2xl mx-auto">
                Coverage may vary by location. Contact your local clinic to verify your specific plan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {insuranceByState.map((state) => (
                <div
                  key={state.abbreviation}
                  className="bg-neutral-50 rounded-xl p-6 hover:shadow-md transition-shadow border border-neutral-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-sm">
                        {state.abbreviation}
                      </span>
                    </div>
                    <h3 className="text-heading-md font-bold text-neutral-900">
                      {state.state}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {state.carriers.slice(0, 8).map((carrier) => (
                      <span
                        key={carrier}
                        className="px-3 py-1 bg-white rounded-full text-body-sm text-neutral-600 border border-neutral-200"
                      >
                        {carrier}
                      </span>
                    ))}
                    {state.carriers.length > 8 && (
                      <span className="px-3 py-1 text-body-sm text-primary-600 font-medium">
                        +{state.carriers.length - 8} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-body-md text-amber-800">
                <strong>Please note:</strong> {insuranceDisclaimer}
              </p>
            </div>
          </div>
        </section>

        {/* Payment Options */}
        <section className="py-20 bg-neutral-50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-neutral-900 tracking-tight">
                Flexible Payment Options
              </h2>
              <p className="mt-4 text-body-lg text-neutral-600 max-w-2xl mx-auto">
                Don&apos;t have insurance? We offer several payment options to make treatment accessible.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-neutral-100">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-6">
                  <CreditCard className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-heading-md font-bold text-neutral-900 mb-3">
                  Self-Pay Options
                </h3>
                <p className="text-body-md text-neutral-600">
                  Competitive self-pay rates with transparent pricing.
                  No hidden fees or surprise charges.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-neutral-100">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-heading-md font-bold text-neutral-900 mb-3">
                  Payment Plans
                </h3>
                <p className="text-body-md text-neutral-600">
                  Flexible monthly payment plans available.
                  Spread the cost of treatment over time.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-neutral-100">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                  <HelpCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-heading-md font-bold text-neutral-900 mb-3">
                  Financial Assistance
                </h3>
                <p className="text-body-md text-neutral-600">
                  Ask about our financial assistance programs
                  for qualifying patients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-display-sm font-bold text-neutral-900 tracking-tight">
                  Insurance FAQs
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    question: 'How do I verify my insurance coverage?',
                    answer:
                      'Call us at 844-310-1649 with your insurance information, and we\'ll verify your benefits within 24 hours. You can also submit your information online when booking an appointment.',
                  },
                  {
                    question: 'Is TMS therapy covered by insurance?',
                    answer:
                      'Yes, most major insurance plans cover TMS therapy for treatment-resistant depression. Our team will handle prior authorizations and work with your insurance to maximize coverage.',
                  },
                  {
                    question: 'What if my insurance doesn\'t cover my treatment?',
                    answer:
                      'We offer competitive self-pay rates and flexible payment plans. Our financial team can discuss options to make treatment accessible for you.',
                  },
                  {
                    question: 'Do you accept Medicare?',
                    answer:
                      'Yes, we accept Medicare at most of our locations. Medicare covers many of our services including psychiatric evaluations and TMS therapy.',
                  },
                  {
                    question: 'Will I have any out-of-pocket costs?',
                    answer:
                      'This depends on your specific insurance plan. After verifying your benefits, we\'ll provide a clear estimate of any copays, deductibles, or coinsurance you may owe.',
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-neutral-50 rounded-xl p-6 border border-neutral-100"
                  >
                    <h3 className="text-heading-sm font-bold text-neutral-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-body-md text-neutral-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />

        {/* Newsletter */}
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
