"use client";

const steps = [
  {
    num: "01",
    title: "Analisi del bando e dell'organizzazione",
    body: "Studio del bando in dettaglio: criteri di valutazione, vincoli, budget massimi, scadenze. Valutazione del fit con l'organizzazione cliente. Se il bando non è adatto, la valutazione è comunicata prima dell'incarico.",
    tag: "FASE 1",
  },
  {
    num: "02",
    title: "Strategia di candidatura",
    body: "Definizione dell'angolo della proposta, del posizionamento dell'organizzazione, della storia che il progetto racconterà al comitato di valutazione.",
    tag: "FASE 2",
  },
  {
    num: "03",
    title: "Progettazione tecnica",
    body: "Costruzione di obiettivi specifici, attività, indicatori di risultato, cronoprogramma e budget. Verifica della coerenza con i criteri del bando.",
    tag: "FASE 3",
  },
  {
    num: "04",
    title: "Scrittura della proposta",
    body: "Redazione in linguaggio chiaro, narrativo dove serve, tecnico dove richiesto. Ogni sezione è scritta per rispondere a uno specifico criterio di valutazione.",
    tag: "FASE 4",
  },
  {
    num: "05",
    title: "Gestione documentale e candidatura",
    body: "Preparazione di modulistica, allegati, anagrafiche, dichiarazioni. Verifica della conformità formale. Presentazione della candidatura entro la scadenza.",
    tag: "FASE 5",
  },
  {
    num: "06",
    title: "Rendicontazione tecnica ed economica",
    body: "Se il progetto è finanziato: monitoraggio delle spese, predisposizione della rendicontazione secondo i criteri dell'ente finanziatore, redazione delle relazioni finali.",
    tag: "FASE 6",
  },
];

export default function ServiziMethod() {
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
            Il metodo, in <em style={{ fontStyle: "italic", fontWeight: 400 }}>sei fasi.</em>
          </h2>
          <p className="method-intro">
            Ogni collaborazione segue lo stesso percorso strutturato. Tempi
            prevedibili, qualità verificabile in ogni passaggio, una sola persona di
            riferimento dall&apos;inizio alla fine.
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
      </div>

      <style jsx>{`
        .method-section {
          padding: 80px 0 140px;
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
