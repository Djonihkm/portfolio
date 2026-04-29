"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Écoute active",
    description: "Je comprends ton besoin avant d'écrire la première ligne. Un projet bien défini, c'est la moitié du travail.",
    color: "#3b82f6",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
        <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Transparence totale",
    description: "Tu sais où en est le projet à chaque étape, sans avoir à demander. Pas de surprises, pas de zones grises.",
    color: "#10b981",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <line x1="9" y1="10" x2="15" y2="10" />
        <line x1="9" y1="14" x2="13" y2="14" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Engagements tenus",
    description: "Les délais convenus sont des promesses, pas des estimations. Ce que je dis, je le fais — dans les temps.",
    color: "#f59e0b",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Adaptabilité",
    description: "Je m'ajuste à tes contraintes techniques, ton budget et ton rythme. C'est moi qui m'adapte à toi, pas l'inverse.",
    color: "#8b5cf6",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Discrétion absolue",
    description: "Tes données, tes clients, ton code restent confidentiels. Chaque projet est traité comme un actif précieux.",
    color: "#6366f1",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Livraison soignée",
    description: "Code propre, déploiement testé, documentation claire. Tu reçois un produit fini — pas un chantier à finir toi-même.",
    color: "#C0392B",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function WorkApproach() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="about"
      className="border-t border-zinc-100 py-24 flex flex-col items-center px-6 md:px-10"
    >
      <div className="w-full max-w-5xl">

        {/* Header */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease }}
              className="text-[11px] tracking-[0.25em] uppercase text-zinc-500 mb-3"
            >
              Approche
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.07 }}
              className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900"
            >
              Au-delà du code.
            </motion.h2>
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs text-zinc-300 hidden md:block"
          >
            {String(pillars.length).padStart(2, "0")} piliers
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
                  style={{ color: p.color } as React.CSSProperties}
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
