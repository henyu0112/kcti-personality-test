import { loadStyles } from '../../core/styles.js';
import { computeResult, isComplete } from '../../engine/scoring.js';
import { buildType, parseType } from '../../engine/type.js';
import { renderResult } from './view.js';

loadStyles(new URL('./result.css', import.meta.url));

/** The type this browser's finished quiz produced, or null if there isn't one. */
function ownType(app) {
  const { session, answers } = app.store.getState().quiz;
  if (!session || !isComplete(app.data, answers, session.questionOrder)) return null;
  return buildType(app.data, computeResult(app.data, answers, session.questionOrder));
}

export default {
  id: 'result',

  routes: {
    // "My result": hop to the shareable address so the link is right there in the address bar.
    '/result': (app) => {
      const own = ownType(app);
      if (own) return { redirect: `/result/${own.code}` };
      return { redirect: app.services.quiz.hasSession() ? '/quiz' : '/' };
    },

    // Anyone's result, from its code (e.g. #/result/GTMS).
    '/result/:code': (app, { code }) => {
      const type = parseType(app.data, code);
      if (!type) return { redirect: '/' };
      return renderResult(app, { type, isOwn: ownType(app)?.code === type.code });
    },
  },
};
