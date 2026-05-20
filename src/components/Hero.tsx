import Image from "next/image";

const gradient = "radial-gradient(120% 130% at 70% 30%, #f5d76a 0%, #f3a07a 35%, #e0a4e8 75%, #cdb9e8 100%)";

export default function Hero() {
  return (
    <section style={{ padding: "80px 0 160px", position: "relative" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 72px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 1fr",
            gap: 96,
            alignItems: "start",
          }}
        >
          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <h1
              style={{
                fontFamily: '"Mackinac", "Iowan Old Style", Georgia, serif',
                fontSize: "clamp(48px, 5.2vw, 72px)",
                lineHeight: 1.04,
                letterSpacing: "-0.018em",
                fontWeight: 700,
                maxWidth: "12ch",
              }}
            >
              Le idee che meritano di esistere hanno bisogno di{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400 }}>essere scritte bene.</em>
            </h1>

            <p
              style={{
                fontSize: 14,
                lineHeight: 1.55,
                color: "var(--ink-soft)",
                maxWidth: 320,
                marginTop: 48,
              }}
            >
              L&apos;impatto di una buona idea arriva con la sua realizzazione. E la
              realizzazione, di solito, passa attraverso oceani burocratici.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 16,
                marginTop: "auto",
                paddingTop: 64,
              }}
            >
              <a href="#" style={pillStyle("filled")}>
                Prenota una call conoscitiva <span style={{ fontFamily: '"Mackinac", serif', fontSize: 16 }}>→</span>
              </a>
              <a href="#" style={pillStyle("ghost")}>
                Scopri il metodo <span style={{ fontFamily: '"Mackinac", serif', fontSize: 16 }}>→</span>
              </a>
            </div>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "3/4",
                borderRadius: "999px 999px 4px 4px",
                overflow: "hidden",
                background: "var(--paper-2)",
              }}
            >
              <Image
                src="/photo-crosswalk.jpg"
                alt=""
                fill
                style={{ objectFit: "cover", objectPosition: "center 40%", filter: "grayscale(1) contrast(1.04)" }}
              />
              <div
                style={{
                  position: "absolute",
                  right: 24,
                  top: 24,
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: gradient,
                  boxShadow: "0 0 24px rgba(217,130,95,.45)",
                }}
              />
            </div>

            <div
              style={{
                border: "1.5px solid var(--ink)",
                borderRadius: 28,
                padding: "28px 32px",
              }}
            >
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink)" }}>
                No Profit Zone è uno studio di consulenza per il terzo settore. Lavoriamo con
                fondazioni, ONG ed enti culturali sulla scrittura dei bandi e sulla
                rendicontazione dei progetti — perché l&apos;attraversamento sia più breve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function pillStyle(variant: "filled" | "ghost"): React.CSSProperties {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    justifyContent: "space-between",
    fontFamily: '"Mallory", sans-serif',
    fontSize: 13,
    letterSpacing: "0.01em",
    padding: "18px 36px",
    borderRadius: 999,
    minWidth: 280,
    border: "1.5px solid var(--accent)",
    transition: "background .2s, color .2s",
  };
  if (variant === "filled") return { ...base, background: "var(--accent)", color: "#fff" };
  return { ...base, background: "transparent", color: "var(--accent)" };
}
