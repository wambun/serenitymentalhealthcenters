import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import PageHeader from '@/components/page/PageHeader';
import {
  MapPin,
  Briefcase,
  Heart,
  Users,
  TrendingUp,
  Award,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { NewsletterSection, CTASection } from '@/components/landing';
import { states } from '@/data/locations';

export const metadata: Metadata = {
  title: 'Careers | Serenity Mental Health Centers',
  description:
    'Join our team of mental health professionals. We are hiring psychiatrists, nurse practitioners, and support staff across 8+ states.',
};

const benefits = [
  {
    icon: Heart,
    title: 'Comprehensive Health Benefits',
    description: 'Medical, dental, and vision coverage for you and your family.',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Ongoing training, education stipends, and advancement opportunities.',
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description: 'Work alongside passionate professionals who share your mission.',
  },
  {
    icon: Award,
    title: 'Competitive Compensation',
    description: 'Industry-leading salaries with performance bonuses.',
  },
];

const openPositions = [
  {
    title: 'Psychiatrist (MD/DO)',
    type: 'Full-time',
    locations: ['Arizona', 'Colorado', 'Texas', 'Florida'],
    description:
      'Join our team of board-certified psychiatrists providing comprehensive mental health care including TMS and ketamine therapy.',
  },
  {
    title: 'Psychiatric Nurse Practitioner (PMHNP)',
    type: 'Full-time',
    locations: ['All Locations'],
    description:
      'Provide psychiatric evaluations, medication management, and patient education in a supportive clinical environment.',
  },
  {
    title: 'TMS Technician',
    type: 'Full-time',
    locations: ['Georgia', 'Nevada', 'Utah'],
    description:
      'Administer TMS treatments under physician supervision. Training provided for qualified candidates.',
  },
  {
    title: 'Patient Care Coordinator',
    type: 'Full-time',
    locations: ['All Locations'],
    description:
      'Support patients through their treatment journey, managing scheduling, insurance verification, and care coordination.',
  },
  {
    title: 'Front Office Manager',
    type: 'Full-time',
    locations: ['Texas', 'Colorado'],
    description:
      'Lead front office operations, supervise staff, and ensure exceptional patient experiences.',
  },
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <PageHeader
          title="Join Our Team"
          description="Build a rewarding career helping people heal. We're looking for passionate mental health professionals to join our growing team."
        />

        {/* Why Join Us */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-display-sm font-bold text-neutral-900 tracking-tight">
                  Why Join Serenity?
                </h2>
                <p className="mt-4 text-body-lg text-neutral-600">
                  At Serenity Mental Health Centers, we&apos;re on a mission to transform mental
                  health care. We combine cutting-edge treatments like TMS and ketamine therapy
                  with compassionate, patient-centered care.
                </p>
                <p className="mt-4 text-body-lg text-neutral-600">
                  We&apos;re growing rapidly, with {states.length} states and counting. Join us and make
                  a real difference in people&apos;s lives while advancing your career.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-body-md text-neutral-700">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>100+ Mental Health Professionals</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-md text-neutral-700">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>30+ Clinic Locations</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-md text-neutral-700">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Rapidly Growing Company</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={benefit.title}
                      className="bg-neutral-50 rounded-xl p-6 border border-neutral-100"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <h3 className="text-heading-sm font-bold text-neutral-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-body-sm text-neutral-600">
                        {benefit.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-neutral-50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-neutral-900 tracking-tight">
                Open Positions
              </h2>
              <p className="mt-4 text-body-lg text-neutral-600 max-w-2xl mx-auto">
                Explore current opportunities at Serenity Mental Health Centers.
              </p>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {openPositions.map((position) => (
                <div
                  key={position.title}
                  className="bg-white rounded-xl p-6 border border-neutral-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-heading-md font-bold text-neutral-900">
                          {position.title}
                        </h3>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-body-sm font-medium">
                          {position.type}
                        </span>
                      </div>
                      <p className="text-body-md text-neutral-600 mb-3">
                        {position.description}
                      </p>
                      <div className="flex items-center gap-2 text-body-sm text-neutral-500">
                        <MapPin className="w-4 h-4" />
                        <span>{position.locations.join(', ')}</span>
                      </div>
                    </div>
                    <div>
                      <a
                        href={`mailto:careers@serenitymentalhealthcenters.com?subject=Application: ${position.title}`}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-body-md font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-colors"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-body-lg text-neutral-600 mb-4">
                Don&apos;t see a position that fits? We&apos;re always looking for talented people.
              </p>
              <a
                href="mailto:careers@serenitymentalhealthcenters.com"
                className="inline-flex items-center gap-2 text-body-md font-medium text-primary-500 hover:text-primary-600"
              >
                Send us your resume
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Locations Hiring */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-neutral-900 tracking-tight">
                Where We&apos;re Hiring
              </h2>
              <p className="mt-4 text-body-lg text-neutral-600 max-w-2xl mx-auto">
                We have opportunities across all our locations. Choose a state to explore.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {states.map((state) => (
                <Link
                  key={state.id}
                  href="/locations"
                  className="group bg-neutral-50 rounded-xl p-6 text-center hover:bg-primary-50 transition-colors border border-neutral-100 hover:border-primary-200"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-200 transition-colors">
                    <span className="text-primary-600 font-bold">
                      {state.abbreviation}
                    </span>
                  </div>
                  <h3 className="text-heading-sm font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                    {state.name}
                  </h3>
                  <p className="text-body-sm text-neutral-500 mt-1">
                    {state.locations.length} {state.locations.length === 1 ? 'location' : 'locations'}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-display-sm font-bold text-neutral-900 tracking-tight">
                Our Culture
              </h2>
              <p className="mt-6 text-body-lg text-neutral-600">
                We believe in treating our team members with the same care and respect we show our patients.
                At Serenity, you&apos;ll find a supportive environment where you can grow professionally
                while making a meaningful impact on people&apos;s lives.
              </p>

              <div className="mt-12 grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-display-sm font-bold text-primary-500">100%</div>
                  <div className="text-body-md text-neutral-600">Mission-Driven Team</div>
                </div>
                <div className="text-center">
                  <div className="text-display-sm font-bold text-primary-500">95%</div>
                  <div className="text-body-md text-neutral-600">Employee Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-display-sm font-bold text-primary-500">4.9</div>
                  <div className="text-body-md text-neutral-600">Glassdoor Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 md:p-12 text-center">
              <Briefcase className="w-16 h-16 text-white/80 mx-auto mb-6" />
              <h2 className="text-display-sm font-bold text-white tracking-tight">
                Ready to Make a Difference?
              </h2>
              <p className="mt-4 text-body-lg text-primary-100 max-w-2xl mx-auto">
                Join our team of dedicated mental health professionals and help transform lives.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@serenitymentalhealthcenters.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-body-md font-medium text-primary-600 bg-white rounded-full hover:bg-primary-50 transition-colors"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-body-md font-medium text-white border-2 border-white rounded-full hover:bg-white/10 transition-colors"
                >
                  Contact HR
                </Link>
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
