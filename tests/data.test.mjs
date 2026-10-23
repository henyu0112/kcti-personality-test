import { test } from 'node:test';
import assert from 'node:assert/strict';
import { data } from '../src/data/index.js';
import { locales } from '../src/locales/index.js';
import { ICON_SHAPES } from '../src/shared/icons.js';

const flatten = (object, prefix = '') =>
  Object.entries(object).flatMap(([key, value]) =>
    value && typeof value === 'object' ? flatten(value, `${prefix}${key}.`) : [`${prefix}${key}`],
  );

const personalitiesOf = (categoryId) => data.personalities.filter((p) => p.category === categoryId);
const questionsOf = (categoryId) => data.questions.filter((q) => q.category === categoryId);

test('every category has exactly 5 personalities', () => {
  for (const category of data.categories) {
    assert.equal(personalitiesOf(category.id).length, 5, category.id);
  }
});

test('every personality belongs to a real category', () => {
  for (const personality of data.personalities) {
    assert.ok(data.categoryById.has(personality.category), personality.id);
  }
});

test('ids are unique', () => {
  for (const list of [data.categories, data.personalities, data.questions]) {
    assert.equal(new Set(list.map((item) => item.id)).size, list.length);
  }
});

test('type letters are single capitals, unique within their group', () => {
  for (const category of data.categories) {
    const letters = personalitiesOf(category.id).map((p) => p.code);
    assert.ok(letters.every((letter) => /^[A-Z]$/.test(letter)), `${category.id}: ${letters}`);
    assert.equal(new Set(letters).size, letters.length, `${category.id}: duplicate letter in ${letters}`);
  }
});

test('every personality has its own icon from the icon set', () => {
  for (const personality of data.personalities) {
    assert.ok(ICON_SHAPES[personality.icon], `${personality.id} uses unknown icon "${personality.icon}"`);
  }
  const icons = data.personalities.map((p) => p.icon);
  assert.equal(new Set(icons).size, icons.length, 'two personalities share an icon');
});

test('every question shows 4 different personalities of its own category', () => {
  for (const question of data.questions) {
    const shown = question.options.map((o) => o.id);
    assert.equal(shown.length, 4, question.id);
    assert.equal(new Set(shown).size, 4, `${question.id} repeats an option`);

    const own = personalitiesOf(question.category).map((p) => p.id);
    assert.ok(shown.every((id) => own.includes(id)), `${question.id} shows a personality from another group`);
    assert.ok(!shown.includes(question.omit), `${question.id} still shows its omitted option`);
  }
});

test('every category has the same number of questions', () => {
  const counts = data.categories.map((c) => questionsOf(c.id).length);
  assert.equal(new Set(counts).size, 1, `counts differ: ${counts}`);
});

test('personalities are offered about equally often within a group (spread of at most 1)', () => {
  for (const category of data.categories) {
    const counts = personalitiesOf(category.id).map(
      (p) => questionsOf(category.id).filter((q) => q.options.some((o) => o.id === p.id)).length,
    );
    assert.ok(Math.max(...counts) - Math.min(...counts) <= 1, `${category.id}: offered ${counts} times`);
  }
});

for (const [code, bundle] of Object.entries(locales)) {
  test(`locale "${code}" has all text for every category, personality, type word and question`, () => {
    for (const category of data.categories) {
      const text = bundle.categories[category.id];
      for (const field of ['title', 'subtitle']) assert.ok(text?.[field], `${category.id}.${field}`);
    }

    for (const personality of data.personalities) {
      const text = bundle.personalities[personality.id];
      for (const field of ['name', 'meaning', 'description', 'why']) assert.ok(text?.[field], `${personality.id}.${field}`);

      const { role } = data.categoryById.get(personality.category);
      assert.ok(bundle.types[personality.id]?.[role], `types.${personality.id}.${role}`);
    }

    for (const question of data.questions) {
      const text = bundle.questions[question.id];
      assert.ok(text?.prompt, `${question.id}.prompt`);
      for (const option of question.options) assert.ok(text.options?.[option.id], `${question.id}.options.${option.id}`);
      for (const extra of Object.keys(text.options ?? {})) {
        assert.ok(question.options.some((o) => o.id === extra), `${question.id} has text for unused option "${extra}"`);
      }
    }
  });

  test(`locale "${code}" questions never give a personality away by name or catchphrase`, () => {
    // Words that would make an answer obvious: every personality's name (split into words),
    // plus a few catchphrases that are not part of a name.
    const extras = ['lepak', '可爱勒', '不要'];
    const ordinaryWords = new Set(['beh']); // "Beh" of "Beh Hiao" would match "behind"; "Hiao" still catches the name
    const banned = [
      ...data.personalities
        .flatMap((p) => bundle.personalities[p.id].name.split(/\s+/))
        .filter((word) => word.length >= 3 && !ordinaryWords.has(word.toLowerCase())),
      ...extras,
    ];
    const escape = (word) => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const appears = (text, word) =>
      /^[\x00-\x7f]+$/.test(word) ? new RegExp(`\\b${escape(word)}`, 'i').test(text) : text.includes(word);

    for (const question of data.questions) {
      const text = bundle.questions[question.id];
      for (const [where, line] of [['prompt', text.prompt], ...Object.entries(text.options).map(([id, t]) => [`option ${id}`, t])]) {
        const hit = banned.find((word) => appears(line, word));
        assert.equal(hit, undefined, `${question.id} ${where} contains "${hit}": ${line}`);
      }
    }
  });

  test(`locale "${code}" has the same UI keys as English`, () => {
    assert.deepEqual(flatten(bundle.ui).sort(), flatten(locales.en.ui).sort());
  });

  test(`locale "${code}" nickname and summary templates use every role placeholder`, () => {
    for (const { role } of data.categories) {
      const used = bundle.ui.result.nickname.includes(`{${role}}`) || bundle.ui.result.typeSummary.includes(`{${role}}`);
      assert.ok(used, `neither ui.result.nickname nor ui.result.typeSummary uses {${role}}`);
    }
  });
}
