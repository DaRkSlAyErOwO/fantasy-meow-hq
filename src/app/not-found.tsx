import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { content } from '@/config/content';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: "This path isn't on the map yet.",
};

export default function NotFound() {
  const nf = content.notFound;

  return (
    <>
      <Header />
      <main
        id="main-content"
        style={{
          backgroundColor: 'var(--color-parchment-base)',
          minHeight: 'calc(100vh - 74px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 20px',
        }}
      >
        <div
          className="pixel-box"
          style={{
            maxWidth: '560px',
            width: '100%',
            textAlign: 'center',
            padding: '40px 32px',
            borderRadius: '8px',
            border: '3px solid #2b1e16',
            boxShadow: '5px 5px 0 #2b1e16',
            backgroundColor: 'var(--color-parchment-card)',
          }}
        >
          <div style={{ display: 'inline-flex', marginBottom: '14px' }}>
            <span
              className="font-pixel pixel-box-sm"
              style={{
                fontSize: '11px',
                color: 'var(--color-candle-dark)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                backgroundColor: 'var(--color-parchment-base)',
                padding: '4px 12px',
                borderRadius: '4px',
              }}
            >
              {nf.eyebrow}
            </span>
          </div>

          <h1
            className="font-pixel"
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
              color: 'var(--color-ink-primary)',
              lineHeight: 1.2,
              marginBottom: '16px',
            }}
          >
            {nf.title}
          </h1>

          <p
            className="font-body"
            style={{
              fontSize: '16px',
              color: 'var(--color-ink-secondary)',
              lineHeight: 1.6,
              marginBottom: '28px',
            }}
          >
            {nf.text}
          </p>

          <Link
            href="/"
            className="pixel-btn"
            style={{
              backgroundColor: 'var(--color-candle-gold)',
              color: 'var(--color-ink-primary)',
              fontSize: '14px',
              padding: '10px 24px',
              textDecoration: 'none',
            }}
          >
            &larr; {nf.cta}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
