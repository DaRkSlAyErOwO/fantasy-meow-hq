import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { content } from '@/config/content';
import { PixelSectionHead } from '@/components/pixel/PixelSectionHead';
import { PixelSprite } from '@/components/pixel/PixelSprite';
import { PixelParticles } from '@/components/pixel/PixelParticles';

const { houses, ui } = content;

/** The Six Houses (#houses). Night sky banner wall: six equal House banners, no ranking. */
export const HouseBannerWall: React.FC = () => (
  <section id="houses" className="px-section px-section--night" aria-labelledby="houses-title">
    <PixelParticles kind="star" count={28} className="px-particles--sky" />
    <div className="container px-rel">
      <PixelSectionHead eyebrow={ui.houses.eyebrow} title={ui.houses.title} intro={ui.houses.intro} id="houses-title" />

      <ul className="px-houses">
        {houses.map((h, i) => (
          <li
            key={h.slug}
            className="px-house px-frame px-frame--card px-lift"
            data-px-reveal="dissolve"
            style={{ '--house': `var(--house-${h.slug})`, '--house-on': `var(--house-${h.slug}-on)`, animationDelay: `${(i % 3) * 120}ms` } as React.CSSProperties}
          >
            <div className="px-house__banner">
              <h3 className="px-house__name">
                <span aria-hidden="true" className="px-house__emoji">
                  {h.emoji}
                </span>{' '}
                {h.name}
              </h3>
            </div>
            <div className="px-house__art">
              <Image src={h.webArt500} alt={h.altText} width={500} height={500} className="pixelated px-art px-art--house" loading="lazy" />
            </div>
            <div className="px-house__body">
              <p className="px-chip">{h.vibe}</p>
              <p className="px-small">{h.tagline}</p>
              <p className="px-motto">
                <span className="px-motto__label">{ui.houses.mottoLabel}</span> &ldquo;{h.motto}&rdquo;
              </p>
              <ul className="px-swatches">
                {h.signatureColors.map((c) => (
                  <li key={c.hex} className="px-swatch">
                    <span className="px-swatch__chip" style={{ backgroundColor: c.hex }} aria-hidden="true" />
                    <span>{c.name}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/houses/${h.slug}/`} className="px-btn px-btn--gold px-btn--block">
                <span>{ui.houses.readPage(h.name)}</span>
                <PixelSprite name="arrow" scale={2} className="px-btn__arrow" />
              </Link>
            </div>
          </li>
        ))}
      </ul>

      <p className="px-fineprint px-fineprint--night">{ui.houses.finePrint}</p>
    </div>
  </section>
);
