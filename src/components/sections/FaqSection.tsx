'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { content } from '@/config/content';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqList = content.faq;

  return (
    <section id="faq" className="faq-section-root">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
          <div style={{ display: 'inline-flex', marginBottom: '12px' }}>
            <span
              className="font-pixel pixel-box-sm"
              style={{
                fontSize: '12px',
                color: 'var(--color-candle-dark)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                backgroundColor: 'var(--color-parchment-card)',
                padding: '4px 12px',
                borderRadius: '4px',
              }}
            >
              Dialogue
            </span>
          </div>

          <h2
            className="font-pixel"
            style={{
              fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
              color: 'var(--color-ink-primary)',
              lineHeight: 1.15,
              marginBottom: '14px',
            }}
          >
            Frequently Asked
          </h2>

          <p
            className="font-body"
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: 'var(--color-ink-secondary)',
              lineHeight: 1.55,
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            Clear answers about Whiskerwild, mint rules, Rest Points, and safety.
          </p>
        </div>

        {/* RPG Dialogue Box Container */}
        <div className="rpg-dialogue-stage">
          {/* Speaker Portrait Column */}
          <div className="dialogue-speaker-col">
            <div className="speaker-avatar-frame">
              <Image
                src="/assets/web/art/archmage-500.webp"
                alt="Whiskerwild Guide speaker portrait"
                fill
                className="pixelated"
                style={{ objectFit: 'cover', imageRendering: 'pixelated' }}
              />
            </div>
            <div className="font-pixel speaker-nametag">
              <span>Whiskerwild Guide</span>
            </div>
            <p className="font-body speaker-quote">
              &ldquo;Ask plainly, and the lantern road will show the way.&rdquo;
            </p>
          </div>

          {/* Accordion Dialogue Boxes */}
          <div className="accordion-dialogue-col" role="region" aria-label="FAQ Accordion">
            {faqList.map((item, idx) => {
              const isOpen = openIndex === idx;
              const buttonId = `faq-btn-${idx}`;
              const panelId = `faq-panel-${idx}`;

              return (
                <div
                  key={idx}
                  className={`dialogue-box-item ${isOpen ? 'is-open' : ''}`}
                >
                  {/* Question Accordion Button */}
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(idx)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        const nextBtn = document.getElementById(`faq-btn-${(idx + 1) % faqList.length}`);
                        nextBtn?.focus();
                      } else if (e.key === 'ArrowUp') {
                        e.preventDefault();
                        const prevBtn = document.getElementById(`faq-btn-${(idx - 1 + faqList.length) % faqList.length}`);
                        prevBtn?.focus();
                      }
                    }}
                    className="font-pixel dialogue-question-btn"
                  >
                    <span className="dialogue-cursor" aria-hidden="true">
                      {isOpen ? '▼' : '▶'}
                    </span>
                    <span className="question-text">{item.question}</span>
                  </button>

                  {/* Speech Bubble Dialogue Answer */}
                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="dialogue-answer-bubble"
                    >
                      <p className="font-body answer-text">{item.answer}</p>
                      <div className="dialogue-prompt-tail" aria-hidden="true">
                        <span className="blinking-caret">▼</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.faq-section-root) {
          position: relative;
          background-color: var(--color-parchment-base);
          padding: 80px 0 100px;
          border-top: 3px solid var(--color-ink-primary);
        }

        :global(.rpg-dialogue-stage) {
          display: flex;
          gap: 36px;
          max-width: 1040px;
          margin: 0 auto;
          align-items: flex-start;
        }

        :global(.dialogue-speaker-col) {
          width: 200px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background-color: var(--color-parchment-card);
          padding: 20px 16px;
          border-radius: 8px;
          border: 3px solid #2b1e16;
          box-shadow: 4px 4px 0 #2b1e16;
          position: sticky;
          top: 90px;
        }

        :global(.speaker-avatar-frame) {
          position: relative;
          width: 120px;
          height: 120px;
          border-radius: 6px;
          overflow: hidden;
          border: 2px solid #2b1e16;
          box-shadow: 2px 2px 0 #2b1e16;
          background-color: var(--color-hearth-soot);
          margin-bottom: 12px;
        }

        :global(.speaker-nametag) {
          font-size: 14px;
          color: var(--color-ink-primary);
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        :global(.speaker-sub) {
          font-size: 10.5px;
          color: var(--color-candle-dark);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        :global(.speaker-quote) {
          font-size: 12px;
          color: var(--color-ink-muted);
          font-style: italic;
          margin: 10px 0 0;
          line-height: 1.4;
        }

        :global(.accordion-dialogue-col) {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        :global(.dialogue-box-item) {
          background-color: var(--color-parchment-card);
          border-radius: 6px;
          border: 3px solid #2b1e16;
          box-shadow: 3px 3px 0 #2b1e16;
          overflow: hidden;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        :global(.dialogue-box-item:hover) {
          transform: translateY(-2px);
          box-shadow: 5px 5px 0 #2b1e16;
        }

        :global(.dialogue-question-btn) {
          width: 100%;
          text-align: left;
          background: transparent;
          border: none;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          font-size: 16px;
          color: var(--color-ink-primary);
          outline: none;
          transition: background-color 0.15s ease;
        }

        :global(.dialogue-question-btn:focus-visible) {
          background-color: rgba(232, 182, 76, 0.2);
        }

        :global(.dialogue-cursor) {
          color: var(--color-candle-dark);
          font-size: 13px;
          flex-shrink: 0;
        }

        :global(.question-text) {
          flex: 1;
          line-height: 1.35;
        }

        :global(.dialogue-answer-bubble) {
          background-color: var(--color-parchment-base);
          border-top: 2px dashed var(--color-parchment-border);
          padding: 18px 22px;
          position: relative;
        }

        :global(.answer-text) {
          font-size: 15px;
          color: var(--color-ink-secondary);
          line-height: 1.6;
          margin: 0;
        }

        :global(.dialogue-prompt-tail) {
          display: flex;
          justify-content: flex-end;
          margin-top: 10px;
        }

        :global(.blinking-caret) {
          font-size: 11px;
          color: var(--color-candle-dark);
          animation: caretBlink 1.2s infinite ease-in-out;
        }

        @keyframes caretBlink {
          0%, 100% { opacity: 0.2; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(2px); }
        }

        @media (max-width: 860px) {
          :global(.rpg-dialogue-stage) {
            flex-direction: column;
            gap: 24px;
          }

          :global(.dialogue-speaker-col) {
            width: 100%;
            position: static;
            flex-direction: row;
            text-align: left;
            gap: 16px;
          }

          :global(.speaker-avatar-frame) {
            width: 80px;
            height: 80px;
            margin-bottom: 0;
            flex-shrink: 0;
          }

          :global(.speaker-quote) {
            display: none;
          }
        }

        @media (max-width: 640px) {
          :global(.faq-section-root) {
            padding: 50px 0 70px;
          }

          :global(.dialogue-question-btn) {
            padding: 14px 16px;
            font-size: 14.5px;
          }

          :global(.dialogue-answer-bubble) {
            padding: 14px 16px;
          }

          :global(.answer-text) {
            font-size: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          :global(.blinking-caret) {
            animation: none !important;
          }
          :global(.dialogue-box-item) {
            transition: none !important;
          }
          :global(.dialogue-box-item:hover) {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};
