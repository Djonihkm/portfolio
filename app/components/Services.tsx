"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const offers = [
  {
    name: "Site Vitrine",
    price: "499",
    description: "Votre présence en ligne, propre et professionnelle.",
    features: [
      "Design personnalisé",
      "Jusqu'à 5 pages",
      "Responsive mobile-first",
      "SEO optimisé",
      "Formulaire de contact",
      "Livraison en 5–7 jours",
    ],
    highlight: false,
    cta: "Demander un devis",
  },
  {
    name: "MVP / Web App",
    price: "1 499",
    description: "Transformez votre idée en produit fonctionnel rapidement.",
    features: [
      "Application web complète",
      "Authentification utilisateurs",
      "Base de données & API REST",
      "Interface admin",
      "Déploiement inclus",
      "Livraison en 10–15 jours",
    ],
    highlight: true,
    cta: "Démarrer mon projet",
  },
  {
    name: "Sur mesure",
    price: null,
    description: "Un projet complexe, une équipe, une vision à long terme.",
    features: [
      "SaaS, e-commerce, plateforme",
      "Architecture scalable",
      "Intégrations tierces",
      "Accompagnement continu",
      "Support & maintenance",
      "Délai selon périmètre",
    ],
    highlight: false,
    cta: "Discutons-en",
  },
];

const steps = [
  {
    number: "01",
    title: "Brief",
    description:
      "On échange sur ton besoin, tes objectifs et ton budget — par email, WhatsApp ou appel vidéo.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Devis",
    description:
      "Tu reçois sous 48h une proposition détaillée : périmètre, planning et tarif fixe. Pas de surprise.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Développement",
    description:
      "Je développe par itérations avec des points réguliers. Tu vois l'avancement à chaque étape.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Livraison",
    description:
      "Déploiement, tests finaux, remise des accès et documentation. Ton produit est prêt à l'emploi.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="services"
      className="border-t border-zinc-100 py-24 flex flex-col items-center px-6 md:px-10"
    >
      <div className="w-full max-w-5xl">

        {/* ── Header ── */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease }}
              className="text-[11px] tracking-[0.25em] uppercase text-zinc-500 mb-3"
            >
              Services & Tarifs
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.07 }}
              className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900"
            >
              Ce que je propose.
            </motion.h2>
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[11px] text-zinc-400 hidden md:block tracking-wide"
          >
            Paiement en €, $, £ ou XOF
          </motion.span>
        </div>

        {/* ── Offres ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24">
          {offers.map((o, i) => (
            <motion.div
              key={o.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView
                ? o.highlight
                  ? { opacity: 1, y: [0, -7, 0], transition: { opacity: { duration: 0.55, delay: 0.2 }, y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 } } }
                  : { opacity: 1, y: 0, transition: { duration: 0.55, ease, delay: 0.1 + i * 0.1 } }
                : {}}
              whileHover={o.highlight
                ? { y: -14, scale: 1.03, transition: { duration: 0.3, ease: "easeOut" } }
                : { y: -4, transition: { duration: 0.2 } }}
              className={`relative flex flex-col p-7 rounded-2xl border ${
                o.highlight
                  ? "card-highlight border-[var(--accent)] bg-zinc-950 text-white cursor-pointer"
                  : "border-zinc-100 bg-white transition-all duration-300 hover:border-zinc-200 hover:shadow-sm"
              }`}
            >
              {o.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-25 animate-ping" />
                  <span className="relative text-[10px] font-bold tracking-[0.2em] uppercase bg-[var(--accent)] text-white px-3 py-1 rounded-full whitespace-nowrap">
                    Populaire
                  </span>
                </div>
              )}

              {/* Nom + prix */}
              <div className="mb-6">
                <p className={`text-[11px] tracking-[0.2em] uppercase font-semibold mb-3 ${o.highlight ? "text-zinc-400" : "text-zinc-400"}`}>
                  {o.name}
                </p>
                <div className="flex items-end gap-1 mb-3">
                  {o.price ? (
                    <>
                      <span className={`text-[11px] font-medium ${o.highlight ? "text-zinc-400" : "text-zinc-400"}`}>à partir de</span>
                      <span className={`text-3xl font-bold tracking-tight ${o.highlight ? "text-white" : "text-zinc-900"}`}>
                        {o.price} €
                      </span>
                    </>
                  ) : (
                    <span className={`text-3xl font-bold tracking-tight ${o.highlight ? "text-white" : "text-zinc-900"}`}>
                      Sur devis
                    </span>
                  )}
                </div>
                <p className={`text-sm leading-relaxed ${o.highlight ? "text-zinc-400" : "text-zinc-500"}`} style={{ fontWeight: 300 }}>
                  {o.description}
                </p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 flex-1 mb-8">
                {o.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className="shrink-0 mt-0.5"
                      width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke={o.highlight ? "#C0392B" : "#C0392B"}
                      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className={o.highlight ? "text-zinc-300" : "text-zinc-600"} style={{ fontWeight: 300 }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`w-full text-center py-3 rounded-xl text-[12px] font-semibold tracking-wide transition-all duration-200 ${
                  o.highlight
                    ? "cta-shimmer bg-[var(--accent)] text-white hover:opacity-90"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                }`}
              >
                {o.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* ── Comment ça marche ── */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease, delay: 0.3 }}
          className="text-[11px] tracking-[0.25em] uppercase text-zinc-500 mb-4"
        >
          Processus
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease, delay: 0.37 }}
          className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 mb-12"
        >
          Comment ça marche ?
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-100">
          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.4 + i * 0.08 }}
              className="group bg-white p-6 flex flex-col gap-4 hover:bg-zinc-950 transition-colors duration-300 cursor-default"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] text-zinc-300 group-hover:text-zinc-600 transition-colors duration-300">
                  {s.number}
                </span>
                <span className="text-[var(--accent)]">{s.icon}</span>
              </div>
              <h4 className="text-sm font-bold tracking-tight text-zinc-900 group-hover:text-white transition-colors duration-300">
                {s.title}
              </h4>
              <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors duration-300 mt-auto" style={{ fontWeight: 300 }}>
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
