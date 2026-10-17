'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ClassItem } from '@/config/content';

interface ClassDetailContentProps {
  cls: ClassItem;
  prevClass: ClassItem;
  nextClass: ClassItem;
}

export const ClassDetailContent: React.FC<ClassDetailContentProps> = ({
  cls,
  prevClass,
  nextClass,
}) => {
  return (
    <main className="class-detail-root" id="main-content">
      <div className="container">
        {/* Top Navigation Row: Back Link & Prev/Next */}
        <div className="top-nav-bar">
          <Link href="/classes/" className="font-pixel nav-back-link">
            <span>&larr;</span>
            <span>All Classes</span>
          </Link>

          <div className="prev-next-links">
            <Link
              href={`/classes/${prevClass.slug}/`}
              className="font-pixel prev-next-btn"
              title={`Previous: ${prevClass.name}`}
            >
              &larr; {prevClass.discordEmoji} {prevClass.name}
            </Link>
            <span className="nav-divider" aria-hidden="true">&bull;</span>
            <Link
              href={`/classes/${nextClass.slug}/`}
              className="font-pixel prev-next-btn"
              title={`Next: ${nextClass.name}`}
            >
              {nextClass.name} {nextClass.discordEmoji} &rarr;
            </Link>
          </div>
        </div>

        {/* Class Hero Banner */}
        <div className="pixel-box class-hero-panel">
          {/* Top Header Bar */}
          <div className="class-top-bar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="font-pixel neutral-class-badge">
                <span>{cls.discordEmoji}</span>
                <span>{cls.role}</span>
              </span>
              <span className="font-pixel class-group-tag">Class of Whiskerwild</span>
            </div>
            <span className="font-pixel class-lore-quote">
              &ldquo;{cls.loreLine}&rdquo;
            </span>
          </div>

          <div className="class-hero-grid">
            {/* Crisp Pixel Portrait */}
            <div className="class-portrait-column">
              <div className="class-portrait-card">
                <Image
                  src={cls.webArt1000 || cls.art}
                  alt={cls.altText}
                  fill
                  priority
                  className="pixelated"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="kit-callout-box">
                <span className="font-pixel kit-label">Silhouette Kit</span>
                <p className="font-body kit-text">{cls.silhouetteKit}</p>
              </div>
            </div>

            {/* Class Dossier Details */}
            <div className="class-content-column">
              <div className="class-title-area">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '24px' }}>{cls.discordEmoji}</span>
                  <span className="font-pixel class-role-subtitle">{cls.role}</span>
                </div>
                <h1 className="font-pixel class-title-text">{cls.name}</h1>
                <p className="font-body class-flavor-text">{cls.flavor}</p>
              </div>

              {/* Signature Ability */}
              {cls.signatureAbility ? (
                <div className="class-section-block">
                  <h2 className="font-pixel sub-header">Signature Ability</h2>
                  <div className="ability-card">
                    <span className="font-pixel ability-name">{cls.signatureAbility.name}</span>
                    <p className="font-body ability-desc">{cls.signatureAbility.description}</p>
                  </div>
                </div>
              ) : (
                <div className="class-section-block">
                  <h2 className="font-pixel sub-header">Combat Focus</h2>
                  <p className="font-body" style={{ color: 'var(--color-ink-secondary)', margin: 0 }}>
                    Steady anchor of any Party. Guards and claims with balanced resilience across frontline tiles.
                  </p>
                </div>
              )}

              {/* Land Affinity & Role */}
              <div className="dossier-meta-grid">
                <div className="meta-card">
                  <span className="font-pixel meta-label">Land Affinity</span>
                  <p className="font-body meta-desc">{cls.landAffinity}</p>
                  <span className="font-pixel meta-subnote">Favored Atlas terrain</span>
                </div>

                <div className="meta-card">
                  <span className="font-pixel meta-label">Party Role</span>
                  <p className="font-body meta-desc">{cls.role}</p>
                  <span className="font-pixel meta-subnote">Tactical team function</span>
                </div>
              </div>

              {/* Discord Hub */}
              <div className="class-section-block">
                <span className="font-pixel meta-label">Discord Class Hub</span>
                <p className="font-body" style={{ fontSize: '13.5px', color: 'var(--color-ink-secondary)', margin: '4px 0 0' }}>
                  Join other {cls.name} cats in <code className="font-mono" style={{ backgroundColor: 'var(--color-parchment-base)', padding: '2px 6px', borderRadius: '3px' }}>#class-hub</code> on our Discord.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footnote & Navigation */}
        <div className="bottom-nav-footer">
          <div
            className="pixel-box-sm"
            style={{
              padding: '16px 20px',
              backgroundColor: 'var(--color-parchment-card)',
              borderRadius: '6px',
              marginBottom: '24px',
            }}
          >
            <p className="font-body" style={{ margin: '0 0 6px', fontSize: '14px', color: 'var(--color-ink-primary)' }}>
              <strong>Formula:</strong> Every Meow = <strong>1 House + 1 Class</strong> + cosmetics (fur, eyes, accessories). Cosmetics have no game effect in v1.
            </p>
            <p className="font-body" style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.5 }}>
              <strong>Tuning Note:</strong> Abilities describe design intent for the Atlas game and will be tuned through playtesting.
            </p>
          </div>

          <div className="bottom-cycle-nav">
            <Link
              href={`/classes/${prevClass.slug}/`}
              className="pixel-btn"
              style={{
                backgroundColor: 'var(--color-parchment-card)',
                color: 'var(--color-ink-primary)',
                fontSize: '13px',
                padding: '10px 16px',
                textDecoration: 'none',
              }}
            >
              &larr; Previous: {prevClass.name}
            </Link>
            <Link
              href="/classes/"
              className="font-pixel"
              style={{
                fontSize: '14px',
                color: 'var(--color-candle-dark)',
                textDecoration: 'none',
              }}
            >
              View All Five Classes
            </Link>
            <Link
              href={`/classes/${nextClass.slug}/`}
              className="pixel-btn"
              style={{
                backgroundColor: 'var(--color-candle-gold)',
                color: 'var(--color-ink-primary)',
                fontSize: '13px',
                padding: '10px 16px',
                textDecoration: 'none',
              }}
            >
              Next: {nextClass.name} &rarr;
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.class-detail-root) {
          background-color: var(--color-parchment-base);
          min-height: calc(100vh - 74px);
          padding: 36px 0 80px;
        }

        :global(.top-nav-bar) {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 12px;
        }

        :global(.nav-back-link) {
          font-size: 13.5px;
          color: var(--color-candle-dark);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
        }

        :global(.prev-next-links) {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        :global(.prev-next-btn) {
          font-size: 12.5px;
          color: var(--color-ink-secondary);
          text-decoration: none;
          padding: 4px 8px;
          border-radius: 4px;
          transition: background-color 0.15s;
        }

        :global(.prev-next-btn:hover) {
          background-color: var(--color-parchment-card);
          color: var(--color-ink-primary);
        }

        :global(.nav-divider) {
          color: var(--color-parchment-border);
        }

        :global(.class-hero-panel) {
          background-color: var(--color-parchment-card);
          border-radius: 8px;
          border: 3px solid #2b1e16;
          box-shadow: 5px 5px 0 #2b1e16;
          overflow: hidden;
          margin-bottom: 32px;
        }

        :global(.class-top-bar) {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 24px;
          background-color: var(--color-parchment-base);
          border-bottom: 2px solid #2b1e16;
        }

        :global(.neutral-class-badge) {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: var(--color-parchment-card);
          color: var(--color-ink-primary);
          border: 2px solid var(--color-candle-gold);
          border-radius: 4px;
          padding: 3px 10px;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        :global(.class-group-tag) {
          font-size: 12px;
          color: var(--color-ink-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        :global(.class-lore-quote) {
          font-size: 13.5px;
          color: var(--color-candle-dark);
          font-style: italic;
        }

        :global(.class-hero-grid) {
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 36px;
          padding: 32px;
        }

        :global(.class-portrait-column) {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        :global(.class-portrait-card) {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          border-radius: 6px;
          overflow: hidden;
          border: 3px solid #2b1e16;
          box-shadow: 3px 3px 0 #2b1e16;
          background-color: var(--color-hearth-soot);
        }

        :global(.kit-callout-box) {
          background-color: var(--color-parchment-base);
          padding: 16px;
          border-radius: 6px;
          border: 2px dashed var(--color-parchment-border);
        }

        :global(.kit-label) {
          font-size: 11px;
          color: var(--color-candle-dark);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          display: block;
          margin-bottom: 4px;
        }

        :global(.kit-text) {
          font-size: 13.5px;
          color: var(--color-ink-secondary);
          line-height: 1.45;
          margin: 0;
        }

        :global(.class-content-column) {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        :global(.class-role-subtitle) {
          font-size: 12px;
          color: var(--color-candle-dark);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        :global(.class-title-text) {
          font-size: clamp(2.4rem, 4vw, 3.2rem);
          color: var(--color-ink-primary);
          line-height: 1.1;
          margin: 0 0 10px;
        }

        :global(.class-flavor-text) {
          font-size: 16.5px;
          color: var(--color-ink-secondary);
          line-height: 1.55;
          font-style: italic;
          margin: 0;
        }

        :global(.sub-header) {
          font-size: 18px;
          color: var(--color-ink-primary);
          margin: 0 0 10px;
          border-bottom: 1px solid var(--color-parchment-border);
          padding-bottom: 6px;
        }

        :global(.ability-card) {
          background-color: var(--color-parchment-base);
          padding: 16px 20px;
          border-radius: 6px;
          border: 1px solid var(--color-parchment-border);
        }

        :global(.ability-name) {
          font-size: 14px;
          color: var(--color-candle-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 4px;
        }

        :global(.ability-desc) {
          font-size: 14.5px;
          color: var(--color-ink-primary);
          line-height: 1.5;
          margin: 0;
        }

        :global(.dossier-meta-grid) {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        :global(.meta-card) {
          background-color: var(--color-parchment-base);
          padding: 16px;
          border-radius: 6px;
          border: 1px solid var(--color-parchment-border);
        }

        :global(.meta-label) {
          font-size: 11px;
          color: var(--color-candle-dark);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          display: block;
          margin-bottom: 4px;
        }

        :global(.meta-desc) {
          font-size: 14px;
          color: var(--color-ink-primary);
          line-height: 1.45;
          margin: 0 0 4px;
        }

        :global(.meta-subnote) {
          font-size: 11px;
          color: var(--color-ink-muted);
        }

        :global(.bottom-cycle-nav) {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        @media (max-width: 860px) {
          :global(.class-hero-grid) {
            grid-template-columns: 1fr;
          }
          :global(.dossier-meta-grid) {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          :global(.class-detail-root) {
            padding: 24px 0 60px;
          }
          :global(.class-hero-grid) {
            padding: 18px;
          }
          :global(.class-top-bar) {
            padding: 10px 16px;
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      `}</style>
    </main>
  );
};
