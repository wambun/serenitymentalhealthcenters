import { siteConfig } from '@/data/config/site.settings';

// Organization Schema - Used on all pages
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Serenity Mental Health Centers',
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/images/logo.svg`,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    medicalSpecialty: [
      'Psychiatry',
      'Mental Health',
    ],
    availableService: [
      {
        '@type': 'MedicalTherapy',
        name: 'TMS Therapy',
        description: 'Transcranial Magnetic Stimulation for depression treatment',
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Ketamine Therapy',
        description: 'IV Ketamine infusion therapy for treatment-resistant depression',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Medication Management',
        description: 'Psychiatric medication evaluation and management',
      },
    ],
    sameAs: [
      // Add social media URLs when available
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Local Business Schema - Used on location pages
interface LocationSchemaProps {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hours?: string;
  stateId: string;
  locationId: string;
}

export function LocationSchema({
  name,
  address,
  city,
  state,
  zip,
  phone,
  hours,
  stateId,
  locationId,
}: LocationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: `Serenity Mental Health Centers - ${name}`,
    url: `${siteConfig.siteUrl}/locations/${stateId}/${locationId}`,
    telephone: phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address,
      addressLocality: city,
      addressRegion: state,
      postalCode: zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Note: Add lat/lng to location data for better SEO
    },
    openingHours: hours,
    medicalSpecialty: ['Psychiatry', 'Mental Health'],
    parentOrganization: {
      '@type': 'MedicalOrganization',
      name: 'Serenity Mental Health Centers',
      url: siteConfig.siteUrl,
    },
    availableService: [
      'TMS Therapy',
      'Ketamine Therapy',
      'Medication Management',
      'ADHD Testing',
      'Psychiatric Evaluation',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Person Schema - Used on provider pages
interface ProviderSchemaProps {
  name: string;
  credentials: string;
  title: string;
  image?: string;
  specialties?: string[];
  slug: string;
}

export function ProviderSchema({
  name,
  credentials,
  title,
  image,
  specialties,
  slug,
}: ProviderSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: `${name}, ${credentials}`,
    url: `${siteConfig.siteUrl}/providers/${slug}`,
    image: image ? `${siteConfig.siteUrl}${image}` : undefined,
    jobTitle: title,
    medicalSpecialty: specialties || ['Psychiatry'],
    worksFor: {
      '@type': 'MedicalOrganization',
      name: 'Serenity Mental Health Centers',
      url: siteConfig.siteUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ Schema - For FAQ pages/sections
interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Medical Condition Schema - For condition pages
interface ConditionSchemaProps {
  name: string;
  description: string;
  slug: string;
}

export function ConditionSchema({ name, description, slug }: ConditionSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name,
    description,
    url: `${siteConfig.siteUrl}/conditions/${slug}`,
    possibleTreatment: [
      {
        '@type': 'MedicalTherapy',
        name: 'TMS Therapy',
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Ketamine Therapy',
      },
      {
        '@type': 'Drug',
        name: 'Medication Management',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Treatment Schema - For treatment pages
interface TreatmentSchemaProps {
  name: string;
  description: string;
  slug: string;
}

export function TreatmentSchema({ name, description, slug }: TreatmentSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalTherapy',
    name,
    description,
    url: `${siteConfig.siteUrl}/treatments/${slug}`,
    medicineSystem: 'WesternConventional',
    recognizingAuthority: {
      '@type': 'Organization',
      name: 'FDA',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
