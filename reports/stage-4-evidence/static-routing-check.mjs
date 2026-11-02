import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';

const base = process.argv[2] || 'http://localhost:8788';
const results = [];
async function get(path) {
  const response = await fetch(new URL(path, base), { redirect: 'manual', signal: AbortSignal.timeout(10000) });
  assert.equal(response.headers.get('x-content-type-options'), 'nosniff', path);
  assert.equal(response.headers.get('referrer-policy'), 'strict-origin-when-cross-origin', path);
  results.push({ path, status: response.status, mime: response.headers.get('content-type') });
  return response;
}

for (const [path, lang, home] of [
  ['/stage4-missing', 'en', '/'],
  ['/nested/missing/page?source=check', 'en', '/'],
  ['/es/stage4-missing', 'es', '/es/'],
  ['/es/nested/missing/page?source=check', 'es', '/es/'],
  ['/_headers', 'en', '/'],
]) {
  const response = await get(path);
  assert.equal(response.status, 404, path);
  const body = await response.text();
  assert.ok(body.includes(`lang="${lang}"`), path);
  assert.ok(body.includes('name="robots" content="noindex"'), path);
  assert.ok(body.includes(`href="${home}"`), path);
  assert.ok(body.includes(`href="${home}#product"`), path);
  assert.ok(!body.includes('name="email"'), path);
}

for (const path of ['/', '/es/']) assert.equal((await get(path)).status, 200, path);
const sitemap = await get('/sitemap.xml');
assert.equal(sitemap.status, 200);
assert.equal(((await sitemap.text()).match(/<loc>/g) || []).length, 2);
const verification = '/googlece11464d35f7cf12.html';
const response = await get(verification);
assert.equal(response.status, 307);
assert.equal(response.headers.get('location'), verification.replace('.html', ''));
const verificationBody = await get(response.headers.get('location'));
assert.equal(verificationBody.status, 200);
assert.equal(await verificationBody.text(), readFileSync(`public${verification}`, 'utf8'));
for (const [extension, mimes] of [['css', ['text/css']], ['js', ['text/javascript', 'application/javascript']], ['woff2', ['font/woff2']], ['webp', ['image/webp']]]) {
  const name = readdirSync('dist/_astro').find(name => name.endsWith(`.${extension}`));
  assert.ok(name, extension);
  const response = await get(`/_astro/${name}`);
  assert.equal(response.status, 200, name);
  assert.ok(mimes.includes(response.headers.get('content-type').split(';')[0]), name);
}
console.log(JSON.stringify({ base, checks: 'passed', results }, null, 2));
