"use client";

import { useRef, type CSSProperties } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const pillarColors = ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#6366f1", "#C0392B"];

const pillarIcons = [
  () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
      <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  ),
  () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <line x1="9" y1="10" x2="15" y2="10" />
      <line x1="9" y1="14" x2="13" y2="14" />
    </svg>
  ),
  () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  ),
  () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function WorkApproach() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useLanguage();

  const pillars = t.approach.pillars.map((p, i) => ({
    number: String(i + 1).padStart(2, "0"),
    title: p.title,
    description: p.description,
    color: pillarColors[i],
    icon: pillarIcons[i](),
  }));

  return (
    <section
      ref={ref}
      id="about"
      className="border-t border-zinc-100 py-14 flex flex-col items-center px-6 md:px-10"
    >
      <div className="w-full max-w-5xl">

        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease }}
              className="text-[11px] tracking-[0.25em] uppercase text-zinc-500 mb-3"
            >
              {t.approach.label}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.07 }}
              className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900"
            >
              {t.approach.title}
            </motion.h2>
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs text-zinc-300 hidden md:block"
          >
            {String(pillars.length).padStart(2, "0")} {t.approach.count}
          </motion.span>
        </div>

        {/* Grille des piliers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-100">
          {pillars.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease, delay: 0.1 + i * 0.08 }}
              className="approach-card group bg-white p-7 flex flex-col gap-5 transition-colors duration-300 hover:bg-zinc-950 cursor-default"
            >
              {/* Top — numéro + icône */}
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] text-zinc-300 group-hover:text-zinc-600 transition-colors duration-300">
                  {p.number}
                </span>
                <span
                  className="transition-colors duration-300"
                  style={{ color: p.color } as CSSProperties}
                >
                  {p.icon}
                </span>
              </div>

              {/* Titre */}
              <h3 className="text-base font-bold tracking-tight text-zinc-900 group-hover:text-white transition-colors duration-300">
                {p.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm text-zinc-700 leading-relaxed group-hover:text-zinc-400 transition-colors duration-300 mt-auto"
                style={{ fontWeight: 300 }}
              >
                {p.description}
              </p>

              {/* Ligne accent au bas */}
              <div
                className="h-px w-0 group-hover:w-full transition-all duration-500 ease-out"
                style={{ background: "var(--accent)" }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
