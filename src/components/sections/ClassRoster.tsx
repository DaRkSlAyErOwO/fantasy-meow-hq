import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { content } from '@/config/content';
import { PixelSectionHead } from '@/components/pixel/PixelSectionHead';
import { PixelSprite } from '@/components/pixel/PixelSprite';

const { classes, ui } = content;

/** The Five Classes (#classes). Party roster of five equal cards. Descriptions only, never stats. */
export const ClassRoster: React.FC = () => (
  <section id="classes" className="px-section px-section--parchment" aria-labelledby="classes-title">
    <div className="container">
      <PixelSectionHead eyebrow={ui.classes.eyebrow} title={ui.classes.title} intro={ui.classes.intro} id="classes-title" />

      <ul className="px-classes">
        {classes.map((c, i) => (
          <li
            key={c.slug}
            className="px-class px-frame px-frame--card px-lift"
            data-px-reveal="dissolve"
            style={{ animationDelay: `${(i % 3) * 120}ms` }}
          >
            <div className="px-class__art">
              <Image src={c.webArt500} alt={c.altText} width={500} height={500} className="pixelated px-art px-art--class" loading="lazy" />
              <span className="px-badge">{c.role}</span>
            </div>
            <h3 className="px-h3">{c.name}</h3>
            <p className="px-lore">&ldquo;{c.loreLine}&rdquo;</p>
            <p className="px-small">{c.flavor}</p>
            <dl className="px-meta">
              <div>
                <dt>{ui.classes.kitLabel}</dt>
                <dd>{c.silhouetteKit}</dd>
              </div>
              {'signatureAbility' in c && c.signatureAbility && (
                <div>
                  <dt>{ui.classes.abilityLabel}</dt>
                  <dd>
                    <strong>{c.signatureAbility.name}:</strong> {c.signatureAbility.description}
                  </dd>
                </div>
              )}
              <div>
                <dt>{ui.classes.affinityLabel}</dt>
                <dd>{c.landAffinity}</dd>
              </div>
            </dl>
            <Link href={`/classes/${c.slug}/`} className="px-btn px-btn--parchment px-btn--block">
              <span>{ui.classes.details(c.name)}</span>
              <PixelSprite name="arrow" scale={2} className="px-btn__arrow" />
            </Link>
          </li>
        ))}
      </ul>

      <div className="px-classnotes" data-px-reveal="wipe">
        <p className="px-small">
          {ui.classes.formulaStart}
          <strong>{ui.classes.formulaBold}</strong>
          {ui.classes.formulaEnd}
        </p>
        <p className="px-note">{ui.classes.tuningNote}</p>
      </div>
    </div>
  </section>
);
