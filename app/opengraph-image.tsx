import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "DevFest Port Harcourt 2026 - The Biggest Tech Festival In The South";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  // Load public/gdg-logo.png as Base64 Data URL
  const logoBuffer = await readFile(join(process.cwd(), "public", "gdg-logo.png"));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#18181B",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle background glowing orbs */}
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(66,133,244,0.2) 0%, rgba(24,24,27,0) 70%)",
            top: "-100px",
            left: "-100px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,184,42,0.18) 0%, rgba(24,24,27,0) 70%)",
            bottom: "-100px",
            right: "-100px",
          }}
        />

        {/* Center Preview Card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            background: "rgba(255, 255, 255, 0.04)",
            border: "2px solid rgba(255, 255, 255, 0.12)",
            borderRadius: "32px",
            padding: "44px 56px",
            width: "100%",
            maxWidth: "1080px",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
          }}
        >
          {/* Favicon / GDG Logo Container */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "110px",
              height: "110px",
              background: "#FFFFFF",
              borderRadius: "26px",
              boxShadow: "0 12px 30px rgba(0, 0, 0, 0.4)",
              marginBottom: "24px",
              border: "3px solid #F5B82A",
              overflow: "hidden",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoSrc}
              alt="GDG Logo"
              width="80"
              height="80"
              style={{
                objectFit: "contain",
              }}
            />
          </div>

          {/* Badge Pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "#F5B82A",
              color: "#000000",
              padding: "6px 22px",
              borderRadius: "9999px",
              fontSize: "16px",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "18px",
            }}
          >
            DEVFEST PORT HARCOURT 2026
          </div>

          {/* Heading */}
          <h1
            style={{
              fontSize: "48px",
              fontWeight: 900,
              color: "#FFFFFF",
              textTransform: "uppercase",
              letterSpacing: "-0.5px",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            THE BIGGEST TECH FESTIVAL IN THE SOUTH
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: "20px",
              color: "#D4D4D8",
              margin: "16px 0 0 0",
              fontWeight: 500,
              maxWidth: "800px",
            }}
          >
            AI · Cloud · DevOps · Mobile · Web · Product Design · Data Analytics
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
