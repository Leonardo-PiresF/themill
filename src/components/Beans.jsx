import marzocco from '../assets/img/marzocco.webp'

export default function Beans({ c }) {
  const mail = `mailto:${c.footer.email}?subject=${encodeURIComponent(c.beans.title)}`
  return (
    <section className="beans" id="graos" aria-labelledby="beans-title">
      <figure className="beans-img">
        <img src={marzocco} alt={c.beans.alt} loading="lazy" width="1080" height="1350" />
      </figure>
      <div className="beans-text">
        <p className="rot">{c.beans.kicker}</p>
        <h2 id="beans-title" className="h2">{c.beans.title}</h2>
        <p className="lede">{c.beans.p}</p>
        <a className="btn btn-line" href={mail}>{c.beans.cta} <i aria-hidden="true">→</i></a>
        <p className="small">{c.beans.note}</p>
      </div>
    </section>
  )
}
