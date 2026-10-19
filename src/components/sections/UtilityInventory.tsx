import React from 'react';
import Link from 'next/link';
import { content } from '@/config/content';
import { PixelSectionHead } from '@/components/pixel/PixelSectionHead';
import { PixelSprite, type SpriteName } from '@/components/pixel/PixelSprite';

const { utility, ui } = content;

// Pixel sprite per card (replaces the emoji icon, which isn't pixel art)
const SLOT_SPRITE: Record<string, SpriteName> = {
  'hearth-rest': 'flame',
  territories: 'castle',
  'whiskerwild-atlas': 'map',
};

/** Utility, plainly (#utility). Three inventory slots, each with its "What this isn't" note. */
export const UtilityInventory: React.FC = () => (
  <section id="utility" className="px-section px-section--tan" aria-labelledby="utility-title">
    <div className="container">
      <PixelSectionHead eyebrow={ui.utility.eyebrow} title={ui.utility.title} intro={utility.intro} id="utility-title" />

      <ul className="px-slots">
        {utility.cards.map((card, i) => (
          <li key={card.id} className="px-slot-wrap" data-px-reveal="dissolve" style={{ animationDelay: `${i * 140}ms` }}>
            <article className="px-slot px-frame px-frame--card px-lift" aria-labelledby={`slot-${card.id}`}>
              <div className="px-slot__top">
                <span className="px-slot__icon px-frame px-frame--base" aria-hidden="true">
                  <PixelSprite name={SLOT_SPRITE[card.id] ?? 'scroll'} scale={3} />
                </span>
                <span className="px-chip">{card.phaseLabel}</span>
              </div>
              <h3 className="px-h3" id={`slot-${card.id}`}>
                {card.name}
              </h3>
              <p className="px-small">{card.whatItIs}</p>
              <ul className="px-bullets">
                {card.points.map((pt) => (
                  <li key={pt}>
                    <PixelSprite name="bullet" scale={2} className="px-bullets__icon" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="px-isnt">
                <p className="px-isnt__label">{ui.utility.whatThisIsntLabel}</p>
                <p className="px-small">{card.whatThisIsnt}</p>
              </div>
            </article>
            {/* Required directly with the Territories card (reference 7.3) */}
            {card.id === 'territories' && <p className="px-disclaimer px-frame px-frame--base">{utility.territoryDisclaimer}</p>}
          </li>
        ))}
      </ul>

      <div className="px-summary px-frame px-frame--card" data-px-reveal="wipe">
        <p className="px-small">
          <strong>{utility.summaryLabel}</strong> {utility.summaryLine}
        </p>
        <Link href="/disclosures/" className="px-link">
          {ui.utility.disclosuresLink}
          <PixelSprite name="arrow" scale={2} className="px-link__arrow" />
        </Link>
      </div>
    </div>
  </section>
);
