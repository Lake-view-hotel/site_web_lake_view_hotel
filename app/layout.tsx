import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lake View Hôtel – Ampefy, Madagascar",
  description:
    "Un havre de paix niché sur les rives du lac d'Ampefy. Découvrez nos chambres, activités et restaurant panoramique au cœur des hauts plateaux malgaches.",
  keywords:
    "Lake View Hotel, Ampefy, Madagascar, hôtel, lac, tourisme Madagascar, hauts plateaux",
  authors: [{ name: "Lake View Hôtel" }],
  metadataBase: new URL("https://lake-view-hotel.mg"),
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${cormorantGaramond.variable} ${dmSans.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
