import type { ReactNode } from "react";

type Variant = "dark" | "gradient";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;

  // icono desde /public
  iconSrc?: string;
  iconAlt?: string;

  // 👇 NUEVO: soporte para abrir en otra pestaña
  target?: "_self" | "_blank" | "_parent" | "_top";
  rel?: string;
};

export default function HeroButton({
  href,
  children,
  variant = "dark",
  className = "",
  iconSrc,
  iconAlt = "",
  target,
  rel,
}: Props) {
  const base = "hero-btn";
  const variantClass =
    variant === "gradient" ? "hero-btn-gradient" : "hero-btn-dark";

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${base} ${variantClass} ${className}`}
    >
      {iconSrc ? (
        <span className="hero-btn-icon" aria-hidden="true">
          <img
            className="hero-btn-icon-img"
            src={iconSrc}
            alt={iconAlt}
            draggable={false}
          />
        </span>
      ) : null}

      <span className="hero-btn-text">{children}</span>

      <span className="hero-btn-shine" aria-hidden="true" />
    </a>
  );
}
