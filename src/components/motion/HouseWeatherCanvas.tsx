'use client';

import React, { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface HouseWeatherCanvasProps {
  slug: string;
}

export const HouseWeatherCanvas: React.FC<HouseWeatherCanvasProps> = ({ slug }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let isVisible = true;
    let isTabActive = true;
    let w = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let h = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      w = canvas.width = canvas.parentElement.clientWidth;
      h = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          isVisible = e.isIntersecting;
          if (isVisible && isTabActive) {
            cancelAnimationFrame(animId);
            render();
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    const handleVisibility = () => {
      isTabActive = !document.hidden;
      if (isTabActive && isVisible) {
        cancelAnimationFrame(animId);
        render();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    // Weather elements tailored to the 6 House types
    // 1. Circle of Whisk: candle flicker (warm glowing candle sparks)
    // 2. Pawguard: shield glint (sharp diamond gleams and metallic flash sparkles)
    // 3. Rootpads: spores (bioluminescent green/amber forest spores swaying)
    // 4. Emberkin: embers (crackling fire embers rising upward)
    // 5. Rimewhisper: snow (crisp falling pixel snowflakes)
    // 6. Voidpurr: starfield (slowly twinkling celestial stars/cosmic nodes)

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      alpha: number;
      color: string;
      wobble: number;
      extra?: number; // used for glint lifetime or twinkle phase
    }

    const particles: Particle[] = [];
    const count = slug === 'pawguard' ? 12 : 36;

    for (let i = 0; i < count; i++) {
      let color = '#fff';
      let size = 2;
      let speedY = 0;
      let speedX = 0;

      if (slug === 'circle-of-whisk') {
        // Candle flicker: soft warm gold particles drifting up
        const palette = ['#ffeec2', '#f5cb68', '#e8b64c', '#e0702a'];
        color = palette[Math.floor(Math.random() * palette.length)];
        size = Math.random() * 3 + 1.5;
        speedY = -(Math.random() * 0.7 + 0.3);
        speedX = (Math.random() - 0.5) * 0.3;
      } else if (slug === 'pawguard') {
        // Shield glint: metallic gleam bursts
        const palette = ['#ffffff', '#c39a4a', '#8ea6c4', '#f5ecd8'];
        color = palette[Math.floor(Math.random() * palette.length)];
        size = Math.random() * 4 + 2;
      } else if (slug === 'rootpads') {
        // Spores: green & amber forest spores drifting gently down and swaying
        const palette = ['#6bb354', '#8ebf4b', '#f2d65a', '#c7db6b'];
        color = palette[Math.floor(Math.random() * palette.length)];
        size = Math.random() * 2.5 + 1;
        speedY = Math.random() * 0.4 + 0.2;
        speedX = (Math.random() - 0.5) * 0.3;
      } else if (slug === 'emberkin') {
        // Embers: crackling warm fire embers rising
        const palette = ['#ff8c28', '#e0702a', '#f5cb68', '#b8521a'];
        color = palette[Math.floor(Math.random() * palette.length)];
        size = Math.random() * 3 + 1.5;
        speedY = -(Math.random() * 1.1 + 0.5);
        speedX = (Math.random() - 0.5) * 0.5;
      } else if (slug === 'rimewhisper') {
        // Snow: crisp pixel snowflakes gently falling
        const palette = ['#ffffff', '#eef5f8', '#c0dcf2', '#a0c4e8'];
        color = palette[Math.floor(Math.random() * palette.length)];
        size = Math.random() * 2.8 + 1.2;
        speedY = Math.random() * 0.9 + 0.4;
        speedX = Math.random() * 0.3 - 0.15;
      } else {
        // Voidpurr: starfield twinkling celestial nodes
        const palette = ['#ffffff', '#d6bbfb', '#9a7ae0', '#c4b5fd'];
        color = palette[Math.floor(Math.random() * palette.length)];
        size = Math.random() * 2.5 + 1;
      }

      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size,
        speedY,
        speedX,
        alpha: Math.random() * 0.8 + 0.2,
        color,
        wobble: Math.random() * Math.PI * 2,
        extra: Math.random() * 100,
      });
    }

    const render = () => {
      if (!isVisible || !isTabActive) return;

      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        p.wobble += 0.03;

        if (slug === 'pawguard') {
          // Shield glint: cross sparkle appearing and fading
          p.extra = (p.extra || 0) + 1;
          if (p.extra > 80) {
            p.x = Math.random() * (w - 40) + 20;
            p.y = Math.random() * (h - 40) + 20;
            p.extra = 0;
          }
          const progress = (p.extra || 0) / 80;
          const glintAlpha = Math.sin(progress * Math.PI);

          if (glintAlpha > 0.05) {
            ctx.save();
            ctx.fillStyle = p.color;
            ctx.globalAlpha = glintAlpha;
            ctx.translate(p.x, p.y);
            // Draw diamond glint sparkle
            ctx.beginPath();
            ctx.moveTo(0, -p.size * 2);
            ctx.lineTo(p.size * 0.6, 0);
            ctx.lineTo(0, p.size * 2);
            ctx.lineTo(-p.size * 0.6, 0);
            ctx.closePath();
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(-p.size * 2, 0);
            ctx.lineTo(0, p.size * 0.6);
            ctx.lineTo(p.size * 2, 0);
            ctx.lineTo(0, -p.size * 0.6);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
          }
        } else if (slug === 'voidpurr') {
          // Starfield twinkle
          p.extra = (p.extra || 0) + 0.04;
          const twinkleAlpha = 0.25 + 0.75 * (0.5 + 0.5 * Math.sin(p.extra));
          ctx.save();
          ctx.fillStyle = p.color;
          ctx.globalAlpha = twinkleAlpha;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        } else {
          // Particle motion (candle flicker, spores, embers, snow)
          p.y += p.speedY;
          p.x += p.speedX + Math.sin(p.wobble) * 0.4;

          // Boundary wrapping
          if (p.y < -10) p.y = h + 10;
          if (p.y > h + 10) p.y = -10;
          if (p.x < -10) p.x = w + 10;
          if (p.x > w + 10) p.x = -10;

          ctx.save();
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;

          if (slug === 'rimewhisper') {
            // Square pixel snowflake
            ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
          } else {
            // Circle soft glow particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('resize', handleResize);
    };
  }, [slug, reducedMotion]);

  if (reducedMotion) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 2,
      }}
    />
  );
};
