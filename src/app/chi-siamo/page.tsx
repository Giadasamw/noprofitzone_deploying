import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChiSiamoHero from "@/components/chisiamo/ChiSiamoHero";
import ChiSiamoMission from "@/components/chisiamo/ChiSiamoMission";
import ChiSiamoTeam from "@/components/chisiamo/ChiSiamoTeam";
import WhyBoutique from "@/components/WhyBoutique";
import ServiziCta from "@/components/servizi/ServiziCta";

export const metadata: Metadata = {
  title: "Chi siamo | Lo studio | No Profit Zone Milano",
  description:
    "No Profit Zone è uno studio milanese di consulenza per bandi e rendicontazione, fondato da Nicoletta Allarà e Olivia Salvi. Scopri lo studio e il metodo di lavoro.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Chi siamo — No Profit Zone",
  url: "https://www.noprofitzone.com/chi-siamo",
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
    employee: [
      {
        "@type": "Person",
        name: "Nicoletta Allarà",
        jobTitle: "Founder · Ground Writer Consultant",
      },
      {
        "@type": "Person",
        name: "Olivia Salvi",
        jobTitle: "Assistant Manager",
      },
    ],
  },
};

export default function ChiSiamo() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <ChiSiamoHero />
        <ChiSiamoMission />
        <WhyBoutique />
        <ChiSiamoTeam />
        <ServiziCta />
      </main>
      <Footer />
    </>
  );
}
