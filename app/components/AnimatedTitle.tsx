"use client";

import { useAnimate, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

const lines = [
  ["Je", "transforme"],
  ["vos", "idées", "en"],
  ["produits", "web"],
  ["qui", "convertissent."],
];

const allWords = lines.flat();

export default function AnimatedTitle({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  const [scope, animate] = useAnimate();
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const wordEls = allWords.map((_, i) =>
      (scope.current as HTMLElement | null)?.querySelector(`[data-idx="${i}"]`) as HTMLElement | null
    ).filter((el): el is HTMLElement => el !== null);

    if (wordEls.length === 0) return;

    /* Chaque mot part du bord supérieur du viewport (rect.top = distance depuis le haut)
       + 30px de marge hors écran pour que l'entrée soit nette */
    const rect = wordEls[0].getBoundingClientRect();
    const startY = -(rect.top + 30);

    /* 1. État initial — hors écran en haut, opacity 0 */
    wordEls.forEach((el) => {
      animate(el, { opacity: 0, y: startY, rotate: -10, scale: 1.15 }, { duration: 0 });
    });

    /* 2. Chute mot par mot : opacity instantanée + spring gravité rapide */
    wordEls.forEach((el, i) => {
      /* Le mot devient visible dès qu'il commence à tomber */
      animate(el, { opacity: 1 }, { duration: 0.05, delay: i * 0.12 });
      /* Chute avec spring simulant la gravité : rapide + rebond d'impact */
      animate(el, { y: 0, rotate: 0, scale: 1 }, {
        type: "spring",
        stiffness: 380,
        damping: 28,
        mass: 1.2,
        delay: i * 0.12,
      });

      /* 3. Impact : les mots suivants vibrent au moment de l'atterrissage */
      if (i < wordEls.length - 1) {
        setTimeout(() => {
          const upcoming = wordEls.slice(i + 1) as HTMLElement[];
          animate(upcoming, { skewX: 2 }, { duration: 0.05, ease: "easeOut" });
          setTimeout(() => {
            animate(upcoming, { skewX: 0 }, { duration: 0.12, ease: "easeOut" });
          }, 60);
        }, i * 120 + 220);
      }
    });

    /* 4. "web" — pulse scale une fois après atterrissage */
    const webIndex = allWords.indexOf("web");
    setTimeout(() => {
      const webEl = wordEls[webIndex];
      if (!webEl) return;
      animate(webEl, { scale: [1, 1.08, 1] }, { duration: 0.5, ease: "easeInOut" });
    }, webIndex * 120 + 700);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Fallback prefers-reduced-motion */
  if (reduced) {
    return (
      <span className={className} style={{ display: "block", ...style }}>
        {lines.map((line, li) => (
          <span key={li} style={{ display: "block" }}>
            {line.map((word, wi) => (
              <span
                key={wi}
                style={{
                  color: word === "web" ? "var(--accent)" : undefined,
                  marginRight: wi < line.length - 1 ? "0.25em" : undefined,
                }}
                className={word === "web" ? "text-glow" : undefined}
              >
                {word}
              </span>
            ))}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span ref={scope} className={className} style={{ display: "block", ...style }}>
      {lines.map((line, li) => (
        <span key={li} style={{ display: "block" }}>
          {line.map((word, wi) => {
            const idx = lines.slice(0, li).flat().length + wi;
            return (
              <span
                key={wi}
                data-idx={idx}
                style={{
                  display: "inline-block",
                  opacity: 0,
                  marginRight: wi < line.length - 1 ? "0.25em" : undefined,
                  color: word === "web" ? "var(--accent)" : undefined,
                }}
                className={word === "web" ? "text-glow" : undefined}
              >
                {word}
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}
