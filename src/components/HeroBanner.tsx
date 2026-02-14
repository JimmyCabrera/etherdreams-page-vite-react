import "./HeroBanner.css";
import HeroButton from "./HeroButton";
import { useLocation } from "react-router-dom";

const HeroBanner = () => {
  const location = useLocation();

  // Detectamos si estamos en la página de Kirakira
  const isKirakiraPage = location.pathname === "/kirakira";

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background */}
      <img
        src="/hero-bg.webp"
        alt="KiraKira Slimes Background"
        className="absolute inset-0 h-full w-full object-cover hero-bg-focus"
        draggable={false}
      />

      {/* Contenido */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center pt-2 sm:pt-1">
        {/* Logo */}
        <img
          src="/kirakira-logo.webp"
          alt="KiraKira Slimes"
          className="
            hero-logo-float
            w-[75vw] 
            max-w-[820px] 
            sm:w-[65vw] 
            md:w-[55vw]
          "
          draggable={false}
        />

        {/* Botones */}
        <div className="mt-10 flex w-full max-w-[560px] flex-col gap-4 sm:mt-12 sm:flex-row sm:justify-center sm:gap-6 pt-12">
          
          {/* BUY NOW */}
          <HeroButton
            href="https://store.steampowered.com/app/2940660/Kirakira_Slimes/"
            variant="dark"
            iconSrc="/steamIcon.svg"
            iconAlt="Steam"
            target="_blank"
            rel="noopener noreferrer"
          >
            BUY NOW
          </HeroButton>

          {/* 👇 SOLO si NO estamos en /kirakira */}
          {!isKirakiraPage && (
            <HeroButton
              href="/kirakira"
              variant="dark"
              iconSrc="/ModeInfoIcon.svg"
              iconAlt="Info"
            >
              MORE INFO
            </HeroButton>
          )}

          {/* TRAILER */}
          <HeroButton
            href="https://www.youtube.com/watch?v=zesqI5sJhKM"
            variant="dark"
            iconSrc="/playIcon.svg"
            iconAlt="Trailer"
            target="_blank"
            rel="noopener noreferrer"
          >
            TRAILER
          </HeroButton>

        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
