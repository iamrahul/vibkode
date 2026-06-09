import type { Metadata } from "next";
import { Press_Start_2P, Silkscreen, VT323 } from "next/font/google";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

const silkscreen = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-label",
  display: "swap",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-term",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vibekode 2026 — Kerala's vibe coding contest",
  description:
    "A solo sprint to build the most interesting web app you can with AI, pointed at something real in Kerala's classrooms. ₹50,000 + a stage in Kozhikode.",
  openGraph: {
    title: "Vibekode 2026",
    description:
      "A solo sprint to build the most interesting web app you can with AI — pointed at something real in Kerala's classrooms. ₹50,000 + a stage in Kozhikode.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${pressStart2P.variable} ${silkscreen.variable} ${vt323.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
