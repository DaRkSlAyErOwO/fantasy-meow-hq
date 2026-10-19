import React from 'react';
import Image from 'next/image';
import { content } from '@/config/content';
import { PixelSectionHead } from '@/components/pixel/PixelSectionHead';
import { PixelSprite } from '@/components/pixel/PixelSprite';
import { PixelParticles } from '@/components/pixel/PixelParticles';

const { world, whatIsThis, ui } = content;

/** Whiskerwild world chapter (#world). Parchment storybook spread, opening line, three beats, the Crossing, the Arc 1 ending and closing line, the Archmages. */
export const WorldChapter: React.FC = () => (
  <section id="whiskerwild" className="px-section px-section--parchment" aria-labelledby="world-title">
    <span id="world" className="px-anchor" aria-hidden="true" />
    <div className="container">
      <PixelSectionHead eyebrow={world.eyebrow} title={world.title} intro={world.intro} id="world-title" />

      <p className="px-h3 px-h3--lg px-center" data-px-reveal="wipe">
        &ldquo;{world.openingLine}&rdquo;
      </p>

      <div className="px-story" >
        <figure className="px-story__art px-frame px-frame--card" data-px-reveal="dissolve">
          <Image
            src="/assets/web/art/knight-mage-500.webp"
            alt={ui.world.illustrationAlt}
            width={500}
            height={500}
            className="pixelated px-art px-art--story"
          />
          <PixelParticles kind="sparkle" count={8} />
        </figure>
        <div className="px-story__text">
          {world.paragraphs.map((p, i) => (
            <p key={i} className="px-body" data-px-reveal="wipe" style={{ animationDelay: `${i * 120}ms` }}>
              {p}
            </p>
          ))}
        </div>
      </div>

      <ol className="px-beats">
        {whatIsThis.map((item, i) => (
          <li
            key={item.number}
            className="px-beat px-frame px-frame--card px-lift"
            data-px-reveal="dissolve"
            style={{ animationDelay: `${i * 140}ms` }}
          >
            <span className="px-beat__num">{item.number}</span>
            <h3 className="px-h3">{item.title}</h3>
            <p className="px-small">{item.text}</p>
          </li>
        ))}
      </ol>

      <article className="px-crossing px-frame px-frame--gold" data-px-reveal="dissolve" aria-labelledby="crossing-title">
        <div className="px-crossing__icon" aria-hidden="true">
          <PixelSprite name="key" scale={4} />
        </div>
        <div>
          <h3 className="px-h3 px-h3--lg" id="crossing-title">
            {world.theCrossing.title}
          </h3>
          <p className="px-body">{world.theCrossing.body}</p>
          <p className="px-note">{world.theCrossing.framing}</p>
        </div>
      </article>

      <div className="px-center" data-px-reveal="wipe">
        <p className="px-body">{world.ending}</p>
        <p className="px-h3 px-h3--lg">{world.closingLine}</p>
      </div>

      <div className="px-archmages">
        <h3 className="px-h3 px-h3--lg px-center" data-px-reveal="wipe">
          {ui.world.archmagesTitle}
        </h3>
        <ul className="px-archmages__list">
          {world.archmages.map((a, i) => (
            <li
              key={a.name}
              className="px-archmage px-frame px-frame--card px-lift"
              data-px-reveal="dissolve"
              style={{ animationDelay: `${i * 140}ms` }}
            >
              <PixelSprite name="star" scale={3} className="px-archmage__star" />
              <p className="px-archmage__name">
                <strong>{a.name}</strong>, {a.title}
              </p>
              <blockquote className="px-archmage__quote">&ldquo;{a.quote}&rdquo;</blockquote>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
