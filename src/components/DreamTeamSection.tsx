import "./DreamTeamSection.css";
import TeamCard from "./TeamCard";

const DreamTeamSection = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="dreamTeam">
      <div className="dreamTeam__container">
        <p className="dreamTeam__kicker">SAY HELLO TO A</p>
        <h2 className="dreamTeam__title">DREAM TEAM</h2>

        {/* mini slimes arriba */}
        <div className="dreamTeam__miniRow" aria-hidden="true">
          <button className="miniIcon" type="button">
            <img src={`${base}AlbaSlime.webp`} alt="" />
          </button>
          <button className="miniIcon" type="button">
            <img src={`${base}AlexSlime.webp`} alt="" />
          </button>
          <button className="miniIcon" type="button">
            <img src={`${base}BabuSlime.webp`} alt="" />
          </button>
          <button className="miniIcon" type="button">
            <img src={`${base}BastiSlime.webp`} alt="" />
          </button>
          <button className="miniIcon" type="button">
            <img src={`${base}JimSlime.webp`} alt="" />
          </button>
          <button className="miniIcon" type="button">
            <img src={`${base}LeoSlime.webp`} alt="" />
          </button>
          <button className="miniIcon" type="button">
            <img src={`${base}SebaSlime.webp`} alt="" />
          </button>
        </div>

        <div className="dreamTeam__grid">
          <TeamCard
            name="ALBA"
            role="UX & GRAPHIC DESIGNER"
            color="blue"
            avatarSrc={`${base}AlbaSlime.webp`}
          />
          <TeamCard
            name="ALEX"
            role="WEB DEVELOPER"
            color="green"
            avatarSrc={`${base}AlexSlime.webp`}
          />
          <TeamCard
            name="BABU"
            role="ILLUSTRATOR & CONCEPT ARTIST"
            color="purple"
            avatarSrc={`${base}BabuSlime.webp`}
          />
          <TeamCard
            name="BASTIAN"
            role="GAMEPLAY PROGRAMMER"
            color="yellow"
            avatarSrc={`${base}BastiSlime.webp`}
          />
          <TeamCard
            name="JIM"
            role="DIRECTOR, PROGRAMMER & ANIMATOR"
            color="dark"
            avatarSrc={`${base}JimSlime.webp`}
          />
          <TeamCard
            name="LEO"
            role="GAMEPLAY PROGRAMMER"
            color="magenta"
            avatarSrc={`${base}LeoSlime.webp`}
          />
          <TeamCard
            name="SEBA"
            role="COMPOSER & AUDIO DESIGNER"
            color="red"
            avatarSrc={`${base}SebaSlime.webp`}
          />
        </div>
      </div>
    </section>
  );
};

export default DreamTeamSection;
