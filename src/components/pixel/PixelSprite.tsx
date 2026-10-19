import React from 'react';

/**
 * Tiny pixel sprites drawn as SVG rects (crisp at any integer scale).
 * Each map row is one pixel row; "." is transparent and every other letter is a palette slot
 * styled in pixel-sections.css (.px-c-K, .px-c-G ...), so colors come from tokens.css.
 *   K ink · G candle gold · Y candle glow · O ember · D ember deep · W parchment card
 *   C current text color
 */
const SPRITES = {
  arrow: ['..CC....', '...CC...', 'CCCCCC..', 'CCCCCCC.', 'CCCCCC..', '...CC...', '..CC....'],
  chevron: ['CC.....CC', 'CCC...CCC', '.CCC.CCC.', '..CCCCC..', '...CCC...'],
  cross: ['CC...CC', 'CCC.CCC', '.CCCCC.', '..CCC..', '.CCCCC.', 'CCC.CCC', 'CC...CC'],
  bullet: ['..C..', '.CCC.', 'CCCCC', '.CCC.', '..C..'],
  sparkle: ['..C..', '..C..', 'CCCCC', '..C..', '..C..'],
  pip: ['.KKK.', 'KGGGK', 'KGYGK', 'KGGGK', '.KKK.'],
  pipEmpty: ['.KKK.', 'K...K', 'K...K', 'K...K', '.KKK.'],
  lock: ['..KKKK..', '.K....K.', '.K....K.', 'KKKKKKKK', 'KGGGGGGK', 'KGGKKGGK', 'KGGKKGGK', 'KGGGGGGK', 'KKKKKKKK'],
  key: ['.KKK.......', 'KGGGK......', 'KG.GKKKKKKK', 'KGGGKGGGGGK', '.KKK.KKGKGK', '......K.K.K'],
  flame: [
    '.....O.....',
    '....OO.....',
    '....OOO....',
    '...OOYO..O.',
    '...OYYOO.O.',
    '..OOYYYOOO.',
    '..OYYWYYOO.',
    '.OOYWWWYYO.',
    '.OYYWWWWYO.',
    '..OYWWWYO..',
    '...OOOOO...',
    'KKKKKKKKKKK',
    '.KDDKDDKDK.',
  ],
  castle: [
    'K.K.K...K.K.K',
    'KKKKK...KKKKK',
    'KGGGK.O.KGGGK',
    'KGKGKKOKKGKGK',
    'KGGGGGGGGGGGK',
    'KGGGGKKKGGGGK',
    'KGKGKWWWKGKGK',
    'KGGGKWWWKGGGK',
    'KGGGKWWWKGGGK',
    'KKKKKKKKKKKKK',
  ],
  map: [
    'KKKKKKKKKKKKK',
    'KWWWKGGGKWWWK',
    'KWOWKGGGKWWWK',
    'KWWOKGGGKWOWK',
    'KWWWOOGGKOWWK',
    'KWWWKGOOOWWWK',
    'KWWWKGGGKWWOK',
    'KWWWKGGGKWWWK',
    'KKKKKKKKKKKKK',
  ],
  shield: ['KKKKKKKKK', 'KGGGKGGGK', 'KGGGKGGGK', 'KKKKKKKKK', 'KGGGKGGGK', '.KGGKGGK.', '..KGKGK..', '...KKK...'],
  scroll: ['.KKKKKKK.', 'KWWWWWWWK', '.KWKKKWK.', '.KWWWWWK.', '.KWKKWWK.', '.KWWWWWK.', 'KWWWWWWWK', '.KKKKKKK.'],
  star: ['...Y...', '...Y...', '..YYY..', 'YYYWYYY', '..YYY..', '...Y...', '...Y...'],
  check: ['......CC', '.....CCC', 'CC..CCC.', 'CCCCCC..', '.CCCC...', '..CC....'],
} as const;

export type SpriteName = keyof typeof SPRITES;

interface Props {
  name: SpriteName;
  /** Integer pixel scale (1x, 2x, 3x...) so every sprite pixel stays square */
  scale?: number;
  className?: string;
  title?: string;
}

export const PixelSprite: React.FC<Props> = ({ name, scale = 3, className, title }) => {
  const rows = SPRITES[name];
  const w = Math.max(...rows.map((r) => r.length));
  const h = rows.length;
  const rects: React.ReactNode[] = [];

  rows.forEach((row, y) => {
    // merge horizontal runs of the same color into one rect
    let x = 0;
    while (x < row.length) {
      const c = row[x];
      if (c === '.') {
        x += 1;
        continue;
      }
      let end = x + 1;
      while (end < row.length && row[end] === c) end += 1;
      rects.push(<rect key={`${x}-${y}`} x={x} y={y} width={end - x} height={1} className={`px-c-${c}`} />);
      x = end;
    }
  });

  return (
    <svg
      className={`px-sprite${className ? ` ${className}` : ''}`}
      width={w * scale}
      height={h * scale}
      viewBox={`0 0 ${w} ${h}`}
      shapeRendering="crispEdges"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      focusable="false"
    >
      {title && <title>{title}</title>}
      {rects}
    </svg>
  );
};
