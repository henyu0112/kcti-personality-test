import { test } from 'node:test';
import assert from 'node:assert/strict';
import { data } from '../src/data/index.js';
import { locales } from '../src/locales/index.js';

const flatten = (object, prefix = '') =>
  Object.entries(object).flatMap(([key, value]) =>
    value && typeof value === 'object' ? flatten(value, `${prefix}${key}.`) : [`${prefix}${key}`],
  );

test('every category has exactly 5 personalities', () => {
  for (const category of data.categories) {
    const count = data.personalities.filter((p) => p.category === category.id).length;
    assert.equal(count, 5, `${category.id} has ${count}`);
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

test('every question offers one option per personality of its category', () => {
  for (const question of data.questions) {
    const expected = data.personalities.filter((p) => p.category === question.category).map((p) => p.id).sort();
    assert.deepEqual(question.options.map((o) => o.id).sort(), expected, question.id);
  }
});

test('every category has the same number of questions', () => {
  const counts = data.categories.map((c) => data.questions.filter((q) => q.category === c.id).length);
  assert.equal(new Set(counts).size, 1, `counts differ: ${counts}`);
});

for (const [code, bundle] of Object.entries(locales)) {
  test(`locale "${code}" has all text for every category, personality and question`, () => {
    for (const category of data.categories) {
      const text = bundle.categories[category.id];
      for (const field of ['title', 'subtitle', 'summary']) assert.ok(text?.[field], `${category.id}.${field}`);
      assert.ok(text.summary.includes('{name}'), `${category.id}.summary needs {name}`);
    }

    for (const personality of data.personalities) {
      const text = bundle.personalities[personality.id];
      for (const field of ['name', 'meaning', 'description', 'why']) assert.ok(text?.[field], `${personality.id}.${field}`);
    }

    for (const question of data.questions) {
      const text = bundle.questions[question.id];
      assert.ok(text?.prompt, `${question.id}.prompt`);
      for (const option of question.options) assert.ok(text.options?.[option.id], `${question.id}.options.${option.id}`);
    }
  });

  test(`locale "${code}" has the same UI keys as English`, () => {
    assert.deepEqual(flatten(bundle.ui).sort(), flatten(locales.en.ui).sort());
  });
}
