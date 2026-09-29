import { useEffect, useState } from 'react'

// Horário: seg a sex 8h às 15h, sáb e dom 8h às 16h (bio do Instagram, set. 2026)
export const HOURS = [15, 15, 15, 15, 15, 16, 16] // índice 0 = segunda
const WD = { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6 }

function nowInLisbon() {
  try {
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Lisbon', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false,
    }).formatToParts(new Date())
    const get = (t) => parts.find((p) => p.type === t).value
    return { day: WD[get('weekday')], h: Number(get('hour')) % 24, m: Number(get('minute')) }
  } catch {
    const d = new Date()
    return { day: (d.getDay() + 6) % 7, h: d.getHours(), m: d.getMinutes() }
  }
}

export function useLisbon() {
  const [now, setNow] = useState(nowInLisbon)
  useEffect(() => {
    const id = setInterval(() => setNow(nowInLisbon()), 60_000)
    return () => clearInterval(id)
  }, [])
  const close = HOURS[now.day]
  const t = now.h + now.m / 60
  const open = t >= 8 && t < close
  const state = open ? 'open' : t < 8 ? 'before' : 'after'
  return { ...now, close, open, state }
}

export function statusText(s, c) {
  if (s.state === 'open') return c.status.openUntil(s.close)
  if (s.state === 'before') return c.status.opensToday
  return c.status.opensTomorrow
}
