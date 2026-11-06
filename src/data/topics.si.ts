import { TOPIC_SI_PART1 } from './topics.si.part1';
import { TOPIC_SI_PART2 } from './topics.si.part2';
import { TOPIC_SI_PART3 } from './topics.si.part3';
import { TOPIC_SI_PART4 } from './topics.si.part4';
import { TOPIC_SI_PART5 } from './topics.si.part5';
import type { TopicContent } from './topics';

export const TOPIC_SI: Record<string, TopicContent> = {
  ...TOPIC_SI_PART1,
  ...TOPIC_SI_PART2,
  ...TOPIC_SI_PART3,
  ...TOPIC_SI_PART4,
  ...TOPIC_SI_PART5,
};
