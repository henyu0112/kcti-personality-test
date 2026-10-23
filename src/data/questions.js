// Structure only. Prompts and answer text live in src/locales/<lang>/questions.js.
//
// This is the question POOL: each test draws a random selection from it (see data/quiz.js
// and engine/session.js). Every question belongs to one category and shows 4 of that
// category's 5 personalities: `omit` is the one left out. An option's `id` is the
// personality it points to, and `scores` says how many points it gives (normally 1).
//
// To add a question, give it the `omit` of a personality; try to keep every personality
// left out by about the same number of questions (at least 2 each, `npm test` checks it).
// A test picks one question per left-out personality, so more questions per personality
// just means more variety between tests.
import { personalities } from './personalities.js';

function question(id, category, omit) {
  const options = personalities
    .filter((personality) => personality.category === category && personality.id !== omit)
    .map((personality) => ({ id: personality.id, scores: { [personality.id]: 1 } }));
  return { id, category, omit, options };
}

export const questions = [
  // K - Kacau Level
  question('k1', 'kacau', 'hin'),
  question('k2', 'kacau', 'zenmeban'),
  question('k3', 'kacau', 'gai'),
  question('k4', 'kacau', 'bird'),
  question('k5', 'kacau', 'nihenkeai'),
  question('k6', 'kacau', 'hin'),
  question('k7', 'kacau', 'zenmeban'),
  question('k8', 'kacau', 'gai'),
  question('k9', 'kacau', 'hin'),
  question('k10', 'kacau', 'zenmeban'),
  question('k11', 'kacau', 'gai'),
  question('k12', 'kacau', 'bird'),
  question('k13', 'kacau', 'bird'),
  question('k14', 'kacau', 'nihenkeai'),
  question('k15', 'kacau', 'nihenkeai'),

  // C - Cara Hidup
  question('c1', 'cara', 'chill'),
  question('c2', 'cara', 'kiasu'),
  question('c3', 'cara', 'paiseh'),
  question('c4', 'cara', 'syok'),
  question('c5', 'cara', 'steady'),
  question('c6', 'cara', 'chill'),
  question('c7', 'cara', 'kiasu'),
  question('c8', 'cara', 'paiseh'),
  question('c9', 'cara', 'chill'),
  question('c10', 'cara', 'kiasu'),
  question('c11', 'cara', 'paiseh'),
  question('c12', 'cara', 'syok'),
  question('c13', 'cara', 'syok'),
  question('c14', 'cara', 'steady'),
  question('c15', 'cara', 'steady'),

  // T - Tengah Loading
  question('t1', 'tengah', 'hmmm'),
  question('t2', 'tengah', 'errrr'),
  question('t3', 'tengah', 'ehhhhh'),
  question('t4', 'tengah', 'ahhhhhh'),
  question('t5', 'tengah', 'harrrrr'),
  question('t6', 'tengah', 'hmmm'),
  question('t7', 'tengah', 'errrr'),
  question('t8', 'tengah', 'ehhhhh'),
  question('t9', 'tengah', 'hmmm'),
  question('t10', 'tengah', 'errrr'),
  question('t11', 'tengah', 'ehhhhh'),
  question('t12', 'tengah', 'ahhhhhh'),
  question('t13', 'tengah', 'ahhhhhh'),
  question('t14', 'tengah', 'harrrrr'),
  question('t15', 'tengah', 'harrrrr'),

  // I - Impossible Level
  question('i1', 'impossible', 'hiao'),
  question('i2', 'impossible', 'liao'),
  question('i3', 'impossible', 'siao'),
  question('i4', 'impossible', 'biao'),
  question('i5', 'impossible', 'behhiao'),
  question('i6', 'impossible', 'hiao'),
  question('i7', 'impossible', 'liao'),
  question('i8', 'impossible', 'siao'),
  question('i9', 'impossible', 'hiao'),
  question('i10', 'impossible', 'liao'),
  question('i11', 'impossible', 'siao'),
  question('i12', 'impossible', 'biao'),
  question('i13', 'impossible', 'biao'),
  question('i14', 'impossible', 'behhiao'),
  question('i15', 'impossible', 'behhiao'),
];
