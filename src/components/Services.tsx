import Image from "next/image";

const services = [
  {
    img: "/photo-studio.png",
    gradient: "radial-gradient(120% 130% at 70% 30%, #f5d76a 0%, #f3a07a 35%, #e0a4e8 75%, #cdb9e8 100%)",
    number: "Servizio 01 / Progettazione",
    title: <>Bandi &amp; <em style={{ fontStyle: "italic", fontWeight: 400 }}>Progettazione</em></>,
    body: "Analisi del bando, definizione della strategia di candidatura, scrittura della proposta. Lo studio lavora sui bandi delle fondazioni filantropiche italiane (Fondazione Cariplo, Compagnia di San Paolo, Fondazione CRT) e sui programmi europei del terzo settore.",
    link: "Come lavoriamo sui bandi →",
    position: "center",
  },
  {
    img: "/photo-children.png",
    gradient: "radial-gradient(120% 130% at 30% 30%, #fbe8b6 0%, #f5c4a8 40%, #e7c0eb 75%, #d9c5e6 100%)",
    number: "Servizio 02 / Rendicontazione",
    title: <>Rendicontazione &amp; <em style={{ fontStyle: "italic", fontWeight: 400 }}>Reportistica</em></>,
    body: "Monitoraggio delle spese, rendicontazione tecnica ed economica, redazione delle relazioni finali per l'ente finanziatore. La fase che chiude il progetto e prepara le candidature successive.",
    link: "Come lavoriamo sulla rendicontazione →",
    position: "center 35%",
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        <p style={monoStyle}>— Due servizi che lavorano in sequenza</p>

        <div className="services-grid">
          {services.map((s, i) => (
            <article key={i} style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  aspectRatio: "4/5",
                  background: "var(--paper-2)",
                  filter: "grayscale(1) contrast(1.05)",
                  marginBottom: 36,
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 20,
                }}
              >
                <Image
                  src={s.img}
                  alt=""
                  fill
                  style={{ objectFit: "cover", objectPosition: s.position, filter: "inherit" }}
                />
                <div
                  style={{
                    position: "absolute",
                    right: 24,
                    top: 24,
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    background: s.gradient,
                    boxShadow: "0 0 24px rgba(217,130,95,.4)",
                    filter: "none",
                  }}
                />
              </div>
              <span style={{ fontFamily: '"Mallory", sans-serif', fontSize: 7, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 18 }}>
                {s.number}
              </span>
              <h3 style={{ fontFamily: '"Mackinac", Georgia, serif', fontSize: 21, lineHeight: 1.1, letterSpacing: "-0.01em", fontWeight: 700, marginBottom: 18 }}>
                {s.title}
              </h3>
              <p style={{ color: "var(--ink-soft)", lineHeight: 1.65, fontSize: 12.5, maxWidth: 440, marginBottom: 28 }}>
                {s.body}
              </p>
              <a
                href="#"
                style={{
                  fontFamily: '"Mallory", sans-serif',
                  fontSize: 9.7,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                  display: "inline-flex",
                  gap: 8,
                  alignItems: "center",
                  paddingBottom: 4,
                  borderBottom: "1px solid var(--ink)",
                  alignSelf: "flex-start",
                }}
              >
                {s.link}
              </a>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-section {
          padding: 100px 0;
        }
        .services-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 72px;
        }
        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          margin-top: 28px;
        }
        
        @media (max-width: 768px) {
          .services-section {
            padding: 60px 0;
          }
          .services-container {
            padding: 0 24px;
          }
          .services-grid {
            display: flex;
            flex-direction: column;
            gap: 48px;
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
};
