import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { states, getStateBySlug, getLocationById } from '@/data/locations';
import { getProvidersByLocation } from '@/data/providers';
import {
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  ArrowLeft,
  User,
  CheckCircle,
  Calendar,
  Navigation,
  Mail,
  Shield,
  Zap,
  Brain,
  Pill,
  ClipboardCheck,
} from 'lucide-react';
import { NewsletterSection, CTASection } from '@/components/landing';

interface PageProps {
  params: Promise<{ state: string; location: string }>;
}

export async function generateStaticParams() {
  const params: { state: string; location: string }[] = [];
  states.forEach((state) => {
    state.locations.forEach((location) => {
      params.push({
        state: state.id,
        location: location.id,
      });
    });
  });
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state: stateSlug, location: locationSlug } = await params;
  const state = getStateBySlug(stateSlug);
  const location = getLocationById(locationSlug);

  if (!state || !location) {
    return {
      title: 'Location Not Found | Serenity Mental Health Centers',
    };
  }

  return {
    title: `${location.name}, ${state.abbreviation} | Serenity Mental Health Centers`,
    description: `Visit Serenity Mental Health Centers in ${location.name}, ${state.name}. Offering TMS therapy, ketamine treatment, medication management, and ADHD testing. Call ${location.phone}.`,
  };
}

const serviceIcons: Record<string, React.ElementType> = {
  'TMS Therapy': Zap,
  'Ketamine Therapy': Brain,
  'Medication Management': Pill,
  'ADHD Testing': ClipboardCheck,
};

export default async function LocationDetailPage({ params }: PageProps) {
  const { state: stateSlug, location: locationSlug } = await params;
  const state = getStateBySlug(stateSlug);
  const location = getLocationById(locationSlug);

  if (!state || !location) {
    notFound();
  }

  const providers = getProvidersByLocation(location.id);
  const psychiatrists = providers.filter(
    (p) => p.role === 'psychiatrist' || p.role === 'chief-medical-officer'
  );
  const nursePractitioners = providers.filter((p) => p.role === 'nurse-practitioner');

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${location.address}, ${location.city}, ${location.state} ${location.zip}`
  )}`;

  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="bg-neutral-50 border-b border-neutral-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-body-sm">
              <Link href="/locations" className="text-neutral-500 hover:text-primary-600">
                Locations
              </Link>
              <span className="text-neutral-300">/</span>
              <Link
                href={`/locations/${state.id}`}
                className="text-neutral-500 hover:text-primary-600"
              >
                {state.name}
              </Link>
              <span className="text-neutral-300">/</span>
              <span className="text-neutral-900 font-medium">{location.name}</span>
            </div>
          </div>
        </div>

        {/* Location Header */}
        <section className="py-12 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href={`/locations/${state.id}`}
              className="inline-flex items-center gap-2 text-body-sm text-neutral-500 hover:text-primary-600 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to {state.name}
            </Link>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Location Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-body-sm font-medium">
                    <CheckCircle className="w-4 h-4" />
                    Open
                  </div>
                </div>
                <h1 className="text-display-md font-bold text-neutral-900">
                  Serenity Mental Health Centers
                </h1>
                <p className="text-heading-lg text-primary-600 font-medium mt-2">
                  {location.name}, {state.abbreviation}
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-body-lg text-neutral-900 font-medium">{location.address}</p>
                      <p className="text-body-lg text-neutral-600">
                        {location.city}, {location.state} {location.zip}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary-600" />
                    </div>
                    <a
                      href={`tel:${location.phone}`}
                      className="text-body-lg text-primary-600 hover:text-primary-700 font-medium"
                    >
                      {location.phone}
                    </a>
                  </div>

                  {location.hours && (
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary-600" />
                      </div>
                      <p className="text-body-lg text-neutral-700">{location.hours}</p>
                    </div>
                  )}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/appointment"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-full font-medium hover:bg-primary-600 transition-colors"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Appointment
                  </Link>
                  <a
                    href={`tel:${location.phone}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-neutral-700 rounded-full font-medium border border-neutral-200 hover:border-primary-300 hover:text-primary-600 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-neutral-700 rounded-full font-medium border border-neutral-200 hover:border-primary-300 hover:text-primary-600 transition-colors"
                  >
                    <Navigation className="w-5 h-5" />
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-lg h-fit">
                <h3 className="text-heading-md font-bold text-neutral-900 mb-6">Contact This Location</h3>
                <div className="space-y-4">
                  <a
                    href={`tel:${location.phone}`}
                    className="flex items-center gap-3 p-4 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-body-sm text-neutral-500">Call us</div>
                      <div className="text-body-lg font-bold text-primary-600">{location.phone}</div>
                    </div>
                  </a>
                  <Link
                    href="/appointment"
                    className="flex items-center gap-3 p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-neutral-600" />
                    </div>
                    <div>
                      <div className="text-body-sm text-neutral-500">Online booking</div>
                      <div className="text-body-lg font-bold text-neutral-900">Request Appointment</div>
                    </div>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center gap-3 p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-neutral-600" />
                    </div>
                    <div>
                      <div className="text-body-sm text-neutral-500">General inquiries</div>
                      <div className="text-body-lg font-bold text-neutral-900">Send a Message</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        {location.services && location.services.length > 0 && (
          <section className="py-16 bg-white border-t border-neutral-100">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-heading-lg font-bold text-neutral-900 mb-8">
                Services at This Location
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {location.services.map((service) => {
                  const Icon = serviceIcons[service] || Shield;
                  const serviceSlug = service.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <Link
                      key={service}
                      href={`/treatments/${serviceSlug}`}
                      className="group bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-100 hover:shadow-lg transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                        <Icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <h3 className="text-heading-sm font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                        {service}
                      </h3>
                      <div className="mt-3 inline-flex items-center gap-1 text-body-sm font-medium text-primary-500">
                        Learn more
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Providers */}
        {providers.length > 0 && (
          <section className="py-16 bg-neutral-50">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-heading-lg font-bold text-neutral-900">
                    Our Providers
                  </h2>
                  <p className="text-body-md text-neutral-500 mt-1">
                    {psychiatrists.length} {psychiatrists.length === 1 ? 'psychiatrist' : 'psychiatrists'} and{' '}
                    {nursePractitioners.length} nurse {nursePractitioners.length === 1 ? 'practitioner' : 'practitioners'}
                  </p>
                </div>
                <Link
                  href="/providers"
                  className="hidden sm:inline-flex items-center gap-2 text-body-sm font-medium text-primary-500 hover:text-primary-600"
                >
                  View All Providers
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Psychiatrists */}
              {psychiatrists.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-body-md font-medium text-neutral-500 uppercase tracking-wide mb-4">
                    Psychiatrists
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {psychiatrists.map((provider) => (
                      <Link
                        key={provider.id}
                        href={`/providers/${provider.id}`}
                        className="group bg-white rounded-xl p-5 hover:shadow-lg transition-all border border-neutral-100 hover:border-primary-200"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center flex-shrink-0 overflow-hidden">
                            {provider.image ? (
                              <Image
                                src={provider.image}
                                alt={provider.name}
                                width={64}
                                height={64}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <User className="w-8 h-8 text-primary-600" />
                            )}
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-body-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                              {provider.name}, {provider.credentials}
                            </h4>
                            <p className="text-body-sm text-primary-600">{provider.title}</p>
                            {provider.specialties && (
                              <p className="text-body-xs text-neutral-500 mt-1 truncate">
                                {provider.specialties.slice(0, 2).join(', ')}
                              </p>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Nurse Practitioners */}
              {nursePractitioners.length > 0 && (
                <div>
                  <h3 className="text-body-md font-medium text-neutral-500 uppercase tracking-wide mb-4">
                    Nurse Practitioners
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {nursePractitioners.map((provider) => (
                      <Link
                        key={provider.id}
                        href={`/providers/${provider.id}`}
                        className="group bg-white rounded-xl p-4 hover:shadow-md transition-all border border-neutral-100 hover:border-primary-200"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg bg-neutral-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 overflow-hidden">
                            {provider.image ? (
                              <Image
                                src={provider.image}
                                alt={provider.name}
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <User className="w-6 h-6 text-neutral-400 group-hover:text-primary-500" />
                            )}
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-body-md font-bold text-neutral-900 group-hover:text-primary-600 transition-colors truncate">
                              {provider.name}
                            </h4>
                            <p className="text-body-sm text-neutral-500">{provider.credentials}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 sm:hidden">
                <Link
                  href="/providers"
                  className="inline-flex items-center gap-2 text-body-sm font-medium text-primary-500 hover:text-primary-600"
                >
                  View All Providers
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Insurance */}
        <section className="py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-heading-lg font-bold text-neutral-900 mb-4">
                  Insurance & Payment
                </h2>
                <p className="text-body-lg text-neutral-600 mb-6">
                  We accept most major insurance plans and offer flexible payment options.
                  Our team will verify your coverage and help you understand your benefits.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    'Most major insurance plans accepted',
                    'Medicare and Medicaid coverage',
                    'Free insurance verification',
                    'Flexible payment plans available',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-body-md text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/insurance"
                  className="inline-flex items-center gap-2 text-body-md font-medium text-primary-500 hover:text-primary-600"
                >
                  View Accepted Insurance
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 border border-primary-100">
                <h3 className="text-heading-md font-bold text-neutral-900 mb-6">
                  Verify Your Insurance
                </h3>
                <p className="text-body-md text-neutral-600 mb-6">
                  Not sure if we accept your plan? Give us a call and our team will check your coverage.
                </p>
                <a
                  href={`tel:${location.phone}`}
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary-500 text-white rounded-full font-medium hover:bg-primary-600 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call {location.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Other Locations in State */}
        {state.locations.length > 1 && (
          <section className="py-16 bg-neutral-50">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-heading-lg font-bold text-neutral-900 mb-8">
                Other {state.name} Locations
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {state.locations
                  .filter((loc) => loc.id !== location.id)
                  .map((otherLocation) => (
                    <Link
                      key={otherLocation.id}
                      href={`/locations/${state.id}/${otherLocation.id}`}
                      className="group bg-white rounded-xl p-5 hover:shadow-md transition-all border border-neutral-100 hover:border-primary-200"
                    >
                      <h3 className="text-heading-sm font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                        {otherLocation.name}
                      </h3>
                      <p className="text-body-sm text-neutral-500 mt-1">{otherLocation.city}, {state.abbreviation}</p>
                      <div className="mt-3 flex items-center gap-2 text-body-sm text-neutral-400">
                        <Phone className="w-4 h-4" />
                        {otherLocation.phone}
                      </div>
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
