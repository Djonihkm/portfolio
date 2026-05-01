"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote:
      "Djoni a transformé notre gestion de salle informatique en une solution moderne et intuitive. Livraison dans les délais, code impeccable. Un professionnel sur qui on peut compter les yeux fermés.",
    name: "KPONOU BARNABAS",
    role: "Gestionnaire des systèmes d'information",
    company: "INMes",
    initials: "KB",
    color: "#3b82f6",
  },
  {
    quote:
      "L'application de commande en ligne a boosté notre chiffre d'affaires dès la première semaine. Simple pour nos clients, simple pour nous. Djoni a su comprendre nos besoins sans qu'on ait à tout répéter.",
    name: "Faridath KOTO",
    role: "Gérante",
    company: "Restaurant Le Palais",
    initials: "FK",
    color: "#10b981",
  },
  {
    quote:
      "Chez-toi a entièrement digitalisé nos contrats de location. Réactif, transparent, il livre exactement ce qu'il promet. C'est rare, et ça fait toute la différence.",
    name: "Romuald DOSSOU",
    role: "Promoteur immobilier",
    company: "Immo Bénin",
    initials: "RD",
    color: "#C0392B",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
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
              Témoignages
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.07 }}
              className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900"
            >
              Ils me font confiance.
            </motion.h2>
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs text-zinc-300 hidden md:block"
          >
            {String(testimonials.length).padStart(2, "0")} avis
          </motion.span>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease, delay: 0.1 + i * 0.1 }}
              className="flex flex-col gap-6 p-7 border border-zinc-100 rounded-2xl bg-white hover:border-zinc-200 hover:shadow-sm transition-all duration-300"
            >
              {/* Guillemet */}
              <span
                className="font-serif text-5xl leading-none select-none"
                style={{ color: t.color, opacity: 0.25 }}
                aria-hidden
              >
                “
              </span>

              {/* Texte */}
              <p
                className="text-sm text-zinc-700 leading-relaxed flex-1"
                style={{ fontWeight: 300 }}
              >
                {t.quote}
              </p>

              {/* Auteur */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                <span
                  className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-white"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-zinc-900 truncate">
                    {t.name}
                  </p>
                  <p className="text-[11px] text-zinc-400 truncate">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
