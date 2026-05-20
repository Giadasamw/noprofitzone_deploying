export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "var(--paper)", padding: "80px 0 32px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 72px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
            gap: 56,
            paddingBottom: 64,
            borderBottom: "1px solid rgba(241,236,225,0.18)",
          }}
        >
          <div>
            <div style={{ marginBottom: 18 }}>
              <span
                style={{
                  fontFamily: '"Mackinac", Georgia, serif',
                  fontSize: 36,
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
              <span style={{ fontFamily: '"Mallory", sans-serif', fontSize: 13, color: "rgba(250,246,236,0.65)" }}>
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
            {["Home", "Servizi & Metodo", "Chi siamo", "Contatti"].map((l) => (
              <a key={l} href="#" style={{ ...footerText, display: "block", marginBottom: 6 }}>{l}</a>
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

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 28,
            fontFamily: '"Mallory", sans-serif',
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(241,236,225,0.5)",
          }}
        >
          <span>© 2026 No Profit Zone — Un progetto di Allarà Nicoletta</span>
          <span>Milano · Italia</span>
        </div>
      </div>
    </footer>
  );
}

const footerText: React.CSSProperties = {
  fontFamily: '"Mallory", sans-serif',
  fontSize: 14,
  lineHeight: 1.55,
  color: "var(--paper)",
};

const footerLabel: React.CSSProperties = {
  fontFamily: '"Mallory", sans-serif',
  fontSize: 11,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: "rgba(241,236,225,0.55)",
  marginBottom: 18,
  fontWeight: 400,
};
