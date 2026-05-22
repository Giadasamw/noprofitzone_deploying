"use client";

const cards = [
  {
    title: "Una candidatura tipica",
    text: "Tra quattro e otto settimane di lavoro, in funzione della complessità del bando e della maturità del progetto.",
  },
  {
    title: "Una rendicontazione tipica",
    text: "Da una settimana a tre mesi, in funzione della dimensione del progetto e dei criteri dell'ente finanziatore.",
  },
  {
    title: "Modalità di lavoro",
    text: "Modalità ibrida: kick-off e momenti chiave in presenza dove possibile, gestione operativa in remoto. Strumenti di lavoro condivisi per garantire trasparenza e tracciabilità.",
  },
  {
    title: "Tempi di risposta",
    text: "Risposta alle email entro 24 ore lavorative. In fase di candidatura, reperibilità estesa anche fuori orario per le scadenze imminenti.",
  },
];

export default function ServiziTempistiche() {
  return (
    <section className="tempistiche-section">
      <div className="tempistiche-container">
        <h2 className="tempistiche-title">Tempistiche e modalità di lavoro</h2>

        <div className="tempistiche-grid">
          {cards.map((card, i) => (
            <article key={i} className="tempistiche-card">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .tempistiche-section {
          padding: 100px 0 140px;
        }
        .tempistiche-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 72px;
        }
        .tempistiche-title {
          font-family: "Mackinac", Georgia, serif;
          font-size: clamp(22.4px, 2.24vw, 33.6px);
          line-height: 1.05;
          letter-spacing: -0.012em;
          font-weight: 700;
          margin-bottom: 64px;
        }
        .tempistiche-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }
        .tempistiche-card {
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
        
        @media (max-width: 768px) {
          .tempistiche-section {
            padding: 60px 0;
          }
          .tempistiche-container {
            padding: 0 24px;
          }
          .tempistiche-title {
            font-size: 22px;
            margin-bottom: 40px;
          }
          .tempistiche-grid {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .tempistiche-card {
            padding: 24px;
          }
          .card-title {
            font-size: 16px;
          }
          .card-text {
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
}
