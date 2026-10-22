// Pure scoring logic: no DOM, no storage, no translations. Easy to test and to reuse
// (for example by a future share-card or API feature).

/**
 * Work out the winning personality in every category.
 *
 * Because questions only show 4 of the 5 personalities, a personality can be offered
 * more or fewer times than another. So the ranking uses the *rate* (points earned out of
 * the times it was offered), not raw points. That keeps every personality equally easy
 * to win. Ties fall back to raw points, then to the personality the person picked first
 * in the order the questions were asked ("first instinct"). `tied` records that a tie
 * remained after the rate comparison.
 *
 * @param {object} data           the content structure from src/data
 * @param {Record<string,string>} answers  questionId -> chosen option id
 * @param {string[]} questionOrder the order the questions were asked in
 */
export function computeResult(data, answers, questionOrder = data.questions.map((q) => q.id)) {
  return data.categories.map((category) => {
    const ids = data.personalities.filter((p) => p.category === category.id).map((p) => p.id);
    const scores = Object.fromEntries(ids.map((id) => [id, 0]));
    const offered = Object.fromEntries(ids.map((id) => [id, 0]));
    const firstSeen = {};
    const picked = [];
    let questionCount = 0;

    questionOrder.forEach((questionId, index) => {
      const question = data.questionById.get(questionId);
      if (!question || question.category !== category.id) return;
      questionCount += 1;

      const seen = new Set(question.options.flatMap((o) => Object.keys(o.scores)));
      for (const personalityId of seen) if (personalityId in offered) offered[personalityId] += 1;

      const option = question.options.find((o) => o.id === answers[questionId]);
      if (!option) return;

      for (const [personalityId, points] of Object.entries(option.scores)) {
        if (!(personalityId in scores)) continue;
        scores[personalityId] += points;
        firstSeen[personalityId] ??= index;
      }
      picked.push({ questionId, option });
    });

    // Positive when `b` has the higher rate. Cross-multiplied so there is no float rounding.
    const rateGap = (a, b) => scores[b] * offered[a] - scores[a] * offered[b];

    const ranked = [...ids].sort(
      (a, b) =>
        rateGap(a, b) ||
        scores[b] - scores[a] ||
        (firstSeen[a] ?? Infinity) - (firstSeen[b] ?? Infinity) ||
        ids.indexOf(a) - ids.indexOf(b),
    );

    const answered = picked.length;
    const winner = answered > 0 ? ranked[0] : null;
    const tied = winner !== null && ranked.some((id) => id !== winner && rateGap(winner, id) === 0);

    // The answers that pushed the winner up.
    const supporting = picked
      .filter(({ option }) => (option.scores[winner] ?? 0) > 0)
      .map(({ questionId, option }) => ({ questionId, optionId: option.id }));

    return { categoryId: category.id, winner, scores, offered, ranked, answered, questionCount, tied, supporting };
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
