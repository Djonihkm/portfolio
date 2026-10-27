"use client";

import Image from "next/image";
import { Braces } from "lucide-react";
import {
  siAngular,
  siBootstrap,
  siCss,
  siDocker,
  siGit,
  siGithub,
  siGitlab,
  siHtml5,
  siJavascript,
  siLaravel,
  siMysql,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siReact,
  siTailwindcss,
  siTypescript,
} from "simple-icons";
import { useLanguage } from "../context/LanguageContext";

const technologyGroups = [
  {
    key: "frontend",
    technologies: [
      { name: "Next.js", icon: siNextdotjs },
      { name: "Angular", icon: siAngular },
      { name: "React", icon: siReact },
      { name: "TypeScript", icon: siTypescript },
      { name: "JavaScript", icon: siJavascript },
      { name: "HTML5", icon: siHtml5 },
      { name: "CSS3", icon: siCss },
      { name: "Tailwind CSS", icon: siTailwindcss },
      { name: "Bootstrap", icon: siBootstrap },
    ],
  },
  {
    key: "backend",
    technologies: [
      { name: "Node.js", icon: siNodedotjs },
      { name: "NestJS", icon: siNestjs },
      { name: "PHP", icon: siPhp },
      { name: "Laravel", icon: siLaravel },
      { name: "RESTful API", icon: null },
    ],
  },
  {
    key: "databases",
    technologies: [
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "MySQL", icon: siMysql },
      { name: "SQL Server", icon: null },
    ],
  },
  {
    key: "tools",
    technologies: [
      { name: "Docker", icon: siDocker },
      { name: "Git", icon: siGit },
      { name: "GitHub", icon: siGithub },
      { name: "GitLab", icon: siGitlab },
    ],
  },
] as const;

export default function Technologies() {
  const { t } = useLanguage();

  return (
    <section
      id="technologies"
      className="py-10 flex flex-col items-center px-6 md:px-10"
    >
      <div className="w-full max-w-5xl">
        <p className="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-2">
          {t.technologies.label}
        </p>
        <div className="mb-6 flex flex-col items-start gap-2">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900">
            {t.technologies.title}
          </h2>
          <p className="max-w-lg text-sm leading-6 text-zinc-500">
            {t.technologies.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
          {technologyGroups.map((group) => (
            <div key={group.key}>
              <h3 className="mb-3 text-xs font-semibold tracking-[0.16em] uppercase text-zinc-500">
                {t.technologies.categories[group.key]}
              </h3>
              <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3">
                {group.technologies.map((technology) => (
                  <li
                    key={technology.name}
                    className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-xl border border-zinc-100 bg-white px-2 py-3 transition-colors hover:border-zinc-300"
                  >
                    {technology.icon ? (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-9 w-9 shrink-0"
                        style={{ fill: `#${technology.icon.hex}` }}
                      >
                        <path d={technology.icon.path} />
                      </svg>
                    ) : technology.name === "SQL Server" ? (
                      <Image
                        src="/images/technologies/microsoftsqlserver-original.svg"
                        alt=""
                        aria-hidden="true"
                        width={36}
                        height={36}
                        className="h-9 w-9 shrink-0"
                      />
                    ) : (
                      <Braces
                        aria-hidden="true"
                        className="h-9 w-9 shrink-0 text-zinc-500"
                        strokeWidth={1.6}
                      />
                    )}
                    <span className="w-full break-words text-center text-xs font-semibold leading-4 text-zinc-800">
                      {technology.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
