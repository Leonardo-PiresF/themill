import mesa from '../assets/img/mesa.webp'

export default function House({ c }) {
  return (
    <section className="house" aria-labelledby="house-title">
      <figure className="house-img">
        <img src={mesa} alt={c.house.alt} loading="lazy" width="683" height="911" />
      </figure>
      <div className="house-text">
        <p className="rot">{c.house.kicker}</p>
        <h2 id="house-title" className="h2">{c.house.title}</h2>
        <ol className="timeline">
          {c.house.timeline.map((t) => (
            <li key={t.y}><span className="y">{t.y}</span><p>{t.t}</p></li>
          ))}
        </ol>
      </div>
    </section>
  )
}
