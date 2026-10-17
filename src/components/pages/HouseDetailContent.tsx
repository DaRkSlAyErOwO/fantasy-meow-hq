'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { House } from '@/config/content';

interface HouseDetailContentProps {
  house: House;
  prevHouse: House;
  nextHouse: House;
}

export const HouseDetailContent: React.FC<HouseDetailContentProps> = ({
  house,
  prevHouse,
  nextHouse,
}) => {
  const primaryAccent = house.signatureColors[0]?.hex || 'var(--color-candle-gold)';

  return (
    <main className="house-detail-root" id="main-content">
      <div className="container">
        {/* Top Navigation Row: Back Link & Prev/Next */}
        <div className="top-nav-bar">
          <Link href="/houses/" className="font-pixel nav-back-link">
            <span>&larr;</span>
            <span>All Houses</span>
          </Link>

          <div className="prev-next-links">
            <Link
              href={`/houses/${prevHouse.slug}/`}
              className="font-pixel prev-next-btn"
              title={`Previous: ${prevHouse.name}`}
            >
              &larr; {prevHouse.emoji} {prevHouse.name}
            </Link>
            <span className="nav-divider" aria-hidden="true">&bull;</span>
            <Link
              href={`/houses/${nextHouse.slug}/`}
              className="font-pixel prev-next-btn"
              title={`Next: ${nextHouse.name}`}
            >
              {nextHouse.name} {nextHouse.emoji} &rarr;
            </Link>
          </div>
        </div>

        {/* House Hero Banner */}
        <div className="pixel-box house-hero-panel">
          {/* House Color Top Header Bar */}
          <div
            className="house-color-bar"
            style={{ backgroundColor: primaryAccent }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '24px' }}>{house.emoji}</span>
              <span className="font-pixel house-crest-tag">House of Whiskerwild</span>
            </div>
            <span className="font-pixel house-motto-pill">
              &ldquo;{house.motto}&rdquo;
            </span>
          </div>

          <div className="house-hero-grid">
            {/* Crisp Pixel Portrait */}
            <div className="house-portrait-column">
              <div className="house-portrait-card">
                <Image
                  src={house.webArt1000 || house.art}
                  alt={house.altText}
                  fill
                  priority
                  className="pixelated"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="den-greeting-box">
                <span className="font-pixel den-label">Den Greeting</span>
                <p className="font-body den-text">&ldquo;{house.denGreeting}&rdquo;</p>
              </div>
            </div>

            {/* House Dossier Details */}
            <div className="house-content-column">
              <div className="house-title-area">
                <span className="font-pixel house-vibe-badge">
                  {house.vibe}
                </span>
                <h1 className="font-pixel house-title-text">{house.name}</h1>
                <p className="font-body house-tagline-text">{house.tagline}</p>
              </div>

              <div className="house-section-block">
                <h2 className="font-pixel sub-header">Lore &amp; Character</h2>
                <p className="font-body house-description-text">{house.description}</p>
              </div>

              {/* Signature Colors Palette */}
              <div className="house-section-block">
                <h2 className="font-pixel sub-header">Signature Palette</h2>
                <div className="palette-grid">
                  {house.signatureColors.map((color, idx) => (
                    <div key={idx} className="palette-item">
                      <div
                        className="palette-swatch"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="palette-info">
                        <span className="font-pixel swatch-name">{color.name}</span>
                        <span className="font-mono swatch-hex">{color.hex}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Atlas Affinity & Discord Info */}
              <div className="dossier-meta-grid">
                <div className="meta-card">
                  <span className="font-pixel meta-label">Atlas Affinity</span>
                  <p className="font-body meta-desc">{house.atlasAffinity}</p>
                </div>
                <div className="meta-card">
                  <span className="font-pixel meta-label">Discord Den</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
                    <span className="font-mono discord-pill">#{house.discordChannel}</span>
                    <span className="font-body" style={{ fontSize: '13px', color: 'var(--color-ink-muted)' }}>
                      Pick this House in Discord to join
                    </span>
                  </div>
                </div>
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
            <p className="font-body" style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.5 }}>
              <strong>House Rule:</strong> Houses are identity and story. No House is better, rarer or worth more than another. Affinities are small game nudges for Atlas actions only, and will be tuned through playtesting. Cross-House chat lives in #all-houses-hall.
            </p>
          </div>

          <div className="bottom-cycle-nav">
            <Link
              href={`/houses/${prevHouse.slug}/`}
              className="pixel-btn"
              style={{
                backgroundColor: 'var(--color-parchment-card)',
                color: 'var(--color-ink-primary)',
                fontSize: '13px',
                padding: '10px 16px',
                textDecoration: 'none',
              }}
            >
              &larr; Previous: {prevHouse.name}
            </Link>
            <Link
              href="/houses/"
              className="font-pixel"
              style={{
                fontSize: '14px',
                color: 'var(--color-candle-dark)',
                textDecoration: 'none',
              }}
            >
              View All Six Houses
            </Link>
            <Link
              href={`/houses/${nextHouse.slug}/`}
              className="pixel-btn"
              style={{
                backgroundColor: 'var(--color-candle-gold)',
                color: 'var(--color-ink-primary)',
                fontSize: '13px',
                padding: '10px 16px',
                textDecoration: 'none',
              }}
            >
              Next: {nextHouse.name} &rarr;
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.house-detail-root) {
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

        :global(.house-hero-panel) {
          background-color: var(--color-parchment-card);
          border-radius: 8px;
          border: 3px solid #2b1e16;
          box-shadow: 5px 5px 0 #2b1e16;
          overflow: hidden;
          margin-bottom: 32px;
        }

        :global(.house-color-bar) {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 24px;
          border-bottom: 2px solid #2b1e16;
        }

        :global(.house-crest-tag) {
          font-size: 12px;
          color: #2b1e16;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 700;
        }

        :global(.house-motto-pill) {
          font-size: 13.5px;
          color: #2b1e16;
          font-style: italic;
          background-color: rgba(255, 255, 255, 0.4);
          padding: 4px 12px;
          border-radius: 4px;
          border: 1px solid rgba(43, 30, 22, 0.2);
        }

        :global(.house-hero-grid) {
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 36px;
          padding: 32px;
        }

        :global(.house-portrait-column) {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        :global(.house-portrait-card) {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          border-radius: 6px;
          overflow: hidden;
          border: 3px solid #2b1e16;
          box-shadow: 3px 3px 0 #2b1e16;
          background-color: var(--color-hearth-soot);
        }

        :global(.den-greeting-box) {
          background-color: var(--color-parchment-base);
          padding: 16px;
          border-radius: 6px;
          border: 2px dashed var(--color-parchment-border);
        }

        :global(.den-label) {
          font-size: 11px;
          color: var(--color-candle-dark);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          display: block;
          margin-bottom: 4px;
        }

        :global(.den-text) {
          font-size: 13.5px;
          color: var(--color-ink-secondary);
          line-height: 1.45;
          font-style: italic;
          margin: 0;
        }

        :global(.house-content-column) {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        :global(.house-vibe-badge) {
          display: inline-block;
          font-size: 11px;
          color: var(--color-candle-dark);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          background-color: var(--color-parchment-base);
          padding: 4px 10px;
          border-radius: 4px;
          border: 1px solid var(--color-parchment-border);
          margin-bottom: 8px;
        }

        :global(.house-title-text) {
          font-size: clamp(2.4rem, 4vw, 3.2rem);
          color: var(--color-ink-primary);
          line-height: 1.1;
          margin: 0 0 10px;
        }

        :global(.house-tagline-text) {
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

        :global(.house-description-text) {
          font-size: 15.5px;
          color: var(--color-ink-primary);
          line-height: 1.6;
          margin: 0;
        }

        :global(.palette-grid) {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 12px;
        }

        :global(.palette-item) {
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: var(--color-parchment-base);
          padding: 8px 12px;
          border-radius: 6px;
          border: 1px solid var(--color-parchment-border);
        }

        :global(.palette-swatch) {
          width: 28px;
          height: 28px;
          border-radius: 4px;
          border: 2px solid #2b1e16;
          box-shadow: 1px 1px 0 #2b1e16;
          flex-shrink: 0;
        }

        :global(.palette-info) {
          display: flex;
          flex-direction: column;
        }

        :global(.swatch-name) {
          font-size: 12px;
          color: var(--color-ink-primary);
        }

        :global(.swatch-hex) {
          font-size: 11px;
          color: var(--color-ink-muted);
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
          font-size: 13.5px;
          color: var(--color-ink-secondary);
          line-height: 1.45;
          margin: 0;
        }

        :global(.discord-pill) {
          font-size: 12px;
          background-color: var(--color-parchment-card);
          color: var(--color-ink-primary);
          padding: 2px 6px;
          border-radius: 3px;
          border: 1px solid var(--color-parchment-border);
        }

        :global(.bottom-cycle-nav) {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        @media (max-width: 860px) {
          :global(.house-hero-grid) {
            grid-template-columns: 1fr;
          }
          :global(.dossier-meta-grid) {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          :global(.house-detail-root) {
            padding: 24px 0 60px;
          }
          :global(.house-hero-grid) {
            padding: 18px;
          }
          :global(.house-color-bar) {
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
