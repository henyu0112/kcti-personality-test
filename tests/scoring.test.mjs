import { test } from 'node:test';
import assert from 'node:assert/strict';
import { data } from '../src/data/index.js';
import { computeResult, isComplete, pruneAnswers } from '../src/engine/scoring.js';
import { createSession, isValidSession } from '../src/engine/session.js';

/** Answer every question with the option at `pick(question)`. */
const answerAll = (pick) => Object.fromEntries(data.questions.map((q) => [q.id, pick(q)]));
const resultFor = (results, categoryId) => results.find((r) => r.categoryId === categoryId);

test('always picking the first personality of each category makes it the winner', () => {
  const answers = answerAll((q) => q.options[0].id);
  const results = computeResult(data, answers);

  for (const result of results) {
    const first = data.personalities.find((p) => p.category === result.categoryId).id;
    assert.equal(result.winner, first);
    assert.equal(result.scores[first], result.questionCount);
    assert.equal(result.tied, false);
  }
});

test('the winner is the most-picked personality', () => {
  const answers = answerAll((q) => q.options[0].id);
  // In the kacau category, move 3 of the 6 answers to "gai" (4th personality).
  ['k1', 'k2', 'k3'].forEach((id) => (answers[id] = 'gai'));
  answers.k4 = 'gai'; // gai now has 4, hin has 2

  const kacau = resultFor(computeResult(data, answers), 'kacau');
  assert.equal(kacau.winner, 'gai');
  assert.equal(kacau.scores.gai, 4);
  assert.equal(kacau.supporting.length, 4);
});

test('a tie is broken by the answer given first, and flagged', () => {
  const answers = answerAll((q) => q.options[0].id);
  const order = ['k1', 'k2', 'k3', 'k4', 'k5', 'k6'];
  // 3 x "bird" and 3 x "gai": whichever was picked first should win.
  ['k1', 'k2', 'k3'].forEach((id) => (answers[id] = 'bird'));
  ['k4', 'k5', 'k6'].forEach((id) => (answers[id] = 'gai'));

  const asked = computeResult(data, answers, order);
  assert.equal(resultFor(asked, 'kacau').winner, 'bird');
  assert.equal(resultFor(asked, 'kacau').tied, true);

  const reversed = computeResult(data, answers, [...order].reverse());
  assert.equal(resultFor(reversed, 'kacau').winner, 'gai');
});

test('categories are scored independently', () => {
  const answers = answerAll((q) => q.options[0].id);
  const before = resultFor(computeResult(data, answers), 'cara').winner;

  ['k1', 'k2', 'k3', 'k4', 'k5', 'k6'].forEach((id) => (answers[id] = 'bird'));
  const after = computeResult(data, answers);

  assert.equal(resultFor(after, 'kacau').winner, 'bird');
  assert.equal(resultFor(after, 'cara').winner, before);
});

test('no answers means no winner instead of a crash', () => {
  for (const result of computeResult(data, {})) {
    assert.equal(result.winner, null);
    assert.equal(result.answered, 0);
  }
});

test('isComplete and pruneAnswers', () => {
  const full = answerAll((q) => q.options[0].id);
  assert.equal(isComplete(data, full), true);
  assert.equal(isComplete(data, { ...full, k1: undefined }), false);
  assert.equal(isComplete(data, { ...full, k1: 'not-an-option' }), false);

  assert.deepEqual(pruneAnswers(data, { k1: 'hin', k2: 'nope', ghost: 'hin' }), { k1: 'hin' });
});

test('a session covers every question once, alternating K C T I, with all options shuffled in', () => {
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
