'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site.config';
import { content } from '@/config/content';

const NAV_LINKS = [
  { label: 'Whiskerwild', href: '/#whiskerwild' },
  { label: 'Houses', href: '/#houses' },
  { label: 'Classes', href: '/#classes' },
  { label: 'Utility', href: '/#utility' },
  { label: 'Roadmap', href: '/#roadmap' },
  { label: 'Mint', href: '/#mint' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Safety', href: '/#safety' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be unavailable (permissions, insecure context); fail quietly
    }
  };

  return (
    <header className="site-header">
      <div className="container header-bar">
        {/* Wordmark Logo */}
        <Link href="/" aria-label="Fantasy Meows home" className="header-logo">
          <Image
            src="/assets/web/brand/logo-wordmark.webp"
            alt="Fantasy Meows"
            fill
            priority
            className="pixelated"
            style={{ objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="font-label nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Action Cluster */}
        <div className="header-actions">
          <div style={{ position: 'relative' }}>
            <button
              type="button"
              onClick={handleShare}
              aria-label="Copy a link to this page"
              title="Copy share link"
              className="pixel-icon-btn"
            >
              <span aria-hidden="true" style={{ fontSize: '14px' }}>
                🔗
              </span>
            </button>
            {copied && (
              <span className="font-label copied-toast" role="status">
                Copied!
              </span>
            )}
          </div>

          <a
            href={siteConfig.DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn header-cta"
          >
            {content.hero.ctaPrimary}
          </a>

          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="pixel-btn mobile-toggle"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav id="mobile-nav" aria-label="Main navigation" className="mobile-drawer">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-label mobile-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}

      <style jsx>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          width: 100%;
          background-color: var(--color-hearth-charcoal);
          border-bottom: 3px solid var(--color-ink-primary);
          box-shadow: 0 4px 0 var(--color-ink-primary);
        }

        .header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 74px;
        }

        .site-header :global(.header-logo) {
          position: relative;
          display: inline-block;
          width: 160px;
          height: 42px;
          flex-shrink: 0;
        }

        .desktop-nav {
          display: none;
          align-items: center;
          gap: 16px;
        }

        .site-header :global(.nav-link) {
          font-size: 15px;
          color: var(--color-hearth-text);
          padding: 6px 10px;
          border-radius: 4px;
          transition: background-color 0.1s ease, color 0.1s ease;
        }

        .site-header :global(.nav-link:hover),
        .site-header :global(.nav-link:focus-visible) {
          background-color: var(--color-hearth-soot);
          color: var(--color-candle-gold);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .copied-toast {
          position: absolute;
          top: 48px;
          right: 0;
          background-color: var(--color-candle-gold);
          color: var(--color-ink-primary);
          font-size: 11px;
          padding: 4px 8px;
          border-radius: 3px;
          border: 2px solid var(--color-ink-primary);
          box-shadow: 2px 2px 0 var(--color-ink-primary);
          white-space: nowrap;
          z-index: 60;
        }

        .header-cta {
          background-color: var(--color-candle-gold);
          color: var(--color-ink-primary);
          font-size: 14px;
          padding: 8px 16px;
          white-space: nowrap;
        }

        .mobile-toggle {
          padding: 7px 12px;
          font-size: 13px;
          background-color: var(--color-hearth-soot);
          color: var(--color-hearth-text);
        }

        .mobile-drawer {
          display: flex;
          flex-direction: column;
          gap: 8px;
          background-color: var(--color-hearth-soot);
          border-top: 2px solid var(--color-ink-primary);
          padding: 16px 20px;
        }

        .site-header :global(.mobile-link) {
          font-size: 16px;
          color: var(--color-hearth-text);
          padding: 8px 12px;
          border: 2px solid var(--color-ink-primary);
          background-color: var(--color-hearth-charcoal);
          box-shadow: 2px 2px 0 var(--color-ink-primary);
          border-radius: 4px;
        }

        @media (min-width: 992px) {
          .desktop-nav {
            display: flex;
          }
          .mobile-toggle {
            display: none;
          }
        }

        /* Small phones: keep logo + share + CTA + menu on one row */
        @media (max-width: 480px) {
          .site-header :global(.header-logo) {
            width: 116px;
            height: 34px;
          }
          .header-actions {
            gap: 8px;
          }
          .header-cta {
            font-size: 13px;
            padding: 7px 12px;
          }
        }
      `}</style>
    </header>
  );
};
