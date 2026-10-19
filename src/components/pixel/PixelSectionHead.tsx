import React from 'react';

interface Props {
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
}

/** Eyebrow chip + pixel-font H2 (>= 40px) + body-font intro. Wipes in with a blocky stepped reveal. */
export const PixelSectionHead: React.FC<Props> = ({ eyebrow, title, intro, id }) => (
  <header className="px-head" data-px-reveal="wipe">
    <span className="px-eyebrow">{eyebrow}</span>
    <h2 className="px-title" id={id}>
      {title}
    </h2>
    {intro && <p className="px-intro">{intro}</p>}
  </header>
);
