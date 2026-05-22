"use client";

const cards = [
  {
    title: "Fit con l'organizzazione",
    text: "Il bando è coerente con la mission, con le capacità operative e con la dimensione dell'organizzazione cliente?",
  },
  {
    title: "Fattibilità della candidatura",
    text: "I tempi sono sufficienti per una candidatura curata? La documentazione richiesta è ottenibile entro la scadenza? L'eventuale co-finanziamento è sostenibile?",
  },
  {
    title: "Probabilità realistica di successo",
    text: "Quanti soggetti partecipano tipicamente a quel bando? L'organizzazione è competitiva sui criteri di valutazione?",
  },
];

export default function ServiziSelezione() {
  return (
    <section className="selezione-section">
      <div className="selezione-container">
        <h2 className="selezione-title">
          Come selezioniamo gli <em style={{ fontStyle: "italic", fontWeight: 400 }}>incarichi</em>
        </h2>
        <p className="selezione-intro">
          Lo studio non accetta ogni incarico proposto. Prima di formalizzare la
          collaborazione, ogni candidatura potenziale viene valutata su tre criteri.
        </p>

        <div className="selezione-grid">
          {cards.map((card, i) => (
            <article key={i} className="selezione-card">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
            </article>
          ))}
        </div>

        <p className="selezione-closing">
          Se la valutazione complessiva è negativa, viene comunicato
          all&apos;organizzazione prima di formalizzare l&apos;incarico, con la motivazione.
        </p>
      </div>

      <style jsx>{`
        .selezione-section {
          padding: 140px 0;
          border-top: 1px solid var(--line);
        }
        .selezione-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 72px;
        }
        .selezione-title {
          font-family: "Mackinac", Georgia, serif;
          font-size: clamp(22.4px, 2.24vw, 33.6px);
          line-height: 1.05;
          letter-spacing: -0.012em;
          font-weight: 700;
          margin-bottom: 24px;
        }
        .selezione-intro {
          font-size: 12.5px;
          line-height: 1.65;
          color: var(--ink-soft);
          max-width: 560px;
          margin-bottom: 64px;
        }
        .selezione-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 48px;
        }
        .selezione-card {
          border: 1.5px solid var(--line);
          border-radius: 16px;
          padding: 32px;
          background: transparent;
        }
        .card-title {
          font-family: "Mackinac", Georgia, serif;
          font-size: 15.4px;
          font-weight: 700;
          letter-spacing: -0.005em;
          margin-bottom: 16px;
        }
        .card-text {
          font-size: 12.5px;
          line-height: 1.65;
          color: var(--ink-soft);
        }
        .selezione-closing {
          font-size: 12.5px;
          line-height: 1.65;
          color: var(--ink-soft);
          max-width: 560px;
        }
        
        @media (max-width: 768px) {
          .selezione-section {
            padding: 60px 0;
          }
          .selezione-container {
            padding: 0 24px;
          }
          .selezione-title {
            font-size: 22px;
          }
          .selezione-intro {
            margin-bottom: 40px;
            max-width: 100%;
          }
          .selezione-grid {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .selezione-card {
            padding: 24px;
          }
          .card-title {
            font-size: 16px;
          }
          .card-text {
            font-size: 13px;
          }
          .selezione-closing {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
