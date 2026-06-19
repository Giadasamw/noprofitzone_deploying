import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivacyContent from "@/components/privacy/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | No Profit Zone",
  description:
    "Informativa sul trattamento dei dati personali di No Profit Zone ai sensi del Regolamento (UE) 2016/679 (GDPR), con dettaglio degli strumenti di terze parti utilizzati.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function Privacy() {
  return (
    <>
      <Header />
      <main>
        <PrivacyContent />
      </main>
      <Footer />
    </>
  );
}
