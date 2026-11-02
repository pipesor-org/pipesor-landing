import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

const approvedOrigin = 'https://pipesor-landing.jhon-galvezchambi.workers.dev';
const inspectConfig = (command: string, site?: string) => {
  const env = { ...process.env };
  if (site === undefined) delete env.SITE_URL;
  else env.SITE_URL = site;
  return spawnSync(process.execPath, ['--eval', `
    import config from './astro.config.mjs';
    config.integrations.find(item => item.name === 'public-site-origin')
      .hooks['astro:config:setup']({ command: ${JSON.stringify(command)} });
    console.log(config.site);
  `], { cwd: new URL('..', import.meta.url), env, encoding: 'utf8' });
};

for (const site of [undefined, '', 'not-a-url', 'http://pipesor.com', 'https://localhost',
  'https://app.localhost', 'https://127.0.0.1', 'https://192.168.1.39', 'https://[::1]',
  'https://app.local', 'https://app.internal', 'https://pipesor.com/path',
  'https://pipesor.com?preview=1', 'https://pipesor.com#preview', 'https://user:pass@pipesor.com']) {
  test(`release metadata rejects unsafe origin: ${site}`, () => {
    const result = inspectConfig('build', site);
    assert.notEqual(result.status, 0, `accepted unsafe origin: ${site}`);
    assert.match(result.stderr, /Builds require SITE_URL/);
  });
}

for (const site of [approvedOrigin, `${approvedOrigin}/`]) {
  test(`release metadata accepts approved origin: ${site}`, () => {
    const result = inspectConfig('build', site);
    assert.equal(result.status, 0, result.stderr);
    assert.equal(result.stdout.trim(), site);
  });
}

for (const command of ['dev', 'sync', 'preview']) {
  test(`${command} does not require a release origin`, () => {
    const result = inspectConfig(command);
    assert.equal(result.status, 0, result.stderr);
    assert.equal(result.stdout.trim(), 'http://localhost:4321');
  });
}
