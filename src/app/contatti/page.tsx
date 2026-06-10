import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContattiHero from "@/components/contatti/ContattiHero";
import ContattiBooking from "@/components/contatti/ContattiBooking";
import ContattiTeam from "@/components/contatti/ContattiTeam";
import ContattiLocation from "@/components/contatti/ContattiLocation";

export const metadata: Metadata = {
  title: "Contatti | Prenota una call conoscitiva | No Profit Zone Milano",
  description:
    "Contatta No Profit Zone per una call conoscitiva gratuita di 30 minuti. Studio di consulenza bandi e rendicontazione con sede a Milano.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contatti — No Profit Zone",
  url: "https://www.noprofitzone.com/contatti",
  mainEntity: {
    "@type": "ProfessionalService",
    name: "No Profit Zone",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via S. Marco, 21",
      addressLocality: "Milano",
      postalCode: "20121",
      addressCountry: "IT",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "consultation booking",
      availableLanguage: ["Italian"],
    },
  },
};

export default function Contatti() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <ContattiHero />
        <ContattiBooking />
        <ContattiTeam />
        <ContattiLocation />
      </main>
      <Footer />
    </>
  );
}
