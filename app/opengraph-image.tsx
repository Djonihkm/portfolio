import { ImageResponse } from "next/og";

export const alt = "Djoni OUEDANOU — Développeur Web Full Stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0f0f0f",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 40,
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#C0392B", display: "flex" }} />
          <span style={{ fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
            Disponible pour freelance
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 700, color: "#ffffff", lineHeight: 1.05 }}>
          Djoni OUEDANOU
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "#C0392B", fontWeight: 600, marginTop: 20 }}>
          Développeur Web Full Stack
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "rgba(255,255,255,0.45)", marginTop: 24 }}>
          Next.js · React · Node.js · TypeScript
        </div>
      </div>
    ),
    { ...size }
  );
}
