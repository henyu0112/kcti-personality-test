import { h } from '../../core/dom.js';
import { computeResult } from '../../engine/scoring.js';

function renderEvidence(app, result) {
  const { t } = app;

  return h(
    'details',
    { class: 'result-card__evidence' },
    h('summary', {}, t('ui.result.evidence', { count: result.supporting.length, total: result.questionCount })),
    h(
      'ul',
      {},
      result.supporting.map(({ questionId, optionId }) =>
        h(
          'li',
          {},
          h('p', { class: 'evidence__prompt' }, t(`questions.${questionId}.prompt`)),
          h('p', { class: 'evidence__answer' }, `→ ${t(`questions.${questionId}.options.${optionId}`)}`),
        ),
      ),
    ),
  );
}

function renderScores(app, result) {
  const { t } = app;

  return h(
    'div',
    { class: 'result-card__scores' },
    h('h3', { class: 'eyebrow' }, t('ui.result.scores')),
    result.ranked.map((personalityId) =>
      h(
        'div',
        { class: `score-row${personalityId === result.winner ? ' is-winner' : ''}` },
        h('span', { class: 'score-row__name' }, t(`personalities.${personalityId}.name`)),
        h(
          'div',
          { class: 'bar' },
          h('div', { class: 'bar__fill', style: { width: `${(result.scores[personalityId] / result.questionCount) * 100}%` } }),
        ),
        h('span', { class: 'score-row__value' }, `${result.scores[personalityId]}/${result.questionCount}`),
      ),
    ),
  );
}

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
    ),
    h('p', { class: 'pill' }, t('ui.result.means', { meaning: t(`${key}.meaning`) })),
    h('p', { class: 'result-card__description' }, t(`${key}.description`)),
    h(
      'div',
      { class: 'result-card__why' },
      h('h3', {}, t('ui.result.why')),
      h('p', {}, t(`${key}.why`)),
      result.tied ? h('p', { class: 'result-card__tie' }, t('ui.result.tie')) : null,
      renderEvidence(app, result),
    ),
    renderScores(app, result),
  );
}

export function renderResult(app) {
  const { t, data, services } = app;
  const { session, answers } = app.store.getState().quiz;
  const results = computeResult(data, answers, session.questionOrder);

  const name = (personalityId) => t(`personalities.${personalityId}.name`);
  const summary = results
    .map((result) => t(`categories.${result.categoryId}.summary`, { name: name(result.winner) }))
    .join(t('ui.result.summaryJoin'));

  return h(
    'section',
    { class: 'result' },
    h(
      'header',
      { class: 'card result__hero' },
      h('p', { class: 'eyebrow' }, t('ui.result.eyebrow')),
      h('h1', { class: 'result__title' }, t('ui.result.title')),
      h(
        'ul',
        { class: 'result__chips' },
        results.map((result) => {
          const category = data.categoryById.get(result.categoryId);
          return h(
            'li',
            { class: 'chip', style: { '--accent': category.color } },
            h('span', { class: 'badge' }, category.letter),
            h('span', { class: 'chip__name' }, name(result.winner)),
          );
        }),
      ),
      h('p', { class: 'result__summary' }, summary),
    ),
    results.map((result) => renderCategoryCard(app, result)),
    h(
      'div',
      { class: 'result__actions' },
      h('button', { type: 'button', class: 'btn', onclick: () => services.quiz.start() }, t('ui.result.retake')),
      h('a', { class: 'btn btn--ghost', href: '#/' }, t('ui.result.home')),
    ),
  );
}
