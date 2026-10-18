'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { content } from '@/config/content';

export const HousesIndexContent: React.FC = () => {
  const houses = content.houses;

  return (
    <main className="houses-index-root" id="main-content">
      <div className="container">
        {/* Breadcrumb Navigation */}
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

        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '44px' }}>
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
              Who you are
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
            The Six Houses
          </h1>

          <p
            className="font-body"
            style={{
              fontSize: '17px',
              color: 'var(--color-ink-secondary)',
              lineHeight: 1.6,
              margin: '0 0 16px',
            }}
          >
            Houses are identity, story and Discord culture. Every Meow belongs to one of six.
            Choose by vibe—no House is better, rarer or worth more than another.
          </p>
        </div>

        {/* Six Houses Grid */}
        <div className="houses-grid">
          {houses.map((house) => {
            const accentColor = house.signatureColors[0]?.hex || 'var(--color-candle-gold)';
            return (
              <div key={house.slug} className="pixel-box house-card">
                {/* Card Header with Emoji and Accent Ribbon */}
                <div
                  className="house-card-ribbon"
                  style={{ backgroundColor: accentColor }}
                >
                  <span style={{ fontSize: '24px' }}>{house.emoji}</span>
                  <span className="font-label house-motto">&ldquo;{house.motto}&rdquo;</span>
                </div>

                <div className="house-card-body">
                  {/* Pixel Portrait */}
                  <div className="house-card-art-wrap">
                    <Image
                      src={house.webArt500 || house.art}
                      alt={house.altText}
                      fill
                      className="pixelated"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  <h2 className="font-pixel house-name">{house.name}</h2>
                  <p className="font-label house-vibe">{house.vibe}</p>
                  <p className="font-body house-desc">{house.description}</p>

                  {/* Color Swatches */}
                  <div className="house-colors-row">
                    <span className="font-label colors-label">Palette:</span>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      {house.signatureColors.map((col, idx) => (
                        <div
                          key={idx}
                          title={`${col.name} (${col.hex})`}
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '3px',
                            backgroundColor: col.hex,
                            border: '1.5px solid #2b1e16',
                            boxShadow: '1px 1px 0 #2b1e16',
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="house-card-actions">
                    <Link
                      href={`/houses/${house.slug}/`}
                      className="pixel-btn"
                      style={{
                        backgroundColor: 'var(--color-candle-gold)',
                        color: 'var(--color-ink-primary)',
                        fontSize: '13px',
                        padding: '8px 16px',
                        width: '100%',
                        textAlign: 'center',
                        textDecoration: 'none',
                      }}
                    >
                      Explore House {house.name} &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Canon Note */}
        <div
          className="pixel-box-sm"
          style={{
            marginTop: '44px',
            padding: '16px 20px',
            backgroundColor: 'var(--color-parchment-card)',
            borderRadius: '6px',
            maxWidth: '820px',
          }}
        >
          <p className="font-body" style={{ margin: 0, fontSize: '14px', color: 'var(--color-ink-secondary)' }}>
            <strong>House Rule:</strong> Houses are identity and story. No House is better, rarer or worth more than another. Cross-House chat lives in #all-houses-hall.
          </p>
        </div>
      </div>

      <style jsx>{`
        :global(.houses-index-root) {
          background-color: var(--color-parchment-base);
          min-height: calc(100vh - 74px);
          padding: 48px 0 80px;
        }

        :global(.houses-grid) {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 28px;
        }

        :global(.house-card) {
          display: flex;
          flex-direction: column;
          border-radius: 8px;
          border: 3px solid #2b1e16;
          box-shadow: 4px 4px 0 #2b1e16;
          overflow: hidden;
          background-color: var(--color-parchment-card);
        }

        :global(.house-card-ribbon) {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 16px;
          border-bottom: 2px solid #2b1e16;
        }

        :global(.house-motto) {
          font-size: 13px;
          color: #2b1e16;
          font-style: italic;
        }

        :global(.house-card-body) {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        :global(.house-card-art-wrap) {
          position: relative;
          width: 100%;
          height: 190px;
          border-radius: 6px;
          overflow: hidden;
          border: 2px solid #2b1e16;
          background-color: var(--color-hearth-soot);
          margin-bottom: 16px;
        }

        :global(.house-name) {
          font-size: 24px;
          color: var(--color-ink-primary);
          margin: 0 0 4px;
        }

        :global(.house-vibe) {
          font-size: 12px;
          color: var(--color-candle-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 0 0 12px;
        }

        :global(.house-desc) {
          font-size: 14.5px;
          color: var(--color-ink-secondary);
          line-height: 1.5;
          margin: 0 0 16px;
          flex-grow: 1;
        }

        :global(.house-colors-row) {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          padding-top: 12px;
          border-top: 1px dashed var(--color-parchment-border);
        }

        :global(.colors-label) {
          font-size: 12px;
          color: var(--color-ink-muted);
        }

        :global(.house-card-actions) {
          margin-top: auto;
        }

        @media (max-width: 640px) {
          :global(.houses-index-root) {
            padding: 32px 0 60px;
          }

          :global(.houses-grid) {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
};
