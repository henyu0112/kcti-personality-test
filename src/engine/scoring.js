// Pure scoring logic: no DOM, no storage, no translations. Easy to test and to reuse
// (for example by a future share-card or API feature).

/**
 * Work out the winning personality in every category.
 *
 * Highest score wins. If scores tie, the personality the person picked first (in the
 * order the questions were asked) wins - "first instinct" - and `tied` is set so the
 * UI can say so.
 *
 * @param {object} data           the content structure from src/data
 * @param {Record<string,string>} answers  questionId -> chosen option id
 * @param {string[]} questionOrder the order the questions were asked in
 */
export function computeResult(data, answers, questionOrder = data.questions.map((q) => q.id)) {
  return data.categories.map((category) => {
    const ids = data.personalities.filter((p) => p.category === category.id).map((p) => p.id);
    const scores = Object.fromEntries(ids.map((id) => [id, 0]));
    const firstSeen = {};
    const picked = [];
    let questionCount = 0;

    questionOrder.forEach((questionId, index) => {
      const question = data.questionById.get(questionId);
      if (!question || question.category !== category.id) return;
      questionCount += 1;

      const option = question.options.find((o) => o.id === answers[questionId]);
      if (!option) return;

      for (const [personalityId, points] of Object.entries(option.scores)) {
        if (!(personalityId in scores)) continue;
        scores[personalityId] += points;
        firstSeen[personalityId] ??= index;
      }
      picked.push({ questionId, option });
    });

    const ranked = [...ids].sort(
      (a, b) =>
        scores[b] - scores[a] ||
        (firstSeen[a] ?? Infinity) - (firstSeen[b] ?? Infinity) ||
        ids.indexOf(a) - ids.indexOf(b),
    );

    const answered = picked.length;
    const winner = answered > 0 ? ranked[0] : null;
    const tied = winner !== null && ranked.filter((id) => scores[id] === scores[winner]).length > 1;

    // The answers that pushed the winner up - the evidence for "why you got this".
    const supporting = picked
      .filter(({ option }) => (option.scores[winner] ?? 0) > 0)
      .map(({ questionId, option }) => ({ questionId, optionId: option.id }));

    return { categoryId: category.id, winner, scores, ranked, answered, questionCount, tied, supporting };
  });
}

/** True when every question has a valid answer. */
export function isComplete(data, answers) {
  return data.questions.every((question) => question.options.some((o) => o.id === answers[question.id]));
}

/** Keep only answers that still point at a real question and option. */
export function pruneAnswers(data, answers = {}) {
  const kept = {};
  for (const [questionId, optionId] of Object.entries(answers)) {
    const question = data.questionById.get(questionId);
    if (question?.options.some((o) => o.id === optionId)) kept[questionId] = optionId;
  }
  return kept;
}
