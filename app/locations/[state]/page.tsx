import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { states, getStateBySlug } from '@/data/locations';
import { getProvidersByLocation } from '@/data/providers';
import {
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  ArrowLeft,
  User,
  CheckCircle,
} from 'lucide-react';
import { NewsletterSection, CTASection } from '@/components/landing';

interface PageProps {
  params: Promise<{ state: string }>;
}

export async function generateStaticParams() {
  return states.map((state) => ({
    state: state.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const state = getStateBySlug(stateSlug);

  if (!state) {
    return {
      title: 'State Not Found | Serenity Mental Health Centers',
    };
  }

  return {
    title: `${state.name} Locations | Serenity Mental Health Centers`,
    description: `Find Serenity Mental Health Centers in ${state.name}. ${state.locations.length} locations offering TMS therapy, ketamine treatment, and psychiatric care.`,
  };
}

export default async function StateLocationsPage({ params }: PageProps) {
  const { state: stateSlug } = await params;
  const state = getStateBySlug(stateSlug);

  if (!state) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary-900 to-primary-800 text-white overflow-hidden">
          {state.image && (
            <div className="absolute inset-0">
              <Image
                src={state.image}
                alt={state.name}
                fill
                className="object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 to-primary-800/90" />
            </div>
          )}
          <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-body-sm text-primary-200 hover:text-white mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              All Locations
            </Link>
            <h1 className="text-display-lg font-bold tracking-tight">
              {state.name}
            </h1>
            <p className="mt-4 text-body-xl text-primary-100 max-w-2xl">
              {state.locations.length} mental health {state.locations.length === 1 ? 'clinic' : 'clinics'} providing
              compassionate psychiatric care across {state.name}.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-full font-medium hover:bg-primary-50 transition-colors"
              >
                Book Appointment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:844-310-1649"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                844-310-1649
              </a>
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-display-sm font-bold text-neutral-900 mb-12">
              Our {state.name} Locations
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {state.locations.map((location) => {
                const providers = getProvidersByLocation(location.id);
                const psychiatrists = providers.filter(
                  (p) => p.role === 'psychiatrist' || p.role === 'chief-medical-officer'
                );
                const nps = providers.filter((p) => p.role === 'nurse-practitioner');

                return (
                  <div
                    key={location.id}
                    className="bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-heading-lg font-bold text-neutral-900">
                            {location.name}
                          </h3>
                          <p className="text-body-md text-neutral-500">{location.city}, {state.abbreviation}</p>
                        </div>
                        <div className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-body-sm font-medium">
                          <CheckCircle className="w-4 h-4" />
                          Open
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-primary-500 mt-0.5" />
                          <div>
                            <p className="text-body-md text-neutral-700">{location.address}</p>
                            <p className="text-body-md text-neutral-700">
                              {location.city}, {location.state} {location.zip}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-primary-500" />
                          <a
                            href={`tel:${location.phone}`}
                            className="text-body-md text-primary-600 hover:text-primary-700 font-medium"
                          >
                            {location.phone}
                          </a>
                        </div>
                        {location.hours && (
                          <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-primary-500" />
                            <p className="text-body-md text-neutral-600">{location.hours}</p>
                          </div>
                        )}
                      </div>

                      {/* Services */}
                      {location.services && location.services.length > 0 && (
                        <div className="mb-6">
                          <div className="flex flex-wrap gap-2">
                            {location.services.map((service) => (
                              <span
                                key={service}
                                className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-body-sm"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Providers Preview */}
                      {providers.length > 0 && (
                        <div className="pt-4 border-t border-neutral-100">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="flex -space-x-2">
                                {providers.slice(0, 4).map((provider, index) => (
                                  <div
                                    key={provider.id}
                                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center border-2 border-white"
                                    style={{ zIndex: 4 - index }}
                                  >
                                    <User className="w-4 h-4 text-primary-600" />
                                  </div>
                                ))}
                                {providers.length > 4 && (
                                  <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center border-2 border-white text-body-xs font-medium text-neutral-600">
                                    +{providers.length - 4}
                                  </div>
                                )}
                              </div>
                              <span className="text-body-sm text-neutral-500">
                                {psychiatrists.length} {psychiatrists.length === 1 ? 'psychiatrist' : 'psychiatrists'},
                                {' '}{nps.length} {nps.length === 1 ? 'NP' : 'NPs'}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="mt-6 flex gap-3">
                        <Link
                          href={`/locations/${state.id}/${location.id}`}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary-500 text-white rounded-full font-medium hover:bg-primary-600 transition-colors text-body-sm"
                        >
                          View Details
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                          href={`tel:${location.phone}`}
                          className="inline-flex items-center justify-center px-4 py-3 border border-neutral-200 text-neutral-700 rounded-full hover:border-primary-300 hover:text-primary-600 transition-colors"
                        >
                          <Phone className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Available */}
        <section className="py-20 bg-neutral-50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-neutral-900 tracking-tight">
                Services in {state.name}
              </h2>
              <p className="mt-4 text-body-lg text-neutral-600 max-w-2xl mx-auto">
                All our {state.name} locations offer comprehensive mental health services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'TMS Therapy',
                  description: 'FDA-cleared treatment for depression using magnetic stimulation.',
                  href: '/treatments/tms-therapy',
                },
                {
                  title: 'Ketamine Therapy',
                  description: 'Innovative treatment for treatment-resistant depression.',
                  href: '/treatments/ketamine-therapy',
                },
                {
                  title: 'Medication Management',
                  description: 'Expert psychiatric medication evaluation and monitoring.',
                  href: '/treatments/medication-management',
                },
                {
                  title: 'ADHD Testing',
                  description: 'Comprehensive ADHD evaluation and treatment planning.',
                  href: '/treatments/adhd-management',
                },
              ].map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-neutral-100"
                >
                  <h3 className="text-heading-md font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-body-md text-neutral-600">{service.description}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-body-sm font-medium text-primary-500">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Other States */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-heading-lg font-bold text-neutral-900 mb-8">
              Explore Other States
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {states
                .filter((s) => s.id !== state.id)
                .map((otherState) => (
                  <Link
                    key={otherState.id}
                    href={`/locations/${otherState.id}`}
                    className="group bg-neutral-50 rounded-xl p-4 text-center hover:bg-primary-50 transition-colors border border-neutral-100 hover:border-primary-200"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-2 group-hover:bg-primary-200 transition-colors">
                      <span className="text-primary-600 font-bold text-body-sm">
                        {otherState.abbreviation}
                      </span>
                    </div>
                    <h3 className="text-body-sm font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                      {otherState.name}
                    </h3>
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
