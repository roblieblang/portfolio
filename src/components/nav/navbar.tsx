"use client";
import { ThemeContext } from "@/providers/themeProvider";
import Link from "next/link";
import { useContext } from "react";
import {
  PiBriefcaseBold,
  PiCodeBold,
  PiEnvelopeBold,
  PiGithubLogoBold,
  PiHouseBold,
  PiIdentificationBadgeBold,
  PiLinkedinLogoBold,
  PiMoonBold,
  PiSunBold,
} from "react-icons/pi";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <header className="relative py-2 shadow-md dark:shadow-gray-900 md:py-4">
      <nav className="container mx-auto flex justify-center text-sm lg:text-xl md:space-x-10 space-x-4 lg:px-2">
        <Link
          href="/"
          className="py-1 rounded-md font-medium hover:text-white hover:bg-gray-700 transition duration-300 flex items-center justify-center md:px-3 md:py-2"
        >
          <PiHouseBold title="Home" size={35} />
        </Link>
        <Link
          href="/about"
          className="py-1 rounded-md font-medium hover:text-white hover:bg-gray-700 transition duration-300 flex items-center justify-center md:px-3 md:py-2"
        >
          <PiIdentificationBadgeBold
            className="md:hidden "
            title="About"
            size={30}
          />
          <div className="hidden md:inline">[0] About</div>
        </Link>
        <Link
          href="/experience"
          className="py-1 rounded-md font-medium hover:text-white hover:bg-gray-700 transition duration-300 flex items-center justify-center md:px-3 md:py-2"
        >
          <PiBriefcaseBold className="md:hidden" title="Experience" size={30} />
          <div className="hidden md:inline">[1] Experience</div>
        </Link>
        <Link
          href="/projects"
          className="py-1 rounded-md font-medium hover:text-white hover:bg-gray-700 transition duration-300 flex items-center justify-center md:px-3 md:py-2"
        >
          <PiCodeBold className=" md:hidden" title="Projects" size={30} />
          <div className="hidden md:inline">[2] Projects</div>
        </Link>
        <Link
          href="/contact"
          className="py-1 rounded-md font-medium hover:text-white hover:bg-gray-700 transition duration-300 flex items-center justify-center md:px-3 md:py-2"
        >
          <PiEnvelopeBold className=" md:hidden" title="Contact" size={30} />
          <div className="hidden md:inline">[3] Contact</div>
        </Link>
        <Link
          href="https://github.com/roblieblang"
          target="_blank"
          className="py-1 rounded-md font-medium hover:text-white hover:bg-gray-700 transition duration-300 flex items-center justify-center md:px-3 md:py-2"
        >
          <PiGithubLogoBold title="GitHub" size={30} />
        </Link>

        <Link
          href="https://linkedin.com/in/roblieblang"
          target="_blank"
          className="py-1 rounded-md font-medium hover:text-white hover:bg-gray-700 transition duration-300 flex items-center justify-center md:px-3 md:py-2"
        >
          <PiLinkedinLogoBold title="LinkedIn" size={30} />
        </Link>
        <button
          onClick={toggleDarkMode}
          className="py-1 rounded-md font-medium hover:text-white hover:bg-gray-700 transition duration-300 flex items-center justify-center md:px-3 md:py-2"
        >
          {darkMode ? (
            <PiSunBold title="Toggle Light Mode" size={30} />
          ) : (
            <PiMoonBold title="Toggle Dark Mode" size={30} />
          )}
        </button>
      </nav>
    </header>
  );
}