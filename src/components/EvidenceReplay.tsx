import { useCallback, useEffect, useRef, useState } from 'react';
import { content, replay, type Locale } from '../i18n/content';

/**
 * Replays run #45538080390 of the public pipesor-demo repository: the failing
 * log streams in, its host and password are masked, the probable cause appears
 * and a person confirms it.
 *
 * The server renders the finished state, so the page reads completely without
 * script. Assistive technology always receives the masked text: raw values are
 * `aria-hidden` and the stages are revealed with opacity only.
 */
export type Stage = 0 | 1 | 2 | 3;
const LINE_MS = 160;
// The redaction bar covers the value by about 300 ms into its 620 ms sweep; the text swaps under it.
const after = { mask: 350, swap: 300, cause: 650, verdict: 1000 };

export default function EvidenceReplay({ locale }: { locale: Locale }) {
  const copy = content[locale].replay;
  const total = replay.lines.length;
  const [lines, setLines] = useState<number>(total);
  const [stage, setStage] = useState<Stage>(3);
  const [masked, setMasked] = useState(true);
  const timers = useRef<number[]>([]);

  const clear = () => { timers.current.forEach(window.clearTimeout); timers.current = []; };
  const at = (ms: number, step: () => void) => { timers.current.push(window.setTimeout(step, ms)); };

  const play = useCallback(() => {
    clear();
    setLines(0); setStage(0); setMasked(false);
    for (let index = 1; index <= total; index += 1) at(index * LINE_MS, () => setLines(index));
    const streamed = total * LINE_MS;
    at(streamed + after.mask, () => setStage(1));
    at(streamed + after.mask + after.swap, () => setMasked(true));
    at(streamed + after.mask + after.cause, () => setStage(2));
    at(streamed + after.mask + after.cause + after.verdict, () => setStage(3));
  }, [total]);

  useEffect(() => {
    document.documentElement.classList.remove('replay-pending');
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) play();
    return clear;
  }, [play]);

  return (
    <figure className="replay" data-stage={stage} data-masked={masked || undefined} aria-label={copy.label}>
      <div className="replay-head">
        <span className="replay-run" translate="no">{replay.repository} · {replay.workflow} · run {replay.run}</span>
        <ol className="replay-stages">
          {copy.stages.map((name, index) => (
            <li key={name} data-done={index <= stage || undefined} aria-current={index === stage ? 'step' : undefined}>{name}</li>
          ))}
        </ol>
      </div>
      <pre className="replay-log" translate="no"><code>
        {replay.lines.map((line, index) => (
          <span key={index} className="replay-line" data-shown={index < lines || undefined} data-secret={'raw' in line || undefined}>
            <span className="replay-time">{line.time} </span>
            {'raw' in line ? (
              <span className="replay-secret">
                <span className="replay-raw" aria-hidden="true">{line.raw}</span>
                <span className="replay-masked">{line.text}</span>
              </span>
            ) : line.text}
            {'\n'}
          </span>
        ))}
      </code></pre>
      <div className="replay-result" data-shown={stage >= 2 || undefined}>
        <p className="replay-label">{copy.cause}</p>
        <p className="replay-cause" lang="en">{replay.cause}</p>
        <p className="replay-meta">{copy.ready}</p>
      </div>
      <div className="replay-verdict" data-shown={stage >= 3 || undefined}>
        <span className="replay-mark" aria-hidden="true" />
        <p><strong>{copy.verdict}</strong> <span>{copy.verdictDetail}</span></p>
      </div>
      <figcaption>
        <span>{copy.caption}</span>
        <button type="button" className="replay-button" onClick={play}>
          <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M4 11a7 7 0 1 0 2.1-5" /><path d="M5 2.5v3.8h3.8" /></svg>
          {copy.replay}
        </button>
      </figcaption>
    </figure>
  );
}
