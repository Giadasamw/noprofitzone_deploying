import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContattiHero from "@/components/contatti/ContattiHero";
import BookingAndForm from "@/components/contatti/BookingAndForm";
import ContactCards from "@/components/contatti/ContactCards";
import LocationAndLegal from "@/components/contatti/LocationAndLegal";

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
        <BookingAndForm />
        <ContactCards />
        <LocationAndLegal />
        {/* No closing CTA section on this page — the entire page IS the CTA */}
      </main>
      <Footer />
    </>
  );
}
