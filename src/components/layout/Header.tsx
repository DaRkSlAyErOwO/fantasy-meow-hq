'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site.config';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleMusic = () => {
    setMusicOn(!musicOn);
  };

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const navLinks = [
    { label: 'Whiskerwild', href: '/#whiskerwild' },
    { label: 'Houses', href: '/#houses' },
    { label: 'Classes', href: '/#classes' },
    { label: 'Utility', href: '/#utility' },
    { label: 'Roadmap', href: '/#roadmap' },
    { label: 'Mint', href: '/#mint' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Safety', href: '/#safety' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        backgroundColor: 'var(--color-hearth-charcoal)',
        borderBottom: '3px solid var(--color-ink-primary)',
        boxShadow: '0 4px 0 var(--color-ink-primary)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '74px',
        }}
      >
        {/* Wordmark Logo */}
        <Link
          href="/"
          aria-label="Fantasy Meows home"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div style={{ position: 'relative', width: '160px', height: '42px' }}>
            <Image
              src="/assets/web/brand/logo-wordmark.webp"
              alt="Fantasy Meows"
              fill
              priority
              className="pixelated"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '16px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-pixel"
              style={{
                fontSize: '15px',
                color: 'var(--color-hearth-text)',
                padding: '6px 10px',
                borderRadius: '4px',
                transition: 'all 0.1s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-hearth-soot)';
                e.currentTarget.style.color = 'var(--color-candle-gold)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--color-hearth-text)';
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Action Cluster */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Round Icon Button: Music (Off by default) */}
          <button
            type="button"
            onClick={toggleMusic}
            aria-label={musicOn ? 'Mute ambient firelight audio' : 'Play ambient firelight audio (currently off)'}
            title={musicOn ? 'Ambient audio: Playing' : 'Ambient audio: Off (click to toggle)'}
            className="pixel-icon-btn"
            style={{
              backgroundColor: musicOn ? 'var(--color-candle-gold)' : 'var(--color-hearth-soot)',
              color: musicOn ? 'var(--color-ink-primary)' : 'var(--color-hearth-muted)',
            }}
          >
            {musicOn ? (
              <span style={{ fontSize: '16px' }}>🎵</span>
            ) : (
              <span style={{ fontSize: '16px', opacity: 0.6 }}>🔇</span>
            )}
          </button>

          {/* Round Icon Button: Share */}
          <div style={{ position: 'relative' }}>
            <button
              type="button"
              onClick={handleShare}
              aria-label="Share Fantasy Meows link"
              title="Copy share link"
              className="pixel-icon-btn"
            >
              <span style={{ fontSize: '14px' }}>🔗</span>
            </button>
            {copied && (
              <span
                className="font-pixel"
                style={{
                  position: 'absolute',
                  top: '48px',
                  right: '0',
                  backgroundColor: 'var(--color-candle-gold)',
                  color: 'var(--color-ink-primary)',
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '4px 8px',
                  borderRadius: '3px',
                  border: '2px solid var(--color-ink-primary)',
                  boxShadow: '2px 2px 0 var(--color-ink-primary)',
                  whiteSpace: 'nowrap',
                  zIndex: 60,
                }}
              >
                Copied!
              </span>
            )}
          </div>

          {/* Primary CTA Button */}
          <a
            href={siteConfig.DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn"
            style={{
              backgroundColor: 'var(--color-candle-gold)',
              color: 'var(--color-ink-primary)',
              fontSize: '14px',
              padding: '8px 16px',
            }}
          >
            Join Discord
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="pixel-btn mobile-toggle"
            style={{
              padding: '7px 12px',
              fontSize: '13px',
              backgroundColor: 'var(--color-hearth-soot)',
              color: 'var(--color-hearth-text)',
            }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'var(--color-hearth-soot)',
            borderTop: '2px solid var(--color-ink-primary)',
            padding: '16px 20px',
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-pixel"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '16px',
                  color: 'var(--color-hearth-text)',
                  padding: '8px 12px',
                  border: '2px solid var(--color-ink-primary)',
                  backgroundColor: 'var(--color-hearth-charcoal)',
                  boxShadow: '2px 2px 0 var(--color-ink-primary)',
                  borderRadius: '4px',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
