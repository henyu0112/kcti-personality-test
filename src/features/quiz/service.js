import { createSession, isValidSession } from '../../engine/session.js';
import { pruneAnswers } from '../../engine/scoring.js';

const ADVANCE_DELAY_MS = 220; // long enough to see the chosen answer highlight

// The quiz's public API. Other features (home, result) call this through
// app.services.quiz instead of reaching into the quiz's state shape.
export function createQuizService(app) {
  const { store, data, router } = app;

  const quiz = () => store.getState().quiz;
  const update = (patch) => store.setState({ quiz: { ...quiz(), ...patch } });
  const total = () => quiz().session?.questionOrder.length ?? 0;

  return {
    hasSession: () => Boolean(quiz().session),
    total,
    answeredCount: () => Object.keys(quiz().answers).length,

    start() {
      update({ session: createSession(data), answers: {}, step: 0 });
      router.navigate('/quiz');
    },

    answer(questionId, optionId) {
      const { step, answers } = quiz();
      update({ answers: { ...answers, [questionId]: optionId } });

      setTimeout(() => {
        if (quiz().step !== step) return; // user already moved on (Back, or a double click)
        if (step + 1 >= total()) {
          router.navigate('/result');
        } else {
          update({ step: step + 1 });
          app.focusMain();
        }
      }, ADVANCE_DELAY_MS);
    },

    back() {
      const { step } = quiz();
      if (step > 0) update({ step: step - 1 });
    },

    reset() {
      update({ session: null, answers: {}, step: 0 });
    },

    /** Drop saved progress that no longer matches the current questions (e.g. after an edit). */
    sanitize() {
      const { session, answers, step } = quiz();
      if (!isValidSession(data, session)) {
        update({ session: null, answers: {}, step: 0 });
        return;
      }
      update({ answers: pruneAnswers(data, answers), step: Math.min(Math.max(step, 0), total() - 1) });
    },
  };
}
