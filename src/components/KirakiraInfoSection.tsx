import "./KirakiraInfoSection.css";

const KirakiraInfoSection = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="kkInfo">
      {/* Fondo */}
      <img
        src={`${base}fondo2.webp`}
        alt=""
        className="kkInfo__bg"
        draggable={false}
      />

      <div className="kkInfo__container">
        {/* Top: texto + screenshot */}
        <div className="kkInfo__top">
          {/* Texto */}
          <div className="kkInfo__left">
            <h2 className="kkInfo__title">ABOUT THE GAME</h2>
            <p className="kkInfo__text">
              Kirakira Slimes is a fun indie puzzle game in which you have to
              combine slimes strategically in an ever smaller space. Merge from
              the smallest to the Slime King, in order to get many points and
              top the highest score.
            </p>
          </div>

          {/* Imagen grande + conejo */}
          <div className="kkInfo__right">
            <img
              src={`${base}conejoSlime.webp`}
              alt=""
              className="kkInfo__bunny"
              draggable={false}
            />

            <div className="kkInfo__screenWrap">
              <img
                src={`${base}screenshot_kirakira.webp`}
                alt="Kirakira Slimes screenshot"
                className="kkInfo__screen"
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* Bottom: 3 tarjetas como imágenes */}
        <div className="kkInfo__cards">
          <div className="kkInfo__cardWrap">
            <img
              src={`${base}Group1.webp`}
              alt="Kirakira feature 1"
              className="kkInfo__cardImg"
              draggable={false}
            />
          </div>

          <div className="kkInfo__cardWrap">
            <img
              src={`${base}Group2.webp`}
              alt="Kirakira feature 2"
              className="kkInfo__cardImg"
              draggable={false}
            />
          </div>

          <div className="kkInfo__cardWrap">
            <img
              src={`${base}Group3.webp`}
              alt="Kirakira feature 3"
              className="kkInfo__cardImg"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KirakiraInfoSection;
