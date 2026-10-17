'use client';

import React from 'react';
import Link from 'next/link';
import { content } from '@/config/content';

export const RoadmapSection: React.FC = () => {
  const phases = content.roadmap.phases;

  return (
    <section id="roadmap" className="roadmap-section-root">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
          <div style={{ display: 'inline-flex', marginBottom: '12px' }}>
            <span
              className="font-pixel pixel-box-sm"
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
              Quest Log
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
            Roadmap
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
            {content.roadmap.intro}
          </p>
        </div>

        {/* Quest Log Container: All status "TBA", no progress bar, no dates */}
        <div className="quest-log-grid" role="region" aria-label="Whiskerwild Quest Log">
          {phases.map((item) => (
            <div key={item.phase} className="pixel-box quest-entry-card">
              {/* Quest Header Bar */}
              <div className="quest-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="font-pixel quest-phase-badge">
                    Phase {item.phase}
                  </span>
                  <h3 className="font-pixel quest-name">{item.name}</h3>
                </div>

                {/* Status: Strictly "TBA" as required */}
                <span className="font-pixel quest-status-pill">
                  Status: TBA
                </span>
              </div>

              {/* Quest Objective Items */}
              <ul className="quest-items-list">
                {item.items.map((line, idx) => (
                  <li key={idx} className="font-body quest-item">
                    <span className="quest-bullet" aria-hidden="true">📜</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="roadmap-footnote-box">
          <p className="font-body" style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-ink-muted)', fontStyle: 'italic', textAlign: 'center' }}>
            Plans can change as we build and test. Nothing here is a promise of value.
          </p>
          <div style={{ textAlign: 'center', marginTop: '12px' }}>
            <Link
              href="/#roadmap"
              className="font-pixel"
              style={{
                fontSize: '13px',
                color: 'var(--color-candle-dark)',
                textDecoration: 'underline',
              }}
            >
              View detailed roadmap documentation &rarr;
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.roadmap-section-root) {
          position: relative;
          background-color: var(--color-parchment-base);
          padding: 80px 0 100px;
          border-top: 3px solid var(--color-ink-primary);
        }

        :global(.quest-log-grid) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 1080px;
          margin: 0 auto 36px;
        }

        :global(.quest-entry-card) {
          background-color: var(--color-parchment-card);
          padding: 24px;
          border-radius: 8px;
          border: 3px solid #2b1e16;
          box-shadow: 4px 4px 0 #2b1e16;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        :global(.quest-entry-card:hover) {
          transform: translateY(-3px);
          box-shadow: 6px 6px 0 #2b1e16;
        }

        :global(.quest-header) {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 12px;
          border-bottom: 2px dashed var(--color-parchment-border);
          flex-wrap: wrap;
          gap: 8px;
        }

        :global(.quest-phase-badge) {
          background-color: var(--color-candle-gold);
          color: var(--color-ink-primary);
          padding: 3px 8px;
          border-radius: 4px;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        :global(.quest-name) {
          font-size: 18px;
          color: var(--color-ink-primary);
          margin: 0;
        }

        :global(.quest-status-pill) {
          font-size: 11px;
          background-color: var(--color-parchment-base);
          color: var(--color-candle-dark);
          border: 1px solid var(--color-candle-gold);
          border-radius: 4px;
          padding: 2px 8px;
          letter-spacing: 0.06em;
        }

        :global(.quest-items-list) {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }

        :global(.quest-item) {
          font-size: 14px;
          color: var(--color-ink-secondary);
          line-height: 1.5;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        :global(.quest-bullet) {
          font-size: 14px;
          margin-top: 1px;
          flex-shrink: 0;
        }

        :global(.roadmap-footnote-box) {
          max-width: 800px;
          margin: 0 auto;
          padding: 16px 20px;
        }

        @media (max-width: 860px) {
          :global(.quest-log-grid) {
            grid-template-columns: 1fr;
            max-width: 600px;
          }
        }

        @media (max-width: 640px) {
          :global(.roadmap-section-root) {
            padding: 50px 0 70px;
          }

          :global(.quest-entry-card) {
            padding: 18px;
          }

          :global(.quest-name) {
            font-size: 16px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          :global(.quest-entry-card) {
            transition: none !important;
          }
          :global(.quest-entry-card:hover) {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};
