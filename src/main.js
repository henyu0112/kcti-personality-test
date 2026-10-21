import { createStore } from './core/store.js';
import { createRouter } from './core/router.js';
import { createI18n } from './core/i18n.js';
import { persist } from './core/persist.js';
import { renderShell } from './core/shell.js';
import { data } from './data/index.js';
import { locales, languages, fallbackLanguage } from './locales/index.js';
import features from './features/index.js';

const i18n = createI18n({ locales, languages, fallback: fallbackLanguage });

const store = createStore({
  lang: i18n.detect(),
  ...Object.assign({}, ...features.map((feature) => feature.state)),
});
persist(store, { key: 'kcti:v1', fields: features.flatMap((feature) => feature.persist ?? []) });

// If a saved language is no longer offered, fall back rather than show broken text.
if (!languages.some((language) => language.code === store.getState().lang)) {
  store.setState({ lang: fallbackLanguage });
}

const router = createRouter();
const root = document.getElementById('app');

// Everything a feature may need. Features receive this instead of importing each other.
const app = {
  store,
  router,
  data,
  i18n,
  features,
  services: {},
  t: (path, params) => i18n.translate(store.getState().lang, path, params),
  focusMain: () => document.getElementById('main')?.focus({ preventScroll: true }),
};

for (const feature of features) {
  for (const [path, handler] of Object.entries(feature.routes ?? {})) router.add(path, handler);
}
for (const feature of features) feature.init?.(app);

let lastPath;

function render() {
  const { path, node } = router.resolve(app);
  const language = languages.find((l) => l.code === store.getState().lang);

  document.documentElement.lang = language.htmlLang;
  document.title = app.t('ui.meta.title');
  root.replaceChildren(renderShell(app, node));

  if (path !== lastPath) {
    window.scrollTo(0, 0);
    app.focusMain();
    lastPath = path;
  }
}

store.subscribe(render);
router.listen(render);
render();
