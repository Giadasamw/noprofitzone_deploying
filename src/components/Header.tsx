"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Servizi & Metodo", href: "/servizi-e-metodo" },
  { label: "Chi siamo", href: "/chi-siamo" },
  { label: "Contatti", href: "/contatti" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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
      <div className="header-container">
        <a href="/" aria-label="No Profit Zone">
          <Image src="/logo-npz.png" alt="No Profit Zone" height={53} width={192} style={{ height: 53, width: "auto" }} className="header-logo" />
        </a>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <span style={{ width: 24, height: 2, background: "var(--ink)", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
            <span style={{ width: 24, height: 2, background: "var(--ink)", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ width: 24, height: 2, background: "var(--ink)", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="desktop-nav">
          {navLinks.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <a
                key={item.label}
                href={item.href}
                style={{
                  fontFamily: '"Mallory", sans-serif',
                  fontSize: 11,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                  position: "relative",
                  ...(isActive ? { borderBottom: "1px solid var(--ink)", paddingBottom: 4 } : {}),
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <a
          href="/contatti"
          className="desktop-cta"
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

      {/* Mobile nav overlay */}
      {menuOpen && (
        <div className="mobile-nav-overlay">
          <nav style={{ display: "flex", flexDirection: "column", gap: 24, padding: "32px 24px" }}>
            {navLinks.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: '"Mallory", sans-serif',
                    fontSize: 14,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "var(--ink)",
                    ...(isActive ? { borderBottom: "1px solid var(--ink)", paddingBottom: 4, alignSelf: "flex-start" } : {}),
                  }}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="/contatti"
              style={{
                fontFamily: '"Mallory", sans-serif',
                fontSize: 12,
                letterSpacing: "0.06em",
                border: "1.5px solid var(--accent)",
                padding: "14px 24px",
                borderRadius: 999,
                color: "var(--accent)",
                textAlign: "center",
                marginTop: 16,
              }}
            >
              Prenota una call →
            </a>
          </nav>
        </div>
      )}

      <style jsx>{`
        .header-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 24px 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }
        .desktop-nav {
          display: flex;
          gap: 36px;
        }
        .desktop-cta {
          display: block;
        }
        .mobile-nav-overlay {
          display: none;
        }
        
        @media (max-width: 768px) {
          .header-container {
            padding: 16px 24px;
          }
          .header-logo {
            height: 40px !important;
          }
          .mobile-menu-btn {
            display: block;
          }
          .desktop-nav {
            display: none;
          }
          .desktop-cta {
            display: none;
          }
          .mobile-nav-overlay {
            display: block;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--paper);
            border-bottom: 1px solid var(--line-soft);
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          }
        }
      `}</style>
    </header>
  );
}
