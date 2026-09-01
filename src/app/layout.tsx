import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "No Profit Zone │ Consulenza bandi e rendicontazione per il terzo settore",
  description:
    "Studio milanese di consulenza per bandi e rendicontazione. Lavoriamo con fondazioni, ONG ed enti culturali sull'intero ciclo di un progetto finanziato, dalla candidatura alla relazione finale.",
  icons: {
    icon: "/favicon.png",
  },
  verification: {
    google: "DWWP82Y1TZ00jkwvmJ0hHM1p-JwtWmPWik4fW9VtU7c",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <head>
        {/* Google Tag Manager */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-W2M5TCLYSP"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-W2M5TCLYSP');
            `,
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
