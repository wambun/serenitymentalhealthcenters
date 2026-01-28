import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import PageHeader from '@/components/page/PageHeader';
import { states, getStatesCount, getLocationsCount } from '@/data/locations';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import { NewsletterSection, CTASection } from '@/components/landing';

export const metadata: Metadata = {
  title: 'Locations | Serenity Mental Health Centers',
  description:
    'Find a Serenity Mental Health Centers location near you. We have clinics across 8+ states offering TMS therapy, ketamine treatment, and medication management.',
};

export default function LocationsPage() {
  const statesCount = getStatesCount();
  const locationsCount = getLocationsCount();

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <PageHeader
          title="Our Locations"
          description={`Find a Serenity Mental Health Centers clinic near you. We operate ${locationsCount} locations across ${statesCount} states, bringing quality mental health care to communities nationwide.`}
        />

        {/* Stats Bar */}
        <section className="py-12 bg-primary-500">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-display-sm font-bold text-white">{statesCount}+</div>
                <div className="text-body-sm text-primary-100">States Served</div>
              </div>
              <div className="text-center">
                <div className="text-display-sm font-bold text-white">{locationsCount}+</div>
                <div className="text-body-sm text-primary-100">Clinic Locations</div>
              </div>
              <div className="text-center">
                <div className="text-display-sm font-bold text-white">10K+</div>
                <div className="text-body-sm text-primary-100">Patients Helped</div>
              </div>
              <div className="text-center">
                <div className="text-display-sm font-bold text-white">24/7</div>
                <div className="text-body-sm text-primary-100">Support Line</div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations by State */}
        <section className="py-20 lg:py-28 bg-neutral-50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <h2 className="text-display-sm font-bold text-neutral-900 tracking-tight">
                Find a Location Near You
              </h2>
              <p className="mt-4 text-body-lg text-neutral-600">
                Select a state to view our available clinic locations and services offered.
              </p>
            </div>

            <div className="space-y-8">
              {states.map((state, index) => {
                // Alternate gradient directions for visual variety
                const gradients = [
                  'from-primary-500 via-primary-600 to-primary-700',
                  'from-primary-600 via-primary-500 to-primary-600',
                  'from-primary-700 via-primary-600 to-primary-500',
                  'from-primary-500 to-primary-700',
                ];
                const gradient = gradients[index % gradients.length];

                return (
                  <div
                    key={state.id}
                    className="bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="grid lg:grid-cols-3">
                      {/* State Gradient Card */}
                      <div className={`relative h-48 lg:h-auto lg:min-h-[280px] bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                        {/* Decorative pattern overlay */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-4 left-4 w-24 h-24 border-2 border-white rounded-full" />
                          <div className="absolute bottom-4 right-4 w-32 h-32 border-2 border-white rounded-full" />
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white rounded-full" />
                        </div>

                        {/* State Info */}
                        <div className="relative z-10 text-center text-white p-6">
                          <div className="text-7xl lg:text-8xl font-bold tracking-tight opacity-90">
                            {state.abbreviation}
                          </div>
                          <div className="mt-2 text-xl lg:text-2xl font-semibold">
                            {state.name}
                          </div>
                          <div className="mt-2 inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                            <MapPin className="w-4 h-4" aria-hidden="true" />
                            {state.locations.length} {state.locations.length === 1 ? 'location' : 'locations'}
                          </div>
                        </div>
                      </div>

                      {/* Locations */}
                      <div className="lg:col-span-2 p-6 lg:p-8">
                        <div className="grid sm:grid-cols-2 gap-4">
                          {state.locations.map((location) => (
                            <div
                              key={location.id}
                              className="p-5 bg-neutral-50 rounded-xl hover:bg-primary-50 transition-colors group"
                            >
                              <h4 className="text-heading-md font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                                {location.name}
                              </h4>

                              <div className="mt-3 space-y-2">
                                {location.address && (
                                  <div className="flex items-start gap-2 text-body-sm text-neutral-600">
                                    <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                                    <span>
                                      {location.address}
                                      <br />
                                      {location.city}, {state.abbreviation} {location.zip}
                                    </span>
                                  </div>
                                )}
                                <div className="flex items-center gap-2 text-body-sm text-neutral-600">
                                  <Phone className="w-4 h-4 text-primary-500 flex-shrink-0" aria-hidden="true" />
                                  <a
                                    href={`tel:${location.phone}`}
                                    className="hover:text-primary-600 transition-colors font-medium"
                                  >
                                    {location.phone}
                                  </a>
                                </div>
                                {location.hours && (
                                  <div className="flex items-center gap-2 text-body-sm text-neutral-600">
                                    <Clock className="w-4 h-4 text-primary-500 flex-shrink-0" aria-hidden="true" />
                                    <span>{location.hours}</span>
                                  </div>
                                )}
                              </div>

                              {location.services && location.services.length > 0 && (
                                <div className="mt-3 flex flex-wrap gap-1.5">
                                  {location.services.slice(0, 3).map((service) => (
                                    <span
                                      key={service}
                                      className="px-2 py-0.5 bg-white rounded-full text-xs text-neutral-600 border border-neutral-200"
                                    >
                                      {service}
                                    </span>
                                  ))}
                                  {location.services.length > 3 && (
                                    <span className="px-2 py-0.5 text-xs text-neutral-500">
                                      +{location.services.length - 3} more
                                    </span>
                                  )}
                                </div>
                              )}

                              <Link
                                href="/appointment"
                                className="inline-flex items-center gap-1.5 mt-4 text-body-sm font-medium text-primary-500 hover:text-primary-600"
                              >
                                Book appointment
                                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Banner */}
        <section className="py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-display-sm font-bold text-white tracking-tight">
                Can&apos;t Find a Location Near You?
              </h2>
              <p className="mt-4 text-body-lg text-primary-100 max-w-2xl mx-auto">
                We&apos;re expanding rapidly. Contact us to learn about upcoming locations or inquire about telehealth options.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-body-md font-medium text-primary-600 bg-white rounded-full hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-500 transition-colors"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
                <a
                  href="tel:844-310-1649"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-body-md font-medium text-white border-2 border-white rounded-full hover:bg-white/10 transition-colors"
                >
                  Call 844-310-1649
                </a>
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
