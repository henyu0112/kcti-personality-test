import { h } from '../../core/dom.js';
import { loadStyles } from '../../core/styles.js';

loadStyles(new URL('./decor.css', import.meta.url));

// Fixed vertical spots and sideways offsets (percent) for the stickers in one column.
// Deterministic, so the layout never jumps between renders.
const TOPS = [3, 13, 23, 33, 43, 53, 63, 73, 83, 92];
const OFFSETS = [8, 52, 22, 58, 4, 46, 28, 56, 14, 40];
const TILTS = [-8, 6, -4, 9, -10, 5, -6, 8, -3, 7];

function sticker(app, personality, slot) {
  const category = app.data.categoryById.get(personality.category);

  return h(
    'span',
    {
      class: 'decor__sticker',
      style: {
        '--accent': category.color,
        '--tilt': `${TILTS[slot]}deg`,
        '--delay': `${slot * -0.7}s`,
        top: `${TOPS[slot]}%`,
        left: `${OFFSETS[slot]}%`,
      },
    },
    h('span', { class: 'decor__emoji' }, personality.emoji),
    h('span', { class: 'decor__name' }, app.t(`personalities.${personality.id}.name`)),
  );
}

// Personalities are dealt out alternately to the left and right columns, so each side
// gets a mix of all four groups. Hidden by css when the screen is too narrow to have margins.
function renderDecor(app) {
  const left = [];
  const right = [];
  app.data.personalities.forEach((personality, index) => {
    const column = index % 2 === 0 ? left : right;
    column.push(sticker(app, personality, column.length));
  });

  return [h('div', { class: 'decor decor--left' }, left), h('div', { class: 'decor decor--right' }, right)];
}

export default {
  id: 'decor',
  slots: { background: renderDecor },
};
