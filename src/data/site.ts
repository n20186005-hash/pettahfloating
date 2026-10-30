import type { Locale } from '../i18n';

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
export const POSTAL_CODE = '';
export const STREET_ADDRESS = 'W E Bastian Mawatha';
export const LATITUDE = 6.9329;
export const LONGITUDE = 79.8554;
export const MAPS_SHARE_URL = 'https://maps.app.goo.gl/tWzta29n1pzYXYG67';

export const GOVT_TOURISM_URL = 'https://www.uda.gov.lk/uda-facilities/facility-7.html';
export const NATIONAL_TOURISM_URL = 'https://www.srilanka.travel/attraction?attraction_id=207';
export const WIKIMEDIA_CATEGORY = 'https://commons.wikimedia.org/wiki/Category:Pettah_Floating_Market';

export const NEARBY_LANDMARK_1 = 'Khan Clock Tower';
export const NEARBY_LANDMARK_2 = 'Jami Ul-Alfar Mosque';

export const TELEPHONE = '+94 11 279 7200';
export const TELEPHONE_TEL = '+94112797200';

/* Google Maps rating snapshot — rendered on the page only, never as Review markup */
export const GOOGLE_RATING = 3.7;
export const GOOGLE_REVIEW_COUNT = 18912;
export const REVIEW_SYNC_PERIOD: Record<Locale, string> = {
  en: '29 October 2026',
  si: '2026 ඔක්තෝබර් 29',
  ta: '29 அக்டோபர் 2026',
  zh: '2026 年 10 月 29 日',
};

export const HERO_IMAGE = '/images/planning.svg';

export const imageSources = ['waterfront', 'pavilions', 'access', 'planning'].map((name) => ({
  src: `/images/${name}.svg`,
  altEn: 'Original symbolic illustration; not a photograph or map',
  href: '/images/CREDITS.txt',
  credit: 'Original illustration · CC0',
}));

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
