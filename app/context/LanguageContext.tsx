"use client";

import { createContext, useContext, useState } from "react";
import { fr } from "../translations/fr";
import { en } from "../translations/en";
import type { Translations } from "../translations/fr";

type Lang = "fr" | "en";
const dict: Record<Lang, Translations> = { fr, en };

const LanguageContext = createContext<{
  lang: Lang;
  t: Translations;
  toggle: () => void;
}>({ lang: "fr", t: fr, toggle: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  const toggle = () => setLang((l) => (l === "fr" ? "en" : "fr"));
  return (
    <LanguageContext.Provider value={{ lang, t: dict[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
