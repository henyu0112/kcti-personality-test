import { h } from '../../core/dom.js';

function renderActions(app) {
  const { t, services } = app;
  const quiz = services.quiz;
  const total = quiz.total();
  const answered = quiz.answeredCount();
  const hasSession = quiz.hasSession();

  if (hasSession && answered >= total) {
    return h(
      'div',
      { class: 'home__actions' },
      h('a', { class: 'btn', href: '#/result' }, t('ui.home.viewResult')),
      h('button', { type: 'button', class: 'btn btn--ghost', onclick: () => quiz.start() }, t('ui.home.retake')),
    );
  }

  if (hasSession && answered > 0) {
    return h(
      'div',
      { class: 'home__actions' },
      h('a', { class: 'btn', href: '#/quiz' }, t('ui.home.resume', { done: answered, total })),
      h('button', { type: 'button', class: 'btn btn--ghost', onclick: () => quiz.start() }, t('ui.home.restart')),
    );
  }

  return h(
    'div',
    { class: 'home__actions' },
    h('button', { type: 'button', class: 'btn', onclick: () => quiz.start() }, t('ui.home.start')),
  );
}

export function renderHome(app) {
  const { t, data } = app;

  return h(
    'section',
    { class: 'home' },
    h(
      'div',
      { class: 'home__hero' },
      h('p', { class: 'eyebrow' }, t('ui.home.eyebrow')),
      h('h1', { class: 'home__title' }, t('ui.brand')),
      h('p', { class: 'home__subtitle' }, t('ui.home.title')),
      h('p', { class: 'home__lead' }, t('ui.home.lead', { questions: data.quiz.questionsPerTest, groups: data.categories.length })),
    ),
    renderActions(app),
    h(
      'div',
      { class: 'home__groups' },
      h('h2', { class: 'eyebrow' }, t('ui.home.groups')),
      h(
        'ul',
        { class: 'home__grid' },
        data.categories.map((category) =>
          h(
            'li',
            { class: 'group-tile card', style: { '--accent': category.color } },
            h('span', { class: 'badge group-tile__letter' }, category.letter),
            h('span', { class: 'group-tile__title' }, t(`categories.${category.id}.title`)),
            h('span', { class: 'group-tile__subtitle' }, t(`categories.${category.id}.subtitle`)),
          ),
        ),
      ),
    ),
  );
}
