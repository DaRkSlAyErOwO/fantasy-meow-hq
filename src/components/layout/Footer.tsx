import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site.config';
import { content } from '@/config/content';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-hearth-charcoal)',
        borderTop: '1px solid var(--color-hearth-border)',
        paddingTop: '64px',
        paddingBottom: '48px',
        marginTop: 'auto',
      }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {/* Top Grid: Brand & Navigation */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
          }}
        >
          {/* Brand Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Link href="/" aria-label="Fantasy Meows home">
              <div style={{ position: 'relative', width: '170px', height: '46px' }}>
                <Image
                  src="/assets/web/brand/logo-wordmark.webp"
                  alt="Fantasy Meows"
                  fill
                  className="pixelated"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </Link>
            <p className="font-body" style={{ color: 'var(--color-candle-gold)', fontSize: '16px', fontWeight: 700 }}>
              {siteConfig.TAGLINE_PRIMARY}
            </p>
            <p style={{ color: 'var(--color-hearth-muted)', fontSize: '14px', maxWidth: '340px' }}>
              {siteConfig.TAGLINE_SECONDARY}
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
              <a
                href={siteConfig.DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fantasy Meows on Discord"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--color-hearth-text)',
                  fontSize: '14px',
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-hearth-soot)',
                  border: '1px solid var(--color-hearth-border)',
                  transition: 'border-color 0.15s ease',
                }}
              >
                <span>Discord</span>
              </a>
              <a
                href={siteConfig.X_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fantasy Meows on X"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--color-hearth-text)',
                  fontSize: '14px',
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-hearth-soot)',
                  border: '1px solid var(--color-hearth-border)',
                  transition: 'border-color 0.15s ease',
                }}
              >
                <span>X ({siteConfig.X_HANDLE})</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h2 className="font-body" style={{ color: 'var(--color-hearth-text)', fontSize: '16px' }}>
              Explore
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '8px 16px',
                fontSize: '14px',
              }}
            >
              <Link href="/#world" style={{ color: 'var(--color-hearth-muted)' }}>
                Whiskerwild
              </Link>
              <Link href="/houses/" style={{ color: 'var(--color-hearth-muted)' }}>
                All Houses
              </Link>
              <Link href="/#houses" style={{ color: 'var(--color-hearth-muted)' }}>
                The Six Houses
              </Link>
              <Link href="/classes/" style={{ color: 'var(--color-hearth-muted)' }}>
                All Classes
              </Link>
              <Link href="/#classes" style={{ color: 'var(--color-hearth-muted)' }}>
                The Five Classes
              </Link>
              <Link href="/#utility" style={{ color: 'var(--color-hearth-muted)' }}>
                Utility
              </Link>
              <Link href="/#roadmap" style={{ color: 'var(--color-hearth-muted)' }}>
                Roadmap
              </Link>
              <Link href="/#mint" style={{ color: 'var(--color-hearth-muted)' }}>
                Mint (TBA)
              </Link>
              <Link href="/#faq" style={{ color: 'var(--color-hearth-muted)' }}>
                FAQ
              </Link>
              <Link href="/#safety" style={{ color: 'var(--color-hearth-muted)' }}>
                Official Links
              </Link>
              <Link href="/disclosures/" style={{ color: 'var(--color-candle-gold)' }}>
                Risk & disclosures
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Safety Notice Block (Section 12.2) */}
        <div
          style={{
            backgroundColor: 'var(--color-hearth-soot)',
            border: '1px solid var(--color-hearth-border)',
            borderRadius: 'var(--radius-md)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <p className="font-body" style={{ color: 'var(--color-candle-gold)', fontSize: '16px', fontWeight: 700 }}>
            Stay safe.
          </p>
          <p style={{ color: 'var(--color-hearth-text)', fontSize: '14px', lineHeight: 1.5 }}>
            {content.safety.footerBlock}
          </p>
        </div>

        {/* Four Core Disclosures (Section 13.1) */}
        <div
          style={{
            borderTop: '1px dashed var(--color-hearth-border)',
            paddingTop: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          <ol
            style={{
              paddingLeft: '20px',
              fontSize: '13px',
              color: 'var(--color-hearth-muted)',
              lineHeight: 1.6,
            }}
          >
            {/* Disclosures 1, 2, 4 only in footer (fee language lives strictly on /disclosures) */}
            {[content.disclosures.core[0], content.disclosures.core[1], content.disclosures.core[3]].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
          <p style={{ fontSize: '13px', color: 'var(--color-hearth-muted)', marginTop: '8px' }}>
            © {siteConfig.COPYRIGHT_YEAR} {siteConfig.SITE_NAME}. All rights reserved.{' '}
            <Link href="/disclosures/" style={{ color: 'var(--color-candle-gold)', textDecoration: 'underline' }}>
              Read the full disclosures
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};
