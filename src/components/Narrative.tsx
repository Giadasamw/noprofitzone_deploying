"use client";

export default function Narrative() {
  return (
    <section className="narrative-section">
      <div className="narrative-container">
        <div className="narrative-grid">
          <div>
            <p style={monoStyle}>— Il punto di partenza</p>
            <h2 style={h2Style}>
              Come funziona, in pratica,{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400 }}>lavorare con i bandi.</em>
            </h2>
          </div>
          <div>
            <p style={paraStyle}>
              <span
                style={{
                  fontFamily: '"Mackinac", serif',
                  fontStyle: "italic",
                  fontSize: 33.6,
                  float: "left",
                  lineHeight: 0.9,
                  padding: "6px 12px 0 0",
                  color: "var(--accent)",
                }}
              >
                U
              </span>
              n&apos;organizzazione del terzo settore costruisce la propria capacità di accedere
              a finanziamenti significativi su due fronti che si alimentano a vicenda.
            </p>
            <p style={paraStyle}>
              Il primo è la qualità delle candidature: una proposta scritta bene, costruita su
              un&apos;analisi seria del bando, ha probabilità sensibilmente più alte di essere
              finanziata.
            </p>
            <p style={paraStyle}>
              Il secondo è la qualità della rendicontazione: i progetti chiusi in modo ordinato,
              con relazioni complete e spese tracciate, contribuiscono alla solidità del rapporto
              con l&apos;ente finanziatore e si riflettono sulle candidature successive.
            </p>
            <p style={{ ...paraStyle, marginBottom: 0 }}>Lo studio si occupa di entrambi.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .narrative-section {
          padding: 140px 0 120px;
          border-top: 1px solid var(--line);
        }
        .narrative-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 72px;
        }
        .narrative-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 120px;
        }
        
        @media (max-width: 768px) {
          .narrative-section {
            padding: 60px 0;
          }
          .narrative-container {
            padding: 0 24px;
          }
          .narrative-grid {
            display: flex;
            flex-direction: column;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
}

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
  fontSize: "clamp(19.6px, 1.96vw, 28px)",
  lineHeight: 1.08,
  letterSpacing: "-0.012em",
  fontWeight: 700,
};

const paraStyle: React.CSSProperties = {
  fontSize: 13.2,
  lineHeight: 1.65,
  marginBottom: 22,
  maxWidth: 580,
  color: "var(--ink-soft)",
};
