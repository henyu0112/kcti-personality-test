// A small set of line icons (24 x 24, drawn with strokes in the current text colour), used
// where emoji would feel repetitive. Each personality names its icon in data/personalities.js.
// Add an icon by adding an entry here: a list of [tag, attributes] shapes.
export const ICON_SHAPES = {
  'help-circle': [
    ['circle', { cx: 12, cy: 12, r: 10 }],
    ['path', { d: 'M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3' }],
    ['path', { d: 'M12 17h.01' }],
  ],
  'alert-triangle': [
    ['path', { d: 'm21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3z' }],
    ['path', { d: 'M12 9v4' }],
    ['path', { d: 'M12 17h.01' }],
  ],
  zap: [['path', { d: 'M13 2 3 14h9l-1 8 10-12h-9l1-8z' }]],
  'message-dots': [
    ['path', { d: 'M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z' }],
    ['path', { d: 'M8.5 12h.01' }],
    ['path', { d: 'M12 12h.01' }],
    ['path', { d: 'M15.5 12h.01' }],
  ],
  smirk: [
    ['circle', { cx: 12, cy: 12, r: 10 }],
    ['path', { d: 'M8 15c2 1.5 5 1.5 8-1' }],
    ['path', { d: 'M9 9h.01' }],
    ['path', { d: 'M15 9h.01' }],
  ],
  coffee: [
    ['path', { d: 'M17 8h1a4 4 0 1 1 0 8h-1' }],
    ['path', { d: 'M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z' }],
    ['path', { d: 'M6 2v2' }],
    ['path', { d: 'M10 2v2' }],
    ['path', { d: 'M14 2v2' }],
  ],
  tag: [
    ['path', { d: 'M12 2H4a2 2 0 0 0-2 2v8l9.3 9.3a2 2 0 0 0 2.8 0l6.6-6.6a2 2 0 0 0 0-2.8z' }],
    ['circle', { cx: 7.5, cy: 7.5, r: 1.2 }],
  ],
  blush: [
    ['circle', { cx: 12, cy: 12, r: 10 }],
    ['path', { d: 'M7.5 10c.8 1.2 2.2 1.2 3 0' }],
    ['path', { d: 'M13.5 10c.8 1.2 2.2 1.2 3 0' }],
    ['path', { d: 'M10.5 16h3' }],
    ['path', { d: 'M5.5 13.5h2' }],
    ['path', { d: 'M16.5 13.5h2' }],
  ],
  headphones: [
    ['path', { d: 'M3 14v-2a9 9 0 0 1 18 0v2' }],
    ['path', { d: 'M21 19a2 2 0 0 1-2 2h-1v-7h3z' }],
    ['path', { d: 'M3 19a2 2 0 0 0 2 2h1v-7H3z' }],
  ],
  'shield-check': [
    ['path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' }],
    ['path', { d: 'm9 12 2 2 4-4' }],
  ],
  lightbulb: [
    ['path', { d: 'M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5' }],
    ['path', { d: 'M9 18h6' }],
    ['path', { d: 'M10 22h4' }],
  ],
  ellipsis: [
    ['circle', { cx: 5, cy: 12, r: 1.6 }],
    ['circle', { cx: 12, cy: 12, r: 1.6 }],
    ['circle', { cx: 19, cy: 12, r: 1.6 }],
  ],
  eye: [
    ['path', { d: 'M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z' }],
    ['circle', { cx: 12, cy: 12, r: 3 }],
  ],
  'frown-angry': [
    ['circle', { cx: 12, cy: 12, r: 10 }],
    ['path', { d: 'm7.5 8.5 3 1.5' }],
    ['path', { d: 'm16.5 8.5-3 1.5' }],
    ['path', { d: 'M8 16.5c1.2-1.6 6.8-1.6 8 0' }],
    ['path', { d: 'M9 12.5h.01' }],
    ['path', { d: 'M15 12.5h.01' }],
  ],
  ear: [
    ['path', { d: 'M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0' }],
    ['path', { d: 'M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4' }],
  ],
  'trending-up': [
    ['path', { d: 'm22 7-8.5 8.5-5-5L2 17' }],
    ['path', { d: 'M16 7h6v6' }],
  ],
  clock: [
    ['circle', { cx: 12, cy: 12, r: 10 }],
    ['path', { d: 'M12 6v6l4 2' }],
  ],
  star: [['polygon', { points: '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26' }]],
  ban: [
    ['circle', { cx: 12, cy: 12, r: 10 }],
    ['path', { d: 'm4.9 4.9 14.2 14.2' }],
  ],
  sliders: [
    ['path', { d: 'M4 6h8' }],
    ['path', { d: 'M16 6h4' }],
    ['circle', { cx: 14, cy: 6, r: 2 }],
    ['path', { d: 'M4 12h2' }],
    ['path', { d: 'M10 12h10' }],
    ['circle', { cx: 8, cy: 12, r: 2 }],
    ['path', { d: 'M4 18h9' }],
    ['path', { d: 'M17 18h3' }],
    ['circle', { cx: 15, cy: 18, r: 2 }],
  ],
  x: [
    ['path', { d: 'M18 6 6 18' }],
    ['path', { d: 'm6 6 12 12' }],
  ],
  lock: [
    ['rect', { x: 4, y: 11, width: 16, height: 10, rx: 2 }],
    ['path', { d: 'M8 11V7a4 4 0 0 1 8 0v4' }],
  ],
};

const SVG_NS = 'http://www.w3.org/2000/svg';

function setAttributes(element, attributes) {
  for (const [name, value] of Object.entries(attributes)) element.setAttribute(name, value);
}

/** An <svg> element for the named icon. Colour comes from the surrounding text colour. */
export function icon(name, { size = 24 } = {}) {
  const shapes = ICON_SHAPES[name];
  if (!shapes) throw new Error(`Unknown icon "${name}"`);

  const svg = document.createElementNS(SVG_NS, 'svg');
  setAttributes(svg, {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': 2,
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'aria-hidden': 'true',
    focusable: 'false',
  });

  for (const [tag, attributes] of shapes) {
    const shape = document.createElementNS(SVG_NS, tag);
    setAttributes(shape, attributes);
    svg.append(shape);
  }
  return svg;
}
