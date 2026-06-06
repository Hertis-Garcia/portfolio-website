import { useState } from "react";
import { colors } from "../styles/tokens";

export default function Hero() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 0",
        textAlign: "center",
      }}
    >
      {/* Status tag */}
      <p
        className="fade-item"
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 10,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: colors.secondary,
          marginBottom: 28,
          animationDelay: "0.1s",
        }}
      >
        Available for work &nbsp;·&nbsp; Manila, PH
      </p>

      {/* Name */}
      <h1
        className="fade-item"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 900,
          fontSize: "clamp(56px, 11vw, 96px)",
          lineHeight: 0.88,
          letterSpacing: "-0.04em",
          color: colors.primary,
          marginBottom: 28,
          animationDelay: "0.25s",
        }}
      >
        D.Garcia
        <br />
        
      </h1>

      {/* Role */}
      <p
        className="fade-item"
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 12,
          color: colors.secondary,
          letterSpacing: "0.06em",
          marginBottom: 44,
          animationDelay: "0.4s",
        }}
      >
       Interests: Software QA &nbsp;/&nbsp; DevOps Engineer
      </p>

      {/* CTA buttons */}
      <div
        className="fade-item"
        style={{ display: "flex", gap: 12, animationDelay: "0.55s" }}
      >
        <HeroButton href="#projects" primary>
          View Work
        </HeroButton>
        <HeroButton href="mailto:you@email.com" primary>
          Contact
        </HeroButton>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          marginTop: "auto",
          paddingBottom: 36,
          paddingTop: 48,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: 0,
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: 0,
          animation: "fadeUp 0.5s ease forwards 1.1s",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 9,
            letterSpacing: "0.2em",
            color: colors.tertiary,
            textTransform: "uppercase",
          }}
        >
          scroll
        </span>
        <div
          style={{
            width: 1,
            height: 36,
            background: `linear-gradient(to bottom, ${colors.tertiary}, transparent)`,
          }}
        />
      </div>
    </section>
  );
}

function HeroButton({ href, primary = false, children }) {
  const [hovered, setHovered] = useState(false);

  const base = {
    fontFamily: "'Space Mono', monospace",
    fontSize: 10,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    textDecoration: "none",
    padding: "11px 22px",
    border: `1px solid ${primary ? colors.primary : colors.tertiary}`,
    color: primary ? colors.primary : colors.secondary,
    background: "none",
    transition: "all 0.18s",
    cursor: "pointer",
  };

  const hoverStyle = hovered
    ? {
        background: primary ? colors.primary : "transparent",
        color: primary ? colors.black : colors.primary,
        borderColor: colors.primary,
      }
    : {};

  return (
    <a
      href={href}
      style={{ ...base, ...hoverStyle }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
}
