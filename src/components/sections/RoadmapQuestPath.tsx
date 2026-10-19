import React from 'react';
import { content } from '@/config/content';
import { PixelSectionHead } from '@/components/pixel/PixelSectionHead';
import { PixelSprite } from '@/components/pixel/PixelSprite';
import { PixelParticles } from '@/components/pixel/PixelParticles';

const { roadmap, ui } = content;

/**
 * Roadmap (#roadmap) as a pixel quest path. Every node looks the same (no "current stage",
 * no progress bar, no dates); every entry reads "Status: TBA".
 */
export const RoadmapQuestPath: React.FC = () => (
  <section id="roadmap" className="px-section px-section--night" aria-labelledby="roadmap-title">
    <PixelParticles kind="ember" count={18} />
    <div className="container px-rel">
      <PixelSectionHead eyebrow={ui.roadmap.eyebrow} title={ui.roadmap.title} intro={roadmap.intro} id="roadmap-title" />

      <div className="px-quest">
        <div className="px-quest__path" data-px-reveal="drop" aria-hidden="true" />
        <ol className="px-quest__list">
          {roadmap.phases.map((p, i) => (
            <li key={p.phase} className={`px-quest__stop ${i % 2 ? 'is-right' : 'is-left'}`}>
              <span className="px-quest__node" data-px-reveal="pop" aria-hidden="true">
                <PixelSprite name="sparkle" scale={2} />
              </span>
              <article className="px-quest__card px-frame px-frame--card px-lift" data-px-reveal="dissolve">
                <p className="px-quest__phase">
                  {ui.roadmap.phaseLabel} {p.phase}
                </p>
                <h3 className="px-h3">{p.name}</h3>
                <p className="px-chip px-chip--muted">{ui.roadmap.statusLabel}</p>
                <ul className="px-bullets">
                  {p.items.map((item) => (
                    <li key={item}>
                      <PixelSprite name="bullet" scale={2} className="px-bullets__icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>

      <p className="px-fineprint px-fineprint--night">{roadmap.footnote}</p>
    </div>
  </section>
);
