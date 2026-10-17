'use client';

import React from 'react';
import { siteConfig } from '@/config/site.config';
import { content } from '@/config/content';
import { HeroParallaxScene } from '@/components/motion/HeroParallaxScene';

export const HeroSection: React.FC = () => {
  const scrollToWhiskerwild = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('whiskerwild');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section-root">
      {/* 
        Art Scene Container:
        - Desktop: absolute full-viewport backdrop behind the calm left typography
        - Mobile (<=640px): top ~40vh scene-first banner framing campfire + 3 cats
      */}
      <div className="hero-art-wrapper">
        <HeroParallaxScene />
      </div>

      {/* 
        Content Container:
        - Desktop: positioned in calm upper-left sky area, sits cleanly above the fold at 1366x768
        - Mobile (<=640px): sits below the art scene on charcoal hearth background
      */}
      <div className="container hero-content-container">
        <div className="hero-text-stack">
          {/* Eyebrow Badge (Rendered in clean body font for razor-sharp 'cats' clarity) */}
          <div style={{ display: 'inline-flex' }}>
            <span
              className="font-body"
              style={{
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--color-candle-gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                backgroundColor: 'rgba(24, 20, 18, 0.88)',
                padding: '4px 10px',
                borderRadius: '4px',
                border: '1px solid rgba(232, 182, 76, 0.35)',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.5)',
              }}
            >
              {content.hero.eyebrow}
            </span>
          </div>

          {/* Headline in Pixelify Sans with soft candle glow */}
          <h1
            className="font-pixel title-glow"
            style={{
              fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)',
              color: 'var(--color-hearth-text)',
              lineHeight: 1.1,
              letterSpacing: '0.01em',
              margin: 0,
            }}
          >
            {content.hero.h1}
          </h1>

          {/* Subheading in legible Pixel font */}
          <p
            className="font-pixel"
            style={{
              fontSize: 'clamp(1.2rem, 1.9vw, 1.4rem)',
              color: 'var(--color-candle-glow)',
              letterSpacing: '0.04em',
              lineHeight: 1.25,
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.95)',
              margin: 0,
            }}
          >
            Ordinary cats. Extraordinary worlds.
          </p>

          {/* Body Text (Clean body font with natural shadow, seamlessly blending over horizontal fade) */}
          <p
            className="font-body"
            style={{
              fontSize: '15px',
              color: 'var(--color-hearth-text)',
              lineHeight: 1.55,
              maxWidth: '520px',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.95), 0 1px 3px rgba(0, 0, 0, 0.9)',
              margin: 0,
            }}
          >
            {content.hero.body}
          </p>

          {/* Medallion CTA & Pixel Neo-Brutalist Buttons Cluster */}
          <div className="hero-cta-cluster">
            {/* "Enter Whiskerwild" Round Medallion (Scrolls to #whiskerwild World chapter) */}
            <div className="hero-medallion-wrap">
              <a
                href="#whiskerwild"
                onClick={scrollToWhiskerwild}
                className="pixel-medallion"
              >
                <span
                  className="font-pixel"
                  style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.9 }}
                >
                  Enter
                </span>
                <span
                  className="font-pixel"
                  style={{ fontSize: '13px', fontWeight: 900, textAlign: 'center', lineHeight: 1.15 }}
                >
                  Whiskerwild
                </span>
                <span aria-hidden="true" style={{ fontSize: '13px', marginTop: '1px' }}>▼</span>
              </a>
            </div>

            {/* Action Buttons & Mint Pill */}
            <div className="hero-btn-stack">
              <div className="hero-action-row">
                <a
                  href={siteConfig.DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn"
                  style={{
                    backgroundColor: 'var(--color-candle-gold)',
                    color: 'var(--color-ink-primary)',
                    padding: '9px 18px',
                    fontSize: '14px',
                  }}
                >
                  {content.hero.ctaPrimary}
                </a>

                <a
                  href={siteConfig.X_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn"
                  style={{
                    backgroundColor: 'var(--color-parchment-card)',
                    color: 'var(--color-ink-primary)',
                    padding: '9px 16px',
                    fontSize: '14px',
                  }}
                >
                  {content.hero.ctaSecondary}
                </a>
              </div>

              {/* Mint Pill: Solid charcoal background, 2px ink border, clear readable text */}
              <div className="hero-mint-wrap">
                <span
                  aria-disabled="true"
                  className="font-body"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    padding: '5px 12px',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.03em',
                    backgroundColor: '#201824',
                    color: '#e5d7c5',
                    border: '2px solid var(--color-ink-primary)',
                    borderRadius: '9999px',
                    boxShadow: '2px 2px 0 var(--color-ink-primary)',
                    cursor: 'not-allowed',
                    userSelect: 'none',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-candle-gold)',
                      display: 'inline-block',
                      boxShadow: '0 0 5px rgba(232, 182, 76, 0.8)',
                    }}
                  />
                  {content.hero.ctaMint}
                </span>
              </div>
            </div>
          </div>

          {/* Helper Line & Desktop Quote Hook */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '2px' }}>
            <p
              className="font-body"
              style={{
                fontSize: '12.5px',
                color: 'var(--color-candle-gold)',
                fontStyle: 'italic',
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.9)',
                margin: 0,
              }}
            >
              {content.hero.helperLine}
            </p>

            {/* Desktop Only: Sits comfortably above the fold at 1366x768. Hidden on Mobile <=640px */}
            <p
              className="font-body hero-quote-line"
              style={{
                fontSize: '13.5px',
                color: 'var(--color-hearth-muted)',
                fontStyle: 'italic',
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.9)',
                margin: 0,
              }}
            >
              &ldquo;{content.hero.welcomeHook}&rdquo;
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.hero-section-root) {
          position: relative;
          min-height: calc(100vh - 74px);
          display: flex;
          align-items: center;
          padding: 24px 0 28px;
          overflow: hidden;
          background-color: var(--color-hearth-charcoal);
        }

        :global(.hero-art-wrapper) {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        :global(.hero-content-container) {
          position: relative;
          z-index: 50;
          display: flex;
          flex-direction: column;
          justifyContent: center;
        }

        :global(.hero-text-stack) {
          max-width: 540px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        :global(.hero-cta-cluster) {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          align-items: center;
          margin-top: 4px;
        }

        :global(.hero-btn-stack) {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        :global(.hero-action-row) {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
        }

        :global(.hero-quote-line) {
          display: block;
        }

        /* Mobile (<=640px): Scene-First Layout */
        @media (max-width: 640px) {
          :global(.hero-section-root) {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            min-height: auto;
            padding: 0 0 28px;
            background-color: var(--color-hearth-charcoal);
          }

          :global(.hero-art-wrapper) {
            position: relative;
            width: 100%;
            height: 38vh;
            min-height: 250px;
            max-height: 320px;
            z-index: 10;
            overflow: hidden;
          }

          :global(.hero-content-container) {
            position: relative;
            z-index: 20;
            width: 100%;
            padding-top: 16px;
            padding-bottom: 16px;
            background-color: var(--color-hearth-charcoal);
          }

          :global(.hero-text-stack) {
            max-width: 100%;
            gap: 10px;
          }

          /* Medallion ~120px on its own row above the two buttons */
          :global(.hero-cta-cluster) {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            width: 100%;
            margin-top: 2px;
          }

          :global(.hero-medallion-wrap) {
            width: 100%;
            display: flex;
            justifyContent: center;
          }

          :global(.hero-medallion-wrap .pixel-medallion) {
            width: 120px !important;
            height: 120px !important;
          }

          :global(.hero-btn-stack) {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
          }

          :global(.hero-action-row) {
            display: flex;
            justify-content: center;
            gap: 10px;
            width: 100%;
          }

          :global(.hero-mint-wrap) {
            display: flex;
            justify-content: center;
            width: 100%;
          }

          :global(.hero-quote-line) {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
