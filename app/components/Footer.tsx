"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-zinc-100 px-6 md:px-14 lg:px-20 py-10">
      <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center gap-3 text-center md:text-left">
        <span className="text-sm font-bold" style={{ fontFamily: "var(--font-display)" }}>
          <Link href="/">Djoni OUEDANOU</Link>
        </span>
        <p className="text-xs text-zinc-400">{t.footer.copyright}</p>
        <div className="flex justify-end">
          <a href="mailto:contact@hkmhub.com" className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors">
            {t.footer.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
