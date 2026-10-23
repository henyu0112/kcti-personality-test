import { h } from '../../core/dom.js';
import { icon } from '../../shared/icons.js';
import { CHOICES, SWITCHES } from './resolve.js';

// The settings dialog lives on <body>, outside the app root, so the page re-rendering
// (which happens on every state change) never closes it or steals keyboard focus from it.
// It is built once; update() then only changes text and pressed/checked states in place.
export function createSettingsDialog(app, service) {
  const { t } = app;
  const updaters = [];

  // Register `fn` to run on every update, and run it once now.
  const track = (fn) => {
    updaters.push(fn);
    fn();
  };

  function renderChoice(key) {
    const label = h('legend', { class: 'settings__label' });
    track(() => {
      label.textContent = t(`ui.settings.${key}.label`);
    });

    const buttons = CHOICES[key].map((option) => {
      const button = h('button', { type: 'button', class: 'segment', onclick: () => service.set(key, option) });
      track(() => {
        button.textContent = t(`ui.settings.${key}.${option}`);
        button.setAttribute('aria-pressed', String(service.get()[key] === option));
      });
      return button;
    });

    return h('fieldset', { class: 'settings__group' }, label, h('div', { class: 'settings__segments' }, buttons));
  }

  function renderSwitch(key) {
    const label = h('span', { class: 'settings__label' });
    const hint = h('small', {});
    const toggle = h('button', {
      type: 'button',
      class: 'switch',
      role: 'switch',
      'aria-labelledby': `setting-${key}`,
      onclick: () => service.set(key, !service.effective(key)),
    });
    label.id = `setting-${key}`;

    track(() => {
      label.textContent = t(`ui.settings.${key}.label`);
      hint.textContent = t(`ui.settings.${key}.hint`);
      toggle.setAttribute('aria-checked', String(service.effective(key)));
    });

    return h('div', { class: 'settings__row' }, h('div', { class: 'settings__text' }, label, hint), toggle);
  }

  const title = h('h2', { class: 'settings__title', id: 'settings-title' });
  const closeButton = h('button', { type: 'button', class: 'btn btn--small btn--ghost', onclick: () => dialog.close() }, icon('x', { size: 18 }));
  const resetButton = h('button', { type: 'button', class: 'btn btn--small btn--ghost', onclick: () => service.reset() });

  track(() => {
    title.textContent = t('ui.settings.title');
    closeButton.setAttribute('aria-label', t('ui.settings.close'));
    resetButton.textContent = t('ui.settings.reset');
  });

  const dialog = h(
    'dialog',
    { class: 'settings', 'aria-labelledby': 'settings-title' },
    h(
      'div',
      { class: 'settings__body' },
      h('div', { class: 'settings__head' }, title, closeButton),
      Object.keys(CHOICES).map(renderChoice),
      SWITCHES.map(renderSwitch),
      h('div', { class: 'settings__footer' }, resetButton),
    ),
  );

  // A click on the dimmed backdrop lands on the <dialog> itself, not on its content.
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  // The header button is rebuilt on every render, so find the current one to hand focus back to.
  dialog.addEventListener('close', () => document.querySelector('[data-settings-trigger]')?.focus());

  document.body.append(dialog);
  app.store.subscribe(() => updaters.forEach((fn) => fn()));

  return {
    open() {
      if (!dialog.open) dialog.showModal();
    },
    close: () => dialog.close(),
  };
}
