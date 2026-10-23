import { test } from 'node:test';
import assert from 'node:assert/strict';
import { data } from '../src/data/index.js';
import { computeResult, isComplete, pruneAnswers } from '../src/engine/scoring.js';
import { createSession, isValidSession } from '../src/engine/session.js';
import { buildType } from '../src/engine/type.js';

const resultFor = (results, categoryId) => results.find((r) => r.categoryId === categoryId);

// A fixed 8-question Kacau test, so the arithmetic below doesn't depend on how many
// questions the pool has or which ones a random session would draw.
const K_TEST = ['k1', 'k2', 'k3', 'k4', 'k5', 'k6', 'k7', 'k8'];

/** A small seeded random generator, so "random" tests are repeatable. */
function seeded(seed) {
  let state = seed;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** The option for `personalityId` if the question offers it, else its first option. */
const choose = (question, personalityId) =>
  question.options.some((o) => o.id === personalityId) ? personalityId : question.options[0].id;

/** Answer every question in `categoryId` with `choose(question, personalityId)`; others use their first option. */
const answersFavouring = (personalityId, categoryId) =>
  Object.fromEntries(
    data.questions.map((q) => [q.id, q.category === categoryId ? choose(q, personalityId) : q.options[0].id]),
  );

const ids = (categoryId) => data.personalities.filter((p) => p.category === categoryId).map((p) => p.id);

test('every personality can win its group when picked whenever it is offered', () => {
  for (const category of data.categories) {
    for (const personalityId of ids(category.id)) {
      const result = resultFor(computeResult(data, answersFavouring(personalityId, category.id)), category.id);
      assert.equal(result.winner, personalityId, `${personalityId} should win ${category.id}`);
    }
  }
});

test('ranking uses the rate, so a personality offered less often is not at a disadvantage', () => {
  // "hin" is offered in 6 questions and "nihenkeai" in 7 (see data/questions.js).
  // Both get 3 picks, but 3/6 beats 3/7 even though nihenkeai was picked first.
  const answers = Object.fromEntries(data.questions.map((q) => [q.id, q.options[0].id]));
  Object.assign(answers, { k1: 'nihenkeai', k6: 'nihenkeai', k7: 'nihenkeai', k2: 'hin', k3: 'hin', k4: 'hin', k5: 'gai', k8: 'bird' });

  const result = resultFor(computeResult(data, answers, K_TEST), 'kacau');
  assert.equal(result.scores.hin, 3);
  assert.equal(result.scores.nihenkeai, 3);
  assert.equal(result.offered.hin, 6);
  assert.equal(result.offered.nihenkeai, 7);
  assert.equal(result.winner, 'hin');
  assert.equal(result.tied, false);
});

test('a tie on rate is broken by the answer given first, and flagged', () => {
  // hin and zenmeban are both offered 6 times. Give each 3 picks.
  const answers = Object.fromEntries(data.questions.map((q) => [q.id, q.options[0].id]));
  Object.assign(answers, { k1: 'zenmeban', k2: 'hin', k3: 'zenmeban', k4: 'hin', k5: 'zenmeban', k7: 'hin', k6: 'gai', k8: 'bird' });

  const order = ['k1', 'k2', 'k3', 'k4', 'k5', 'k6', 'k7', 'k8'];
  const asked = resultFor(computeResult(data, answers, order), 'kacau');
  assert.equal(asked.scores.hin, 3);
  assert.equal(asked.scores.zenmeban, 3);
  assert.equal(asked.winner, 'zenmeban'); // zenmeban was picked first (k1)
  assert.equal(asked.tied, true);

  const reversed = resultFor(computeResult(data, answers, [...order].reverse()), 'kacau');
  assert.equal(reversed.winner, 'hin'); // hin comes first when asked in reverse (k7)
});

test('categories are scored independently', () => {
  const before = resultFor(computeResult(data, answersFavouring('bird', 'kacau')), 'cara').winner;
  const after = computeResult(data, answersFavouring('gai', 'kacau'));

  assert.equal(resultFor(after, 'kacau').winner, 'gai');
  assert.equal(resultFor(after, 'cara').winner, before);
});

test('no answers means no winner instead of a crash', () => {
  for (const result of computeResult(data, {})) {
    assert.equal(result.winner, null);
    assert.equal(result.answered, 0);
  }
});

test('isComplete and pruneAnswers', () => {
  const full = Object.fromEntries(data.questions.map((q) => [q.id, q.options[0].id]));
  assert.equal(isComplete(data, full), true);
  assert.equal(isComplete(data, { ...full, k1: undefined }), false);
  assert.equal(isComplete(data, { ...full, k1: 'not-an-option' }), false);
  // k1 does not offer "hin" (it is omitted there), so that is not a valid answer.
  assert.equal(isComplete(data, { ...full, k1: 'hin' }), false);

  assert.deepEqual(pruneAnswers(data, { k1: 'gai', k2: 'nope', ghost: 'hin', k1b: 'x' }), { k1: 'gai' });
});

test('a test is complete when its own questions are answered, whatever the rest of the pool', () => {
  const session = createSession(data, seeded(5));
  const answers = Object.fromEntries(session.questionOrder.map((id) => [id, data.questionById.get(id).options[0].id]));

  assert.equal(isComplete(data, answers, session.questionOrder), true);
  assert.equal(isComplete(data, answers), false, 'the rest of the pool is not answered');

  const [firstId] = session.questionOrder;
  assert.equal(isComplete(data, { ...answers, [firstId]: undefined }, session.questionOrder), false);

  // Answers left over from a different test are dropped.
  const stray = { ...answers, [data.questions.find((q) => !session.questionOrder.includes(q.id)).id]: 'x' };
  assert.deepEqual(pruneAnswers(data, answers, session.questionOrder), answers);
  assert.equal(Object.keys(pruneAnswers(data, stray, session.questionOrder)).length, session.questionOrder.length);
});

test('a finished random test always produces a valid 4-letter type', () => {
  for (let seed = 1; seed <= 100; seed += 1) {
    const rng = seeded(seed);
    const session = createSession(data, rng);
    const answers = Object.fromEntries(
      session.questionOrder.map((id) => {
        const options = data.questionById.get(id).options;
        return [id, options[Math.floor(rng() * options.length)].id];
      }),
    );

    const type = buildType(data, computeResult(data, answers, session.questionOrder));
    assert.match(type.code, /^[A-Z]{4}$/, `seed ${seed}`);
  }
});

test('the final type joins one letter per group, in K C T I order', () => {
  const favourites = { kacau: 'gai', cara: 'steady', tengah: 'hmmm', impossible: 'siao' };
  const answers = Object.fromEntries(
    data.questions.map((q) => [q.id, choose(q, favourites[q.category])]),
  );

  const type = buildType(data, computeResult(data, answers));
  assert.equal(type.code, 'GTMS');
  assert.deepEqual(type.parts.map((part) => part.personalityId), ['gai', 'steady', 'hmmm', 'siao']);
});

test('there is no type until every group has a winner', () => {
  assert.equal(buildType(data, computeResult(data, {})), null);
});

test('a test draws the configured number of questions and alternates K C T I', () => {
  const session = createSession(data, seeded(1));

  assert.equal(isValidSession(data, session), true);
  assert.equal(session.questionOrder.length, data.quiz.questionsPerTest);
  assert.equal(new Set(session.questionOrder).size, session.questionOrder.length, 'a question was drawn twice');

  const categories = session.questionOrder.map((id) => data.questionById.get(id).category);
  categories.forEach((category, index) => {
    assert.equal(category, data.categories[index % data.categories.length].id, `question ${index + 1}`);
  });
});

test('in every test, each personality is left out of exactly one question of its group', () => {
  for (let seed = 1; seed <= 50; seed += 1) {
    const session = createSession(data, seeded(seed));

    for (const category of data.categories) {
      const omitted = session.questionOrder
        .map((id) => data.questionById.get(id))
        .filter((q) => q.category === category.id)
        .map((q) => q.omit)
        .sort();
      const expected = data.personalities.filter((p) => p.category === category.id).map((p) => p.id).sort();
      assert.deepEqual(omitted, expected, `seed ${seed}, ${category.id}`);
    }
  }
});

test('tests differ from each other, and over many tests every question in the pool gets used', () => {
  const seen = new Set();
  const first = createSession(data, seeded(1)).questionOrder.join();
  let different = false;

  for (let seed = 1; seed <= 300; seed += 1) {
    const { questionOrder } = createSession(data, seeded(seed));
    questionOrder.forEach((id) => seen.add(id));
    if (questionOrder.join() !== first) different = true;
  }

  assert.equal(different, true, 'every test was identical');
  assert.deepEqual([...seen].sort(), data.questions.map((q) => q.id).sort(), 'some questions are never drawn');
});

test('a session can be shortened with questionsPerCategory, and stale sessions are rejected', () => {
  const rng = seeded(7);
  assert.deepEqual(createSession(data, seeded(7)), createSession(data, seeded(7)));

  const shorter = { ...data, quiz: { questionsPerCategory: 3, questionsPerTest: 12 } };
  const session = createSession(shorter, rng);
  assert.equal(session.questionOrder.length, 12);
  assert.equal(isValidSession(shorter, session), true);
  assert.equal(isValidSession(data, session), false, 'a 12-question session is stale for a 20-question test');

  const full = createSession(data, seeded(3));
  assert.equal(isValidSession(data, null), false);
  assert.equal(isValidSession(data, { ...full, questionOrder: full.questionOrder.slice(1) }), false);
  assert.equal(isValidSession(data, { ...full, questionOrder: [...full.questionOrder.slice(1), 'nope'] }), false);
  const [firstId] = full.questionOrder;
  assert.equal(isValidSession(data, { ...full, optionOrder: { ...full.optionOrder, [firstId]: ['x'] } }), false);
});
