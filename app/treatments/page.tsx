import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import PageHeader from '@/components/page/PageHeader';
import { treatments } from '@/data/treatments';
import { ArrowRight, Brain, Syringe, Pill, Heart, Focus, CheckCircle2 } from 'lucide-react';
import { NewsletterSection, CTASection } from '@/components/landing';

export const metadata: Metadata = {
  title: 'Treatments | Serenity Mental Health Centers',
  description:
    'Explore our evidence-based mental health treatments including TMS Therapy, Ketamine Therapy, Medication Management, and more.',
};

const iconMap: Record<string, React.ElementType> = {
  brain: Brain,
  syringe: Syringe,
  pill: Pill,
  heart: Heart,
  focus: Focus,
};

export default function TreatmentsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <PageHeader
          title="Our Treatments"
          description="We offer a comprehensive range of evidence-based treatments designed to help you achieve lasting mental wellness. Each treatment is tailored to your unique needs."
        />

        {/* Treatments Grid */}
        <section className="py-20 lg:py-28 bg-neutral-50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {treatments.map((treatment, index) => {
                const IconComponent = iconMap[treatment.icon || 'brain'] || Brain;
                const isReversed = index % 2 === 1;

                return (
                  <div
                    key={treatment.id}
                    className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                      index > 0 ? 'pt-16 border-t border-neutral-200' : ''
                    }`}
                  >
                    {/* Image/Icon */}
                    <div className={`relative ${isReversed ? 'lg:order-2' : ''}`}>
                      <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center overflow-hidden">
                        <div className="text-center p-8">
                          <div className="w-24 h-24 mx-auto bg-white/50 rounded-full flex items-center justify-center mb-6">
                            <IconComponent className="w-12 h-12 text-primary-600" />
                          </div>
                          <p className="text-heading-lg font-semibold text-primary-700">
                            {treatment.title}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`absolute -z-10 w-full h-full bg-primary-100/50 rounded-2xl top-4 ${
                          isReversed ? '-left-4' : '-right-4'
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <div className={isReversed ? 'lg:order-1' : ''}>
                      <h2 className="text-display-sm font-bold text-neutral-900 tracking-tight">
                        {treatment.title}
                      </h2>
                      <p className="mt-4 text-body-lg text-neutral-600">
                        {treatment.fullDescription}
                      </p>

                      {/* Benefits */}
                      <ul className="mt-8 space-y-3">
                        {treatment.benefits.slice(0, 4).map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                            <span className="text-body-md text-neutral-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={`/treatments/${treatment.id}`}
                        className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary-500 text-white font-medium rounded-full hover:bg-primary-600 transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
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
