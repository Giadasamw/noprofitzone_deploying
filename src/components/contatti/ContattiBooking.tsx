"use client";

import { useState, FormEvent } from "react";

const CALENDLY_URL = "https://calendly.com/giadapacchioni-co/30min";

const monoStyle: React.CSSProperties = {
  fontFamily: '"Mallory", sans-serif',
  fontSize: 11,
  letterSpacing: "0.24em",
  textTransform: "uppercase",
  color: "var(--muted)",
  marginBottom: 18,
};

const h2Style: React.CSSProperties = {
  fontFamily: '"Mackinac", Georgia, serif',
  fontSize: "clamp(22.4px, 2.24vw, 33.6px)",
  lineHeight: 1.05,
  letterSpacing: "-0.012em",
  fontWeight: 700,
  marginBottom: 16,
};

const paraStyle: React.CSSProperties = {
  fontSize: 13.2,
  lineHeight: 1.65,
  color: "var(--ink-soft)",
  marginBottom: 32,
  maxWidth: 480,
};

interface FormState {
  nome: string;
  organizzazione: string;
  email: string;
  bando: string;
  messaggio: string;
  privacy: boolean;
}

const initialState: FormState = {
  nome: "",
  organizzazione: "",
  email: "",
  bando: "",
  messaggio: "",
  privacy: false,
};

export default function ContattiBooking() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.nome.trim()) next.nome = "Inserisci nome e cognome.";
    if (!form.organizzazione.trim()) next.organizzazione = "Inserisci il nome dell'organizzazione.";
    if (!form.email.trim()) {
      next.email = "Inserisci un indirizzo email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Inserisci un indirizzo email valido.";
    }
    if (!form.messaggio.trim()) next.messaggio = "Raccontaci brevemente cosa cerchi.";
    if (!form.privacy) next.privacy = "Devi accettare la privacy policy per continuare.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // TODO: Connect to form backend (Formspree, Resend, or similar)
    console.log("Contatti form submission:", form);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitting(false);
    setSuccess(true);
    setForm(initialState);
  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <section className="booking-section">
      <div className="booking-container">
        <div className="booking-grid">
          {/* CT2 — Booking (primary) */}
          <div className="booking-card booking-primary">
            <p style={monoStyle}>— Prenota</p>
            <h2 style={h2Style}>
              Prenota una <em style={{ fontStyle: "italic", fontWeight: 400 }}>call.</em>
            </h2>
            <p style={paraStyle}>
              Scegli un orario nei prossimi giorni. La call si svolge online, su Google Meet.
            </p>

            {/* Calendly inline embed. Replace with actual Calendly link */}
            <div className="calendly-wrapper">
              <iframe
                src={CALENDLY_URL}
                title="Prenota una call con No Profit Zone"
                className="calendly-iframe"
              />
              <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="calendly-fallback">
                Apri il calendario{" "}
                <span style={{ fontFamily: '"Mackinac", serif', fontSize: 13 }}>→</span>
              </a>
            </div>
          </div>

          {/* CT3 — Form (alternative) */}
          <div className="booking-card booking-secondary">
            <p style={monoStyle}>— Oppure</p>
            <h2 style={h2Style}>
              Preferisci <em style={{ fontStyle: "italic", fontWeight: 400 }}>scriverci?</em>
            </h2>
            <p style={paraStyle}>
              Compila il form qui sotto. Rispondiamo entro 24 ore lavorative.
            </p>

            {success ? (
              <div className="form-success">
                Grazie! Ti risponderemo entro 24 ore lavorative.
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label className="field-label" htmlFor="nome">Nome e cognome</label>
                  <input
                    id="nome"
                    type="text"
                    className="field-input"
                    value={form.nome}
                    onChange={(e) => update("nome", e.target.value)}
                  />
                  {errors.nome && <span className="field-error">{errors.nome}</span>}
                </div>

                <div className="field">
                  <label className="field-label" htmlFor="organizzazione">Organizzazione</label>
                  <input
                    id="organizzazione"
                    type="text"
                    className="field-input"
                    value={form.organizzazione}
                    onChange={(e) => update("organizzazione", e.target.value)}
                  />
                  {errors.organizzazione && <span className="field-error">{errors.organizzazione}</span>}
                </div>

                <div className="field">
                  <label className="field-label" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="field-input"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>

                <div className="field">
                  <label className="field-label" htmlFor="bando">
                    Hai già un bando in mente?{" "}
                    <span className="field-optional">(facoltativo)</span>
                  </label>
                  <input
                    id="bando"
                    type="text"
                    className="field-input"
                    value={form.bando}
                    onChange={(e) => update("bando", e.target.value)}
                  />
                </div>

                <div className="field">
                  <label className="field-label" htmlFor="messaggio">Raccontaci brevemente cosa cerchi</label>
                  <textarea
                    id="messaggio"
                    className="field-input field-textarea"
                    value={form.messaggio}
                    onChange={(e) => update("messaggio", e.target.value)}
                  />
                  {errors.messaggio && <span className="field-error">{errors.messaggio}</span>}
                </div>

                <div className="field-checkbox">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={form.privacy}
                      onChange={(e) => update("privacy", e.target.checked)}
                    />
                    <span>
                      Ho letto e accetto la{" "}
                      <a href="/privacy" style={{ textDecoration: "underline" }}>
                        privacy policy
                      </a>
                    </span>
                  </label>
                  {errors.privacy && <span className="field-error">{errors.privacy}</span>}
                </div>

                <button type="submit" className="submit-btn" disabled={submitting}>
                  {submitting ? "Invio in corso…" : "Invia la richiesta"}{" "}
                  <span style={{ fontFamily: '"Mackinac", serif', fontSize: 11.2 }}>→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .booking-section {
          padding: 0 0 120px;
        }
        .booking-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 72px;
        }
        .booking-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 32px;
          align-items: stretch;
        }
        .booking-card {
          border: 1px solid var(--line);
          border-radius: 24px;
          padding: 56px;
          display: flex;
          flex-direction: column;
        }
        .booking-primary {
          background: var(--paper-2);
        }
        .booking-secondary {
          background: var(--paper);
        }
        .calendly-wrapper {
          margin-top: 8px;
          border-radius: 16px;
          overflow: hidden;
          background: var(--paper);
          flex: 1;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .calendly-iframe {
          width: 100%;
          min-height: 650px;
          border: none;
          border-radius: 16px;
          flex: 1;
        }
        .calendly-fallback {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--ink);
          color: var(--paper);
          font-family: "Mallory", sans-serif;
          font-size: 11.1px;
          padding: 14px 24px;
          border-radius: 999px;
          border: 1.5px solid var(--ink);
          margin-top: 16px;
          align-self: flex-start;
        }
        .field {
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
        }
        .field-label {
          font-family: "Mallory", sans-serif;
          font-size: 11px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--ink);
          margin-bottom: 8px;
        }
        .field-optional {
          text-transform: none;
          letter-spacing: normal;
          color: var(--muted);
          font-style: italic;
        }
        .field-input {
          font-family: "Mallory", sans-serif;
          font-size: 13px;
          color: var(--ink);
          background: var(--paper);
          border: 1.5px solid var(--line);
          border-radius: 12px;
          padding: 12px 16px;
          outline: none;
          transition: border-color 0.2s;
        }
        .field-input:focus {
          border-color: var(--accent);
        }
        .field-textarea {
          min-height: 120px;
          resize: vertical;
          font-family: "Mallory", sans-serif;
        }
        .field-error {
          font-size: 11px;
          color: var(--accent-deep);
          margin-top: 6px;
        }
        .field-checkbox {
          margin-bottom: 24px;
        }
        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 12.5px;
          line-height: 1.6;
          color: var(--ink-soft);
          cursor: pointer;
        }
        .checkbox-label input {
          margin-top: 3px;
          accent-color: var(--accent);
        }
        .submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: var(--ink);
          color: var(--paper);
          font-family: "Mallory", sans-serif;
          font-size: 11.1px;
          padding: 14px 24px;
          border-radius: 999px;
          border: 1.5px solid var(--ink);
          cursor: pointer;
          align-self: flex-start;
          transition: opacity 0.2s;
        }
        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .form-success {
          font-size: 13.2px;
          line-height: 1.65;
          color: var(--ink);
          background: var(--paper-2);
          border-radius: 16px;
          padding: 24px;
        }

        @media (max-width: 968px) {
          .booking-grid {
            display: flex;
            flex-direction: column;
          }
        }

        @media (max-width: 768px) {
          .booking-section {
            padding: 0 0 60px;
          }
          .booking-container {
            padding: 0 24px;
          }
          .booking-card {
            padding: 32px 24px;
            border-radius: 20px;
          }
          .calendly-iframe {
            min-height: 500px;
          }
        }
      `}</style>
    </section>
  );
}
