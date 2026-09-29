import Status from './Status.jsx'
import { useLisbon, HOURS } from '../useLisbon.js'
import { MAPS_URL } from '../content.js'

// Embed do Google Maps sem chave de API (busca pelo nome e morada)
const MAP_QUERY = encodeURIComponent('the mill, Rua do Poço dos Negros 1, 1200-335 Lisboa')

const fmt = (lang, h) => (lang === 'en' ? `8am to ${h - 12}pm` : `8h às ${h}h`)

export default function Visit({ c }) {
  const s = useLisbon()
  const lang = c.meta.lang === 'en' ? 'en' : 'pt'
  return (
    <section className="visit" id="visitar" aria-labelledby="visit-title">
      <div className="visit-info">
        <p className="rot">{c.visit.kicker}</p>
        <h2 id="visit-title" className="h2">{c.visit.title[0]}<br />{c.visit.title[1]}</h2>
        <p className="visit-status"><Status c={c} /></p>
        <dl className="hours">
          {c.visit.days.map((d, i) => (
            <div key={d} className={i === s.day ? 'today' : ''}>
              <dt>{d}{i === s.day && <span className="today-tag">{c.visit.today}</span>}</dt>
              <dd className="price">{fmt(lang, HOURS[i])}</dd>
            </div>
          ))}
        </dl>
        <address>
          {c.visit.address[0]}<br />{c.visit.address[1]}
          <span>{c.visit.between}</span>
        </address>
        <a className="btn" href={MAPS_URL} target="_blank" rel="noopener">{c.visit.maps} <i aria-hidden="true">→</i></a>
      </div>

      <div className="visit-map">
        <iframe
          title={c.visit.mapAria}
          src={`https://www.google.com/maps?q=${MAP_QUERY}&hl=${lang === 'en' ? 'en' : 'pt-PT'}&z=17&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <div className="faq">
        <h3 className="rot">{c.visit.faqTitle}</h3>
        {c.visit.faq.map((f, i) => (
          <details key={f.q} open={i === 0}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
