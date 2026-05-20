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
    <section className="method-section">
      <div className="method-container">
        <div className="method-header">
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
          <p className="method-intro">
            Ogni progetto segue lo stesso percorso, dalla prima analisi alla chiusura. Le due
            partner dello studio seguono direttamente tutte le fasi, senza passaggi a
            collaboratori junior o consulenti esterni.
          </p>
        </div>

        {steps.map((s, i) => (
          <div
            key={i}
            className="method-step"
            style={{
              borderTop: "1px solid var(--line)",
              ...(i === steps.length - 1 ? { borderBottom: "1px solid var(--line)" } : {}),
            }}
          >
            <div
              className="step-number"
              style={{
                fontFamily: '"Mackinac", serif',
                fontStyle: "italic",
                color: "var(--accent)",
              }}
            >
              {s.num}
            </div>
            <h4 className="step-title" style={{ fontFamily: '"Mackinac", Georgia, serif', fontWeight: 700, letterSpacing: "-0.005em", lineHeight: 1.15 }}>
              {s.title}
            </h4>
            <p className="step-body" style={{ color: "var(--ink-soft)", lineHeight: 1.65 }}>{s.body}</p>
            <div
              className="step-tag"
              style={{
                fontFamily: '"Mallory", sans-serif',
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--muted)",
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
              fontSize: 9.7,
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

      <style jsx>{`
        .method-section {
          padding: 160px 0 140px;
          border-top: 1px solid var(--line);
        }
        .method-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 72px;
        }
        .method-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 120px;
          margin-bottom: 96px;
          align-items: end;
        }
        .method-intro {
          font-size: 12.5px;
          line-height: 1.65;
          color: var(--ink-soft);
          max-width: 460px;
        }
        .method-step {
          display: grid;
          grid-template-columns: 120px 1.1fr 1.6fr 0.7fr;
          gap: 56px;
          padding: 48px 0;
          align-items: center;
        }
        .step-number {
          font-size: 61.6px;
          line-height: 0.85;
        }
        .step-title {
          font-size: 15.4px;
        }
        .step-body {
          font-size: 12.5px;
        }
        .step-tag {
          font-size: 11px;
          text-align: right;
        }
        
        @media (max-width: 768px) {
          .method-section {
            padding: 60px 0;
          }
          .method-container {
            padding: 0 24px;
          }
          .method-header {
            display: flex;
            flex-direction: column;
            gap: 24px;
            margin-bottom: 48px;
            align-items: flex-start;
          }
          .method-intro {
            max-width: 100%;
          }
          .method-step {
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding: 32px 0;
            align-items: flex-start;
          }
          .step-number {
            font-size: 48px;
          }
          .step-title {
            font-size: 18px;
          }
          .step-body {
            font-size: 13px;
          }
          .step-tag {
            font-size: 10px;
            text-align: left;
            margin-top: 8px;
          }
        }
      `}</style>
    </section>
  );
}
