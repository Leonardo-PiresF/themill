import { useState } from 'react'
import { flushSync } from 'react-dom'
import { menu, PRICE_TBC } from '../content.js'
import rosti from '../assets/img/rosti.webp'
import bagel from '../assets/img/bagel.webp'
import salada from '../assets/img/salada.webp'
import chavena from '../assets/img/chavena.webp'

const IMGS = { rosti, bagel, salada, chavena }
const FILTERS = ['all', 'v', 'vg', 'gf']

function withTransition(fn) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!document.startViewTransition || reduce) return fn()
  document.startViewTransition(() => flushSync(fn))
}

export default function Menu({ c, lang }) {
  const [cat, setCat] = useState(menu[0].id)
  const [filter, setFilter] = useState('all')
  const active = menu.find((m) => m.id === cat)
  const pass = (it) => filter === 'all' || it.tags.includes(filter)
  const items = active.items.filter(pass)

  return (
    <section className="menu" id="ementa" aria-labelledby="menu-title">
      <div className="menu-head">
        <div>
          <p className="rot">{c.menu.kicker}</p>
          <h2 id="menu-title" className="h2">{c.menu.title}</h2>
          <p className="lede">{c.menu.intro}</p>
        </div>
        <div className="filters" role="group" aria-label={c.menu.kicker}>
          {FILTERS.map((f) => (
            <button key={f} type="button" className="chip" aria-pressed={filter === f} onClick={() => withTransition(() => setFilter(f))}>
              {c.menu.filters[f]}
            </button>
          ))}
        </div>
      </div>

      <div className="plates" role="tablist" aria-label={c.menu.title}>
        {menu.map((m) => {
          const n = m.items.filter(pass).length
          return (
            <button
              key={m.id}
              role="tab"
              type="button"
              id={`tab-${m.id}`}
              aria-selected={cat === m.id}
              aria-controls="menu-list"
              className="plate"
              onClick={() => withTransition(() => setCat(m.id))}
            >
              <span className="plate-c">
                <img src={IMGS[m.img]} alt="" loading="lazy" style={{ objectPosition: m.pos }} />
              </span>
              <span className="plate-name">{m.name[lang]}</span>
              <span className="plate-n">{c.menu.count(n)}</span>
            </button>
          )
        })}
      </div>

      <div className="menu-list" id="menu-list" role="tabpanel" aria-labelledby={`tab-${cat}`}>
        {items.length === 0 && <p className="empty">{c.menu.empty}</p>}
        {items.map((it) => {
          const [name, desc] = it[lang]
          return (
            <article className={`item ${it.star ? 'star' : ''}`} key={name}>
              <div>
                <h3>{name}</h3>
                {desc && <p>{desc}</p>}
                <div className="item-meta">
                  {it.tags.map((t) => <span key={t} className="tag">{c.menu.tags[t]}</span>)}
                  {it.extra && <span className="extra">+ {it.extra[lang]} <span className="price">{PRICE_TBC}</span></span>}
                </div>
              </div>
              <span className="price">{PRICE_TBC}</span>
            </article>
          )
        })}
      </div>
      <p className="tbc">{c.menu.tbc}</p>
    </section>
  )
}
