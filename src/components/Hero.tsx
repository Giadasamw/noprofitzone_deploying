import Image from "next/image";

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
                fontSize: "clamp(33.6px, 3.64vw, 50.4px)",
                lineHeight: 1.04,
                letterSpacing: "-0.018em",
                fontWeight: 700,
                maxWidth: "20ch",
              }}
            >
              Le idee che meritano di esistere hanno bisogno di{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400 }}>essere scritte bene.</em>
            </h1>

            <div
              style={{
                border: "1.5px solid var(--accent)",
                borderRadius: 20,
                padding: "16px 20px",
                marginTop: 48,
                maxWidth: 320,
              }}
            >
              <p style={{ fontSize: 11.8, lineHeight: 1.55, color: "var(--ink-soft)" }}>
                L&apos;impatto di una buona idea arriva con la sua realizzazione. E la
                realizzazione, di solito, passa attraverso oceani burocratici.
              </p>
            </div>

            <p
              style={{
                fontSize: 11.8,
                lineHeight: 1.6,
                color: "var(--ink)",
                maxWidth: 320,
                marginTop: 32,
              }}
            >
              No Profit Zone è uno studio di consulenza per il terzo settore. Lavoriamo con
              fondazioni, ONG ed enti culturali sulla scrittura dei bandi e sulla
              rendicontazione dei progetti — perché l&apos;attraversamento sia più breve.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                marginTop: 32,
              }}
            >
              <a href="#" style={pillStyle("filled")}>
                Prenota una call <span style={{ fontFamily: '"Mackinac", serif', fontSize: 11.2 }}>→</span>
              </a>
              <a href="#" style={pillStyle("ghost")}>
                Scopri il metodo <span style={{ fontFamily: '"Mackinac", serif', fontSize: 11.2 }}>→</span>
              </a>
            </div>
          </div>

          {/* Right */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "3/4",
              overflow: "hidden",
              background: "var(--paper-2)",
            }}
          >
            <Image
              src="/photo-hero-group.png"
              alt=""
              fill
              style={{ objectFit: "cover", objectPosition: "center 40%", filter: "grayscale(1) contrast(1.04)" }}
            />
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
