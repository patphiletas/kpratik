import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kpratik",
  description:
    "Intelligence commerciale B2B : une URL, et en moins de 5 secondes la stack technique, les signaux commerciaux et un score /100 explicable.",
  openGraph: {
    title: "Kpratik — intelligence commerciale B2B",
    description:
      "Une URL, et en moins de 5 secondes : stack technique, signaux commerciaux et score /100 explicable.",
    url: "https://kpratik.vercel.app/",
    siteName: "Kpratik",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
