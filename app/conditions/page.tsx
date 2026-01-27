import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import PageHeader from '@/components/page/PageHeader';
import { conditions } from '@/data/conditions';
import { ArrowRight, CloudRain, Activity, TrendingUp, ShieldAlert, Repeat, Zap } from 'lucide-react';
import { NewsletterSection, CTASection } from '@/components/landing';

export const metadata: Metadata = {
  title: 'Conditions We Treat | Serenity Mental Health Centers',
  description:
    'We specialize in treating depression, anxiety, PTSD, bipolar disorder, OCD, ADHD, and other mental health conditions with evidence-based care.',
};

const iconMap: Record<string, React.ElementType> = {
  'cloud-rain': CloudRain,
  activity: Activity,
  'trending-up-down': TrendingUp,
  'shield-alert': ShieldAlert,
  repeat: Repeat,
  zap: Zap,
};

export default function ConditionsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <PageHeader
          title="Conditions We Treat"
          description="Our team of experienced psychiatrists specializes in treating a range of mental health conditions using evidence-based approaches tailored to your unique needs."
        />

        {/* Conditions Grid */}
        <section className="py-20 lg:py-28 bg-neutral-50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {conditions.map((condition) => {
                const IconComponent = iconMap[condition.icon || 'cloud-rain'] || CloudRain;

                return (
                  <Link
                    key={condition.id}
                    href={`/conditions/${condition.id}`}
                    className="group p-8 bg-white rounded-2xl border border-neutral-200 hover:border-primary-300 hover:shadow-lg transition-all"
                  >
                    <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                      <IconComponent className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
                    </div>

                    <h2 className="mt-6 text-heading-xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                      {condition.title}
                    </h2>

                    <p className="mt-3 text-body-md text-neutral-600">
                      {condition.shortDescription}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {condition.treatments.slice(0, 2).map((treatmentId) => (
                        <span
                          key={treatmentId}
                          className="px-3 py-1 bg-neutral-100 rounded-full text-caption text-neutral-600"
                        >
                          {treatmentId.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-2 mt-6 text-body-sm font-medium text-primary-500 group-hover:text-primary-600">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
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
