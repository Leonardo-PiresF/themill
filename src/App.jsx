import { useEffect, useState } from 'react'
import { content } from './content.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Sequence from './components/Sequence.jsx'
import Menu from './components/Menu.jsx'
import Strip from './components/Strip.jsx'
import Beans from './components/Beans.jsx'
import House from './components/House.jsx'
import Visit from './components/Visit.jsx'
import Footer from './components/Footer.jsx'
import { MAPS_URL } from './content.js'

const TITLES = {
  pt: 'the mill · Brunch australiano e café de especialidade em Lisboa',
  en: 'the mill · Aussie brunch and specialty coffee in Lisbon',
}
const DESCRIPTIONS = {
  pt: 'Brunch australiano com alma portuguesa e café torrado a lenha em Santos. Rua do Poço dos Negros 1, Lisboa. Aberto todos os dias a partir das 8h, sem reservas.',
  en: 'Aussie brunch with a Portuguese soul and coffee wood-fire roasted in Santos. Rua do Poço dos Negros 1, Lisbon. Open daily from 8am, no reservations.',
}

function langFromUrl() {
  const { pathname, hash } = window.location
  if (pathname.startsWith('/en') || hash === '#en') return 'en'
  if (pathname.startsWith('/pt') || hash === '#pt') return 'pt'
  return null
}

function initialLang() {
  let saved = null
  try { saved = sessionStorage.getItem('themill-lang') } catch { /* sem storage */ }
  return langFromUrl() || saved || ((navigator.language || '').toLowerCase().startsWith('pt') ? 'pt' : 'en')
}

export default function App() {
  const [lang, setLang] = useState(initialLang)
  const c = content[lang]

  useEffect(() => {
    document.documentElement.lang = c.meta.lang
    document.title = TITLES[lang]
    document.querySelector('meta[name="description"]')?.setAttribute('content', DESCRIPTIONS[lang])
  }, [lang, c])

  // No mobile, o botão fixo só aparece depois de passar o hero (que já tem o seu)
  const [pastHero, setPastHero] = useState(false)
  useEffect(() => {
    const hero = document.getElementById('topo')
    if (!hero) return
    const io = new IntersectionObserver(([e]) => setPastHero(!e.isIntersecting), { threshold: 0 })
    io.observe(hero)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const onPop = () => { const l = langFromUrl(); if (l) setLang(l) }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const switchLang = (next) => {
    if (next === lang) return
    if (window.location.protocol.startsWith('http')) {
      window.history.pushState(null, '', `/${next}/`)
    } else {
      window.location.hash = next
    }
    try { sessionStorage.setItem('themill-lang', next) } catch { /* sem storage */ }
    setLang(next)
  }

  return (
    <>
      <a className="skip" href="#conteudo">{c.nav.skip}</a>
      <Header c={c} lang={lang} onLang={switchLang} />
      <main id="conteudo">
        <Hero c={c} />
        <Sequence c={c} />
        <Menu c={c} lang={lang} />
        <Strip c={c} />
        <Beans c={c} />
        <House c={c} />
        <Visit c={c} />
      </main>
      <Footer c={c} lang={lang} onLang={switchLang} />
      <a className={`fixed-cta btn ${pastHero ? 'on' : ''}`} href={MAPS_URL} target="_blank" rel="noopener">
        {c.fixedCta} <i aria-hidden="true">→</i>
      </a>
    </>
  )
}
