# KCTI - Kacau Character Type Indicator

A funny Malaysian-slang personality test. 4 groups (K, C, T, I) x 5 personalities, 32 questions
(4 answers each), English and Chinese. You get one personality per group, combined into a
4-letter type like **GTMS** with a nickname ("The Doomed Pillar"). How the score was reached is
deliberately not shown.

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
  features/   WHAT THE USER SEES: one folder per feature (home, gallery, quiz, result, share,
              language, decor).
  shared/     Small helpers used by more than one feature (features never import each other).
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
  slots:   { 'result.after': (app, type) => Node }, // optional: add content to a named place
  nav:     { path: '/types', label: 'ui.nav.types', order: 2 }, // optional: a tab under the header
  init(app) { app.services.name = {...} },       // optional: runs once at startup
};
```

Register it with one line in `src/features/index.js`.

## Common changes

**Add or edit a question** - add `question('k9', 'kacau', 'bird')` in `data/questions.js` (the last argument is the personality left out, so the question shows 4 of the 5), then add `k9: { prompt, options: {...} }` with exactly those 4 answers in **every** language file. `npm test` tells you what is missing. Keep the same number of questions in each group, and spread the omissions evenly (both are tested).

**Add a personality** - add it to `data/personalities.js` (with a unique `code` letter for its group), add its text in each language's `personalities.js`, add its nickname word in each language's `types.js`, and make sure questions in that group offer it (a test checks all of this).

**Change the final type wording** - the code is the four `code` letters in K C T I order (`engine/type.js`). The nickname is `ui.result.nickname`, built from the K and C words, and the summary is `ui.result.typeSummary`, built from the T and I words. The word each group supplies is set by its `role` in `data/categories.js`; the words themselves are in `locales/<lang>/types.js`. To hand-write a special title for one combination later, check `type.code` in the result view before using the generated nickname.

**Add a group (e.g. a 5th letter)** - add it to `data/categories.js`, its personalities and questions, and its text in `locales/*/categories.js`. Home, quiz and result screens pick it up automatically.

**Add a language** - copy `src/locales/en/` to `src/locales/<code>/`, translate, and register it in `src/locales/index.js`.

**Change how answers score** - an option's `scores` can feed several personalities (for example `{ hin: 2, gai: 1 }`). Tie-breaking rules are in `engine/scoring.js`.

**Result links** - `#/result/GTMS` shows the result for any valid code (`parseType` in `engine/type.js` rejects bad ones and sends people home). Finishing the quiz lands on the person's own code URL, so the link is already in the address bar.

**The share panel and card image** - the `share` feature plugs into the result page's `result.after` slot. `features/share/card.js` draws the 1080 x 1350 picture on a canvas; change its look there. On phones the Share button hands the picture to the share sheet (WhatsApp, Instagram...); elsewhere there are Copy link and Save image buttons.

**The "All types" tab** - the `gallery` feature (`#/types`) lists every personality from the same data and locale files as the quiz, so a new personality shows up there automatically. Tabs come from each feature's `nav` field.

**Add a feature (history, leaderboard, ...)** - create `src/features/<name>/`, register it. Anything reusable (like a result calculation) goes in `engine/`, not in the feature.

## Notes

- Progress and language are saved in `localStorage` (`kcti:v1`). If you change the questions, a stale saved quiz is discarded automatically.
- Scoring: each question shows 4 of a group's 5 personalities, so a personality's score is its *rate* (picks out of times offered), which keeps all five equally easy to win. If two still tie, the one the person picked first wins ("first instinct"). `computeResult` returns the scores and the answers that counted, but the result page does not display them.
