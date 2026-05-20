"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <h1 className="hero-title">
              Le idee che meritano di esistere hanno bisogno di{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400 }}>essere scritte bene.</em>
            </h1>

            <div className="hero-card">
              <p style={{ fontSize: 11.8, lineHeight: 1.55, color: "var(--ink-soft)" }}>
                L&apos;impatto di una buona idea arriva con la sua realizzazione. E la
                realizzazione, di solito, passa attraverso oceani burocratici.
              </p>
            </div>

            <p className="hero-description">
              No Profit Zone è uno studio di consulenza per il terzo settore. Lavoriamo con
              fondazioni, ONG ed enti culturali sulla scrittura dei bandi e sulla
              rendicontazione dei progetti — perché l&apos;attraversamento sia più breve.
            </p>

            <div className="hero-buttons">
              <a href="#" style={pillStyle("filled")}>
                Prenota una call <span style={{ fontFamily: '"Mackinac", serif', fontSize: 11.2 }}>→</span>
              </a>
              <a href="#" style={pillStyle("ghost")}>
                Scopri il metodo <span style={{ fontFamily: '"Mackinac", serif', fontSize: 11.2 }}>→</span>
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="hero-image-wrapper">
            <Image
              src="/photo-hero-group.png"
              alt=""
              fill
              style={{ objectFit: "cover", objectPosition: "center 40%", filter: "grayscale(1) contrast(1.04)" }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          padding: 80px 0 160px;
          position: relative;
        }
        .hero-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 72px;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 96px;
          align-items: start;
        }
        .hero-title {
          font-family: "Mackinac", "Iowan Old Style", Georgia, serif;
          font-size: clamp(33.6px, 3.64vw, 50.4px);
          line-height: 1.04;
          letter-spacing: -0.018em;
          font-weight: 700;
          max-width: 20ch;
        }
        .hero-card {
          border: 1.5px solid var(--accent);
          border-radius: 20px;
          padding: 16px 20px;
          margin-top: 48px;
          max-width: 320px;
        }
        .hero-description {
          font-size: 11.8px;
          line-height: 1.6;
          color: var(--ink);
          max-width: 320px;
          margin-top: 32px;
        }
        .hero-buttons {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 12px;
          margin-top: 32px;
        }
        .hero-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 3/4;
          overflow: hidden;
          background: var(--paper-2);
        }
        
        @media (max-width: 768px) {
          .hero-section {
            padding: 40px 0 80px;
          }
          .hero-container {
            padding: 0 24px;
          }
          .hero-grid {
            display: flex;
            flex-direction: column-reverse;
            gap: 40px;
          }
          .hero-title {
            font-size: 28px;
            max-width: 100%;
          }
          .hero-card {
            max-width: 100%;
            margin-top: 32px;
          }
          .hero-description {
            max-width: 100%;
            margin-top: 24px;
          }
          .hero-buttons {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
            margin-top: 32px;
          }
          .hero-image-wrapper {
            aspect-ratio: 4/3;
            border-radius: 16px;
          }
        }
      `}</style>
    </section>
  );
}

function pillStyle(variant: "filled" | "ghost"): React.CSSProperties {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    justifyContent: "center",
    fontFamily: '"Mallory", sans-serif',
    fontSize: 11.1,
    letterSpacing: "0.01em",
    padding: "14px 22px",
    borderRadius: 999,
    border: "1.5px solid var(--accent)",
    transition: "background .2s, color .2s",
    whiteSpace: "nowrap",
  };
  if (variant === "filled") return { ...base, background: "var(--accent)", color: "#fff" };
  return { ...base, background: "transparent", color: "var(--accent)" };
}
