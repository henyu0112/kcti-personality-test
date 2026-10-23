import { test } from 'node:test';
import assert from 'node:assert/strict';
import { matchRoute } from '../src/core/router.js';
import { data } from '../src/data/index.js';
import { buildType, parseType } from '../src/engine/type.js';

test('matchRoute matches plain paths and the root', () => {
  assert.deepEqual(matchRoute('/', '/'), {});
  assert.deepEqual(matchRoute('/quiz', '/quiz'), {});
  assert.equal(matchRoute('/quiz', '/result'), null);
  assert.equal(matchRoute('/quiz', '/quiz/extra'), null);
});

test('matchRoute pulls out :params', () => {
  assert.deepEqual(matchRoute('/result/:code', '/result/GTMS'), { code: 'GTMS' });
  assert.equal(matchRoute('/result/:code', '/result'), null);
  assert.equal(matchRoute('/result/:code', '/other/GTMS'), null);
  assert.deepEqual(matchRoute('/result/:code', '/result/a%20b'), { code: 'a b' });
  assert.equal(matchRoute('/result/:code', '/result/%E0%A4%A'), null); // malformed escape
});

test('parseType reads a code in any case and builds the same type as buildType', () => {
  const type = parseType(data, 'gtms');
  assert.equal(type.code, 'GTMS');
  assert.deepEqual(type.parts.map((part) => part.personalityId), ['gai', 'steady', 'hmmm', 'siao']);
});

test('parseType rejects anything that is not a real type', () => {
  for (const bad of ['', 'GTM', 'GTMSS', 'AAAA', 'GTM1', null, undefined, 'ZZZZ']) {
    assert.equal(parseType(data, bad), null, String(bad));
  }
  // "H" is a real letter in three groups, but "T" is not a Kacau letter.
  assert.equal(parseType(data, 'THMS'), null);
});

test('every one of the 625 combinations round-trips through its code', () => {
  const groups = data.categories.map((c) => data.personalities.filter((p) => p.category === c.id));
  let count = 0;

  for (const k of groups[0]) {
    for (const c of groups[1]) {
      for (const t of groups[2]) {
        for (const i of groups[3]) {
          const results = [k, c, t, i].map((p) => ({ categoryId: p.category, winner: p.id }));
          const built = buildType(data, results);
          assert.deepEqual(parseType(data, built.code), built);
          count += 1;
        }
      }
    }
  }
  assert.equal(count, 625);
});
