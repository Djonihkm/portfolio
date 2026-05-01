"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AnimatedTitle from "./AnimatedTitle";
import { useLanguage } from "../context/LanguageContext";

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
      <g clipPath="url(#globe-clip)">
        <line x1="2" y1="4"  x2="22" y2="4"  />
        <line x1="2" y1="8"  x2="22" y2="8"  />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="2" y1="16" x2="22" y2="16" />
        <line x1="2" y1="20" x2="22" y2="20" />
        <ellipse cx="12" cy="12" rx="6" ry="10" className="globe-m globe-m1" />
        <ellipse cx="12" cy="12" rx="6" ry="10" className="globe-m globe-m2" />
        <ellipse cx="12" cy="12" rx="6" ry="10" className="globe-m globe-m3" />
        <ellipse cx="12" cy="12" rx="6" ry="10" className="globe-m globe-m4" />
      </g>
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

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
  const { t } = useLanguage();

  const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

  const fadeUp = (delay = 0) =>
    reduced ? {} : {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.75, ease, delay },
    };

  const photoAnim = reduced ? {} : {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1.1, ease, delay: 0.2 },
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative bg-[#0f0f0f] md:h-screen flex flex-col md:grid md:grid-cols-2 pt-16"
    >
      {!reduced && <CursorSpotlight sectionRef={sectionRef} />}

      {/* ── Contenu ── */}
      <div className="relative z-10 flex flex-col justify-between px-6 md:px-14 lg:px-20 py-16 md:py-16 gap-8 md:gap-0">

        {/* Pills */}
        <motion.div
          className="flex flex-wrap gap-2"
          initial="hidden"
          animate="visible"
          variants={reduced ? {} : { visible: { transition: { staggerChildren: 0.09 } } }}
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

        {/* Titre + CTAs + dispo */}
        <div>
          <h1
            className="font-bold tracking-tight leading-[0.92] text-white mb-6"
            style={{ fontSize: "clamp(32px, 7vw, 52px)" }}
          >
            <AnimatedTitle lines={t.hero.titleLines} />
          </h1>

          <motion.div className="flex flex-wrap gap-3 mb-5" {...fadeUp(0.3)}>
            <motion.a
              href="#work"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white"
              style={{ background: "var(--accent)" }}
              whileHover={reduced ? {} : { scale: 1.05, boxShadow: "0 0 28px rgba(192,57,43,0.55)" }}
              whileTap={reduced ? {} : { scale: 0.97 }}
            >
              {t.hero.cta_projects}
            </motion.a>
            <div className="relative">
              {!reduced && <>
                <span className="absolute inset-0 rounded-full border border-white/30 animate-contact-ping" />
                <span className="absolute inset-0 rounded-full border border-white/15 animate-contact-ping" style={{ animationDelay: "0.8s" }} />
              </>}
              <a
                href="#contact"
                className="relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/30 hover:border-white/70 hover:bg-white/8 transition-all duration-300 group"
              >
                {t.hero.cta_contact}
                <svg
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.p
            className="text-[11px] text-white/35 tracking-wide flex items-center gap-1.5"
            {...fadeUp(0.4)}
          >
            <span aria-hidden style={{ display: "inline-block" }}>
              <GlobeSpinner size={25} />
            </span>
            {t.hero.availability}
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          className="flex items-center gap-5 text-[11px] text-white/30 tracking-wide"
          {...fadeUp(0.5)}
        >
          <span>
            <span className="tabular-nums">{reduced ? 5 : count5}</span>+ {t.hero.stat_projects}
          </span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>
            <span className="tabular-nums">{reduced ? 2 : count2}</span>+ {t.hero.stat_experience}
          </span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>{t.hero.stat_stack}</span>
        </motion.div>
      </div>

      {/* ── Desktop photo ── */}
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
          style={{ transform: "translateY(-20px)", boxShadow: "0 32px 64px rgba(0,0,0,0.55)" }}
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
    </section>
  );
}
