import { useReveal } from '../hooks/useReveal'
import { colors } from '../styles/tokens'

export default function SectionLabel({ children }) {
  const ref = useReveal()

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        marginBottom: 48,
      }}
    >
      <span
        style={{
          display: 'inline-block',
          width: 20,
          height: 1,
          background: colors.tertiary,
        }}
      />
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 10,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: colors.secondary,
        }}
      >
        {children}
      </span>
      <span
        style={{
          display: 'inline-block',
          width: 20,
          height: 1,
          background: colors.tertiary,
        }}
      />
    </div>
  )
}
