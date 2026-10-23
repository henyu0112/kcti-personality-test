// Pure settings logic (no DOM), so it can be tested: what the options are, how to clean up
// saved values, and how they turn into the data-* attributes the stylesheet reacts to.

export const DEFAULT_SETTINGS = {
  theme: 'light', // 'light' | 'dark' | 'system'
  textSize: 'normal', // 'normal' | 'large' | 'xlarge'
  reduceMotion: null, // true / false, or null to follow the device's setting
  highContrast: false,
  wideSpacing: false,
  hideDecor: false,
};

/** The allowed values of the options that are a choice rather than on/off. */
export const CHOICES = {
  theme: ['light', 'dark', 'system'],
  textSize: ['normal', 'large', 'xlarge'],
};

/** The on/off options. */
export const SWITCHES = ['reduceMotion', 'highContrast', 'wideSpacing', 'hideDecor'];

/** Merge saved values over the defaults, ignoring anything that isn't a valid value. */
export function normalizeSettings(saved) {
  const settings = { ...DEFAULT_SETTINGS };
  if (!saved || typeof saved !== 'object') return settings;

  for (const [key, allowed] of Object.entries(CHOICES)) {
    if (allowed.includes(saved[key])) settings[key] = saved[key];
  }
  for (const key of SWITCHES) {
    if (typeof saved[key] === 'boolean') settings[key] = saved[key];
  }
  return settings;
}

/**
 * Turn settings into the data-* values for <html>. `env` says what the device prefers:
 * { prefersDark, prefersReducedMotion }.
 */
export function resolveSettings(settings, env) {
  return {
    theme: settings.theme === 'system' ? (env.prefersDark ? 'dark' : 'light') : settings.theme,
    textSize: settings.textSize,
    motion: (settings.reduceMotion ?? env.prefersReducedMotion) ? 'reduced' : 'full',
    contrast: settings.highContrast ? 'high' : 'normal',
    spacing: settings.wideSpacing ? 'wide' : 'normal',
    decor: settings.hideDecor ? 'off' : 'on',
  };
}
