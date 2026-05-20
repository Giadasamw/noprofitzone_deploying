const chips: { label: string; variant: "yellow" | "lilac" | "peach" }[] = [
  { label: "Fondazioni e organizzazioni filantropiche", variant: "lilac" },
  { label: "ONG e cooperative sociali medio-grandi", variant: "yellow" },
  { label: "Enti culturali: musei, festival, residenze", variant: "peach" },
  { label: "Imprese sociali e realtà ibride profit / non profit", variant: "lilac" },
];

const chipBg: Record<string, string> = {
  yellow: "var(--accent-yellow)",
  lilac: "var(--accent-lilac)",
  peach: "var(--paper-2)",
};

export default function ForWhom() {
  return (
    <section style={{ padding: "140px 0", borderTop: "1px solid var(--line)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 72px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 120, alignItems: "center" }}>
          <div>
            <p style={monoStyle}>— Per chi lavoriamo</p>
            <h2 style={h2Style}>
              Organizzazioni strutturate del{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400 }}>terzo settore.</em>
            </h2>
            <p style={{ fontSize: 13.2, lineHeight: 1.65, color: "var(--ink-soft)", maxWidth: 460, marginBottom: 40 }}>
              Lo studio collabora con organizzazioni del terzo settore strutturate: con una
              mission definita, una governance chiara e l&apos;esigenza di accedere a finanziamenti
              significativi in modo continuativo.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {chips.map((c) => (
                <span
                  key={c.label}
                  style={{
                    fontFamily: '"Mallory", sans-serif',
                    fontSize: 11.1,
                    padding: "8px 16px",
                    borderRadius: 999,
                    color: "var(--ink)",
                    background: chipBg[c.variant],
                  }}
                >
                  {c.label}
                </span>
              ))}
            </div>
          </div>

          <div
            style={{
              aspectRatio: "4/5",
              backgroundImage: "url('/photo-bags.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "grayscale(1) contrast(1.05)",
              borderRadius: 20,
            }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}

const monoStyle: React.CSSProperties = {
  fontFamily: '"Mallory", sans-serif',
  fontSize: 7,
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
  marginBottom: 28,
};
