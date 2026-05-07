"use client";

import Hero from "./components/Hero";
import { useLanguage } from "./context/LanguageContext";
import ImageModal from "./components/ImageModal";
import WorkApproach from "./components/WorkApproach";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";

const techColors: Record<string, { bg: string; text: string; glow: string }> = {
  "Next.js": { bg: "#18181b", text: "#ffffff", glow: "rgba(24,24,27,0.35)" },
  TypeScript: { bg: "#3178c6", text: "#ffffff", glow: "rgba(49,120,198,0.4)" },
  Prisma: { bg: "#16A394", text: "#ffffff", glow: "rgba(22,163,148,0.4)" },
  React: { bg: "#20232a", text: "#61dafb", glow: "rgba(97,218,251,0.3)" },
  "Node.js": { bg: "#3C873A", text: "#ffffff", glow: "rgba(60,135,58,0.4)" },
  PostgreSQL: { bg: "#336791", text: "#ffffff", glow: "rgba(51,103,145,0.4)" },
  MySQL: { bg: "#E48E00", text: "#ffffff", glow: "rgba(228,142,0,0.4)" },
  "Tailwind CSS": {
    bg: "#0ea5e9",
    text: "#ffffff",
    glow: "rgba(14,165,233,0.4)",
  },
  Express: { bg: "#404D59", text: "#ffffff", glow: "rgba(64,77,89,0.35)" },
  MongoDB: { bg: "#4DB33D", text: "#ffffff", glow: "rgba(77,179,61,0.4)" },
  Stripe: { bg: "#6772E5", text: "#ffffff", glow: "rgba(103,114,229,0.4)" },
};

const projects = [
  {
    id: 1,
    title: "INMeS-TRACK",
    description:
      "Suivi en temps réel de la salle informatique de l'INMes — équipements, incidents, rapports.",
    tech: ["Next.js", "TypeScript", "Prisma"],
    link: "https://inmes-track.vercel.app/",
    year: "2026",
    month: "Mars.",
    image: "/images/inmes/inmes.png",
  },
  {
    id: 6,
    title: "Confio",
    description:
      "Plateforme de vente de produits de santés",
    tech: ["Next.js", "TypeScript", "Prisma"],
    link: "https://confio-gamma.vercel.app/",
    year: "2026",
    month: "Mai.",
    image: "/images/confio/confio.png",
  },
  {
    id: 2,
    title: "Chez-toi",
    description:
      "Plateforme de location immobilière, contrats, interface propriétaire, interface admin, interface client.",
    tech: ["Next.js", "PostgreSQL", "Tailwind"],
    link: "https://chez-toi.vercel.app/",
    year: "2026",
    month: "Février.",
    image: "/images/cheztoi/cheztoi.png",
  },
  {
    id: 4,
    title: "Football Club Manager",
    description:
      "Gestion d'un club de football : joueurs, matchs, statistiques, finances.",
    tech: ["Laravel", "MySQL", "Bootstrap CSS"],
    link: "https://olympicfc.hkmhub.com/",
    year: "2025",
    month: "Oct.",
    image: "/images/olympic/olympic.png",
  },
  {
    id: 3,
    title: "EMPPH",
    description:
      "Plateforme complète pour école primaire : élèves, notes, emplois du temps.",
    tech: ["Laravel", "MySQL", "Bootstrap CSS"],
    link: "https://empph.hkmhub.com/",
    year: "2025",
    month: "Décembre",
    image: "/images/empph/empph.png",
  },

  // {
  //   id: 5,
  //   title: "Commando",
  //   description:
  //     "Application de commande en ligne pour restaurant : menu, interface admin, interface client.",
  //   tech: ["React", "Laravel", "MySQL"],
  //   link: "https://commando.hkmhub.com/",
  //   year: "2025",
  //   month: "Mai",
  //   image: "/images/commando/commando.png",
  // },
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <main>
      <Hero />

      {/* ── PROJETS ── */}
      <section id="work" className="border-t py-14 flex flex-col items-center">
        <div className="w-full max-w-5xl px-6 md:px-10">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-[11px] tracking-[0.25em] uppercase text-zinc-500 mb-3">
                {t.projects.label}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
                {t.projects.title}
              </h2>
            </div>
            <span className="text-xs text-zinc-900 hidden md:block">
              {String(projects.length).padStart(2, "0")} {t.projects.label}
            </span>
          </div>
        </div>

        {/* Liste style blog — visuel gauche + contenu droit */}
        <div className="w-full max-w-5xl px-6 md:px-10  overflow-y-auto ">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className="group grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-0 py-5 md:max-h-113.5 md:overflow-hidden"
            >
              {/* Visuel gauche */}
              <div className="relative aspect-16/10 bg-zinc-950 overflow-hidden">
                {p.image ? (
                  <ImageModal src={p.image} alt={p.title} />
                ) : (
                  <>
                    <span className="absolute right-5 bottom-3 font-mono text-[90px] font-bold text-white/4 leading-none select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(ellipse at 25% 60%, rgba(192,57,43,0.08) 0%, transparent 65%)",
                      }}
                    />
                    <div
                      className="absolute inset-0 opacity-[0.035]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                        backgroundSize: "36px 36px",
                      }}
                    />
                  </>
                )}
              </div>

              {/* Contenu droit */}
              <div className="flex flex-col justify-between items-center border border-zinc-100  p-6">
                <div>
                  {/* Meta */}
                  <div className="flex items-center gap-3 text-[11px] text-zinc-400 mb-5 tracking-wide">
                    <span className="font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="w-4 h-px bg-zinc-200 inline-block" />
                    <span>
                      {p.month} {p.year}
                    </span>
                  </div>

                  {/* Titre */}
                  <h3
                    className="font-bold tracking-tight text-zinc-900 mb-4 leading-tight group-hover:text-(--accent) transition-colors duration-300"
                    style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}
                  >
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm text-zinc-900 mb-6 text-[15px] leading-6 tracking-widest"
                    style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
                  >
                    {t.projects.descriptions[p.id] ?? p.description}
                  </p>
                </div>

                {/* Footer — tech + lien */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-5 border-t border-zinc-100">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => {
                      const c = techColors[t] ?? {
                        bg: "rgba(0,0,0,0.04)",
                        text: "#71717a",
                        border: "rgba(0,0,0,0.12)",
                        glow: "rgba(0,0,0,0.1)",
                      };
                      return (
                        <span
                          key={t}
                          className="tech-pill whitespace-nowrap text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 rounded-full"
                          style={
                            {
                              background: c.bg,
                              color: c.text,
                              "--pill-glow": c.glow,
                            } as React.CSSProperties
                          }
                        >
                          {t}
                        </span>
                      );
                    })}
                  </div>
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg w-full sm:w-auto sm:ml-4 sm:shrink-0"
                      style={{
                        background: "var(--accent)",
                        boxShadow: "0 2px 10px rgba(192,57,43,0.35)",
                      }}
                    >
                      {t.projects.see}
                    </a>
                  ) : (
                    <span
                      className="priv-badge inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-semibold tracking-widest uppercase text-slate-200 select-none w-full sm:w-auto sm:ml-4 sm:shrink-0"
                      style={{ background: "#1e293b" }}
                    >
                      <svg
                        className="shrink-0"
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="11" width="18" height="11" rx="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      {t.projects.private}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <WorkApproach />
      <Services />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
