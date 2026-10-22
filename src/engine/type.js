// Turns the four per-group winners into the final KCTI type, like MBTI's "INTJ".
// Pure: the nickname and summary wording come from the locale files, not from here.

/**
 * @param {object} data     the content structure from src/data
 * @param {Array}  results  the output of computeResult()
 * @returns {{ code: string, parts: Array<{categoryId, personalityId, letter}> } | null}
 *          null while any group has no winner yet.
 */
export function buildType(data, results) {
  if (results.some((result) => result.winner === null)) return null;

  const parts = results.map((result) => ({
    categoryId: result.categoryId,
    personalityId: result.winner,
    letter: data.personalityById.get(result.winner).code,
  }));

  return { code: parts.map((part) => part.letter).join(''), parts };
}
