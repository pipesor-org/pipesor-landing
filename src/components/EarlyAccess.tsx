import { useState } from 'react';
import { content, type Locale } from '../i18n/content';

export default function EarlyAccess({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const [validation, setValidation] = useState<'empty' | 'invalid' | 'valid' | null>(null);
  const validate = (input: HTMLInputElement) => setValidation(input.validity.valueMissing ? 'empty' : input.validity.valid ? 'valid' : 'invalid');
  const feedback = validation === 'empty' ? copy.requiredEmail : validation === 'invalid' ? copy.invalidEmail : validation === 'valid' ? copy.valid : '';
  return <form method="dialog" onSubmit={event => event.preventDefault()} aria-labelledby="form-title" className="access-form">
    <h3 id="form-title">{copy.formLegend}</h3>
    <p id="form-notice">{copy.formNotice}</p>
    <label htmlFor="email">{copy.email}</label>
    <input id="email" type="email" required maxLength={254} autoComplete="off" aria-describedby="email-hint form-notice email-feedback" aria-invalid={validation !== null && validation !== 'valid' ? true : undefined} onBlur={event => validate(event.currentTarget)} onInput={event => { if (validation !== null) validate(event.currentTarget); }} />
    <p id="email-hint" className="small">{copy.emailHint}</p>
    <p id="email-feedback" className="form-feedback" role="status">{feedback}</p>
    <div className="form-actions"><button type="submit" disabled>{copy.disabled}</button></div>
    <noscript><p>{locale === 'en' ? 'Enable JavaScript to check the email format. Submission remains disabled.' : 'Activa JavaScript para comprobar el formato. Los envíos siguen desactivados.'}</p></noscript>
  </form>;
}
