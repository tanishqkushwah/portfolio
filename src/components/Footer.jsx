function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-logo">
          T.
        </div>

        <p>
  AI & Data Science student exploring technology,
  cybersecurity, Linux, and modern web development.
</p>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="footer-copy">
          © {year} Tanishq. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;