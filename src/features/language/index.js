import { h } from '../../core/dom.js';
import { loadStyles } from '../../core/styles.js';

loadStyles(new URL('./language.css', import.meta.url));

function renderSwitcher(app) {
  const current = app.store.getState().lang;

  return h(
    'div',
    { class: 'lang-switch', role: 'group', 'aria-label': app.t('ui.lang.label') },
    app.i18n.languages.map((language) =>
      h(
        'button',
        {
          type: 'button',
          class: 'lang-switch__button',
          lang: language.htmlLang,
          'aria-pressed': String(language.code === current),
          onclick: () => app.store.setState({ lang: language.code }),
        },
        language.label,
      ),
    ),
  );
}

export default {
  id: 'language',
  persist: ['lang'],
  slots: { header: renderSwitcher },
};
