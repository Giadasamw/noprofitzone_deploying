import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Narrative from "@/components/Narrative";
import Services from "@/components/Services";
import Method from "@/components/Method";
import WhyBoutique from "@/components/WhyBoutique";
import ForWhom from "@/components/ForWhom";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Narrative />
        <Services />
        <Method />
        <WhyBoutique />
        <ForWhom />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
