import { test } from 'node:test';
import assert from 'node:assert/strict';
import { data } from '../src/data/index.js';
import { computeResult, isComplete, pruneAnswers } from '../src/engine/scoring.js';
import { createSession, isValidSession } from '../src/engine/session.js';
import { buildType } from '../src/engine/type.js';

const resultFor = (results, categoryId) => results.find((r) => r.categoryId === categoryId);

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

  const result = resultFor(computeResult(data, answers), 'kacau');
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

test('a session covers every question once, alternating K C T I, with options shuffled', () => {
  const session = createSession(data);

  assert.equal(isValidSession(data, session), true);
  assert.deepEqual([...session.questionOrder].sort(), data.questions.map((q) => q.id).sort());
  assert.deepEqual(
    session.questionOrder.slice(0, 4).map((id) => data.questionById.get(id).category),
    data.categories.map((c) => c.id),
  );
});

test('sessions are reproducible with a seeded rng, and stale sessions are rejected', () => {
  const rng = () => 0.5;
  assert.deepEqual(createSession(data, rng), createSession(data, rng));

  const session = createSession(data);
  assert.equal(isValidSession(data, null), false);
  assert.equal(isValidSession(data, { ...session, questionOrder: session.questionOrder.slice(1) }), false);
  assert.equal(isValidSession(data, { ...session, optionOrder: { ...session.optionOrder, k1: ['x'] } }), false);
});
