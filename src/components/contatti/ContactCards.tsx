"use client";

export default function ContactCards() {
  return (
    <section className="contacts-section">
      <div className="contacts-container">
        <div style={{ marginBottom: 48 }}>
          <h2 style={sectionTitleStyle}>Le persone con cui parlerai</h2>
          <p style={{ fontSize: 13.2, lineHeight: 1.6, color: "var(--ink-soft)", maxWidth: 560, marginTop: 16 }}>
            Per il primo contatto, mettici entrambe in CC: la doppia destinazione
            garantisce continuità del rapporto e tempi di risposta più rapidi.
          </p>
        </div>

        <div className="contacts-grid">
          {/* Card 1 - Nicoletta */}
          <div className="contact-card">
            {/* Replace with Nicoletta's photo */}
            <div
              style={{
                width: 88,
                height: 88,
                borderRadius: "50%",
                background: "var(--paper-2)",
                filter: "grayscale(1) contrast(1.05)",
                flexShrink: 0,
              }}
              aria-label="Foto di Nicoletta Allarà"
            />
            <div>
              <h3 style={nameStyle}>Nicoletta Allarà</h3>
              <p style={roleStyle}>Founder · Ground Writer Consultant</p>
              {/* Replace with actual email. Consider using a reveal-on-click pattern to prevent scraping. */}
              <a
                href="mailto:nicoletta@noprofitzone.it"
                style={emailStyle}
              >
                nicoletta@noprofitzone.it
              </a>
            </div>
          </div>

          {/* Card 2 - Olivia */}
          <div className="contact-card">
            {/* Replace with Olivia's photo */}
            <div
              style={{
                width: 88,
                height: 88,
                borderRadius: "50%",
                background: "var(--paper-2)",
                filter: "grayscale(1) contrast(1.05)",
                flexShrink: 0,
              }}
              aria-label="Foto di Olivia Salvi"
            />
            <div>
              <h3 style={nameStyle}>Olivia Salvi</h3>
              <p style={roleStyle}>Assistant Manager</p>
              {/* Replace with actual email. Consider using a reveal-on-click pattern to prevent scraping. */}
              <a
                href="mailto:olivia@noprofitzone.it"
                style={emailStyle}
              >
                olivia@noprofitzone.it
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contacts-section {
          padding: 100px 0;
          background: var(--paper-2);
        }
        .contacts-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 72px;
        }
        .contacts-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }
        .contact-card {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 32px;
          background: var(--paper);
          border-radius: 20px;
          border: 1px solid var(--line-soft);
        }

        @media (max-width: 768px) {
          .contacts-section {
            padding: 60px 0;
          }
          .contacts-container {
            padding: 0 24px;
          }
          .contacts-grid {
            display: flex;
            flex-direction: column;
            gap: 24px;
          }
          .contact-card {
            padding: 24px;
            gap: 20px;
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
};

const nameStyle: React.CSSProperties = {
  fontFamily: '"Mackinac", Georgia, serif',
  fontSize: 18,
  fontWeight: 700,
  lineHeight: 1.2,
  marginBottom: 4,
};

const roleStyle: React.CSSProperties = {
  fontFamily: '"Mallory", sans-serif',
  fontSize: 12,
  color: "var(--muted)",
  marginBottom: 12,
};

const emailStyle: React.CSSProperties = {
  fontFamily: '"Mallory", sans-serif',
  fontSize: 12,
  color: "var(--accent)",
  textDecoration: "none",
  borderBottom: "1px solid var(--accent)",
  paddingBottom: 2,
};
