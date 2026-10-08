import { useEffect, useRef } from "react";
import gsap from "gsap";

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const handleMouseOver = (e) => {
      const interactive = e.target.closest(
        "button, a, .project-card, .skill-card, .education-card, .experience-card"
      );

      if (interactive) {
        gsap.to(cursor, {
          scale: 2.5,
          backgroundColor: "transparent",
          border: "1px solid #7cff00",
          duration: 0.25,
          ease: "power2.out",
        });
      }
    };

    const handleMouseOut = (e) => {
      const interactive = e.target.closest(
        "button, a, .project-card, .skill-card, .education-card, .experience-card"
      );

      if (interactive && !interactive.contains(e.relatedTarget)) {
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: "#7cff00",
          border: "1px solid transparent",
          duration: 0.25,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
    />
  );
}

export default CustomCursor;