"use client";

export default function Governance() {
  return (
    <section className="governance-section">
      <div className="governance-container">
        <div style={{ marginBottom: 56 }}>
          <p style={monoStyle}>— Trasparenza</p>
          <h2 style={h2Style}>Governance e trasparenza</h2>
          <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--ink-soft)", maxWidth: 700, marginTop: 24 }}>
            No Profit Zone è un progetto di Nicoletta Allarà, libera professionista
            con partita IVA (P.IVA 09912150969), con sede operativa in Via S. Marco
            21, 20121 Milano. Olivia Salvi collabora stabilmente con lo studio come
            Assistant Manager.
          </p>
        </div>

        <div className="governance-grid">
          <div>
            <h3 style={subheadingStyle}>Modalità di lavoro e fatturazione</h3>
            <p style={textStyle}>
              Lo studio lavora con preventivi scritti dettagliati. Le tariffe
              sono comunicate prima dell&apos;inizio del lavoro e fissate per iscritto.
              Fatturazione mensile o a milestone, in funzione della tipologia di
              incarico.
            </p>
          </div>
          <div>
            <h3 style={subheadingStyle}>Conflitti d&apos;interesse</h3>
            <p style={textStyle}>
              Lo studio non lavora simultaneamente con due organizzazioni che
              concorrano allo stesso bando. Quando un potenziale conflitto emerge,
              viene dichiarato apertamente al cliente e la soluzione viene definita
              di comune accordo.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .governance-section {
          padding: 140px 0;
          border-top: 1px solid var(--line);
        }
        .governance-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 72px;
        }
        .governance-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
        }

        @media (max-width: 768px) {
          .governance-section {
            padding: 60px 0;
          }
          .governance-container {
            padding: 0 24px;
          }
          .governance-grid {
            display: flex;
            flex-direction: column;
            gap: 40px;
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
  marginBottom: 24,
};

const h2Style: React.CSSProperties = {
  fontFamily: '"Mackinac", Georgia, serif',
  fontSize: "clamp(22.4px, 2.24vw, 33.6px)",
  lineHeight: 1.05,
  letterSpacing: "-0.012em",
  fontWeight: 700,
};

const subheadingStyle: React.CSSProperties = {
  fontFamily: '"Mackinac", Georgia, serif',
  fontSize: 16,
  fontWeight: 700,
  lineHeight: 1.3,
  color: "var(--ink)",
  marginBottom: 12,
};

const textStyle: React.CSSProperties = {
  fontFamily: '"Mallory", sans-serif',
  fontSize: 13.2,
  lineHeight: 1.7,
  color: "var(--ink-soft)",
  maxWidth: 420,
};
