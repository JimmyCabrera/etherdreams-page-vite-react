import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Subir al inicio (con scroll suave)
  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Para usarlo en cada click: cierra menú + sube arriba
  const handleNavClick = () => {
    setIsOpen(false);
    goTop();
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Si agrandan la ventana a desktop, cerramos el menú móvil
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    [
      "text-lg font-bold tracking-wide",
      "drop-shadow-[0_2px_4px_rgba(0,0,0,0.65)]",
      "transition-all duration-200",
      isActive ? "text-white" : "text-white/90 hover:text-white",
    ].join(" ");

  const mobileLink =
    "px-5 py-4 text-lg font-bold text-white/90 hover:bg-white/5 hover:text-white transition";

  return (
    <header
      className={[
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "bg-black/60 md:bg-black/50 backdrop-blur-lg",
      ].join(" ")}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4 overflow-x-hidden">
        {/* LOGO (click -> inicio + scroll top) */}
        <NavLink
          to="/"
          onClick={handleNavClick}
          aria-label="Ir al inicio"
          className="flex items-center gap-3 min-w-0 cursor-pointer select-none transition-opacity hover:opacity-90"
        >
          <img
            src="/logo.webp"
            alt="EtherDreams"
            className="h-7 sm:h-8 w-auto max-w-[180px] sm:max-w-none"
          />
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          <NavLink to="/" className={linkClasses} onClick={handleNavClick}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClasses} onClick={handleNavClick}>
            About
          </NavLink>
          <NavLink to="/kirakira" className={linkClasses} onClick={handleNavClick}>
            Kirakira
          </NavLink>
          <NavLink to="/contact" className={linkClasses} onClick={handleNavClick}>
            Contact
          </NavLink>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={[
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
          isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="mx-auto max-w-6xl px-4 pb-4">
          <div className="mt-2 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl shadow-2xl">
            <nav className="flex flex-col py-2">
              <NavLink to="/" onClick={handleNavClick} className={mobileLink}>
                Home
              </NavLink>
              <NavLink to="/about" onClick={handleNavClick} className={mobileLink}>
                About
              </NavLink>
              <NavLink
                to="/kirakira"
                onClick={handleNavClick}
                className={mobileLink}
              >
                Kirakira
              </NavLink>
              <NavLink
                to="/contact"
                onClick={handleNavClick}
                className={mobileLink}
              >
                Contact
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
