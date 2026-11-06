import type { Locale } from '../i18n';
import { localizedPath } from '../i18n';

export type TopicGroup = 'visit' | 'photos' | 'transport' | 'food' | 'nearby' | 'itineraries';

export interface TopicSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: string;
}

export interface TopicContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  updated: string;
  sections: TopicSection[];
  faqs: { q: string; a: string }[];
}

export interface Topic {
  slug: string;
  group: TopicGroup;
  priority: 'P0' | 'P1' | 'P2';
  related: string[];
}

/** All 40 topic slugs. Nested slugs (e.g. nearby/red-mosque) become nested URLs. */
export const TOPICS: Topic[] = [
  // A. Visit core & visitor decisions
  { slug: 'current-status', group: 'visit', priority: 'P0', related: ['opening-hours', 'is-it-worth-visiting', 'from-colombo-fort-station', 'reviews'] },
  { slug: 'opening-hours', group: 'visit', priority: 'P0', related: ['current-status', 'tickets-prices', 'is-it-worth-visiting'] },
  { slug: 'tickets-prices', group: 'visit', priority: 'P1', related: ['opening-hours', 'current-status', 'management-contact'] },
  { slug: 'is-it-worth-visiting', group: 'visit', priority: 'P0', related: ['current-status', 'reviews', 'how-long-to-spend'] },
  { slug: 'reviews', group: 'visit', priority: 'P0', related: ['is-it-worth-visiting', 'current-status', 'photos'] },
  { slug: 'how-long-to-spend', group: 'visit', priority: 'P1', related: ['is-it-worth-visiting', 'itineraries/half-day-colombo', 'current-status'] },
  { slug: 'history', group: 'visit', priority: 'P1', related: ['then-and-now', 'architecture', 'management-contact'] },
  { slug: 'management-contact', group: 'visit', priority: 'P1', related: ['current-status', 'tickets-prices', 'history'] },

  // B. Photos, photography & architecture
  { slug: 'photos', group: 'photos', priority: 'P0', related: ['photo-spots', 'architecture', 'sunset-photography', 'then-and-now'] },
  { slug: 'architecture', group: 'photos', priority: 'P1', related: ['photos', 'history', 'then-and-now'] },
  { slug: 'photo-spots', group: 'photos', priority: 'P1', related: ['photos', 'sunset-photography', 'nearby/red-mosque'] },
  { slug: 'sunset-photography', group: 'photos', priority: 'P2', related: ['photo-spots', 'photos', 'nearby/beira-lake'] },
  { slug: 'then-and-now', group: 'photos', priority: 'P1', related: ['photos', 'history', 'current-status'] },

  // C. Transport & access
  { slug: 'getting-there', group: 'transport', priority: 'P0', related: ['from-colombo-fort-station', 'tuk-tuk-taxi', 'parking'] },
  { slug: 'from-colombo-fort-station', group: 'transport', priority: 'P0', related: ['getting-there', 'nearby/colombo-fort', 'walking-accessibility'] },
  { slug: 'from-pettah-bus-stand', group: 'transport', priority: 'P1', related: ['getting-there', 'walking-accessibility', 'nearby/pettah-market'] },
  { slug: 'from-colombo-airport', group: 'transport', priority: 'P1', related: ['getting-there', 'tuk-tuk-taxi', 'where-to-stay'] },
  { slug: 'tuk-tuk-taxi', group: 'transport', priority: 'P1', related: ['getting-there', 'from-colombo-airport', 'parking'] },
  { slug: 'parking', group: 'transport', priority: 'P1', related: ['getting-there', 'walking-accessibility', 'tuk-tuk-taxi'] },
  { slug: 'walking-accessibility', group: 'transport', priority: 'P1', related: ['getting-there', 'from-pettah-bus-stand', 'nearby/pettah-market'] },

  // D. Food, drinks & shopping
  { slug: 'restaurants-nearby', group: 'food', priority: 'P0', related: ['local-food', 'lunch-nearby', 'cafes-nearby'] },
  { slug: 'cafes-nearby', group: 'food', priority: 'P1', related: ['restaurants-nearby', 'local-food', 'breakfast-nearby'] },
  { slug: 'local-food', group: 'food', priority: 'P1', related: ['restaurants-nearby', 'lunch-nearby', 'dinner-nearby'] },
  { slug: 'breakfast-nearby', group: 'food', priority: 'P2', related: ['restaurants-nearby', 'local-food', 'cafes-nearby'] },
  { slug: 'lunch-nearby', group: 'food', priority: 'P1', related: ['local-food', 'restaurants-nearby', 'dinner-nearby'] },
  { slug: 'dinner-nearby', group: 'food', priority: 'P1', related: ['local-food', 'restaurants-nearby', 'cafes-nearby'] },
  { slug: 'shopping-nearby', group: 'food', priority: 'P1', related: ['nearby/pettah-market', 'local-food', 'restaurants-nearby'] },

  // E. Nearby attractions
  { slug: 'nearby/pettah-market', group: 'nearby', priority: 'P0', related: ['shopping-nearby', 'walking-accessibility', 'nearby/red-mosque', 'itineraries/pettah-walking-tour'] },
  { slug: 'nearby/red-mosque', group: 'nearby', priority: 'P0', related: ['nearby/pettah-market', 'photo-spots', 'nearby/colombo-fort', 'itineraries/pettah-walking-tour'] },
  { slug: 'nearby/khan-clock-tower', group: 'nearby', priority: 'P1', related: ['nearby/colombo-fort', 'nearby/red-mosque', 'getting-there', 'itineraries/pettah-walking-tour'] },
  { slug: 'nearby/colombo-fort', group: 'nearby', priority: 'P1', related: ['nearby/khan-clock-tower', 'nearby/red-mosque', 'itineraries/half-day-colombo'] },
  { slug: 'nearby/beira-lake', group: 'nearby', priority: 'P1', related: ['photos', 'sunset-photography', 'itineraries/half-day-colombo'] },
  { slug: 'nearby/dutch-museum', group: 'nearby', priority: 'P2', related: ['nearby/colombo-fort', 'history', 'nearby/khan-clock-tower'] },
  { slug: 'nearby/lotus-tower', group: 'nearby', priority: 'P1', related: ['nearby/colombo-fort', 'nearby/beira-lake', 'itineraries/one-day-colombo', 'itineraries/pettah-walking-tour'] },

  // F. Itineraries & stays
  { slug: 'itineraries/half-day-colombo', group: 'itineraries', priority: 'P0', related: ['itineraries/one-day-colombo', 'nearby/colombo-fort', 'is-it-worth-visiting'] },
  { slug: 'itineraries/one-day-colombo', group: 'itineraries', priority: 'P1', related: ['itineraries/half-day-colombo', 'where-to-stay', 'nearby/lotus-tower'] },
  { slug: 'itineraries/pettah-walking-tour', group: 'itineraries', priority: 'P1', related: ['nearby/pettah-market', 'nearby/red-mosque', 'nearby/khan-clock-tower', 'nearby/lotus-tower', 'walking-accessibility'] },
  { slug: 'family-guide', group: 'itineraries', priority: 'P2', related: ['itineraries/half-day-colombo', 'walking-accessibility', 'rainy-day-guide'] },
  { slug: 'rainy-day-guide', group: 'itineraries', priority: 'P2', related: ['nearby/dutch-museum', 'family-guide', 'where-to-stay'] },
  { slug: 'where-to-stay', group: 'itineraries', priority: 'P1', related: ['itineraries/one-day-colombo', 'from-colombo-airport', 'nearby/colombo-fort'] },
];

export const TOPIC_GROUP_ORDER: TopicGroup[] = ['visit', 'photos', 'transport', 'food', 'nearby', 'itineraries'];

export const TOPIC_GROUP_LABELS: Record<Locale, Record<TopicGroup, string>> = {
  en: {
    visit: 'Visit Information',
    photos: 'Photos & Architecture',
    transport: 'Getting There',
    food: 'Food & Shopping',
    nearby: 'Nearby Attractions',
    itineraries: 'Itineraries & Stays',
  },
  si: {
    visit: 'පෙනීම් තොරතුරු',
    photos: 'ඡායාරූප සහ ගෘහනිර්මාණ',
    transport: 'පැමිණීම',
    food: 'ආහාර සහ වෙළඳාම',
    nearby: 'අසල ආකර්ෂණ',
    itineraries: 'මාර්ග සහ නැවතීම්',
  },
  ta: {
    visit: 'பார்வையிடும் தகவல்',
    photos: 'புகைப்படங்கள் மற்றும் கட்டடக்கலை',
    transport: 'அடைதல்',
    food: 'உணவு மற்றும் கடைகள்',
    nearby: 'அருகிலுள்ள இடங்கள்',
    itineraries: 'பயணத் திட்டங்கள் மற்றும் தங்குமிடம்',
  },
  zh: {
    visit: '游览信息',
    photos: '照片与建筑',
    transport: '交通抵达',
    food: '餐饮与购物',
    nearby: '周边景点',
    itineraries: '行程与住宿',
  },
};

export const VERIFY_NOTE: Record<Locale, string> = {
  en: 'Last verified',
  si: 'අවසන් සත්යාපනය',
  ta: 'கடைசியாக சரிபார்க்கப்பட்டது',
  zh: '最后核实',
};

/** Per-locale UI labels used by TopicPage so no English leaks into non-English pages. */
export const TOPIC_UI: Record<Locale, { verify: string; related: string; faq: string; disclaimer: string }> = {
  en: {
    verify: 'Last verified',
    related: 'Related guides',
    faq: 'Frequently asked questions',
    disclaimer:
      'This is an independent visitor guide. Information is compiled from publicly reported sources and is verified periodically; opening activity, stall counts and prices can change, so confirm key details on site or with official sources before you travel.',
  },
  si: {
    verify: 'අවසන් සත්යාපනය',
    related: 'සම්බන්ධ මාර්ගෝපදේශ',
    faq: 'නිතර අසන ප්‍රශ්න',
    disclaimer:
      'මෙය ස්වාධීන නරඹන්නන්ට කියාපාන මාර්ගෝපදේශයකි. තොරතුරු ජනමාධ්‍ය වාර්තාවලින් එකතු කර කාලාන්තරයකින් සත්‍යාපනය කරනු ලබයි; විවෘත වීමේ ක්‍රියාකාරකම්, කඩවස් ගණන සහ මිලයන් වෙනස් විය හැකි බැවින්, ඔබ ගමන් කිරීමට පෙර ස්ථානයේ හෝ නිල මූලාශ්‍රයන් ඔස්සේ විස්තර තහවුරු කර ගන්න.',
  },
  ta: {
    verify: 'கடைசியாக சரிபார்க்கப்பட்டது',
    related: 'தொடர்புடைய வழிகாட்டிகள்',
    faq: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
    disclaimer:
      'இது ஒரு சுயாதீன பார்வையாளர் வழிகாட்டி. தகவல்கள் பகிரங்கமாகப் புகாரளிக்கப்பட்ட ஆதாரங்களிலிருந்து தொகுக்கப்பட்டு அவ்வப்போது சரிபார்க்கப்படுகின்றன; திறந்திருக்கும் நடவடிக்கைகள், கடைகளின் எண்ணிக்கை மற்றும் விலைகள் மாறக்கூடும், எனவே பயணிக்கும் முன் விவரங்களை இடத்தில் அல்லது அதிகாரபூர்வ ஆதாரங்களுடன் உறுதிப்படுத்தவும்.',
  },
  zh: {
    verify: '最后核实',
    related: '相关指南',
    faq: '常见问题',
    disclaimer:
      '本指南为独立游客指南。信息整理自公开报道来源并定期核实；开放情况、摊位数量与价格均可能变动，出行前请在现场或向官方来源确认关键细节。',
  },
};

import { TOPIC_EN } from './topics.en';
import { TOPIC_SI } from './topics.si';
import { TOPIC_TA } from './topics.ta';
import { TOPIC_ZH } from './topics.zh';

const REGISTRY: Record<Locale, Record<string, TopicContent>> = {
  en: TOPIC_EN,
  si: TOPIC_SI,
  ta: TOPIC_TA,
  zh: TOPIC_ZH,
};

export function getTopic(slug: string, locale: Locale): TopicContent | undefined {
  return REGISTRY[locale][slug];
}

export function topicSlugs(): string[] {
  return TOPICS.map((t) => t.slug);
}

export function topicBySlug(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

/** Localized URL for a topic slug (nested slugs keep their path). */
export function topicPath(slug: string, locale: Locale): string {
  return localizedPath(locale, `/${slug}/`);
}

export function topicExists(slug: string): boolean {
  return TOPICS.some((t) => t.slug === slug);
}

export interface TopicGroupView {
  group: TopicGroup;
  label: string;
  items: Topic[];
}

export function topicsByGroup(locale: Locale): TopicGroupView[] {
  return TOPIC_GROUP_ORDER.map((group) => ({
    group,
    label: TOPIC_GROUP_LABELS[locale][group],
    items: TOPICS.filter((t) => t.group === group),
  }));
}
