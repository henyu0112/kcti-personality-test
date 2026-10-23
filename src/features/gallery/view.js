import { h } from '../../core/dom.js';

function renderCard(app, personality) {
  const { t } = app;
  const key = `personalities.${personality.id}`;

  return h(
    'li',
    { class: 'card gallery-card' },
    h(
      'div',
      { class: 'gallery-card__top' },
      h('span', { class: 'gallery-card__emoji', 'aria-hidden': 'true' }, personality.emoji),
      h('h3', { class: 'gallery-card__name' }, t(`${key}.name`)),
      h(
        'span',
        { class: 'gallery-card__code', role: 'img', 'aria-label': t('ui.gallery.letter', { code: personality.code }) },
        personality.code,
      ),
    ),
    h('p', { class: 'pill' }, t('ui.result.means', { meaning: t(`${key}.meaning`) })),
    h('p', { class: 'gallery-card__description' }, t(`${key}.description`)),
  );
}

export function renderGallery(app) {
  const { t, data } = app;

  return h(
    'section',
    { class: 'gallery' },
    h('h1', { class: 'gallery__title' }, t('ui.gallery.title')),
    h('p', { class: 'gallery__lead' }, t('ui.gallery.lead', { personalities: data.personalities.length, groups: data.categories.length })),
    data.categories.map((category) =>
      h(
        'section',
        { class: 'gallery__group', style: { '--accent': category.color } },
        h(
          'header',
          { class: 'gallery__head' },
          h('span', { class: 'badge' }, category.letter),
          h(
            'div',
            {},
            h('h2', { class: 'gallery__group-title' }, t(`categories.${category.id}.title`)),
            h('p', { class: 'gallery__group-subtitle' }, t(`categories.${category.id}.subtitle`)),
          ),
        ),
        h(
          'ul',
          { class: 'gallery__list' },
          data.personalities.filter((p) => p.category === category.id).map((p) => renderCard(app, p)),
        ),
      ),
    ),
  );
}
