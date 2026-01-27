import { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import PageHeader from '@/components/page/PageHeader';
import { Heart, Shield, Users, Award, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
import { NewsletterSection, CTASection } from '@/components/landing';

export const metadata: Metadata = {
  title: 'About Us | Serenity Mental Health Centers',
  description:
    'Learn about Serenity Mental Health Centers, our mission, and our commitment to providing accessible, personalized mental health care since 2017.',
};

const values = [
  {
    icon: Heart,
    title: 'Compassionate Care',
    description:
      'We treat every patient with empathy, understanding, and respect throughout their healing journey.',
  },
  {
    icon: Shield,
    title: 'Evidence-Based Treatment',
    description:
      'Our treatments are backed by scientific research and proven clinical outcomes.',
  },
  {
    icon: Users,
    title: 'Personalized Approach',
    description:
      'Every treatment plan is tailored to your unique needs, circumstances, and goals.',
  },
  {
    icon: Award,
    title: 'Clinical Excellence',
    description:
      'Our team of experienced psychiatrists and providers are leaders in their fields.',
  },
  {
    icon: Clock,
    title: 'Accessible Care',
    description:
      'We offer flexible scheduling and multiple locations to make care accessible.',
  },
  {
    icon: MapPin,
    title: 'Community Focus',
    description:
      'We are committed to serving our local communities with quality mental health services.',
  },
];

const milestones = [
  { year: '2017', title: 'Founded', description: 'Serenity Mental Health Centers opens its first clinic' },
  { year: '2018', title: 'TMS Expansion', description: 'Introduced TMS therapy as a core treatment offering' },
  { year: '2019', title: 'Multi-State', description: 'Expanded operations to serve multiple states' },
  { year: '2021', title: 'Ketamine Program', description: 'Launched ketamine therapy for treatment-resistant conditions' },
  { year: '2023', title: '10,000 Patients', description: 'Reached milestone of helping over 10,000 patients' },
  { year: '2024', title: '8+ States', description: 'Now serving communities across 8+ states nationwide' },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header - HealthWell Style */}
        <PageHeader
          title="Our Mission"
          description="At Serenity Mental Health Centers, our mission is to empower individuals to take control of their mental health and well-being through innovative treatments, personalized care, and comprehensive support."
        />

        {/* Our Story Section */}
        <section className="py-20 lg:py-28 bg-neutral-50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Images Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <Heart className="w-16 h-16 text-primary-500" />
                  </div>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary-600" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <Shield className="w-12 h-12 text-primary-500" />
                  </div>
                  <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
                    <Award className="w-16 h-16 text-primary-600" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-display-sm sm:text-display-md font-bold text-neutral-900 tracking-tight">
                  Our Story
                </h2>
                <div className="mt-6 space-y-4 text-body-lg text-neutral-600">
                  <p>
                    Serenity Mental Health Centers was founded in 2017 with a simple but
                    powerful mission: to provide accessible, effective mental health care
                    to those who need it most.
                  </p>
                  <p>
                    Our founders recognized a growing need for innovative treatment options
                    beyond traditional approaches. Many patients were struggling with
                    treatment-resistant depression and anxiety, feeling hopeless after
                    trying multiple medications without success.
                  </p>
                  <p>
                    Today, we have grown from a single clinic to a network of facilities
                    serving communities across multiple states. Our team of experienced
                    psychiatrists and mental health professionals continues to lead the
                    way in providing cutting-edge treatments like TMS therapy and ketamine
                    infusions.
                  </p>
                </div>
                <Link
                  href="/treatments"
                  className="inline-flex items-center gap-2 mt-8 text-primary-500 font-medium hover:text-primary-600 transition-colors"
                >
                  Explore Our Treatments
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-display-sm sm:text-display-md font-bold text-neutral-900 tracking-tight">
                Our Values
              </h2>
              <p className="mt-4 text-body-lg text-neutral-600">
                These core principles guide everything we do at Serenity Mental Health Centers.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-6 bg-neutral-50 rounded-2xl hover:bg-primary-50 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="mt-4 text-heading-lg font-semibold text-neutral-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-body-md text-neutral-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 lg:py-28 bg-neutral-50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-display-sm sm:text-display-md font-bold text-neutral-900 tracking-tight">
                Our Journey
              </h2>
              <p className="mt-4 text-body-lg text-neutral-600">
                Key milestones in our mission to transform mental health care.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-2xl border border-neutral-200"
                >
                  <div className="text-display-sm font-bold text-primary-500">
                    {milestone.year}
                  </div>
                  <h3 className="mt-2 text-heading-lg font-semibold text-neutral-900">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-body-md text-neutral-600">
                    {milestone.description}
                  </p>
                </div>
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
