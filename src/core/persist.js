// Saves selected top-level state keys to localStorage. Storage can be blocked or full,
// so every access is wrapped: the app must work without it.
const pick = (source, fields) => Object.fromEntries(fields.filter((f) => f in source).map((f) => [f, source[f]]));

export function persist(store, { key, fields }) {
  try {
    const saved = JSON.parse(localStorage.getItem(key));
    if (saved && typeof saved === 'object') store.setState(pick(saved, fields));
  } catch {
    // Nothing saved yet, or storage unavailable.
  }

  store.subscribe((state) => {
    try {
      localStorage.setItem(key, JSON.stringify(pick(state, fields)));
    } catch {
      // Ignore quota / privacy-mode errors.
    }
  });
}
