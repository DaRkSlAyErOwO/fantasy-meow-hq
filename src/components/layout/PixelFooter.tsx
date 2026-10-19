import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site.config';
import { content } from '@/config/content';
import { PixelSprite } from '@/components/pixel/PixelSprite';
import '@/styles/pixel-sections.css';

const { ui, safety, disclosures } = content;

// Footer shows core disclosures 1, 2 and 4 only; the Territory fee line (3) lives on /disclosures/
const FOOTER_DISCLOSURES = [disclosures.core[0], disclosures.core[1], disclosures.core[3]];

export const PixelFooter: React.FC = () => (
  <footer className="px-footer">
    <div className="container px-footer__grid">
      <div className="px-footer__brand">
        <Link href="/" aria-label={ui.footer.homeAria} className="px-footer__logo">
          <Image src="/assets/web/brand/logo-wordmark.webp" alt="" width={240} height={127} className="pixelated" />
        </Link>
        <p className="px-footer__tag">{siteConfig.TAGLINE_PRIMARY}</p>
        <p className="px-footer__sub">{siteConfig.TAGLINE_SECONDARY}</p>
        <div className="px-footer__social">
          <a href={siteConfig.DISCORD_URL} target="_blank" rel="noopener noreferrer" aria-label={ui.footer.discordAria} className="px-btn px-btn--gold px-btn--sm">
            <span>{ui.safety.discordLabel}</span>
          </a>
          <a href={siteConfig.X_URL} target="_blank" rel="noopener noreferrer" aria-label={ui.footer.xAria} className="px-btn px-btn--parchment px-btn--sm">
            <span>{ui.safety.xLabel} {siteConfig.X_HANDLE}</span>
          </a>
        </div>
      </div>

      <nav className="px-footer__nav" aria-labelledby="footer-explore">
        <h2 className="px-footer__h" id="footer-explore">
          {ui.footer.exploreTitle}
        </h2>
        <ul>
          {ui.footer.links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="px-footer__link">
                <PixelSprite name="arrow" scale={2} className="px-footer__cursor" />
                <span>{l.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>

    <div className="container">
      <p className="px-footer__safety px-frame px-frame--soot">{safety.footerBlock}</p>
      <ul className="px-footer__disc">
        {FOOTER_DISCLOSURES.map((d) => (
          <li key={d}>
            <PixelSprite name="bullet" scale={2} />
            <span>{d}</span>
          </li>
        ))}
      </ul>
      <p className="px-footer__legal">
        © {siteConfig.COPYRIGHT_YEAR} {siteConfig.SITE_NAME}. {ui.footer.rights}{' '}
        <Link href="/disclosures/" className="px-link px-link--night">
          {ui.footer.disclosuresLink}
        </Link>
      </p>
    </div>
  </footer>
);
