export interface HouseRecord {
  slug: string;
  name: string;
  emoji: string;
  vibe: string;
  tagline: string;
  description: string;
  motto: string;
  signatureColors: Array<{ name: string; hex: string }>;
  discordChannel: string;
  denGreeting?: string;
  atlasAffinity?: string;
  webArt500: string;
  webArt1000: string;
  altText: string;
}

export interface ClassRecord {
  slug: string;
  name: string;
  role: string;
  loreLine: string;
  flavor: string;
  silhouetteKit: string;
  signatureAbility?: {
    name: string;
    description: string;
  };
  landAffinity: string;
  discordEmoji?: string;
  webArt500: string;
  webArt1000: string;
  altText: string;
}

export interface UtilityCard {
  id: string;
  icon: string;
  name: string;
  phaseLabel: string;
  whatItIs: string;
  points: string[];
  whatThisIsnt: string;
}

export interface RoadmapPhase {
  phase: string;
  name: string;
  status: "In progress" | "Planned";
  items: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface MeritsTier {
  emoji?: string;
  tier: string;
  text: string;
}
