"use client";

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
  fontSize: "clamp(28px, 2.8vw, 40px)",
  lineHeight: 1.05,
  letterSpacing: "-0.012em",
  fontWeight: 700,
  marginBottom: 16,
};

const partners = [
  {
    name: "Nicoletta Allarà",
    role: "Founder · Ground Writer Consultant",
    pos: "25% 30%",
    bio: "Si occupa di analisi dei bandi, strategia di candidatura e scrittura delle proposte. Lavora da anni con fondazioni di origine bancaria, programmi europei e bandi della cooperazione internazionale, con un'attenzione particolare alla coerenza tra mission dell'organizzazione e obiettivi del finanziatore.",
  },
  {
    name: "Olivia Salvi",
    role: "Assistant Manager",
    pos: "75% 30%",
    bio: "Si occupa di gestione documentale, rendicontazione tecnica ed economica e reportistica per gli enti finanziatori. Cura il lato organizzativo dei progetti, dalla raccolta della documentazione alla relazione finale.",
  },
];

export default function ChiSiamoTeam() {
  return (
    <section className="team-section">
      <div className="team-container">
        <p style={monoStyle}>— Le persone</p>
        <h2 style={h2Style}>
          Le persone <em style={{ fontStyle: "italic", fontWeight: 400 }}>dello studio.</em>
        </h2>
        <p style={{ fontSize: 13.2, lineHeight: 1.7, color: "var(--ink-soft)", maxWidth: 640, marginBottom: 56 }}>
          Lavorano insieme su ogni progetto, dalla prima analisi del bando alla chiusura della
          rendicontazione, senza passaggi intermedi a collaboratori junior o consulenti esterni.
        </p>

        <div className="team-grid">
          {partners.map((p) => (
            <div key={p.name} className="team-card">
              <div
                className="team-photo"
                style={{ backgroundPosition: p.pos }}
                // Replace with the team member's photo
              />
              <div>
                <div className="team-name">{p.name}</div>
                <div className="team-role">{p.role}</div>
                <p className="team-bio">{p.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .team-section {
          padding: 0 0 160px;
        }
        .team-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 72px;
        }
        .team-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
        }
        .team-card {
          display: flex;
          flex-direction: column;
        }
        .team-photo {
          aspect-ratio: 3/4;
          background: var(--paper-2);
          background-image: url("/photo-studio.png");
          background-size: cover;
          filter: grayscale(1) contrast(1.05);
          margin-bottom: 24;
          border-radius: 16px;
          margin-bottom: 24px;
        }
        .team-name {
          font-family: "Mackinac", Georgia, serif;
          font-size: 20px;
          font-weight: 700;
          letter-spacing: -0.005em;
          margin-bottom: 4px;
        }
        .team-role {
          font-family: "Mackinac", serif;
          font-style: italic;
          font-size: 13px;
          color: var(--muted);
          margin-bottom: 16px;
        }
        .team-bio {
          font-size: 13px;
          line-height: 1.7;
          color: var(--ink-soft);
        }

        @media (max-width: 768px) {
          .team-section {
            padding: 0 0 60px;
          }
          .team-container {
            padding: 0 24px;
          }
          .team-grid {
            display: flex;
            flex-direction: column;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
}
