"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <div style={{ marginBottom: 18 }}>
              <span
              style={{
                fontFamily: '"Mackinac", Georgia, serif',
                fontSize: 25.2,
                fontWeight: 400,
                letterSpacing: "-0.01em",
                lineHeight: 1,
                color: "var(--paper)",
                display: "block",
                marginBottom: 6,
              }}
              >
                No Profit Zone.
              </span>
              <span style={{ fontFamily: '"Mallory", sans-serif', fontSize: 9.1, color: "rgba(250,246,236,0.65)" }}>
                Consulting per il terzo settore
              </span>
            </div>
            <p style={{ ...footerText, maxWidth: 360, opacity: 0.78 }}>
              Studio boutique di consulenza per bandi e rendicontazione nel terzo settore.
            </p>
            <p style={{ ...footerText, marginTop: 16, opacity: 0.78 }}>Via S. Marco, 21 — 20121 Milano</p>
          </div>

          <div>
            <h5 style={footerLabel}>Naviga</h5>
            {[
              { label: "Home", href: "/" },
              { label: "Servizi & Metodo", href: "/servizi-e-metodo" },
              { label: "Chi siamo", href: "#" },
              { label: "Contatti", href: "#" },
            ].map((l) => (
              <a key={l.label} href={l.href} style={{ ...footerText, display: "block", marginBottom: 6 }}>{l.label}</a>
            ))}
          </div>

          <div>
            <h5 style={footerLabel}>Contatti</h5>
            <a href="#" style={{ ...footerText, display: "block", marginBottom: 6 }}>hello@noprofitzone.it</a>
            <a href="#" style={{ ...footerText, display: "block", marginTop: 10 }}>→ Prenota una call</a>
          </div>

          <div>
            <h5 style={footerLabel}>Legale</h5>
            <p style={{ ...footerText, opacity: 0.78, marginBottom: 6 }}>P.IVA 09912150969</p>
            <a href="#" style={{ ...footerText, display: "block", marginBottom: 6 }}>Privacy Policy</a>
            <a href="#" style={{ ...footerText, display: "block" }}>Cookie Policy</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 No Profit Zone — Un progetto di Allarà Nicoletta</span>
          <span>Milano · Italia</span>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--ink);
          color: var(--paper);
          padding: 80px 0 32px;
        }
        .footer-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 72px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 56px;
          padding-bottom: 64px;
          border-bottom: 1px solid rgba(241,236,225,0.18);
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          padding-top: 28px;
          font-family: "Mallory", sans-serif;
          font-size: 7.7px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(241,236,225,0.5);
        }
        
        @media (max-width: 768px) {
          .footer {
            padding: 48px 0 24px;
          }
          .footer-container {
            padding: 0 24px;
          }
          .footer-grid {
            display: flex;
            flex-direction: column;
            gap: 40px;
            padding-bottom: 40px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 8px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}

const footerText: React.CSSProperties = {
  fontFamily: '"Mallory", sans-serif',
  fontSize: 9.8,
  lineHeight: 1.55,
  color: "var(--paper)",
};

const footerLabel: React.CSSProperties = {
  fontFamily: '"Mallory", sans-serif',
  fontSize: 7.7,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: "rgba(241,236,225,0.55)",
  marginBottom: 18,
  fontWeight: 400,
};
