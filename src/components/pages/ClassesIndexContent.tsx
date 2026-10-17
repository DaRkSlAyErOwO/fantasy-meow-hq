'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { content } from '@/config/content';

export const ClassesIndexContent: React.FC = () => {
  const classesList = content.classes;

  return (
    <main className="classes-index-root" id="main-content">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <div style={{ marginBottom: '24px' }}>
          <Link
            href="/"
            className="font-pixel"
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
              className="font-pixel pixel-box-sm"
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
              What you do
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
            The Five Classes
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
            Class is what you do on the map and in the game. Every Meow is one of five.
            Together in a Party, Classes claim, defend and upgrade places across the Atlas.
          </p>
        </div>

        {/* Five Classes Grid */}
        <div className="classes-grid">
          {classesList.map((cls) => (
            <div key={cls.slug} className="pixel-box class-card">
              <div className="class-card-top-bar">
                <span className="font-pixel neutral-class-badge">
                  <span>{cls.discordEmoji}</span>
                  <span>{cls.role}</span>
                </span>
                <span className="font-pixel class-lore-quote">&ldquo;{cls.loreLine}&rdquo;</span>
              </div>

              <div className="class-card-body">
                <div className="class-portrait-wrap">
                  <Image
                    src={cls.webArt500 || cls.art}
                    alt={cls.altText}
                    fill
                    className="pixelated"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                <h2 className="font-pixel class-name">{cls.name}</h2>
                <p className="font-body class-flavor">{cls.flavor}</p>

                <div className="class-meta-section">
                  <div className="meta-row">
                    <span className="font-pixel meta-key">Silhouette Kit:</span>
                    <span className="font-body meta-val">{cls.silhouetteKit}</span>
                  </div>

                  {cls.signatureAbility && (
                    <div className="meta-row">
                      <span className="font-pixel meta-key">Ability:</span>
                      <span className="font-body meta-val">
                        <strong>{cls.signatureAbility.name}:</strong> {cls.signatureAbility.description}
                      </span>
                    </div>
                  )}

                  <div className="meta-row">
                    <span className="font-pixel meta-key">Land Affinity:</span>
                    <span className="font-body meta-val">{cls.landAffinity}</span>
                  </div>
                </div>

                <div className="class-card-actions">
                  <Link
                    href={`/classes/${cls.slug}/`}
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
                    Class Guide: {cls.name} &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Canon Note & Formula */}
        <div
          className="pixel-box-sm"
          style={{
            marginTop: '44px',
            padding: '18px 22px',
            backgroundColor: 'var(--color-parchment-card)',
            borderRadius: '6px',
            maxWidth: '820px',
          }}
        >
          <p className="font-body" style={{ margin: '0 0 8px', fontSize: '14.5px', color: 'var(--color-ink-primary)' }}>
            <strong>Formula:</strong> Every Meow = <strong>1 House + 1 Class</strong> + cosmetics (fur, eyes, accessories). Cosmetics have no game effect in v1.
          </p>
          <p className="font-body" style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-ink-secondary)' }}>
            <strong>Tuning Note:</strong> Abilities describe design intent for the Atlas game and will be tuned through playtesting. Class Discord chat lives in #class-hub before mint.
          </p>
        </div>
      </div>

      <style jsx>{`
        :global(.classes-index-root) {
          background-color: var(--color-parchment-base);
          min-height: calc(100vh - 74px);
          padding: 48px 0 80px;
        }

        :global(.classes-grid) {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 28px;
        }

        :global(.class-card) {
          display: flex;
          flex-direction: column;
          border-radius: 8px;
          border: 3px solid #2b1e16;
          box-shadow: 4px 4px 0 #2b1e16;
          overflow: hidden;
          background-color: var(--color-parchment-card);
        }

        :global(.class-card-top-bar) {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 16px;
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
          padding: 2px 8px;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        :global(.class-lore-quote) {
          font-size: 12px;
          color: var(--color-candle-dark);
          font-style: italic;
        }

        :global(.class-card-body) {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        :global(.class-portrait-wrap) {
          position: relative;
          width: 100%;
          height: 190px;
          border-radius: 6px;
          overflow: hidden;
          border: 2px solid #2b1e16;
          background-color: var(--color-hearth-soot);
          margin-bottom: 16px;
        }

        :global(.class-name) {
          font-size: 22px;
          color: var(--color-ink-primary);
          margin: 0 0 6px;
        }

        :global(.class-flavor) {
          font-size: 14.5px;
          color: var(--color-ink-secondary);
          line-height: 1.5;
          margin: 0 0 16px;
          flex-grow: 1;
        }

        :global(.class-meta-section) {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 18px;
          padding-top: 12px;
          border-top: 1px dashed var(--color-parchment-border);
        }

        :global(.meta-row) {
          font-size: 13px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        :global(.meta-key) {
          font-size: 11px;
          color: var(--color-candle-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        :global(.meta-val) {
          color: var(--color-ink-primary);
          line-height: 1.4;
        }

        :global(.class-card-actions) {
          margin-top: auto;
        }

        @media (max-width: 640px) {
          :global(.classes-index-root) {
            padding: 32px 0 60px;
          }

          :global(.classes-grid) {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
};
