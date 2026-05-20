const partners = [
  { name: "Nicoletta Allarà", role: "Founder · Ground Writer Consultant", pos: "25% 30%" },
  { name: "Olivia Salvi", role: "Assistant Manager", pos: "75% 30%" },
];

export default function About() {
  return (
    <section style={{ padding: "160px 0", borderTop: "1px solid var(--line)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 72px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 120, alignItems: "end" }}>
          <div>
            <p style={monoStyle}>— Le persone</p>
            <h2 style={h2Style}>
              Le persone <em style={{ fontStyle: "italic", fontWeight: 400 }}>dello studio.</em>
            </h2>
            <p style={paraStyle}>
              No Profit Zone è uno studio milanese fondato da Nicoletta Allarà e Olivia Salvi.
              Nicoletta si occupa di analisi dei bandi, strategia di candidatura e scrittura
              delle proposte. Olivia si occupa di gestione documentale, rendicontazione
              tecnica ed economica, reportistica per gli enti finanziatori.
            </p>
            <p style={{ ...paraStyle, marginBottom: 24 }}>
              Lavorano insieme su ogni progetto, dalla prima analisi alla chiusura.
            </p>
            <a
              href="#"
              style={{
                fontFamily: '"Mallory", sans-serif',
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--ink)",
                display: "inline-flex",
                gap: 8,
                paddingBottom: 4,
                borderBottom: "1px solid var(--ink)",
              }}
            >
              Conosci lo studio →
            </a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {partners.map((p) => (
              <div key={p.name} style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    aspectRatio: "3/4",
                    background: "var(--paper-2)",
                    backgroundImage: "url('/photo-studio.png')",
                    backgroundSize: "cover",
                    backgroundPosition: p.pos,
                    filter: "grayscale(1) contrast(1.05)",
                    marginBottom: 16,
                  }}
                />
                <div
                  style={{
                    fontFamily: '"Mackinac", Georgia, serif',
                    fontSize: 17,
                    fontWeight: 700,
                    letterSpacing: "-0.005em",
                    marginBottom: 4,
                  }}
                >
                  {p.name}
                </div>
                <div
                  style={{
                    fontFamily: '"Mackinac", serif',
                    fontStyle: "italic",
                    fontSize: 12,
                    color: "var(--muted)",
                  }}
                >
                  {p.role}
                </div>
              </div>
            ))}
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
  marginBottom: 24,
};

const h2Style: React.CSSProperties = {
  fontFamily: '"Mackinac", Georgia, serif',
  fontSize: "clamp(32px, 3.2vw, 48px)",
  lineHeight: 1.05,
  letterSpacing: "-0.012em",
  fontWeight: 700,
  marginBottom: 32,
};

const paraStyle: React.CSSProperties = {
  fontSize: 15,
  color: "var(--ink-soft)",
  lineHeight: 1.65,
  maxWidth: 440,
  marginBottom: 24,
};
