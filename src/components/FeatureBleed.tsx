export default function FeatureBleed() {
  return (
    <section style={{ position: "relative", padding: "80px 0" }}>
      <div
        style={{
          width: "100%",
          aspectRatio: "21/8",
          backgroundImage: "url('/photo-running.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          filter: "grayscale(1) contrast(1.06)",
          position: "relative",
        }}
        role="img"
        aria-label="Persone che corrono"
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.35) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 72,
            bottom: 72,
            color: "var(--paper)",
            maxWidth: 480,
          }}
        >
          <p
            style={{
              fontFamily: '"Mallory", sans-serif',
              fontSize: 10,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(250,246,236,0.75)",
              marginBottom: 16,
            }}
          >
            — In pratica
          </p>
          <blockquote
            style={{
              fontFamily: '"Mackinac", serif',
              fontStyle: "italic",
              fontSize: "clamp(20px, 2vw, 28px)",
              lineHeight: 1.25,
              letterSpacing: "-0.005em",
              fontWeight: 400,
            }}
          >
            &ldquo;Lo studio accetta gli incarichi su cui ritiene di poter offrire un contributo
            effettivo.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
