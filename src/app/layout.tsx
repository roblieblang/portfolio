import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";

import Navbar from "@/components/nav/navbar";
import "./globals.css";
import Providers from "@/providers/providers";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robert Lieblang",
  description: "Robert Lieblang, Software Engineer. Looking for work!",
  keywords: [
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
