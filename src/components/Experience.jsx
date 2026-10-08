import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const experienceRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".experience-card",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, experienceRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={experienceRef}
      id="experience"
      className="experience"
    >
      <div className="experience-content">
        <div className="experience-line">
  <span></span>
</div>

        <p className="section-label">EXPERIENCE</p>

        <h2>
          My professional
          <span> journey.</span>
        </h2>

        <div className="experience-card">

          <div className="experience-top">
            <span className="experience-type">
              INTERNSHIP
            </span>

            <span className="experience-date">
              2026
            </span>
          </div>

          <h3>Frontend & Networking Intern</h3>

          <h4>WatchDog</h4>

          <p>
  Worked on frontend development and networking operations,
  contributing to responsive web interfaces while gaining
  practical experience with network devices, connectivity,
  troubleshooting, and basic network infrastructure.
</p>

          <div className="experience-tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Networking</span>
            <span>IP Addressing</span>
            <span>Switches</span>
            <span>Network Troubleshooting</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;