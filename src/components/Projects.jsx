import { useRef } from "react";
import gsap from "gsap";

function Projects() {
  const projects = [
  {
    title: "WatchDog Security",
    description:
      "A modern security and surveillance frontend interface with login, OTP verification and admin-focused UI.",
    tech: "HTML • CSS • JavaScript • React",
    visual: "watchdog",
  },
  {
    title: "AI & Data Science Project",
    description:
      "A data-driven project focused on applying machine learning and artificial intelligence concepts.",
    tech: "Python • Machine Learning • Data Science",
    visual: "ai",
  },
  {
    title: "Developer Portfolio",
    description:
      "A responsive personal portfolio built to showcase my skills, projects, education and technical journey.",
    tech: "React • JavaScript • CSS",
    visual: "portfolio",
  },
];

  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -8;
    const rotateY = ((x / rect.width) - 0.5) * 8;

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
      transformPerspective: 800,
    });
  };

  const handleMouseLeave = (card) => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-content">

        <p className="section-label">MY WORK</p>

        <h2>
          Selected
          <span> projects.</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className="project-card"
              key={project.title}
              onMouseMove={(e) =>
              handleMouseMove(e, e.currentTarget)
   }
             onMouseLeave={(e) =>
              handleMouseLeave(e.currentTarget)
  }
>
  <div className={`project-visual ${project.visual}`}>
    <span>PROJECT 0{index + 1}</span>
  </div>

  <span className="project-number">
    0{index + 1}
  </span>

  <h3>{project.title}</h3>

  <p>{project.description}</p>

  <small>{project.tech}</small>
</div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;