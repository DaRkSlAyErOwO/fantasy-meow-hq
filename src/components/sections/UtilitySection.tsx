'use client';

import React from 'react';
import Link from 'next/link';
import { content } from '@/config/content';

export const UtilitySection: React.FC = () => {
  // Slot numbers (01, 02, 03) follow card order
  const inventorySlots = content.utility.cards.map((card, i) => ({ ...card, slotNum: String(i + 1).padStart(2, '0') }));

  return (
    <section id="utility" className="utility-section-root">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
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
              What they do
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
            Utility
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
            {content.utility.intro}
          </p>
        </div>

        {/* 3 Inventory Slot Panels */}
        <div className="inventory-grid" role="region" aria-label="Utility Inventory Slots">
          {inventorySlots.map((slot) => (
            <div key={slot.id} className="pixel-box inventory-slot-card">
              {/* Slot Header Label */}
              <div className="slot-header-bar">
                <span className="font-label slot-indicator">
                  SLOT [{slot.slotNum}]
                </span>
                <span className="font-label phase-pill">
                  {slot.phaseLabel}
                </span>
              </div>

              {/* Slot Item Icon & Name */}
              <div className="slot-title-row">
                <div className="slot-icon-box" aria-hidden="true">
                  <span style={{ fontSize: '26px' }}>{slot.icon}</span>
                </div>
                <div>
                  <h3 className="font-pixel slot-title">{slot.name}</h3>
                </div>
              </div>

              {/* Short Verbatim Copy */}
              <p className="font-body slot-desc">{slot.whatItIs}</p>

              {/* Key Quest / In-game Points */}
              <ul className="slot-points-list">
                {slot.points.map((pt, idx) => (
                  <li key={idx} className="font-body point-item">
                    <span className="point-bullet" aria-hidden="true">❖</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* What This Isn't Callout */}
              <div className="what-isnt-box">
                <span className="font-label what-isnt-tag">What this isn&apos;t:</span>
                <p className="font-body what-isnt-text">{slot.whatThisIsnt}</p>
              </div>

              {/* Required beside the Territories card (reference 7.3) */}
              {slot.id === 'territories' && (
                <p className="font-body territory-disclaimer">{content.utility.territoryDisclaimer}</p>
              )}
            </div>
          ))}
        </div>

        {/* Summary Banner */}
        <div className="pixel-box-sm utility-summary-banner">
          <p className="font-body" style={{ margin: 0, fontSize: '14px', color: 'var(--color-ink-secondary)', lineHeight: 1.55 }}>
            <strong className="font-label" style={{ color: 'var(--color-ink-primary)' }}>
              {content.utility.summaryLabel}
            </strong>{' '}
            {content.utility.summaryLine}
          </p>
          <div style={{ marginTop: '12px' }}>
            <Link
              href="/disclosures/"
              className="font-label"
              style={{
                fontSize: '13px',
                color: 'var(--color-candle-dark)',
                textDecoration: 'underline',
              }}
            >
              Read full disclosures &amp; fee statements &rarr;
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.utility-section-root) {
          position: relative;
          background-color: var(--color-parchment-base);
          padding: 80px 0 100px;
          border-top: 3px solid var(--color-ink-primary);
        }

        :global(.inventory-grid) {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1140px;
          margin: 0 auto 36px;
        }

        :global(.inventory-slot-card) {
          background-color: var(--color-parchment-card);
          padding: 24px;
          border-radius: 8px;
          border: 3px solid var(--color-ink-primary);
          box-shadow: 4px 4px 0 var(--color-ink-primary);
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        :global(.inventory-slot-card:hover) {
          transform: translateY(-4px);
          box-shadow: 6px 6px 0 var(--color-ink-primary);
        }

        :global(.slot-header-bar) {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 10px;
          border-bottom: 2px dashed var(--color-parchment-border);
        }

        :global(.slot-indicator) {
          font-size: 11px;
          font-weight: 700;
          color: var(--color-candle-dark);
          letter-spacing: 0.08em;
        }

        :global(.phase-pill) {
          font-size: 11px;
          background-color: var(--color-parchment-base);
          color: var(--color-ink-secondary);
          border: 1px solid var(--color-parchment-border);
          border-radius: 4px;
          padding: 2px 8px;
        }

        :global(.slot-title-row) {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        :global(.slot-icon-box) {
          width: 52px;
          height: 52px;
          border-radius: 6px;
          background-color: var(--color-hearth-soot);
          border: 2px solid var(--color-ink-primary);
          box-shadow: 2px 2px 0 var(--color-ink-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        :global(.slot-title) {
          font-size: 24px;
          color: var(--color-ink-primary);
          margin: 0;
        }

        :global(.slot-desc) {
          font-size: 14.5px;
          color: var(--color-ink-secondary);
          line-height: 1.55;
          margin: 0;
        }

        :global(.slot-points-list) {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }

        :global(.point-item) {
          font-size: 13.5px;
          color: var(--color-ink-secondary);
          line-height: 1.45;
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        :global(.point-bullet) {
          color: var(--color-candle-dark);
          font-size: 10px;
          margin-top: 4px;
          flex-shrink: 0;
        }

        :global(.what-isnt-box) {
          background-color: var(--color-parchment-base);
          border: 1px solid var(--color-parchment-border);
          border-radius: 6px;
          padding: 12px 14px;
          margin-top: 8px;
        }

        :global(.what-isnt-tag) {
          font-size: 12px;
          color: var(--color-ink-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 4px;
        }

        :global(.what-isnt-text) {
          font-size: 13.5px;
          color: var(--color-ink-primary);
          font-style: italic;
          line-height: 1.45;
          margin: 0;
        }

        :global(.territory-disclaimer) {
          font-size: 12.5px;
          color: var(--color-ink-secondary);
          line-height: 1.5;
          margin: 0;
          padding: 10px 12px;
          border-left: 3px solid var(--color-candle-gold);
          background-color: var(--color-parchment-base);
        }

        :global(.utility-summary-banner) {
          max-width: 1140px;
          margin: 0 auto;
          background-color: var(--color-parchment-card);
          padding: 18px 24px;
          border-radius: 6px;
          border: 2px solid var(--color-ink-primary);
          box-shadow: 3px 3px 0 var(--color-ink-primary);
        }

        @media (max-width: 992px) {
          :global(.inventory-grid) {
            grid-template-columns: 1fr;
            max-width: 600px;
            gap: 20px;
          }
        }

        @media (max-width: 640px) {
          :global(.utility-section-root) {
            padding: 50px 0 70px;
          }

          :global(.inventory-slot-card) {
            padding: 18px;
          }

          :global(.slot-title) {
            font-size: 24px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          :global(.inventory-slot-card) {
            transition: none !important;
          }
          :global(.inventory-slot-card:hover) {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};
