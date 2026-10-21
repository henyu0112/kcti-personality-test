// A "session" is the random-but-fixed layout of one quiz run: which order the questions
// come in and how each question's options are shuffled. It is stored so that refreshing
// the page, or switching language, never reshuffles the options under the user.

function shuffle(list, rng) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** Questions alternate K, C, T, I, K, C, ... so the quiz doesn't feel like four blocks. */
export function createSession(data, rng = Math.random) {
  const byCategory = data.categories.map((c) => data.questions.filter((q) => q.category === c.id));
  const rounds = Math.max(...byCategory.map((list) => list.length));

  const questionOrder = [];
  for (let round = 0; round < rounds; round += 1) {
    for (const list of byCategory) {
      if (list[round]) questionOrder.push(list[round].id);
    }
  }

  const optionOrder = Object.fromEntries(
    data.questions.map((q) => [q.id, shuffle(q.options.map((o) => o.id), rng)]),
  );

  return { questionOrder, optionOrder };
}

/** A saved session is only usable if it still matches the current questions exactly. */
export function isValidSession(data, session) {
  if (!session || !Array.isArray(session.questionOrder) || !session.optionOrder) return false;

  const ids = data.questions.map((q) => q.id);
  const sameQuestions =
    session.questionOrder.length === ids.length && ids.every((id) => session.questionOrder.includes(id));
  if (!sameQuestions) return false;

  return data.questions.every((question) => {
    const order = session.optionOrder[question.id];
    return (
      Array.isArray(order) &&
      order.length === question.options.length &&
      question.options.every((option) => order.includes(option.id))
    );
  });
}
