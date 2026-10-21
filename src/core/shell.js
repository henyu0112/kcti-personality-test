import { h } from './dom.js';

// Features can contribute small pieces to named slots (currently just "header")
// without the shell knowing anything about them.
function renderSlot(app, name) {
  return app.features.filter((feature) => feature.slots?.[name]).map((feature) => feature.slots[name](app));
}

export function renderShell(app, content) {
  return h(
    'div',
    { class: 'shell' },
    h(
      'header',
      { class: 'shell__header' },
      h('a', { class: 'shell__brand', href: '#/' }, app.t('ui.brand')),
      h('div', { class: 'shell__slot' }, renderSlot(app, 'header')),
    ),
    h('main', { class: 'shell__main', id: 'main', tabindex: '-1' }, content),
    h('footer', { class: 'shell__footer' }, app.t('ui.footer')),
  );
}
