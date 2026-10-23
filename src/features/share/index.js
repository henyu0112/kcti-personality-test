import { loadStyles } from '../../core/styles.js';
import { renderSharePanel } from './panel.js';

loadStyles(new URL('./share.css', import.meta.url));

// Plugs into the result page's "result.after" slot, so the result feature doesn't know
// this one exists. Remove this feature from src/features/index.js and the panel just goes.
export default {
  id: 'share',
  slots: { 'result.after': renderSharePanel },
};
