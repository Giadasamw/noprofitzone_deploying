"use client";

const principles = [
  {
    title: "Analisi prima della scrittura",
    text: "Una candidatura viene scritta solo dopo aver compreso a fondo l'organizzazione cliente e il bando. La maggior parte delle candidature deboli nasce da un'analisi affrettata.",
  },
  {
    title: "Preventivo scritto, sempre",
    text: "Tempi, costi e perimetro del lavoro vengono comunicati in anticipo e fissati per iscritto. Niente preventivi vaghi, niente sorprese a metà progetto.",
  },
  {
    title: "Stessa persona dall'inizio alla fine",
    text: "Lo studio garantisce continuità di interlocutore lungo l'intero ciclo del progetto, dalla prima call alla rendicontazione finale.",
  },
  {
    title: "Selezione effettiva degli incarichi",
    text: "Vengono accettati solo i bandi davvero coerenti con l'organizzazione cliente. Quando le condizioni non sono adeguate, lo studio lo comunica prima di formalizzare la collaborazione.",
  },
];

export default function Principles() {
  return (
    <section className="principles-section">
      <div className="principles-container">
        <div style={{ marginBottom: 80, maxWidth: 720 }}>
          <p style={monoStyle}>— Come lavoriamo</p>
          <h2 style={h2Style}>
            Quattro principi{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400 }}>operativi.</em>
          </h2>
        </div>

        <div className="principles-grid">
          {principles.map((item, i) => (
            <div key={i} className="principle-card">
              <h3 style={cardTitleStyle}>{item.title}</h3>
              <p style={cardTextStyle}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .principles-section {
          padding: 120px 0 140px;
          background: var(--paper-2);
        }
        .principles-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 72px;
        }
        .principles-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 48px 64px;
        }
        .principle-card {
          max-width: 480px;
        }

        @media (max-width: 768px) {
          .principles-section {
            padding: 60px 0;
          }
          .principles-container {
            padding: 0 24px;
          }
          .principles-grid {
            display: flex;
            flex-direction: column;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
}

const monoStyle: React.CSSProperties = {
  fontFamily: '"Mallory", sans-serif',
  fontSize: 11,
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
};

const cardTitleStyle: React.CSSProperties = {
  fontFamily: '"Mackinac", Georgia, serif',
  fontSize: 18,
  fontWeight: 700,
  lineHeight: 1.2,
  marginBottom: 16,
  color: "var(--ink)",
};

const cardTextStyle: React.CSSProperties = {
  fontFamily: '"Mallory", sans-serif',
  fontSize: 13.2,
  lineHeight: 1.7,
  color: "var(--ink-soft)",
};
