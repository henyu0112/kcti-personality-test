// Turns the four per-group winners into the final KCTI type, like MBTI's "INTJ", and
// turns a code like "GTMS" back into a type (for result links).
// Pure: the nickname and summary wording come from the locale files, not from here.

const toPart = (category, personality) => ({
  categoryId: category.id,
  personalityId: personality.id,
  letter: personality.code,
});

/**
 * @param {object} data     the content structure from src/data
 * @param {Array}  results  the output of computeResult()
 * @returns {{ code: string, parts: Array<{categoryId, personalityId, letter}> } | null}
 *          null while any group has no winner yet.
 */
export function buildType(data, results) {
  if (results.some((result) => result.winner === null)) return null;

  const parts = results.map((result) =>
    toPart(data.categoryById.get(result.categoryId), data.personalityById.get(result.winner)),
  );
  return { code: parts.map((part) => part.letter).join(''), parts };
}

/** The type for a code such as "GTMS" (any case), or null if it is not a real type. */
export function parseType(data, code) {
  const letters = String(code ?? '').toUpperCase().split('');
  if (letters.length !== data.categories.length) return null;

  const parts = [];
  for (const [index, category] of data.categories.entries()) {
    const personality = data.personalities.find((p) => p.category === category.id && p.code === letters[index]);
    if (!personality) return null;
    parts.push(toPart(category, personality));
  }
  return { code: parts.map((part) => part.letter).join(''), parts };
}
