'use client';

import React from 'react';
import { content } from '@/config/content';
import { siteConfig } from '@/config/site.config';

export const SafetySection: React.FC = () => {
  const safety = content.safety;

  return (
    <section id="safety" className="safety-section-root">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <div style={{ display: 'inline-flex', marginBottom: '12px' }}>
            <span
              className="font-label pixel-box-sm"
              style={{
                fontSize: '12px',
                color: 'var(--color-candle-dark)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                backgroundColor: 'var(--color-parchment-card)',
                padding: '4px 12px',
                borderRadius: '4px',
              }}
            >
              {safety.eyebrow}
            </span>
          </div>

          <h2
            className="font-pixel"
            style={{
              fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
              color: 'var(--color-ink-primary)',
              lineHeight: 1.15,
              marginBottom: '14px',
            }}
          >
            {safety.title}
          </h2>

          <p
            className="font-body"
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: 'var(--color-ink-secondary)',
              lineHeight: 1.55,
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            Whiskerwild is gentle, but the internet is not. Keep your paws and your wallet secure.
          </p>
        </div>

        {/* Safety Rules Panel */}
        <div className="pixel-box safety-main-card">
          <div className="safety-header-banner">
            <span style={{ fontSize: '24px' }}>🛡️</span>
            <div>
              <h3 className="font-label" style={{ fontSize: '19px', color: 'var(--color-ink-primary)', margin: 0 }}>
                We will never:
              </h3>
            </div>
          </div>

          <ul className="safety-never-list">
            {safety.neverItems.map((item, idx) => (
              <li key={idx} className="font-body safety-item">
                <span className="safety-cross-icon" aria-hidden="true">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="safety-split-notes">
            <div className="note-card">
              <span className="font-label note-title">Mint Link Caution</span>
              <p className="font-body note-body">{safety.mintLinksNote}</p>
            </div>
            <div className="note-card">
              <span className="font-label note-title">Protecting Yourself</span>
              <p className="font-body note-body">{safety.protectNote}</p>
            </div>
          </div>

          <div className="official-channels-row">
            <span className="font-label" style={{ fontSize: '13px', color: 'var(--color-ink-primary)' }}>
              Official Links:
            </span>
            <a
              href={siteConfig.DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label official-link-pill"
            >
              Discord: {siteConfig.DISCORD_URL}
            </a>
            <a
              href={siteConfig.X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label official-link-pill"
            >
              X: {siteConfig.X_HANDLE}
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.safety-section-root) {
          position: relative;
          background-color: var(--color-parchment-base);
          padding: 80px 0 100px;
          border-top: 3px solid var(--color-ink-primary);
        }

        :global(.safety-main-card) {
          max-width: 920px;
          margin: 0 auto;
          background-color: var(--color-parchment-card);
          padding: 30px 34px;
          border-radius: 8px;
          border: 3px solid var(--color-ink-primary);
          box-shadow: 4px 4px 0 var(--color-ink-primary);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        :global(.safety-header-banner) {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-bottom: 14px;
          border-bottom: 2px solid var(--color-parchment-border);
        }

        :global(.safety-never-list) {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        :global(.safety-item) {
          font-size: 15px;
          color: var(--color-ink-primary);
          line-height: 1.5;
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        :global(.safety-cross-icon) {
          color: #c94040;
          font-weight: 900;
          font-size: 14px;
          margin-top: 2px;
          flex-shrink: 0;
        }

        :global(.safety-split-notes) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          padding-top: 10px;
          border-top: 2px dashed var(--color-parchment-border);
        }

        :global(.note-card) {
          background-color: var(--color-parchment-base);
          padding: 16px;
          border-radius: 6px;
          border: 1px solid var(--color-parchment-border);
        }

        :global(.note-title) {
          font-size: 12px;
          color: var(--color-candle-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 6px;
        }

        :global(.note-body) {
          font-size: 13.5px;
          color: var(--color-ink-secondary);
          line-height: 1.45;
          margin: 0;
        }

        :global(.official-channels-row) {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          padding-top: 14px;
          border-top: 1px solid var(--color-parchment-border);
        }

        :global(.official-link-pill) {
          font-size: 12px;
          background-color: var(--color-parchment-base);
          color: var(--color-candle-dark);
          border: 1px solid var(--color-candle-gold);
          border-radius: 4px;
          padding: 4px 10px;
          text-decoration: none;
          transition: background-color 0.15s ease;
        }

        :global(.official-link-pill:hover) {
          background-color: var(--color-candle-gold);
          color: var(--color-ink-primary);
        }

        @media (max-width: 768px) {
          :global(.safety-split-notes) {
            grid-template-columns: 1fr;
          }
          :global(.safety-main-card) {
            padding: 20px;
          }
        }

        @media (max-width: 640px) {
          :global(.safety-section-root) {
            padding: 50px 0 70px;
          }
          :global(.safety-item) {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};
