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

            <div className="space-y-12">
              {states.map((state) => (
                <div key={state.id} className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
                  {/* State Header */}
                  <div className="px-8 py-6 bg-neutral-50 border-b border-neutral-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="text-heading-xl font-bold text-neutral-900">
                            {state.name}
                          </h3>
                          <p className="text-body-sm text-neutral-500">
                            {state.locations.length} {state.locations.length === 1 ? 'location' : 'locations'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Locations Grid */}
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      {state.locations.map((location) => (
                        <div
                          key={location.id}
                          className="p-6 bg-neutral-50 rounded-xl hover:bg-primary-50 transition-colors group"
                        >
                          <h4 className="text-heading-lg font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                            {location.name}
                          </h4>

                          <div className="mt-4 space-y-2">
                            <div className="flex items-center gap-2 text-body-sm text-neutral-600">
                              <Phone className="w-4 h-4 text-primary-500" />
                              <a
                                href={`tel:${location.phone}`}
                                className="hover:text-primary-600 transition-colors"
                              >
                                {location.phone}
                              </a>
                            </div>
                            <div className="flex items-center gap-2 text-body-sm text-neutral-600">
                              <Clock className="w-4 h-4 text-primary-500" />
                              <span>Mon-Fri: 8am - 5pm</span>
                            </div>
                          </div>

                          {location.services && location.services.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {location.services.map((service) => (
                                <span
                                  key={service}
                                  className="px-3 py-1 bg-white rounded-full text-caption text-neutral-600 border border-neutral-200"
                                >
                                  {service}
                                </span>
                              ))}
                            </div>
                          )}

                          <Link
                            href="/appointment"
                            className="inline-flex items-center gap-2 mt-6 text-body-sm font-medium text-primary-500 hover:text-primary-600"
                          >
                            Schedule at this location
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
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
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-body-md font-medium text-primary-600 bg-white rounded-full hover:bg-primary-50 transition-colors"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
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
