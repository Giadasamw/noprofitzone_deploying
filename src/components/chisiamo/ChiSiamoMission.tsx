"use client";

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

export default function ChiSiamoMission() {
  return (
    <section className="mission-section">
      <div className="mission-container">
        <div className="mission-grid">
          <div>
            <p style={monoStyle}>— Perché esiste</p>
            <h2 style={h2Style}>
              Cosa intendiamo per{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400 }}>consulenza boutique.</em>
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
                M
              </span>
              olte organizzazioni del terzo settore non hanno bisogno di un team numeroso,
              ma di due persone che conoscano davvero il bando, capiscano l&apos;organizzazione
              e seguano il progetto dall&apos;inizio alla fine.
            </p>
            <p style={paraStyle}>
              Per questo No Profit Zone è rimasto uno studio di due persone: ogni progetto
              è seguito direttamente da chi lo scrive e da chi lo rendiconta, senza
              passaggi a collaboratori junior o consulenti esterni.
            </p>
            <p style={{ ...paraStyle, marginBottom: 0 }}>
              La specializzazione è limitata per scelta, e gli incarichi vengono accettati
              solo quando lo studio ritiene di poter offrire un contributo effettivo.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mission-section {
          padding: 120px 0 0;
          border-top: 1px solid var(--line);
        }
        .mission-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 72px;
        }
        .mission-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 120px;
        }

        @media (max-width: 768px) {
          .mission-section {
            padding: 60px 0 0;
          }
          .mission-container {
            padding: 0 24px;
          }
          .mission-grid {
            display: flex;
            flex-direction: column;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
}
