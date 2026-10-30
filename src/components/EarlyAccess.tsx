import { useRef, useState } from 'react';
import { content, type Locale } from '../i18n/content';

export default function EarlyAccess({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const email = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  return <form method="dialog" onSubmit={event => event.preventDefault()} aria-labelledby="form-title" className="access-form">
    <h3 id="form-title">{copy.formLegend}</h3>
    <p id="form-notice">{copy.formNotice}</p>
    <label htmlFor="email">{copy.email}</label>
    <input ref={email} id="email" type="email" required maxLength={254} autoComplete="off" aria-describedby="email-hint form-notice" onInput={() => setChecked(false)} />
    <p id="email-hint" className="small">{copy.emailHint}</p>
    <div className="form-actions"><button type="button" className="secondary-button" onClick={() => setChecked(email.current?.reportValidity() ?? false)}>{copy.check}</button><button type="submit" disabled>{copy.disabled}</button></div>
    <noscript><p>{locale === 'en' ? 'Enable JavaScript to check the email format. Submission remains disabled.' : 'Activa JavaScript para comprobar el formato. Los envíos siguen desactivados.'}</p></noscript>
    <p className="form-feedback" role="status">{checked ? copy.valid : ''}</p>
  </form>;
}
