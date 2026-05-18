import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mantis AI — Edge-Compute Swarm Intelligence for SME Supply Chains",
  description:
    "Mantis AI eradicates inventory inefficiency, spoilage, and operational waste across retail, e-commerce, and hospitality using edge-compute swarm simulation, local differential privacy, and human-in-the-loop governance. Deployed on Apple Mac Mini Hardware-as-a-Service.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
