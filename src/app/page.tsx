import About from "./components/about";
import Experience from "./components/experience";
import Footer from "./components/footer";
import HeroSection from "./components/hero";
import Navbar from "./components/navigation/navbar";
import Projects from "./components/projects";

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
