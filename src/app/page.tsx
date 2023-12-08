"use client";
import { createContext, useEffect, useState } from "react";

import Navbar from "./components/navigation/navbar";
import About from "./components/sections/about";
import Experience from "./components/sections/experience";
import Footer from "./components/sections/footer";
import HeroSection from "./components/sections/hero";
import Projects from "./components/sections/projects";

export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setDarkMode(theme === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <Navbar />
        <HeroSection />
        <About />
        <Experience />
        <Projects />
      </ThemeContext.Provider>
    </>
  );
}
