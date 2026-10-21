// Hash router. A route handler receives the app and returns either a DOM node to show
// or `{ redirect: '/somewhere' }` (used as a guard, e.g. "no result yet -> go to quiz").
export function createRouter() {
  const routes = new Map();
  const currentPath = () => window.location.hash.slice(1) || '/';

  return {
    add(path, handler) {
      routes.set(path, handler);
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
        const handler = routes.get(path);
        const result = handler ? handler(app) : { redirect: '/' };

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
