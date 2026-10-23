// A "session" is one run of the quiz: which questions were drawn from the pool, the order
// they come in, and how each question's options are shuffled. It is stored so that
// refreshing the page, or switching language, never changes the questions under the user.

function shuffle(list, rng) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Draw the questions for one test.
 *
 * For each group, pick one random question for each personality being "left out" (see
 * data/questions.js), up to data.quiz.questionsPerCategory. With the default (one per
 * personality) every personality is shown in all but one of its group's questions, so each
 * has the same chance. Questions then alternate K, C, T, I, K, C, ... so the quiz doesn't
 * feel like four blocks.
 */
export function createSession(data, rng = Math.random) {
  const wanted = data.quiz.questionsPerCategory;

  const picksByCategory = data.categories.map((category) => {
    const pool = data.questions.filter((q) => q.category === category.id);
    const leftOut = shuffle(
      data.personalities.filter((p) => p.category === category.id).map((p) => p.id),
      rng,
    ).slice(0, wanted);

    const picks = [];
    for (const personalityId of leftOut) {
      const candidates = pool.filter((q) => q.omit === personalityId);
      if (candidates.length > 0) picks.push(candidates[Math.floor(rng() * candidates.length)]);
    }
    // A thin pool might have no question for some personality; top up so the test keeps its length.
    for (const question of shuffle(pool, rng)) {
      if (picks.length >= wanted) break;
      if (!picks.includes(question)) picks.push(question);
    }
    return picks;
  });

  const questionOrder = [];
  for (let round = 0; round < wanted; round += 1) {
    for (const picks of picksByCategory) {
      if (picks[round]) questionOrder.push(picks[round].id);
    }
  }

  const optionOrder = Object.fromEntries(
    questionOrder.map((id) => [id, shuffle(data.questionById.get(id).options.map((o) => o.id), rng)]),
  );

  return { questionOrder, optionOrder };
}

/** A saved session is only usable if it still matches the current questions and test length. */
export function isValidSession(data, session) {
  if (!session || !Array.isArray(session.questionOrder) || !session.optionOrder) return false;

  const { questionOrder } = session;
  if (questionOrder.length !== data.quiz.questionsPerTest) return false;
  if (new Set(questionOrder).size !== questionOrder.length) return false;

  return questionOrder.every((id) => {
    const question = data.questionById.get(id);
    const order = session.optionOrder[id];
    return (
      question &&
      Array.isArray(order) &&
      order.length === question.options.length &&
      question.options.every((option) => order.includes(option.id))
    );
  });
}
