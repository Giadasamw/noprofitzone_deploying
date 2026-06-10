"use client";

import { useState } from "react";

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

const paraStyle: React.CSSProperties = {
  fontSize: 13.2,
  lineHeight: 1.65,
  color: "var(--ink-soft)",
  maxWidth: 640,
  marginTop: 24,
};

interface ContactCardProps {
  name: string;
  role: string;
  user: string;
  domain: string;
  pos: string;
}

// Email reveal-on-click pattern to reduce scraping by simple bots
function ContactCard({ name, role, user, domain, pos }: ContactCardProps) {
  const [revealed, setRevealed] = useState(false);
  const email = `${user}@${domain}`;

  return (
    <div className="contact-card">
      <div
        className="contact-photo"
        style={{ backgroundPosition: pos }}
        // Replace with the team member's photo
      />
      <div>
        <div className="contact-name">{name}</div>
        <div className="contact-role">{role}</div>
        {revealed ? (
          <a href={`mailto:${email}`} className="contact-email">
            {email}
          </a>
        ) : (
          <button type="button" className="contact-reveal" onClick={() => setRevealed(true)}>
            Mostra email
          </button>
        )}
      </div>

      <style jsx>{`
        .contact-card {
          display: flex;
          align-items: center;
          gap: 20px;
          border: 1px solid var(--line);
          border-radius: 20px;
          padding: 24px;
        }
        .contact-photo {
          width: 88px;
          height: 88px;
          flex-shrink: 0;
          border-radius: 50%;
          background-image: url("/photo-studio.png");
          background-size: cover;
          filter: grayscale(1) contrast(1.05);
        }
        .contact-name {
          font-family: "Mackinac", Georgia, serif;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: -0.005em;
          margin-bottom: 4px;
        }
        .contact-role {
          font-family: "Mackinac", serif;
          font-style: italic;
          font-size: 12px;
          color: var(--muted);
          margin-bottom: 10px;
        }
        .contact-email {
          font-family: "Mallory", sans-serif;
          font-size: 12px;
          color: var(--accent);
          text-decoration: underline;
        }
        .contact-reveal {
          font-family: "Mallory", sans-serif;
          font-size: 11px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--accent);
          background: none;
          border: 1px solid var(--accent);
          border-radius: 999px;
          padding: 8px 16px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .contact-card {
            padding: 20px;
          }
          .contact-photo {
            width: 72px;
            height: 72px;
          }
        }
      `}</style>
    </div>
  );
}

export default function ContattiTeam() {
  return (
    <section className="team-section">
      <div className="team-container">
        <p style={monoStyle}>— Le persone</p>
        <h2 style={h2Style}>
          Le persone con cui <em style={{ fontStyle: "italic", fontWeight: 400 }}>parlerai.</em>
        </h2>
        <p style={paraStyle}>
          Per il primo contatto, mettici entrambe in CC: la doppia destinazione garantisce
          continuità del rapporto e tempi di risposta più rapidi.
        </p>

        <div className="team-grid">
          {/* Replace with Nicoletta's photo and actual email */}
          <ContactCard
            name="Nicoletta Allarà"
            role="Founder · Ground Writer Consultant"
            user="nicoletta"
            domain="noprofitzone.it"
            pos="25% 30%"
          />
          {/* Replace with Olivia's photo and actual email */}
          <ContactCard
            name="Olivia Salvi"
            role="Assistant Manager"
            user="olivia"
            domain="noprofitzone.it"
            pos="75% 30%"
          />
        </div>
      </div>

      <style jsx>{`
        .team-section {
          padding: 0 0 120px;
        }
        .team-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 72px;
        }
        .team-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 48px;
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
            margin-top: 32px;
          }
        }
      `}</style>
    </section>
  );
}
