import { loadStyles } from '../../core/styles.js';
import { renderHome } from './view.js';

loadStyles(new URL('./home.css', import.meta.url));

export default {
  id: 'home',
  routes: { '/': renderHome },
};
