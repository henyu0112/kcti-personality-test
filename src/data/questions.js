// Structure only. Prompts and answer text live in src/locales/<lang>/questions.js.
//
// Every question belongs to one category and shows 4 of that category's 5 personalities:
// `omit` is the one left out. An option's `id` is the personality it points to, and
// `scores` says how many points it gives (normally 1 for that personality).
//
// Keep the omissions spread evenly (each personality left out about as often as the
// others) so no personality is offered noticeably more than the rest. `npm test` checks it.
import { personalities } from './personalities.js';

function question(id, category, omit) {
  const options = personalities
    .filter((personality) => personality.category === category && personality.id !== omit)
    .map((personality) => ({ id: personality.id, scores: { [personality.id]: 1 } }));
  return { id, category, omit, options };
}

export const questions = [
  question('k1', 'kacau', 'hin'),
  question('k2', 'kacau', 'zenmeban'),
  question('k3', 'kacau', 'gai'),
  question('k4', 'kacau', 'bird'),
  question('k5', 'kacau', 'nihenkeai'),
  question('k6', 'kacau', 'hin'),
  question('k7', 'kacau', 'zenmeban'),
  question('k8', 'kacau', 'gai'),

  question('c1', 'cara', 'chill'),
  question('c2', 'cara', 'kiasu'),
  question('c3', 'cara', 'paiseh'),
  question('c4', 'cara', 'syok'),
  question('c5', 'cara', 'steady'),
  question('c6', 'cara', 'chill'),
  question('c7', 'cara', 'kiasu'),
  question('c8', 'cara', 'paiseh'),

  question('t1', 'tengah', 'hmmm'),
  question('t2', 'tengah', 'errrr'),
  question('t3', 'tengah', 'ehhhhh'),
  question('t4', 'tengah', 'ahhhhhh'),
  question('t5', 'tengah', 'harrrrr'),
  question('t6', 'tengah', 'hmmm'),
  question('t7', 'tengah', 'errrr'),
  question('t8', 'tengah', 'ehhhhh'),

  question('i1', 'impossible', 'hiao'),
  question('i2', 'impossible', 'liao'),
  question('i3', 'impossible', 'siao'),
  question('i4', 'impossible', 'biao'),
  question('i5', 'impossible', 'behhiao'),
  question('i6', 'impossible', 'hiao'),
  question('i7', 'impossible', 'liao'),
  question('i8', 'impossible', 'siao'),
];
