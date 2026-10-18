import { HouseRecord, ClassRecord, UtilityCard, RoadmapPhase, FaqItem, MeritsTier } from '../types/content.types';

export const content = {
  // First-visit title card (typed letter by letter before the hero scene assembles)
  intro: {
    title: "Fantasy Meows",
    line: "Magic lives in whiskers.",
    skipLabel: "Skip intro",
  },

  hero: {
    eyebrow: "Pixel cats · Soft-epic fantasy",
    h1: "Magic lives in whiskers.",
    subheading: "Ordinary cats. Extraordinary worlds.",
    body: "Every Meow belongs to one of six Houses and one of five Classes. Rest by the Hearth, gather a Party, and find your place on the Whiskerwild Atlas: a living map of Territories, castles, forests and dungeons, built in honest phases.",
    ctaPrimary: "Join Discord",
    ctaSecondary: "Follow on X",
    ctaMint: "Mint: coming soon",
    helperLine: "Join Discord → pick a House → earn Merits through Soft Steps.",
    welcomeHook: "A door appeared that wasn't there before. Being cats, they went through.",
  },

  whatIsThis: [
    { number: "01", title: "A House", text: "Who you are in the story and Discord." },
    { number: "02", title: "A Class", text: "What you do on the map and in the game." },
    { number: "03", title: "A place", text: "Territories on the Whiskerwild Atlas." },
  ],

  world: {
    eyebrow: "The world",
    title: "Whiskerwild",
    intro: "A patchwork realm of mossy keeps, lantern-lit roads, deep green forests and snow-silent peaks, stitched together by an old magic that only cats can feel.",
    paragraphs: [
      "Humans call it a \"draft\" or a \"funny feeling.\" Cats know better: it's the hum in their whiskers, the reason they stare at empty corners, the reason they always know when someone is about to open a door.",
      "Long ago, the cats of Whiskerwild learned to listen to that hum. Those who listened together became the Houses. Those who learned to use it became the Classes: knights who guard, archers who watch, heavy knights who hold, mages who weave, and assassins who slip between shadows.",
      "Whiskerwild is not at war. It is unfinished. Roads lead to places no one has claimed. Temples stand with their lamps unlit. The Atlas, the great living map, fills in only as Meows go out and make places their own."
    ],
    theCrossing: {
      title: "The Crossing",
      body: "Every Meow was once an ordinary cat somewhere else. On one quiet night, each noticed a door that hadn't been there before and, being a cat, went through it. That moment is called the Crossing. Every Meow still arrives a cat, but with whiskers that now hum.",
      framing: "The Crossing is how we talk about mint: a story beat, not a promise."
    },
    archmages: [
      {
        name: "Sembla",
        title: "the Weaver of Ways",
        quote: "Every path is a whisker someone followed."
      },
      {
        name: "Cinderbowl",
        title: "the Hearth-Warden",
        quote: "Rest is not idleness. Rest is how the fire stays lit."
      },
      {
        name: "Nightskein",
        title: "the Quiet Thread",
        quote: "Some doors open only when no one is watching."
      }
    ]
  },

  houses: [
    {
      slug: "circle-of-whisk",
      name: "Circle of Whisk",
      emoji: "🕯️",
      vibe: "Scholarly, candlelit, gently nerdy",
      tagline: "The scholars and dreamers of Whiskerwild, gathered in a ring of candlelight where every whisker-twitch is a spell half-remembered.",
      description: "The Circle of Whisk is the oldest House, or at least it claims to be, and no one has had the energy to argue. They meet in round rooms with round tables and round cushions, because a circle has no head and everyone gets a turn to speak (and to nap). Circle cats keep the libraries, copy the old songs, and argue gently about which star is which. They're the House most likely to have read the instructions, and the least likely to have followed them.",
      motto: "Listen first.",
      signatureColors: [
        { name: "Parchment", hex: "#efe0bd" },
        { name: "Plum", hex: "#5b2a6e" },
        { name: "Candle-gold", hex: "#e8b64c" }
      ],
      discordChannel: "circle-of-whisk",
      denGreeting: "Round room, round table, round cushions. A circle has no head, so everyone gets a turn to speak (and to nap).",
      atlasAffinity: "A small boost to Study and Upgrade actions on Temples & Academies.",
      webArt500: "/assets/web/art/circle-of-whisk-500.webp",
      webArt1000: "/assets/web/art/circle-of-whisk-1000.webp",
      altText: "Pixel-art cream cat in a plum wizard hat holding a glowing staff beside a moonlit castle"
    },
    {
      slug: "pawguard",
      name: "Pawguard",
      emoji: "🛡️",
      vibe: "Loyal, steadfast, warm protectors",
      tagline: "Steadfast protectors with polished helms and patient hearts, the first paws at every gate and the last to leave the wall.",
      description: "Pawguard cats are the ones who sit by the door at night. They walk the walls of old keeps, escort travelers on the lantern roads, and take their oaths seriously, though their oaths do include \"a nap at noon, if the watch allows.\" They're reliable, warm and a little stubborn. In Whiskerwild sayings, \"a Pawguard promise\" means something you can count on.",
      motto: "We hold.",
      signatureColors: [
        { name: "Steel blue", hex: "#4a6a8f" },
        { name: "Brass", hex: "#c39a4a" },
        { name: "Banner-red", hex: "#a83a32" }
      ],
      discordChannel: "pawguard",
      denGreeting: "Helms polished, lanterns lit, someone's already sitting by the door.",
      atlasAffinity: "A small boost to Defend actions on Castles & Gates.",
      webArt500: "/assets/web/art/pawguard-500.webp",
      webArt1000: "/assets/web/art/pawguard-1000.webp",
      altText: "Pixel-art grey tabby in a horned steel helm holding a book and a glowing orb under a night sky"
    },
    {
      slug: "rootpads",
      name: "Rootpads",
      emoji: "🍄",
      vibe: "Earthy, calm, forest wanderers",
      tagline: "Soft-footed wanderers of moss and mushroom, who know every forest path by the feel of the earth beneath their beans.",
      description: "Rootpads live where the trees are oldest. They tend glowing mushroom rings, talk to owls (who mostly ignore them), and can walk through a forest without snapping a single twig. Rootpads are gardeners, scouts and herbalists. They're calm and grounded, and they'll quietly become the most stubborn cat in the room if anyone threatens a tree.",
      motto: "Grow slow, grow deep.",
      signatureColors: [
        { name: "Moss green", hex: "#5d7a3a" },
        { name: "Bark brown", hex: "#6b4a2e" },
        { name: "Firefly yellow", hex: "#f2d65a" }
      ],
      discordChannel: "rootpads",
      denGreeting: "Mind the mushroom ring. The owls are listening, even if they pretend not to be.",
      atlasAffinity: "A small boost to Claim actions on Forests.",
      webArt500: "/assets/web/art/rootpads-500.webp",
      webArt1000: "/assets/web/art/rootpads-1000.webp",
      altText: "Pixel-art tabby in a brown hooded cloak holding a book in a glowing mossy forest"
    },
    {
      slug: "emberkin",
      name: "Emberkin",
      emoji: "🔥",
      vibe: "Warm, loud, makers & hearth-tenders",
      tagline: "Warm-hearted forge-cats and hearth-tenders, carrying a little of Cinderbowl's fire in every glowing whisker.",
      description: "The Emberkin keep the fires of Whiskerwild burning in forges, kitchens, lanterns and hearths. They're makers and cooks, loud laughers and fierce friends, and their whiskers glow faintly orange when they're excited (which is often). Emberkin believe a warm meal fixes most problems and a good hammer fixes the rest. Hearth Rest is closest to their heart.",
      motto: "Keep it lit.",
      signatureColors: [
        { name: "Ember orange", hex: "#e0702a" },
        { name: "Soot black", hex: "#2a2224" },
        { name: "Copper", hex: "#b86b3c" }
      ],
      discordChannel: "emberkin",
      denGreeting: "The forge is warm, the kettle's on, and someone's whiskers are already glowing.",
      atlasAffinity: "A small boost to Upgrade actions on Plazas & Markets.",
      webArt500: "/assets/web/art/emberkin-500.webp",
      webArt1000: "/assets/web/art/emberkin-1000.webp",
      altText: "Pixel-art ginger cat in an orange wizard hat and robes holding a fire staff amid flames"
    },
    {
      slug: "rimewhisper",
      name: "Rimewhisper",
      emoji: "❄️",
      vibe: "Quiet, wry, frost-touched watchers",
      tagline: "Quiet cats of the high snows, whose whiskers catch frost like starlight and whose words are few but true.",
      description: "Rimewhisper cats come from the northern peaks, where the air is thin and the stars are close. They're patient, observant and wry, the sort of cat who says one sentence at dinner that everyone remembers for a week. They read weather, track the moons and build beautiful ice-lanterns that never melt indoors. They're often mistaken for aloof, but anyone who earns a Rimewhisper's trust has a friend for nine lives.",
      motto: "Still waters, sharp eyes.",
      signatureColors: [
        { name: "Frost white", hex: "#eef3f7" },
        { name: "Glacier blue", hex: "#6fa8d6" },
        { name: "Silver", hex: "#b9c0c8" }
      ],
      discordChannel: "rimewhisper",
      denGreeting: "Thin air, close stars, an ice-lantern that never melts indoors.",
      atlasAffinity: "A small boost to Defend actions on Towers & high ground.",
      webArt500: "/assets/web/art/rimewhisper-500.webp",
      webArt1000: "/assets/web/art/rimewhisper-1000.webp",
      altText: "Pixel-art white fluffy cat in a frosty white wizard hat holding an ice-crystal staff"
    },
    {
      slug: "voidpurr",
      name: "Voidpurr",
      emoji: "🌌",
      vibe: "Mysterious, starlit, riddle-tellers",
      tagline: "Starlit mysteries from the edges of the map, who purr in a frequency only the night can hear.",
      description: "Voidpurr cats are drawn to the places between: the dark between stars, the hush after midnight, the hallway where the lamp has gone out. They aren't villains. They're the keepers of Whiskerwild's mysteries, and Nightskein is their patron. Voidpurrs are dreamers, stargazers and riddle-tellers, and they are extremely good at appearing on top of a wardrobe without anyone seeing them climb.",
      motto: "Look closer.",
      signatureColors: [
        { name: "Deep indigo", hex: "#2e2468" },
        { name: "Starlight violet", hex: "#9a7ae0" },
        { name: "Black", hex: "#14111c" }
      ],
      discordChannel: "voidpurr",
      denGreeting: "You didn't see us climb onto the wardrobe. Nobody ever does.",
      atlasAffinity: "A small boost to Claim actions on Dungeons & Alleys.",
      webArt500: "/assets/web/art/voidpurr-500.webp",
      webArt1000: "/assets/web/art/voidpurr-1000.webp",
      altText: "Pixel-art calico cat in a grey wizard hat with a violet halo and a purple potion amid swirling magic"
    }
  ] satisfies HouseRecord[],

  classes: [
    {
      slug: "knight",
      name: "Knight",
      role: "Balanced frontline",
      loreLine: "Knights who guard.",
      flavor: "Steady at claiming and defending. The default anchor of any Party, and comfortable on any tile.",
      silhouetteKit: "Helm and light armor, sword and shield",
      landAffinity: "Castles, Roads",
      discordEmoji: "🗡️",
      webArt500: "/assets/web/art/knight-500.webp",
      webArt1000: "/assets/web/art/knight-1000.webp",
      altText: "Pixel-art orange tabby Knight in light plate with a sword, a paw-crest shield and a blue cape"
    },
    {
      slug: "archer",
      name: "Archer",
      role: "Range & scouting",
      loreLine: "Archers who watch.",
      flavor: "Supports claims from range and holds well on high ground.",
      silhouetteKit: "Hood, bow, quiver",
      signatureAbility: {
        name: "Scout",
        description: "Reveals information about nearby tiles, so a Party can move with care."
      },
      landAffinity: "Forests, Towers",
      discordEmoji: "🏹",
      webArt500: "/assets/web/art/archer-500.webp",
      webArt1000: "/assets/web/art/archer-1000.webp",
      altText: "Pixel-art brown tabby Archer in a green hood with a bow and quiver in a mossy forest"
    },
    {
      slug: "heavy-knight",
      name: "Heavy Knight",
      role: "Tank",
      loreLine: "Heavy knights who hold.",
      flavor: "The strongest defender in Whiskerwild, if a little slow to claim new ground.",
      silhouetteKit: "Heavy plate, greatshield, bulky stance",
      signatureAbility: {
        name: "Hold",
        description: "Keeps a tile's defend window open longer."
      },
      landAffinity: "Fortresses, Gates",
      discordEmoji: "🛡️",
      webArt500: "/assets/web/art/heavy-knight-500.webp",
      webArt1000: "/assets/web/art/heavy-knight-1000.webp",
      altText: "Pixel-art grey tabby Heavy Knight in full dark plate with a tower shield and war hammer"
    },
    {
      slug: "mage",
      name: "Mage",
      role: "Magic & support",
      loreLine: "Mages who weave.",
      flavor: "Best at upgrades, wards and Study. Light on the front line, heavy on the spellbook.",
      silhouetteKit: "Pointed hat, staff, robes",
      signatureAbility: {
        name: "Ward",
        description: "Places a temporary protective charm on a tile."
      },
      landAffinity: "Temples, Academies",
      discordEmoji: "🔮",
      webArt500: "/assets/web/art/mage-500.webp",
      webArt1000: "/assets/web/art/mage-1000.webp",
      altText: "Pixel-art white fluffy Mage in a starry indigo pointed hat and robes holding a crystal staff"
    },
    {
      slug: "assassin",
      name: "Assassin",
      role: "Stealth & disruption",
      loreLine: "Assassins who slip between shadows.",
      flavor: "Quick to claim contested tiles, light on defense. Moves where the lamps have gone out.",
      silhouetteKit: "Hood, twin daggers, void-wisp glow",
      signatureAbility: {
        name: "Slip",
        description: "In seasonal Raids, a claim attempt can slip past one defender."
      },
      landAffinity: "Dungeons, Alleys",
      discordEmoji: "🌙",
      webArt500: "/assets/web/art/assassin-500.webp",
      webArt1000: "/assets/web/art/assassin-1000.webp",
      altText: "Pixel-art black hooded Assassin cat with glowing eyes and twin violet daggers in a crypt doorway"
    }
  ] satisfies ClassRecord[],

  utility: {
    intro: "Three pieces, shipped in phases.",
    cards: [
      {
        id: "hearth-rest",
        icon: "🔥",
        name: "Hearth Rest",
        phaseLabel: "Coming in Phase 1",
        whatItIs: "Rest your Meow by the fire and build up Rest Points. Your Meow stays in your wallet while it rests (planned design), and you can wake it whenever you like.",
        points: [
          "Rest Points help power your Party on the Atlas.",
          "They unlock cosmetic perks like Hearth badges and profile frames.",
          "They can give priority or eligibility in future land phases.",
          "Rested Meows get the Hearth Resting role in Discord."
        ],
        whatThisIsnt: "Rest Points are non-monetary points with no cash value. They're for in-world perks, not a paycheck."
      },
      {
        id: "territories",
        icon: "🏰",
        name: "Territories",
        phaseLabel: "Coming in Phase 2",
        whatItIs: "Whiskerwild is divided into places you can hold: castles, forests, dungeons, roads, temples and plazas. Each Territory is its own collectible, tied to a tile on the map.",
        points: [
          "Some tiles need a Party that meets a claim gate (for example, a Dungeon wants an Assassin and an Archer).",
          "Gates reward collecting different Classes and taking part over time, not just holding the most.",
          "Later (Phase 3), the grandest Landmarks can be owned in slices by many holders.",
          "If a Territory generates real fees in the protocol, a published portion goes to its owner(s). The split is published before any land sale."
        ],
        whatThisIsnt: "Territory fee distributions, if any, come only from real fees generated in the protocol and may be zero. No fees means nothing to distribute."
      },
      {
        id: "whiskerwild-atlas",
        icon: "🗺️",
        name: "Whiskerwild Atlas",
        phaseLabel: "Coming in Phase 1",
        whatItIs: "A pixel map game in your browser. Pan and zoom across Region 1, see who holds what, and watch House banners go up on tiles as Whiskerwild fills in.",
        points: [
          "Phase 1: read-only map of Region 1 with tile previews and a Party builder.",
          "Phase 2: claim, defend and upgrade tiles with your Party.",
          "Phase 4: seasonal loops: Patrol, Hunt, Study and opt-in Raids.",
          "Raids never take anyone's collectibles. They shift banners for a season."
        ],
        whatThisIsnt: "The Atlas is a game about places and Parties. Ownership first, no grind, and no promises of value."
      }
    ] satisfies UtilityCard[],
    // TODO(legal): lawyer to review all Territory and Landmark-slice wording before launch
    territoryDisclaimer: "Territories and Landmark slices are planned features of a game. They are digital collectibles, not real-world property, securities or an investment, and nothing on this site is an offer to sell them. Details, including any fee split, will be published before any land sale and may change after legal review.",
    summaryLabel: "Full stack:",
    summaryLine: "Meow → Discord identity + Hearth Rest + Party power; Territory → a tile on the Atlas, held by one holder or (for Landmarks) in slices."
  },

  roadmap: {
    intro: "From this marketing site to a living Atlas. Phases ship when they're ready, never on hype alone.",
    phases: [
      {
        phase: "0a",
        name: "Marketing site & Discord",
        status: "In progress",
        items: [
          "This website: lore, Houses, Classes, Utility, Roadmap, FAQ.",
          "Discord opens: verify, pick your House, first weekly Soft Steps quests.",
          "Merits begin."
        ]
      },
      {
        phase: "0b",
        name: "The Crossing (mint)",
        status: "Planned",
        items: [
          "Mint page with eligibility checker: Founding Whisk (OG) → GTD → FCFS.",
          "Reveal: every Meow arrives with a House and a Class.",
          "My Party v0: see your Meows and link Discord for Holder, House and Class roles."
        ]
      },
      {
        phase: "1",
        name: "Hearth Rest & Atlas v1",
        status: "Planned",
        items: [
          "Rest and wake your Meows; see Rest Points (contract audit planned before launch).",
          "Read-only Atlas of Region 1 with tile previews.",
          "Party builder."
        ]
      },
      {
        phase: "2",
        name: "First region opens",
        status: "Planned",
        items: [
          "Region 1 (around 36 tiles suggested) with tile types and claim gates.",
          "Fee split published before any sale.",
          "Landowner role, My Territories tab."
        ]
      },
      {
        phase: "3",
        name: "Landmark slices & the Ledger",
        status: "Planned",
        items: [
          "Own a slice of a Landmark alongside other holders.",
          "Landmark Ledger: each tile's actual fee history, never projections.",
          "Monthly transparency posts from real data."
        ]
      },
      {
        phase: "4",
        name: "Seasons",
        status: "Planned",
        items: [
          "Seasonal loops: Patrol, Hunt, Study and opt-in Raids.",
          "Tile upgrades and the House Cup.",
          "Sponsor banners on select tiles, always clearly labeled."
        ]
      }
    ] satisfies RoadmapPhase[],
    footnote: "Plans can change as we build and test. Nothing here is a promise of value or returns."
  },

  mint: {
    eyebrow: "The Crossing",
    title: "Mint",
    intro: "Three calm phases. Supply, price, limits, windows and chain are all TBA until they're locked and announced. Earn a spot through Discord Merits, never through DMs.",
    howToEarn: [
      { step: 1, title: "Join & verify", text: "Open Discord, pass verification, pick a House." },
      { step: 2, title: "Soft Steps", text: "Complete the weekly quest board. Kindness over spam." },
      { step: 3, title: "Earn Merits", text: "Points stack into tiers that unlock raffle weight." },
      { step: 4, title: "Raffles", text: "Founding Whisk, GTD and WL draws. Method published, results posted." }
    ],
    pathLine: "Soft Steps → Merits → Merits tiers → raffles for WL, GTD and Founding Whisk (OG).",
    meritsTiers: [
      { emoji: "🐾", tier: "Whisker", text: "First steps. Verified, plus one quest done. Entries into WL raffles." },
      { emoji: "👣", tier: "Pawprint", text: "Showing up week after week. Entries into WL raffles." },
      { emoji: "🧭", tier: "Pathfinder", text: "A strong contributor. Eligible for GTD raffles." },
      { emoji: "🏮", tier: "Lanternbearer", text: "A top contributor. More weight in GTD raffles, plus OG raffle entries." },
      { emoji: "✨", tier: "Atlas-Touched", text: "A small, exceptional group of creators, lore-keepers and helpers. Highest Founding Whisk (OG) raffle weight. A few direct OG awards may go to exceptional contributors, always announced with the reasons." }
    ] satisfies MeritsTier[],
    tiersFinePrint: "Merits are community points with no cash value. They're never spent; your total only grows. Tier thresholds and raffle details are being finalized and will be announced before the first raffle.",
    // label and emphasis are bold in the reference (9.5)
    whatEachSpotMeans: [
      { label: "Founding Whisk (OG)", text: "guaranteed mint within the OG window." },
      { label: "GTD", text: "guaranteed mint within the GTD window." },
      { label: "WL", text: "FCFS access, first come, first served while supply lasts.", emphasis: "WL is not a guaranteed mint." }
    ],
    spotNotice: "The team never DMs first. Raffle methods are published before every draw (for example, a seeded random draw with the seed revealed afterward), and results are posted in #raffles on our Discord.",
    safetyCallout: "There's nothing to connect yet. Before mint, this site will never ask you to connect a wallet, sign anything, or share a seed phrase. When mint details are ready, we'll announce them here and in #announcements on our Discord."
  },

  discord: {
    steps: [
      { step: 1, title: "Read #rules", text: "Short, so you can get back to napping." },
      { step: 2, title: "Verify in #verify", text: "Verification happens entirely inside Discord. No wallet needed, ever." },
      { step: 3, title: "Pick your House in #pick-your-house", text: "Choose one of the six Houses by vibe. You can switch any time." },
      { step: 4, title: "Try the Soft Steps in #soft-steps", text: "A new board of gentle quests every week. Complete them to earn Merits." }
    ]
  },

  faq: [
    {
      question: "What is Fantasy Meows?",
      answer: "A pixel-art cat collection set in Whiskerwild, a soft-epic fantasy world where ordinary cats carry quiet magic in their whiskers. Every Meow has a House, a Class, and (later) a place on the Whiskerwild Atlas."
    },
    {
      question: "What's the difference between a House and a Class?",
      answer: "Your House (one of six) is who you are in the story and in Discord. Your Class (one of five: Knight, Archer, Heavy Knight, Mage or Assassin) is what you do in the game and on the map. Both are traits in your Meow's metadata. Other traits like fur, eyes and accessories are purely cosmetic."
    },
    {
      question: "When is mint, and how much will it cost?",
      answer: "Supply, prices, per-wallet limits, mint windows and chain are all still to be announced. We'll publish them on this site and in the Discord announcements channel once they're locked. Until then, any number you see elsewhere isn't from us."
    },
    {
      question: "How do I get on the list?",
      answer: "Join the Discord, verify, pick your House and take part in the weekly Soft Steps quests to earn Merits. Higher Merits tiers mean more weight in raffles for WL, GTD and Founding Whisk (OG). Raffle methods are published and results are posted openly."
    },
    {
      question: "Is WL a guaranteed mint?",
      answer: "No. WL gives FCFS access, which is first come, first served while supply lasts and not a guaranteed mint. Only Founding Whisk (OG) and GTD are guaranteed mints, and only within their mint windows."
    },
    {
      question: "What is Hearth Rest? Are Rest Points money?",
      answer: "Hearth Rest (Phase 1) lets you rest your Meow by the fire to build Rest Points. Rest Points are non-monetary points with no cash value. They power your Party on the Atlas and unlock in-world perks. They aren't a token and aren't redeemable for money."
    },
    {
      question: "Is there a token?",
      answer: "Not now. Rest Points are points. If a token ever exists, we'll explain it plainly first."
    },
    {
      question: "Will owning a Territory pay me?",
      answer: "Territories are digital places on the Atlas. Fantasy Meows makes no promises of income or returns. For complete details on Territory mechanics and protocol activity policies, see our /disclosures page."
    },
    {
      question: "Do I need to connect a wallet on this site?",
      answer: "No. There's nothing to connect before mint. This site will never ask you to connect a wallet, sign anything, or share a seed phrase or private key. If a site that looks like ours asks you to, it's a scam."
    },
    {
      question: "Will the team ever DM me?",
      answer: "Never first. Official links are announced on this site and in #announcements on our Discord; scams are reported in #safety-scams. If someone DMs you offering a mint, WL or \"support\", it's a scam."
    },
    {
      question: "Is this financial advice?",
      answer: "No. Fantasy Meows are digital collectibles. Nothing here is financial advice or an offer of securities. Smart contracts carry risk. Only spend what you're comfortable with."
    }
  ] satisfies FaqItem[],

  safety: {
    eyebrow: "Stay safe",
    title: "Official links",
    neverItems: [
      "DM you first, whether about mints, WL, \"support\", giveaways or \"verification\"",
      "Ask for your seed phrase, recovery phrase or private key",
      "Ask you to connect a wallet or sign anything before mint, on this site or to verify on Discord",
      "Ask you to send crypto to \"unlock\", \"claim\" or \"fix\" anything"
    ],
    mintLinksNote: "Mint details are TBA, so any mint link you see today is fake. Real mint links will only ever be announced on this site and in #announcements on our Discord.",
    protectNote: "Turn off DMs from our Discord server (server name → Privacy Settings), consider a separate wallet for minting, and report scams in #safety-scams.",
    footerBlock: "Stay safe. We will never DM you first, and we'll never ask you to connect a wallet or share a seed phrase. Official links are announced on this site and in #announcements on our Discord; scams are reported in #safety-scams."
  },

  disclosures: {
    eyebrow: "Honesty",
    title: "Risk & disclosures",
    intro: "These statements also appear in the site footer. They aren't fine print. They're the rules.",
    core: [
      "Fantasy Meows are digital collectibles. Nothing here is financial advice or an offer of securities.",
      "Rest Points are non-monetary points with no cash value.",
      "Territory fee distributions, if any, come only from real fees generated in the protocol and may be zero.",
      "Smart contracts carry risk. Only spend what you're comfortable with."
    ],
    additional: [
      "Territories and Landmark slices are planned features of a game. They are digital collectibles, not real-world property, securities or an investment, and nothing on this site is an offer to sell them. Details, including any fee split, will be published before any land sale and may change after legal review.",
      "Mint details (price, supply, per-wallet limits, windows, mint date and chain) are TBA. Anything you see elsewhere isn't from us.",
      "Roadmap plans can change as we build and test. Nothing on this site is a promise of value or returns.",
      "Artwork shown is preview art. The final collection may look different."
    ],
    wordWatchlist: "We do not use APY, APR, yield, passive income, floor, moon, pump, ROI, or unconfirmed sell-out / partnership claims in public copy. Territory fee talk, if any, describes real fees only and may be zero. \"WL\" is never described as a guaranteed mint.",
    loreRule: "Lore builds the world, never the wallet. Lore never promises tokens, APY, floors or income."
  },

  notFound: {
    eyebrow: "Lost on the lantern road",
    title: "This path isn't on the map yet.",
    text: "Even the wisest cats wander off sometimes. Let's get you back to the Hearth.",
    cta: "Back home"
  }
};

export type House = (typeof content.houses)[number];
export type ClassItem = (typeof content.classes)[number];

