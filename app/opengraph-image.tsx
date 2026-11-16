import { ImageResponse } from "next/og";

// Image de partage (LinkedIn, messageries…) : reprend le bandeau bleu de l'accueil
// et le bloc « Site à analyser ». Sans elle, LinkedIn affichait une vignette vide.
export const alt = "Kpratik — intelligence commerciale B2B";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BLEU = "#2b7fff";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: BLEU,
          padding: "0 80px",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 560 }}>
          <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", opacity: 0.85 }}>
            Intelligence commerciale B2B
          </div>
          <div style={{ fontSize: 110, fontWeight: 700, lineHeight: 1 }}>Kpratik</div>
          <div style={{ fontSize: 34, lineHeight: 1.3 }}>
            Une URL, et en moins de 5 secondes : stack technique, signaux commerciaux et score /100 explicable.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            width: 420,
            padding: 32,
            background: "#fafafa",
            borderRadius: 14,
            color: "#18181b",
          }}
        >
          <div style={{ fontSize: 24 }}>Site à analyser</div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#71717a",
              padding: "16px 20px",
              background: "#ffffff",
              border: "1px solid #d4d4d8",
              borderRadius: 8,
            }}
          >
            stripe.com
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: 26,
              color: "#ffffff",
              padding: "16px 20px",
              background: "#0a0a0a",
              borderRadius: 8,
            }}
          >
            Analyser
          </div>
        </div>
      </div>
    ),
    size,
  );
}
