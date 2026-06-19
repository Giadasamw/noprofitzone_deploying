"use client";

export default function ChiSiamoHero() {
  return (
    <section className="chisiamo-hero">
      <div className="chisiamo-hero-container">
        <h1 className="chisiamo-hero-title">
          Uno studio piccolo, per scelta,{" "}
          <em style={{ fontStyle: "italic", fontWeight: 400 }}>non per dimensione.</em>
        </h1>
        <p className="chisiamo-hero-subtitle">
          No Profit Zone è uno studio di due persone, fondato da Nicoletta Allarà
          e Olivia Salvi, che lavora con fondazioni, ONG ed enti culturali sull&apos;intero
          ciclo di un progetto finanziato.
        </p>
      </div>

      <style jsx>{`
        .chisiamo-hero {
          padding: 80px 0 120px;
          position: relative;
        }
        .chisiamo-hero-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 72px;
        }
        .chisiamo-hero-title {
          font-family: "Mackinac", "Iowan Old Style", Georgia, serif;
          font-size: clamp(33.6px, 3.64vw, 50.4px);
          line-height: 1.04;
          letter-spacing: -0.018em;
          font-weight: 700;
          max-width: 70%;
        }
        .chisiamo-hero-subtitle {
          font-size: 14px;
          line-height: 1.6;
          color: var(--ink-soft);
          max-width: 640px;
          margin-top: 32px;
        }

        @media (max-width: 768px) {
          .chisiamo-hero {
            padding: 40px 0 60px;
          }
          .chisiamo-hero-container {
            padding: 0 24px;
          }
          .chisiamo-hero-title {
            font-size: 28px;
            max-width: 100%;
          }
          .chisiamo-hero-subtitle {
            font-size: 13px;
            max-width: 100%;
            margin-top: 24px;
          }
        }
      `}</style>
    </section>
  );
}
