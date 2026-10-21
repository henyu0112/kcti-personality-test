import { categories } from './categories.js';
import { personalities } from './personalities.js';
import { questions } from './questions.js';

const indexBy = (list) => new Map(list.map((item) => [item.id, item]));

// The one object the rest of the app (and the tests) read content structure from.
export const data = {
  categories,
  personalities,
  questions,
  categoryById: indexBy(categories),
  personalityById: indexBy(personalities),
  questionById: indexBy(questions),
};
