import { loadStyles } from '../../core/styles.js';
import { createQuizService } from './service.js';
import { renderQuiz } from './view.js';

loadStyles(new URL('./quiz.css', import.meta.url));

export default {
  id: 'quiz',
  state: { quiz: { session: null, answers: {}, step: 0 } },
  persist: ['quiz'],

  init(app) {
    app.services.quiz = createQuizService(app);
    app.services.quiz.sanitize();
  },

  routes: {
    '/quiz': (app) => (app.services.quiz.hasSession() ? renderQuiz(app) : { redirect: '/' }),
  },
};
