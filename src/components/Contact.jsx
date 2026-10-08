import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-content", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".contact",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={contactRef}
      id="contact"
      className="contact"
    >
      <div className="contact-content">

        <p className="section-label">GET IN TOUCH</p>

        <h2>
  Let's build something
  <span> great.</span>
</h2>

        <p className="contact-description">
          Have a project idea, collaboration opportunity, or just want
          to say hello? Feel free to get in touch.
        </p>

        <div className="contact-links">
          <a href="mailto:your-email@gmail.com">
            Email Me
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;