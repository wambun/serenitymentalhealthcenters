import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { conditions, getConditionBySlug } from '@/data/conditions';
import { treatments } from '@/data/treatments';
import { ArrowRight, ArrowLeft, AlertCircle, CloudRain, Activity, TrendingUp, ShieldAlert, Repeat, Zap } from 'lucide-react';
import { NewsletterSection, CTASection } from '@/components/landing';

const iconMap: Record<string, React.ElementType> = {
  'cloud-rain': CloudRain,
  activity: Activity,
  'trending-up-down': TrendingUp,
  'shield-alert': ShieldAlert,
  repeat: Repeat,
  zap: Zap,
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return conditions.map((condition) => ({
    slug: condition.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);

  if (!condition) {
    return {
      title: 'Condition Not Found | Serenity Mental Health Centers',
    };
  }

  return {
    title: `${condition.title} Treatment | Serenity Mental Health Centers`,
    description: condition.shortDescription,
  };
}

export default async function ConditionDetailPage({ params }: Props) {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);

  if (!condition) {
    notFound();
  }

  const IconComponent = iconMap[condition.icon || 'cloud-rain'] || CloudRain;

  // Get related treatments
  const relatedTreatments = treatments.filter((treatment) =>
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
              href="/conditions"
              className="inline-flex items-center gap-2 text-body-sm text-neutral-500 hover:text-primary-500 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Conditions
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
                    Condition
                  </span>
                </div>

                <h1 className="text-display-md sm:text-display-lg font-bold text-neutral-900 tracking-tight">
                  {condition.title}
                </h1>

                <p className="mt-6 text-body-lg text-neutral-600">
                  {condition.fullDescription}
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/appointment"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-body-md font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-colors"
                  >
                    Get Help Today
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

        {/* Symptoms Section */}
        <section className="py-20 lg:py-28 bg-neutral-50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <h2 className="text-display-sm font-bold text-neutral-900 tracking-tight">
                Common Symptoms
              </h2>
              <p className="mt-4 text-body-lg text-neutral-600">
                Recognizing the signs of {condition.title.toLowerCase()} is the first step toward getting help.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {condition.symptoms.map((symptom, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-2xl border border-neutral-200"
                >
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <AlertCircle className="w-5 h-5 text-primary-600" />
                  </div>
                  <p className="text-body-md font-medium text-neutral-900">
                    {symptom}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Options */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <h2 className="text-display-sm font-bold text-neutral-900 tracking-tight">
                Treatment Options
              </h2>
              <p className="mt-4 text-body-lg text-neutral-600">
                We offer several effective treatment approaches for {condition.title.toLowerCase()}.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedTreatments.map((treatment) => (
                <Link
                  key={treatment.id}
                  href={`/treatments/${treatment.id}`}
                  className="group p-8 bg-neutral-50 rounded-2xl hover:bg-primary-50 transition-colors"
                >
                  <h3 className="text-heading-lg font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="mt-3 text-body-md text-neutral-600">
                    {treatment.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-6 text-body-sm font-medium text-primary-500">
                    Learn about this treatment
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
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
