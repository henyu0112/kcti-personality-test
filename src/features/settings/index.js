import { h } from '../../core/dom.js';
import { loadStyles } from '../../core/styles.js';
import { icon } from '../../shared/icons.js';
import { createSettingsDialog } from './panel.js';
import { DEFAULT_SETTINGS, normalizeSettings, resolveSettings } from './resolve.js';

loadStyles(new URL('./settings.css', import.meta.url));

function renderButton(app) {
  return h(
    'button',
    {
      type: 'button',
      class: 'btn btn--small btn--ghost',
      'data-settings-trigger': '',
      'aria-label': app.t('ui.settings.open'),
      'aria-haspopup': 'dialog',
      title: app.t('ui.settings.open'),
      onclick: () => app.services.settings.open(),
    },
    icon('sliders', { size: 18 }),
  );
}

export default {
  id: 'settings',
  state: { settings: DEFAULT_SETTINGS },
  persist: ['settings'],
  slots: { header: renderButton },

  init(app) {
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const environment = () => ({ prefersDark: darkQuery.matches, prefersReducedMotion: motionQuery.matches });

    const current = () => app.store.getState().settings;
    const save = (patch) => app.store.setState({ settings: normalizeSettings({ ...current(), ...patch }) });

    // Put the settings on <html> as data-* attributes; the stylesheets do the rest.
    const apply = () => {
      for (const [name, value] of Object.entries(resolveSettings(current(), environment()))) {
        document.documentElement.dataset[name] = value;
      }
    };

    save({}); // clean up whatever was saved
    apply();
    app.store.subscribe(apply);
    darkQuery.addEventListener('change', apply);
    motionQuery.addEventListener('change', apply);

    const service = {
      get: current,
      set: (key, value) => save({ [key]: value }),
      reset: () => save(DEFAULT_SETTINGS),
      // What is actually in force: "Reduce motion" follows the device until the person chooses.
      effective: (key) => (key === 'reduceMotion' ? (current().reduceMotion ?? environment().prefersReducedMotion) : current()[key]),
    };

    const dialog = createSettingsDialog(app, service);
    app.services.settings = { ...service, open: dialog.open, close: dialog.close };
  },
};
