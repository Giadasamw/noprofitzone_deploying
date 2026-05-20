const steps = [
  {
    num: "01",
    title: "Analisi",
    body: "Studio del bando, valutazione del fit con l'organizzazione cliente, definizione della strategia di candidatura.",
    tag: "Fase 01 — Fit",
  },
  {
    num: "02",
    title: "Progettazione",
    body: "Costruzione di obiettivi, attività, indicatori, cronoprogramma e budget. La proposta viene scritta in coerenza con i criteri di valutazione del bando.",
    tag: "Fase 02 — Strategia",
  },
  {
    num: "03",
    title: "Candidatura",
    body: "Preparazione di modulistica, allegati e documentazione amministrativa. Verifica della conformità formale. Presentazione.",
    tag: "Fase 03 — Scrittura",
  },
  {
    num: "04",
    title: "Rendicontazione",
    body: "Se il progetto è finanziato: monitoraggio delle spese, predisposizione della rendicontazione tecnica ed economica, redazione delle relazioni finali.",
    tag: "Fase 04 — Chiusura",
  },
];

export default function Method() {
  return (
    <section style={{ padding: "160px 0 140px", borderTop: "1px solid var(--line)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 72px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 120, marginBottom: 96, alignItems: "end" }}>
          <h2
            style={{
              fontFamily: '"Mackinac", Georgia, serif',
              fontSize: "clamp(22.4px, 2.24vw, 33.6px)",
              lineHeight: 1.05,
              letterSpacing: "-0.012em",
              fontWeight: 700,
            }}
          >
            Il metodo in <em style={{ fontStyle: "italic", fontWeight: 400 }}>quattro fasi.</em>
          </h2>
          <p style={{ fontSize: 10.5, lineHeight: 1.65, color: "var(--ink-soft)", maxWidth: 460 }}>
            Ogni progetto segue lo stesso percorso, dalla prima analisi alla chiusura. Le due
            partner dello studio seguono direttamente tutte le fasi, senza passaggi a
            collaboratori junior o consulenti esterni.
          </p>
        </div>

        {steps.map((s, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "120px 1.1fr 1.6fr 0.7fr",
              gap: 56,
              padding: "48px 0",
              borderTop: "1px solid var(--line)",
              ...(i === steps.length - 1 ? { borderBottom: "1px solid var(--line)" } : {}),
              alignItems: "start",
            }}
          >
            <div
              style={{
                fontFamily: '"Mackinac", serif',
                fontStyle: "italic",
                fontSize: 61.6,
                lineHeight: 0.85,
                color: "var(--accent)",
              }}
            >
              {s.num}
            </div>
            <h4 style={{ fontFamily: '"Mackinac", Georgia, serif', fontSize: 15.4, fontWeight: 700, letterSpacing: "-0.005em", lineHeight: 1.15 }}>
              {s.title}
            </h4>
            <p style={{ color: "var(--ink-soft)", lineHeight: 1.65, fontSize: 10.5 }}>{s.body}</p>
            <div
              style={{
                fontFamily: '"Mallory", sans-serif',
                fontSize: 7,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--muted)",
                textAlign: "right",
              }}
            >
              {s.tag}
            </div>
          </div>
        ))}

        <p style={{ marginTop: 40 }}>
          <a
            href="#"
            style={{
              fontFamily: '"Mallory", sans-serif',
              fontSize: 7.7,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--ink)",
              display: "inline-flex",
              gap: 8,
              paddingBottom: 4,
              borderBottom: "1px solid var(--ink)",
            }}
          >
            Approfondisci il metodo nella pagina Servizi &amp; Metodo →
          </a>
        </p>
      </div>
    </section>
  );
}
