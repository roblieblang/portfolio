import About from "./components/sections/about";
import Experience from "./components/sections/experience";
import Footer from "./components/sections/footer";
import HeroSection from "./components/sections/hero";
import Navbar from "./components/navigation/navbar";
import Projects from "./components/sections/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Experience />
      <Projects />
    </>
  );
}
