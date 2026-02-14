import "./AboutHero.css";

const AboutHero = () => {
  return (
    <section className="aboutHero">
      {/* Fondo */}
      <img
        src={`${import.meta.env.BASE_URL}FondoNosotros.webp`}
        alt="About background"
        className="aboutHero__bg"
        draggable={false}
      />

      {/* Capa oscura suave */}
      <div className="aboutHero__overlay" />

      {/* Contenido */}
      <div className="aboutHero__content">
        {/* Logo watermark detrás del texto */}
        <img
          src={`${import.meta.env.BASE_URL}logoVectorED.webp`}
          alt=""
          className="aboutHero__watermark"
          draggable={false}
        />

        <div className="aboutHero__text">
          <p className="aboutHero__kicker">WE ARE</p>

          <h1 className="aboutHero__title">
            ETHER <br /> DREAMS
          </h1>

          <p className="aboutHero__desc">
            Ether dreams was founded in 2024 by a group of friends after a horrible
            experience in the game industry. We all have a shared passion for indie
            video games and are inspired by the possibility of positively impacting
            the digital entertainment industry and making our mark in the world of
            video game development.
          </p>

          <p className="aboutHero__line">Our dreams are beyond this planet.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
