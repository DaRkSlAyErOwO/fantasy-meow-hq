# Fantasy Meows: Website Reference

**For:** an AI coding agent (Google Antigravity) rebuilding the Fantasy Meows website from scratch in a new design language.
**Version:** 1.0 · 8 October 2026 · Phase 0a (pre-mint marketing site)
**Sources merged here:** the Fantasy Meows Project Bible (Utility v3), the current site's content and config (`lib/content.ts`, `site.config.ts`, page files), the Discord channel copy, and the X profile kit. Where those sources disagreed, the choice made here is noted in Appendix A.

> **One rule above all:** the words, facts and rules in this document are fixed. The look, layout, motion and tech are yours to design. If something isn't covered here, choose the more modest, more honest option and leave a `TODO(founder)` comment. Do not invent facts, numbers, dates, partners or features.

---

## Quick facts card

| Item | Value |
|---|---|
| Project name | Fantasy Meows |
| World | Whiskerwild |
| One-line pitch | A cozy pixel fantasy cat world where your Meow has a House, a Class, and a place on the map. |
| Primary tagline | Magic lives in whiskers. |
| Secondary tagline | Ordinary cats. Extraordinary worlds. |
| Unit name | a Meow (singular), Meows (plural) |
| Community name (soft) | wanderers (before mint) |
| Houses (6) | 🕯️ Circle of Whisk · 🛡️ Pawguard · 🍄 Rootpads · 🔥 Emberkin · ❄️ Rimewhisper · 🌌 Voidpurr |
| Classes (5) | Knight · Archer · Heavy Knight · Mage · Assassin |
| Utility (3) | Hearth Rest (Phase 1) · Territories (Phase 2, Landmark slices Phase 3) · Whiskerwild Atlas (Phase 1, grows through Phase 4) |
| Points | Merits (earned in weekly Soft Steps quests). Rest Points (from Hearth Rest, Phase 1). Neither has cash value. |
| Mint phases | 1. Founding Whisk (OG) → 2. GTD → 3. FCFS |
| Price / supply / mint date / chain | **TBA / TBA / TBA / TBA** |
| Discord | https://discord.gg/yCkDXTMbk6 |
| X | https://x.com/FantasyMeow_hq (@FantasyMeow_hq) |
| Website domain | **TBD.** Use the placeholder `https://fantasymeows.example` in one config value, marked `TODO(founder): final domain`. |
| Current roadmap phase | Phase 0a (marketing site and Discord), in progress |

---

## Contents

1. [How to use this doc](#1-how-to-use-this-doc)
2. [Rules for the AI (non-negotiable)](#2-rules-for-the-ai-non-negotiable)
3. [Project overview and brand voice](#3-project-overview-and-brand-voice)
4. [World and lore](#4-world-and-lore)
5. [The six Houses](#5-the-six-houses)
6. [The five Classes](#6-the-five-classes)
7. [Utility](#7-utility)
8. [Roadmap](#8-roadmap)
9. [Mint and the path to the list](#9-mint-and-the-path-to-the-list)
10. [Community (Discord)](#10-community-discord)
11. [FAQ](#11-faq)
12. [Safety and official links](#12-safety-and-official-links)
13. [Disclosures](#13-disclosures)
14. [Sitemap and page-by-page spec](#14-sitemap-and-page-by-page-spec)
15. [Brand assets, colors, type and pixel-art rules](#15-brand-assets-colors-type-and-pixel-art-rules)
16. [Design direction](#16-design-direction)
17. [Technical requirements and launch checklist](#17-technical-requirements-and-launch-checklist)
18. [Open decisions and TBD list](#18-open-decisions-and-tbd-list)
19. [Starter prompt for Antigravity](#19-starter-prompt-for-antigravity)
- [Appendix A: Copy decisions and changes from the old site](#appendix-a-copy-decisions-and-changes-from-the-old-site)
- [Appendix B: Glossary](#appendix-b-glossary)

---

## 1. How to use this doc

### 1.1 The goal

Build the public, pre-mint marketing website for Fantasy Meows (roadmap Phase 0a). It introduces the world, the six Houses and five Classes, explains the planned utility honestly, shows the roadmap and the (TBA) mint plan, answers common questions, keeps visitors safe from scams, and sends people to the Discord. The founder dislikes the current site's design, so the new site must look and feel **new**. Only the content carries over.

The site's main job, in priority order:
1. Make people feel the world (cozy, warm, a little whimsical) in the first screen.
2. Send them to the Discord ("Join Discord" is the primary call to action everywhere).
3. Explain Houses, Classes, utility, roadmap and mint plainly, with nothing overpromised.
4. Keep them safe (official links, "we never DM first", no wallet connection before mint).

### 1.2 What is fixed and what is free

| Fixed (do not change) | Free (your call) |
|---|---|
| All facts, names, spellings and numbers (including every "TBA") | Visual design language, color use, layout, grid, spacing |
| The copy in this document (use it word for word; minor line breaks are fine) | Page composition, section order within a page (keep the home order unless there's a strong reason) |
| The rules in Section 2 | Motion, hover effects, transitions (respect reduced motion) |
| The page list in Section 14 (every page must exist) | Component design, illustrations made of CSS/SVG shapes, icons |
| Links (Discord, X) and the TBD domain placeholder | Tech stack (recommendation below) |
| Alt text meaning for each image (you may polish wording) | Fonts (within the guidance in Section 15) |
| Pixel art must stay crisp (no smoothing) | Which images appear where, as long as each House and Class page shows its own art |

**Do not copy the old layout.** The old site was a dark navy-and-plum night sky with twinkling pixel stars, gold notched "pixel frame" borders, parchment cards on a dark background, a two-column hero with a rotating Class carousel, and a uniform stack of centered section headings with "✦ eyebrow ✦" labels. Treat that as a reference for what **not** to repeat. Screenshots of the old site are not included on purpose.

### 1.3 Recommended stack

Any of these is fine. Pick one and keep it simple.

- **Astro** (recommended): static output, near-zero JavaScript, content collections or a single typed data file, excellent Lighthouse scores. Add small islands only where needed (mobile menu, optional art carousel).
- **Next.js (App Router) with static export** (`output: "export"`): fine if you prefer React. Use `images: { unoptimized: true }` so pixel art isn't resampled.
- Styling: Tailwind CSS or plain CSS with custom properties. Build a small design-token file (colors, fonts, spacing) so the founder can re-theme later.

Requirements regardless of stack:
- Fully static, deployable to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages). Hosting is TBD.
- Responsive from 320 px phones to wide desktops. Mobile first.
- Fast: Lighthouse Performance, Accessibility, Best Practices and SEO all 90+ on mobile.
- Accessible: WCAG 2.1 AA (contrast, keyboard, focus, alt text, reduced motion). See Section 17.
- SEO: per-page title and description, Open Graph and Twitter card tags, canonical URLs from one `SITE_URL` config value, `sitemap.xml`, `robots.txt`.
- **No wallet libraries.** Do not install or load wagmi, viem, ethers, web3.js, RainbowKit, ConnectKit, Web3Modal or similar. There is no wallet feature on this site.
- Put every editable value in two files:
  - `site.config` (name, taglines, `SITE_URL`, Discord URL, X URL, X handle, logo choice, every mint field set to `"TBA"`).
  - `content` (Houses, Classes, utility, roadmap, mint phases, Merits tiers, Archmages, FAQ, disclosures, safety copy), copied from this document.

### 1.4 How to read the copy in this doc

- Text inside a table cell or a quote block marked **Copy** is final public copy. Use it exactly.
- `[TBA]` means show the literal word **TBA** on the site.
- `TODO(founder)` means a decision the founder still has to make. Leave the placeholder and a code comment. Never fill it with a guess.
- Notes in *italics* that start with "Note:" are for you, not for the site.

---

## 2. Rules for the AI (non-negotiable)

Read these before writing a single component. If a design idea conflicts with a rule, the rule wins.

### 2.1 Content rules

1. **No financial promises.** No promised APY, APR, yield, returns, ROI, "passive income", "daily rewards", price targets or floor prices. Never imply that holding, resting or owning anything makes money.
2. **No fake claims.** No "sold out", "selling fast", "only X left", "limited spots" pressure, countdown panic, or partnership/collab claims. None of these exist.
3. **TBA means TBA.** Price, supply, per-wallet limit, mint windows, number of spots, team reserve, reveal style, mint date and **chain** all show as **TBA** until the founder announces them. Do not mention Base or any other chain anywhere on the site, in metadata or in code comments that ship to the browser.
4. **Don't describe how the art is made.** Never say the art is hand-drawn, hand-made, hand-crafted or human-made. The current images are **samples**; a hired artist's final art will replace them. (Recommended: a small caption "Preview art. The final collection may look different." See Section 15.)
5. **No mention of bots, AI, or automation** anywhere on the public site: not in copy, alt text, metadata, image file names, comments that ship to the browser, or the footer. (This includes words like "automated", "AI-generated", "bot".)
6. **No wallet connection, ever, on the pre-mint site.** No "Connect wallet" button, no wallet modal, no signature requests, no seed phrase or private key fields, no "check eligibility by connecting". Include the safety note and official links (Section 12).
7. **Territory and fractional ownership wording is sensitive.** Keep it descriptive, in-world and future-tense, with no financial promises. Always show the Territory disclaimer (Section 7.3) next to any Territory or Landmark-slice copy. Never use "real estate", "property", "investment", "income", "yield", "shares", "equity", "dividends" or "Robinhood-style" on the site. All Territory copy is flagged `TODO(legal): lawyer review before launch`.
8. **Keep a Disclosures page** at `/disclosures/` and repeat the four core disclosures in the footer of every page.
9. **WL is never "guaranteed".** Every time WL is described, make clear it means FCFS access and is not a guaranteed mint. Only Founding Whisk (OG) and GTD are guaranteed, and only within their windows.
10. **Lore builds the world, never the wallet.** Lore copy never mentions tokens, prices, value, rarity-as-value, or income. No House or Class is "rarer" or "worth more".
11. **No token talk** beyond the FAQ answer in Section 11. Do not mention $MEOW, $WHISK or any ticker.
12. **No invented content.** No team bios, no partner logos, no stats ("10,000 members"), no testimonials, no dates, no email capture form, no Terms or Privacy pages with made-up legal text. If a section would need something not in this doc, leave it out or add a `TODO(founder)`.

### 2.2 Tone rules

- Cozy, warm, a little whimsical, never hype. Calm statements, short sentences, plain English.
- No exclamation-mark stacks, no "🚀", no "WAGMI", no "LFG", no "don't miss out", no urgency.
- Cats are dignified and a little ridiculous. Humor comes from cat behavior (naps, knocking things off tables, sitting by doors), not memes.
- Voidpurr is mysterious, never evil. No grimdark, no gore.
- **The Darkness** (Arc 1 v3) is a nameless force: a rot, shadows and monsters, never a named character and never gory. War beats are brave and hopeful. No named characters in the story copy. The rot is violet, never brown. Never color Voidpurr with the rot violet: their starlit night is the opposite of the Darkness.
- Ruling and defending land is story, never earning. Lore copy never says earn, yield, value or returns about land or Meows.
- Not baby-talk: no "uwu", no oversized sparkle-eye cuteness in copy.

### 2.3 Banned-word check (run before you finish)

Search the built site text (case-insensitive, whole words). Each of these must return **zero** hits except where listed:

| Word or phrase | Allowed only in |
|---|---|
| APY, yield, ROI, floor | Utility intro ("No promised APY."), Disclosures "Word watchlist", Discord rules quote if used. Nowhere else. |
| passive income, returns | Utility intro ("No guaranteed returns."), Atlas "What this isn't" ("no promises of returns"), Roadmap footnote, Disclosures page. |
| sold out, partnership, collab, moon, pump, 100x | Disclosures "Word watchlist" only |
| guaranteed | Only next to Founding Whisk (OG) and GTD, or in "not guaranteed" / "nothing is guaranteed" |
| Base, Ethereum, Solana, Polygon (as chains) | Nowhere |
| AI, A.I., bot, automated, automation, AI-generated, machine-made | Nowhere |
| hand-drawn, hand-made, handmade, hand-crafted, human-made | Nowhere |
| real estate, property, investment, securities, income, shares, equity, dividends, Robinhood | Nowhere, with three exceptions: the Territory disclaimer ("not real-world property, securities or an investment"), the disclosure "Nothing here is financial advice or an offer of securities", and the word "income" in the Disclosures word watchlist. |
| connect wallet, seed phrase | "seed phrase" only in safety copy ("we will never ask for your seed phrase") |
| $MEOW, $WHISK, token | "token" only in the FAQ "Is there a token?" answer, the Hearth Rest FAQ ("They aren't a token") and the Disclosures lore line ("Lore never promises tokens") |

---

## 3. Project overview and brand voice

### 3.1 What Fantasy Meows is

**Copy (long pitch, for About-style use):**
> Fantasy Meows is a pixel-art cat collection set in Whiskerwild, a soft-epic fantasy world where ordinary cats carry quiet magic in their whiskers. Every Meow belongs to one of six Houses (who you are in the story and the Discord) and one of five Classes (what you do in the game and on the map).

**Copy (one line, used as the site meta description):**
> A cozy pixel fantasy cat world where your Meow has a House, a Class, and a place on the map.

**Formula:** every Meow = 1 House + 1 Class + cosmetics (fur, eyes, background, accessories). Cosmetics have no game effect in v1.

### 3.2 Voice: "Cozy wonder, soft-epic, still a cat"

- **Cozy wonder:** lantern light, tea steam, moss on old stone, the hush before a story starts. We invite people in; we don't shout at them.
- **Soft-epic:** banners, oaths, ancient magic and great halls. The stakes feel big but kind. Whiskerwild has a war against a nameless Darkness, told like a storybook at dusk, not a war film.
- **Still a cat:** every Meow is unmistakably a cat. Knights still knock things off tables. Mages still nap in sunbeams on top of spellbooks.

**Avoid:** grimdark, baby-kawaii, corporate fluff ("synergistic ecosystem"), crypto-bro hype ("WAGMI to the moon", floor talk, countdown panic, "last chance" pressure).

### 3.3 Do / don't examples (from real project copy)

| Don't say | Say instead (real copy) |
|---|---|
| "🚀 Massive utility drop, floor going parabolic!" | "A new road opened in Whiskerwild today. Here's what it does, and what it doesn't." |
| "Passive income for holders!!" | "Rest your Meow at the Hearth and earn Rest Points. They're for in-world perks, not a paycheck." |
| "SOLD OUT IN MINUTES (soon)" | "Founding Whisk spots are being drawn this week. Here's how it works." |
| "Mint date coming soon, don't miss it!!" | "Mint opens when the Crossing is ready. We'll say so here and in #announcements, never in a DM." |
| "Exclusive WL spots, guaranteed!" | "WL is not a guaranteed mint. Only Founding Whisk (OG) and GTD are guaranteed, and only within their windows." |
| "Join 10k holders earning daily" | "Join the Discord, pick your House, and start earning Merits." |
| "Our roadmap: Q1 mint, Q2 token, Q3 metaverse" | "Phases ship when they're ready, never on hype alone." |
| "Voidpurr: the darkest, rarest, most powerful House" | "Their dark is starlit and kind, the opposite of the Darkness. They're the keepers of Whiskerwild's mysteries." |
| "Lost? 404 error." | "This path isn't on the map yet. Even Sembla wanders off sometimes." |

Other good lines to borrow tone from: "Pull up a cushion by the fire." · "Short, so you can get back to napping." · "This is a story, not a trading floor." · "Kindness counts, and speed doesn't."

---

## 4. World and lore

### 4.1 Whiskerwild

*Arc 1 v3 (the Darkness war story), founder-approved Oct 19, 2026. Full scroll story with scene notes and chapter colors: `fantasy-meows-lore/scroll-story-v3.md`. The site shows it compactly, using the copy below.*

**Copy (opening line, shown under the title):**
> Before the Houses kept their fires, the forest had to be saved.

**Copy (intro, one sentence):**
> A patchwork realm of mossy keeps, lantern-lit roads, deep green forests and snow-silent peaks, stitched together by an old magic that only cats can feel.

**Copy (three paragraphs):**
> Once, Whiskerwild was green from root to ridge. Six Houses kept their fires there, listened to the hum in their whiskers, and argued about the warmest stones. Then the Darkness came in at the edges, quiet as frost. It had no face and asked for nothing. It only spread, and the forest began to rot.
>
> The cats had never needed to fight, so they learned. Mages answered first, with fire. When the Darkness bred spirits that fire could not burn, Knights took up steel. When it sent trolls the size of hills, Heavy Knights raised greatshields. When it struck from the treeline, Archers climbed and Assassins slipped between shadows. Five answers became five clans. Your House was who you were. Your clan was how you stood.
>
> Behind the clans, forts and lantern-lit cities rose. When the Darkness pressed on every border at once, the cats summoned heroes from another world, and together they saved the territories and pushed the borders wide. The land was theirs to rule and to defend. Now the far lanterns flicker. The Darkness has risen again, stronger than before, and Whiskerwild needs heroes.

**Copy (ending, after The Crossing block):**
> Every hero starts small. One territory. A few loyal Meows. One fire to keep lit.

**Copy (closing line, hands off to The Six Houses):**
> Every hero needs a House. Which fire will you stand beside?

**Lore rules (Arc 1 v3):** no named characters; the Darkness is a nameless force; no gore. The rot is violet, never brown, and Voidpurr never gets the rot violet. Houses predate the Darkness. The five Classes are fighting clans, each born as an answer to a new threat. Any House can join any clan. Ruling and defending land is story, never earning. The old framing "Whiskerwild is not at war. It is unfinished." is retired.

### 4.2 The Crossing (the door story hook)

The Crossing is the arrival only: the moment the cats of Whiskerwild sang open a door into another world and summoned heroes, with ordinary cats following them through. It is also the story framing for mint ("a new Meow crosses into Whiskerwild"). It is a story beat, not a mechanic or a promise.

**Copy (short, for the home page):**
> **The Crossing**
> Many Meows were once ordinary cats somewhere else. When the Darkness pressed on every border, the cats of Whiskerwild sang to the hum until a door opened into another world. That moment is called the Crossing. Heroes came through to lead, and behind them came barn cats and bookshop cats who had felt the hum and followed. Being cats, they went through. Every Meow still arrives a cat, but with whiskers that now *hum*.
>
> The Crossing is how we talk about mint: a story beat, not a promise.

**Copy (long version, "Lore Crumb #1"; it matches the Discord #lore-crumbs post):** *Written before Arc 1 v3 ("Every Meow", a quiet night, no summoning). Don't add it to the site until Lore Keeper rewrites it to match the summoning (`TODO(founder)`).*
> **Lore Crumb #1: The Crossing**
> Every Meow in Whiskerwild was once an ordinary cat somewhere else. A barn cat. A bookshop cat. A windowsill cat with strong opinions about pigeons.
>
> On one particular quiet night, each of them noticed a door that hadn't been there before. And, being a cat, went through it.
>
> That moment is called **the Crossing**. Nobody remembers it the same way. Some say it smelled like rain on warm stone. Some say it sounded like a purr the size of a mountain. A Rimewhisper once said it felt "like being remembered," and then refused to explain.
>
> Every Meow comes through still a cat. Still knocks things off tables. Still naps in sunbeams. But on the other side, their whiskers *hum*.
>
> *Magic lives in whiskers.*

**Copy (welcome hook, for hero sub-lines, banners or social cards):**
> A door appeared that wasn't there before. Being cats, they went through.

### 4.3 The Archmages

Three soft-mythic figures remembered in songs. Maybe real, maybe exaggerated, definitely still cats.

| Name | Title | Copy (description) | Copy (quote) |
|---|---|---|---|
| Sembla | the Weaver of Ways | A long-whiskered silver cat said to have stitched the first roads of Whiskerwild by walking them in her sleep. Patient, curious, and famously bad at being on time. | "Every path is a whisker someone followed." |
| Cinderbowl | the Hearth-Warden | A broad, ginger, scarred old tom who kept the first fire burning through the Long Frost by curling around it for a season. Gruff, generous, and asleep more often than not. | "Rest is not idleness. Rest is how the fire stays lit." |
| Nightskein | the Quiet Thread | A black cat with one white whisker, who is said to know every secret of Whiskerwild and tell none of them. Kind but unknowable. | "Some doors open only when no one is watching." |

*Note: Sembla is tied to roads, maps and the Atlas; Cinderbowl to the Hearth, rest and Emberkin; Nightskein to stars, dreams and Voidpurr. There is no confirmed art for individual Archmages. `assets/art/specials/special-archmage-3000.png` exists as a direction sample only; use it on the site only if the founder approves (`TODO(founder)`). Arc 1 v3 check: the Archmage quotes and descriptions still fit (Nightskein's quiet night is not the Darkness, and must never be drawn or written as part of it). Whether the Archmages lived before, during or after the war is open (`TODO(founder)`).*

### 4.4 Factions at a glance

- **Houses (6)** = identity, story and Discord culture. They kept their fires long before the Darkness came. No House is better, rarer or worth more than another.
- **Classes (5)** = the five fighting clans, each born as an answer to a new threat from the Darkness (Mage, then Knight, Heavy Knight, Archer, Assassin). In the game, how a Meow claims, defends and upgrades places on the Atlas.
- **Any House can join any clan.** "Your House was who you were. Your clan was how you stood."
- **The Darkness** = a nameless force that rots the forest. Shadows and monsters, never a named villain, never gore. It has risen again, stronger.
- **The Atlas** = the great living map. Places on it fill in as Meows make them their own (later phases).

---

## 5. The six Houses

Display order everywhere: Circle of Whisk, Pawguard, Rootpads, Emberkin, Rimewhisper, Voidpurr. URL slugs are fixed.

*Note: the "Signature colors" are the House palettes from the Project Bible with the hex values the current site uses. They are House accent colors, not the site's UI palette. The "Den greeting" is the House channel's opening line in Discord; use it as an optional pull-quote on the House page. The "Atlas affinity" is design intent and optional on the site.*

### 5.1 🕯️ Circle of Whisk

| Field | Copy |
|---|---|
| Slug / URL | `circle-of-whisk` → `/houses/circle-of-whisk/` |
| Emoji | 🕯️ |
| Vibe (personality line) | Scholarly, candlelit, gently nerdy |
| Tagline (short blurb) | The scholars and dreamers of Whiskerwild, gathered in a ring of candlelight where every whisker-twitch is a spell half-remembered. |
| Description (paragraph) | The Circle of Whisk is the oldest House, or at least it claims to be, and no one has had the energy to argue. They meet in round rooms with round tables and round cushions, because a circle has no head and everyone gets a turn to speak (and to nap). Circle cats keep the libraries, copy the old songs, and argue gently about which star is which. They're the House most likely to have read the instructions, and the least likely to have followed them. |
| Motto | "Listen first." |
| Signature colors | Parchment `#efe0bd` · Plum `#5b2a6e` · Candle-gold `#e8b64c` |
| Discord channel | `#circle-of-whisk` |
| Den greeting (optional) | Round room, round table, round cushions. A circle has no head, so everyone gets a turn to speak (and to nap). |
| Atlas affinity (optional, design intent) | A small boost to Study and Upgrade actions on Temples & Academies. |
| Art | `assets/art/houses/house-circle-of-whisk-3000.png` (web: `assets/web/art/circle-of-whisk-500.webp`, `-1000.webp`) |
| Alt text | Pixel-art cream cat in a plum wizard hat holding a glowing staff beside a moonlit castle |

### 5.2 🛡️ Pawguard

| Field | Copy |
|---|---|
| Slug / URL | `pawguard` → `/houses/pawguard/` |
| Emoji | 🛡️ |
| Vibe | Loyal, steadfast, warm protectors |
| Tagline | Steadfast protectors with polished helms and patient hearts, the first paws at every gate and the last to leave the wall. |
| Description | Pawguard cats are the ones who sit by the door at night. They walk the walls of old keeps, escort travelers on the lantern roads, and take their oaths seriously, though their oaths do include "a nap at noon, if the watch allows." They're reliable, warm and a little stubborn. In Whiskerwild sayings, "a Pawguard promise" means something you can count on. |
| Motto | "We hold." |
| Signature colors | Steel blue `#4a6a8f` · Brass `#c39a4a` · Banner-red `#a83a32` |
| Discord channel | `#pawguard` |
| Den greeting (optional) | Helms polished, lanterns lit, someone's already sitting by the door. |
| Atlas affinity (optional) | A small boost to Defend actions on Castles & Gates. |
| Art | `assets/art/houses/house-pawguard-3000.png` (web: `assets/web/art/pawguard-500.webp`, `-1000.webp`) |
| Alt text | Pixel-art grey tabby in a horned steel helm holding a book and a glowing orb under a night sky |

### 5.3 🍄 Rootpads

| Field | Copy |
|---|---|
| Slug / URL | `rootpads` → `/houses/rootpads/` |
| Emoji | 🍄 |
| Vibe | Earthy, calm, forest wanderers |
| Tagline | Soft-footed wanderers of moss and mushroom, who know every forest path by the feel of the earth beneath their beans. |
| Description | Rootpads live where the trees are oldest. They tend glowing mushroom rings, talk to owls (who mostly ignore them), and can walk through a forest without snapping a single twig. Rootpads are gardeners, scouts and herbalists. They're calm and grounded, and they'll quietly become the most stubborn cat in the room if anyone threatens a tree. |
| Motto | "Grow slow, grow deep." |
| Signature colors | Moss green `#5d7a3a` · Bark brown `#6b4a2e` · Firefly yellow `#f2d65a` |
| Discord channel | `#rootpads` |
| Den greeting (optional) | Mind the mushroom ring. The owls are listening, even if they pretend not to be. |
| Atlas affinity (optional) | A small boost to Claim actions on Forests. |
| Art | `assets/art/houses/house-rootpads-3000.png` (web: `assets/web/art/rootpads-500.webp`, `-1000.webp`) |
| Alt text | Pixel-art tabby in a brown hooded cloak holding a book in a glowing mossy forest |

### 5.4 🔥 Emberkin

| Field | Copy |
|---|---|
| Slug / URL | `emberkin` → `/houses/emberkin/` |
| Emoji | 🔥 |
| Vibe | Warm, loud, makers & hearth-tenders |
| Tagline | Warm-hearted forge-cats and hearth-tenders, carrying a little of Cinderbowl's fire in every glowing whisker. |
| Description | The Emberkin keep the fires of Whiskerwild burning in forges, kitchens, lanterns and hearths. They're makers and cooks, loud laughers and fierce friends, and their whiskers glow faintly orange when they're excited (which is often). Emberkin believe a warm meal fixes most problems and a good hammer fixes the rest. Hearth Rest is closest to their heart. |
| Motto | "Keep it lit." |
| Signature colors | Ember orange `#e0702a` · Soot black `#2a2224` · Copper `#b86b3c` |
| Discord channel | `#emberkin` |
| Den greeting (optional) | The forge is warm, the kettle's on, and someone's whiskers are already glowing. |
| Atlas affinity (optional) | A small boost to Upgrade actions on Plazas & Markets. |
| Art | `assets/art/houses/house-emberkin-3000.png` (web: `assets/web/art/emberkin-500.webp`, `-1000.webp`) |
| Alt text | Pixel-art ginger cat in an orange wizard hat and robes holding a fire staff amid flames |

### 5.5 ❄️ Rimewhisper

| Field | Copy |
|---|---|
| Slug / URL | `rimewhisper` → `/houses/rimewhisper/` |
| Emoji | ❄️ |
| Vibe | Quiet, wry, frost-touched watchers |
| Tagline | Quiet cats of the high snows, whose whiskers catch frost like starlight and whose words are few but true. |
| Description | Rimewhisper cats come from the northern peaks, where the air is thin and the stars are close. They're patient, observant and wry, the sort of cat who says one sentence at dinner that everyone remembers for a week. They read weather, track the moons and build beautiful ice-lanterns that never melt indoors. They're often mistaken for aloof, but anyone who earns a Rimewhisper's trust has a friend for nine lives. |
| Motto | "Still waters, sharp eyes." |
| Signature colors | Frost white `#eef3f7` · Glacier blue `#6fa8d6` · Silver `#b9c0c8` |
| Discord channel | `#rimewhisper` |
| Den greeting (optional) | Thin air, close stars, an ice-lantern that never melts indoors. |
| Atlas affinity (optional) | A small boost to Defend actions on Towers & high ground. |
| Art | `assets/art/houses/house-rimewhisper-3000.png` (web: `assets/web/art/rimewhisper-500.webp`, `-1000.webp`) |
| Alt text | Pixel-art white fluffy cat in a frosty white wizard hat holding an ice-crystal staff |

### 5.6 🌌 Voidpurr

| Field | Copy |
|---|---|
| Slug / URL | `voidpurr` → `/houses/voidpurr/` |
| Emoji | 🌌 |
| Vibe | Mysterious, starlit, riddle-tellers |
| Tagline | Starlit mysteries from the edges of the map, who purr in a frequency only the night can hear. |
| Description | Voidpurr cats are drawn to the places between: the dark between stars, the hush after midnight, the hallway where the lamp has gone out. Their dark is starlit and kind, the opposite of the Darkness. They're the keepers of Whiskerwild's mysteries, and Nightskein is their patron. Voidpurrs are dreamers, stargazers and riddle-tellers, and they are extremely good at appearing on top of a wardrobe without anyone seeing them climb. |
| Motto | "Look closer." |
| Signature colors | Deep indigo `#2e2468` · Starlight violet `#9a7ae0` · Black `#14111c` |
| Discord channel | `#voidpurr` |
| Den greeting (optional) | You didn't see us climb onto the wardrobe. Nobody ever does. |
| Atlas affinity (optional) | A small boost to Claim actions on Dungeons & Alleys. |
| Art | `assets/art/houses/house-voidpurr-3000.png` (web: `assets/web/art/voidpurr-500.webp`, `-1000.webp`) |
| Alt text | Pixel-art calico cat in a grey wizard hat with a violet halo and a purple potion amid swirling magic |

### 5.7 House rules for the site

- **Copy (fine print under the House grid):** "Houses are identity and story. No House is better, rarer or worth more than another."
- If you show Atlas affinity, add once per page: "Affinities are small game nudges for Atlas actions only, and will be tuned through playtesting."
- Cross-House chat lives in `#all-houses-hall`.

---

## 6. The five Classes

Display order everywhere: Knight, Archer, Heavy Knight, Mage, Assassin. URL slugs are fixed.

*Note: "Lore line" comes from the Whiskerwild lore ("knights who guard, archers who watch..."). In Arc 1 v3 each Class is a fighting clan born to answer a new threat from the Darkness: Mages first (fire), then Knights (spirits fire couldn't burn), Heavy Knights (trolls), Archers (dark bolts from afar) and Assassins (the Darkness hiding deep in the rot). "Discord emoji" is the emoji used in the Discord #class-hub post; it's optional on the site. Heavy Knight's 🛡️ is the same emoji as Pawguard, so if you use emoji for Classes, consider skipping them (`TODO(founder)` to pick a different Heavy Knight emoji). "Game kit" ratings are illustrative design intent; show them only with the tuning note.*

### 6.1 Knight

| Field | Copy |
|---|---|
| Slug / URL | `knight` → `/classes/knight/` |
| Role | Balanced frontline |
| Lore line | Knights who guard. |
| Flavor / identity | Steady at claiming and defending. The default anchor of any Party, and comfortable on any tile. |
| Silhouette kit | Helm and light armor, sword and shield |
| Signature ability | (none listed; do not invent one) |
| Land affinity | Castles, Roads |
| Game kit (optional) | Claim: Medium · Defend: Medium · Upgrade: Low |
| Discord emoji (optional) | 🗡️ |
| Art | `assets/art/classes/class-knight-3000.png` (web: `assets/web/art/knight-500.webp`, `-1000.webp`) |
| Alt text | Pixel-art orange tabby Knight in light plate with a sword, a paw-crest shield and a blue cape |

### 6.2 Archer

| Field | Copy |
|---|---|
| Slug / URL | `archer` → `/classes/archer/` |
| Role | Range & scouting |
| Lore line | Archers who watch. |
| Flavor / identity | Supports claims from range and holds well on high ground. |
| Silhouette kit | Hood, bow, quiver |
| Signature ability | **Scout:** Reveals information about nearby tiles, so a Party can move with care. |
| Land affinity | Forests, Towers |
| Game kit (optional) | Claim: Low · Defend: Medium (on high ground) · Upgrade: Low |
| Discord emoji (optional) | 🏹 |
| Art | `assets/art/classes/class-archer-3000.png` (web: `assets/web/art/archer-500.webp`, `-1000.webp`) |
| Alt text | Pixel-art brown tabby Archer in a green hood with a bow and quiver in a mossy forest |

### 6.3 Heavy Knight

| Field | Copy |
|---|---|
| Slug / URL | `heavy-knight` → `/classes/heavy-knight/` |
| Role | Tank |
| Lore line | Heavy knights who hold. |
| Flavor / identity | The strongest defender in Whiskerwild, if a little slow to claim new ground. |
| Silhouette kit | Heavy plate, greatshield, bulky stance |
| Signature ability | **Hold:** Keeps a tile's defend window open longer. |
| Land affinity | Fortresses, Gates |
| Game kit (optional) | Claim: Low · Defend: High · Upgrade: Low |
| Discord emoji (optional) | 🛡️ (clashes with Pawguard; see note) |
| Art | `assets/art/classes/class-heavy-knight-3000.png` (web: `assets/web/art/heavy-knight-500.webp`, `-1000.webp`) |
| Alt text | Pixel-art grey tabby Heavy Knight in full dark plate with a tower shield and war hammer |

### 6.4 Mage

| Field | Copy |
|---|---|
| Slug / URL | `mage` → `/classes/mage/` |
| Role | Magic & support |
| Lore line | Mages who weave. |
| Flavor / identity | Best at upgrades, wards and Study. Light on the front line, heavy on the spellbook. |
| Silhouette kit | Pointed hat, staff, robes |
| Signature ability | **Ward:** Places a temporary protective charm on a tile. |
| Land affinity | Temples, Academies |
| Game kit (optional) | Claim: Low · Defend: Low · Upgrade: High |
| Discord emoji (optional) | 🔮 |
| Art | `assets/art/classes/class-mage-3000.png` (web: `assets/web/art/mage-500.webp`, `-1000.webp`) |
| Alt text | Pixel-art white fluffy Mage in a starry indigo pointed hat and robes holding a crystal staff |

### 6.5 Assassin

| Field | Copy |
|---|---|
| Slug / URL | `assassin` → `/classes/assassin/` |
| Role | Stealth & disruption |
| Lore line | Assassins who slip between shadows. |
| Flavor / identity | Quick to claim contested tiles, light on defense. Moves where the lamps have gone out. |
| Silhouette kit | Hood, twin daggers, void-wisp glow |
| Signature ability | **Slip:** In seasonal Raids, a claim attempt can slip past one defender. |
| Land affinity | Dungeons, Alleys |
| Game kit (optional) | Claim: High (on contested tiles) · Defend: Low · Upgrade: Low |
| Discord emoji (optional) | 🌙 |
| Art | `assets/art/classes/class-assassin-3000.png` (web: `assets/web/art/assassin-500.webp`, `-1000.webp`) |
| Alt text | Pixel-art black hooded Assassin cat with glowing eyes and twin violet daggers in a crypt doorway |

### 6.6 Class rules for the site

- **Copy (under the Class grid):** "Formula: every Meow = **1 House + 1 Class** + cosmetics (fur, eyes, accessories). Cosmetics have no game effect in v1."
- **Copy (tuning note, on the Class grid and every Class page):** "Abilities describe design intent for the Atlas game and will be tuned through playtesting."
- Class Discord chat lives in `#class-hub` (one thread per Class) before mint.

---

## 7. Utility

Three pieces, shipped in phases. **None of them exists yet**; the site describes plans. Every utility card must show its phase label and its "What this isn't" note. Show the Territory disclaimer (7.3) with the Territories card.

**Copy (section intro):**
> Three pieces, shipped in phases. No promised APY. No guaranteed returns. Land fees, if any, come only from real activity in the protocol.

### 7.1 🔥 Hearth Rest

| Field | Copy |
|---|---|
| Phase label | Coming in Phase 1 |
| What it is | Rest your Meow by the fire and build up Rest Points. Your Meow stays in your wallet while it rests (planned design), and you can wake it whenever you like. |
| Points | • Rest Points help power your Party on the Atlas. • They unlock cosmetic perks like Hearth badges and profile frames. • They can give priority or eligibility in future land phases. • Rested Meows get the Hearth Resting role in Discord. |
| What this isn't | Rest Points are non-monetary points with no cash value. They're for in-world perks, not a paycheck. |

*Note: Hearth Rest is the project's staking feature, but do not use the word "staking" in large headings; "rest" is the in-world word. Never show a rate, "earn X per day", or any number of points.*

### 7.2 🏰 Territories

| Field | Copy |
|---|---|
| Phase label | Coming in Phase 2 |
| What it is | Whiskerwild is divided into places you can hold: castles, forests, dungeons, roads, temples and plazas. Each Territory is its own collectible, tied to a tile on the map. |
| Points | • Some tiles need a Party that meets a claim gate (for example, a Dungeon wants an Assassin and an Archer). • Gates reward collecting different Classes and taking part over time, not just holding the most. • Later (Phase 3), the grandest Landmarks can be owned in slices by many holders. • If a Territory generates real fees in the protocol, a published portion goes to its owner(s). The split is published before any land sale. |
| What this isn't | Territory fee distributions, if any, come only from real fees generated in the protocol and may be zero. No fees means nothing to distribute. |

*Note: "Territories" covers tokenized digital places on the map, and "owned in slices" covers fractional ownership of the grandest Landmarks (Phase 3). Keep the wording exactly as above. Do not expand it, add examples of earnings, charts, or "how much you could earn". All of it is `TODO(legal)`.*

### 7.3 Territory disclaimer (required next to the Territories card and on /disclosures/)

**Copy:**
> Territories and Landmark slices are planned features of a game. They are digital collectibles, not real-world property, securities or an investment, and nothing on this site is an offer to sell them. Details, including any fee split, will be published before any land sale and may change after legal review.

*Note: this disclaimer is new copy written for the rebuild (the old site didn't have it). It is the only place the words "property", "securities" and "investment" may appear, always negated. Flag it `TODO(legal): lawyer to review all Territory and Landmark-slice wording before launch`.*

### 7.4 🗺️ Whiskerwild Atlas

| Field | Copy |
|---|---|
| Phase label | Coming in Phase 1 |
| What it is | A pixel map game in your browser. Pan and zoom across Region 1, see who holds what, and watch House banners go up on tiles as Whiskerwild fills in. |
| Points | • Phase 1: read-only map of Region 1 with tile previews and a Party builder. • Phase 2: claim, defend and upgrade tiles with your Party. • Phase 4: seasonal loops: Patrol, Hunt, Study and opt-in Raids. • Raids never take anyone's collectibles. They shift banners for a season. |
| What this isn't | The Atlas is a game about places and Parties. Ownership first, no grind, and no promises of returns. |

*Note: the Atlas is **not** part of this build. Do not create an `/atlas` page, a fake map, or a "Launch Atlas" button. You may show a decorative, clearly non-interactive map illustration made of CSS/SVG if your design calls for it.*

### 7.5 Utility summary line (under the three cards)

**Copy:**
> Full stack: Meow → Discord identity + Hearth Rest + Party power; Territory → a tile on the Atlas, held by one holder or (for Landmarks) in slices, with any fee share coming only from real fees. [Read the disclosures](/disclosures/).

---

## 8. Roadmap

Honest and dateless. **Never add dates, quarters or percentages.** Status labels: "In progress" (only Phase 0a) and "Planned" (all others).

**Copy (section intro):**
> From this marketing site to a living Atlas. Phases ship when they're ready, never on hype alone.

| Phase | Name | Status | Items (copy, one bullet each) |
|---|---|---|---|
| 0a | Marketing site & Discord | In progress | • This website: lore, Houses, Classes, Utility, Roadmap, FAQ. • Discord opens: verify, pick your House, first weekly Soft Steps quests. • Merits begin. |
| 0b | The Crossing (mint) | Planned | • Mint page with eligibility checker: Founding Whisk (OG) → GTD → FCFS. • Reveal: every Meow arrives with a House and a Class. • My Party v0: see your Meows and link Discord for Holder, House and Class roles. |
| 1 | Hearth Rest & Atlas v1 | Planned | • Rest and wake your Meows; see Rest Points (audited contract). • Read-only Atlas of Region 1 with tile previews. • Party builder. |
| 2 | First region opens | Planned | • Region 1 (around 36 tiles suggested) with tile types and claim gates. • Fee split published before any sale. • Landowner role, My Territories tab. |
| 3 | Landmark slices & the Ledger | Planned | • Own a slice of a Landmark alongside other holders. • Landmark Ledger: each tile's actual fee history, never projections. • Monthly transparency posts from real data. |
| 4 | Seasons | Planned | • Seasonal loops: Patrol, Hunt, Study and opt-in Raids. • Tile upgrades and the House Cup. • Sponsor banners on select tiles, always clearly labeled. |

**Copy (footnote under the roadmap, required):**
> Plans can change as we build and test. Nothing here is a promise of value or returns.

*Note: the Discord #roadmap post uses slightly different phase titles ("Phase 0a: The Gate opens", "Phase 2: The first region opens") and the intro "Honest and dateless. Each phase starts when the last one is ready, not when a countdown says so." Same meaning. You may use that Discord intro line as a second sentence of the roadmap intro if it fits the design. Phase 3 and the Territory items are `TODO(legal)` with the rest of the Territory copy.*

---

## 9. Mint and the path to the list

### 9.1 Mint status (all TBA)

**Copy (section eyebrow / title / intro):**
> Eyebrow: The Crossing · Title: Mint
> Three calm phases. Supply, price, limits, windows and chain are all **TBA** until they're locked and announced. Earn a spot through Discord Merits, never through DMs.

**Status row (copy; each value is a config field):**

| Field | Value |
|---|---|
| Status | Coming soon |
| Chain | TBA |
| Supply | TBA |
| Team reserve | TBA |
| Reveal | TBA |
| Mint date | TBA |

### 9.2 The three mint phases

Order is fixed: Founding Whisk (OG), then GTD, then FCFS. Label them "Mint phase 1/2/3" (not "Phase 1/2/3", to avoid confusion with the roadmap).

| | Mint phase 1 | Mint phase 2 | Mint phase 3 |
|---|---|---|---|
| Name | Founding Whisk | GTD | FCFS |
| Tag | OG | GTD | FCFS |
| Badge | Guaranteed in window | Guaranteed in window | Not guaranteed |
| Who | Founding Whisk allowlist winners | GTD allowlist | WL / Waitlist (and possibly public) |
| Guarantee line | Guaranteed mint within the OG window | Guaranteed mint within the GTD window | First come, first served while supply lasts. Not guaranteed. |
| Price | TBA | TBA | TBA |
| Per wallet | TBA | TBA | TBA |
| Window | TBA | TBA | TBA |
| Spots | TBA | TBA | TBA |

*Note: "GTD" means guaranteed. "FCFS" means first come, first served. "WL" means whitelist/waitlist. Spell these out once in small text or a tooltip for newcomers.*

### 9.3 How to earn a spot

**Copy (four steps):**

| # | Title | Text |
|---|---|---|
| 1 | Join & verify | Open Discord, pass verification, pick a House. |
| 2 | Soft Steps | Complete the weekly quest board. Kindness over spam. |
| 3 | Earn Merits | Points stack into tiers that unlock raffle weight. |
| 4 | Raffles | Founding Whisk, GTD and WL draws. Method published, results posted. |

**Short path line (copy):** Soft Steps → Merits → Merits tiers → raffles for WL, GTD and Founding Whisk (OG).

### 9.4 Merits tiers (lowest to highest)

**Copy:**

| Emoji (optional) | Tier | Text |
|---|---|---|
| 🐾 | Whisker | First steps. Verified, plus one quest done. Entries into WL raffles. |
| 👣 | Pawprint | Showing up week after week. Entries into WL raffles. |
| 🧭 | Pathfinder | A strong contributor. Eligible for GTD raffles. |
| 🏮 | Lanternbearer | A top contributor. More weight in GTD raffles, plus OG raffle entries. |
| ✨ | Atlas-Touched | A small, exceptional group of creators, lore-keepers and helpers. Highest Founding Whisk (OG) raffle weight. A few direct OG awards may go to exceptional contributors, always announced with the reasons. |

**Copy (fine print under the tiers):**
> Merits are community points with no cash value. They're never spent; your total only grows. Tier thresholds and raffle details are being finalized and will be announced before the first raffle.

### 9.5 What each spot means (copy)

> - **Founding Whisk (OG):** guaranteed mint within the OG window.
> - **GTD:** guaranteed mint within the GTD window.
> - **WL:** FCFS access, first come, first served while supply lasts. **WL is not a guaranteed mint.**
>
> The team never DMs first. Raffle methods are published before every draw (for example, a seeded random draw with the seed revealed afterward), and results are posted in #raffles on our Discord.

### 9.6 Mint section safety callout (required)

**Copy:**
> There's nothing to connect yet. Before mint, this site will never ask you to connect a wallet, sign anything, or share a seed phrase. When mint details are ready, we'll announce them here and in #announcements on our Discord.

### 9.7 Mint CTAs

- Primary: **Join Discord** → Discord URL.
- Secondary (disabled look, not a link, `aria-disabled="true"`): **Mint page: opens in Phase 0b**.
- Never a "Mint now", "Connect wallet" or "Check eligibility" button.

---

## 10. Community (Discord)

The Discord is the town square. The site should summarize how to get in and where things live, using the real channel names.

### 10.1 Joining: verify and pick a House

1. **Read `#rules`.** Short, cozy, and the scam warnings matter.
2. **Verify in `#verify`.** Members react ✅ on the pinned message to get the **Verified** role. Verification happens entirely inside Discord. No wallet, no website, no QR code.
3. **Pick one House in `#pick-your-house`.** React with one emoji (🕯️ 🛡️ 🍄 🔥 ❄️ 🌌) to get that House role and its House den. Pick by vibe; there's no wrong answer, and you can switch any time.
4. **Try this week's quests in `#soft-steps`** and start earning Merits.

**Copy (site version, 4 steps, for the home page community block):**

| # | Step | Text |
|---|---|---|
| 1 | Read #rules | Short, so you can get back to napping. |
| 2 | Verify in #verify | Verification happens entirely inside Discord. No wallet needed, ever. |
| 3 | Pick your House in #pick-your-house | Choose one of the six Houses by vibe. You can switch any time. |
| 4 | Try the Soft Steps in #soft-steps | A new board of gentle quests every week. Complete them to earn Merits. |

*Confirmed: verification is a ✅ reaction in #verify, and House picking is one House emoji reaction in #pick-your-house (one House at a time; picking a new one swaps the role).*

### 10.2 Where things live (Discord categories and channels)

| Category | Channels | Who sees it |
|---|---|---|
| 📜 THE GATE | `#welcome`, `#rules`, `#verify`, `#pick-your-house` | Everyone |
| 📣 THE NOTICE BOARD | `#announcements`, `#roadmap`, `#faq`, `#lore-crumbs`, `#sneak-peeks` | Verified (read-only) |
| 🏰 THE HOUSES | `#circle-of-whisk`, `#pawguard`, `#rootpads`, `#emberkin`, `#rimewhisper`, `#voidpurr`, `#all-houses-hall` | Verified |
| ⚔️ THE CLASS HALLS | `#class-hub` (one thread per Class) before mint; Class-only halls (`#knights-yard`, `#archers-roost`, `#heavy-knights-bastion`, `#mages-study`, `#assassins-alley`) after mint | Verified / Class holders |
| 🐾 SOFT STEPS & MERITS | `#soft-steps`, `#quest-submissions`, `#merits-board`, `#raffles` | Verified |
| 🔥 THE HEARTH | `#hearth-chat`, `#my-party`, `#hearth-rest`, `#holder-announcements`, `#feedback` | Holders, after mint |
| 🗺️ THE ATLAS | `#atlas-news`, `#territories`, `#landmark-ledger`, `#seasons`, `#sponsor-board` | Opens in Phases 1–2 |
| 🛎️ SUPPORT | `#open-a-ticket`, `#safety-scams` | Verified |

*Note: don't list staff channels on the site. The Hearth and Atlas categories don't exist yet; mention them only as "after mint" or not at all.*

### 10.3 Roles

**Access:** Unverified (default on join) → **Verified**. Staff roles: **Team**, **Mod**, **Artist**. "Real staff have the Team or Mod role in the server."

**Pre-mint:** **House roles** (one of six, from #pick-your-house); **Merits tier roles** (Whisker, Pawprint, Pathfinder, Lanternbearer, Atlas-Touched); **Soft Steps: Week N** badges; **Founding Whisk (OG)**, **GTD**, **WL / Waitlist** (WL is not guaranteed).

**After mint (planned):** **Holder**; **House** and **Class** roles from the Meow's traits (a holder's traits replace the House they picked; non-holders keep their picked House); **Hearth Resting**; later **Landowner** (Phase 2) and Landmark-slice holder role (Phase 3).

### 10.4 Soft Steps and Merits (how it works)

**Copy (optional explainer block):**
> Every week a new board of gentle, creative quests appears in #soft-steps: 3–5 quests themed around a House, a Class or a bit of lore. A new board drops every Monday and closes Sunday, with times posted in UTC, plus IST, ET and PT. Post entries in #quest-submissions; mods check them and log your Merits. Merits are a running score. They're never spent, and your total sets your tier. We reward creativity, kindness and showing up, not spam. One account per person.

### 10.5 Discord rules (summary, optional on the site)

Be kind · Keep it safe for everyone · No spam · No price talk in official or House channels · The team never DMs first · Never share your seed phrase or private key · Self-promo only where invited · One account per person · Respect the work (credit artists) · Mods have the final say.

*Note: the Discord rules mention "automated farming". Do not repeat that phrase on the site (Rule 2.1.5). "One account per person" is enough.*

---

## 11. FAQ

**Copy (section intro):** "Straight answers. If something isn't locked yet, we say TBA."
**Copy (after the list):** "Question not here? Ask in #open-a-ticket on our Discord."

Use this exact order. Render as an accessible accordion (`<details>`/`<summary>` or equivalent); open the first item by default. The old "Is the art hand-made?" question is **removed** and must not be added back.

1. **What is Fantasy Meows?**
   A pixel-art cat collection set in Whiskerwild, a soft-epic fantasy world where ordinary cats carry quiet magic in their whiskers. Every Meow has a House, a Class, and (later) a place on the Whiskerwild Atlas.

2. **What's the story of Whiskerwild?** *(new for Arc 1 v3)*
   Whiskerwild was a peaceful green forest until a nameless Darkness began to rot it from the edges. The cats answered each new threat with a new clan: Mages first, then Knights, Heavy Knights, Archers and Assassins. Behind them they built forts and cities. When the Darkness pressed on every border, they summoned heroes from another world in the Crossing, and together they saved the land. Now the Darkness has risen again, stronger, and Whiskerwild needs heroes.

3. **What is the Darkness?** *(new for Arc 1 v3)*
   A nameless force, not a character. It rots the forest and sends shadow soldiers, spirits that fire can't burn, and brutes the size of hills. It's drawn in deep indigo and violet with bright eyes, and the story stays brave and hopeful, never gory. Voidpurr's starlit night has nothing to do with it.

4. **What's the difference between a House and a Class?**
   Your House (one of six) is who you are: your identity and culture in the story and in Discord. The Houses kept their fires long before the Darkness came. Your Class (one of five: Knight, Archer, Heavy Knight, Mage or Assassin) is your fighting clan and what you do in the game and on the map. Any House can join any clan. Both are traits in your Meow's metadata. Other traits like fur, eyes and accessories are purely cosmetic.

5. **When is mint, and how much will it cost?**
   Supply, prices, per-wallet limits, mint windows and chain are all still to be announced. We'll publish them on this site and in the Discord announcements channel once they're locked. Until then, any number you see elsewhere isn't from us.

6. **How do I get on the list?**
   Join the Discord, verify, pick your House and take part in the weekly Soft Steps quests to earn Merits. Higher Merits tiers mean more weight in raffles for WL, GTD and Founding Whisk (OG). Raffle methods are published and results are posted openly.

7. **Is WL guaranteed?**
   No. WL gives FCFS access, which is first come, first served while supply lasts and not guaranteed. Only Founding Whisk (OG) and GTD are guaranteed, and only within their mint windows.

8. **What is Hearth Rest? Are Rest Points money?**
   Hearth Rest (Phase 1) lets you rest your Meow by the fire to build Rest Points. Rest Points are non-monetary points with no cash value. They power your Party on the Atlas and unlock in-world perks. They aren't a token and aren't redeemable for money.

9. **Is there a token?**
   Not now. Rest Points are points. If a token ever exists, we'll explain it plainly first.

10. **Will owning a Territory pay me?**
   Territories are digital places on the Atlas. If a Territory generates real fees in the protocol (marketplace activity, upgrades, sponsor slots, in-tile activity), a published portion is routed to its owner(s). That amount may be zero, and nothing is guaranteed. We'll publish the split before any land sale.
   *(`TODO(legal)`: lawyer review. Show the Territory disclaimer link: "Read the disclosures".)*

11. **Do I need to connect a wallet on this site?** *(new for the rebuild; founder to approve)*
   No. There's nothing to connect before mint. This site will never ask you to connect a wallet, sign anything, or share a seed phrase or private key. If a site that looks like ours asks you to, it's a scam.

12. **Will the team ever DM me?**
    Never first. Official links live only on this site and in #safety-scams on our Discord. If someone DMs you offering a mint, WL or "support", it's a scam.

13. **Is this financial advice?**
    No. Fantasy Meows are digital collectibles. Nothing here is financial advice or an offer of securities. Smart contracts carry risk. Only spend what you're comfortable with.

---

## 12. Safety and official links

Show this as its own home page section (anchor `#safety`) **and** as a short block in the footer of every page.

### 12.1 Home page safety section (copy)

> **Eyebrow:** Stay safe · **Title:** Official links
>
> **The only official links**
> - Discord: https://discord.gg/yCkDXTMbk6
> - X: https://x.com/FantasyMeow_hq (@FantasyMeow_hq)
> - Website: this site, `[DOMAIN TBD]`
>
> If a link isn't on this list, or in #safety-scams on our Discord, it isn't ours.
>
> **The team will never:**
> - DM you first, whether about mints, WL, "support", giveaways or "verification"
> - Ask for your seed phrase, recovery phrase or private key
> - Ask you to connect a wallet or sign anything before mint, on this site or to verify on Discord
> - Ask you to send crypto to "unlock", "claim" or "fix" anything
>
> **Mint links:** mint details are TBA, so any mint link you see today is fake. Real mint links will only ever be announced on this site and in #announcements on our Discord.
>
> **Protect yourself:** turn off DMs from our Discord server (server name → Privacy Settings), consider a separate wallet for minting, and report anything suspicious in #open-a-ticket.

*Note: render the domain from `SITE_URL` in config. While the domain is TBD, show the line as "Website: this site (address to be confirmed)" rather than printing the `.example` placeholder to visitors.*

### 12.2 Footer safety block (copy)

> **Stay safe.** We will never DM you first, and we'll never ask you to connect a wallet or share a seed phrase. Official links live only on this site and in #safety-scams on our Discord.

---

## 13. Disclosures

### 13.1 Core disclosures (copy; show on /disclosures/ and in every page footer)

1. Fantasy Meows are digital collectibles. Nothing here is financial advice or an offer of securities.
2. Rest Points are non-monetary points with no cash value.
3. Territory fee distributions, if any, come only from real fees generated in the protocol and may be zero.
4. Smart contracts carry risk. Only spend what you're comfortable with.

### 13.2 Additional statements (copy; on /disclosures/ only)

5. *(Territory disclaimer, from 7.3)* Territories and Landmark slices are planned features of a game. They are digital collectibles, not real-world property, securities or an investment, and nothing on this site is an offer to sell them. Details, including any fee split, will be published before any land sale and may change after legal review.
6. Mint details (price, supply, per-wallet limits, windows, mint date and chain) are TBA. Anything you see elsewhere isn't from us.
7. Roadmap plans can change as we build and test. Nothing on this site is a promise of value or returns.
8. Artwork shown is preview art. The final collection may look different.

`TODO(founder/legal)`: raffle or sweepstakes terms where required by jurisdiction; Terms of Use and Privacy Policy pages (not written yet; do not invent them).

---

## 14. Sitemap and page-by-page spec

### 14.1 Sitemap (every route must exist)

| # | Route | Page | Indexable |
|---|---|---|---|
| 1 | `/` | Home (long single page with anchored sections) | yes |
| 2 | `/houses/` | All Houses (index grid) | yes |
| 3–8 | `/houses/circle-of-whisk/`, `/houses/pawguard/`, `/houses/rootpads/`, `/houses/emberkin/`, `/houses/rimewhisper/`, `/houses/voidpurr/` | House pages (6) | yes |
| 9 | `/classes/` | All Classes (index grid) | yes |
| 10–14 | `/classes/knight/`, `/classes/archer/`, `/classes/heavy-knight/`, `/classes/mage/`, `/classes/assassin/` | Class pages (5) | yes |
| 15 | `/disclosures/` | Risk & disclosures | yes |
| 16 | 404 (`/404.html` or framework not-found) | Not found | no (`noindex`) |

Use trailing slashes consistently. Do **not** create `/mint`, `/atlas`, `/hearth`, `/party`, `/admin`, `/terms` or `/privacy` in this build (they're later phases or not written yet).

Home anchors (used by the nav): `#world`, `#houses`, `#classes`, `#utility`, `#roadmap`, `#mint`, `#faq`, `#safety`, `#join`.

### 14.2 Global elements (every page)

**Skip link:** "Skip to content" (first focusable element).

**Header**
- Logo (default: wordmark; links to `/`, accessible name "Fantasy Meows home").
- Nav labels and targets, in order: Whiskerwild (`/#world`) · Houses (`/#houses`) · Classes (`/#classes`) · Utility (`/#utility`) · Roadmap (`/#roadmap`) · Mint (`/#mint`) · FAQ (`/#faq`) · Safety (`/#safety`).
- Primary button: **Join Discord** → Discord URL (new tab, `rel="noopener noreferrer"`).
- Mobile: a menu button ("Menu" / "Close", `aria-expanded`, closes on Escape and on link click). Keep "Join Discord" reachable on mobile.

**Footer**
- Logo, then "Magic lives in whiskers." and "Ordinary cats. Extraordinary worlds."
- Icon links: Discord (aria-label "Fantasy Meows on Discord"), X (aria-label "Fantasy Meows on X").
- "Explore" links: the nav links above, plus All Houses (`/houses/`), All Classes (`/classes/`) and **Risk & disclosures** (`/disclosures/`).
- Footer safety block (Section 12.2).
- The four core disclosures (Section 13.1), small text.
- "© 2026 Fantasy Meows. All rights reserved." (year from config).
- Do not link Terms, Privacy, Brand kit or Contact pages until they exist (`TODO(founder)`).

**Button labels (fixed):** "Join Discord", "Follow on X", "Mint: coming soon" (disabled look), "Mint page: opens in Phase 0b" (disabled look), "Read the {House} page", "{Class} details", "Next House: {Name} →", "Next Class: {Name} →", "← All Houses", "← All Classes", "Back home", "Read the disclosures".

### 14.3 Home (`/`)

**Purpose:** first impression, the whole story on one page, push to Discord.
**Meta:** title `Fantasy Meows | Magic lives in whiskers.` · description `A cozy pixel fantasy cat world where your Meow has a House, a Class, and a place on the map.` · OG image `assets/social/og-1200x630.jpg` (or a new 1200×630 card in the new design; alt: "Fantasy Meows logo above five pixel-art cat heroes: Knight, Archer, Mage, Heavy Knight and Assassin").

Sections in this order:

**1. Hero**
- Logo (wordmark).
- Eyebrow: "Pixel cats · Soft-epic fantasy"
- H1: "Magic lives in whiskers."
- Sub-heading: "Ordinary cats. Extraordinary worlds."
- Body: "Every Meow belongs to one of six Houses and one of five Classes. Rest by the Hearth, gather a Party, and find your place on the Whiskerwild Atlas: a living map of Territories, castles, forests and dungeons, built in honest phases."
- Buttons: **Join Discord** (primary) · **Follow on X** · **Mint: coming soon** (disabled look; scrolls to `#mint`).
- Helper line: "Join Discord → pick a House → earn Merits through Soft Steps."
- Visual: your choice. Ideas: a scene built from the five Class sprites, a House "banner wall", or a single hero sprite. If you rotate images, include a visible pause control and stop rotation under `prefers-reduced-motion`.

**2. What is this? (three items)**

| Number | Title | Text |
|---|---|---|
| 01 | A House | Who you are in the story and Discord. |
| 02 | A Class | What you do on the map and in the game. |
| 03 | A place | Territories on the Whiskerwild Atlas. |

**3. Whiskerwild (`#world`)** — eyebrow "The world", title "Whiskerwild". Opening line, intro sentence and three paragraphs from 4.1. "The Crossing" short block from 4.2, then the 4.1 ending and closing line ("Every hero needs a House. Which fire will you stand beside?") leading into The Six Houses. A full scroll-story animation of Arc 1 is optional and not required. "The Archmages": three entries from 4.3 (name, title, quote; descriptions optional). Lore Crumb #1 stays off the site until it is rewritten for Arc 1 v3.

**4. The Six Houses (`#houses`)** — eyebrow "Who you are", title "The Six Houses", intro "House is identity first: Discord flair, lore, and culture. Every Meow belongs to one." Six cards, each: art, emoji + name, vibe, tagline, motto ("Motto: "…""), three color swatches (with color names for screen readers), link "Read the {Name} page →" to `/houses/{slug}/`. Fine print: "Houses are identity and story. No House is better, rarer or worth more than another."

**5. The Five Classes (`#classes`)** — eyebrow "What you do", title "The Five Classes", intro "Class is your kit on the Atlas: how you claim, defend and upgrade Territories. Silhouette first, cosmetics second." Five cards, each: art, role badge, name, silhouette kit, identity, ability (name + text, if any), "Affinity · {affinity}", link "{Name} details →" to `/classes/{slug}/`. Under the grid: the formula line and the tuning note (6.6).

**6. Utility, plainly (`#utility`)** — eyebrow "How it works", title "Utility, plainly", intro from Section 7. Three cards (Hearth Rest, Territories, Whiskerwild Atlas), each with phase label, icon emoji, name, "what it is", bullet points and a clearly labeled **"What this isn't"** note. Territory disclaimer (7.3) directly under or inside the Territories card. Summary line (7.5) with link to `/disclosures/`.

**7. Roadmap (`#roadmap`)** — eyebrow "Where we're going", title "Roadmap", intro and six phases from Section 8 with status labels, plus the footnote.

**8. Mint (`#mint`)** — everything in Section 9, in this order: intro, status row, three phase cards, "How to earn a spot" (four steps), Merits tiers, "What each spot means", safety callout, CTAs.

**9. FAQ (`#faq`)** — eyebrow "Questions", title "FAQ", intro, 11 questions from Section 11, closing line.

**10. Safety (`#safety`)** — Section 12.1 in full.

**11. Join (`#join`, closing call to action)**
- Eyebrow: "Pull up a cushion"
- Title: "Welcome to Whiskerwild"
- Text: "Join the Discord, pick your House, and start earning Merits. Mint opens when the Crossing is ready. We'll say so here and in #announcements, never in a DM."
- The four Discord steps from 10.1 (site version).
- Buttons: **Join Discord** · **Follow on X**.

### 14.4 All Houses (`/houses/`)

**Purpose:** a shareable index of the six Houses.
**Meta:** title `Houses | Fantasy Meows` · description `Six Houses of Whiskerwild: Circle of Whisk, Pawguard, Rootpads, Emberkin, Rimewhisper and Voidpurr. Pick the one that feels like your cat.`
**Content:** eyebrow "Who you are", H1 "The Six Houses", intro "House is identity first: Discord flair, lore, and culture. Every Meow belongs to one." The same six cards as the home section. Fine print (5.7). CTA block: "Pick your House in #pick-your-house on our Discord." + **Join Discord**.

### 14.5 House page template (`/houses/{slug}/`, × 6)

**Purpose:** a full page per House that a member can share ("this is my House").
**Meta:** title `{Name} | Fantasy Meows` · description = House tagline · OG image = House art at 1000×1000 (`assets/web/art/{slug}-1000.webp`, or a PNG export) with the House alt text · Twitter card `summary_large_image`.
**Content blocks, in order:**
1. Back link: "← All Houses" → `/houses/`.
2. House art (large, crisp, alt text from Section 5). Optional caption: "Preview art. The final collection may look different."
3. Eyebrow "House", H1 "{emoji} {Name}" (emoji `aria-hidden`).
4. Vibe line.
5. Tagline (larger text).
6. Description paragraph.
7. Motto: "Motto: "{motto}""
8. Signature colors: three swatches with names (e.g., "Parchment", "Plum", "Candle-gold"). Swatches are decorative; names must be readable text.
9. Optional den greeting as a pull-quote, attributed "From the #{channel} den on Discord".
10. Optional Atlas affinity with the tuning note (5.7).
11. Discord CTA: "Your House den is #{channel} on our Discord." + **Join Discord**.
12. "Next House: {Next name} →" (cycles in display order; Voidpurr → Circle of Whisk). Optional "← Previous House" too.

Use the six House records in Section 5 verbatim. You may tint each House page with its signature colors (keep text contrast AA).

### 14.6 All Classes (`/classes/`)

**Meta:** title `Classes | Fantasy Meows` · description `Five Classes of Whiskerwild: Knight, Archer, Heavy Knight, Mage and Assassin. Your Meow's kit for claiming, defending and upgrading places on the Atlas.`
**Content:** eyebrow "What you do", H1 "The Five Classes", intro "Class is your kit on the Atlas: how you claim, defend and upgrade Territories. Silhouette first, cosmetics second." The same five cards as the home section, then the formula line and tuning note. CTA: "Chat about your favorite Class in #class-hub on our Discord." + **Join Discord**.

### 14.7 Class page template (`/classes/{slug}/`, × 5)

**Meta:** title `{Name} | Fantasy Meows` · description `{Role}. {Identity}` (e.g., "Tank. The strongest defender in Whiskerwild, if a little slow to claim new ground.") · OG image = Class art 1000×1000 with alt text.
**Content blocks, in order:**
1. Back link "← All Classes" → `/classes/`.
2. Class art (large, crisp, alt text from Section 6). Optional preview-art caption.
3. Eyebrow "Class", H1 "{Name}".
4. Role badge.
5. Lore line (e.g., "Heavy knights who hold.") as a small italic line (optional but recommended).
6. Identity paragraph.
7. Details list: "Silhouette kit" · "Land affinity" · "Signature ability" (name + text; omit the row for Knight).
8. Optional "Game kit" ratings.
9. Tuning note: "Abilities describe design intent for the Atlas game and will be tuned through playtesting."
10. CTA: "Find the {Name} thread in #class-hub on our Discord." + **Join Discord**.
11. "Next Class: {Next name} →" (cycles; Assassin → Knight).

### 14.8 Risk & disclosures (`/disclosures/`)

**Purpose:** the honesty page. Must exist and be linked from every footer.
**Meta:** title `Risk & disclosures | Fantasy Meows` · description `What Fantasy Meows is, what it isn't, and the messaging rules we hold ourselves to.`
**Content, in order:**
1. Eyebrow "Honesty", H1 "Risk & disclosures".
2. Intro: "These statements also appear in the site footer. They aren't fine print. They're the rules."
3. The four core disclosures (13.1) as a list.
4. Heading "Also worth knowing" + statements 5–8 (13.2).
5. Heading "Word watchlist" + text: "We do not use APY, APR, yield, passive income, floor, moon, pump, ROI, or unconfirmed sell-out / partnership claims in public copy. Territory fee talk, if any, describes real fees only and may be zero. "WL" is never described as a guaranteed mint."
6. Text: "Lore builds the world, never the wallet. Lore never promises tokens, APY, floors or income."
7. Heading "Stay safe" + footer safety copy (12.2) and a link to `/#safety`.
8. Button "← Back home" → `/`.

### 14.9 404 page

**Meta:** title `Page not found | Fantasy Meows`, `noindex`.
**Copy:**
- Eyebrow: "Lost on the lantern road"
- H1: "This path isn't on the map yet."
- Text: "Even Sembla wanders off sometimes. Let's get you back to the Hearth."
- Button: **Back home** → `/`. Optional secondary links: Houses, Classes, FAQ.
- Optional art: any Class or House sprite (Rootpads' forest wanderer fits "lost on the road").

---

## 15. Brand assets, colors, type and pixel-art rules

All paths are relative to this document's folder. Source art is master quality; `assets/web/` holds ready-made, nearest-neighbor WebP sizes.

### 15.1 Asset inventory

**Brand**

| File | Size | Use |
|---|---|---|
| `assets/brand/logo-wordmark-wide.png` | 1280×720, solid navy background (`#02071a`) | **Default logo** (master). Pixel cat in a starry wizard hat above gold "FANTASY MEOWS" lettering. Use the transparent version on the site. |
| `assets/brand/logo-wordmark-transparent.png` | 1200×637, transparent | Default logo, background removed and cropped. Use in header/footer/hero. |
| `assets/web/brand/logo-wordmark.webp` | 1200×637, transparent | Same as above, WebP. |
| `assets/brand/logo-crest-wide.png` | 1280×720, parchment background | **Alternative logo** (crest: round frame, cat in hat, ribbon banner). |
| `assets/brand/logo-crest-square.png` | 1000×1000, parchment background | Alternative logo, square crest. Good for light themes, About blocks, favicon alternatives. |
| `assets/web/brand/logo-crest-wide.webp`, `logo-crest-square.webp` | 1280×720, 600×600 | WebP versions of the crest. |
| `assets/brand/pfp-mage.png` | 1000×1000 | **Default profile picture** (cream cat in a starry purple wizard hat). Source for favicon/app icons. |
| `assets/web/brand/pfp-mage.webp` | 400×400 | Web size of the default pfp. |
| `assets/brand/pfp-hooded.png` | 1000×1000 | Alternate pfp (black cat in a cream hood with a gold star, teal eyes). Optional (e.g., 404 or Voidpurr accents). |
| `assets/brand/discord-icon-512.png` | 512×512 | Discord server icon. Optional on site (e.g., next to "Join Discord"). |

**Icons and social**

| File | Size | Use |
|---|---|---|
| `assets/web/icons/icon-256.png` | 256×256 | Favicon / site icon (from pfp-mage). Also generate a 32×32 and 16×16. |
| `assets/web/icons/apple-icon-180.png` | 180×180 | Apple touch icon. |
| `assets/social/og-1200x630.jpg` | 1200×630 | Default Open Graph / Twitter image (logo above the five Class sprites on a night sky). You may make a new one in the new design. |
| `assets/social/banner-1500x500.png` | 1500×500 | X header banner. Optional on site (wide banner strip or social section). |
| `assets/social/pfp-400.png` | 400×400 | X profile picture (mage pfp, crisp pixels). |

**House art (samples, 3000×3000 PNG)**

| File | Subject | Web versions |
|---|---|---|
| `assets/art/houses/house-circle-of-whisk-3000.png` | Circle of Whisk | `assets/web/art/circle-of-whisk-500.webp`, `-1000.webp` |
| `assets/art/houses/house-pawguard-3000.png` | Pawguard | `assets/web/art/pawguard-500.webp`, `-1000.webp` |
| `assets/art/houses/house-rootpads-3000.png` | Rootpads | `assets/web/art/rootpads-500.webp`, `-1000.webp` |
| `assets/art/houses/house-emberkin-3000.png` | Emberkin | `assets/web/art/emberkin-500.webp`, `-1000.webp` |
| `assets/art/houses/house-rimewhisper-3000.png` | Rimewhisper | `assets/web/art/rimewhisper-500.webp`, `-1000.webp` |
| `assets/art/houses/house-voidpurr-3000.png` | Voidpurr | `assets/web/art/voidpurr-500.webp`, `-1000.webp` |

**Class art (samples, 3000×3000 PNG)**

| File | Subject | Web versions |
|---|---|---|
| `assets/art/classes/class-knight-3000.png` | Knight | `assets/web/art/knight-500.webp`, `-1000.webp` |
| `assets/art/classes/class-archer-3000.png` | Archer | `assets/web/art/archer-500.webp`, `-1000.webp` |
| `assets/art/classes/class-heavy-knight-3000.png` | Heavy Knight | `assets/web/art/heavy-knight-500.webp`, `-1000.webp` |
| `assets/art/classes/class-mage-3000.png` | Mage | `assets/web/art/mage-500.webp`, `-1000.webp` |
| `assets/art/classes/class-assassin-3000.png` | Assassin | `assets/web/art/assassin-500.webp`, `-1000.webp` |

**Specials (optional; founder to confirm use)**

| File | Subject | Web versions |
|---|---|---|
| `assets/art/specials/special-archmage-3000.png` | Archmage direction (cream cat in a purple crescent-moon hat with a book and potion) | `assets/web/art/archmage-500.webp`, `-1000.webp` |
| `assets/art/specials/special-knight-mage-3000.png` | Knight-Mage hybrid direction (helmeted cat in blue-gold armor with a staff) | `assets/web/art/knight-mage-500.webp`, `-1000.webp` |

*Note: all character art is sample/preview art. The hired artist's final art will replace it, so build image slots that are easy to swap (one data field per image). Do not use files from any `class-v1-muddy` folder (superseded). Image file names and alt text must not suggest how the art was made.*

### 15.2 Current brand colors (the new design may evolve these)

These are the colors the current site and logos use. They're a starting point, not a requirement. Keep the logo gold and the House colors recognizable; everything else can change.

**Logo colors (sampled from the logo images)**

| Name | Hex | Where |
|---|---|---|
| Wordmark gold | `#fab728` | "FANTASY MEOWS" letters |
| Wordmark highlight | `#fcc039` | Letter highlights |
| Wordmark shadow | `#a5742a` | Letter outline/shadow |
| Logo navy | `#02071a` | Wordmark background |
| Crest parchment | `#f2e4c7` | Crest background |
| Crest ink navy | `#151229` | Crest frame interior |
| Hat indigo | `#403268` / `#28235a` | Wizard hat in the pfp and logo cat |

**Current site theme tokens (from the old site's CSS)**

| Token | Hex | Old role |
|---|---|---|
| night | `#0f0d22` | Page background, theme-color |
| night-2 | `#171431` | Alternate section background |
| plum | `#2b1a3d` | Background gradient |
| plum-2 | `#3a2350` | Muted buttons, borders |
| gold | `#e8b64c` | Accents, primary button |
| gold-light | `#f6d488` | Headings on dark |
| gold-dark | `#9c6b1f` | Button borders, links on light |
| parchment | `#f3e6c4` | Card background |
| parchment-2 | `#e6d3a3` | Secondary parchment |
| ink | `#2b1d14` | Text on parchment |
| ink-soft | `#5a4632` | Secondary text on parchment |
| moon | `#d9d3f2` | Body text on dark |
| star violet | `#b9a8ff` | Decorative stars |
| status green | `#2f5a3a` (text `#e9f7df`) | "In progress" badge |

**House accent colors:** see the "Signature colors" rows in Section 5 (18 hex values).

**Project Bible palette guidance:** warm parchment background, deep ink text, House accent colors. A dark mode, if any, should feel like "night at the Hearth" (warm charcoal, ember accents), not pure black. No glossy gradients, no neon, no glassmorphism.

**Contrast:** all text must meet WCAG AA (4.5:1 body, 3:1 large text). Light House colors (Frost white, Parchment, Firefly yellow) are for fills, not text on light backgrounds.

### 15.3 Typography

- **Old site:** Pixelify Sans (headings) + Nunito (body), both Google Fonts. You may keep or replace them.
- **Rule from the Bible:** pixel or bitmap-style fonts for **headings only**; a clean, readable font for body text so long reads stay accessible.
- Good pixel heading options: Pixelify Sans, Silkscreen, Jersey 10, Tiny5. Avoid Press Start 2P for anything longer than a few words (hard to read).
- Good body options: Nunito, Lora or Literata (for a storybook feel), Atkinson Hyperlegible, Inter.
- Self-host fonts or use `font-display: swap`. Body text at least 16 px; line length about 60–75 characters.

### 15.4 Pixel-art rules (must follow)

- Pixel art must stay **crisp**: no smoothing, blur, or soft scaling, ever.
- CSS for every sprite or pixel image:
  ```css
  .pixel-art {
    image-rendering: crisp-edges; /* fallback for older browsers */
    image-rendering: pixelated;   /* wins wherever it is supported */
  }
  ```
- Resize only with **nearest-neighbor**. Never bilinear/bicubic/Lanczos. Don't let an image CDN or framework image optimizer resample the art (in Next.js use `unoptimized`; in Astro avoid automatic resizing for these files or use the provided WebP sizes).
- Prefer display sizes that are whole-number fractions or multiples of the file size (e.g., 250, 500, 1000 px from the 1000 px WebP) so pixels stay square.
- Use lossless formats where possible (PNG or lossless WebP). The provided WebP files are already nearest-neighbor resized.
- No CSS filters that blur (no `filter: blur()` on art, no soft drop-shadows on the sprite itself; a hard-edged pixel shadow is fine).
- Decorative UI can echo the pixel theme (stepped corners, 1-bit icons, dithered patterns), but body text stays smooth and readable.
- Always give `width` and `height` attributes to avoid layout shift. Lazy-load below-the-fold art.

---

## 16. Design direction

The founder will choose a direction in Antigravity. All three fit a cozy pixel fantasy world. None of them should resemble the old site (dark navy night sky, twinkling stars, gold notched frames on every box, centered "✦ eyebrow ✦" headings). Whatever direction is picked, the content and rules above don't change.

### Direction A: "Lantern-lit Storybook" (light, warm)

- **Feel:** an illustrated storybook opened on a wooden table at dusk. Warm, papery, calm.
- **Palette:** warm parchment and cream backgrounds, deep ink-brown text, candle-gold accents, House colors as chapter tabs.
- **Layout:** sections as "chapters" with large chapter numbers; the Houses as a row of hanging banners or bookmarks; FAQ as a little "Questions from the Hearth" index page.
- **Type:** a pixel font for chapter titles, a bookish serif (Lora/Literata) for body.
- **Motion:** page-turn style section reveals, a softly flickering lantern icon, sprites that bob once on hover.

### Direction B: "Night at the Hearth" (dark, cozy firelight)

- **Feel:** a warm common room late at night. Firelight on stone, a kettle, cats asleep on cushions.
- **Palette:** warm charcoal and soot browns (not navy, not pure black), ember orange and copper accents, logo gold for highlights.
- **Layout:** a full-width hearth scene hero; sections as wooden notice-board pins or framed tavern signs; the mint plan as a "notice nailed to the board"; Houses as six tankards or seats around a long table.
- **Type:** chunky pixel headings, a friendly rounded sans for body (Nunito/Atkinson Hyperlegible).
- **Motion:** gentle ember particles in the hero (turned off under reduced motion), warm glow on hover.

### Direction C: "The Cartographer's Atlas" (map-led, explorer)

- **Feel:** an explorer's map of Whiskerwild, partly unfinished, with places waiting to be named.
- **Palette:** aged map paper, sepia ink lines, muted moss/teal/rust, House colors as map-pin flags.
- **Layout:** the home page as a journey across a stylized map: each section is a "region" (The Gate, the House quarter, the Class training grounds, the Hearth, the Road Ahead for the roadmap). The roadmap is a dotted road with milestones. The map is decorative only, not an interactive game.
- **Type:** pixel headings, a storybook display face for map labels, clean sans for body.
- **Motion:** a dotted path that draws as you scroll, compass rose that turns slightly on hover.

**For any direction:** mobile first; generous spacing; strong, clear "Join Discord" buttons; the "What this isn't" notes and disclaimers are clearly visible (never hidden in tiny grey text); TBA values look intentional and calm, not like errors.

---

## 17. Technical requirements and launch checklist

### 17.1 Build requirements

- Static site; no server, no database, no forms, no cookies other than what the host needs. If analytics are added later, they must be privacy-respecting (`TODO(founder)`).
- One config file with: `SITE_NAME`, `TAGLINE_PRIMARY`, `TAGLINE_SECONDARY`, `DESCRIPTION`, `SITE_URL = "https://fantasymeows.example"` (`TODO(founder): final domain`), `DISCORD_URL = "https://discord.gg/yCkDXTMbk6"`, `X_URL = "https://x.com/FantasyMeow_hq"`, `X_HANDLE = "@FantasyMeow_hq"`, `LOGO = "wordmark" | "crest"`, `MINT = { status: "Coming soon", chain: "TBA", supply: "TBA", teamReserve: "TBA", reveal: "TBA", date: "TBA", phases: { og, gtd, fcfs: { price: "TBA", perWallet: "TBA", window: "TBA", spots: "TBA" } } }`, `COPYRIGHT_YEAR = 2026`.
- One content file with every record from Sections 4–13.
- External links open in a new tab with `rel="noopener noreferrer"`.
- `<html lang="en">`, a `theme-color` meta matching the new design.
- SEO: unique title/description per page (Section 14), canonical URL, Open Graph (`og:title`, `og:description`, `og:image` with width/height/alt, `og:type`, `og:site_name`), Twitter (`summary_large_image`, `twitter:site` = `@FantasyMeow_hq`), `sitemap.xml` (all indexable routes), `robots.txt`. Optional JSON-LD `Organization` with `name`, `url` (from config), `logo`, and `sameAs` [Discord URL, X URL].
- Favicons: 16, 32, 180 (apple), 256/512 from `pfp-mage`.

### 17.2 Accessibility

- WCAG 2.1 AA contrast; visible focus styles; full keyboard navigation (menu, accordion, any carousel).
- One H1 per page; logical heading order.
- Every image has the alt text from this doc; decorative images use `alt=""`. Emoji next to names are `aria-hidden="true"`.
- Color swatches have text names. Disabled buttons use `aria-disabled="true"` and aren't the only way to get information.
- Respect `prefers-reduced-motion` (stop rotation, parallax, particles, smooth scroll).
- Tap targets at least 44×44 px.

### 17.3 Launch checklist (the AI should verify all of these)

- [ ] All 16 routes from 14.1 exist and render on mobile and desktop.
- [ ] Every House and Class page shows its own art, crisp (zoom in: no blur).
- [ ] All copy matches this document; no lorem ipsum, no invented text.
- [ ] Every mint field shows "TBA"; no chain name appears anywhere.
- [ ] No wallet libraries in `package.json`; no "connect" buttons.
- [ ] Banned-word check (2.3) passes.
- [ ] "What this isn't" notes visible on all three utility cards; Territory disclaimer visible.
- [ ] Safety section and footer safety block present; Discord and X links correct.
- [ ] `/disclosures/` exists and is linked in every footer; footer shows the four disclosures.
- [ ] 404 page works.
- [ ] Lighthouse mobile: 90+ in all four categories.
- [ ] Meta tags, OG image and favicon present; `SITE_URL` placeholder is in one place only.
- [ ] `TODO(founder)` and `TODO(legal)` comments left where decisions are pending (list them in the README).

---

## 18. Open decisions and TBD list

| # | Item | Status | What the site does now |
|---|---|---|---|
| 1 | **Domain** | TBD | Placeholder `https://fantasymeows.example` in one config value; visitors see "this site (address to be confirmed)" in the safety list. |
| 2 | **Hosting** | TBD (any static host) | Build static output that works on Vercel, Netlify, Cloudflare Pages or GitHub Pages. |
| 3 | **Chain** | Not announced (one option is being considered privately) | Show "TBA". Never name a chain. |
| 4 | **Price, supply, per-wallet limits, windows, spots, team reserve, reveal style, mint date** | TBA | Show "TBA". |
| 5 | **Token ($MEOW) timing** (and ticker: $MEOW proposed, $WHISK fallback) | Not decided; not before real Atlas activity at the earliest | Only the FAQ line "Not now… we'll explain it plainly first." No ticker on the site. |
| 6 | **Atlas at launch** | Atlas is Phase 1; not part of this build | Describe it in Utility/Roadmap only. No `/atlas` page or fake map. |
| 7 | **Terms of Use and Privacy Policy pages** | Not written | Don't create or link them. Add when the founder provides lawyer-reviewed text. |
| 8 | **Final art** | Hired artist's final art will replace the samples | Use sample art; build easy-to-swap image slots; optional caption "Preview art. The final collection may look different." |
| 9 | **Legal review of Territory / Landmark-slice wording** | Required before launch | Use the exact copy here plus the disclaimer; mark `TODO(legal)`. |
| 10 | **Verification method** (reaction in #verify vs Discord onboarding) | Decided | ✅ reaction in #verify, one House reaction in #pick-your-house. |
| 11 | **Merits tier thresholds, raffle rules, Pathfinder direct-WL** | Being finalized | Fine print says they'll be announced before the first raffle. |
| 12 | **Email capture** | Not decided | No form. |
| 13 | **Analytics** | Not decided (must be privacy-respecting) | None. |
| 14 | **Archmage / Knight-Mage special art use** | Founder to confirm | Optional; off by default. |
| 15 | **Heavy Knight emoji** (🛡️ clashes with Pawguard) | Founder to pick | Don't use Class emoji, or pick a different one. |
| 16 | **Holder name "Hearthkeepers"** | Suggested, not adopted | Don't use it on the site; "wanderers" is fine. |
| 17 | **New FAQ ("Do I need to connect a wallet?") and new disclaimer/safety copy** | Written for this rebuild | Use it; founder to approve. |
| 18 | **Brand kit / contact page** | Not planned for 0a | Contact = Discord #open-a-ticket. |
| 19 | **Discord ticket system** | "Coming soon" in Discord | Point support questions to #open-a-ticket. |

---

## 19. Starter prompt for Antigravity

Copy everything in the box below into Antigravity, with this folder (`FANTASY-MEOWS-WEBSITE-REFERENCE.md` and `assets/`) in the workspace.

```text
You are building the public pre-mint website for Fantasy Meows, a cozy pixel-art fantasy cat world called Whiskerwild.

Read FANTASY-MEOWS-WEBSITE-REFERENCE.md in full before writing any code. It is the single source of truth for every fact, page, section, piece of copy, rule and asset. The images you need are in ./assets/ and the doc references them by path.

What is fixed: all facts, names, copy (use it word for word), the page list in Section 14, the links, every "TBA" value, and the Rules for the AI in Section 2. What is free: the visual design, layout, motion and tech stack. Do NOT copy the old site's look (described in Sections 1.2 and 16).

Design direction: [PICK ONE: A "Lantern-lit Storybook" / B "Night at the Hearth" / C "The Cartographer's Atlas" from Section 16, or describe your own].

Tech: a static site with [Astro (recommended) / Next.js static export], responsive and mobile-first, fast (Lighthouse 90+ on mobile), WCAG 2.1 AA accessible, with per-page SEO and Open Graph tags. Put links, the TBD domain placeholder and all mint fields (all "TBA") in one config file, and all copy in one content file, so I can edit them later. Pixel art must use image-rendering: pixelated and nearest-neighbor sizes only.

Hard rules (from Section 2): no APY/yield/returns/floor talk; no sold-out, partnership or collab claims; price, supply, mint date and chain show "TBA" (never name a chain); never say the art is hand-drawn or hand-made; no mention of bots, AI or automation anywhere on the site; no wallet connection, wallet libraries or seed-phrase fields; show the Territory disclaimer and the "What this isn't" notes; keep the /disclosures/ page; WL is never described as guaranteed.

Build all 16 routes in Section 14.1. Then run the banned-word check in Section 2.3 and the launch checklist in Section 17.3, fix anything that fails, and write a short README listing how to run, build and deploy, where to edit links/copy/mint fields, and every TODO(founder) and TODO(legal) left in the code. If something isn't covered by the doc, choose the more modest option and leave a TODO(founder) comment instead of inventing content.
```

---

## Appendix A: Copy decisions and changes from the old site

The old site's copy (`lib/content.ts`) was the base. These are the deliberate changes, mostly to stay consistent with the Discord and the rules:

1. **Official links wording.** Old site: "Official links live only on this site and in the Discord announcements channel." Discord says official links live in #safety-scams and mint links are announced in #announcements. New copy: official links on this site and in #safety-scams; mint links only on this site and in #announcements.
2. **Merits tier descriptions** now use the fuller Discord #merits-board text (adds which raffles each tier enters). This also fixes Lanternbearer, which the old site described only as "more weight in OG raffles".
3. **Mint intro** now includes chain and says "until they're locked and announced" (old: "until the founder locks them"). A "Mint date: TBA" field was added to the status row.
4. **Mint phase tags** are "Mint phase 1/2/3" (old: "OG / Phase 2 / Phase 3"), to avoid clashing with roadmap phases.
5. **Added (new copy for the rebuild, founder to approve):** the Territory disclaimer (7.3), the mint safety callout (9.6), the Safety section (12.1), the FAQ "Do I need to connect a wallet on this site?", the roadmap footnote (from the Discord roadmap), the House fine print (from Discord #pick-your-house), the four-step Discord join block, the /houses/ and /classes/ index pages, disclosure statements 5–8, Class "lore lines" (from the Whiskerwild lore), optional den greetings (from the Discord House openers) and optional House Atlas affinities (from the Bible).
6. **Removed / not used:** the Discord draft FAQ "Is the art hand-made?" (it was also removed from the posted Discord FAQ). The Bible's plan to state publicly how the art is made is overridden by the founder's rule: say nothing about how the art is made.
7. **Utility summary line** rewritten to avoid the phrase "fee rights" while keeping the meaning.
8. **FAQ "House vs Class"** now lists the five Classes (as the Discord FAQ does).
9. **Em dashes** in a few old lines were replaced with commas, colons or full stops (no meaning change).
10. **Mage alt text** says "indigo" hat instead of "blue", to match the image.
11. **Roadmap titles** keep the old site's names; the Discord's alternative titles are noted in Section 8.
12. **Facts not found in any source** (left as TBA/TBD on purpose): domain, hosting, chain, every mint number and date, team reserve, reveal style, Merits thresholds, token timing, Terms/Privacy text, final art.
13. **Arc 1 v3 (Oct 19, 2026, founder-approved).** The World copy (4.1), the Crossing short block (4.2), Factions (4.4), the Voidpurr line ("They aren't villains" is now "Their dark is starlit and kind, the opposite of the Darkness"), and the FAQ (two new questions and a new House vs Class answer) follow `scroll-story-v3.md`. Retired: "Whiskerwild is not at war. It is unfinished.", "Humans call it a draft", and the "Those who listened together became the Houses" origin.

---

## Appendix B: Glossary

| Term | Meaning |
|---|---|
| Meow | One Fantasy Meows collectible (a pixel cat with a House and a Class). |
| Whiskerwild | The fantasy world where the Meows live. |
| The Crossing | The arrival: the cats of Whiskerwild sang open a door into another world and summoned heroes, with ordinary cats following them through. Also how the project talks about mint. |
| The Darkness | The nameless force that rots Whiskerwild. Shadows and monsters, never a named villain, never gore. Drawn in indigo and rot violet, never brown. |
| Clan | One of the five fighting clans, the same as the five Classes. Any House can join any clan. |
| House | One of six identity groups (story and Discord culture). |
| Class | One of five roles in the game (Knight, Archer, Heavy Knight, Mage, Assassin). |
| Party | A group of one or more Meows that acts together on the Atlas (planned). |
| Hearth Rest | Planned feature: rest a Meow by the fire to build Rest Points (Phase 1). |
| Rest Points (RP) | Non-monetary points with no cash value, used for in-world perks and Party power. |
| Territory | A planned digital place (tile) on the Atlas, such as a castle, forest or dungeon (Phase 2). |
| Landmark | The grandest Territories; planned to be ownable in slices by many holders (Phase 3). |
| Landmark Ledger | Planned page showing each tile's actual fee history, never projections (Phase 3). |
| Claim gate | A game rule: some tiles need a Party with certain Classes before they can be claimed. |
| Whiskerwild Atlas | The planned browser map game (Phase 1 onward). |
| Soft Steps | Weekly gentle quests in Discord. |
| Merits | Community points from Soft Steps; never spent; set your tier and raffle weight; no cash value. |
| Founding Whisk (OG) | First mint phase; guaranteed mint within its window for listed winners. |
| GTD | Second mint phase; "guaranteed" mint within its window for listed wallets. |
| FCFS | Third mint phase; first come, first served while supply lasts; not guaranteed. |
| WL | Whitelist / waitlist: gives FCFS access; not a guaranteed mint. |
| TBA / TBD | To be announced / to be decided. Shown literally on the site. |

*End of document.*
