'use client';

import { useEffect } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

/**
 * One observer for every [data-px-reveal] element on the page.
 * Only elements that start below the fold are hidden (state "pending"), so nothing a visitor
 * can already see ever blinks out. Without JS, or with reduced motion, everything is simply shown.
 * Variants (CSS in pixel-sections.css): "dissolve" (dither-block mask), "wipe" (stepped clip),
 * "drop" (stepped top-to-bottom clip, used for the roadmap path), "pop" (stepped scale).
 */
export const PixelRevealRoot: React.FC = () => {
  useEffect(() => {
    if (window.matchMedia(QUERY).matches || !('IntersectionObserver' in window)) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-px-reveal]'));
    const vh = window.innerHeight;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          observer.unobserve(el);
          el.dataset.pxState = 'play';
          const done = () => {
            el.dataset.pxState = 'done';
            el.removeEventListener('animationend', onEnd);
          };
          // ignore animationend bubbling up from children (particles, sprites)
          const onEnd = (e: AnimationEvent) => {
            if (e.target === el) done();
          };
          el.addEventListener('animationend', onEnd);
          // safety net in case animationend never fires (tab hidden, etc.)
          window.setTimeout(done, 1600);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );

    els.forEach((el) => {
      if (el.getBoundingClientRect().top > vh) {
        el.dataset.pxState = 'pending';
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return null;
};
