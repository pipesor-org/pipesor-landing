import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';
import EarlyAccess from '../src/components/EarlyAccess';
import { content } from '../src/i18n/content';

describe('early access and localization', () => {
  for (const locale of ['en', 'es'] as const) {
    test(`${locale}: renders a safe preview without a submission destination`, () => {
      const markup = renderToStaticMarkup(createElement(EarlyAccess, { locale }));
      assert.ok(markup.includes('method="dialog"'));
      assert.ok(markup.includes('type="submit" disabled=""'));
      assert.ok(markup.includes('type="email" required=""'));
      assert.ok(!markup.includes('action='));
      assert.ok(!markup.includes('name="email"'));
      assert.ok(markup.includes(content[locale].formNotice));
    });
  }
  test('translations have matching content shape and concise promises', () => {
    assert.deepEqual(Object.keys(content.en).sort(), Object.keys(content.es).sort());
    for (const copy of Object.values(content)) {
      assert.ok(copy.headline.join(' ').split(/\s+/).length <= 8);
      assert.equal(copy.steps.length, 4);
      assert.equal(copy.questions.length, 4);
      assert.ok(copy.insightsCaption.includes('Insights Preview'));
    }
  });
});
