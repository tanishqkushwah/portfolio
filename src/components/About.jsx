import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-content", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".about",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={aboutRef} id="about" className="about">
      <div className="about-content">

        <p className="section-label">ABOUT ME</p>

        <h2>
          Building technology with
          <span> creativity.</span>
        </h2>

        <p>
          I'm an Artificial Intelligence and Data Science engineering
          student who enjoys building modern digital experiences,
          learning new technologies, and turning ideas into practical
          projects.
        </p>

        <p>
          I’m currently developing my skills in frontend development,
          programming, data science, and artificial intelligence.
          I enjoy combining technology with clean and meaningful design.
        </p>

      </div>
    </section>
  );
}

export default About;