import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const skillsRef = useRef(null);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "C++",
    "SQL",
    "Git & GitHub",
    "Machine Learning",
    "Data Science",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={skillsRef} id="skills" className="skills">
      <div className="skills-content">

        <p className="section-label">MY SKILLS</p>

        <h2>
          Technologies I
          <span> work with.</span>
        </h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;