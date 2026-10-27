"use client";

import { Download, FileText } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function CVSection() {
  const { t } = useLanguage();

  return (
    <section
      id="cv"
      className="px-6 py-16 md:px-10"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 rounded-3xl bg-[#111111] p-8 text-white md:flex-row md:items-center md:justify-between md:p-12">
        <div className="flex w-full flex-col items-center gap-4 text-center md:w-auto md:flex-row md:items-start md:text-left">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
            <FileText size={28} strokeWidth={1.6} aria-hidden="true" />
          </span>
          <div>
            <p className="mb-2 text-sm tracking-[0.2em] uppercase text-white/50">
              {t.cv.label}
            </p>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              {t.cv.title}
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-white/60">
              {t.cv.description}
            </p>
          </div>
        </div>
        <a
          href="/CV-FR-DJONI.pdf"
          download="CV-Djoni-Ouedanou.pdf"
          className="inline-flex shrink-0 self-center items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition-transform hover:scale-105 md:self-auto"
          style={{ background: "var(--accent)" }}
        >
          <Download size={18} aria-hidden="true" />
          {t.cv.download}
        </a>
      </div>
    </section>
  );
}
