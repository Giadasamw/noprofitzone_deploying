"use client";

export default function ChiSiamoCta() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-card">
          <div style={{ position: "relative", zIndex: 1 }}>
            <p
              style={{
                fontFamily: '"Mallory", sans-serif',
                fontSize: 11,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "rgba(26,26,26,0.65)",
              }}
            >
              — Iniziamo
            </p>
            <h2 className="cta-title">
              Una prima conversazione per{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400 }}>capirsi.</em>
            </h2>
            <p className="cta-body">
              Il modo migliore per valutare se lo studio è il partner giusto per
              l&apos;organizzazione è una call conoscitiva di trenta minuti.
            </p>
            <a
              href="/contatti"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "var(--ink)",
                color: "var(--paper)",
                fontFamily: '"Mallory", sans-serif',
                fontSize: 11.1,
                padding: "14px 24px",
                borderRadius: 999,
                border: "1.5px solid var(--ink)",
              }}
            >
              Prenota una call conoscitiva{" "}
              <span style={{ fontFamily: '"Mackinac", serif', fontSize: 11.2 }}>→</span>
            </a>
          </div>

          <div className="cta-footer">
            <div
              style={{
                fontFamily: '"Mallory", sans-serif',
                fontSize: 7.7,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(26,26,26,0.7)",
              }}
            >
              <strong style={{ display: "block", color: "var(--ink)", fontSize: 9.1, marginBottom: 4, letterSpacing: "0.12em" }}>
                30 minuti
              </strong>
              Online · Google Meet<br />
              Risposta entro 24h lavorative
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          margin: 0 0 120px;
          padding: 0;
        }
        .cta-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 72px;
        }
        .cta-card {
          background: radial-gradient(120% 130% at 70% 30%, #f5d76a 0%, #f3a07a 35%, #e0a4e8 75%, #cdb9e8 100%);
          border-radius: 24px;
          padding: 120px 96px;
          position: relative;
          overflow: hidden;
          min-height: 480px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .cta-title {
          font-family: "Mackinac", Georgia, serif;
          font-size: clamp(25.2px, 3.08vw, 44.8px);
          line-height: 1.02;
          letter-spacing: -0.018em;
          font-weight: 700;
          color: var(--ink);
          max-width: 820px;
          margin: 32px 0 48px;
        }
        .cta-body {
          font-size: 12.5px;
          line-height: 1.65;
          color: var(--ink-soft);
          max-width: 480px;
          margin-bottom: 48px;
        }
        .cta-footer {
          display: flex;
          justify-content: flex-end;
          position: relative;
          zIndex: 1;
          text-align: right;
        }
        
        @media (max-width: 768px) {
          .cta-section {
            margin: 0 0 60px;
          }
          .cta-container {
            padding: 0 24px;
          }
          .cta-card {
            padding: 48px 32px;
            min-height: auto;
            border-radius: 20px;
          }
          .cta-title {
            font-size: 24px;
            margin: 24px 0 32px;
          }
          .cta-body {
            font-size: 13px;
            margin-bottom: 32px;
          }
          .cta-footer {
            justify-content: flex-start;
            text-align: left;
            margin-top: 32px;
          }
        }
      `}</style>
    </section>
  );
}
