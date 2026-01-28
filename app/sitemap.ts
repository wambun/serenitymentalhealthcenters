import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/config/site.settings';
import { states } from '@/data/locations';
import { providers } from '@/data/providers';
import { treatments } from '@/data/treatments';
import { conditions } from '@/data/conditions';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteConfig.siteUrl;
  const lastModified = new Date().toISOString().split('T')[0];

  // Static pages
  const staticPages = [
    '',
    'about',
    'contact',
    'appointment',
    'locations',
    'providers',
    'treatments',
    'conditions',
    'insurance',
    'resources',
    'careers',
    'privacy-policy',
    'terms',
  ].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // State pages
  const statePages = states.map((state) => ({
    url: `${siteUrl}/locations/${state.id}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Location pages
  const locationPages = states.flatMap((state) =>
    state.locations.map((location) => ({
      url: `${siteUrl}/locations/${state.id}/${location.id}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  );

  // Provider pages
  const providerPages = providers.map((provider) => ({
    url: `${siteUrl}/providers/${provider.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Treatment pages
  const treatmentPages = treatments.map((treatment) => ({
    url: `${siteUrl}/treatments/${treatment.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Condition pages
  const conditionPages = conditions.map((condition) => ({
    url: `${siteUrl}/conditions/${condition.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...statePages,
    ...locationPages,
    ...providerPages,
    ...treatmentPages,
    ...conditionPages,
  ];
}
