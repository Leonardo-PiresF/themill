import hero from '../assets/img/hero.webp'
import Status from './Status.jsx'
import { MAPS_URL } from '../content.js'

export default function Hero({ c }) {
  return (
    <section className="hero" id="topo" aria-label="the mill">
      <img className="hero-img" src={hero} alt={c.hero.alt} width="1217" height="1000" fetchPriority="high" />
      <div className="hero-card">
        <p className="rot">{c.hero.kicker}</p>
        <h1 className="hero-wm">the mill</h1>
        <p className="hero-slogan">{c.hero.slogan}</p>
        <div className="hero-line">
          <Status c={c} />
          <span>{c.hero.noBooking}</span>
        </div>
        <a className="btn" href={MAPS_URL} target="_blank" rel="noopener">
          {c.hero.cta} <i aria-hidden="true">→</i>
        </a>
      </div>
      <Seal text={c.hero.seal} />
    </section>
  )
}

function Seal({ text }) {
  const full = text.repeat(2)
  return (
    <div className="seal" aria-hidden="true">
      <svg viewBox="0 0 200 200">
        <defs>
          <path id="seal-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <g className="seal-ring">
          <text><textPath href="#seal-circle" textLength="488">{full.slice(0, Math.floor(full.length / 2))}</textPath></text>
        </g>
        <circle cx="100" cy="100" r="46" fill="none" stroke="currentColor" strokeWidth="1" />
        <text x="100" y="97" textAnchor="middle" className="seal-mid">the</text>
        <text x="100" y="121" textAnchor="middle" className="seal-mid">mill</text>
      </svg>
    </div>
  )
}
