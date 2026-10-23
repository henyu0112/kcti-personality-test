import { categories } from './categories.js';
import { personalities } from './personalities.js';
import { questions } from './questions.js';
import { questionsPerCategory } from './quiz.js';

const indexBy = (list) => new Map(list.map((item) => [item.id, item]));

// The one object the rest of the app (and the tests) read content structure from.
export const data = {
  categories,
  personalities,
  questions, // the whole pool; one test uses only some of them
  quiz: { questionsPerCategory, questionsPerTest: categories.length * questionsPerCategory },
  categoryById: indexBy(categories),
  personalityById: indexBy(personalities),
  questionById: indexBy(questions),
};
