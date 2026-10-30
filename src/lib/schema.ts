import type { Locale } from '../i18n';
import {
  ATTRACTION_FULL_NAME,
  ATTRACTION_SHORT_NAME,
  ATTRACTION_LOCAL_NAME_SI,
  CITY_NAME,
  STATE_PROVINCE,
  COUNTRY_CODE_2LETTER,
  STREET_ADDRESS,
  LATITUDE,
  LONGITUDE,
  MAPS_SHARE_URL,
  GOVT_TOURISM_URL,
  NATIONAL_TOURISM_URL,
  SITE_NAME,
} from '../data/site';

export function buildPlaceSchema(site: string, locale: Locale, canonical: string): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `${site.replace(/\/$/, '')}/#attraction`,
    name: ATTRACTION_FULL_NAME,
    alternateName: [ATTRACTION_SHORT_NAME, `${CITY_NAME} ${ATTRACTION_FULL_NAME}`, ATTRACTION_LOCAL_NAME_SI],
    description: `${SITE_NAME[locale]} — location, opening hours, tickets, directions and travel tips for ${ATTRACTION_FULL_NAME} in ${CITY_NAME}, ${STATE_PROVINCE}, Sri Lanka.`,
    url: canonical.replace(/\/$/, ''),
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${ATTRACTION_FULL_NAME}, ${STREET_ADDRESS}`,
      addressLocality: CITY_NAME,
      addressRegion: STATE_PROVINCE,
      addressCountry: COUNTRY_CODE_2LETTER,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: LATITUDE,
      longitude: LONGITUDE,
    },
    hasMap: MAPS_SHARE_URL,
    sameAs: [MAPS_SHARE_URL, GOVT_TOURISM_URL, NATIONAL_TOURISM_URL],

  };
  return schema;
}

export function buildFaqSchema(faqs: { q: string; a: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export function buildWebSiteSchema(site: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: ATTRACTION_SHORT_NAME,
    url: site.replace(/\/$/, ''),
    inLanguage: ['en', 'si', 'ta', 'zh-Hans'],
  };
}
