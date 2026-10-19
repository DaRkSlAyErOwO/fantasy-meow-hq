'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { content } from '@/config/content';
import { PixelSectionHead } from '@/components/pixel/PixelSectionHead';
import { PixelSprite } from '@/components/pixel/PixelSprite';
import { PixelParticles } from '@/components/pixel/PixelParticles';

const { faq, ui } = content;

/**
 * FAQ (#faq) as an RPG dialogue box spoken by the Whiskerwild Guide.
 * Accordion: one answer open at a time, first open by default. Buttons carry aria-expanded /
 * aria-controls; Up/Down/Home/End move between questions. All answers stay in the static HTML.
 */
export const FaqDialogue: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  const focusQuestion = (i: number) => document.getElementById(`faq-q-${i}`)?.focus();

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const n = faq.length;
    const map: Record<string, number> = { ArrowDown: (i + 1) % n, ArrowUp: (i - 1 + n) % n, Home: 0, End: n - 1 };
    if (e.key in map) {
      e.preventDefault();
      focusQuestion(map[e.key]);
    }
  };

  return (
    <section id="faq" className="px-section px-section--night" aria-labelledby="faq-title">
      <div className="container px-rel">
        <PixelSectionHead eyebrow={ui.faq.eyebrow} title={ui.faq.title} intro={ui.faq.intro} id="faq-title" />

        <div className="px-dialogue">
          <aside className="px-guide" data-px-reveal="dissolve">
            <div className="px-guide__portrait px-frame px-frame--card">
              <Image
                src="/assets/web/art/archmage-500.webp"
                alt={ui.faq.speakerAlt}
                width={500}
                height={500}
                className="pixelated px-art px-art--guide"
                loading="lazy"
              />
              <PixelParticles kind="sparkle" count={6} />
            </div>
            <p className="px-guide__name px-frame px-frame--gold">{ui.faq.speaker}</p>
          </aside>

          <div className="px-faq">
            {faq.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.question} className={`px-faq__item px-frame px-frame--card${isOpen ? ' is-open' : ''}`}>
                  <h3 className="px-faq__h">
                    <button
                      type="button"
                      id={`faq-q-${i}`}
                      className="px-faq__q"
                      aria-expanded={isOpen}
                      aria-controls={`faq-a-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      onKeyDown={(e) => onKeyDown(e, i)}
                    >
                      <PixelSprite name="arrow" scale={2} className="px-faq__cursor" />
                      <span className="px-faq__text">{item.question}</span>
                      <PixelSprite name="chevron" scale={2} className="px-faq__chev" />
                    </button>
                  </h3>
                  <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className="px-faq__a" hidden={!isOpen}>
                    <div className="px-faq__a-inner">
                      <p className="px-small">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            <p className="px-fineprint px-fineprint--night px-fineprint--left">{ui.faq.closing}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
