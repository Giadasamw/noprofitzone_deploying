"use client";

const clientTypes = [
  { label: "Fondazioni filantropiche e di origine bancaria", borderColor: "#f5d76a" },
  { label: "ONG e organizzazioni di cooperazione internazionale", borderColor: "#e0a4e8" },
  { label: "Cooperative sociali di tipo A e B", borderColor: "#d9825f" },
  { label: "Enti culturali: musei, festival, istituzioni artistiche, residenze", borderColor: "#f3a07a" },
  { label: "Imprese sociali e realtà ibride profit/non profit", borderColor: "#cdb9e8" },
];

export default function WhoWeWorkWith() {
  return (
    <section className="whoweworkwith-section">
      <div className="whoweworkwith-container">
        <div style={{ marginBottom: 56 }}>
          <p style={monoStyle}>— Per chi lavoriamo</p>
          <h2 style={h2Style}>Per chi lavoriamo</h2>
          <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--ink-soft)", maxWidth: 640, marginTop: 24 }}>
            Lo studio collabora con organizzazioni del terzo settore strutturate:
            con una mission definita, una governance chiara e l&apos;esigenza di accedere
            a finanziamenti significativi in modo continuativo.
          </p>
        </div>

        <div style={{ marginBottom: 56 }}>
          <h3 style={subheadingStyle}>Tipologie di clienti</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 20 }}>
            {clientTypes.map((c) => (
              <span
                key={c.label}
                style={{
                  fontFamily: '"Mallory", sans-serif',
                  fontSize: 11.1,
                  padding: "8px 16px",
                  borderRadius: 999,
                  color: "var(--ink)",
                  background: "transparent",
                  border: `1.5px solid ${c.borderColor}`,
                }}
              >
                {c.label}
              </span>
            ))}
          </div>
        </div>

        <div className="info-grid">
          <div>
            <h3 style={subheadingStyle}>Dimensione tipica</h3>
            <p style={infoTextStyle}>
              Organizzazioni con un team strutturato (anche piccolo, ma definito),
              una governance chiara e un budget di progetto compreso fra 30.000 e
              500.000 euro per candidatura.
            </p>
          </div>
          <div>
            <h3 style={subheadingStyle}>Ambiti tematici</h3>
            <p style={infoTextStyle}>
              Cultura, cooperazione internazionale, inclusione sociale, ambiente,
              ricerca, formazione, innovazione sociale.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .whoweworkwith-section {
          padding: 140px 0;
          border-top: 1px solid var(--line);
        }
        .whoweworkwith-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 72px;
        }
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
        }

        @media (max-width: 768px) {
          .whoweworkwith-section {
            padding: 60px 0;
          }
          .whoweworkwith-container {
            padding: 0 24px;
          }
          .info-grid {
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

const infoTextStyle: React.CSSProperties = {
  fontFamily: '"Mallory", sans-serif',
  fontSize: 13.2,
  lineHeight: 1.7,
  color: "var(--ink-soft)",
  maxWidth: 420,
};
