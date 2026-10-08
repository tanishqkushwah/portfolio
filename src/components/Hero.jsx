import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroScene from "../three/HeroScene";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Hero text entrance
      gsap.from(".hero-content > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      // 3D scene entrance
      gsap.from(".hero-visual", {
        scale: 0.8,
        opacity: 0,
        duration: 1.4,
        delay: 0.3,
        ease: "power3.out",
      });

      // Hero scroll movement
      gsap.to(".hero-visual", {
        y: 120,
        ease: "none",

        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero"
    >

      {/* LEFT SIDE — HERO CONTENT */}
      <div className="hero-content">

        <p className="hero-small">
          HELLO, I'M
        </p>

        <h1>
          Tanishq
        </h1>

        <h2>
          AI & Data Science Engineer
        </h2>

        <p className="hero-description">
          I build modern digital experiences with technology,
          creativity and clean design.
        </p>

        <button
          onClick={() => {
            document
              .getElementById("projects")
              ?.scrollIntoView({
                behavior: "smooth",
              });
          }}
        >
          View My Work
        </button>

      </div>

      {/* RIGHT SIDE — REAL 3D SCENE */}
      <div className="hero-visual">
        <HeroScene />
      </div>
      <div className="scroll-indicator">
  <span>SCROLL</span>
  <div className="scroll-line"></div>
</div>

    </section>
  );
}

export default Hero;