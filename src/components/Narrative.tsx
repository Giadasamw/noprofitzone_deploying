export default function Narrative() {
  return (
    <section style={{ padding: "140px 0 120px", borderTop: "1px solid var(--line)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 72px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 120 }}>
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
                  fontSize: 48,
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
    </section>
  );
}

const monoStyle: React.CSSProperties = {
  fontFamily: '"Mallory", sans-serif',
  fontSize: 10,
  letterSpacing: "0.24em",
  textTransform: "uppercase",
  color: "var(--muted)",
  marginBottom: 18,
};

const h2Style: React.CSSProperties = {
  fontFamily: '"Mackinac", Georgia, serif',
  fontSize: "clamp(28px, 2.8vw, 40px)",
  lineHeight: 1.08,
  letterSpacing: "-0.012em",
  fontWeight: 700,
};

const paraStyle: React.CSSProperties = {
  fontSize: 16,
  lineHeight: 1.65,
  marginBottom: 22,
  maxWidth: 580,
  color: "var(--ink-soft)",
};
