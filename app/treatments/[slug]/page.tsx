import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { treatments, getTreatmentBySlug } from '@/data/treatments';
import { conditions } from '@/data/conditions';
import { ArrowRight, CheckCircle2, Brain, Syringe, Pill, Heart, Focus, ArrowLeft } from 'lucide-react';
import { NewsletterSection, CTASection } from '@/components/landing';

const iconMap: Record<string, React.ElementType> = {
  brain: Brain,
  syringe: Syringe,
  pill: Pill,
  heart: Heart,
  focus: Focus,
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return treatments.map((treatment) => ({
    slug: treatment.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    return {
      title: 'Treatment Not Found | Serenity Mental Health Centers',
    };
  }

  return {
    title: `${treatment.title} | Serenity Mental Health Centers`,
    description: treatment.shortDescription,
  };
}

export default async function TreatmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    notFound();
  }

  const IconComponent = iconMap[treatment.icon || 'brain'] || Brain;

  // Find related conditions that use this treatment
  const relatedConditions = conditions.filter((condition) =>
    condition.treatments.includes(treatment.id)
  );

  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="pt-28 lg:pt-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 text-body-sm text-neutral-500 hover:text-primary-500 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Treatments
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-8 pb-16 lg:pb-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
                  <IconComponent className="w-4 h-4 text-primary-500" />
                  <span className="text-body-sm font-medium text-primary-600">
                    Treatment
                  </span>
                </div>

                <h1 className="text-display-md sm:text-display-lg font-bold text-neutral-900 tracking-tight">
                  {treatment.title}
                </h1>

                <p className="mt-6 text-body-lg text-neutral-600">
                  {treatment.fullDescription}
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/appointment"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-body-md font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-colors"
                  >
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="tel:844-310-1649"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-body-md font-medium text-neutral-700 border border-neutral-200 rounded-full hover:border-primary-500 hover:text-primary-600 transition-colors"
                  >
                    Call 844-310-1649
                  </a>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <IconComponent className="w-32 h-32 text-primary-500" />
                </div>
                <div className="absolute -z-10 w-full h-full bg-primary-100/50 rounded-2xl top-4 -right-4" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 lg:py-28 bg-neutral-50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <h2 className="text-display-sm font-bold text-neutral-900 tracking-tight">
                Benefits
              </h2>
              <p className="mt-4 text-body-lg text-neutral-600">
                Discover how {treatment.title} can help improve your mental health.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatment.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-2xl border border-neutral-200"
                >
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-5 h-5 text-primary-600" />
                  </div>
                  <p className="text-body-md font-medium text-neutral-900">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        {treatment.process && treatment.process.length > 0 && (
          <section className="py-20 lg:py-28 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mb-12">
                <h2 className="text-display-sm font-bold text-neutral-900 tracking-tight">
                  Treatment Process
                </h2>
                <p className="mt-4 text-body-lg text-neutral-600">
                  Here&apos;s what you can expect during your {treatment.title} journey.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {treatment.process.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="text-display-md font-bold text-primary-100">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="mt-2 text-heading-lg font-semibold text-neutral-900">
                      Step {index + 1}
                    </h3>
                    <p className="mt-2 text-body-md text-neutral-600">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Conditions */}
        {relatedConditions.length > 0 && (
          <section className="py-20 lg:py-28 bg-neutral-50">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mb-12">
                <h2 className="text-display-sm font-bold text-neutral-900 tracking-tight">
                  Conditions Treated
                </h2>
                <p className="mt-4 text-body-lg text-neutral-600">
                  {treatment.title} can be effective for treating these conditions.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedConditions.map((condition) => (
                  <Link
                    key={condition.id}
                    href={`/conditions/${condition.id}`}
                    className="p-6 bg-white rounded-2xl border border-neutral-200 hover:border-primary-300 hover:shadow-md transition-all group"
                  >
                    <h3 className="text-heading-lg font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                      {condition.title}
                    </h3>
                    <p className="mt-2 text-body-sm text-neutral-600">
                      {condition.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-4 text-body-sm font-medium text-primary-500">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <CTASection />

        {/* Newsletter */}
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
