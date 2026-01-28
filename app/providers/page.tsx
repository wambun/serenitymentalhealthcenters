import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import PageHeader from '@/components/page/PageHeader';
import { providers, getProvidersCount, getPsychiatristsCount } from '@/data/providers';
import { states, getLocationById } from '@/data/locations';
import { User, MapPin, Award, ArrowRight, Stethoscope, GraduationCap } from 'lucide-react';
import { NewsletterSection, CTASection } from '@/components/landing';

export const metadata: Metadata = {
  title: 'Our Providers | Serenity Mental Health Centers',
  description:
    'Meet our team of board-certified psychiatrists and psychiatric nurse practitioners providing compassionate mental health care across 8 states.',
};

export default function ProvidersPage() {
  const psychiatrists = providers.filter((p) => p.role === 'psychiatrist' || p.role === 'chief-medical-officer');
  const nursePractitioners = providers.filter((p) => p.role === 'nurse-practitioner');
  const featuredProviders = providers.filter((p) => p.featured);

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <PageHeader
          title="Our Providers"
          description="Meet our team of experienced mental health professionals dedicated to helping you achieve lasting wellness."
        />

        {/* Stats Section */}
        <section className="py-12 bg-white border-b border-neutral-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-display-sm font-bold text-primary-500">{getProvidersCount()}+</div>
                <div className="text-body-md text-neutral-600">Mental Health Providers</div>
              </div>
              <div className="text-center">
                <div className="text-display-sm font-bold text-primary-500">{getPsychiatristsCount()}</div>
                <div className="text-body-md text-neutral-600">Board-Certified Psychiatrists</div>
              </div>
              <div className="text-center">
                <div className="text-display-sm font-bold text-primary-500">{states.length}</div>
                <div className="text-body-md text-neutral-600">States Served</div>
              </div>
              <div className="text-center">
                <div className="text-display-sm font-bold text-primary-500">10,000+</div>
                <div className="text-body-md text-neutral-600">Patients Treated</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Providers */}
        <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-4">
                <Award className="w-4 h-4 text-primary-600" />
                <span className="text-body-sm font-medium text-primary-700">Leadership Team</span>
              </div>
              <h2 className="text-display-sm font-bold text-neutral-900 tracking-tight">
                Featured Providers
              </h2>
              <p className="mt-4 text-body-lg text-neutral-600 max-w-2xl mx-auto">
                Our leadership team brings decades of combined experience in psychiatric care and innovative treatments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProviders.map((provider) => {
                const locations = provider.locationIds.map((id) => getLocationById(id)).filter(Boolean);
                return (
                  <Link
                    key={provider.id}
                    href={`/providers/${provider.id}`}
                    className="group bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 hover:shadow-xl hover:border-primary-200 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center flex-shrink-0 overflow-hidden">
                        {provider.image ? (
                          <Image
                            src={provider.image}
                            alt={provider.name}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User className="w-10 h-10 text-primary-600" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-heading-md font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                          {provider.name}, {provider.credentials}
                        </h3>
                        <p className="text-body-md text-primary-600 font-medium">{provider.title}</p>
                        {provider.specialties && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {provider.specialties.slice(0, 2).map((specialty) => (
                              <span
                                key={specialty}
                                className="px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded text-body-xs"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    {locations.length > 0 && (
                      <div className="mt-4 flex items-center gap-2 text-body-sm text-neutral-500">
                        <MapPin className="w-4 h-4" />
                        <span>
                          {locations
                            .slice(0, 2)
                            .map((loc) => loc?.name)
                            .join(', ')}
                          {locations.length > 2 && ` +${locations.length - 2} more`}
                        </span>
                      </div>
                    )}
                    <div className="mt-4 flex items-center gap-1 text-body-sm font-medium text-primary-500 group-hover:text-primary-600">
                      View Profile
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Psychiatrists */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h2 className="text-heading-lg font-bold text-neutral-900">Psychiatrists</h2>
                <p className="text-body-md text-neutral-500">Board-certified MDs and DOs</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {psychiatrists.map((provider) => {
                const locations = provider.locationIds.map((id) => getLocationById(id)).filter(Boolean);
                const stateAbbrevs = [...new Set(locations.map((loc) => loc?.state.substring(0, 2)))];
                return (
                  <Link
                    key={provider.id}
                    href={`/providers/${provider.id}`}
                    className="group bg-neutral-50 rounded-xl p-4 hover:bg-primary-50 transition-colors border border-neutral-100 hover:border-primary-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0 border border-neutral-200 group-hover:border-primary-200 overflow-hidden">
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
                        <h3 className="text-body-md font-bold text-neutral-900 group-hover:text-primary-600 transition-colors truncate">
                          {provider.name}
                        </h3>
                        <p className="text-body-sm text-neutral-500">{provider.credentials}</p>
                      </div>
                    </div>
                    {stateAbbrevs.length > 0 && (
                      <div className="mt-3 flex items-center gap-1 text-body-xs text-neutral-400">
                        <MapPin className="w-3 h-3" />
                        <span>{locations.map((l) => l?.name).slice(0, 2).join(', ')}</span>
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Nurse Practitioners */}
        <section className="py-20 bg-neutral-50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h2 className="text-heading-lg font-bold text-neutral-900">Nurse Practitioners</h2>
                <p className="text-body-md text-neutral-500">PMHNPs, DNPs, and NPs</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {nursePractitioners.map((provider) => {
                const locations = provider.locationIds.map((id) => getLocationById(id)).filter(Boolean);
                return (
                  <Link
                    key={provider.id}
                    href={`/providers/${provider.id}`}
                    className="group bg-white rounded-xl p-4 hover:bg-primary-50 transition-colors border border-neutral-100 hover:border-primary-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-neutral-50 flex items-center justify-center flex-shrink-0 border border-neutral-200 group-hover:border-primary-200 overflow-hidden">
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
                        <h3 className="text-body-md font-bold text-neutral-900 group-hover:text-primary-600 transition-colors truncate">
                          {provider.name}
                        </h3>
                        <p className="text-body-sm text-neutral-500">{provider.credentials}</p>
                      </div>
                    </div>
                    {locations.length > 0 && (
                      <div className="mt-3 flex items-center gap-1 text-body-xs text-neutral-400">
                        <MapPin className="w-3 h-3" />
                        <span>{locations.map((l) => l?.name).slice(0, 2).join(', ')}</span>
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Find by Location */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-neutral-900 tracking-tight">
                Find Providers by Location
              </h2>
              <p className="mt-4 text-body-lg text-neutral-600 max-w-2xl mx-auto">
                Browse our providers by state to find mental health professionals near you.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {states.map((state) => (
                <Link
                  key={state.id}
                  href={`/locations/${state.id}`}
                  className="group bg-neutral-50 rounded-xl p-6 text-center hover:bg-primary-50 transition-colors border border-neutral-100 hover:border-primary-200"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-200 transition-colors">
                    <span className="text-primary-600 font-bold">{state.abbreviation}</span>
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

        {/* Join Our Team CTA */}
        <section className="py-16 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-display-sm font-bold text-white tracking-tight">
                Join Our Team of Providers
              </h2>
              <p className="mt-4 text-body-lg text-primary-100 max-w-2xl mx-auto">
                We&apos;re always looking for passionate mental health professionals to join our growing team.
              </p>
              <div className="mt-8">
                <Link
                  href="/careers"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-body-md font-medium text-primary-600 bg-white rounded-full hover:bg-primary-50 transition-colors"
                >
                  View Open Positions
                  <ArrowRight className="w-5 h-5" />
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
