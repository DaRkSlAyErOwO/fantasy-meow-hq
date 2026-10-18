'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { EmberCanvas } from './EmberCanvas';

export const HeroParallaxScene: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion
    const rmQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(rmQuery.matches);
    const handleRmChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    rmQuery.addEventListener('change', handleRmChange);

    // Check desktop
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768 && window.matchMedia('(pointer: fine)').matches);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    // Scroll listener for parallax
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Pointer move for desktop pointer parallax
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDesktop || reducedMotion) return;
      const { innerWidth, innerHeight } = window;
      const nx = (e.clientX / innerWidth - 0.5) * 2;
      const ny = (e.clientY / innerHeight - 0.5) * 2;
      setPointer({ x: nx, y: ny });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      rmQuery.removeEventListener('change', handleRmChange);
      window.removeEventListener('resize', checkDesktop);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDesktop, reducedMotion]);

  // Speeds: 0.1 (sky), 0.25 (far), 0.5 (mid), 0.8 (front)
  // Pointer offsets: max 6px, 12px, 20px, 30px
  const getTransform = (scrollSpeed: number, maxPointerOffset: number) => {
    if (reducedMotion) return 'none';
    const py = isDesktop ? pointer.y * maxPointerOffset : 0;
    const px = isDesktop ? pointer.x * maxPointerOffset : 0;
    const sy = scrollY * scrollSpeed;
    return `translate3d(${px}px, ${py + sy}px, 0)`;
  };

  // Fixed star positions for gentle slow twinkle
  const stars = [
    { left: '18%', top: '12%', size: '3px', delay: '0s', duration: '4.2s' },
    { left: '30%', top: '16%', size: '4px', delay: '1.4s', duration: '5.1s' },
    { left: '42%', top: '22%', size: '3px', delay: '2.8s', duration: '4.6s' },
    { left: '12%', top: '28%', size: '3px', delay: '0.8s', duration: '5.5s' },
    { left: '64%', top: '8%', size: '4px', delay: '2.1s', duration: '4.8s' },
    { left: '78%', top: '14%', size: '3px', delay: '3.5s', duration: '5.8s' },
  ];

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        backgroundColor: '#120c15',
      }}
    >
      {/* -------------------------------------------------------------
          LAYER 0: SKY (Parallax: 0.1 scroll, max 6px pointer)
          ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          inset: '-20px',
          transform: getTransform(0.1, 6),
          transition: reducedMotion ? 'none' : 'transform 0.12s ease-out',
          zIndex: 0,
        }}
      >
        <Image
          src="/assets/hero/layer-0-sky.png"
          alt=""
          width={1920}
          height={1080}
          priority
          className="pixelated hero-layer-img"
        />

        {/* Slow Twinkle on Stars (Disabled under reduced-motion) */}
        {!reducedMotion &&
          stars.map((star, idx) => (
            <div
              key={idx}
              className="star-twinkle"
              style={{
                position: 'absolute',
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                backgroundColor: '#ffeec2',
                borderRadius: '50%',
                boxShadow: '0 0 6px rgba(255, 238, 194, 0.9)',
                animation: `twinkleGlow ${star.duration} ease-in-out infinite alternate`,
                animationDelay: star.delay,
              }}
            />
          ))}
      </div>

      {/* -------------------------------------------------------------
          LAYER 1: FAR (Mountains, Valley, Castle; Parallax: 0.25, max 12px)
          ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          inset: '-25px',
          transform: getTransform(0.25, 12),
          transition: reducedMotion ? 'none' : 'transform 0.14s ease-out',
          zIndex: 10,
        }}
      >
        <Image
          src="/assets/hero/layer-1-far.png"
          alt=""
          width={1920}
          height={1080}
          className="pixelated hero-layer-img"
        />
      </div>

      {/* -------------------------------------------------------------
          LAYER 2: MID (Forest sides, Lanterns, Path; Parallax: 0.5, max 20px)
          ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          inset: '-30px',
          transform: getTransform(0.5, 20),
          transition: reducedMotion ? 'none' : 'transform 0.16s ease-out',
          zIndex: 20,
        }}
      >
        <Image
          src="/assets/hero/layer-2-mid.png"
          alt=""
          width={1920}
          height={1080}
          className="pixelated hero-layer-img"
        />
      </div>

      {/* -------------------------------------------------------------
          EMBER CANVAS (Between Layer 2 and Layer 3)
          ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 25,
        }}
      >
        <EmberCanvas />
      </div>

      {/* -------------------------------------------------------------
          LAYER 3: FRONT (Campfire, 3 Cats, Mushrooms; Parallax: 0.8, max 30px)
          ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          inset: '-35px',
          transform: getTransform(0.8, 30),
          transition: reducedMotion ? 'none' : 'transform 0.18s ease-out',
          zIndex: 30,
        }}
      >
        <Image
          src="/assets/hero/layer-3-front.png"
          alt=""
          width={1920}
          height={1080}
          className="pixelated hero-layer-img"
        />

        {/* Soft Flicker Glow over the Campfire */}
        <div
          className={`hero-campfire-glow ${reducedMotion ? '' : 'campfire-flicker'}`}
          style={{
            opacity: reducedMotion ? 0.7 : undefined,
          }}
        />
      </div>

      {/* -------------------------------------------------------------
          BOTTOM VIGNETTE (Fades smoothly into next section / background)
          ------------------------------------------------------------- */}
      <div
        className="hero-bottom-vignette"
      />

      {/* -------------------------------------------------------------
          SMOOTH HORIZONTAL FADE (Desktop only: No seam at ~60%)
          Seamless gradient from solid dark on left across to transparent
          ------------------------------------------------------------- */}
      <div
        className="hero-horizontal-fade"
      />

      <style jsx>{`
        :global(.hero-layer-img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: bottom center;
        }

        :global(.hero-campfire-glow) {
          position: absolute;
          left: 65.2%;
          bottom: 18%;
          transform: translate(-50%, 50%);
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 140, 40, 0.45) 0%, rgba(232, 182, 76, 0.22) 40%, transparent 72%);
          pointer-events: none;
          z-index: 35;
        }

        :global(.hero-bottom-vignette) {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 72px;
          background: linear-gradient(to bottom, transparent 0%, rgba(24, 20, 18, 0.55) 55%, var(--color-hearth-charcoal) 100%);
          pointer-events: none;
          z-index: 40;
        }

        :global(.hero-horizontal-fade) {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(18, 12, 21, 0.94) 0%,
            rgba(18, 12, 21, 0.88) 25%,
            rgba(18, 12, 21, 0.6) 45%,
            rgba(18, 12, 21, 0.25) 65%,
            rgba(18, 12, 21, 0.06) 80%,
            transparent 92%
          );
          pointer-events: none;
          z-index: 42;
        }

        @media (max-width: 640px) {
          :global(.hero-layer-img) {
            object-position: 68% bottom !important;
          }

          :global(.hero-campfire-glow) {
            left: 50% !important;
            bottom: 20% !important;
            width: 220px !important;
            height: 220px !important;
          }

          :global(.hero-horizontal-fade) {
            display: none !important;
          }

          :global(.hero-bottom-vignette) {
            height: 56px;
            background: linear-gradient(to bottom, transparent 0%, var(--color-hearth-charcoal) 100%);
          }
        }

        @keyframes fireFlicker {
          0% {
            opacity: 0.65;
            transform: translate(-50%, 50%) scale(0.96);
          }
          20% {
            opacity: 0.9;
            transform: translate(-49.5%, 49.5%) scale(1.04);
          }
          40% {
            opacity: 0.7;
            transform: translate(-50.5%, 50.5%) scale(0.98);
          }
          65% {
            opacity: 0.98;
            transform: translate(-50%, 50%) scale(1.08);
          }
          85% {
            opacity: 0.75;
            transform: translate(-50.2%, 49.8%) scale(1.02);
          }
          100% {
            opacity: 0.85;
            transform: translate(-50%, 50%) scale(1.0);
          }
        }

        .campfire-flicker {
          animation: fireFlicker 1.8s ease-in-out infinite alternate;
        }

        @keyframes twinkleGlow {
          0% {
            opacity: 0.2;
            transform: scale(0.75);
          }
          50% {
            opacity: 1;
            transform: scale(1.25);
          }
          100% {
            opacity: 0.35;
            transform: scale(0.9);
          }
        }
      `}</style>
    </div>
  );
};
