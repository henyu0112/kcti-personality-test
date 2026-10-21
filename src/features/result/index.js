import { loadStyles } from '../../core/styles.js';
import { isComplete } from '../../engine/scoring.js';
import { renderResult } from './view.js';

loadStyles(new URL('./result.css', import.meta.url));

export default {
  id: 'result',

  routes: {
    '/result': (app) => {
      const { session, answers } = app.store.getState().quiz;
      if (!session) return { redirect: '/' };
      if (!isComplete(app.data, answers)) return { redirect: '/quiz' };
      return renderResult(app);
    },
  },
};
