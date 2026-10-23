import { h } from '../../core/dom.js';
import { renderSlot } from '../../core/slots.js';
import { describeType } from '../../shared/type-text.js';

// How a result was worked out (scores, which answers counted) is deliberately not shown:
// the mystery is part of the fun. This page only needs the type, so it works for a result
// opened from a link as well as for the person's own.

function renderCategoryCard(app, part) {
  const { t, data } = app;
  const category = data.categoryById.get(part.categoryId);
  const personality = data.personalityById.get(part.personalityId);
  const key = `personalities.${personality.id}`;

  return h(
    'article',
    { class: 'card result-card', style: { '--accent': category.color } },
    h(
      'header',
      { class: 'result-card__head' },
      h('span', { class: 'badge' }, category.letter),
      h(
        'div',
        {},
        h('p', { class: 'result-card__group' }, t(`categories.${category.id}.title`)),
        h('p', { class: 'result-card__subtitle' }, t(`categories.${category.id}.subtitle`)),
      ),
    ),
    h(
      'div',
      { class: 'result-card__main' },
      h('span', { class: 'result-card__emoji', 'aria-hidden': 'true' }, personality.emoji),
      h('h2', { class: 'result-card__name' }, t(`${key}.name`)),
      h('span', { class: 'result-card__letter', 'aria-hidden': 'true' }, personality.code),
    ),
    h('p', { class: 'pill' }, t('ui.result.means', { meaning: t(`${key}.meaning`) })),
    h('p', { class: 'result-card__description' }, t(`${key}.description`)),
    h('div', { class: 'result-card__why' }, h('h3', {}, t('ui.result.why')), h('p', {}, t(`${key}.why`))),
  );
}

export function renderResult(app, { type, isOwn }) {
  const { t, data, services } = app;
  const { nickname, summary } = describeType(app, type);

  const actions = isOwn
    ? [
        h('button', { type: 'button', class: 'btn', onclick: () => services.quiz.start() }, t('ui.result.retake')),
        h('a', { class: 'btn btn--ghost', href: '#/types' }, t('ui.result.allTypes')),
      ]
    : [
        h('button', { type: 'button', class: 'btn', onclick: () => services.quiz.start() }, t('ui.result.startTest')),
        h('a', { class: 'btn btn--ghost', href: '#/types' }, t('ui.result.allTypes')),
      ];

  return h(
    'section',
    { class: 'result' },
    h(
      'header',
      { class: 'card result__hero' },
      h('p', { class: 'eyebrow' }, t(isOwn ? 'ui.result.eyebrow' : 'ui.result.eyebrowShared')),
      h(
        'h1',
        { class: 'result__code', 'aria-label': type.code },
        type.parts.map(({ categoryId, letter }) =>
          h('span', { style: { '--accent': data.categoryById.get(categoryId).color }, 'aria-hidden': 'true' }, letter),
        ),
      ),
      h('p', { class: 'result__nickname' }, nickname),
      h('p', { class: 'result__summary' }, summary),
      h(
        'ul',
        { class: 'result__chips' },
        type.parts.map(({ categoryId, personalityId }) =>
          h(
            'li',
            { class: 'chip', style: { '--accent': data.categoryById.get(categoryId).color } },
            h('span', { class: 'badge' }, data.categoryById.get(categoryId).letter),
            h('span', { class: 'chip__name' }, t(`personalities.${personalityId}.name`)),
          ),
        ),
      ),
    ),
    renderSlot(app, 'result.after', type),
    h('h2', { class: 'eyebrow result__traits' }, t('ui.result.traits')),
    type.parts.map((part) => renderCategoryCard(app, part)),
    h('div', { class: 'result__actions' }, actions),
  );
}
