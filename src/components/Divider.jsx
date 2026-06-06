import { colors } from '../styles/tokens'

export default function Divider() {
  return (
    <div
      style={{
        borderTop: `1px solid ${colors.border}`,
        width: '100%',
      }}
    />
  )
}
