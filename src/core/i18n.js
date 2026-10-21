// Translation lookup over locale bundles. Paths are dotted, e.g.
//   t('ui.home.start'), t('personalities.hin.name'), t('questions.k1.options.hin')
// Missing keys fall back to the fallback language, then to the path itself so the gap
// is visible on screen rather than silently blank.
export function createI18n({ locales, languages, fallback }) {
  const lookup = (lang, path) => path.split('.').reduce((node, key) => node?.[key], locales[lang]);
  const fill = (text, params) => text.replace(/\{(\w+)\}/g, (match, name) => (name in params ? params[name] : match));

  return {
    languages,

    /** Best guess for a first visit: the browser's language if we have it, else the fallback. */
    detect() {
      const browser = (navigator.language ?? '').toLowerCase();
      return languages.find((language) => browser.startsWith(language.code))?.code ?? fallback;
    },

    translate(lang, path, params = {}) {
      const value = lookup(lang, path) ?? lookup(fallback, path);
      if (typeof value !== 'string') {
        console.warn(`[i18n] missing text for "${path}"`);
        return path;
      }
      return fill(value, params);
    },
  };
}
