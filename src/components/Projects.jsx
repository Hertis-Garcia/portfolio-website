import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { projects } from "../data/portfolio";
import { colors } from "../styles/tokens";
import SectionLabel from "./SectionLabel";

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#080808" : colors.black,
        padding: "24px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 9,
        textAlign: "left",
        borderTop: hovered
          ? `1px solid ${colors.primary}`
          : "1px solid transparent",
        transition: "all 0.18s",
      }}
    >
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 10,
          color: colors.tertiary,
          letterSpacing: "0.08em",
        }}
      >
        {project.num}
      </span>

      <p
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: 15,
          color: colors.primary,
          lineHeight: 1.2,
        }}
      >
        {project.name}
      </p>

      <p
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 11,
          color: colors.secondary,
          lineHeight: 1.7,
          flex: 1,
        }}
      >
        {project.desc}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 9,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: colors.tertiary,
              border: `1px solid ${colors.border}`,
              padding: "2px 7px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 10,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: hovered ? colors.secondary : colors.tertiary,
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: 5,
          marginTop: 2,
          transition: "color 0.15s",
        }}
      >
        View Project →
      </a>
    </div>
  );
}

export default function Projects() {
  const ref = useReveal();
  const [activeCategory, setActiveCategory] = useState("cloud");
  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );
  const categories = [
    { id: "cloud", label: "Cloud" },
    { id: "qa", label: "QA" },
  ];

  return (
    <section id="projects" style={{ padding: "80px 24px" }}>
      <SectionLabel>Projects</SectionLabel>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 0,
          marginBottom: 24,
        }}
      >
        {categories.map((category) => {
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={isActive}
              style={{
                minWidth: 118,
                padding: "10px 20px",
                border: `1px solid ${
                  isActive ? colors.primary : colors.border
                }`,
                background: isActive ? colors.primary : colors.black,
                color: isActive ? colors.black : colors.secondary,
                fontFamily: "'Space Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div
        ref={ref}
        className="reveal"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 1,
          background: "#111",
          border: "1px solid #111",
        }}
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.num} project={project} />
        ))}
      </div>
    </section>
  );
}
