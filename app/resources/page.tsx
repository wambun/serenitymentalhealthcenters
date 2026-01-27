import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import PageHeader from '@/components/page/PageHeader';
import {
  Phone,
  ExternalLink,
  Book,
  Heart,
  Users,
  GraduationCap,
  Shield,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';
import { NewsletterSection, CTASection } from '@/components/landing';

export const metadata: Metadata = {
  title: 'Resources | Serenity Mental Health Centers',
  description:
    'Mental health resources including crisis hotlines, community support, educational materials, and guides for patients and families.',
};

const crisisResources = [
  {
    name: '988 Suicide & Crisis Lifeline',
    description: 'Free, confidential support 24/7 for anyone in distress',
    phone: '988',
    url: 'https://988lifeline.org',
  },
  {
    name: 'Crisis Text Line',
    description: 'Text HOME to 741741 to connect with a crisis counselor',
    phone: 'Text HOME to 741741',
    url: 'https://www.crisistextline.org',
  },
  {
    name: 'SAMHSA National Helpline',
    description: 'Treatment referral service for mental health and substance abuse',
    phone: '1-800-662-4357',
    url: 'https://www.samhsa.gov/find-help/national-helpline',
  },
  {
    name: 'Veterans Crisis Line',
    description: 'Support for veterans and their families',
    phone: '1-800-273-8255 (Press 1)',
    url: 'https://www.veteranscrisisline.net',
  },
];

const educationalResources = [
  {
    title: 'Understanding Depression',
    description: 'Learn about symptoms, causes, and treatment options for depression.',
    icon: Heart,
    href: '/conditions/depression',
  },
  {
    title: 'Anxiety Disorders Guide',
    description: 'Comprehensive information about different types of anxiety disorders.',
    icon: Book,
    href: '/conditions/anxiety',
  },
  {
    title: 'TMS Therapy Explained',
    description: 'Everything you need to know about Transcranial Magnetic Stimulation.',
    icon: Shield,
    href: '/treatments/tms-therapy',
  },
  {
    title: 'Ketamine Treatment FAQ',
    description: 'Common questions about ketamine therapy for mental health.',
    icon: MessageCircle,
    href: '/treatments/ketamine-therapy',
  },
];

const communityResources = [
  {
    name: 'National Alliance on Mental Illness (NAMI)',
    description: 'Education, support groups, and advocacy for people affected by mental illness.',
    url: 'https://www.nami.org',
  },
  {
    name: 'Mental Health America',
    description: 'Screening tools, resources, and advocacy for mental health.',
    url: 'https://www.mhanational.org',
  },
  {
    name: 'Depression and Bipolar Support Alliance',
    description: 'Peer-based support and wellness tools.',
    url: 'https://www.dbsalliance.org',
  },
  {
    name: 'Anxiety and Depression Association of America',
    description: 'Education, research, and resources for anxiety and depression.',
    url: 'https://adaa.org',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <PageHeader
          title="Mental Health Resources"
          description="Access helpful resources, crisis support, and educational materials to support your mental health journey."
        />

        {/* Crisis Resources */}
        <section className="py-20 bg-red-50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-4">
                <Phone className="w-4 h-4 text-red-600" />
                <span className="text-body-sm font-medium text-red-700">
                  Crisis Support Available 24/7
                </span>
              </div>
              <h2 className="text-display-sm font-bold text-neutral-900 tracking-tight">
                If You&apos;re in Crisis, Help is Available
              </h2>
              <p className="mt-4 text-body-lg text-neutral-600 max-w-2xl mx-auto">
                If you or someone you know is in immediate danger, please call 911 or go to your nearest emergency room.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {crisisResources.map((resource) => (
                <div
                  key={resource.name}
                  className="bg-white rounded-xl p-6 shadow-sm border border-red-100 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-heading-md font-bold text-neutral-900 mb-2">
                    {resource.name}
                  </h3>
                  <p className="text-body-md text-neutral-600 mb-4">
                    {resource.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`tel:${resource.phone.replace(/\D/g, '')}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full text-body-sm font-medium hover:bg-red-600 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {resource.phone}
                    </a>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full text-body-sm font-medium hover:bg-neutral-200 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Website
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Educational Resources */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-neutral-900 tracking-tight">
                Learn About Mental Health
              </h2>
              <p className="mt-4 text-body-lg text-neutral-600 max-w-2xl mx-auto">
                Educational resources to help you understand mental health conditions and treatment options.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {educationalResources.map((resource) => {
                const Icon = resource.icon;
                return (
                  <Link
                    key={resource.title}
                    href={resource.href}
                    className="group bg-neutral-50 rounded-xl p-6 hover:bg-primary-50 transition-colors border border-neutral-100 hover:border-primary-200"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-heading-sm font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-body-sm text-neutral-600">
                      {resource.description}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1 text-body-sm font-medium text-primary-500">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* For Families Section */}
        <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-4">
                  <Users className="w-4 h-4 text-primary-600" />
                  <span className="text-body-sm font-medium text-primary-700">
                    For Families & Caregivers
                  </span>
                </div>
                <h2 className="text-display-sm font-bold text-neutral-900 tracking-tight">
                  Supporting a Loved One
                </h2>
                <p className="mt-4 text-body-lg text-neutral-600">
                  When someone you care about is struggling with mental health challenges,
                  it can be difficult to know how to help. Here are some ways you can provide support:
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    'Listen without judgment and let them know you care',
                    'Encourage them to seek professional help',
                    'Learn about their condition to better understand their experience',
                    'Take care of your own mental health too',
                    'Be patient - recovery takes time',
                  ].map((tip) => (
                    <div key={tip} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Heart className="w-3 h-3 text-primary-600" />
                      </div>
                      <span className="text-body-md text-neutral-700">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
                <GraduationCap className="w-12 h-12 text-primary-500 mb-6" />
                <h3 className="text-heading-lg font-bold text-neutral-900 mb-4">
                  College Student Resources
                </h3>
                <p className="text-body-md text-neutral-600 mb-6">
                  College can be a challenging time for mental health. We&apos;ve compiled
                  resources specifically for students navigating academic stress, anxiety,
                  and depression during their college years.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/conditions/depression"
                    className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl hover:bg-primary-50 transition-colors group"
                  >
                    <span className="text-body-md font-medium text-neutral-700 group-hover:text-primary-600">
                      Guide to Depression in College
                    </span>
                    <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                  </Link>
                  <Link
                    href="/conditions/anxiety"
                    className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl hover:bg-primary-50 transition-colors group"
                  >
                    <span className="text-body-md font-medium text-neutral-700 group-hover:text-primary-600">
                      Managing Academic Anxiety
                    </span>
                    <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                  </Link>
                  <Link
                    href="/conditions/adhd"
                    className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl hover:bg-primary-50 transition-colors group"
                  >
                    <span className="text-body-md font-medium text-neutral-700 group-hover:text-primary-600">
                      ADHD in College Students
                    </span>
                    <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Resources */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-neutral-900 tracking-tight">
                Community Organizations
              </h2>
              <p className="mt-4 text-body-lg text-neutral-600 max-w-2xl mx-auto">
                Connect with national organizations that provide support, education, and advocacy for mental health.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {communityResources.map((resource) => (
                <a
                  key={resource.name}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-neutral-50 rounded-xl p-6 hover:shadow-md transition-all border border-neutral-100 hover:border-primary-200"
                >
                  <h3 className="text-heading-md font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {resource.name}
                  </h3>
                  <p className="text-body-md text-neutral-600 mb-4">
                    {resource.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-body-sm font-medium text-primary-500">
                    Visit Website
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Patient Portal */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-display-sm font-bold text-white tracking-tight">
                    Patient Portal
                  </h2>
                  <p className="mt-4 text-body-lg text-primary-100">
                    Access your medical records, schedule appointments, message your provider,
                    and manage your care online through our secure patient portal.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                  <a
                    href="https://patientportal.serenitymentalhealthcenters.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-body-md font-medium text-primary-600 bg-white rounded-full hover:bg-primary-50 transition-colors"
                  >
                    Access Portal
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-body-md font-medium text-white border-2 border-white rounded-full hover:bg-white/10 transition-colors"
                  >
                    Need Help?
                  </Link>
                </div>
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
