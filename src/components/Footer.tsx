import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const { pathname } = useLocation();
  const base = import.meta.env.BASE_URL;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className="edFooter" role="contentinfo">
      <div className="edFooter__inner">
        {/* Brand */}
        <div className="edFooter__brand">
          <img
            src={`${base}logoVectorED.webp`}
            alt="Ether Dreams"
            className="edFooter__logo"
            draggable={false}
          />
          <div className="edFooter__brandText">
            <p className="edFooter__brandName">Ether Dreams</p>
            <p className="edFooter__brandTag">
              Indie studio • Worlds & experiences
            </p>
          </div>
        </div>

        {/* Links */}
        <nav className="edFooter__links" aria-label="Footer links">
          <Link
            to="/privacy"
            className="edFooter__link"
            onClick={() => {
              if (pathname !== "/privacy") scrollToTop();
            }}
          >
            Privacy
          </Link>

          <Link
            to="/terms"
            className="edFooter__link"
            onClick={() => {
              if (pathname !== "/terms") scrollToTop();
            }}
          >
            Terms and Conditions
          </Link>
        </nav>

        {/* Copy */}
        <p className="edFooter__copy">
          © {new Date().getFullYear()} Ether Dreams. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
