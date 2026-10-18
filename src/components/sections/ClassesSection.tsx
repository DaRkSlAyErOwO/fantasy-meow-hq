'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { content } from '@/config/content';

export const ClassesSection: React.FC = () => {
  const [selectedClassIndex, setSelectedClassIndex] = useState<number>(2); // Default to Heavy Knight in center
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const classesList = content.classes;
  const activeClass = classesList[hoveredIndex ?? selectedClassIndex];

  // Fanned angles and offsets for desktop card hand. Cards are spread (not overlapped) and only
  // gently rotated so every card's lore quote stays fully readable, lifted or not.
  const fanStyles = [
    { rotate: -6, translateY: 12, translateX: -28, zIndex: 1 },
    { rotate: -3, translateY: 4, translateX: -14, zIndex: 2 },
    { rotate: 0, translateY: 0, translateX: 0, zIndex: 3 },
    { rotate: 3, translateY: 4, translateX: 14, zIndex: 4 },
    { rotate: 6, translateY: 12, translateX: 28, zIndex: 5 },
  ];

  return (
    <section id="classes" className="classes-section-root">
      <div className="container">
        {/* Section Header: Compact vertical footprint */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 20px' }}>
          <div style={{ display: 'inline-flex', marginBottom: '8px' }}>
            <span
              className="font-body pixel-box-sm"
              style={{
                fontSize: '12px',
                fontWeight: 700,
                color: 'var(--color-candle-dark)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                backgroundColor: 'var(--color-parchment-card)',
                padding: '3px 10px',
                borderRadius: '4px',
              }}
            >
              What you do
            </span>
          </div>

          <h2
            className="font-pixel"
            style={{
              fontSize: 'clamp(2rem, 3.4vw, 2.7rem)',
              color: 'var(--color-ink-primary)',
              lineHeight: 1.15,
              marginBottom: '6px',
            }}
          >
            The Five Classes
          </h2>

          <p
            className="font-body"
            style={{
              fontSize: '14.5px',
              color: 'var(--color-ink-secondary)',
              lineHeight: 1.45,
              maxWidth: '640px',
              margin: '0 auto',
            }}
          >
            Class is what you do on the map and in the game. Every Meow is one of five.
          </p>
        </div>

        {/* Fanned Card Hand Container */}
        <div className="card-hand-wrapper">
          <div className="card-hand" role="region" aria-label="Five Classes Card Hand">
            {classesList.map((cls, idx) => {
              const isSelected = selectedClassIndex === idx;
              const isHovered = hoveredIndex === idx;
              const isLifted = isHovered || isSelected;
              const baseFan = fanStyles[idx] || { rotate: 0, translateY: 0, translateX: 0, zIndex: 1 };

              return (
                <div
                  key={cls.slug}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  className={`class-card-item ${isLifted ? 'is-lifted' : ''}`}
                  style={{
                    '--fan-rotate': `${baseFan.rotate}deg`,
                    '--fan-ty': `${baseFan.translateY}px`,
                    '--fan-tx': `${baseFan.translateX}px`,
                    '--fan-z': baseFan.zIndex,
                  } as React.CSSProperties}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setSelectedClassIndex(idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedClassIndex(idx);
                    }
                  }}
                >
                  <div className="pixel-box class-card-inner">
                    {/* Top Neutral Shared Badge (Ink on parchment, gold outline) */}
                    <div className="neutral-badge-row">
                      <span className="font-body neutral-class-badge">
                        <span aria-hidden="true" style={{ fontSize: '13px' }}>{cls.discordEmoji}</span>
                        <span>{cls.role}</span>
                      </span>
                    </div>

                    {/* Crisp Pixel Portrait */}
                    <div className="class-portrait-wrap">
                      <Image
                        src={cls.webArt500}
                        alt={cls.altText}
                        fill
                        className="pixelated"
                        style={{ objectFit: 'cover', imageRendering: 'pixelated' }}
                      />
                    </div>

                    {/* Class Name & Lore Line */}
                    <div className="class-card-footer">
                      <h3 className="font-body class-title">{cls.name}</h3>
                      <p className="font-body class-lore-line">&ldquo;{cls.loreLine}&rdquo;</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Class Spotlight Dossier (Verbatim doc copy, NO stats/power numbers) */}
        <div className="class-spotlight-dossier pixel-box" aria-live="polite">
          <div className="dossier-header-row">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '24px' }}>{activeClass.discordEmoji}</span>
              <div>
                <h3 className="font-pixel" style={{ fontSize: '26px', color: 'var(--color-ink-primary)', margin: 0 }}>
                  {activeClass.name}
                </h3>
                <span className="font-body neutral-class-badge" style={{ marginTop: '4px' }}>
                  {activeClass.role}
                </span>
              </div>
            </div>

            <Link
              href={`/classes/${activeClass.slug}/`}
              className="pixel-btn"
              style={{
                fontSize: '13px',
                padding: '8px 14px',
                backgroundColor: 'var(--color-candle-gold)',
                color: 'var(--color-ink-primary)',
              }}
            >
              Explore {activeClass.name} &rarr;
            </Link>
          </div>

          <div className="dossier-body">
            <p className="font-body" style={{ fontSize: '16px', color: 'var(--color-ink-primary)', fontStyle: 'italic', marginBottom: '10px' }}>
              &ldquo;{activeClass.loreLine}&rdquo;
            </p>

            <p className="font-body" style={{ fontSize: '15px', color: 'var(--color-ink-secondary)', lineHeight: 1.6, margin: 0 }}>
              {activeClass.flavor}
            </p>

            <div className="dossier-meta-row">
              <div className="meta-pill">
                <span className="font-body meta-label">Kit:</span>
                <span className="font-body meta-val">{activeClass.silhouetteKit}</span>
              </div>
              <div className="meta-pill">
                <span className="font-body meta-label">Favored Ground:</span>
                <span className="font-body meta-val">{activeClass.landAffinity}</span>
              </div>
              {activeClass.signatureAbility && (
                <div className="meta-pill">
                  <span className="font-body meta-label">Ability ({activeClass.signatureAbility.name}):</span>
                  <span className="font-body meta-val">{activeClass.signatureAbility.description}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.classes-section-root) {
          position: relative;
          background-color: var(--color-parchment-base);
          padding: 28px 0 60px;
          border-top: 3px solid var(--color-ink-primary);
        }

        :global(.card-hand-wrapper) {
          position: relative;
          max-width: 840px;
          margin: 0 auto 24px;
          padding: 24px 10px 4px;
          overflow: visible;
        }

        :global(.card-hand) {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          position: relative;
          min-height: 270px;
        }

        :global(.class-card-item) {
          width: 155px;
          margin: 0 -2px;
          cursor: pointer;
          transform: translateY(var(--fan-ty)) translateX(var(--fan-tx)) rotate(var(--fan-rotate));
          z-index: var(--fan-z);
          transition: transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), z-index 0.25s ease, box-shadow 0.25s ease;
          outline: none;
        }

        :global(.class-card-item:hover),
        :global(.class-card-item:focus-visible),
        :global(.class-card-item.is-lifted) {
          transform: translateY(-24px) translateX(var(--fan-tx)) rotate(0deg) scale(1.05);
          z-index: 35 !important;
        }

        :global(.class-card-inner) {
          background-color: var(--color-parchment-card);
          padding: 10px;
          border-radius: 6px;
          border: 3px solid var(--color-ink-primary);
          box-shadow: 4px 4px 0 var(--color-ink-primary);
          display: flex;
          flex-direction: column;
          gap: 7px;
          transition: all 0.2s ease;
        }

        :global(.class-card-item:hover .class-card-inner),
        :global(.class-card-item.is-lifted .class-card-inner) {
          border-color: var(--color-ink-primary);
          box-shadow: 5px 6px 0 var(--color-ink-primary);
          background-color: #fdfbf7;
        }

        /* Shared neutral badge style: ink on parchment, gold outline */
        :global(.neutral-class-badge) {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background-color: var(--color-parchment-base);
          color: var(--color-ink-primary);
          border: 2px solid var(--color-candle-gold);
          border-radius: 4px;
          padding: 2px 6px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        :global(.neutral-badge-row) {
          display: flex;
          justify-content: center;
        }

        :global(.class-portrait-wrap) {
          position: relative;
          width: 100%;
          height: 125px;
          border-radius: 4px;
          overflow: hidden;
          border: 2px solid var(--color-ink-primary);
          background-color: var(--color-hearth-soot);
        }

        :global(.class-card-footer) {
          text-align: center;
        }

        :global(.class-title) {
          font-size: 16px;
          color: var(--color-ink-primary);
          margin: 0 0 2px;
        }

        :global(.class-lore-line) {
          font-size: 12.5px;
          color: var(--color-ink-secondary);
          font-style: italic;
          line-height: 1.3;
          margin: 0;
        }

        :global(.class-spotlight-dossier) {
          max-width: 860px;
          margin: 0 auto;
          background-color: var(--color-parchment-card);
          padding: 26px 30px;
          border-radius: 8px;
          border: 3px solid var(--color-ink-primary);
          box-shadow: 4px 4px 0 var(--color-ink-primary);
        }

        :global(.dossier-header-row) {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px solid var(--color-parchment-border);
          padding-bottom: 14px;
          margin-bottom: 16px;
          flex-wrap: wrap;
          gap: 12px;
        }

        :global(.dossier-meta-row) {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 14px;
          padding-top: 12px;
          border-top: 1px dashed var(--color-parchment-border);
        }

        :global(.meta-pill) {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: var(--color-parchment-base);
          padding: 4px 10px;
          border-radius: 4px;
          border: 1px solid var(--color-parchment-border);
          font-size: 13px;
        }

        :global(.meta-label) {
          color: var(--color-candle-dark);
          font-weight: 700;
        }

        :global(.meta-val) {
          color: var(--color-ink-secondary);
        }

        /* Mobile Adjustments (<= 992px) */
        @media (max-width: 992px) {
          :global(.card-hand) {
            overflow-x: auto;
            justify-content: flex-start;
            padding: 20px 10px 30px;
            gap: 14px;
            min-height: auto;
            -webkit-overflow-scrolling: touch;
          }

          :global(.class-card-item) {
            flex-shrink: 0;
            width: 175px;
            transform: none !important;
          }

          :global(.class-card-item.is-lifted) {
            transform: translateY(-10px) !important;
          }

          :global(.class-portrait-wrap) {
            height: 160px;
          }
        }

        @media (max-width: 640px) {
          :global(.classes-section-root) {
            padding: 50px 0 70px;
          }

          :global(.class-card-item) {
            width: 160px;
          }

          :global(.class-portrait-wrap) {
            height: 145px;
          }

          :global(.class-spotlight-dossier) {
            padding: 18px;
          }
        }

        /* Respect Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          :global(.class-card-item) {
            transform: none !important;
            transition: none !important;
          }
          :global(.class-card-item:hover),
          :global(.class-card-item.is-lifted) {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};
