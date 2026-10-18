'use client';

import React from 'react';
import { content } from '@/config/content';
import { LINE_CHAR_MS, LINE_START_MS, PAUSE_AFTER_TITLE_MS, TITLE_CHAR_MS, TITLE_START_MS } from './introPhase';

// Each letter's cursor lingers slightly into the next letter's window so it never flickers off
const CURSOR_OVERLAP_MS = 15;

/**
 * Splits text into per-letter spans, each revealed at its own delay (pure CSS typewriter).
 * `--d` is when the letter appears; `--c` is how long the cursor sits after it.
 * The final letter keeps a blinking cursor until the card fades.
 */
const TypedText: React.FC<{ text: string; startMs: number; charMs: number; lastCursorMs: number; isFinal?: boolean }> = ({
  text,
  startMs,
  charMs,
  lastCursorMs,
  isFinal = false,
}) => (
  <>
    {Array.from(text).map((char, i) => {
      const isLast = i === text.length - 1;
      return (
        <span
          key={i}
          className={`intro-char${isLast && isFinal ? ' intro-char-final' : ''}`}
          style={{ '--d': `${startMs + i * charMs}ms`, '--c': `${(isLast ? lastCursorMs : charMs) + CURSOR_OVERLAP_MS}ms` } as React.CSSProperties}
        >
          {char}
        </span>
      );
    })}
  </>
);

/**
 * First-visit title card: "Fantasy Meows" types letter by letter, then the tagline,
 * then the card fades and the hero scene assembles layer by layer.
 * Shown only while html[data-intro] is set; timing and skip live in INTRO_BOOT_SCRIPT.
 * (Client component only because the project styles components with styled-jsx.)
 */
export const IntroOverlay: React.FC = () => {
  const { title, line, skipLabel } = content.intro;

  return (
    <div className="intro-overlay">
      <div className="intro-card" aria-hidden="true">
        <p className="font-pixel title-glow intro-title">
          <TypedText
            text={title}
            startMs={TITLE_START_MS}
            charMs={TITLE_CHAR_MS}
            lastCursorMs={TITLE_CHAR_MS + PAUSE_AFTER_TITLE_MS}
          />
        </p>
        <p className="font-body intro-line">
          <TypedText text={line} startMs={LINE_START_MS} charMs={LINE_CHAR_MS} lastCursorMs={0} isFinal />
        </p>
      </div>

      {/* The boot script skips on any pointer or key press, so this needs no handler */}
      <button type="button" className="pixel-btn intro-skip">
        {skipLabel}
      </button>

      <style jsx>{`
        .intro-overlay {
          display: none;
          position: fixed;
          inset: 0;
          z-index: 99999;
          align-items: center;
          justify-content: center;
          background-color: #120c15; /* same base as the hero sky, so the hand-off is seamless */
          transition: opacity 0.35s ease-out;
          user-select: none;
        }

        :global(html[data-intro]) .intro-overlay {
          display: flex;
        }

        :global(html[data-intro='reveal']) .intro-overlay {
          opacity: 0;
          pointer-events: none;
        }

        .intro-card {
          text-align: center;
          padding: 0 16px;
        }

        .intro-title {
          margin: 0;
          font-size: clamp(1.9rem, 8.5vw, 5rem);
          color: var(--color-hearth-text);
          letter-spacing: 0.02em;
        }

        .intro-line {
          margin: 14px 0 0;
          font-size: clamp(1.05rem, 2.4vw, 1.4rem);
          font-style: italic;
          color: var(--color-candle-glow);
        }

        /* Letters hold their final layout from the start, so the line never re-centres while typing */
        .intro-overlay :global(.intro-char) {
          position: relative;
          white-space: pre-wrap; /* keep spaces as letters, but still allow wrapping */
          opacity: 0;
        }

        :global(html[data-intro]) .intro-overlay :global(.intro-char) {
          animation: introCharIn 1ms linear var(--d) forwards;
        }

        /* Cursor sits after the newest letter for --c, then moves on */
        .intro-overlay :global(.intro-char)::after {
          content: '';
          position: absolute;
          left: 100%;
          top: 0.12em;
          width: 0.45em;
          height: 0.85em;
          margin-left: 0.06em;
          background-color: var(--color-candle-gold);
          opacity: 0;
        }

        :global(html[data-intro]) .intro-overlay :global(.intro-char)::after {
          animation: introCursorOn var(--c) steps(1) var(--d);
        }

        :global(html[data-intro]) .intro-overlay :global(.intro-char-final)::after {
          animation: introCursorBlink 0.8s steps(1) var(--d) infinite;
        }

        .intro-skip {
          position: absolute;
          right: 24px;
          bottom: 24px;
          padding: 6px 14px;
          font-size: 13px;
          background-color: var(--color-hearth-soot);
          color: var(--color-hearth-text);
        }

        @keyframes introCharIn {
          to {
            opacity: 1;
          }
        }

        @keyframes introCursorOn {
          0%,
          100% {
            opacity: 1;
          }
        }

        @keyframes introCursorBlink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
