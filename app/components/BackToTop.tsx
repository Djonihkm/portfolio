"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useSafeReducedMotion } from "../hooks/useSafeReducedMotion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reducedMotion = useSafeReducedMotion();
  const { t } = useLanguage();

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 400);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <button
      type="button"
      aria-label={t.nav.backToTop}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: reducedMotion ? "auto" : "smooth",
        })
      }
      className={`cursor-pointer fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-[opacity,transform,background-color] duration-300 hover:-translate-y-1 hover:bg-[#a93226] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      style={{ backgroundColor: "var(--accent)" }}
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp size={21} strokeWidth={2} aria-hidden="true" />
    </button>
  );
}
