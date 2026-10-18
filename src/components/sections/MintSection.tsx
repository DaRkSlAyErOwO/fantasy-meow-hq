'use client';

import React from 'react';
import Link from 'next/link';
import { content } from '@/config/content';
import { siteConfig } from '@/config/site.config';

const { MINT } = siteConfig;
const { mint } = content;

const mintParams = [
  { label: 'Supply', value: MINT.supply },
  { label: 'Price', value: MINT.price },
  { label: 'Chain', value: MINT.chain },
  { label: 'Per-Wallet Limit', value: MINT.perWallet },
];

// One step per mint phase, in order (OG -> GTD -> FCFS)
const plainSteps = Object.values(MINT.phases).map((phase, i) => ({
  step: String(i + 1).padStart(2, '0'),
  tier: phase.name === phase.tag ? phase.name : `${phase.name} (${phase.tag})`,
  status: phase.window,
  desc: phase.guarantee,
}));

export const MintSection: React.FC = () => {

  return (
    <section id="mint" className="mint-section-root">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 44px' }}>
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
              {content.mint.eyebrow}
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
            {content.mint.title}
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
            {content.mint.intro}
          </p>
        </div>

        {/* Mint Parameters Grid (All TBA) */}
        <div className="mint-params-grid" role="region" aria-label="Mint Specifications">
          {mintParams.map((param) => (
            <div key={param.label} className="pixel-box-sm mint-param-card">
              <span className="font-label param-label">{param.label}</span>
              <span className="font-label param-val">{param.value}</span>
            </div>
          ))}
        </div>

        {/* Plain Steps: OG / GTD / FCFS (All TBA, no progress bar, no active highlight) */}
        <div className="mint-panel">
          <div className="steps-header">
            <h3 className="font-label" style={{ fontSize: '20px', color: 'var(--color-ink-primary)', margin: 0 }}>
              Mint Phases
            </h3>
            <span className="font-label" style={{ fontSize: '11px', color: 'var(--color-candle-dark)', letterSpacing: '0.05em' }}>
              ALL PHASES TBA
            </span>
          </div>

          <div className="steps-list" role="list">
            {plainSteps.map((item) => (
              <div key={item.step} className="pixel-box mint-step-row" role="listitem">
                <div className="step-num-col">
                  <span className="font-label step-number">{item.step}</span>
                </div>

                <div className="step-content-col">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                    <h4 className="font-label step-tier-title">{item.tier}</h4>
                    <span className="font-label step-status-pill">{item.status}</span>
                  </div>
                  <p className="font-body step-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to earn a spot (reference 9.3) */}
        <div className="mint-panel">
          <div className="steps-header">
            <h3 className="font-label panel-title">How to earn a spot</h3>
          </div>
          <ol className="earn-grid">
            {mint.howToEarn.map((item) => (
              <li key={item.step} className="earn-card">
                <span className="font-label step-number">{item.step}</span>
                <h4 className="font-label step-tier-title">{item.title}</h4>
                <p className="font-body step-desc">{item.text}</p>
              </li>
            ))}
          </ol>
          <p className="font-body panel-note">{mint.pathLine}</p>
        </div>

        {/* Merits tiers, lowest to highest (reference 9.4) */}
        <div className="mint-panel">
          <div className="steps-header">
            <h3 className="font-label panel-title">Merits tiers</h3>
            <span className="font-label panel-tag">Lowest to highest</span>
          </div>
          <ol className="tier-list">
            {mint.meritsTiers.map((tier) => (
              <li key={tier.tier} className="tier-row">
                <span className="tier-emoji" aria-hidden="true">
                  {tier.emoji}
                </span>
                <div>
                  <h4 className="font-label step-tier-title">{tier.tier}</h4>
                  <p className="font-body step-desc">{tier.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="font-body panel-note">{mint.tiersFinePrint}</p>
        </div>

        {/* What each spot means (reference 9.5) */}
        <div className="mint-panel">
          <div className="steps-header">
            <h3 className="font-label panel-title">What each spot means</h3>
          </div>
          <ul className="spot-list">
            {mint.whatEachSpotMeans.map((spot) => (
              <li key={spot.label} className="font-body spot-item">
                <strong>{spot.label}:</strong> {spot.text}
                {'emphasis' in spot && (
                  <>
                    {' '}
                    <strong>{spot.emphasis}</strong>
                  </>
                )}
              </li>
            ))}
          </ul>
          <p className="font-body panel-note">{mint.spotNotice}</p>
        </div>

        {/* Single Disabled Control: Mint: coming soon */}
        <div className="mint-action-cluster">
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="pixel-btn disabled-mint-btn"
          >
            <span className="pulsing-ember" aria-hidden="true" />
            {content.hero.ctaMint}
          </button>
          <p className="font-body mint-control-subtext">
            Mints are announced strictly on our official Discord and website.
          </p>
        </div>

        {/* Safety Callout Box (Verbatim) */}
        <div className="pixel-box-sm mint-safety-box">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <span style={{ fontSize: '20px', marginTop: '2px' }} aria-hidden="true">🔒</span>
            <div>
              <h4 className="font-label" style={{ fontSize: '15px', color: 'var(--color-ink-primary)', margin: '0 0 6px' }}>
                Safe Whisker Notice
              </h4>
              <p className="font-body" style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-ink-secondary)', lineHeight: 1.5 }}>
                {content.mint.safetyCallout}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.mint-section-root) {
          position: relative;
          background-color: var(--color-parchment-base);
          padding: 80px 0 100px;
          border-top: 3px solid var(--color-ink-primary);
        }

        :global(.mint-params-grid) {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          max-width: 860px;
          margin: 0 auto 36px;
        }

        :global(.mint-param-card) {
          background-color: var(--color-parchment-card);
          padding: 16px;
          border-radius: 6px;
          border: 2px solid var(--color-ink-primary);
          box-shadow: 3px 3px 0 var(--color-ink-primary);
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        :global(.param-label) {
          font-size: 11px;
          color: var(--color-ink-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        :global(.param-val) {
          font-size: 20px;
          color: var(--color-candle-dark);
          font-weight: 700;
        }

        :global(.mint-panel) {
          max-width: 860px;
          margin: 0 auto 28px;
          background-color: var(--color-parchment-card);
          padding: 24px 28px;
          border-radius: 8px;
          border: 3px solid var(--color-ink-primary);
          box-shadow: 4px 4px 0 var(--color-ink-primary);
        }

        :global(.panel-title) {
          font-size: 20px;
          color: var(--color-ink-primary);
          margin: 0;
        }

        :global(.panel-tag) {
          font-size: 11px;
          color: var(--color-candle-dark);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        :global(.panel-note) {
          font-size: 13.5px;
          color: var(--color-ink-secondary);
          font-style: italic;
          line-height: 1.5;
          margin: 16px 0 0;
        }

        :global(.earn-grid) {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        :global(.earn-card) {
          background-color: var(--color-parchment-base);
          border: 2px solid var(--color-ink-primary);
          box-shadow: 2px 2px 0 var(--color-ink-primary);
          border-radius: 6px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
        }

        :global(.tier-list),
        :global(.spot-list) {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        :global(.tier-row) {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background-color: var(--color-parchment-base);
          border: 1px solid var(--color-parchment-border);
          border-radius: 6px;
          padding: 12px 16px;
        }

        :global(.tier-emoji) {
          font-size: 22px;
          line-height: 1;
          margin-top: 2px;
          flex-shrink: 0;
        }

        :global(.spot-item) {
          font-size: 15px;
          color: var(--color-ink-secondary);
          line-height: 1.55;
          padding-left: 14px;
          border-left: 3px solid var(--color-candle-gold);
        }

        :global(.spot-item strong) {
          color: var(--color-ink-primary);
        }

        :global(.steps-header) {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px solid var(--color-parchment-border);
          padding-bottom: 12px;
          margin-bottom: 16px;
        }

        :global(.steps-list) {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        :global(.mint-step-row) {
          background-color: var(--color-parchment-base);
          padding: 16px 20px;
          border-radius: 6px;
          border: 2px solid var(--color-ink-primary);
          box-shadow: 2px 2px 0 var(--color-ink-primary);
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        :global(.step-num-col) {
          flex-shrink: 0;
        }

        :global(.step-number) {
          font-size: 16px;
          background-color: var(--color-candle-gold);
          color: var(--color-ink-primary);
          padding: 4px 8px;
          border-radius: 4px;
        }

        :global(.step-content-col) {
          flex: 1;
        }

        :global(.step-tier-title) {
          font-size: 16px;
          color: var(--color-ink-primary);
          margin: 0;
        }

        :global(.step-status-pill) {
          font-size: 11px;
          color: var(--color-candle-dark);
          background-color: var(--color-parchment-card);
          border: 1px solid var(--color-candle-gold);
          border-radius: 4px;
          padding: 2px 8px;
        }

        :global(.step-desc) {
          font-size: 13.5px;
          color: var(--color-ink-secondary);
          margin: 4px 0 0;
          line-height: 1.45;
        }

        :global(.mint-action-cluster) {
          text-align: center;
          margin-bottom: 32px;
        }

        :global(.disabled-mint-btn) {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 28px;
          font-size: 15px;
          font-family: inherit;
          background-color: #241c22 !important;
          color: #c9bbae !important;
          border: 3px solid var(--color-ink-primary) !important;
          box-shadow: 4px 4px 0 var(--color-ink-primary) !important;
          cursor: not-allowed !important;
          user-select: none;
        }

        :global(.pulsing-ember) {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--color-candle-gold);
          box-shadow: 0 0 6px rgba(232, 182, 76, 0.9);
        }

        :global(.mint-control-subtext) {
          font-size: 13px;
          color: var(--color-ink-muted);
          font-style: italic;
          margin-top: 10px;
        }

        :global(.mint-safety-box) {
          max-width: 860px;
          margin: 0 auto;
          background-color: var(--color-parchment-card);
          padding: 18px 22px;
          border-radius: 6px;
          border: 2px solid var(--color-ink-primary);
          box-shadow: 3px 3px 0 var(--color-ink-primary);
        }

        @media (max-width: 860px) {
          :global(.earn-grid) {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          :global(.mint-params-grid) {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          :global(.mint-section-root) {
            padding: 50px 0 70px;
          }

          :global(.mint-panel) {
            padding: 16px;
          }

          :global(.earn-grid) {
            grid-template-columns: 1fr;
          }

          :global(.mint-step-row) {
            padding: 12px 14px;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
};
