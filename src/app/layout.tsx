import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
