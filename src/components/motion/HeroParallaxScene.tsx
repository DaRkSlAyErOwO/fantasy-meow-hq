'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { EmberCanvas } from './EmberCanvas';

// Back to front. `scroll` = scroll parallax factor, `pointer` = max pointer offset (px),
// `bleed` = how far the layer extends past the frame so offsets never show an edge.
const LAYERS = [
  { src: '/assets/hero/layer-0-sky.png', scroll: 0.1, pointer: 6, bleed: 20 },
  { src: '/assets/hero/layer-1-far.png', scroll: 0.25, pointer: 12, bleed: 25 },
  { src: '/assets/hero/layer-2-mid.png', scroll: 0.5, pointer: 20, bleed: 30 },
  { src: '/assets/hero/layer-3-front.png', scroll: 0.8, pointer: 30, bleed: 35 },
] as const;

// Fixed star positions for a slow twinkle over the sky layer
const STARS = [
  { left: '18%', top: '12%', size: 3, delay: '0s', duration: '4.2s' },
  { left: '30%', top: '16%', size: 4, delay: '1.4s', duration: '5.1s' },
  { left: '42%', top: '22%', size: 3, delay: '2.8s', duration: '4.6s' },
  { left: '12%', top: '28%', size: 3, delay: '0.8s', duration: '5.5s' },
  { left: '64%', top: '8%', size: 4, delay: '2.1s', duration: '4.8s' },
  { left: '78%', top: '14%', size: 3, delay: '3.5s', duration: '5.8s' },
];

/**
 * Four-layer pixel-art hero scene with scroll parallax and (desktop) pointer parallax.
 * Transforms are written straight to the layer elements once per animation frame
 * instead of through React state, so scrolling never re-renders the scene.
 * On a first visit the layers assemble one by one (see components/intro).
 */
export const HeroParallaxScene: React.FC = () => {
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointerQuery = window.matchMedia('(min-width: 768px) and (pointer: fine)');
    let pointerX = 0;
    let pointerY = 0;
    let frame = 0;

    const apply = () => {
      frame = 0;
      const still = reducedQuery.matches;
      const scrollY = window.scrollY;
      // The hero is long gone after ~1.5 viewports; stop moving layers nobody can see
      if (!still && scrollY > window.innerHeight * 1.5) return;
      const usePointer = pointerQuery.matches;

      LAYERS.forEach((layer, i) => {
        const el = layerRefs.current[i];
        if (!el) return;
        if (still) {
          el.style.transform = '';
          return;
        }
        const px = usePointer ? pointerX * layer.pointer : 0;
        const py = usePointer ? pointerY * layer.pointer : 0;
        el.style.transform = `translate3d(${px}px, ${py + scrollY * layer.scroll}px, 0)`;
      });
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!pointerQuery.matches) return;
      pointerX = (e.clientX / window.innerWidth - 0.5) * 2;
      pointerY = (e.clientY / window.innerHeight - 0.5) * 2;
      schedule();
    };

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    reducedQuery.addEventListener('change', schedule);
    apply();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('pointermove', onPointerMove);
      reducedQuery.removeEventListener('change', schedule);
    };
  }, []);

  return (
    <div className="hero-scene" aria-hidden="true">
      {LAYERS.map((layer, i) => (
        <React.Fragment key={layer.src}>
          <div
            ref={(el) => {
              layerRefs.current[i] = el;
            }}
            className="hero-layer"
            style={{ inset: -layer.bleed, zIndex: i * 10, '--layer-i': i } as React.CSSProperties}
          >
            <Image
              src={layer.src}
              alt=""
              width={1920}
              height={1080}
              priority={i === 0}
              className="pixelated hero-layer-img"
            />

            {/* Sky: slow star twinkle */}
            {i === 0 && (
              <div className="hero-fx-wrap hero-intro-fx">
                {STARS.map((star) => (
                  <span
                    key={`${star.left}-${star.top}`}
                    className="hero-star"
                    style={{
                      left: star.left,
                      top: star.top,
                      width: star.size,
                      height: star.size,
                      animationDuration: star.duration,
                      animationDelay: star.delay,
                    }}
                  />
                ))}
              </div>
            )}

            {/* Front: soft flicker over the campfire */}
            {i === LAYERS.length - 1 && (
              <div className="hero-fx-wrap hero-intro-fx">
                <div className="hero-campfire-glow" />
              </div>
            )}
          </div>

          {/* Embers drift between the mid forest and the foreground */}
          {i === 2 && (
            <div className="hero-embers hero-intro-fx">
              <EmberCanvas />
            </div>
          )}
        </React.Fragment>
      ))}

      {/* Fade into the next section, and a left-side fade that keeps the copy legible */}
      <div className="hero-bottom-vignette" />
      <div className="hero-horizontal-fade" />

      <style jsx>{`
        .hero-scene {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
          background-color: #120c15;
        }

        .hero-layer {
          position: absolute;
          transition: transform 0.14s ease-out;
          will-change: transform;
        }

        .hero-embers {
          position: absolute;
          inset: 0;
          z-index: 25;
        }

        .hero-fx-wrap {
          position: absolute;
          inset: 0;
        }

        :global(.hero-layer-img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: bottom center;
        }

        .hero-star {
          position: absolute;
          border-radius: 50%;
          background-color: #ffeec2;
          box-shadow: 0 0 6px rgba(255, 238, 194, 0.9);
          animation-name: twinkleGlow;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }

        .hero-campfire-glow {
          position: absolute;
          left: 65.2%;
          bottom: 18%;
          transform: translate(-50%, 50%);
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 140, 40, 0.45) 0%, rgba(232, 182, 76, 0.22) 40%, transparent 72%);
          z-index: 35;
          animation: fireFlicker 1.8s ease-in-out infinite alternate;
        }

        .hero-bottom-vignette {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 72px;
          background: linear-gradient(to bottom, transparent 0%, rgba(24, 20, 18, 0.55) 55%, var(--color-hearth-charcoal) 100%);
          z-index: 40;
        }

        .hero-horizontal-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(18, 12, 21, 0.94) 0%,
            rgba(18, 12, 21, 0.88) 25%,
            rgba(18, 12, 21, 0.6) 45%,
            rgba(18, 12, 21, 0.25) 65%,
            rgba(18, 12, 21, 0.06) 80%,
            transparent 92%
          );
          z-index: 42;
        }

        /* --- First-visit intro: layers assemble back to front, then the ambient effects --- */
        :global(html[data-intro='typing']) .hero-scene :global(.hero-layer-img),
        :global(html[data-intro='typing']) .hero-intro-fx {
          opacity: 0;
        }

        :global(html[data-intro='reveal']) .hero-scene :global(.hero-layer-img) {
          animation: heroLayerIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: calc(var(--layer-i) * 110ms + 80ms);
        }

        /* Wrappers (not the twinkling/flickering elements) fade, so their own loops keep running */
        :global(html[data-intro='reveal']) .hero-intro-fx {
          animation: heroFxIn 0.4s ease-out 0.5s both;
        }

        @keyframes heroLayerIn {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }

        @keyframes heroFxIn {
          from {
            opacity: 0;
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
            transform: translate(-50%, 50%) scale(1);
          }
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

        @media (max-width: 640px) {
          :global(.hero-layer-img) {
            object-position: 68% bottom;
          }

          .hero-campfire-glow {
            left: 50%;
            bottom: 20%;
            width: 220px;
            height: 220px;
          }

          .hero-horizontal-fade {
            display: none;
          }

          .hero-bottom-vignette {
            height: 56px;
            background: linear-gradient(to bottom, transparent 0%, var(--color-hearth-charcoal) 100%);
          }
        }
      `}</style>
    </div>
  );
};
