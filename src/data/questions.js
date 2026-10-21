// Structure only. Prompts and answer text live in src/locales/<lang>/questions.js.
//
// Every question belongs to one category and offers one answer per personality of that
// category. An option's `id` is the personality it points to, and `scores` says how many
// points it gives (normally 1 for that personality; an option may also feed others).
import { personalities } from './personalities.js';

function question(id, category) {
  const options = personalities
    .filter((personality) => personality.category === category)
    .map((personality) => ({ id: personality.id, scores: { [personality.id]: 1 } }));
  return { id, category, options };
}

export const questions = [
  question('k1', 'kacau'),
  question('k2', 'kacau'),
  question('k3', 'kacau'),
  question('k4', 'kacau'),
  question('k5', 'kacau'),
  question('k6', 'kacau'),

  question('c1', 'cara'),
  question('c2', 'cara'),
  question('c3', 'cara'),
  question('c4', 'cara'),
  question('c5', 'cara'),
  question('c6', 'cara'),

  question('t1', 'tengah'),
  question('t2', 'tengah'),
  question('t3', 'tengah'),
  question('t4', 'tengah'),
  question('t5', 'tengah'),
  question('t6', 'tengah'),

  question('i1', 'impossible'),
  question('i2', 'impossible'),
  question('i3', 'impossible'),
  question('i4', 'impossible'),
  question('i5', 'impossible'),
  question('i6', 'impossible'),
];
