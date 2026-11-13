import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Luma: build skills that actually move you forward";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Local assets don't depend on the request, so they are read once at module scope.
const [heading, photo] = await Promise.all([
  readFile(join(process.cwd(), "node_modules/@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-800-normal.woff")),
  readFile(join(process.cwd(), "src/assets/images/hero-learner.jpg"), "base64"),
]);

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          backgroundColor: "#f9f8f3",
          fontFamily: "Plus Jakarta Sans",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 72,
            right: 48,
            width: 84,
            height: 486,
            borderRadius: 16,
            backgroundColor: "#ffcb9f",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 430,
            left: 640,
            width: 120,
            height: 120,
            borderRadius: 9999,
            backgroundColor: "#e2e8ff",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element -- rendered by next/og, not the browser */}
        <img
          src={`data:image/jpeg;base64,${photo}`}
          alt=""
          width={440}
          height={520}
          style={{ position: "absolute", top: 55, right: 90, borderRadius: 24, objectFit: "cover" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 0 72px 80px",
            width: 640,
          }}
        >
          <div style={{ fontSize: 40, color: "#171b2c", letterSpacing: -1 }}>luma.</div>
          <div
            style={{
              fontSize: 68,
              lineHeight: 1.08,
              letterSpacing: -1.7,
              color: "#171b2c",
            }}
          >
            Build skills that actually move you forward.
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#3157f6", letterSpacing: -0.3 }}>
            120+ expert-led courses · 4.9 avg rating
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Plus Jakarta Sans", data: heading, weight: 800, style: "normal" }],
    },
  );
}
