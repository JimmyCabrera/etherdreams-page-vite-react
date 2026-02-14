import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "dark" | "gradient";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;

  iconSrc?: string;
  iconAlt?: string;

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

  const content = (
    <>
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
    </>
  );

  const classes = `${base} ${variantClass} ${className}`;

  // ✅ Si es ruta interna, usamos Link (respeta HashRouter)
  if (href.startsWith("/")) {
    return (
      <Link to={href} className={classes}>
        {content}
      </Link>
    );
  }

  // ✅ Si es externa, usamos <a>
  return (
    <a href={href} target={target} rel={rel} className={classes}>
      {content}
    </a>
  );
}
