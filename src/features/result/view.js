import { h } from '../../core/dom.js';
import { computeResult } from '../../engine/scoring.js';
import { buildType } from '../../engine/type.js';

// How the result was worked out (scores, which answers counted) is deliberately not shown:
// the mystery is part of the fun. computeResult still returns it for tests and future use.

function renderCategoryCard(app, result) {
  const { t, data } = app;
  const category = data.categoryById.get(result.categoryId);
  const personality = data.personalityById.get(result.winner);
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

export function renderResult(app) {
  const { t, data, services } = app;
  const { session, answers } = app.store.getState().quiz;
  const results = computeResult(data, answers, session.questionOrder);
  const type = buildType(data, results);

  // Each group fills the placeholder named by its `role` ({adjective}, {noun}, ...).
  const words = Object.fromEntries(
    type.parts.map(({ categoryId, personalityId }) => {
      const { role } = data.categoryById.get(categoryId);
      return [role, t(`types.${personalityId}.${role}`)];
    }),
  );

  return h(
    'section',
    { class: 'result' },
    h(
      'header',
      { class: 'card result__hero' },
      h('p', { class: 'eyebrow' }, t('ui.result.eyebrow')),
      h(
        'h1',
        { class: 'result__code', 'aria-label': type.code },
        type.parts.map(({ categoryId, letter }) =>
          h('span', { style: { '--accent': data.categoryById.get(categoryId).color }, 'aria-hidden': 'true' }, letter),
        ),
      ),
      h('p', { class: 'result__nickname' }, t('ui.result.nickname', words)),
      h('p', { class: 'result__summary' }, t('ui.result.typeSummary', words)),
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
    h('h2', { class: 'eyebrow result__traits' }, t('ui.result.traits')),
    results.map((result) => renderCategoryCard(app, result)),
    h(
      'div',
      { class: 'result__actions' },
      h('button', { type: 'button', class: 'btn', onclick: () => services.quiz.start() }, t('ui.result.retake')),
      h('a', { class: 'btn btn--ghost', href: '#/' }, t('ui.result.home')),
    ),
  );
}
