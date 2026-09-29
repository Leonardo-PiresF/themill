import { useLisbon, statusText } from '../useLisbon.js'

export default function Status({ c, short = false }) {
  const s = useLisbon()
  const text = short ? (s.open ? c.status.openShort : c.status.closedShort) : statusText(s, c)
  return (
    <span className={`status ${s.open ? 'is-open' : 'is-closed'}`} role="status">
      <span className="dot" aria-hidden="true" />
      {text}
    </span>
  )
}
