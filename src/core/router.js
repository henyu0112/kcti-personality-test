// Hash router. A route handler receives (app, params) and returns either a DOM node to
// show or `{ redirect: '/somewhere' }` (used as a guard, e.g. "no result yet -> go to quiz").
// Patterns may contain `:name` segments, e.g. '/result/:code' -> params.code.

/** Match a path against a pattern. Returns the params object, or null if it doesn't match. */
export function matchRoute(pattern, path) {
  const want = pattern.split('/').filter(Boolean);
  const have = path.split('/').filter(Boolean);
  if (want.length !== have.length) return null;

  const params = {};
  for (let i = 0; i < want.length; i += 1) {
    if (want[i].startsWith(':')) {
      try {
        params[want[i].slice(1)] = decodeURIComponent(have[i]);
      } catch {
        return null;
      }
    } else if (want[i] !== have[i]) {
      return null;
    }
  }
  return params;
}

export function createRouter() {
  const routes = new Map();
  const currentPath = () => window.location.hash.slice(1) || '/';

  function find(path) {
    for (const [pattern, handler] of routes) {
      const params = matchRoute(pattern, path);
      if (params) return { handler, params };
    }
    return null;
  }

  return {
    add(pattern, handler) {
      routes.set(pattern, handler);
    },

    path: currentPath,

    navigate(path) {
      window.location.hash = path;
    },

    listen(callback) {
      window.addEventListener('hashchange', callback);
    },

    resolve(app) {
      let path = currentPath();

      for (let hops = 0; hops < 5; hops += 1) {
        const match = find(path);
        const result = match ? match.handler(app, match.params) : { redirect: '/' };

        if (result && result.redirect) {
          path = result.redirect;
          window.history.replaceState(null, '', `#${path}`);
          continue;
        }
        return { path, node: result };
      }

      throw new Error(`Too many redirects while resolving "${path}"`);
    },
  };
}
