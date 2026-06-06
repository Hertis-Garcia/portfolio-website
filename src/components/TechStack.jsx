import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { stack } from '../data/portfolio'
import { colors } from '../styles/tokens'
import SectionLabel from './SectionLabel'

function Pill({ label }) {
  const [hovered, setHovered] = useState(false)

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: 11,
        padding: '6px 14px',
        border: `1px solid ${hovered ? colors.secondary : colors.border}`,
        color: hovered ? colors.primary : colors.secondary,
        letterSpacing: '0.04em',
        transition: 'all 0.15s',
        cursor: 'default',
      }}
    >
      {label}
    </span>
  )
}

export default function TechStack() {
  const ref = useReveal()

  return (
    <section style={{ padding: '80px 24px' }}>
      <SectionLabel>Tech Stack</SectionLabel>

      <div
        ref={ref}
        className="reveal"
        style={{ display: 'flex', flexDirection: 'column', gap: 28 }}
      >
        {stack.map((group) => (
          <div
            key={group.label}
            style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
          >
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 9,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: colors.secondary,
              }}
            >
              {group.label}
            </span>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
                justifyContent: 'center',
              }}
            >
              {group.pills.map((p) => (
                <Pill key={p} label={p} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
