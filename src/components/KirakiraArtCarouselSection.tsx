import { useEffect, useMemo, useState } from "react";
import "./KirakiraArtCarouselSection.css";

type Slide = {
  src: string;
  alt: string;
};

const KirakiraArtCarouselSection = () => {
  const slides: Slide[] = useMemo(
    () => [
      { src: "/fondo1.webp", alt: "Arte Kirakira Slimes 1" },
      { src: "/fondo2.webp", alt: "Arte Kirakira Slimes 2" },
      { src: "/fondo3.webp", alt: "Arte Kirakira Slimes 3" },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  const goTo = (i: number) => {
    const next = (i + slides.length) % slides.length;
    setIndex(next);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // autoplay
  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((v) => (v + 1) % slides.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, [slides.length]);

  // teclado (izq/der)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index]);

  return (
    <section className="kkCarousel" aria-label="Arte de Kirakira Slimes">
      <div className="kkCarousel__container">
        <p className="kkCarousel__kicker">ARTE DE</p>
        <h2 className="kkCarousel__title">KIRAKIRA SLIMES</h2>

        <div className="kkCarousel__stage">
          <button
            type="button"
            className="kkCarousel__nav kkCarousel__nav--left"
            onClick={prev}
            aria-label="Anterior"
          >
            ‹
          </button>

          <div className="kkCarousel__viewport">
            {slides.map((s, i) => {
              const offset = i - index; // 0 = centro
              return (
                <div
                  key={s.src}
                  className="kkCarousel__slide"
                  style={{
                    transform: `translateX(${offset * 64}%) scale(${i === index ? 1 : 0.82})`,
                    opacity: i === index ? 1 : 0.35,
                    zIndex: i === index ? 3 : 1,
                  }}
                  aria-hidden={i !== index}
                >
                  <img
                    className="kkCarousel__img"
                    src={s.src}
                    alt={s.alt}
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>

          <button
            type="button"
            className="kkCarousel__nav kkCarousel__nav--right"
            onClick={next}
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>

        <div className="kkCarousel__dots" role="tablist" aria-label="Diapositivas">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`kkCarousel__dot ${i === index ? "is-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Ir a diapositiva ${i + 1}`}
              aria-pressed={i === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KirakiraArtCarouselSection;
