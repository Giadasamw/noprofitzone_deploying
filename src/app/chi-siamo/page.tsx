import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChiSiamoHero from "@/components/chi-siamo/ChiSiamoHero";
import TeamFounder from "@/components/chi-siamo/TeamFounder";
import TeamAssistant from "@/components/chi-siamo/TeamAssistant";
import Principles from "@/components/chi-siamo/Principles";
import WhoWeWorkWith from "@/components/chi-siamo/WhoWeWorkWith";
import Governance from "@/components/chi-siamo/Governance";
import ChiSiamoCta from "@/components/chi-siamo/ChiSiamoCta";

export const metadata: Metadata = {
  title: "Chi siamo | Studio di consulenza non profit a Milano | No Profit Zone",
  description:
    "Studio boutique milanese fondato da Nicoletta Allarà e Olivia Salvi. Consulenza specializzata in bandi e rendicontazione per fondazioni, ONG ed enti culturali.",
};

export default function ChiSiamo() {
  return (
    <>
      <Header />
      <main>
        <ChiSiamoHero />
        <TeamFounder />
        <TeamAssistant />
        <Principles />
        <WhoWeWorkWith />
        <Governance />
        <ChiSiamoCta />
      </main>
      <Footer />
    </>
  );
}
