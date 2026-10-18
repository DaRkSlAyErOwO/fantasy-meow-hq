'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { content } from '@/config/content';
import { HouseWeatherCanvas } from '@/components/motion/HouseWeatherCanvas';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const houseColor = (slug: string) => `var(--house-${slug})`;
const onHouseColor = (slug: string) => `var(--house-${slug}-on)`;

export const HousesSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const reducedMotion = usePrefersReducedMotion();
  const tabListRef = useRef<HTMLDivElement | null>(null);

  const activeHouse = content.houses[selectedIndex];

  // Keyboard navigation for party-select tabs (Left/Right/Home/End)
  const handleKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    let nextIndex = currentIndex;
    const total = content.houses.length;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % total;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + total) % total;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = total - 1;
    }

    if (nextIndex !== currentIndex) {
      setSelectedIndex(nextIndex);
      const buttons = tabListRef.current?.querySelectorAll<HTMLButtonElement>('button[role="tab"]');
      if (buttons && buttons[nextIndex]) {
        buttons[nextIndex].focus();
      }
    }
  };

  return (
    <section
      id="houses"
      className="houses-section-root"
      style={{
        position: 'relative',
        padding: '96px 0 100px',
        backgroundColor: 'var(--color-hearth-charcoal)',
        borderTop: '4px solid var(--color-ink-primary)',
        // clip (not hidden) so the sticky portrait column still works
        overflow: 'clip',
      }}
    >
      {/* Background Decorative Star Grid */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.08,
          backgroundImage: 'radial-gradient(var(--color-candle-gold) 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
          <div style={{ display: 'inline-flex', marginBottom: '12px' }}>
            <span
              className="font-body pixel-box-sm"
              style={{
                fontSize: '12px',
                fontWeight: 700,
                color: 'var(--color-candle-gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                backgroundColor: 'var(--color-hearth-soot)',
                padding: '4px 12px',
                borderRadius: '4px',
              }}
            >
              Who you are
            </span>
          </div>

          <h2
            className="font-pixel title-glow"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              color: 'var(--color-hearth-text)',
              marginBottom: '12px',
            }}
          >
            The Six Houses
          </h2>

          <p
            className="font-body"
            style={{
              fontSize: '17px',
              color: 'var(--color-hearth-muted)',
              lineHeight: 1.6,
            }}
          >
            House is identity first: Discord flair, lore, and culture. Every Meow belongs to one.
          </p>
        </div>

        {/* RPG Character Select: Ribbon Tabs per House with Flat House Color */}
        <div
          ref={tabListRef}
          role="tablist"
          aria-label="House Character Select"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '40px',
          }}
        >
          {content.houses.map((house, idx) => {
            const isSelected = idx === selectedIndex;

            return (
              <button
                key={house.slug}
                role="tab"
                aria-selected={isSelected}
                aria-controls={`house-panel-${house.slug}`}
                id={`house-tab-${house.slug}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setSelectedIndex(idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className="pixel-btn house-ribbon-tab"
                style={{
                  backgroundColor: isSelected ? houseColor(house.slug) : 'var(--color-hearth-soot)',
                  color: isSelected ? onHouseColor(house.slug) : 'var(--color-hearth-text)',
                  borderWidth: '3px 3px 3px 6px',
                  borderStyle: 'solid',
                  borderTopColor: isSelected ? 'var(--color-ink-primary)' : 'var(--color-hearth-border)',
                  borderRightColor: isSelected ? 'var(--color-ink-primary)' : 'var(--color-hearth-border)',
                  borderBottomColor: isSelected ? 'var(--color-ink-primary)' : 'var(--color-hearth-border)',
                  borderLeftColor: houseColor(house.slug),
                  padding: '10px 18px',
                  fontSize: '14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: isSelected ? '4px 4px 0 var(--color-ink-primary)' : '2px 2px 0 var(--color-ink-primary)',
                  transform: isSelected ? 'translate(-2px, -2px)' : 'none',
                }}
              >
                <span style={{ fontSize: '18px' }} aria-hidden="true">
                  {house.emoji}
                </span>
                <span className="font-body" style={{ fontWeight: 700 }}>
                  {house.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* RPG Showcase Stage: Center Portrait + Right Neo-Brutalist Dossier Panel */}
        <div
          id={`house-panel-${activeHouse.slug}`}
          role="tabpanel"
          aria-labelledby={`house-tab-${activeHouse.slug}`}
          className="house-showcase-stage"
        >
          {/* Stage Left: Big Crisp Pixel Portrait (Whole-Number Scale) with Per-House Weather Canvas.
              Sticky on desktop so it stays beside long dossiers instead of leaving empty space. */}
          <div
            className="house-art-col"
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              className="pixel-box-lg"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '440px',
                aspectRatio: '1 / 1',
                backgroundColor: 'var(--color-hearth-soot)',
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '4px solid var(--color-ink-primary)',
                boxShadow: '6px 6px 0 var(--color-ink-primary)',
              }}
            >
              {/* Per-House Weather Canvas (Candle flicker, shield glint, spores, embers, snow, starfield) */}
              <HouseWeatherCanvas slug={activeHouse.slug} />

              {/* Big Crisp Pixel Portrait (Whole-Number 320x320 Scale) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeHouse.slug}
                  initial={reducedMotion ? undefined : { opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reducedMotion ? undefined : { opacity: 0, scale: 1.04 }}
                  transition={{ duration: reducedMotion ? 0 : 0.2, ease: 'easeOut' }}
                  style={{
                    position: 'relative',
                    width: '320px',
                    height: '320px',
                    zIndex: 3,
                  }}
                >
                  <Image
                    src={activeHouse.webArt500}
                    alt={activeHouse.altText || `${activeHouse.name} House Crest`}
                    width={320}
                    height={320}
                    priority
                    className="pixelated"
                    style={{
                      objectFit: 'contain',
                      imageRendering: 'pixelated',
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Bottom House Name Tag with House Flat Color Ribbon */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  backgroundColor: 'var(--color-parchment-card)',
                  color: 'var(--color-ink-primary)',
                  padding: '4px 14px',
                  borderRadius: '4px',
                  borderWidth: '2px 2px 2px 6px',
                  borderStyle: 'solid',
                  borderTopColor: 'var(--color-ink-primary)',
                  borderRightColor: 'var(--color-ink-primary)',
                  borderBottomColor: 'var(--color-ink-primary)',
                  borderLeftColor: houseColor(activeHouse.slug),
                  boxShadow: '2px 2px 0 var(--color-ink-primary)',
                  zIndex: 4,
                }}
              >
                <span className="font-body" style={{ fontSize: '14px', fontWeight: 700 }}>
                  {activeHouse.emoji} {activeHouse.name}
                </span>
              </div>
            </div>

            {/* Preview art disclaimer */}
            <p
              className="font-body"
              style={{ fontSize: '13px', color: 'var(--color-hearth-muted)', marginTop: '12px' }}
            >
              Preview art. The final collection may look different.
            </p>
          </div>

          {/* Stage Right: Neo-Brutalist Dossier Panel (3px ink border, 4px hard offset shadow) */}
          <div
            className="pixel-box dossier-panel"
            style={{
              backgroundColor: 'var(--color-parchment-card)',
              border: '3px solid var(--color-ink-primary)',
              boxShadow: '4px 4px 0 var(--color-ink-primary)',
              padding: '34px',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
            }}
          >
            {/* Header: Emoji & Name Text-Morph on Switch */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                <span style={{ fontSize: '28px' }} aria-hidden="true">
                  {activeHouse.emoji}
                </span>

                {/* Name Text-Morph */}
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={activeHouse.name}
                    initial={reducedMotion ? undefined : { opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reducedMotion ? undefined : { opacity: 0, x: 10 }}
                    transition={{ duration: reducedMotion ? 0 : 0.18 }}
                    className="font-pixel"
                    style={{ fontSize: '28px', color: 'var(--color-ink-primary)', margin: 0 }}
                  >
                    {activeHouse.name}
                  </motion.h3>
                </AnimatePresence>
              </div>

              {/* Vibe badge in body font */}
              <span
                className="font-body"
                style={{
                  display: 'inline-block',
                  fontSize: '13.5px',
                  color: 'var(--color-ink-secondary)',
                  fontStyle: 'italic',
                }}
              >
                {activeHouse.vibe}
              </span>
            </div>

            {/* Tagline */}
            <p
              className="font-body"
              style={{
                fontSize: '17px',
                fontWeight: 600,
                fontStyle: 'italic',
                color: 'var(--color-candle-dark)',
                lineHeight: 1.45,
                margin: 0,
              }}
            >
              &ldquo;{activeHouse.tagline}&rdquo;
            </p>

            {/* Description */}
            <p
              className="font-body"
              style={{
                fontSize: '15px',
                color: 'var(--color-ink-secondary)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {activeHouse.description}
            </p>

            {/* Motto Badge */}
            <div
              className="pixel-box-sm"
              style={{
                backgroundColor: 'var(--color-parchment-base)',
                padding: '8px 14px',
                borderRadius: '4px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                width: 'fit-content',
              }}
            >
              <span
                className="font-body"
                style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-ink-primary)' }}
              >
                Motto:
              </span>
              <span
                className="font-body"
                style={{ fontSize: '14px', fontStyle: 'italic', color: 'var(--color-ink-secondary)' }}
              >
                &ldquo;{activeHouse.motto}&rdquo;
              </span>
            </div>

            {/* Signature Colors Swatches */}
            <div>
              <p
                className="font-body"
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: 'var(--color-ink-primary)',
                  margin: 0,
                }}
              >
                Signature Colors:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '6px' }}>
                {activeHouse.signatureColors.map((c) => (
                  <div
                    key={c.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '13px',
                      color: 'var(--color-ink-secondary)',
                    }}
                  >
                    <span
                      style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '3px',
                        backgroundColor: c.hex,
                        border: '2px solid var(--color-ink-primary)',
                        display: 'inline-block',
                      }}
                      aria-hidden="true"
                    />
                    <span className="font-body">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Den Greeting Quote */}
            {activeHouse.denGreeting && (
              <div
                style={{
                  borderLeft: '3px solid var(--color-candle-gold)',
                  paddingLeft: '12px',
                  fontSize: '13px',
                  color: 'var(--color-ink-muted)',
                  fontStyle: 'italic',
                }}
              >
                &ldquo;{activeHouse.denGreeting}&rdquo; —{' '}
                <span style={{ fontStyle: 'normal' }}>Discord #{activeHouse.discordChannel} den</span>
              </div>
            )}

            {/* Action Button: Link to /houses/[slug]/ */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '8px' }}>
              <Link
                href={`/houses/${activeHouse.slug}/`}
                className="pixel-btn"
                style={{
                  backgroundColor: 'var(--color-candle-gold)',
                  color: 'var(--color-ink-primary)',
                  padding: '10px 20px',
                  fontSize: '14px',
                }}
              >
                Read the {activeHouse.name} page →
              </Link>
            </div>
          </div>
        </div>

        {/* Section Fine Print */}
        <div
          style={{
            marginTop: '48px',
            textAlign: 'center',
            fontSize: '13px',
            color: 'var(--color-hearth-muted)',
            borderTop: '1px dashed var(--color-hearth-border)',
            paddingTop: '20px',
          }}
        >
          Houses are identity and story. No House is better, rarer or worth more than another.
        </div>
      </div>

      <style jsx>{`
        :global(.house-showcase-stage) {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
          align-items: start;
        }

        /* Two-column layout: keep the portrait in view while reading the dossier */
        @media (min-width: 720px) {
          :global(.house-art-col) {
            position: sticky;
            top: 104px;
          }
        }

        @media (max-width: 640px) {
          :global(.house-showcase-stage) {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          :global(.dossier-panel) {
            padding: 22px 18px !important;
          }

          :global(.house-ribbon-tab) {
            padding: 8px 12px !important;
            font-size: 13px !important;
          }
        }
      `}</style>
    </section>
  );
};
