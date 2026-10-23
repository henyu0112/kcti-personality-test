// Helpers several features need to describe a type in the current language.
// Lives in shared/ because features must not import each other.

/** The nickname and one-line summary for a type, built from the locale's word lists. */
export function describeType(app, type) {
  // Each group fills the placeholder named by its `role` ({adjective}, {noun}, ...).
  const words = Object.fromEntries(
    type.parts.map(({ categoryId, personalityId }) => {
      const { role } = app.data.categoryById.get(categoryId);
      return [role, app.t(`types.${personalityId}.${role}`)];
    }),
  );

  return {
    nickname: app.t('ui.result.nickname', words),
    summary: app.t('ui.result.typeSummary', words),
  };
}

/** The shareable address of a result page. */
export function typeUrl(code) {
  return `${window.location.origin}${window.location.pathname}#/result/${code}`;
}
