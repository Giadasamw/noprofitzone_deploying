"use client";

export default function ServiziMonitoraggio() {
  return (
    <section className="monitoraggio-section">
      <div className="monitoraggio-container">
        <span className="monitoraggio-label">SERVIZIO CONTINUATIVO</span>
        <h2 className="monitoraggio-title">Monitoraggio bandi</h2>
        <p className="monitoraggio-body">
          Accanto ai due servizi principali, lo studio mantiene un aggiornamento
          costante sui bandi attivi e segnala all&apos;organizzazione cliente quelli
          pertinenti alla sua mission e alla sua dimensione.
        </p>
        <p className="monitoraggio-body" style={{ marginTop: 20 }}>
          Il monitoraggio è un servizio continuativo, che si attiva tipicamente in
          abbinamento alla collaborazione su candidature e rendicontazioni.
        </p>
      </div>

      <style jsx>{`
        .monitoraggio-section {
          padding: 100px 0;
          background: var(--paper-2);
        }
        .monitoraggio-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 72px;
          max-width: 720px;
        }
        .monitoraggio-label {
          font-family: "Mallory", sans-serif;
          font-size: 9px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--muted);
          display: block;
          margin-bottom: 20px;
        }
        .monitoraggio-title {
          font-family: "Mackinac", Georgia, serif;
          font-size: clamp(22.4px, 2.24vw, 28px);
          line-height: 1.05;
          letter-spacing: -0.012em;
          font-weight: 700;
          margin-bottom: 28px;
        }
        .monitoraggio-body {
          font-size: 12.5px;
          line-height: 1.65;
          color: var(--ink-soft);
          max-width: 560px;
        }
        
        @media (max-width: 768px) {
          .monitoraggio-section {
            padding: 60px 0;
          }
          .monitoraggio-container {
            padding: 0 24px;
          }
          .monitoraggio-title {
            font-size: 22px;
          }
          .monitoraggio-body {
            font-size: 13px;
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
