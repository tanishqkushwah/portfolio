function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-logo">
          T.
        </div>

        <p>
          Building digital experiences with code and creativity.
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