import { ImageResponse } from "next/og";

export const alt = "CAPEX — The AI audit engine for Indian CA firms";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 80, background: "#222831", color: "#eeeeee", fontFamily: "sans-serif" }}>
        <div style={{ fontSize: 28, letterSpacing: 6, color: "#76abae" }}>PILOT PROGRAMME · NOVEMBER 2026</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 160, fontWeight: 700, letterSpacing: -4 }}>CAPEX</div>
          <div style={{ fontSize: 48, opacity: 0.85 }}>The AI audit engine for Indian CA firms.</div>
        </div>
        <div style={{ fontSize: 28, opacity: 0.6 }}>The tool flags. The CA decides. — capexai.in</div>
      </div>
    ),
    size,
  );
}
