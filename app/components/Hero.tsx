"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AnimatedTitle from "./AnimatedTitle";

function GlobeSpinner({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
    >
      <defs>
        <clipPath id="globe-clip">
          <circle cx="12" cy="12" r="9.5" />
        </clipPath>
      </defs>
      {/* Contenu clipé au cercle */}
      <g clipPath="url(#globe-clip)">
        {/* 5 parallèles espacés de ~4 unités */}
        <line x1="2" y1="4"  x2="22" y2="4"  />
        <line x1="2" y1="8"  x2="22" y2="8"  />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="2" y1="16" x2="22" y2="16" />
        <line x1="2" y1="20" x2="22" y2="20" />
        {/* 4 méridiens espacés à 45° */}
        <ellipse cx="12" cy="12" rx="6" ry="10" className="globe-m globe-m1" />
        <ellipse cx="12" cy="12" rx="6" ry="10" className="globe-m globe-m2" />
        <ellipse cx="12" cy="12" rx="6" ry="10" className="globe-m globe-m3" />
        <ellipse cx="12" cy="12" rx="6" ry="10" className="globe-m globe-m4" />
      </g>
      {/* Cercle extérieur — toujours rond, dessiné par-dessus */}
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

/* ── Compteur animé 0 → target ── */
function useCounter(target: number, delayMs = 600) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let raf: number;
    const timer = setTimeout(() => {
      let start: number | null = null;
      const duration = 1400;
      const tick = (ts: number) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        setCount(Math.floor(p * target));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delayMs);
    return () => { clearTimeout(timer); cancelAnimationFrame(raf); };
  }, [target, delayMs]);
  return count;
}

/* ── Spotlight curseur ── */
function CursorSpotlight({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  useEffect(() => {
    const h = (e: MouseEvent) => {
      const r = sectionRef.current?.getBoundingClientRect();
      if (!r) return;
      setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
    };
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, [sectionRef]);
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 transition-[background] duration-100"
      style={{
        background: `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, rgba(192,57,43,0.07) 0%, transparent 65%)`,
      }}
    />
  );
}

export default function Hero() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const count5 = useCounter(5, 650);
  const count2 = useCounter(2, 650);

  const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

  const fadeUp = (delay = 0) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.75, ease, delay },
        };

  const photoAnim = reduced
    ? {}
    : {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 1.1, ease, delay: 0.2 },
      };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen bg-[#0f0f0f] grid grid-cols-1 md:grid-cols-2 pt-16"
    >
      {!reduced && <CursorSpotlight sectionRef={sectionRef} />}

      {/* Left — texte */}
      <div className="relative z-10 flex flex-col justify-between px-6 md:px-14 lg:px-20 py-12 md:py-16">

        {/* Pills — entrée en cascade */}
        <motion.div
          className="flex flex-wrap gap-2"
          initial="hidden"
          animate="visible"
          variants={reduced ? {} : {
            visible: { transition: { staggerChildren: 0.09 } },
          }}
        >
          {["Next.js", "TypeScript", "Node.js", "Laravel", "Postgresql"].map((t) => (
            <motion.span
              key={t}
              variants={reduced ? {} : {
                hidden:  { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="text-[11px] font-medium tracking-widest uppercase border border-white/20 text-white/60 px-3 py-1.5 rounded-full"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              {t}
            </motion.span>
          ))}
        </motion.div>

        {/* Titre + CTAs */}
        <div>
          <h5
            className="mt-3 font-bold tracking-tight leading-[0.9] text-white mb-7"
            style={{ fontSize: "clamp(26px, 4vw, 52px)" }}
          >
            <AnimatedTitle />
          </h5>

          {/* Deux CTAs */}
          <motion.div className="flex flex-wrap gap-3 mb-6" {...fadeUp(0.3)}>
            <motion.a
              href="#work"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white"
              style={{ background: "var(--accent)" }}
              whileHover={reduced ? {} : { scale: 1.05, boxShadow: "0 0 28px rgba(192,57,43,0.55)" }}
              whileTap={reduced ? {} : { scale: 0.97 }}
            >
              Voir mes projets
            </motion.a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/25 hover:border-white/60 hover:bg-white/5 transition-all duration-300"
            >
              Me contacter
            </a>
          </motion.div>

          {/* Ligne de crédibilité */}
          <motion.p
            className="text-[11px] text-white/35 tracking-wide mb-3 flex items-center gap-1.5"
            {...fadeUp(0.4)}
          >
            <span aria-hidden style={{ display: "inline-block" }}>
              <GlobeSpinner size={25} />
            </span>
            Disponible pour freelance · Basé à Cotonou, Bénin
          </motion.p>
        </div>

        {/* Stats bas avec compteurs */}
        <motion.div
          className="flex items-center gap-5 text-[11px] text-white/30 tracking-wide"
          {...fadeUp(0.5)}
        >
          <span>
            <span className="tabular-nums">{reduced ? 5 : count5}</span>+ Projets
          </span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>
            <span className="tabular-nums">{reduced ? 2 : count2}</span>+ Ans d&apos;expérience
          </span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Full Stack</span>
        </motion.div>
      </div>

      {/* Right — photo */}
      <motion.div
        className="relative hidden md:block p-6 pl-0 z-10"
        {...photoAnim}
      >
        <div
          className="absolute bottom-4 right-0 w-[88%] h-[88%] rounded-3xl"
          style={{
            background: "rgba(192,57,43,0.12)",
            border: "1.5px solid rgba(192,57,43,0.35)",
          }}
        />
        <div
          className="relative h-full rounded-3xl overflow-hidden"
          style={{
            transform: "translateY(-20px)",
            boxShadow: "0 32px 64px rgba(0,0,0,0.55)",
          }}
        >
          <Image
            src="/image.png"
            alt="Djoni OUEDANOU"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0f0f0f]/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/60 to-transparent" />
        </div>
      </motion.div>

      {/* Mobile — photo compacte */}
      <div
        className="relative md:hidden mx-6 h-52 overflow-hidden order-first mt-1 rounded-2xl"
        style={{ boxShadow: "0 16px 40px rgba(0,0,0,0.4)" }}
      >
        <Image src="/image.png" alt="Djoni OUEDANOU" fill className="object-cover object-top" priority />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0f0f0f] to-transparent" />
      </div>
    </section>
  );
}
