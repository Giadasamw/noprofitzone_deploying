export default function FinalCta() {
  return (
    <section style={{ margin: "120px 0", padding: 0 }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 72px" }}>
        <div
          style={{
            background: "radial-gradient(120% 130% at 70% 30%, #f5d76a 0%, #f3a07a 35%, #e0a4e8 75%, #cdb9e8 100%)",
            borderRadius: 24,
            padding: "120px 96px",
            position: "relative",
            overflow: "hidden",
            minHeight: 480,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
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
            <h2
              style={{
                fontFamily: '"Mackinac", Georgia, serif',
                fontSize: "clamp(25.2px, 3.08vw, 44.8px)",
                lineHeight: 1.02,
                letterSpacing: "-0.018em",
                fontWeight: 700,
                color: "var(--ink)",
                maxWidth: 820,
                margin: "32px 0 48px",
              }}
            >
              Una prima conversazione, gratuita, di{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400 }}>trenta minuti.</em>
            </h2>
            <p style={{ fontSize: 12.5, lineHeight: 1.65, color: "var(--ink-soft)", maxWidth: 480, marginBottom: 48 }}>
              Nella call conoscitiva chiediamo all&apos;organizzazione di raccontarci la propria
              mission e il bando o il progetto su cui sta valutando di lavorare. Sulla base di
              questa conversazione diciamo se lo studio è in grado di offrire un contributo
              utile, e in che termini.
            </p>
            <a
              href="#"
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

          <div style={{ display: "flex", justifyContent: "flex-end", position: "relative", zIndex: 1 }}>
            <div
              style={{
                fontFamily: '"Mallory", sans-serif',
                fontSize: 7.7,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(26,26,26,0.7)",
                textAlign: "right",
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
    </section>
  );
}
