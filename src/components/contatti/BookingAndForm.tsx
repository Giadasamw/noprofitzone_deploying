"use client";

import { useState } from "react";

// Replace with actual Calendly link
const CALENDLY_URL = "https://calendly.com/noprofitzone/call";

export default function BookingAndForm() {
  const [formData, setFormData] = useState({
    nome: "",
    organizzazione: "",
    email: "",
    bando: "",
    messaggio: "",
    privacy: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nome.trim()) newErrors.nome = "Il nome è obbligatorio";
    if (!formData.organizzazione.trim()) newErrors.organizzazione = "L'organizzazione è obbligatoria";
    if (!formData.email.trim()) {
      newErrors.email = "L'email è obbligatoria";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Inserisci un indirizzo email valido";
    }
    if (!formData.messaggio.trim()) newErrors.messaggio = "Raccontaci cosa cerchi";
    if (!formData.privacy) newErrors.privacy = "Devi accettare la privacy policy";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // TODO: Connect to form backend (Formspree, Resend, or similar)
    console.log("Form data submitted:", formData);

    // Simulate API delay
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section className="booking-section">
      <div className="booking-container">
        <div className="booking-grid">
          {/* LEFT: Calendly Booking (Primary) */}
          <div className="booking-column">
            <h2 style={sectionTitleStyle}>Prenota una call</h2>
            <p style={bodyTextStyle}>
              Scegli un orario nei prossimi giorni. La call si svolge online, su
              Google Meet.
            </p>

            {/* Calendly Embed */}
            <div className="calendly-wrapper">
              <iframe
                src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=faf6ec&text_color=4a4744&primary_color=cc5a2c`}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Prenota una call"
                style={{ borderRadius: 16 }}
              />
            </div>

            {/* Fallback button if embed doesn't render */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="calendly-fallback"
              style={fallbackButtonStyle}
            >
              Apri il calendario{" "}
              <span style={{ fontFamily: '"Mackinac", serif' }}>→</span>
            </a>
          </div>

          {/* RIGHT: Written Form (Alternative) */}
          <div className="form-column">
            <h2 style={sectionTitleStyle}>Preferisci scriverci?</h2>
            <p style={bodyTextStyle}>
              Compila il form qui sotto. Rispondiamo entro 24 ore lavorative.
            </p>

            {isSubmitted ? (
              <div style={successStyle}>
                <p style={{ fontFamily: '"Mackinac", Georgia, serif', fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
                  Grazie!
                </p>
                <p style={{ fontSize: 13, color: "var(--ink-soft)" }}>
                  Ti risponderemo entro 24 ore lavorative.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ marginTop: 32 }}>
                <div style={{ marginBottom: 20 }}>
                  <label style={labelStyle}>Nome e cognome *</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    style={inputStyle}
                    aria-invalid={!!errors.nome}
                  />
                  {errors.nome && <p style={errorStyle}>{errors.nome}</p>}
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label style={labelStyle}>Organizzazione *</label>
                  <input
                    type="text"
                    name="organizzazione"
                    value={formData.organizzazione}
                    onChange={handleChange}
                    style={inputStyle}
                    aria-invalid={!!errors.organizzazione}
                  />
                  {errors.organizzazione && <p style={errorStyle}>{errors.organizzazione}</p>}
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label style={labelStyle}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p style={errorStyle}>{errors.email}</p>}
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label style={labelStyle}>
                    Hai già un bando in mente?{" "}
                    <span style={{ color: "var(--muted)", fontWeight: 400 }}>(opzionale)</span>
                  </label>
                  <input
                    type="text"
                    name="bando"
                    value={formData.bando}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={labelStyle}>Raccontaci brevemente cosa cerchi *</label>
                  <textarea
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleChange}
                    style={{ ...inputStyle, minHeight: 120, resize: "vertical" }}
                    aria-invalid={!!errors.messaggio}
                  />
                  {errors.messaggio && <p style={errorStyle}>{errors.messaggio}</p>}
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label style={{ display: "flex", alignItems: "flex-start", gap: 12, cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      name="privacy"
                      checked={formData.privacy}
                      onChange={handleChange}
                      style={checkboxStyle}
                    />
                    <span style={{ fontSize: 12, color: "var(--ink-soft)", lineHeight: 1.5 }}>
                      Ho letto e accetto la{" "}
                      <a href="/privacy" style={{ color: "var(--accent)", textDecoration: "underline" }}>
                        privacy policy
                      </a>
                    </span>
                  </label>
                  {errors.privacy && <p style={errorStyle}>{errors.privacy}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    ...submitButtonStyle,
                    opacity: isSubmitting ? 0.6 : 1,
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                  }}
                >
                  {isSubmitting ? "Invio in corso..." : "Invia la richiesta"}{" "}
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
          grid-template-columns: 1.1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .booking-column {
          position: relative;
        }
        .calendly-wrapper {
          margin-top: 32px;
          min-height: 650px;
          background: var(--paper);
          border: 1px solid var(--line);
          border-radius: 16px;
          overflow: hidden;
        }
        .calendly-fallback {
          display: none;
          margin-top: 16px;
        }
        .form-column {
          border-left: 1px solid var(--line);
          padding-left: 80px;
        }

        @media (max-width: 1024px) {
          .booking-grid {
            gap: 60px;
          }
          .form-column {
            padding-left: 60px;
          }
        }

        @media (max-width: 768px) {
          .booking-section {
            padding: 0 0 60px;
          }
          .booking-container {
            padding: 0 24px;
          }
          .booking-grid {
            display: flex;
            flex-direction: column;
            gap: 60px;
          }
          .calendly-wrapper {
            min-height: 500px;
          }
          .calendly-fallback {
            display: inline-flex;
          }
          .form-column {
            border-left: none;
            border-top: 1px solid var(--line);
            padding-left: 0;
            padding-top: 60px;
          }
        }
      `}</style>
    </section>
  );
}

const sectionTitleStyle: React.CSSProperties = {
  fontFamily: '"Mackinac", Georgia, serif',
  fontSize: "clamp(22.4px, 2.24vw, 28px)",
  lineHeight: 1.1,
  letterSpacing: "-0.012em",
  fontWeight: 700,
  marginBottom: 16,
};

const bodyTextStyle: React.CSSProperties = {
  fontFamily: '"Mallory", sans-serif',
  fontSize: 13.2,
  lineHeight: 1.6,
  color: "var(--ink-soft)",
  maxWidth: 400,
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: '"Mallory", sans-serif',
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "0.04em",
  color: "var(--ink)",
  marginBottom: 8,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  fontFamily: '"Mallory", sans-serif',
  fontSize: 13,
  padding: "14px 16px",
  border: "1.5px solid var(--line)",
  borderRadius: 12,
  background: "var(--paper)",
  color: "var(--ink)",
  outline: "none",
  transition: "border-color 0.2s",
};

const checkboxStyle: React.CSSProperties = {
  width: 18,
  height: 18,
  marginTop: 2,
  accentColor: "var(--accent)",
  cursor: "pointer",
};

const errorStyle: React.CSSProperties = {
  fontFamily: '"Mallory", sans-serif',
  fontSize: 11,
  color: "#c44",
  marginTop: 6,
};

const submitButtonStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  background: "var(--accent)",
  color: "#fff",
  fontFamily: '"Mallory", sans-serif',
  fontSize: 11.1,
  padding: "14px 24px",
  borderRadius: 999,
  border: "1.5px solid var(--accent)",
};

const successStyle: React.CSSProperties = {
  marginTop: 32,
  padding: "40px 32px",
  background: "var(--paper-2)",
  borderRadius: 16,
  textAlign: "center",
};

const fallbackButtonStyle: React.CSSProperties = {
  alignItems: "center",
  gap: 10,
  background: "transparent",
  color: "var(--accent)",
  fontFamily: '"Mallory", sans-serif',
  fontSize: 11.1,
  padding: "14px 24px",
  borderRadius: 999,
  border: "1.5px solid var(--accent)",
};
