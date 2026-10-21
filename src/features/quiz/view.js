import { h } from '../../core/dom.js';

export function renderQuiz(app) {
  const { t, data, store, services } = app;
  const { session, answers, step } = store.getState().quiz;

  const total = session.questionOrder.length;
  const question = data.questionById.get(session.questionOrder[step]);
  const category = data.categoryById.get(question.category);
  const chosen = answers[question.id];

  const options = session.optionOrder[question.id].map((optionId, index) =>
    h(
      'button',
      {
        type: 'button',
        class: 'option',
        'aria-pressed': String(optionId === chosen),
        onclick: () => services.quiz.answer(question.id, optionId),
      },
      h('span', { class: 'option__key', 'aria-hidden': 'true' }, String.fromCharCode(65 + index)),
      h('span', { class: 'option__text' }, t(`questions.${question.id}.options.${optionId}`)),
    ),
  );

  return h(
    'section',
    { class: 'quiz', style: { '--accent': category.color } },
    h(
      'div',
      { class: 'quiz__top' },
      h('span', { class: 'badge' }, category.letter),
      h('span', { class: 'quiz__group' }, t(`categories.${category.id}.title`)),
      h('span', { class: 'quiz__count' }, t('ui.quiz.progress', { current: step + 1, total })),
    ),
    h(
      'div',
      {
        class: 'bar quiz__bar',
        role: 'progressbar',
        'aria-valuemin': '0',
        'aria-valuemax': String(total),
        'aria-valuenow': String(step + 1),
      },
      h('div', { class: 'bar__fill', style: { width: `${((step + 1) / total) * 100}%` } }),
    ),
    h(
      'div',
      { class: 'card quiz__card' },
      h('h1', { class: 'quiz__prompt' }, t(`questions.${question.id}.prompt`)),
      h('div', { class: 'quiz__options', role: 'group', 'aria-label': t('ui.quiz.options') }, options),
    ),
    h(
      'div',
      { class: 'quiz__nav' },
      h(
        'button',
        { type: 'button', class: 'btn btn--ghost btn--small', disabled: step === 0, onclick: () => services.quiz.back() },
        `← ${t('ui.quiz.back')}`,
      ),
      h('a', { class: 'quiz__quit', href: '#/' }, t('ui.quiz.quit')),
    ),
  );
}
