import Hero from "./components/Hero";

const projects = [
  {
    id: 1,
    title: "MES-Track",
    description: "Suivi en temps réel des salles informatiques — équipements, incidents, rapports.",
    tech: ["Next.js", "TypeScript", "Prisma"],
    link: "https://mes-track.vercel.app",
    year: "2024",
  },
  {
    id: 2,
    title: "Gestion de Rapports",
    description: "Création, validation et archivage de rapports avec workflow d'approbation.",
    tech: ["React", "Node.js", "PostgreSQL"],
    link: null,
    year: "2024",
  },
  {
    id: 3,
    title: "EduPrime",
    description: "Plateforme complète pour école primaire : élèves, notes, emplois du temps.",
    tech: ["Next.js", "MySQL", "Tailwind CSS"],
    link: null,
    year: "2024",
  },
  {
    id: 4,
    title: "Football Club Manager",
    description: "Gestion d'un club de football : joueurs, matchs, statistiques, finances.",
    tech: ["React", "Express", "MongoDB"],
    link: null,
    year: "2023",
  },
  {
    id: 5,
    title: "Location Pro",
    description: "Plateforme immobilière — biens, contrats, paiements, interface propriétaire.",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    link: null,
    year: "2023",
  },
];

const stack = [
  "Next.js", "React", "TypeScript", "Node.js",
  "PostgreSQL", "MySQL", "MongoDB", "Prisma", "Tailwind CSS", "REST API",
];

export default function Home() {
  return (
    <main>

      <Hero />

      {/* ── PROJETS ── */}
      <section id="work" className="px-6 md:px-14 lg:px-20 py-24 border-t border-zinc-100">

        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase text-zinc-400 mb-3">
              Sélection de projets
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
              Réalisations
            </h2>
          </div>
          <span className="text-xs text-zinc-300 hidden md:block">0{projects.length} projets</span>
        </div>

        {/* Liste éditoriale */}
        <div className="divide-y divide-zinc-100">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="project-row flex items-center gap-6 py-6 rounded-sm"
            >
              <span className="font-mono text-[11px] text-zinc-300 w-6 shrink-0 select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex-1 min-w-0">
                <span className="text-base font-semibold text-zinc-900">{p.title}</span>
                <span className="hidden md:inline text-sm text-zinc-400 ml-5">
                  {p.tech.join(" · ")}
                </span>
                <p className="md:hidden text-xs text-zinc-400 mt-0.5">{p.tech.join(" · ")}</p>
              </div>

              <span className="text-xs text-zinc-300 shrink-0 hidden lg:block">{p.year}</span>

              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-[11px] tracking-wide text-zinc-400 hover:text-zinc-900 transition-colors flex items-center gap-1"
                >
                  Voir ↗
                </a>
              ) : (
                <span className="shrink-0 text-[11px] text-zinc-200">Privé</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="px-6 md:px-14 lg:px-20 py-32 border-t border-zinc-100">
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.25em] uppercase text-zinc-400 mb-8">
            Contact
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-tight mb-10">
            Travaillons<br />ensemble.
          </h2>
          <p className="text-sm text-zinc-700 leading-relaxed mb-10 max-w-sm"
             style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}>
            Un projet en tête ? Discutons-en — je suis disponible pour de
            nouvelles collaborations.
          </p>
          <a
            href="mailto:djonihkm@gmail.com"
            className="inline-flex items-center gap-4 text-base font-medium text-zinc-900 group mb-10"
          >
            djonihkm@gmail.com
            <span className="block h-px bg-zinc-900 w-8 group-hover:w-20 transition-all duration-500 ease-out" />
          </a>
          <div className="flex gap-6 pt-8 border-t border-zinc-100">
            <a href="https://github.com/djonihkm" target="_blank" rel="noopener noreferrer"
               className="text-xs tracking-[0.18em] uppercase text-zinc-400 hover:text-zinc-900 transition-colors">
              GitHub
            </a>
            <a href="mailto:djonihkm@gmail.com"
               className="text-xs tracking-[0.18em] uppercase text-zinc-400 hover:text-zinc-900 transition-colors">
              Email
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
