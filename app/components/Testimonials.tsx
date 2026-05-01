"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useLanguage();

  const colors = ["#3b82f6", "#10b981", "#C0392B"];
  const initials = ["KB", "FK", "RD"];
  const testimonials = t.testimonials.items.map((item, i) => ({
    ...item,
    color: colors[i],
    initials: initials[i],
  }));

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
              {t.testimonials.label}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.07 }}
              className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900"
            >
              {t.testimonials.title}
            </motion.h2>
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs text-zinc-300 hidden md:block"
          >
            {String(testimonials.length).padStart(2, "0")} {t.testimonials.count}
          </motion.span>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease, delay: 0.1 + i * 0.1 }}
              className="flex flex-col gap-6 p-7 border border-zinc-100 rounded-2xl bg-white hover:border-zinc-200 hover:shadow-sm transition-all duration-300"
            >
              {/* Guillemet */}
              <span
                className="font-serif text-5xl leading-none select-none"
                style={{ color: item.color, opacity: 0.25 }}
                aria-hidden
              >
                &ldquo;
              </span>

              {/* Texte */}
              <p
                className="text-sm text-zinc-700 leading-relaxed flex-1"
                style={{ fontWeight: 300 }}
              >
                {item.quote}
              </p>

              {/* Auteur */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                <span
                  className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-white"
                  style={{ background: item.color }}
                >
                  {item.initials}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-zinc-900 truncate">
                    {item.name}
                  </p>
                  <p className="text-[11px] text-zinc-400 truncate">
                    {item.role} &middot; {item.company}
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
