export type Locale = 'en' | 'si' | 'ta' | 'zh';

export interface LocaleMeta {
  code: Locale;
  htmlLang: string;
  ogLocale: string;
  hreflang: string;
  label: string;
  shortLabel: string;
  dir: 'ltr' | 'rtl';
  mapsHl: string;
}

export const LOCALES: LocaleMeta[] = [
  { code: 'en', htmlLang: 'en', ogLocale: 'en_US', hreflang: 'en', label: 'English', shortLabel: 'EN', dir: 'ltr', mapsHl: 'en' },
  { code: 'si', htmlLang: 'si', ogLocale: 'si_LK', hreflang: 'si', label: 'සිංහල', shortLabel: 'SI', dir: 'ltr', mapsHl: 'si' },
  { code: 'ta', htmlLang: 'ta', ogLocale: 'ta_LK', hreflang: 'ta', label: 'தமிழ்', shortLabel: 'TA', dir: 'ltr', mapsHl: 'ta' },
  { code: 'zh', htmlLang: 'zh-Hans', ogLocale: 'zh_CN', hreflang: 'zh-Hans', label: '中文', shortLabel: 'ZH', dir: 'ltr', mapsHl: 'zh' },
];

export const DEFAULT_LOCALE: Locale = 'en';

export function isLocale(v: string): v is Locale {
  return LOCALES.some((l) => l.code === v);
}

export function localeMeta(locale: Locale): LocaleMeta {
  return LOCALES.find((l) => l.code === locale) ?? LOCALES[0];
}

/** Path of a page for a given locale. Default locale lives at root (no prefix). */
export function localizedPath(locale: Locale, base = '/'): string {
  const clean = (base || '/').replace(/\/$/, '');
  if (locale === DEFAULT_LOCALE) return clean === '' ? '/' : `${clean}/`;
  return clean === '' ? `/${locale}/` : `/${locale}${clean}/`;
}

/** hreflang alternates for a default-locale base path, including x-default. */
export function hreflangAlternates(site: string, base = '/'): { hreflang: string; href: string }[] {
  const root = site.replace(/\/$/, '');
  const out = LOCALES.map((l) => ({
    hreflang: l.hreflang,
    href: root + localizedPath(l.code, base),
  }));
  out.push({ hreflang: 'x-default', href: root + localizedPath(DEFAULT_LOCALE, base) });
  return out;
}

export function pick<T>(locale: Locale, obj: Record<Locale, T>): T {
  return obj[locale];
}
