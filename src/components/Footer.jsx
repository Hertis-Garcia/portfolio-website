import { useState } from "react";
import { socials } from "../data/portfolio";
import { colors } from "../styles/tokens";

function FooterLink({ label, href, newTab }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: 10,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: hovered ? colors.primary : colors.secondary,
        textDecoration: "none",
        transition: "color 0.15s",
      }}
    >
      {label}
    </a>
  );
}
export default function Footer() {
  return (
    <footer
      style={{
        padding: "48px 24px",
        textAlign: "center",
        borderTop: `1px solid ${colors.border}`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 24,
          marginBottom: 20,
        }}
      >
        {socials.map((s) => (
          <FooterLink
            key={s.label}
            label={s.label}
            href={s.href}
            newTab={s.newTab}
          />
        ))}
      </div>

      <p
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 10,
          color: colors.tertiary,
          letterSpacing: "0.1em",
        }}
      >
        © 2026 Your Name. Built with precision.
      </p>
    </footer>
  );
}
