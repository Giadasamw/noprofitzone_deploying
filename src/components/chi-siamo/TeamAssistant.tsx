"use client";

export default function TeamAssistant() {
  return (
    <section className="assistant-section">
      <div className="assistant-container">
        <div className="assistant-grid">
          {/* Content - on left for desktop */}
          <div className="assistant-content">
            <p style={labelStyle}>ASSISTANT MANAGER</p>
            <h2 style={nameStyle}>Olivia Salvi</h2>
            <p style={roleStyle}>Assistant Manager</p>

            <div style={{ marginTop: 40 }}>
              <p style={bioStyle}>
                Olivia si occupa della gestione documentale, della rendicontazione tecnica
                ed economica e della reportistica per gli enti finanziatori. Garantisce
                ordine, tracciabilità e conformità in ogni fase amministrativa dei
                progetti.
              </p>
              <p style={{ ...bioStyle, marginTop: 20 }}>
                Lavora insieme a Nicoletta su ogni progetto, dalla preparazione della
                candidatura alla consegna della relazione finale per l&apos;ente finanziatore.
              </p>
              {/* Client to provide: years of experience, education background, any thematic specializations */}
            </div>
          </div>

          {/* Image - Replace with Olivia's photo */}
          <div
            className="assistant-image"
            style={{
              background: "var(--paper-2)",
              filter: "grayscale(1) contrast(1.05)",
            }}
            aria-label="Foto di Olivia Salvi"
          >
            {/* Placeholder for portrait - 3:4 aspect ratio, B&W style */}
            <div style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--muted)",
              fontSize: 12,
              fontFamily: '"Mallory", sans-serif',
              textAlign: "center",
              padding: 24,
            }}>
              {/* Replace with Olivia's photo */}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .assistant-section {
          padding: 0 0 160px;
        }
        .assistant-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 72px;
        }
        .assistant-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 96px;
          align-items: start;
        }
        .assistant-image {
          aspect-ratio: 3/4;
          border-radius: 20px;
          overflow: hidden;
        }
        .assistant-content {
          padding-top: 24px;
        }

        @media (max-width: 768px) {
          .assistant-section {
            padding: 0 0 60px;
          }
          .assistant-container {
            padding: 0 24px;
          }
          .assistant-grid {
            display: flex;
            flex-direction: column-reverse;
            gap: 40px;
          }
          .assistant-image {
            width: 100%;
            aspect-ratio: 4/5;
            border-radius: 16px;
          }
          .assistant-content {
            padding-top: 0;
          }
        }
      `}</style>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  fontFamily: '"Mallory", sans-serif',
  fontSize: 9.8,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: "var(--muted)",
  marginBottom: 16,
};

const nameStyle: React.CSSProperties = {
  fontFamily: '"Mackinac", Georgia, serif',
  fontSize: "clamp(28px, 2.8vw, 42px)",
  lineHeight: 1.05,
  letterSpacing: "-0.015em",
  fontWeight: 700,
  marginBottom: 8,
};

const roleStyle: React.CSSProperties = {
  fontFamily: '"Mallory", sans-serif',
  fontSize: 13,
  color: "var(--muted)",
};

const bioStyle: React.CSSProperties = {
  fontFamily: '"Mallory", sans-serif',
  fontSize: 13.2,
  lineHeight: 1.7,
  color: "var(--ink-soft)",
  maxWidth: 520,
};
