import { test } from 'node:test';
import assert from 'node:assert/strict';
import type { APIContext } from 'astro';
import { GET, prerender } from '../src/pages/sitemap.xml';

test('sitemap statically lists only the two canonical locale routes', async () => {
  const origin = 'https://pipesor-landing.jhon-galvezchambi.workers.dev';
  const response = await GET({ site: new URL(origin) } as APIContext);
  const xml = await response.text();
  assert.equal(prerender, true);
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('Content-Type'), 'application/xml; charset=utf-8');
  assert.ok(xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>'));
  assert.ok(xml.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'));
  assert.deepEqual([...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]), [`${origin}/`, `${origin}/es/`]);
  assert.ok(!/<lastmod>|<changefreq>|<priority>|localhost/.test(xml));
});

test('sitemap follows the configured origin and XML-escapes URL text', async () => {
  const response = await GET({ site: new URL('https://pipesor&docs.example') } as APIContext);
  const xml = await response.text();
  assert.deepEqual([...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]), [
    'https://pipesor&amp;docs.example/',
    'https://pipesor&amp;docs.example/es/',
  ]);
});
