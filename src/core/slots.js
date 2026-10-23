// A slot is a named place where features can add content without the owner of that place
// knowing about them. Any feature may declare `slots: { '<name>': (app, ...args) => Node }`;
// whoever owns the place calls renderSlot(app, '<name>', ...args).
//
// Current slots: "header" and "background" (the shell), "result.after" (the result page).
export function renderSlot(app, name, ...args) {
  return app.features.filter((feature) => feature.slots?.[name]).map((feature) => feature.slots[name](app, ...args));
}
