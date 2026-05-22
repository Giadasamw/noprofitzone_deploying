"use client";

import Image from "next/image";

const serviceItems = [
  "Monitoraggio delle spese e degli avanzamenti",
  "Predisposizione della rendicontazione tecnica",
  "Predisposizione della rendicontazione economica",
  "Verifica della coerenza con i criteri dell'ente finanziatore",
  "Redazione delle relazioni intermedie e finali",
  "Reportistica tecnica per la comunicazione con l'ente",
  "Gestione delle richieste di integrazione e chiarimento",
];

export default function ServiziService2() {
  return (
    <section className="service-section">
      <div className="service-container">
        {/* SECTION HEADER - Full width */}
        <div className="section-header">
          <span className="service-label">SERVIZIO 2</span>
          <h2 className="service-title">
            Rendicontazione &amp; <em style={{ fontStyle: "italic", fontWeight: 400 }}>Reportistica</em>
          </h2>
          <p className="service-subtitle">
            Rendicontazione tecnica ed economica per progetti finanziati
          </p>
        </div>

        {/* TWO COLUMNS BELOW */}
        <div className="service-grid">
          {/* LEFT COLUMN */}
          <div className="service-content">
            <p className="service-body">
              La rendicontazione è la fase in cui un progetto finanziato si chiude con
              l&apos;ente che lo ha finanziato. È anche la fase che determina, nei fatti, la
              sostenibilità del rapporto negli anni successivi: la qualità della
              documentazione consegnata, l&apos;ordine delle spese rendicontate, la
              completezza delle relazioni finali contribuiscono in modo diretto alla
              credibilità dell&apos;organizzazione nelle candidature future.
            </p>
            <p className="service-body" style={{ marginTop: 20 }}>
              Lo studio si occupa della rendicontazione tecnica ed economica dei
              progetti finanziati per conto dell&apos;organizzazione cliente, dalla fase di
              monitoraggio in corso d&apos;opera alla consegna delle relazioni finali.
            </p>

            <div className="service-subsection">
              <h3 className="subsection-title">Cosa include il servizio</h3>
              <div className="service-tags-wrapper">
                {serviceItems.map((item, i) => (
                  <span key={i} className="service-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="service-right">
            <div className="outcome-box">
              <h3 className="subsection-title">Cosa cambia per l&apos;organizzazione</h3>
              <p className="service-body">
                La chiusura ordinata dei progetti finanziati, l&apos;assenza di criticità nei
                rapporti con gli enti finanziatori, la costruzione di un track record
                solido che la rendicontazione fatta bene consegna alle candidature
                successive.
              </p>
            </div>

            <div className="service-image-wrapper">
              <Image
                src="/servizio2-image.png"
                alt=""
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
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
        .section-header {
          margin-bottom: 48px;
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
        .service-tags-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: flex-start;
        }
        .service-tag {
          padding: 8px 16px;
          border: 1px solid var(--accent);
          border-radius: 20px;
          font-size: 12.5px;
          line-height: 1.5;
          color: var(--ink-soft);
          white-space: normal;
          flex: 0 1 auto;
        }
        .service-right {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .outcome-box {
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: 32px;
        }
        .outcome-box .subsection-title {
          margin-top: 0;
        }
        .outcome-box .service-body {
          margin-bottom: 0;
        }
        .service-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          overflow: hidden;
          background: var(--paper-2);
          border-radius: 16px;
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
            flex-direction: column;
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
          .service-right {
            order: -1;
          }
          .outcome-box {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
