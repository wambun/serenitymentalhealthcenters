import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { providers, getProviderById, getProvidersByLocation } from '@/data/providers';
import { getLocationById, states } from '@/data/locations';
import { ProviderSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { siteConfig } from '@/data/config/site.settings';
import {
  User,
  MapPin,
  Phone,
  Clock,
  Award,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Calendar,
  Stethoscope,
} from 'lucide-react';
import { NewsletterSection, CTASection } from '@/components/landing';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return providers.map((provider) => ({
    slug: provider.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const provider = getProviderById(slug);

  if (!provider) {
    return {
      title: 'Provider Not Found | Serenity Mental Health Centers',
    };
  }

  return {
    title: `${provider.name}, ${provider.credentials} | Serenity Mental Health Centers`,
    description: `${provider.name} is a ${provider.title} at Serenity Mental Health Centers, specializing in ${provider.specialties?.join(', ') || 'mental health care'}.`,
  };
}

export default async function ProviderProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const provider = getProviderById(slug);

  if (!provider) {
    notFound();
  }

  const locations = provider.locationIds
    .map((id) => getLocationById(id))
    .filter((loc): loc is NonNullable<typeof loc> => loc !== undefined);

  // Get the state info for each location
  const locationStates = locations.map((loc) => {
    return states.find((s) => s.locations.some((l) => l.id === loc.id));
  });

  // Get other providers at the same locations
  const colleagueIds = new Set<string>();
  locations.forEach((loc) => {
    getProvidersByLocation(loc.id).forEach((p) => {
      if (p.id !== provider.id) {
        colleagueIds.add(p.id);
      }
    });
  });
  const colleagues = Array.from(colleagueIds)
    .slice(0, 4)
    .map((id) => getProviderById(id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  return (
    <>
      <ProviderSchema
        name={provider.name}
        credentials={provider.credentials}
        title={provider.title}
        image={provider.image}
        specialties={provider.specialties}
        slug={provider.id}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: siteConfig.siteUrl },
          { name: 'Providers', url: `${siteConfig.siteUrl}/providers` },
          { name: `${provider.name}, ${provider.credentials}`, url: `${siteConfig.siteUrl}/providers/${provider.id}` },
        ]}
      />
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="bg-neutral-50 border-b border-neutral-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-body-sm">
              <Link href="/providers" className="text-neutral-500 hover:text-primary-600">
                Providers
              </Link>
              <span className="text-neutral-300">/</span>
              <span className="text-neutral-900 font-medium">
                {provider.name}, {provider.credentials}
              </span>
            </div>
          </div>
        </div>

        {/* Provider Header */}
        <section className="py-12 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/providers"
              className="inline-flex items-center gap-2 text-body-sm text-neutral-500 hover:text-primary-600 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Providers
            </Link>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Provider Info */}
              <div className="lg:col-span-2">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {provider.image ? (
                      <Image
                        src={provider.image}
                        alt={provider.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-16 h-16 text-primary-600" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h1 className="text-display-sm font-bold text-neutral-900">
                        {provider.name}, {provider.credentials}
                      </h1>
                      {provider.featured && (
                        <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-body-sm font-medium">
                          Featured Provider
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-heading-md text-primary-600 font-medium">{provider.title}</p>

                    {provider.specialties && provider.specialties.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {provider.specialties.map((specialty) => (
                          <span
                            key={specialty}
                            className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-body-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-6 flex flex-wrap gap-4">
                      <Link
                        href="/appointment"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-full font-medium hover:bg-primary-600 transition-colors"
                      >
                        <Calendar className="w-5 h-5" />
                        Book Appointment
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-neutral-700 rounded-full font-medium border border-neutral-200 hover:border-primary-300 hover:text-primary-600 transition-colors"
                      >
                        <Phone className="w-5 h-5" />
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm">
                <h3 className="text-heading-sm font-bold text-neutral-900 mb-4">Quick Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Stethoscope className="w-5 h-5 text-primary-500 mt-0.5" />
                    <div>
                      <div className="text-body-sm text-neutral-500">Role</div>
                      <div className="text-body-md font-medium text-neutral-900">{provider.title}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary-500 mt-0.5" />
                    <div>
                      <div className="text-body-sm text-neutral-500">Credentials</div>
                      <div className="text-body-md font-medium text-neutral-900">{provider.credentials}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-500 mt-0.5" />
                    <div>
                      <div className="text-body-sm text-neutral-500">Locations</div>
                      <div className="text-body-md font-medium text-neutral-900">
                        {locations.length} {locations.length === 1 ? 'clinic' : 'clinics'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-heading-lg font-bold text-neutral-900 mb-6">
                  About {provider.name.split(' ')[0]}
                </h2>
                <div className="prose prose-lg max-w-none text-neutral-600">
                  <p>
                    {provider.name} is a dedicated {provider.title.toLowerCase()} at Serenity Mental Health Centers,
                    bringing expertise and compassion to every patient interaction.
                    {provider.role === 'psychiatrist' || provider.role === 'chief-medical-officer'
                      ? ` As a board-certified ${provider.credentials === 'DO' ? 'Doctor of Osteopathic Medicine' : 'Medical Doctor'}, ${provider.name.split(' ')[0]} provides comprehensive psychiatric evaluations, medication management, and innovative treatment options.`
                      : ` As a psychiatric nurse practitioner, ${provider.name.split(' ')[0]} specializes in medication management and collaborative care.`}
                  </p>
                  {provider.specialties && provider.specialties.length > 0 && (
                    <p>
                      {provider.name.split(' ')[0]}&apos;s areas of expertise include {provider.specialties.join(', ')},
                      helping patients achieve lasting mental wellness through evidence-based treatments.
                    </p>
                  )}
                  <p>
                    At Serenity Mental Health Centers, we believe in treating the whole person, not just the symptoms.
                    {provider.name.split(' ')[0]} works collaboratively with patients to develop personalized treatment
                    plans that address their unique needs and goals.
                  </p>
                </div>

                {/* Services Offered */}
                <div className="mt-12">
                  <h3 className="text-heading-md font-bold text-neutral-900 mb-6">Services Offered</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      'Psychiatric Evaluations',
                      'Medication Management',
                      'TMS Therapy',
                      'Ketamine Therapy',
                      'ADHD Testing & Treatment',
                      'Depression Treatment',
                      'Anxiety Treatment',
                      'Follow-up Care',
                    ].map((service) => (
                      <div key={service} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-body-md text-neutral-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Locations Sidebar */}
              <div>
                <h3 className="text-heading-md font-bold text-neutral-900 mb-6">Practice Locations</h3>
                <div className="space-y-4">
                  {locations.map((location, index) => {
                    const stateInfo = locationStates[index];
                    return (
                      <Link
                        key={location.id}
                        href={`/locations/${stateInfo?.id}/${location.id}`}
                        className="block bg-neutral-50 rounded-xl p-4 hover:bg-primary-50 transition-colors border border-neutral-100 hover:border-primary-200 group"
                      >
                        <h4 className="text-body-md font-bold text-neutral-900 group-hover:text-primary-600">
                          {location.name}, {location.state}
                        </h4>
                        <p className="text-body-sm text-neutral-500 mt-1">{location.address}</p>
                        <p className="text-body-sm text-neutral-500">
                          {location.city}, {location.state} {location.zip}
                        </p>
                        <div className="mt-3 flex items-center gap-4 text-body-sm">
                          <div className="flex items-center gap-1 text-neutral-500">
                            <Phone className="w-4 h-4" />
                            {location.phone}
                          </div>
                        </div>
                        {location.hours && (
                          <div className="mt-2 flex items-center gap-1 text-body-xs text-neutral-400">
                            <Clock className="w-3 h-3" />
                            {location.hours}
                          </div>
                        )}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-6">
                  <Link
                    href="/locations"
                    className="inline-flex items-center gap-2 text-body-sm font-medium text-primary-500 hover:text-primary-600"
                  >
                    View All Locations
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Colleagues */}
        {colleagues.length > 0 && (
          <section className="py-16 bg-neutral-50">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-heading-lg font-bold text-neutral-900 mb-8">
                Other Providers at These Locations
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {colleagues.map((colleague) => (
                  <Link
                    key={colleague.id}
                    href={`/providers/${colleague.id}`}
                    className="group bg-white rounded-xl p-4 hover:shadow-md transition-all border border-neutral-100 hover:border-primary-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-neutral-100 flex items-center justify-center overflow-hidden">
                        {colleague.image ? (
                          <Image
                            src={colleague.image}
                            alt={colleague.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User className="w-6 h-6 text-neutral-400 group-hover:text-primary-500" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-body-md font-bold text-neutral-900 group-hover:text-primary-600 truncate">
                          {colleague.name}
                        </h3>
                        <p className="text-body-sm text-neutral-500">{colleague.credentials}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Book Appointment CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-display-sm font-bold text-white tracking-tight">
                Ready to Schedule with {provider.name.split(' ')[0]}?
              </h2>
              <p className="mt-4 text-body-lg text-primary-100 max-w-2xl mx-auto">
                Take the first step toward better mental health. Book an appointment today.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-body-md font-medium text-primary-600 bg-white rounded-full hover:bg-primary-50 transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </Link>
                <a
                  href={`tel:${locations[0]?.phone || '844-310-1649'}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-body-md font-medium text-white border-2 border-white rounded-full hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call {locations[0]?.phone || '844-310-1649'}
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
