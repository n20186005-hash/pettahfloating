import type { TopicContent } from './topics';

// Chinese topic content is not authored yet. Keep an empty registry so the
// import in topics.ts resolves and no /zh/<topic> pages are generated.
export const TOPIC_ZH: Record<string, TopicContent> = {};
