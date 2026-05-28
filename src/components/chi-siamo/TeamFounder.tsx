"use client";

export default function TeamFounder() {
  return (
    <section className="founder-section">
      <div className="founder-container">
        <div className="founder-grid">
          {/* Image - Replace with founder photo */}
          <div
            className="founder-image"
            style={{
              background: "var(--paper-2)",
              filter: "grayscale(1) contrast(1.05)",
            }}
            aria-label="Foto di Nicoletta Allarà"
          >
            {/* Placeholder for founder portrait - 3:4 aspect ratio, B&W style */}
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
              {/* Replace with founder photo */}
            </div>
          </div>

          {/* Content */}
          <div className="founder-content">
            <p style={labelStyle}>FOUNDER</p>
            <h2 style={nameStyle}>Nicoletta Allarà</h2>
            <p style={roleStyle}>Ground Writer Consultant</p>

            <div style={{ marginTop: 40 }}>
              <p style={bioStyle}>
                Nicoletta si occupa di analisi dei bandi, strategia di candidatura e
                scrittura delle proposte. Ha esperienza pluriennale nella progettazione
                per il terzo settore, con un focus particolare sui bandi delle fondazioni
                filantropiche italiane e sui programmi europei.
              </p>
              <p style={{ ...bioStyle, marginTop: 20 }}>
                Segue direttamente ogni progetto dalla prima analisi alla chiusura,
                garantendo continuità di metodo e di interlocutore lungo l&apos;intero ciclo
                del bando. È il punto di riferimento unico per l&apos;organizzazione cliente
                in ogni fase del lavoro.
              </p>
              <p style={{ ...bioStyle, marginTop: 20 }}>
                La specializzazione dello studio è limitata per scelta: fondazioni di
                origine bancaria, programmi europei per cultura e cooperazione, bandi
                della cooperazione internazionale italiana. All&apos;interno di questo
                perimetro, l&apos;esperienza sui criteri di valutazione, sui format richiesti
                e sulle aspettative degli enti finanziatori è diretta e consolidata.
              </p>
              {/* Client to provide: years of experience, education background, any thematic specializations */}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .founder-section {
          padding: 0 0 140px;
        }
        .founder-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 72px;
        }
        .founder-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 96px;
          align-items: start;
        }
        .founder-image {
          aspect-ratio: 3/4;
          border-radius: 20px;
          overflow: hidden;
        }
        .founder-content {
          padding-top: 24px;
        }

        @media (max-width: 768px) {
          .founder-section {
            padding: 0 0 60px;
          }
          .founder-container {
            padding: 0 24px;
          }
          .founder-grid {
            display: flex;
            flex-direction: column;
            gap: 40px;
          }
          .founder-image {
            width: 100%;
            aspect-ratio: 4/5;
            border-radius: 16px;
          }
          .founder-content {
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
