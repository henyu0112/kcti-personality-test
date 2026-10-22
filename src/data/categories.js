// Structure only. All display text lives in src/locales/<lang>/categories.js, keyed by `id`.
// The order of this list is the order of the KCTI letters.
//
// `role` is the nickname word this group supplies to the final type. Each personality has
// a matching word in src/locales/<lang>/types.js, and the result page's `nickname` and
// `typeSummary` templates use these role names as their {placeholders}.
export const categories = [
  { id: 'kacau', letter: 'K', color: '#d9480f', role: 'adjective' },
  { id: 'cara', letter: 'C', color: '#2b8a3e', role: 'noun' },
  { id: 'tengah', letter: 'T', color: '#1971c2', role: 'thinking' },
  { id: 'impossible', letter: 'I', color: '#9c36b5', role: 'facing' },
];
