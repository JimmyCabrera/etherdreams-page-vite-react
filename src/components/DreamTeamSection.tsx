import "./DreamTeamSection.css";
import TeamCard from "./TeamCard";

const DreamTeamSection = () => {
  return (
    <section className="dreamTeam">
      <div className="dreamTeam__container">
        <p className="dreamTeam__kicker">SAY HELLO TO A</p>
        <h2 className="dreamTeam__title">DREAM TEAM</h2>

        {/* mini slimes arriba (pon los que tengas) */}
          <div className="dreamTeam__miniRow" aria-hidden="true">
            <button className="miniIcon" type="button">
              <img src="/AlbaSlime.webp" alt="" />
            </button>
            <button className="miniIcon" type="button">
              <img src="/AlexSlime.webp" alt="" />
            </button>
            <button className="miniIcon" type="button">
              <img src="/BabuSlime.webp" alt="" />
            </button>
            <button className="miniIcon" type="button">
              <img src="/BastiSlime.webp" alt="" />
            </button>
            <button className="miniIcon" type="button">
              <img src="/JimSlime.webp" alt="" />
            </button>
            <button className="miniIcon" type="button">
              <img src="/LeoSlime.webp" alt="" />
            </button>
            <button className="miniIcon" type="button">
              <img src="/SebaSlime.webp" alt="" />
            </button>
          </div>


        <div className="dreamTeam__grid">
          <TeamCard name="ALBA" role="UX & GRAPHIC DESIGNER" color="blue" avatarSrc="/AlbaSlime.webp" />
          <TeamCard name="ALEX" role="WEB DEVELOPER" color="green" avatarSrc="/AlexSlime.webp" />
          <TeamCard name="BABU" role="ILLUSTRATOR & CONCEPT ARTIST" color="purple" avatarSrc="/BabuSlime.webp" />
          <TeamCard name="BASTIAN" role="GAMEPLAY PROGRAMMER" color="yellow" avatarSrc="/BastiSlime.webp" />
          <TeamCard name="JIM" role="DIRECTOR, PROGRAMMER & ANIMATOR" color="dark" avatarSrc="/JimSlime.webp" />
          <TeamCard name="LEO" role="GAMEPLAY PROGRAMMER" color="magenta" avatarSrc="/LeoSlime.webp" />
          <TeamCard name="SEBA" role="COMPOSER & AUDIO DESIGNER" color="red" avatarSrc="/SebaSlime.webp" />
        </div>
      </div>
    </section>
  );
};

export default DreamTeamSection;
