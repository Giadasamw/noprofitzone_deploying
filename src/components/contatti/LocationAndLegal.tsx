"use client";

export default function LocationAndLegal() {
  return (
    <section className="location-section">
      <div className="location-container">
        <h2 style={sectionTitleStyle}>Dove ci trovi</h2>

        <div className="location-grid">
          {/* Left: Address and Legal */}
          <div>
            <div style={{ marginBottom: 40 }}>
              <h3 style={subheadingStyle}>Sede operativa</h3>
              <address style={addressStyle}>
                Via S. Marco, 21<br />
                20121 Milano (MI)<br />
                Quartiere Brera, zona centrale
              </address>
            </div>

            <div>
              <h3 style={subheadingStyle}>Dati legali</h3>
              <p style={legalStyle}>
                No Profit Zone è un progetto di Allarà Nicoletta<br />
                P.IVA 09912150969
              </p>
            </div>
          </div>

          {/* Right: Map Placeholder */}
          <div className="map-wrapper">
            {/* Optional: embed Google Maps iframe here. Coordinates: 45.4721, 9.1867 */}
            <div style={mapPlaceholderStyle}>
              <p style={{ 
                fontFamily: '"Mallory", sans-serif', 
                fontSize: 12, 
                color: "var(--muted)",
                textAlign: "center",
              }}>
                Via S. Marco, 21<br />
                20121 Milano<br />
                <span style={{ fontSize: 10, marginTop: 8, display: "block" }}>
                  Quartiere Brera
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .location-section {
          padding: 100px 0 120px;
        }
        .location-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 72px;
        }
        .location-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          margin-top: 48px;
          align-items: start;
        }
        .map-wrapper {
          aspect-ratio: 16/10;
          border-radius: 20px;
          overflow: hidden;
          background: var(--paper-2);
          border: 1px solid var(--line);
        }

        @media (max-width: 768px) {
          .location-section {
            padding: 60px 0;
          }
          .location-container {
            padding: 0 24px;
          }
          .location-grid {
            display: flex;
            flex-direction: column;
            gap: 40px;
            margin-top: 32px;
          }
          .map-wrapper {
            aspect-ratio: 4/3;
            border-radius: 16px;
          }
        }
      `}</style>
    </section>
  );
}

const sectionTitleStyle: React.CSSProperties = {
  fontFamily: '"Mackinac", Georgia, serif',
  fontSize: "clamp(22.4px, 2.24vw, 28px)",
  lineHeight: 1.1,
  letterSpacing: "-0.012em",
  fontWeight: 700,
};

const subheadingStyle: React.CSSProperties = {
  fontFamily: '"Mackinac", Georgia, serif',
  fontSize: 16,
  fontWeight: 700,
  lineHeight: 1.3,
  color: "var(--ink)",
  marginBottom: 12,
};

const addressStyle: React.CSSProperties = {
  fontFamily: '"Mallory", sans-serif',
  fontSize: 13.2,
  lineHeight: 1.7,
  color: "var(--ink-soft)",
  fontStyle: "normal",
};

const legalStyle: React.CSSProperties = {
  fontFamily: '"Mallory", sans-serif',
  fontSize: 13.2,
  lineHeight: 1.7,
  color: "var(--ink-soft)",
};

const mapPlaceholderStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 32,
};
