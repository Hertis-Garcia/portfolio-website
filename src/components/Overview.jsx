import { useReveal } from '../hooks/useReveal'
import { education, experience } from '../data/portfolio'
import { colors } from '../styles/tokens'
import SectionLabel from './SectionLabel'

function EntryList({ items }) {
  return (
    <div>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            paddingBottom: i < items.length - 1 ? 20 : 0,
            marginBottom: i < items.length - 1 ? 20 : 0,
            borderBottom: i < items.length - 1 ? `1px solid ${colors.border}` : 'none',
          }}
        >
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: colors.tertiary, letterSpacing: '0.08em', marginBottom: 3 }}>
            {item.year}
          </p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 16, color: colors.primary, marginBottom: 2 }}>
            {item.title}
          </p>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: colors.secondary, marginBottom: item.details ? 10 : 0 }}>
            {item.sub}
          </p>
          {item.details && (
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 5 }}>
              {item.details.map((d, j) => (
                <li key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                  <span style={{ color: colors.tertiary, fontSize: 10, marginTop: 2, flexShrink: 0 }}>–</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: colors.secondary, lineHeight: 1.6 }}>
                    {d}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

export default function Overview() {
  const ref = useReveal()

  return (
    <section style={{ padding: '80px 24px' }}>
      <SectionLabel>Background</SectionLabel>

      <div
        ref={ref}
        className="reveal"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 40,
          textAlign: 'left',
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 9,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: colors.secondary,
              marginBottom: 20,
            }}
          >
            Education
          </p>
          <EntryList items={education} />
        </div>

        <div>
          <p
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 9,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: colors.secondary,
              marginBottom: 20,
            }}
          >
            Experience
          </p>
          <EntryList items={experience} />
        </div>
      </div>
    </section>
  )
}
