import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";

import Navbar from "@/components/nav/navbar";
import Footer from "@/components/sections/footer";
import Providers from "@/providers/providers";
import "./globals.css";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robert Lieblang",
  description: "Robert Lieblang, Software Engineer. Looking for work!",
  keywords: [
    "Robert Lieblang",
    "Software Engineer",
    "New Grad",
    "React",
    "TypeScript",
    "JavaScript",
    "Go",
    "Python",
  ],
  creator: "Robert Lieblang",
  icons: {
    icon: "./favicon.ico",
    apple: "./apple-touch-icon",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inconsolata.className}`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
