import React from 'react';
import { content } from '@/config/content';
import { siteConfig } from '@/config/site.config';
import { PixelSectionHead } from '@/components/pixel/PixelSectionHead';
import { PixelSprite } from '@/components/pixel/PixelSprite';

const { safety, ui } = content;

// Reference 12.1 note: never print the .example placeholder to visitors
const siteHost = (() => {
  try {
    const host = new URL(siteConfig.SITE_URL).host;
    return host.endsWith('.example') ? null : host;
  } catch {
    return null;
  }
})();

/** Safety (#safety): official links, the never-list, mint-link and protect-yourself notes. */
export const SafetyNotice: React.FC = () => (
  <section id="safety" className="px-section px-section--parchment" aria-labelledby="safety-title">
    <div className="container">
      <PixelSectionHead eyebrow={safety.eyebrow} title={safety.title} id="safety-title" />

      <div className="px-safety">
        <article className="px-panel px-frame px-frame--gold" data-px-reveal="dissolve" aria-labelledby="official-title">
          <div className="px-panel__head">
            <PixelSprite name="shield" scale={4} />
            <h3 className="px-h3" id="official-title">
              {ui.safety.officialTitle}
            </h3>
          </div>
          <ul className="px-official">
            <li>
              <span className="px-official__label">{ui.safety.discordLabel}</span>
              <a href={siteConfig.DISCORD_URL} target="_blank" rel="noopener noreferrer" className="px-link">
                {siteConfig.DISCORD_URL}
              </a>
            </li>
            <li>
              <span className="px-official__label">{ui.safety.xLabel}</span>
              <a href={siteConfig.X_URL} target="_blank" rel="noopener noreferrer" className="px-link">
                {siteConfig.X_URL} ({siteConfig.X_HANDLE})
              </a>
            </li>
            <li>
              <span className="px-official__label">{ui.safety.websiteLabel}</span>
              <span>{siteHost ? ui.safety.websiteLive(siteHost) : ui.safety.websitePending}</span>
            </li>
          </ul>
        </article>

        <article className="px-panel px-frame px-frame--card" data-px-reveal="dissolve" aria-labelledby="never-title">
          <h3 className="px-h3" id="never-title">
            {ui.safety.neverTitle}
          </h3>
          <ul className="px-never">
            {safety.neverItems.map((item) => (
              <li key={item}>
                <PixelSprite name="cross" scale={2} className="px-never__icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <div className="px-notes">
          <p className="px-small px-frame px-frame--card px-note-card" data-px-reveal="dissolve">
            <strong>{ui.safety.mintLinksLabel}</strong> {safety.mintLinksNote}
          </p>
          <p className="px-small px-frame px-frame--card px-note-card" data-px-reveal="dissolve" style={{ animationDelay: '140ms' }}>
            <strong>{ui.safety.protectLabel}</strong> {safety.protectNote}
          </p>
        </div>
      </div>
    </div>
  </section>
);
