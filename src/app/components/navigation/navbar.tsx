import { ThemeContext } from "@/app/page";

import Link from "next/link";
import { useContext } from "react";
import {
  PiGithubLogoBold,
  PiLinkedinLogoBold,
  PiMoonBold,
  PiSunBold,
} from "react-icons/pi";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <header className="relative py-2 shadow-md dark:shadow-gray-900 md:py-4">
      <nav className="container mx-auto flex justify-center space-x-2 text-sm md:space-x-4 md:text-xl">
        <Link
          href="/#about"
          className="px-2 py-1 rounded-md font-medium hover:text-white hover:bg-gray-700 transition duration-300 md:px-3 md:py-2"
        >
          [0] About
        </Link>
        <Link
          href="/#experience"
          className="px-2 py-1 rounded-md font-medium hover:text-white hover:bg-gray-700  transition duration-300 md:px-3 md:py-2"
        >
          [1] Experience
        </Link>
        <Link
          href="/#projects"
          className="px-2 py-1 rounded-md font-medium hover:text-white hover:bg-gray-700  transition duration-300 md:px-3 md:py-2"
        >
          [2] Projects
        </Link>
        <Link
          href="mailto:robertlieblang@gmail.com"
          className="px-2 py-1 rounded-md font-medium hover:text-white hover:bg-gray-700  transition duration-300 md:px-3 md:py-2"
        >
          [3] Contact
        </Link>
        <Link
          href="https://github.com/roblieblang"
          target="_blank"
          className="px-2 py-1 rounded-md font-medium hover:text-white hover:bg-gray-700  transition duration-300 flex items-center justify-center md:px-3 md:py-2"
        >
          <PiGithubLogoBold size={30} />
        </Link>

        <Link
          href="https://linkedin.com/in/roblieblang"
          target="_blank"
          className="px-2 py-1 rounded-md font-medium hover:text-white hover:bg-gray-700  transition duration-300 flex items-center justify-center md:px-3 md:py-2"
        >
          <PiLinkedinLogoBold size={30} />
        </Link>
        <button
          onClick={toggleDarkMode}
          className="px-2 py-1 rounded-md font-medium hover:text-white hover:bg-gray-700  transition duration-300 flex items-center justify-center md:px-3 md:py-2"
        >
          {darkMode ? <PiSunBold size={30} /> : <PiMoonBold size={30} />}
        </button>
      </nav>
    </header>
  );
}
