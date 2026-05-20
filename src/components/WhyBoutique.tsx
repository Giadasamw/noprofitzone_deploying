export default function WhyBoutique() {
  return (
    <section style={{ padding: "160px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 72px" }}>
        <div style={{ marginBottom: 80, maxWidth: 720 }}>
          <p style={monoStyle}>— Lo studio</p>
          <h2 style={h2Style}>
            Le caratteristiche <em style={{ fontStyle: "italic", fontWeight: 400 }}>dello studio.</em>
          </h2>
        </div>

        <div style={{ maxWidth: 700 }}>
          {[
            "No Profit Zone è uno studio di due persone. Ogni progetto è seguito direttamente dalle due partner, dalla prima call alla rendicontazione finale, senza passaggi intermedi a collaboratori junior o consulenti esterni.",
            "La specializzazione è limitata per scelta: i bandi delle fondazioni di origine bancaria (Fondazione Cariplo, Compagnia di San Paolo, Fondazione CRT), i programmi europei per cultura e cooperazione (Creative Europe, CERV), i bandi della cooperazione internazionale italiana (AICS). All'interno di questo perimetro, lo studio ha esperienza pluriennale sui criteri di valutazione, sui format richiesti e sulle aspettative degli enti finanziatori.",
            "Lo studio accetta gli incarichi su cui ritiene di poter offrire un contributo effettivo. Quando un bando non presenta condizioni di fattibilità adeguate per l'organizzazione cliente, questa valutazione viene comunicata prima della formalizzazione della collaborazione.",
          ].map((text, i) => (
            <p key={i} style={{ fontSize: 13.2, lineHeight: 1.7, color: "var(--ink-soft)", marginBottom: i < 2 ? 24 : 0 }}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

const monoStyle: React.CSSProperties = {
  fontFamily: '"Mallory", sans-serif',
  fontSize: 7,
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
