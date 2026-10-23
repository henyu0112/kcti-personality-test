import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CHOICES, DEFAULT_SETTINGS, SWITCHES, normalizeSettings, resolveSettings } from '../src/features/settings/resolve.js';
import { ICON_SHAPES } from '../src/shared/icons.js';
import { locales } from '../src/locales/index.js';

const lightDevice = { prefersDark: false, prefersReducedMotion: false };

test('defaults are light, normal size, and follow the device for motion', () => {
  assert.equal(DEFAULT_SETTINGS.theme, 'light');
  assert.deepEqual(resolveSettings(DEFAULT_SETTINGS, lightDevice), {
    theme: 'light',
    textSize: 'normal',
    motion: 'full',
    contrast: 'normal',
    spacing: 'normal',
    decor: 'on',
  });
});

test('"Match device" follows the device colour scheme', () => {
  const settings = { ...DEFAULT_SETTINGS, theme: 'system' };
  assert.equal(resolveSettings(settings, { ...lightDevice, prefersDark: true }).theme, 'dark');
  assert.equal(resolveSettings(settings, lightDevice).theme, 'light');
  // An explicit choice ignores the device.
  assert.equal(resolveSettings({ ...DEFAULT_SETTINGS, theme: 'dark' }, lightDevice).theme, 'dark');
});

test('reduce motion follows the device until the person chooses, then their choice wins', () => {
  const reducedDevice = { ...lightDevice, prefersReducedMotion: true };
  assert.equal(resolveSettings(DEFAULT_SETTINGS, reducedDevice).motion, 'reduced');
  assert.equal(resolveSettings({ ...DEFAULT_SETTINGS, reduceMotion: false }, reducedDevice).motion, 'full');
  assert.equal(resolveSettings({ ...DEFAULT_SETTINGS, reduceMotion: true }, lightDevice).motion, 'reduced');
});

test('each switch changes its own attribute', () => {
  const on = resolveSettings({ ...DEFAULT_SETTINGS, highContrast: true, wideSpacing: true, hideDecor: true, textSize: 'xlarge' }, lightDevice);
  assert.deepEqual(on, { theme: 'light', textSize: 'xlarge', motion: 'full', contrast: 'high', spacing: 'wide', decor: 'off' });
});

test('normalizeSettings keeps valid saved values and drops everything else', () => {
  assert.deepEqual(normalizeSettings(undefined), DEFAULT_SETTINGS);
  assert.deepEqual(normalizeSettings('nonsense'), DEFAULT_SETTINGS);

  const cleaned = normalizeSettings({ theme: 'dark', textSize: 'huge', highContrast: 'yes', reduceMotion: true, extra: 1 });
  assert.equal(cleaned.theme, 'dark');
  assert.equal(cleaned.textSize, 'normal'); // "huge" is not an option
  assert.equal(cleaned.highContrast, false); // not a boolean
  assert.equal(cleaned.reduceMotion, true);
  assert.equal('extra' in cleaned, false);

  // Settings added later get their default for people who saved before they existed.
  assert.deepEqual(normalizeSettings({ theme: 'system' }), { ...DEFAULT_SETTINGS, theme: 'system' });
});

test('the settings panel has text in every language for every option', () => {
  for (const [code, bundle] of Object.entries(locales)) {
    const text = bundle.ui.settings;
    for (const [key, options] of Object.entries(CHOICES)) {
      assert.ok(text[key]?.label, `${code}: ${key}.label`);
      for (const option of options) assert.ok(text[key][option], `${code}: ${key}.${option}`);
    }
    for (const key of SWITCHES) {
      assert.ok(text[key]?.label && text[key]?.hint, `${code}: ${key} label and hint`);
    }
  }
});

test('the icons the settings panel needs exist', () => {
  for (const name of ['sliders', 'x']) assert.ok(ICON_SHAPES[name], name);
});
