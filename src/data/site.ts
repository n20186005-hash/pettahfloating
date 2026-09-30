import type { Locale } from '../i18n';
import { pick } from '../i18n';

/* ------------------------------------------------------------------ *
 * Language-neutral entity facts — single source of truth.
 * Change any NAP / geo / hours / rating here and every locale updates.
 * ------------------------------------------------------------------ */
export const ATTRACTION_FULL_NAME = 'Floating Market - Pettah';
export const ATTRACTION_SHORT_NAME = 'Pettah Floating Market';
export const ATTRACTION_LOCAL_NAME_SI = 'පිටකොටුව පාවෙන වෙළඳපොළ';
export const CITY_NAME = 'Colombo';
export const CITY_LOCAL_NAME_SI = 'කොළඹ';
export const STATE_PROVINCE = 'Western Province';
export const COUNTRY_NAME = 'Sri Lanka';
export const COUNTRY_CODE_2LETTER = 'LK';
export const POSTAL_CODE = '01000';
export const STREET_ADDRESS = 'W E Bastian Mawatha';
export const LATITUDE = 6.9329;
export const LONGITUDE = 79.8554;
export const MAPS_SHARE_URL = 'https://maps.app.goo.gl/tWzta29n1pzYXYG67';

export const GOVT_TOURISM_URL = 'https://www.uda.gov.lk/floating-market.html';
export const NATIONAL_TOURISM_URL = 'https://www.srilanka.travel/';
export const WIKIMEDIA_CATEGORY = 'https://commons.wikimedia.org/wiki/Category:Pettah_Floating_Market';

export const NEARBY_LANDMARK_1 = 'Khan Clock Tower';
export const NEARBY_LANDMARK_2 = 'Jami Ul-Alfar Mosque';

export const TELEPHONE = '+94 11 287 3640';
export const TELEPHONE_TEL = '+94112873640';

/* Google Maps rating snapshot — rendered on the page only, never as Review markup */
export const GOOGLE_RATING = 3.7;
export const GOOGLE_REVIEW_COUNT = 18853;
export const REVIEW_SYNC_PERIOD: Record<Locale, string> = {
  en: 'September 2026',
  si: '2026 සැප්තැම්බර්',
  ta: '2026 செப்டம்பர்',
  zh: '2026 年 9 月',
};

export const HERO_IMAGE = '/images/hero.jpg';

export const imageSources = [
  {
    src: '/images/pettah-floating-market-boardwalk.jpg',
    altEn: `${ATTRACTION_FULL_NAME} - waterfront stalls and boardwalk in ${CITY_NAME}, ${COUNTRY_NAME}`,
    href: 'https://commons.wikimedia.org/wiki/File:PFM_-_01.jpg',
    credit: 'Dan arndt · CC BY-SA 4.0',
  },
  {
    src: '/images/pettah-floating-market-stalls.jpg',
    altEn: `${ATTRACTION_SHORT_NAME} - red-roofed market stalls in ${CITY_NAME}, ${COUNTRY_NAME}`,
    href: 'https://commons.wikimedia.org/wiki/File:PFM_-_02.jpg',
    credit: 'Dan arndt · CC BY-SA 4.0',
  },
  {
    src: '/images/pettah-floating-market-waterfront.jpg',
    altEn: `${ATTRACTION_SHORT_NAME} - boardwalk stretching across Beira Lake in ${CITY_NAME}`,
    href: 'https://commons.wikimedia.org/wiki/File:Pettah_Floating_Market.jpg',
    credit: 'Azeez Abubakr · CC BY-SA 4.0',
  },
  {
    src: HERO_IMAGE,
    altEn: `${ATTRACTION_FULL_NAME} - ${CITY_NAME} floating market at sunset, ${COUNTRY_NAME}`,
    href: 'https://commons.wikimedia.org/wiki/File:Pettah_Floating_Market_Colombo,_Sri_Lanka.jpg',
    credit: 'Shanka Anuranga · CC BY-SA 4.0',
  },
];

export function mapsEmbedSrc(hl: string): string {
  const q = encodeURIComponent(`${ATTRACTION_FULL_NAME}, ${STREET_ADDRESS}, ${CITY_NAME} ${POSTAL_CODE}, ${COUNTRY_NAME}`);
  return `https://www.google.com/maps?hl=${hl}&gl=lk&output=embed&q=${q}`;
}

export function heroImageAbsolute(site: string): string {
  return new URL(HERO_IMAGE, `${site}/`).href;
}

export const SITE_NAME: Record<Locale, string> = {
  en: 'Pettah Floating Market Colombo — Visitor Guide',
  si: 'පිටකොටුව පාවෙන වෙළඳපොළ කොළඹ — සංචාරක මාර්ගෝපදේශය',
  ta: 'பெட்டா மிதக்கும் சந்தை கொழும்பு — வருகையாளர் வழிகாட்டி',
  zh: '佩塔水上市场 科伦坡 — 游客指南',
};

export function withSiteName(suffix: string, locale: Locale): string {
  return `${SITE_NAME[locale]} | ${suffix}`;
}
