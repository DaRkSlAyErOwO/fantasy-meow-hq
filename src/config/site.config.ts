/**
 * Fantasy Meows Site Configuration
 * Single source of truth for links, metadata, and mint values.
 * All facts and TBA values mirror FANTASY-MEOWS-WEBSITE-REFERENCE.md.
 */

export const siteConfig = {
  SITE_NAME: "Fantasy Meows",
  TAGLINE_PRIMARY: "Magic lives in whiskers.",
  TAGLINE_SECONDARY: "Ordinary cats. Extraordinary worlds.",
  DESCRIPTION:
    "A cozy pixel fantasy cat world where your Meow has a House, a Class, and a place on the map.",
  // TODO(founder): final domain placeholder
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://fantasymeows.example",
  DISCORD_URL: "https://discord.gg/yCkDXTMbk6",
  X_URL: "https://x.com/FantasyMeow_hq",
  X_HANDLE: "@FantasyMeow_hq",
  LOGO: "wordmark" as const,
  COPYRIGHT_YEAR: 2026,

  MINT: {
    status: "Coming soon",
    chain: "TBA",
    supply: "TBA",
    // Headline values in the Mint section; per-phase values live under `phases`
    price: "TBA",
    perWallet: "TBA",
    teamReserve: "TBA",
    reveal: "TBA",
    date: "TBA",
    phases: {
      og: {
        name: "Founding Whisk",
        tag: "OG",
        badge: "Guaranteed mint in window",
        who: "Founding Whisk allowlist winners",
        guarantee: "Guaranteed mint within the OG window",
        price: "TBA",
        perWallet: "TBA",
        window: "TBA",
        spots: "TBA",
      },
      gtd: {
        name: "GTD",
        tag: "GTD",
        badge: "Guaranteed mint in window",
        who: "GTD allowlist",
        guarantee: "Guaranteed mint within the GTD window",
        price: "TBA",
        perWallet: "TBA",
        window: "TBA",
        spots: "TBA",
      },
      fcfs: {
        name: "FCFS",
        tag: "FCFS",
        badge: "Not a guaranteed mint",
        who: "WL / Waitlist (and possibly public)",
        guarantee: "First come, first served while supply lasts. Not a guaranteed mint.",
        price: "TBA",
        perWallet: "TBA",
        window: "TBA",
        spots: "TBA",
      },
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
