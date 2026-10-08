import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Education() {
  const educationRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".education-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".education-card",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, educationRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={educationRef}
      id="education"
      className="education"
    >
      <div className="education-content">

        <p className="section-label">EDUCATION</p>

        <h2>
          My academic
          <span> journey.</span>
        </h2>

        <div className="education-card">
          <div className="education-line">
  <span></span>
</div>
          <span className="education-year">B.Tech</span>

          <h3>
            Artificial Intelligence & Data Science
          </h3>

          <p className="education-institute">
            Kurukshetra University
          </p>
       

         <p>
  Currently pursuing my B.Tech in Artificial Intelligence &
  Data Science, with a strong interest in programming,
  cybersecurity, Linux, networking, and modern software
  development.
</p>
        </div>

      </div>
    </section>
  );
}

export default Education;