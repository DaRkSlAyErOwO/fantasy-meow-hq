'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { content } from '@/config/content';

export const WhiskerwildSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pinStageRef = useRef<HTMLDivElement | null>(null);
  const para1Ref = useRef<HTMLParagraphElement | null>(null);
  const para2Ref = useRef<HTMLParagraphElement | null>(null);
  const para3Ref = useRef<HTMLParagraphElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check reduced motion
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.innerWidth >= 1024;

    // Requirement 7: Reduced motion: no pinning!
    if (rm || !isDesktop) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add('(min-width: 769px)', () => {
      if (pinStageRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinStageRef.current,
            start: 'top top+=74',
            end: '+=700',
            pin: true,
            scrub: 0.5,
            anticipatePin: 1,
          },
        });

        // First paragraph is at full ink on arrival; only later paragraphs reveal
        if (para1Ref.current) {
          gsap.set(para1Ref.current, { opacity: 1, y: 0, color: '#2b1e16' });
        }

        if (para2Ref.current && para3Ref.current) {
          tl.fromTo(
            para2Ref.current,
            { opacity: 0.35, y: 14 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
          )
            .fromTo(
              para3Ref.current,
              { opacity: 0.35, y: 14 },
              { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
              '+=0.1'
            );
        }

        if (cardsRef.current) {
          tl.fromTo(
            cardsRef.current,
            { opacity: 0.5, y: 12 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
            '+=0.1'
          );
        }
      }
    });

    mm.add('(max-width: 768px)', () => {
      if (pinStageRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinStageRef.current,
            start: 'top 85%',
            end: 'top 25%',
            scrub: 0.5,
          },
        });

        // Mobile: First paragraph at full ink on arrival, only later paragraphs reveal
        if (para1Ref.current) {
          gsap.set(para1Ref.current, { opacity: 1, y: 0, color: '#2b1e16' });
        }

        if (para2Ref.current && para3Ref.current) {
          tl.fromTo(
            para2Ref.current,
            { opacity: 0.4, y: 10 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
          )
            .fromTo(
              para3Ref.current,
              { opacity: 0.4, y: 10 },
              { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
              '+=0.1'
            );
        }
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="whiskerwild" ref={containerRef} className="whiskerwild-root">
      <span id="world" style={{ position: 'absolute', top: 0 }} aria-hidden="true" />
      {/* 
        1. HERO -> PARCHMENT TRANSITION:
        Gradual ~160px soft fade with gentle ember glow, no hard orange band under nav.
      */}
      <div className="ember-to-parchment-fade" aria-hidden="true" />

      {/* Main Parchment Realm Content */}
      <div className="whiskerwild-body">
        <div className="container">
          {/* Section Eyebrow & Title */}
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px' }}>
            <div style={{ display: 'inline-flex', marginBottom: '10px' }}>
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
                {content.world.eyebrow}
              </span>
            </div>

            <h2
              className="font-pixel"
              style={{
                fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
                color: 'var(--color-ink-primary)',
                lineHeight: 1.12,
                marginBottom: '14px',
              }}
            >
              {content.world.title}
            </h2>

            <p
              className="font-body"
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.28rem)',
                color: 'var(--color-ink-secondary)',
                lineHeight: 1.55,
                fontStyle: 'italic',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              &ldquo;{content.world.intro}&rdquo;
            </p>
          </div>

          {/* GSAP Pinned Stage for Kinetic Text Reveal */}
          <div ref={pinStageRef} className="whiskerwild-pinned-stage">
            {/* Storybook Center Panel (3px ink border, 4px hard offset shadow) */}
            <div className="pixel-box storybook-hero-panel">
              {/* 
                Top Row:
                - Desktop: Framed pixel illustration on the left, narrative paragraphs on the right
                - Mobile: Framed pixel illustration above, narrative paragraphs below
              */}
              <div className="storybook-content-split">
                {/* Framed Pixel Illustration: 3px ink border, 4px hard offset shadow */}
                <div className="storybook-illustration-col">
                  <div className="storybook-img-frame">
                    <Image
                      src="/assets/web/art/knight-mage-500.webp"
                      alt="Pixel-art cat adventurer standing before an enchanted Whiskerwild forest with glowing lanterns"
                      fill
                      priority
                      className="pixelated"
                      style={{ objectFit: 'cover', imageRendering: 'pixelated' }}
                    />
                  </div>
                  <span className="font-pixel storybook-caption">
                    A cat of Whiskerwild
                  </span>
                </div>

                {/* Narrative Paragraphs: Ends at full ink #2b1e16 (opacity 1) */}
                <div className="storybook-text-col">
                  <p ref={para1Ref} className="font-body narrative-para">
                    {content.world.paragraphs[0]}
                  </p>

                  <p ref={para2Ref} className="font-body narrative-para">
                    {content.world.paragraphs[1]}
                  </p>

                  <p ref={para3Ref} className="font-body narrative-para">
                    {content.world.paragraphs[2]}
                  </p>
                </div>
              </div>

              {/* 3 Storybook Beat Cards: 01 A House / 02 A Class / 03 A Place */}
              <div ref={cardsRef} className="storybook-beats-grid">
                {content.whatIsThis.map((item) => (
                  <div key={item.number} className="pixel-box-sm storybook-beat-card">
                    <span className="font-pixel beat-number">{item.number}</span>
                    <h3 className="font-pixel beat-title">{item.title || item.ClassTitle}</h3>
                    <p className="font-body beat-text">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* The Crossing Storybook Panel */}
          <div style={{ maxWidth: '920px', margin: '54px auto 0' }}>
            <div
              className="pixel-box"
              style={{
                backgroundColor: 'var(--color-parchment-card)',
                padding: '36px',
                borderRadius: '8px',
                position: 'relative',
              }}
            >
              {/* Corner Ribbon / Badge */}
              <div style={{ display: 'inline-flex', marginBottom: '14px' }}>
                <span
                  className="font-pixel pixel-box-sm"
                  style={{
                    fontSize: '11px',
                    backgroundColor: 'var(--color-candle-gold)',
                    color: 'var(--color-ink-primary)',
                    padding: '3px 10px',
                    borderRadius: '3px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  Story beat · The Crossing
                </span>
              </div>

              <h3
                className="font-pixel"
                style={{
                  fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
                  color: 'var(--color-ink-primary)',
                  marginBottom: '14px',
                }}
              >
                {content.world.theCrossing.title}
              </h3>

              <p
                className="font-body"
                style={{
                  fontSize: '16px',
                  color: 'var(--color-ink-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '18px',
                }}
              >
                {content.world.theCrossing.body}
              </p>

              <div
                style={{
                  borderTop: '2px dashed var(--color-parchment-border)',
                  paddingTop: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ fontSize: '16px' }} aria-hidden="true">
                  🗝️
                </span>
                <p
                  className="font-body"
                  style={{
                    fontSize: '13.5px',
                    color: 'var(--color-ink-muted)',
                    fontStyle: 'italic',
                    margin: 0,
                  }}
                >
                  {content.world.theCrossing.framing}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.whiskerwild-root) {
          position: relative;
          background-color: var(--color-parchment-base);
          overflow: hidden;
        }

        /* Hero -> Parchment Transition: Gradual ~160px soft fade, no hard orange band */
        :global(.ember-to-parchment-fade) {
          height: 160px;
          width: 100%;
          position: relative;
          background: linear-gradient(
            to bottom,
            var(--color-hearth-charcoal) 0%,
            rgba(26, 20, 24, 0.92) 18%,
            rgba(180, 80, 24, 0.14) 48%,
            rgba(232, 182, 76, 0.10) 78%,
            var(--color-parchment-base) 100%
          );
          overflow: hidden;
        }

        :global(.ember-to-parchment-fade)::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 80% 60% at 50% 25%,
            rgba(224, 112, 42, 0.12) 0%,
            rgba(232, 182, 76, 0.06) 55%,
            transparent 85%
          );
          pointer-events: none;
        }

        :global(.whiskerwild-body) {
          padding: 16px 0 80px;
          background-color: var(--color-parchment-base);
        }

        :global(.whiskerwild-pinned-stage) {
          max-width: 920px;
          margin: 0 auto;
        }

        :global(.storybook-hero-panel) {
          background-color: var(--color-parchment-card);
          padding: 36px;
          border-radius: 8px;
        }

        /* 2-Column Split on Desktop, Stacked on Mobile */
        :global(.storybook-content-split) {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        :global(.storybook-illustration-col) {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        :global(.storybook-img-frame) {
          position: relative;
          width: 280px;
          height: 280px;
          border-radius: 6px;
          overflow: hidden;
          border: 3px solid #2b1e16;
          box-shadow: 4px 4px 0 #2b1e16;
          background-color: var(--color-hearth-soot);
        }

        :global(.storybook-caption) {
          font-size: 11px;
          color: var(--color-ink-muted);
          margin-top: 8px;
          text-align: center;
          letter-spacing: 0.04em;
        }

        :global(.storybook-text-col) {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* Full ink #2b1e16 at rest (opacity 1) */
        :global(.narrative-para) {
          font-size: 15.5px;
          color: #2b1e16 !important;
          opacity: 1;
          line-height: 1.62;
          margin: 0;
        }

        :global(.storybook-beats-grid) {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
          margin-top: 28px;
          padding-top: 24px;
          border-top: 2px solid var(--color-parchment-border);
        }

        :global(.storybook-beat-card) {
          background-color: var(--color-parchment-base);
          padding: 18px;
          border-radius: 6px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        :global(.beat-number) {
          font-size: 13px;
          font-weight: 800;
          color: var(--color-candle-dark);
          letter-spacing: 0.05em;
        }

        :global(.beat-title) {
          font-size: 18px;
          color: var(--color-ink-primary);
          margin: 0;
        }

        :global(.beat-text) {
          font-size: 13.5px;
          color: var(--color-ink-secondary);
          line-height: 1.45;
          margin: 0;
        }

        @media (max-width: 1023px) {
          :global(.storybook-content-split) {
            flex-direction: column;
            gap: 24px;
          }

          :global(.storybook-img-frame) {
            width: 260px;
            height: 260px;
          }

          :global(.storybook-hero-panel) {
            padding: 24px 20px;
          }

          :global(.narrative-para) {
            font-size: 15px;
            line-height: 1.55;
          }
        }

        @media (max-width: 640px) {
          :global(.ember-to-parchment-fade) {
            height: 120px;
          }

          :global(.storybook-img-frame) {
            width: 220px;
            height: 220px;
          }

          :global(.storybook-beats-grid) {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
};
