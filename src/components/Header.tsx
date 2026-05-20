import Image from "next/image";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(250,246,236,0.88)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--line-soft)",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "24px 72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#" aria-label="No Profit Zone">
          <Image src="/logo-npz.png" alt="No Profit Zone" height={44} width={160} style={{ height: 44, width: "auto" }} />
        </a>

        <nav style={{ display: "flex", gap: 36 }}>
          {["Home", "Servizi & Metodo", "Chi siamo", "Contatti"].map((item, i) => (
            <a
              key={item}
              href="#"
              style={{
                fontFamily: '"Mallory", sans-serif',
                fontSize: 12,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "var(--ink)",
                position: "relative",
                ...(i === 0 ? { borderBottom: "1px solid var(--ink)", paddingBottom: 4 } : {}),
              }}
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#"
          style={{
            fontFamily: '"Mallory", sans-serif',
            fontSize: 12,
            letterSpacing: "0.06em",
            border: "1.5px solid var(--accent)",
            padding: "12px 22px",
            borderRadius: 999,
            color: "var(--accent)",
          }}
        >
          Prenota una call →
        </a>
      </div>
    </header>
  );
}
