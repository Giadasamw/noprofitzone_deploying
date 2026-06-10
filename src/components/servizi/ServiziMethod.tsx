"use client";

const steps = [
  {
    num: "01",
    title: "Ricerca e analisi del bando",
    body: "Ricerca e analisi approfondita del bando più adatto al settore di riferimento dell'organizzazione: criteri di valutazione, requisiti, budget disponibili e scadenze. Se il bando non presenta condizioni adeguate, la valutazione viene comunicata prima di formalizzare la collaborazione.",
    tag: "FASE 1",
  },
  {
    num: "02",
    title: "Strategia di candidatura",
    body: "Individuazione del valore distintivo della proposta e costruzione della narrazione progettuale: una storia chiara e convincente che parli direttamente ai criteri di valutazione del comitato.",
    tag: "FASE 2",
  },
  {
    num: "03",
    title: "Progettazione e redazione della proposta",
    body: "Costruzione della struttura del progetto — obiettivi, attività, indicatori di risultato, cronoprogramma, piano economico — e redazione della proposta con un linguaggio chiaro ed efficace, tecnico dove richiesto. Ogni sezione viene sviluppata per rispondere in modo mirato ai criteri di valutazione del bando.",
    tag: "FASE 3",
  },
  {
    num: "04",
    title: "Documentazione e candidatura",
    body: "Preparazione della documentazione completa — modulistica, allegati, anagrafiche, dichiarazioni — e verifica della conformità formale dell'intera candidatura. Presentazione entro i termini previsti e, quando necessario, partecipazione ai colloqui presso l'ente finanziatore.",
    tag: "FASE 4",
  },
  {
    num: "05",
    title: "Rendicontazione",
    body: "All'approvazione del progetto si attiva la rendicontazione tecnica ed economica: monitoraggio delle spese, raccolta dei giustificativi, compilazione della documentazione — manuale o tramite piattaforma — in modo continuativo durante l'implementazione, così da gestire tempestivamente gli stati di avanzamento lavori. Al termine, redazione della relazione finale per l'ente finanziatore.",
    tag: "FASE 5",
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
            Il metodo, in <em style={{ fontStyle: "italic", fontWeight: 400 }}>cinque fasi.</em>
          </h2>
          <p className="method-intro">
            Ogni progetto segue lo stesso percorso, dalla prima analisi alla
            chiusura.
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
