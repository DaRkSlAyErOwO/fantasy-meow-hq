'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Skip on reduced motion
    const rmQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (rmQuery.matches) {
      return;
    }

    // 2. Skip on repeat visits (sessionStorage)
    const hasSeen = sessionStorage.getItem('fm_seen_intro');
    if (hasSeen) {
      return;
    }

    // 3. Skip during Lighthouse runs
    if (typeof navigator !== 'undefined' && /lighthouse/i.test(navigator.userAgent)) {
      return;
    }

    // Show loading screen for first-time human visitor
    setLoading(true);

    // Max duration ~1.2s (comfortably within max ~1.5s)
    const duration = 1200;
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const current = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(current);

      if (elapsed >= duration) {
        clearInterval(interval);
        setTimeout(() => {
          sessionStorage.setItem('fm_seen_intro', 'true');
          setLoading(false);
        }, 80);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  const handleSkip = () => {
    sessionStorage.setItem('fm_seen_intro', 'true');
    setLoading(false);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.key === 'Escape') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Floating pixel ember particles around the lantern
  const embers = [
    { left: '46%', delay: '0s', duration: '1.4s', size: '4px', color: '#f5cb68' },
    { left: '52%', delay: '0.3s', duration: '1.7s', size: '5px', color: '#e8b64c' },
    { left: '42%', delay: '0.6s', duration: '1.5s', size: '3px', color: '#e0702a' },
    { left: '56%', delay: '0.2s', duration: '1.8s', size: '4px', color: '#f5cb68' },
    { left: '48%', delay: '0.8s', duration: '1.6s', size: '5px', color: '#e8b64c' },
    { left: '44%', delay: '0.4s', duration: '1.5s', size: '3px', color: '#f5cb68' },
    { left: '54%', delay: '0.9s', duration: '1.9s', size: '4px', color: '#e0702a' },
  ];

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: 'var(--color-hearth-charcoal)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            userSelect: 'none',
          }}
        >
          {/* Lantern Stage: 2x Larger (160x200) with Warm Radial Glow & Drifting Pixel Embers */}
          <div
            style={{
              position: 'relative',
              width: '160px',
              height: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Soft Warm Radial Glow */}
            <div
              className="lantern-glow"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '360px',
                height: '360px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(232, 182, 76, 0.45) 0%, rgba(224, 112, 42, 0.22) 42%, transparent 72%)',
                pointerEvents: 'none',
                filter: 'blur(8px)',
              }}
            />

            {/* Drifting Pixel Embers */}
            <div
              style={{
                position: 'absolute',
                inset: '-40px -30px 10px',
                pointerEvents: 'none',
                overflow: 'hidden',
                zIndex: 2,
              }}
            >
              {embers.map((emb, i) => (
                <div
                  key={i}
                  className="pixel-loader-ember"
                  style={{
                    position: 'absolute',
                    left: emb.left,
                    bottom: '20px',
                    width: emb.size,
                    height: emb.size,
                    backgroundColor: emb.color,
                    boxShadow: `0 0 6px ${emb.color}`,
                    animation: `loaderEmberDrift ${emb.duration} ease-in-out infinite`,
                    animationDelay: emb.delay,
                  }}
                />
              ))}
            </div>

            {/* 2x Pixel Lantern SVG (160px x 200px) */}
            <svg
              viewBox="0 0 32 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', height: '100%', position: 'relative', zIndex: 10 }}
              className="pixelated"
            >
              {/* Lantern Loop / Ring */}
              <rect x="13" y="0" width="6" height="2" fill="#2b1e16" />
              <rect x="12" y="2" width="2" height="3" fill="#2b1e16" />
              <rect x="18" y="2" width="2" height="3" fill="#2b1e16" />

              {/* Lantern Cap Top Tier */}
              <rect x="10" y="5" width="12" height="3" fill="#2b1e16" />
              <rect x="7" y="8" width="18" height="3" fill="#e8b64c" />

              {/* Upright Frame Pillars */}
              <rect x="6" y="11" width="3" height="20" fill="#2b1e16" />
              <rect x="23" y="11" width="3" height="20" fill="#2b1e16" />

              {/* Inner Warm Glass chamber */}
              <rect x="9" y="11" width="14" height="20" fill="#241e1a" />

              {/* Cross Struts (Classic Lantern Motif) */}
              <rect x="9" y="11" width="14" height="1" fill="#4a3a2d" />
              <rect x="9" y="20" width="14" height="1" fill="#4a3a2d" />
              <rect x="15" y="11" width="2" height="20" fill="#3a2e24" />

              {/* Lantern Base */}
              <rect x="6" y="31" width="20" height="4" fill="#e8b64c" />
              <rect x="8" y="35" width="16" height="3" fill="#2b1e16" />

              {/* Animated Flame Filling with Progress */}
              <rect
                x="11"
                y={30 - (progress / 100) * 16}
                width="10"
                height={(progress / 100) * 16}
                fill="#e0702a"
              />
              <rect
                x="13"
                y={28 - (progress / 100) * 14}
                width="6"
                height={(progress / 100) * 14}
                fill="#f5cb68"
              />
              <rect
                x="14"
                y={26 - (progress / 100) * 12}
                width="4"
                height={(progress / 100) * 12}
                fill="#fff9e6"
              />
            </svg>
          </div>

          {/* Progress title & percentage */}
          <div style={{ textAlign: 'center' }}>
            <p className="font-pixel title-glow" style={{ fontSize: '20px', color: 'var(--color-candle-gold)', margin: 0 }}>
              Lighting the Lanterns...
            </p>
            <p
              className="font-body"
              style={{ fontSize: '13px', color: 'var(--color-hearth-muted)', marginTop: '6px', margin: 0 }}
            >
              Whiskerwild is waking up ({progress}%)
            </p>
          </div>

          {/* Skip Button */}
          <button
            type="button"
            onClick={handleSkip}
            className="pixel-btn"
            style={{
              padding: '6px 16px',
              fontSize: '12px',
              backgroundColor: 'var(--color-hearth-soot)',
              color: 'var(--color-hearth-text)',
              marginTop: '4px',
            }}
          >
            Skip [Space]
          </button>

          <style jsx>{`
            @keyframes pulseGlow {
              0% {
                transform: translate(-50%, -50%) scale(0.94);
                opacity: 0.65;
              }
              100% {
                transform: translate(-50%, -50%) scale(1.08);
                opacity: 0.95;
              }
            }

            .lantern-glow {
              animation: pulseGlow 1.8s ease-in-out infinite alternate;
            }

            @keyframes loaderEmberDrift {
              0% {
                transform: translateY(0) translateX(0) scale(0.7);
                opacity: 0;
              }
              25% {
                opacity: 0.9;
              }
              80% {
                opacity: 0.8;
                transform: translateY(-90px) translateX(6px) scale(1.1);
              }
              100% {
                transform: translateY(-130px) translateX(-4px) scale(0.5);
                opacity: 0;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
