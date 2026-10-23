import { h } from './dom.js';
import { renderSlot } from './slots.js';

// Tabs under the header. A feature adds one by declaring
//   nav: { path: '/types', label: 'ui.nav.types', order: 2 }
// The tabs only show on pages that are themselves a tab (not during the quiz or on a result).
function renderNav(app) {
  const items = app.features
    .map((feature) => feature.nav)
    .filter(Boolean)
    .sort((a, b) => a.order - b.order);
  const path = app.router.path();
  if (!items.some((item) => item.path === path)) return null;

  return h(
    'nav',
    { class: 'shell__nav', 'aria-label': app.t('ui.nav.label') },
    items.map((item) =>
      h('a', { class: 'tab', href: `#${item.path}`, 'aria-current': item.path === path ? 'page' : null }, app.t(item.label)),
    ),
  );
}

export function renderShell(app, content) {
  return h(
    'div',
    { class: 'page' },
    h('div', { class: 'shell-bg', 'aria-hidden': 'true' }, renderSlot(app, 'background')),
    h(
      'div',
      { class: 'shell' },
      h(
        'header',
        { class: 'shell__header' },
        h('a', { class: 'shell__brand', href: '#/' }, app.t('ui.brand')),
        h('div', { class: 'shell__slot' }, renderSlot(app, 'header')),
      ),
      renderNav(app),
      h('main', { class: 'shell__main', id: 'main', tabindex: '-1' }, content),
      h('footer', { class: 'shell__footer' }, app.t('ui.footer')),
    ),
  );
}
