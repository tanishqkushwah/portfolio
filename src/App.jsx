import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
function App() {
  const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
  const [scrollProgress, setScrollProgress] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;

    const documentHeight =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const progress =
      documentHeight > 0
        ? (scrollTop / documentHeight) * 100
        : 0;

    setScrollProgress(progress);
    const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
    <>
      
      <div
  className="scroll-progress"
  style={{
    width: `${scrollProgress}%`,
  }}
  
/>
      <CustomCursor/>
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Projects/>
      <Contact/>
      <Education/>
      <Experience/>
      <button
  className="back-to-top"
  onClick={scrollToTop}
  aria-label="Back to top"
>
  ↑
</button>
      <Footer/>
    
    </>
  );
}

export default App;