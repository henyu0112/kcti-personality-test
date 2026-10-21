import en from './en/index.js';
import zh from './zh/index.js';

// To add a language: create src/locales/<code>/, copy the en/ files, translate, and
// register it here. `npm test` fails if any text is missing.
export const locales = { en, zh };

export const languages = [
  { code: 'en', label: 'English', htmlLang: 'en' },
  { code: 'zh', label: '中文', htmlLang: 'zh-Hans' },
];

export const fallbackLanguage = 'en';
