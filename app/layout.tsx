import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import { SITE_URL } from "./lib/constants";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const title = "Djoni OUEDANOU — Développeur Web";
const description =
  "Portfolio de Djoni OUEDANOU, développeur web full stack spécialisé en Next.js, React et Node.js.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "Djoni OUEDANOU",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <LanguageProvider>
          <Nav />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
