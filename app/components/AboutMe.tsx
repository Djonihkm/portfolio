"use client";

import { Heart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function AboutMe() {
  const { t } = useLanguage();

  return (
    <section id="about" className="px-6 py-14 md:px-10 md:py-18">
      <div className="mx-auto grid w-full max-w-5xl gap-6 md:grid-cols-[2fr_3fr] md:gap-16">
        <div>
          <p className="mb-3 text-xs tracking-[0.2em] uppercase text-zinc-500">
            {t.about.label}
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 md:text-4xl">
            {t.about.title}
          </h2>
        </div>

        <div className="space-y-4 text-base leading-7 text-zinc-600">
          <p>{t.about.motivation}</p>
          <p>{t.about.journey}</p>
          <p className="inline-flex items-center gap-2 rounded-full bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700">
            <Heart
              size={16}
              className="text-[var(--accent)]"
              aria-hidden="true"
            />
            {t.about.personal}
          </p>
        </div>
      </div>
    </section>
  );
}
