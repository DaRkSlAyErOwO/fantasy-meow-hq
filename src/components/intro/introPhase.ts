import { content } from '@/config/content';

/**
 * The first-visit intro is coordinated through one attribute on <html>:
 *   data-intro="typing"  -> black title card is up, hero layers and text are hidden
 *   data-intro="reveal"  -> title card fades, layers then text animate in
 *   (attribute absent)   -> normal page, no intro
 *
 * INTRO_BOOT_SCRIPT runs inline before the hero is parsed, so the decision is made before
 * first paint (no flash of the finished hero). It also owns the timeline and the skip
 * handling, and the typing itself is pure CSS, so the intro never waits for the app bundle.
 * It only plays on a first visit this session, with reduced motion off.
 */
export const INTRO_ATTR = 'data-intro';
export const INTRO_STORAGE_KEY = 'fm_seen_intro';

// Typing rhythm (ms): ~1s from first paint to the reveal
export const TITLE_START_MS = 60;
export const TITLE_CHAR_MS = 35;
export const PAUSE_AFTER_TITLE_MS = 80;
export const LINE_CHAR_MS = 12;
const HOLD_MS = 100;
// Reveal phase (~1s): card fade + staggered hero layers + copy (keep in sync with the CSS delays)
const REVEAL_MS = 950;

export const LINE_START_MS =
  TITLE_START_MS + content.intro.title.length * TITLE_CHAR_MS + PAUSE_AFTER_TITLE_MS;
const TYPING_DONE_MS = LINE_START_MS + content.intro.line.length * LINE_CHAR_MS + HOLD_MS;

export const INTRO_BOOT_SCRIPT = `(function(){try{
var d=document.documentElement,A='${INTRO_ATTR}';
if(sessionStorage.getItem('${INTRO_STORAGE_KEY}'))return;
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
sessionStorage.setItem('${INTRO_STORAGE_KEY}','1');
d.setAttribute(A,'typing');
function off(){removeEventListener('keydown',skip,true);removeEventListener('pointerdown',skip,true);}
function skip(){off();d.removeAttribute(A);}
addEventListener('keydown',skip,true);
addEventListener('pointerdown',skip,true);
setTimeout(function(){
if(d.getAttribute(A)!=='typing')return;
d.setAttribute(A,'reveal');
setTimeout(function(){off();if(d.getAttribute(A)==='reveal')d.removeAttribute(A);},${REVEAL_MS});
},${TYPING_DONE_MS});
}catch(e){}})();`;
