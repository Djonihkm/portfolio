"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const contacts = [
  {
    label: "Email",
    value: "ouedanoudjoniadoule@gmail.com",
    href: "mailto:ouedanoudjoniadoule@gmail.com",
    color: "#EA4335",
    bg: "rgba(234,67,53,0.08)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.487L12 10.548l9.877-6.727h.487C23.268 3.821 24 4.553 24 5.457z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "+229 55 95 25 89",
    href: "https://wa.me/22955952589",
    color: "#25D366",
    bg: "rgba(37,211,102,0.08)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    value: "@djonny_hkm",
    href: "https://t.me/djonny_hkm",
    color: "#2AABEE",
    bg: "rgba(42,171,238,0.08)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    value: "@djonny_hkm1",
    href: "https://twitter.com/djonny_hkm1",
    color: "#000000",
    bg: "rgba(0,0,0,0.06)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Téléphone",
    value: "+229 01 55 95 25 89",
    href: "tel:+22955952589",
    color: "#6366f1",
    bg: "rgba(99,102,241,0.08)",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.87 2 2 0 0 1 3.58 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.24a16 16 0 0 0 5.85 5.85l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [preference, setPreference] = useState<"email" | "phone">("email");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, preference }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
      setPreference("email");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="flex flex-col items-center px-6 md:px-10"
    >
      <div className="w-full max-w-5xl border border-zinc-100 rounded-2xl p-8 md:p-12">
        {/* Titre — entre de gauche, s'arrête au centre avec vibration de parking */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="overflow-hidden -mx-8 md:-mx-12 mb-10 border-b border-zinc-100 pb-8 flex justify-center"
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 whitespace-nowrap px-8 md:px-12"
            initial={{ x: "calc(-100vw - 100%)" }}
            animate={
              inView
                ? {
                    x: [
                      "calc(-100vw - 100%)" /* départ hors écran gauche */,
                      "6%" /* léger dépassement */,
                      "-4%" /* recul */,
                      "2.5%" /* avant */,
                      "-1.5%" /* arrière */,
                      "0.8%" /* avant */,
                      "-0.4%" /* arrière */,
                      "0%" /* arrêt centré */,
                      "0%" /* pause au centre */,
                      "calc(100vw + 100%)" /* sortie droite */,
                    ],
                    transition: {
                      duration: 11,
                      times: [
                        0, 0.38, 0.44, 0.49, 0.53, 0.57, 0.6, 0.63, 0.82, 0.97,
                      ],
                      ease: "linear",
                      repeat: Infinity,
                    },
                  }
                : {}
            }
          >
            {t.contact.marquee}
          </motion.h2>
        </motion.div>

        {/* Grille 2 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* ── Colonne gauche — coordonnées ── */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              className="text-[11px] tracking-[0.25em] uppercase text-zinc-600 mb-8"
            >
              {t.contact.left_label}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.2 }}
              className="text-sm text-zinc-900 leading-relaxed mb-10 max-w-xs"
              style={{ fontWeight: 300 }}
            >
              {t.contact.description}
            </motion.p>

            <div className="flex flex-col gap-4">
              {contacts.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    c.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, x: -24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, ease, delay: 0.2 + i * 0.08 }}
                  className="contact-item group flex items-center gap-4 p-3.5 rounded-2xl transition-all duration-300"
                  style={{ "--item-color": c.color } as React.CSSProperties}
                >
                  {/* Icône */}
                  <span
                    className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: c.bg, color: c.color }}
                  >
                    {c.icon}
                  </span>

                  {/* Texte */}
                  <div className="min-w-0">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 mb-0.5">
                      {c.label}
                    </p>
                    <p className="text-sm font-medium text-zinc-800 truncate group-hover:text-zinc-900 transition-colors">
                      {c.value}
                    </p>
                  </div>

                  {/* Flèche */}
                  <svg
                    className="shrink-0 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: c.color }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* ── Colonne droite — formulaire ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              className="text-[11px] tracking-[0.25em] uppercase text-zinc-600 mb-8"
            >
              {t.contact.right_label}
            </motion.p>
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16 gap-5"
              >
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-zinc-900">
                  {t.contact.success_title}
                </h3>
                <p
                  className="text-sm text-zinc-500 max-w-xs"
                  style={{ fontWeight: 300 }}
                >
                  {t.contact.success_desc}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="cursor-pointer text-[11px] tracking-widest uppercase text-zinc-400 hover:text-zinc-900 transition-colors mt-2"
                >
                  {t.contact.send_another}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Préférence de contact */}
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-zinc-700 font-semibold mb-2">
                    {t.contact.preference_label}
                  </label>
                  <div className="flex gap-2">
                    {(["email", "phone"] as const).map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setPreference(p)}
                        className="flex-1 py-2.5 rounded-xl text-[11px] font-semibold tracking-widest uppercase transition-all duration-200 cursor-pointer"
                        style={
                          preference === p
                            ? {
                                background: "var(--accent)",
                                color: "#fff",
                                boxShadow: "0 2px 10px rgba(192,57,43,0.3)",
                              }
                            : {
                                background: "#f4f4f5",
                                color: "#52525b",
                              }
                        }
                      >
                        {p === "email" ? t.contact.btn_email : t.contact.btn_phone}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Nom — toujours requis */}
                <div className="form-field">
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-zinc-700 font-semibold mb-2">
                    {t.contact.name_label} <span className="text-[var(--accent)]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.contact.name_placeholder}
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="contact-input w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-300 outline-none bg-zinc-50 focus:bg-white transition-all duration-200"
                  />
                </div>

                {/* Email — visible uniquement si préférence email */}
                <motion.div
                  initial={false}
                  animate={{
                    height: preference === "email" ? "auto" : 0,
                    opacity: preference === "email" ? 1 : 0,
                  }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="form-field pt-0.5">
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-zinc-700 font-semibold mb-2">
                      {t.contact.email_label} <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      type="email"
                      required={preference === "email"}
                      placeholder={t.contact.email_placeholder}
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      className="contact-input w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-300 outline-none bg-zinc-50 focus:bg-white transition-all duration-200"
                    />
                  </div>
                </motion.div>

                {/* Téléphone — visible uniquement si préférence téléphone */}
                <motion.div
                  initial={false}
                  animate={{
                    height: preference === "phone" ? "auto" : 0,
                    opacity: preference === "phone" ? 1 : 0,
                  }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="form-field pt-0.5">
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-zinc-700 font-semibold mb-2">
                      {t.contact.phone_label} <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      type="tel"
                      required={preference === "phone"}
                      placeholder={t.contact.phone_placeholder}
                      value={form.phone}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, phone: e.target.value }))
                      }
                      className="contact-input w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-300 outline-none bg-zinc-50 focus:bg-white transition-all duration-200"
                    />
                  </div>
                </motion.div>

                {/* Message — toujours requis */}
                <div className="form-field">
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-zinc-700 font-semibold mb-2">
                    {t.contact.message_label} <span className="text-[var(--accent)]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Décrivez votre projet..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="contact-input w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-300 outline-none bg-zinc-50 focus:bg-white transition-all duration-200 resize-none"
                  />
                </div>

                {/* Légende champs obligatoires */}
                <p className="text-[10px] text-zinc-400 -mt-1">
                  <span className="text-[var(--accent)]">*</span> Champs
                  obligatoires
                </p>

                {status === "error" && (
                  <p className="text-xs text-red-500">
                    Une erreur est survenue. Réessayez ou contactez-moi
                    directement.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="cursor-pointer send-btn relative overflow-hidden w-full py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 disabled:opacity-60"
                  style={{ background: "var(--accent)" }}
                >
                  {status === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Envoi en cours…
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Envoyer le message
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </span>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
