import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";

import "./globals.css";

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
      <body className={inconsolata.className}>{children}</body>
    </html>
  );
}
