import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

/* ── Équivalent DIN Neue Zeitgeist Grotesk → titres ── */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* ── Équivalent Avenir LT W01 35 Light → corps ── */
const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Djoni OUEDANOU — Développeur Web",
  description:
    "Portfolio de Djoni OUEDANOU, développeur web full stack spécialisé en Next.js, React et Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Nav />
        {children}
        <footer className="border-t border-zinc-100 px-6 md:px-14 lg:px-20 py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
            <span className="text-sm font-bold" style={{ fontFamily: "var(--font-display)" }}>
              Djoni OUEDANOU
            </span>
            <p className="text-xs text-zinc-400">© 2025 — Développeur Web Full Stack</p>
            <div className="flex gap-6">
              <a href="https://github.com/djonihkm" target="_blank" rel="noopener noreferrer"
                 className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors">GitHub</a>
              <a href="mailto:djonihkm@gmail.com"
                 className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors">Email</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
