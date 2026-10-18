'use client';

import React from 'react';
import Link from 'next/link';
import { content } from '@/config/content';

export const DisclosuresContent: React.FC = () => {
  const d = content.disclosures;

  return (
    <main id="main-content" className="disclosures-page-root">
      <div className="container">
        {/* Breadcrumb / Back Link */}
        <div style={{ marginBottom: '24px' }}>
          <Link
            href="/"
            className="font-label"
            style={{
              fontSize: '13px',
              color: 'var(--color-candle-dark)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              textDecoration: 'none',
            }}
          >
            <span>&larr;</span>
            <span>Back to Whiskerwild</span>
          </Link>
        </div>

        {/* Page Header */}
        <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', marginBottom: '10px' }}>
            <span
              className="font-label pixel-box-sm"
              style={{
                fontSize: '11px',
                color: 'var(--color-candle-dark)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                backgroundColor: 'var(--color-parchment-card)',
                padding: '4px 12px',
                borderRadius: '4px',
              }}
            >
              {d.eyebrow}
            </span>
          </div>

          <h1
            className="font-pixel"
            style={{
              fontSize: 'clamp(2.4rem, 4.4vw, 3.6rem)',
              color: 'var(--color-ink-primary)',
              lineHeight: 1.15,
              marginBottom: '12px',
            }}
          >
            {d.title}
          </h1>

          <p
            className="font-body"
            style={{
              fontSize: '16px',
              color: 'var(--color-ink-secondary)',
              lineHeight: 1.6,
              fontStyle: 'italic',
              margin: 0,
            }}
          >
            {d.intro}
          </p>
        </div>

        {/* Section 1: The Four Core Statements (Including Territory Fee Line) */}
        <div className="pixel-box disclosure-panel" style={{ marginBottom: '32px' }}>
          <div className="panel-header">
            <span className="font-label panel-number">01</span>
            <h2 className="font-label panel-title">Core Disclosures</h2>
          </div>

          <ol className="core-list">
            {d.core.map((item, idx) => (
              <li key={idx} className="font-body core-item">
                <span className="item-num font-label">{idx + 1}.</span>
                <span className="item-text">{item}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Section 2: Additional Disclosures & Planned Features */}
        <div className="pixel-box disclosure-panel" style={{ marginBottom: '32px' }}>
          <div className="panel-header">
            <span className="font-label panel-number">02</span>
            <h2 className="font-label panel-title">Additional Statements &amp; Territory Policy</h2>
          </div>

          <div className="additional-grid">
            {d.additional.map((item, idx) => (
              <div key={idx} className="additional-card">
                <span className="font-label add-bullet" aria-hidden="true">❖</span>
                <p className="font-body add-text">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Word Watchlist & Lore Rule */}
        <div className="pixel-box disclosure-panel" style={{ marginBottom: '60px' }}>
          <div className="panel-header">
            <span className="font-label panel-number">03</span>
            <h2 className="font-label panel-title">Word Watchlist &amp; Lore Rule</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div className="watchlist-box">
              <span className="font-label box-tag">Public Copy Rule</span>
              <p className="font-body box-body">{d.wordWatchlist}</p>
            </div>

            <div className="watchlist-box">
              <span className="font-label box-tag">Lore Principle</span>
              <p className="font-body box-body">{d.loreRule}</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.disclosures-page-root) {
          background-color: var(--color-parchment-base);
          min-height: calc(100vh - 74px);
          padding: 48px 0 80px;
        }

        :global(.disclosure-panel) {
          background-color: var(--color-parchment-card);
          padding: 32px 36px;
          border-radius: 8px;
          border: 3px solid #2b1e16;
          box-shadow: 4px 4px 0 #2b1e16;
          max-width: 920px;
        }

        :global(.panel-header) {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-bottom: 16px;
          border-bottom: 2px solid var(--color-parchment-border);
          margin-bottom: 20px;
        }

        :global(.panel-number) {
          font-size: 13px;
          background-color: var(--color-candle-gold);
          color: var(--color-ink-primary);
          padding: 3px 8px;
          border-radius: 4px;
        }

        :global(.panel-title) {
          font-size: 20px;
          color: var(--color-ink-primary);
          margin: 0;
        }

        :global(.core-list) {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        :global(.core-item) {
          font-size: 15.5px;
          color: var(--color-ink-primary);
          line-height: 1.55;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background-color: var(--color-parchment-base);
          padding: 14px 18px;
          border-radius: 6px;
          border: 1px solid var(--color-parchment-border);
        }

        :global(.item-num) {
          color: var(--color-candle-dark);
          font-weight: 700;
          font-size: 14px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        :global(.item-text) {
          flex: 1;
        }

        :global(.additional-grid) {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        :global(.additional-card) {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background-color: var(--color-parchment-base);
          padding: 16px 20px;
          border-radius: 6px;
          border: 1px solid var(--color-parchment-border);
        }

        :global(.add-bullet) {
          color: var(--color-candle-dark);
          font-size: 11px;
          margin-top: 4px;
          flex-shrink: 0;
        }

        :global(.add-text) {
          font-size: 14.5px;
          color: var(--color-ink-secondary);
          line-height: 1.6;
          margin: 0;
        }

        :global(.watchlist-box) {
          background-color: var(--color-parchment-base);
          padding: 18px 20px;
          border-radius: 6px;
          border: 2px dashed var(--color-parchment-border);
        }

        :global(.box-tag) {
          font-size: 11px;
          color: var(--color-candle-dark);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          display: block;
          margin-bottom: 6px;
        }

        :global(.box-body) {
          font-size: 14px;
          color: var(--color-ink-secondary);
          line-height: 1.55;
          margin: 0;
        }

        @media (max-width: 640px) {
          :global(.disclosures-page-root) {
            padding: 32px 0 60px;
          }

          :global(.disclosure-panel) {
            padding: 20px 18px;
          }

          :global(.core-item),
          :global(.additional-card) {
            padding: 12px 14px;
          }

          :global(.panel-title) {
            font-size: 17px;
          }
        }
      `}</style>
    </main>
  );
};
