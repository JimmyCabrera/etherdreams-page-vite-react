import "./HeroBanner.css";
import HeroButton from "./HeroButton";
import { useLocation } from "react-router-dom";

const HeroBanner = () => {
  const location = useLocation();
  const isKirakiraPage = location.pathname === "/kirakira";
  const base = import.meta.env.BASE_URL;

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <img
        src="/hero-bg.webp"
        alt="KiraKira Slimes Background"
        className="absolute inset-0 h-full w-full object-cover hero-bg-focus"
        draggable={false}
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center pt-2 sm:pt-1">
        <img
          src="/kirakira-logo.webp"
          alt="KiraKira Slimes"
          className="hero-logo-float w-[75vw] max-w-[820px] sm:w-[65vw] md:w-[55vw]"
          draggable={false}
        />

        <div className="mt-10 flex w-full max-w-[560px] flex-col gap-4 sm:mt-12 sm:flex-row sm:justify-center sm:gap-6 pt-12">
          <HeroButton
            href="https://store.steampowered.com/app/2940660/Kirakira_Slimes/"
            variant="dark"
            iconSrc={`${base}steamIcon.svg`}
            iconAlt="Steam"
            target="_blank"
            rel="noopener noreferrer"
          >
            BUY NOW
          </HeroButton>

          {!isKirakiraPage && (
            <HeroButton
              href="/kirakira"
              variant="dark"
              iconSrc={`${base}ModeInfoIcon.svg`}
              iconAlt="Info"
            >
              MORE INFO
            </HeroButton>
          )}

          <HeroButton
            href="https://www.youtube.com/watch?v=zesqI5sJhKM"
            variant="dark"
            iconSrc={`${base}playIcon.svg`}
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
