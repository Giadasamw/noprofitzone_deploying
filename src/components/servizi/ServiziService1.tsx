"use client";

import Image from "next/image";

const serviceItems = [
  "Analisi e selezione dei bandi pertinenti",
  "Strategia di candidatura e posizionamento del progetto",
  "Scrittura tecnica e narrativa della proposta",
  "Costruzione di obiettivi, attività e indicatori",
  "Cronoprogramma e piano economico",
  "Modulistica, allegati e documentazione amministrativa",
  "Presentazione della candidatura",
];

export default function ServiziService1() {
  return (
    <section className="service-section">
      <div className="service-container">
        <div className="service-grid">
          <div className="service-content">
            <span className="service-label">SERVIZIO 1</span>
            <h2 className="service-title">
              Bandi &amp; <em style={{ fontStyle: "italic", fontWeight: 400 }}>Progettazione</em>
            </h2>
            <p className="service-subtitle">
              Scrittura bandi e progettazione per il terzo settore
            </p>
            <p className="service-body">
              Lo studio lavora sui bandi delle principali fondazioni filantropiche
              italiane — Fondazione Cariplo, Compagnia di San Paolo, Fondazione CRT e
              altre fondazioni di origine bancaria — sui programmi europei dedicati al
              terzo settore (Creative Europe, CERV, programmi della Commissione europea
              per cultura e cooperazione) e sui bandi della cooperazione internazionale
              italiana (AICS, programmi europei di cooperazione).
            </p>

            <div className="service-subsection">
              <h3 className="subsection-title">Cosa include il servizio</h3>
              <ul className="service-list">
                {serviceItems.map((item, i) => (
                  <li key={i} className="service-list-item">
                    <span className="list-dash">–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="service-subsection">
              <h3 className="subsection-title">Cosa cambia per l&apos;organizzazione</h3>
              <p className="service-body">
                Una maggiore probabilità di ottenere il finanziamento; la riduzione del
                carico interno legato alla scrittura e alla gestione amministrativa della
                candidatura; l&apos;accesso a un punto di vista esterno che riconosce quello
                che internamente si dà per scontato.
              </p>
            </div>
          </div>

          <div className="service-image-wrapper">
            <Image
              src="/photo-studio.png"
              alt=""
              fill
              style={{ objectFit: "cover", objectPosition: "center", filter: "grayscale(1) contrast(1.04)" }}
            />
            <div className="service-image-accent" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .service-section {
          padding: 140px 0;
          border-top: 1px solid var(--line);
        }
        .service-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 72px;
        }
        .service-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 96px;
          align-items: start;
        }
        .service-content {
          display: flex;
          flex-direction: column;
        }
        .service-label {
          font-family: "Mallory", sans-serif;
          font-size: 9px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 20px;
        }
        .service-title {
          font-family: "Mackinac", Georgia, serif;
          font-size: clamp(28px, 2.8vw, 42px);
          line-height: 1.05;
          letter-spacing: -0.012em;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .service-subtitle {
          font-family: "Mackinac", Georgia, serif;
          font-size: 14px;
          font-style: italic;
          color: var(--ink-soft);
          margin-bottom: 32px;
        }
        .service-body {
          font-size: 12.5px;
          line-height: 1.65;
          color: var(--ink-soft);
          max-width: 520px;
        }
        .service-subsection {
          margin-top: 48px;
        }
        .subsection-title {
          font-family: "Mackinac", Georgia, serif;
          font-size: 15.4px;
          font-weight: 700;
          letter-spacing: -0.005em;
          margin-bottom: 20px;
        }
        .service-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .service-list-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 12.5px;
          line-height: 1.65;
          color: var(--ink-soft);
          margin-bottom: 10px;
        }
        .list-dash {
          color: var(--accent);
          flex-shrink: 0;
        }
        .service-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 3/4;
          overflow: hidden;
          background: var(--paper-2);
          border-radius: 20px;
        }
        .service-image-accent {
          position: absolute;
          right: 24px;
          top: 24px;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: radial-gradient(120% 130% at 70% 30%, #f5d76a 0%, #f3a07a 35%, #e0a4e8 75%, #cdb9e8 100%);
          box-shadow: 0 0 24px rgba(217,130,95,.4);
        }
        
        @media (max-width: 768px) {
          .service-section {
            padding: 60px 0;
          }
          .service-container {
            padding: 0 24px;
          }
          .service-grid {
            display: flex;
            flex-direction: column-reverse;
            gap: 40px;
          }
          .service-title {
            font-size: 24px;
          }
          .service-image-wrapper {
            aspect-ratio: 4/3;
            border-radius: 16px;
          }
          .service-body {
            max-width: 100%;
          }
          .service-subsection {
            margin-top: 32px;
          }
        }
      `}</style>
    </section>
  );
}
