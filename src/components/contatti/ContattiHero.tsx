"use client";

export default function ContattiHero() {
  return (
    <section className="contatti-hero">
      <div className="contatti-hero-container">
        <h1 className="contatti-hero-title">
          Trenta minuti, per capire se lavorare insieme ha{" "}
          <em style={{ fontStyle: "italic", fontWeight: 400 }}>senso.</em>
        </h1>
        <p className="contatti-hero-subtitle">
          La prima call è online, gratuita, non commerciale. L&apos;organizzazione
          racconta la propria mission e il bando o il progetto che ha in mente.
          Lo studio dice se è in grado di offrire un contributo utile, e in che
          termini.
        </p>
      </div>

      <style jsx>{`
        .contatti-hero {
          padding: 80px 0 80px;
          position: relative;
        }
        .contatti-hero-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 72px;
        }
        .contatti-hero-title {
          font-family: "Mackinac", "Iowan Old Style", Georgia, serif;
          font-size: clamp(33.6px, 3.64vw, 50.4px);
          line-height: 1.04;
          letter-spacing: -0.018em;
          font-weight: 700;
          max-width: 70%;
        }
        .contatti-hero-subtitle {
          font-size: 14px;
          line-height: 1.6;
          color: var(--ink-soft);
          max-width: 640px;
          margin-top: 32px;
        }

        @media (max-width: 768px) {
          .contatti-hero {
            padding: 40px 0 40px;
          }
          .contatti-hero-container {
            padding: 0 24px;
          }
          .contatti-hero-title {
            font-size: 28px;
            max-width: 100%;
          }
          .contatti-hero-subtitle {
            font-size: 13px;
            max-width: 100%;
            margin-top: 24px;
          }
        }
      `}</style>
    </section>
  );
}
