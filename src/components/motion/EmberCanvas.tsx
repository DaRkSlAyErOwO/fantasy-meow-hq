'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  speedX: number;
  wobbleSpeed: number;
  wobbleDistance: number;
  wobbleOffset: number;
  alpha: number;
  maxAlpha: number;
  color: string;
}

export const EmberCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let isTabActive = true;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Mouse coordinates for desktop wind deflection (tilt max 4 deg equivalent)
    const mouse = { x: -1000, y: -1000, isDesktop: false };

    const checkDesktop = () => {
      mouse.isDesktop = window.innerWidth >= 768 && window.matchMedia('(pointer: fine)').matches;
    };
    checkDesktop();

    const handleMouseMove = (e: MouseEvent) => {
      if (!mouse.isDesktop) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', checkDesktop);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Colors: Warm embers (#e0702a, #e8b64c, #f5cb68, #b8521a)
    const emberColors = ['#e0702a', '#e8b64c', '#f5cb68', '#f2d65a', '#b8521a'];

    const particleCount = 35;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        speedY: -(Math.random() * 0.6 + 0.25),
        speedX: (Math.random() - 0.5) * 0.3,
        wobbleSpeed: Math.random() * 0.02 + 0.01,
        wobbleDistance: Math.random() * 1.5 + 0.5,
        wobbleOffset: Math.random() * Math.PI * 2,
        alpha: Math.random() * 0.7 + 0.2,
        maxAlpha: Math.random() * 0.6 + 0.3,
        color: emberColors[Math.floor(Math.random() * emberColors.length)],
      });
    }

    // Pause when off-screen using IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && isTabActive) {
            cancelAnimationFrame(animationFrameId);
            render();
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // Pause when tab is hidden
    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
      if (isTabActive && isVisible) {
        cancelAnimationFrame(animationFrameId);
        render();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const render = () => {
      if (!isVisible || !isTabActive) return;

      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.wobbleOffset += p.wobbleSpeed;
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.wobbleOffset) * p.wobbleDistance;

        // Desktop mouse gentle deflection
        if (mouse.isDesktop && mouse.x > 0) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const force = (120 - dist) / 120;
            p.x += (dx / dist) * force * 1.2;
            p.y += (dy / dist) * force * 1.2;
          }
        }

        // Reset particle when out of bounds
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Render particle with glow
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', checkDesktop);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
};
