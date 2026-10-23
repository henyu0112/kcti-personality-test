import { h } from '../../core/dom.js';
import { describeType, typeUrl } from '../../shared/type-text.js';
import { drawCard } from './card.js';

const FEEDBACK_MS = 1600;

/** Briefly replace a button's label with a message. */
function flash(button, message) {
  const label = button.textContent;
  button.textContent = message;
  setTimeout(() => {
    button.textContent = label;
  }, FEEDBACK_MS);
}

export function renderSharePanel(app, type) {
  const { t } = app;
  const url = typeUrl(type.code);
  const message = t('ui.share.text', { code: type.code, nickname: describeType(app, type).nickname });

  const canvas = drawCard(app, type);
  canvas.className = 'share__card';
  canvas.setAttribute('role', 'img');
  canvas.setAttribute('aria-label', t('ui.share.previewAlt'));
  const toBlob = () => new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));

  async function copyLink(event) {
    const button = event.currentTarget;
    try {
      await navigator.clipboard.writeText(url);
      flash(button, t('ui.share.copied'));
    } catch {
      flash(button, t('ui.share.copyFailed')); // the link box below can still be selected by hand
    }
  }

  async function saveImage(event) {
    const button = event.currentTarget;
    const blob = await toBlob();
    const link = h('a', { href: URL.createObjectURL(blob), download: `kcti-${type.code}.png` });
    link.click();
    setTimeout(() => URL.revokeObjectURL(link.href), 1000);
    flash(button, t('ui.share.saved'));
  }

  // Phones can hand the picture and message straight to WhatsApp, Instagram etc.
  async function shareNative(event) {
    const button = event.currentTarget;
    try {
      const blob = await toBlob();
      const file = new File([blob], `kcti-${type.code}.png`, { type: 'image/png' });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ title: t('ui.brand'), text: `${message} ${url}`, files: [file] });
      } else {
        await navigator.share({ title: t('ui.brand'), text: message, url });
      }
    } catch (error) {
      if (error.name !== 'AbortError') copyLink({ currentTarget: button });
    }
  }

  return h(
    'section',
    { class: 'card share' },
    h('h2', { class: 'share__title' }, t('ui.share.title')),
    h(
      'div',
      { class: 'share__actions' },
      navigator.share ? h('button', { type: 'button', class: 'btn btn--small', onclick: shareNative }, t('ui.share.share')) : null,
      h('button', { type: 'button', class: 'btn btn--small btn--ghost', onclick: copyLink }, t('ui.share.copy')),
      h('button', { type: 'button', class: 'btn btn--small btn--ghost', onclick: saveImage }, t('ui.share.save')),
    ),
    h('input', {
      class: 'share__url',
      type: 'text',
      readonly: true,
      value: url,
      'aria-label': t('ui.share.linkLabel'),
      onfocus: (event) => event.target.select(),
    }),
    h('details', { class: 'share__preview', open: true }, h('summary', {}, t('ui.share.viewCard')), canvas),
  );
}
