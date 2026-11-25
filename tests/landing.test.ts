import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';
import EvidenceReplay from '../src/components/EvidenceReplay';
import { content, links, replay } from '../src/i18n/content';

const shape = (value: unknown): unknown => Array.isArray(value)
  ? value.map(shape)
  : value && typeof value === 'object'
    ? Object.fromEntries(Object.entries(value).map(([key, item]) => [key, shape(item)]))
    : typeof value;

describe('localized copy', () => {
  test('English and Spanish have the same structure', () => {
    assert.deepEqual(shape(content.es), shape(content.en));
  });

  for (const locale of ['en', 'es'] as const) {
    const copy = content[locale];
    test(`${locale}: the headline is one promise of at most eight words on two lines`, () => {
      assert.equal(copy.headline.length, 2);
      assert.ok(copy.headline.join(' ').split(/\s+/).length <= 8);
    });
    test(`${locale}: claims stay within what the product implements`, () => {
      const text = JSON.stringify(copy).toLowerCase();
      // The dashboard shows no confidence score and no demo fixtures remain.
      for (const banned of ['with confidence', 'con confianza', 'demo data', 'datos de demostración', 'inconclusive', 'no concluyente', 'early access', 'acceso anticipado']) {
        assert.ok(!text.includes(banned), `${locale} copy mentions "${banned}"`);
      }
      assert.ok(copy.heroNote.length > 0, 'prototype status is stated next to the hero action');
    });
  }
});

describe('links', () => {
  test('every outbound link uses HTTPS and the dashboard origin', () => {
    for (const href of Object.values(links)) assert.match(href, /^https:\/\//);
    for (const key of ['signIn', 'howItWorks', 'ai', 'security', 'privacy', 'terms'] as const) {
      assert.ok(links[key].startsWith(links.dashboard), key);
    }
  });
});

describe('evidence replay', () => {
  for (const locale of ['en', 'es'] as const) {
    test(`${locale}: the server renders the finished, masked state`, () => {
      const markup = renderToStaticMarkup(createElement(EvidenceReplay, { locale }));
      assert.ok(markup.includes('data-stage="3"'));
      assert.ok(markup.includes('data-masked="true"'));
      assert.equal((markup.match(/data-shown="true"/g) || []).length, replay.lines.length + 2);
      assert.ok(markup.includes(content[locale].replay.verdict));
      assert.ok(markup.includes('lang="en"'), 'the model output keeps its language');
      assert.equal((markup.match(/<button/g) || []).length, 1);
    });
  }

  test('raw secret values are hidden from assistive technology', () => {
    const markup = renderToStaticMarkup(createElement(EvidenceReplay, { locale: 'en' }));
    for (const line of replay.lines) {
      if (!('raw' in line)) continue;
      const raw = line.raw.trim();
      assert.ok(markup.includes(`<span class="replay-raw" aria-hidden="true">  ${raw}</span>`), raw);
      assert.ok(line.text.includes('[redacted]'));
    }
  });
});
