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
  fontSize: "clamp(22.4px, 2.24vw, 33.6px)",
  lineHeight: 1.05,
  letterSpacing: "-0.012em",
  fontWeight: 700,
  marginBottom: 32,
};

const subTitleStyle: React.CSSProperties = {
  fontFamily: '"Mallory", sans-serif',
  fontSize: 11,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "var(--ink)",
  marginBottom: 12,
};

const bodyStyle: React.CSSProperties = {
  fontSize: 13.2,
  lineHeight: 1.75,
  color: "var(--ink-soft)",
};

export default function ContattiLocation() {
  return (
    <section className="location-section">
      <div className="location-container">
        <p style={monoStyle}>— Dove</p>
        <h2 style={h2Style}>
          Dove ci <em style={{ fontStyle: "italic", fontWeight: 400 }}>trovi.</em>
        </h2>

        <div className="location-grid">
          <div className="location-info">
            <div style={{ marginBottom: 40 }}>
              <p style={subTitleStyle}>Sede operativa</p>
              <p style={bodyStyle}>
                Via S. Marco, 21<br />
                20121 Milano (MI)<br />
                Quartiere Brera, zona centrale
              </p>
            </div>
            <div>
              <p style={subTitleStyle}>Dati legali</p>
              <p style={bodyStyle}>
                No Profit Zone è un progetto di Allarà Nicoletta<br />
                P.IVA 09912150969
              </p>
            </div>
          </div>

          <div className="location-map">
            {/* Optional: embed Google Maps iframe here. Coordinates: 45.4721, 9.1867 */}
            <div className="map-fallback">
              <p style={bodyStyle}>
                Via S. Marco, 21<br />
                20121 Milano (MI)
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .location-section {
          padding: 0 0 120px;
        }
        .location-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 72px;
        }
        .location-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
        }
        .location-map {
          border-radius: 24px;
          overflow: hidden;
        }
        .map-fallback {
          height: 100%;
          min-height: 240px;
          background: var(--paper-2);
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px;
          text-align: center;
        }

        @media (max-width: 768px) {
          .location-section {
            padding: 0 0 60px;
          }
          .location-container {
            padding: 0 24px;
          }
          .location-grid {
            display: flex;
            flex-direction: column;
            gap: 40px;
          }
          .map-fallback {
            min-height: 200px;
          }
        }
      `}</style>
    </section>
  );
}
