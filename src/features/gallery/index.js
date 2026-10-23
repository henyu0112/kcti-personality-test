import { loadStyles } from '../../core/styles.js';
import { renderGallery } from './view.js';

loadStyles(new URL('./gallery.css', import.meta.url));

export default {
  id: 'gallery',
  nav: { path: '/types', label: 'ui.nav.types', order: 2 },
  routes: { '/types': renderGallery },
};
