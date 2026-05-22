"use client";

export default function ServiziHero() {
  return (
    <section className="servizi-hero">
      <div className="servizi-hero-container">
        <h1 className="servizi-hero-title">
          Dalla prima lettura del bando all&apos;ultima riga della{" "}
          <em style={{ fontStyle: "italic", fontWeight: 400 }}>rendicontazione.</em>
        </h1>
        <p className="servizi-hero-subtitle">
          Due servizi pensati per lavorare in sequenza, lungo l&apos;intero ciclo di
          un bando finanziato.
        </p>
      </div>

      <style jsx>{`
        .servizi-hero {
          padding: 80px 0 120px;
          position: relative;
        }
        .servizi-hero-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 72px;
        }
        .servizi-hero-title {
          font-family: "Mackinac", "Iowan Old Style", Georgia, serif;
          font-size: clamp(33.6px, 3.64vw, 50.4px);
          line-height: 1.04;
          letter-spacing: -0.018em;
          font-weight: 700;
          max-width: 60%;
        }
        .servizi-hero-subtitle {
          font-size: 14px;
          line-height: 1.6;
          color: var(--ink-soft);
          max-width: 640px;
          margin-top: 32px;
        }

        @media (max-width: 768px) {
          .servizi-hero {
            padding: 40px 0 60px;
          }
          .servizi-hero-container {
            padding: 0 24px;
          }
          .servizi-hero-title {
            font-size: 28px;
            max-width: 100%;
          }
          .servizi-hero-subtitle {
            font-size: 13px;
            max-width: 100%;
            margin-top: 24px;
          }
        }
      `}</style>
    </section>
  );
}
