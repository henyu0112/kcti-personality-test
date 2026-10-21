// Minimal observable state container. Features keep their state under their own key
// (e.g. state.quiz) so they never trample each other.
export function createStore(initial = {}) {
  let state = { ...initial };
  const listeners = new Set();

  return {
    getState: () => state,

    setState(patch) {
      state = { ...state, ...(typeof patch === 'function' ? patch(state) : patch) };
      listeners.forEach((listener) => listener(state));
    },

    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}
