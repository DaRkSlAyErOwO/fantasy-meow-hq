import React from 'react';
import { content } from '@/config/content';
import { siteConfig } from '@/config/site.config';
import { PixelSectionHead } from '@/components/pixel/PixelSectionHead';
import { PixelSprite } from '@/components/pixel/PixelSprite';

const { MINT } = siteConfig;
const { mint, hero, ui } = content;
const phases = [MINT.phases.og, MINT.phases.gtd, MINT.phases.fcfs];

/**
 * Mint (#mint), reference section 9 order: intro, status row, three phase cards (identical,
 * no active highlight, no progress), how to earn a spot, Merits tiers, what each spot means,
 * safety callout, CTAs. One disabled control: "Mint: coming soon".
 */
export const MintGate: React.FC = () => (
  <section id="mint" className="px-section px-section--parchment" aria-labelledby="mint-title">
    <div className="container">
      <PixelSectionHead eyebrow={mint.eyebrow} title={mint.title} intro={mint.intro} id="mint-title" />

      <dl className="px-status" data-px-reveal="dissolve">
        {ui.mint.statusRow.map((s) => (
          <div key={s.key} className="px-status__cell px-frame px-frame--card">
            <dt>{s.label}</dt>
            <dd>{MINT[s.key as keyof typeof MINT] as string}</dd>
          </div>
        ))}
      </dl>

      <ol className="px-phases">
        {phases.map((p, i) => (
          <li key={p.tag} className="px-phase px-frame px-frame--card" data-px-reveal="dissolve" style={{ animationDelay: `${i * 140}ms` }}>
            <p className="px-phase__label">{ui.mint.phaseLabel(i + 1)}</p>
            <h3 className="px-h3">{p.name}</h3>
            <p className="px-phase__chips">
              <span className="px-badge">{p.tag}</span>
              <span className="px-chip">{p.badge}</span>
            </p>
            <p className="px-small">{p.guarantee}</p>
            <dl className="px-meta px-meta--grid">
              <div>
                <dt>{ui.mint.fields.who}</dt>
                <dd>{p.who}</dd>
              </div>
              <div>
                <dt>{ui.mint.fields.price}</dt>
                <dd>{p.price}</dd>
              </div>
              <div>
                <dt>{ui.mint.fields.perWallet}</dt>
                <dd>{p.perWallet}</dd>
              </div>
              <div>
                <dt>{ui.mint.fields.window}</dt>
                <dd>{p.window}</dd>
              </div>
              <div>
                <dt>{ui.mint.fields.spots}</dt>
                <dd>{p.spots}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ol>

      <div className="px-panel px-frame px-frame--card" data-px-reveal="dissolve">
        <h3 className="px-h3">{ui.mint.howToEarnTitle}</h3>
        <ol className="px-steps">
          {mint.howToEarn.map((s) => (
            <li key={s.step} className="px-step px-frame px-frame--base">
              <span className="px-step__num" aria-hidden="true">
                {s.step}
              </span>
              <div>
                <p className="px-step__title">{s.title}</p>
                <p className="px-small">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="px-note">{mint.pathLine}</p>
      </div>

      <div className="px-panel px-frame px-frame--card" data-px-reveal="dissolve">
        <div className="px-panel__head">
          <h3 className="px-h3">{ui.mint.tiersTitle}</h3>
          <span className="px-chip">{ui.mint.tiersOrder}</span>
        </div>
        <ol className="px-tiers">
          {mint.meritsTiers.map((t, i) => (
            <li key={t.tier} className="px-tier">
              <span className="px-tier__pips" aria-hidden="true">
                {mint.meritsTiers.map((_, j) => (
                  <PixelSprite key={j} name={j <= i ? 'pip' : 'pipEmpty'} scale={3} />
                ))}
              </span>
              <div>
                <p className="px-step__title">{t.tier}</p>
                <p className="px-small">{t.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="px-note">{mint.tiersFinePrint}</p>
      </div>

      <div className="px-panel px-frame px-frame--card" data-px-reveal="dissolve">
        <h3 className="px-h3">{ui.mint.spotsTitle}</h3>
        <ul className="px-bullets px-bullets--spots">
          {mint.whatEachSpotMeans.map((s) => (
            <li key={s.label}>
              <PixelSprite name="bullet" scale={2} className="px-bullets__icon" />
              <span>
                <strong>{s.label}:</strong> {s.text}
                {'emphasis' in s && (
                  <>
                    {' '}
                    <strong>{s.emphasis}</strong>
                  </>
                )}
              </span>
            </li>
          ))}
        </ul>
        <p className="px-note">{mint.spotNotice}</p>
      </div>

      <div className="px-callout px-frame px-frame--gold" data-px-reveal="dissolve">
        <PixelSprite name="lock" scale={4} className="px-callout__icon" />
        <p className="px-small">{mint.safetyCallout}</p>
      </div>

      <div className="px-ctas">
        <a href={siteConfig.DISCORD_URL} target="_blank" rel="noopener noreferrer" className="px-btn px-btn--gold">
          <span>{hero.ctaPrimary}</span>
          <PixelSprite name="arrow" scale={2} className="px-btn__arrow" />
        </a>
        <button type="button" disabled aria-disabled="true" className="px-btn px-btn--disabled">
          <PixelSprite name="lock" scale={2} />
          <span>{hero.ctaMint}</span>
        </button>
      </div>
    </div>
  </section>
);
