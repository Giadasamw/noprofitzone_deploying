import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiziHero from "@/components/servizi/ServiziHero";
import ServiziMethod from "@/components/servizi/ServiziMethod";
import ServiziService1 from "@/components/servizi/ServiziService1";
import ServiziService2 from "@/components/servizi/ServiziService2";
import ServiziMonitoraggio from "@/components/servizi/ServiziMonitoraggio";
import ServiziSelezione from "@/components/servizi/ServiziSelezione";
import ServiziTempistiche from "@/components/servizi/ServiziTempistiche";
import ServiziCta from "@/components/servizi/ServiziCta";

export const metadata: Metadata = {
  title: "Servizi e metodo | Scrittura bandi e rendicontazione | No Profit Zone",
  description:
    "Scrittura bandi, progettazione e rendicontazione per fondazioni, ONG ed enti culturali. Esperienza sui bandi Fondazione Cariplo, Compagnia di San Paolo, programmi europei.",
};

export default function ServiziEMetodo() {
  return (
    <>
      <Header />
      <main>
        <ServiziHero />
        <ServiziMethod />
        <ServiziService1 />
        <ServiziService2 />
        <ServiziMonitoraggio />
        <ServiziSelezione />
        <ServiziTempistiche />
        <ServiziCta />
      </main>
      <Footer />
    </>
  );
}
