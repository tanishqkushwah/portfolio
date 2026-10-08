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
  I’m a B.Tech student specializing in Artificial Intelligence &
  Data Science, with a strong interest in technology and problem
  solving. I enjoy exploring how intelligent systems work and
  turning ideas into practical solutions.
</p>

<p>
  Alongside AI & Data Science, I’m pursuing my interests in
  Cybersecurity, Linux, networking, and modern web development.
  I’m continuously learning, building projects, and developing
  the skills needed to create useful and reliable technology.
</p>

      </div>
    </section>
  );
}

export default About;