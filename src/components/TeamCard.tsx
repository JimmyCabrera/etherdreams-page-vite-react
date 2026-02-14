import "./TeamCard.css";

export type TeamCardColor =
  | "blue"
  | "green"
  | "purple"
  | "yellow"
  | "dark"
  | "magenta"
  | "red";

interface TeamCardProps {
  name: string;
  role: string;
  color: TeamCardColor;
  avatarSrc: string;
}

const TeamCard = ({ name, role, color, avatarSrc }: TeamCardProps) => {
  return (
    <article className={`teamCard teamCard--${color}`}>
      <img
        className="teamCard__avatar"
        src={avatarSrc}
        alt={name}
        draggable={false}
      />

      <div className="teamCard__plate">
        <p className="teamCard__name">{name}</p>
        <p className="teamCard__role">{role}</p>
      </div>
    </article>
  );
};

export default TeamCard;
