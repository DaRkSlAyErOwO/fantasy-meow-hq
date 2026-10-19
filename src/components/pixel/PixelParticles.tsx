import React from 'react';

type Kind = 'ember' | 'star' | 'sparkle';

interface Props {
  kind: Kind;
  count?: number;
  className?: string;
}

/**
 * Decorative pixel particles (square blocks), pure CSS. Positions come from a fixed
 * pseudo-random sequence so server and client markup always match.
 * Hidden entirely under prefers-reduced-motion (see pixel-sections.css).
 */
export const PixelParticles: React.FC<Props> = ({ kind, count = 14, className }) => {
  const items = Array.from({ length: count }, (_, i) => {
    const x = (i * 37 + 11) % 100;
    const y = (i * 53 + 7) % 100;
    const delay = ((i * 7) % 10) * 0.35;
    const size = i % 3 === 0 ? 8 : 4;
    return { x, y, delay, size };
  });

  return (
    <div className={`px-particles px-particles--${kind}${className ? ` ${className}` : ''}`} aria-hidden="true">
      {items.map((p, i) => (
        <span
          key={i}
          className="px-particle"
          style={
            {
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};
