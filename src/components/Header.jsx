export default function Header({ c, lang, onLang }) {
  return (
    <header className="site-header">
      <a className="wm" href="#topo" aria-label="the mill">the mill</a>
      <nav className="links" aria-label="Principal">
        <a href="#cafe">{c.nav.cafe}</a>
        <a href="#ementa">{c.nav.menu}</a>
        <a href="#graos">{c.nav.beans}</a>
        <a href="#visitar">{c.nav.visit}</a>
      </nav>
      <LangSwitch lang={lang} onLang={onLang} />
    </header>
  )
}

export function LangSwitch({ lang, onLang }) {
  return (
    <div className="lang" role="group" aria-label="Idioma / Language">
      <button type="button" aria-pressed={lang === 'pt'} onClick={() => onLang('pt')} lang="pt-PT">PT</button>
      <span aria-hidden="true">/</span>
      <button type="button" aria-pressed={lang === 'en'} onClick={() => onLang('en')} lang="en">EN</button>
    </div>
  )
}
