# KCTI - Kacau Character Type Indicator

A funny Malaysian-slang personality test. 4 groups (K, C, T, I) x 5 personalities, 24 questions,
English and Chinese. You get one personality per group, plus the reasons why.

| Letter | Group | Personalities |
|---|---|---|
| K | Kacau Level | Hin, 怎么办, Gai, Bird, 你很可爱勒 |
| C | Cara Hidup | Chill, Kiasu, Paiseh, Syok Sendiri, Steady |
| T | Tengah Loading | Hmmm, Errrr, Ehhhhh, Ahhhhhh, Harrrrr |
| I | Impossible Level | Hiao, Liao, Siao, Biao, Beh Hiao |

## Run it

```bash
npm start        # http://localhost:5173  (browsers block ES modules on file://, so use this)
npm test         # scoring, session and translation-completeness tests
```

No dependencies and no build step: plain ES modules.

## How it is organised

```
src/
  data/       WHAT exists: categories, personalities, questions (ids, scores). No text.
  locales/    WHAT IT SAYS: en/ and zh/ - every visible string, keyed by those ids.
  engine/     HOW it is scored: pure functions, no DOM. scoring.js, session.js.
  core/       Small app plumbing: store, router, i18n, dom helper, shell, persistence.
  features/   WHAT THE USER SEES: one folder per feature (home, quiz, result, language).
  main.js     Wires core + features together. Rarely needs to change.
styles/       Design tokens and shared components. Feature css lives in the feature folder.
tests/        node --test
```

The rules that keep it from tangling:

1. **Data, text and logic never mix.** Content is edited in `data/` and `locales/`; scoring lives in `engine/`; screens only read from them.
2. **Features don't import each other.** They get everything through the `app` object (`app.store`, `app.t`, `app.data`, `app.services`). One feature calls another through `app.services.<name>` (e.g. home starts the quiz with `app.services.quiz.start()`).
3. **A feature owns its folder**: its code, its css (loaded via `loadStyles`), its state slice.
4. **No `innerHTML`.** The `h()` helper only creates text nodes, so translated text can never inject markup.

### A feature is a plain object

```js
// src/features/<name>/index.js
export default {
  id: 'name',
  state:   { name: { ...initial } },            // its slice of the store
  persist: ['name'],                             // optional: save to localStorage
  routes:  { '/path': (app) => Node | { redirect: '/' } },
  slots:   { header: (app) => Node },            // optional: contribute to the shell
  init(app) { app.services.name = {...} },       // optional: runs once at startup
};
```

Register it with one line in `src/features/index.js`.

## Common changes

**Add or edit a question** - add `question('k7', 'kacau')` in `data/questions.js`, then add `k7: { prompt, options: {...} }` in **every** language file. `npm test` tells you what is missing. Keep the same number of questions in each group (a test enforces it).

**Add a personality** - add it to `data/personalities.js`, add its text in each language's `personalities.js`, and add an answer for it to every question in that group (a test enforces this).

**Add a group (e.g. a 5th letter)** - add it to `data/categories.js`, its personalities and questions, and its text in `locales/*/categories.js`. Home, quiz and result screens pick it up automatically.

**Add a language** - copy `src/locales/en/` to `src/locales/<code>/`, translate, and register it in `src/locales/index.js`.

**Change how answers score** - an option's `scores` can feed several personalities (for example `{ hin: 2, gai: 1 }`). Tie-breaking rules are in `engine/scoring.js`.

**Add a feature (share card, history, leaderboard, ...)** - create `src/features/<name>/`, register it. Anything reusable (like a result calculation) goes in `engine/`, not in the feature.

## Notes

- Progress and language are saved in `localStorage` (`kcti:v1`). If you change the questions, a stale saved quiz is discarded automatically.
- Tie-break: if two personalities in a group score the same, the one the person picked first wins ("first instinct"), and the result page says so.
