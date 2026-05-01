"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, t, toggle } = useLanguage();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { href: "#work",     label: t.nav.projects },
    { href: "#about",    label: t.nav.approach },
    { href: "#services", label: t.nav.services },
    { href: "#contact",  label: t.nav.contact },
  ];

  const toggleBtn = (
    <button
      onClick={toggle}
      aria-label="Switch language"
      className={`cursor-pointer text-[11px] font-semibold tracking-widest transition-colors duration-300 ${
        scrolled ? "text-zinc-400 hover:text-zinc-900" : "text-white/50 hover:text-white"
      }`}
    >
      <span style={{ color: lang === "fr" ? "var(--accent)" : undefined }}>🇫🇷 FR</span>
      <span className="mx-1 opacity-30">·</span>
      <span style={{ color: lang === "en" ? "var(--accent)" : undefined }}>🇬🇧 EN</span>
    </button>
  );

  const toggleBtnMobile = (
    <button
      onClick={toggle}
      aria-label="Switch language"
      className="cursor-pointer text-[11px] font-semibold tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
    >
      <span style={{ color: lang === "fr" ? "var(--accent)" : undefined }}>🇫🇷 FR</span>
      <span className="mx-1 opacity-30">·</span>
      <span style={{ color: lang === "en" ? "var(--accent)" : undefined }}>🇬🇧 EN</span>
    </button>
  );

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md" : ""
      }`}
      style={{ color: scrolled ? "#111111" : "#ffffff" }}
    >
      <nav className="flex items-center justify-between px-6 md:px-14 lg:px-20 h-16">
        <a
          href="#home"
          className={`font-bold tracking-tight leading-none transition-colors duration-500 ${scrolled ? "text-[#111111]" : "text-white"}`}
          style={{ fontFamily: "var(--font-display)", fontSize: "35px", fontWeight: 700 }}
          onClick={() => setMenuOpen(false)}
        >
          Djoni OUEDANOU
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`nav-link text-[13px] tracking-[0.18em] uppercase transition-colors duration-500 ${scrolled ? "text-zinc-600 hover:text-[#111111]" : "text-white/70 hover:text-white"}`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>{toggleBtn}</li>
        </ul>

        {/* Mobile — burger only */}
        <div className="md:hidden flex items-center gap-4">
          <button
            className="flex flex-col gap-[5px] p-1.5"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-px transition-all duration-200 origin-center ${scrolled ? "bg-zinc-900" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-5 h-px transition-all duration-200 ${scrolled ? "bg-zinc-900" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px transition-all duration-200 origin-center ${scrolled ? "bg-zinc-900" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-white ${menuOpen ? "max-h-52 border-b border-zinc-100" : "max-h-0"}`}>
        <div className="px-6 py-5 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[11px] tracking-[0.18em] uppercase text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-2 border-t border-zinc-100">{toggleBtnMobile}</div>
        </div>
      </div>
    </header>
  );
}
