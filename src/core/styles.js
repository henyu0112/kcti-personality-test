// Lets a feature load its own stylesheet next to its code:
//   loadStyles(new URL('./quiz.css', import.meta.url));
// so adding or removing a feature never means touching index.html.
const loaded = new Set();

export function loadStyles(url) {
  const href = url instanceof URL ? url.href : url;
  if (loaded.has(href)) return;
  loaded.add(href);

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.append(link);
}
