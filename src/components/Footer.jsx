import { LangSwitch } from './Header.jsx'

export default function Footer({ c, lang, onLang }) {
  return (
    <footer className="site-footer">
      <div className="f-top">
        <p className="f-wm">the mill</p>
        <p className="f-line">{c.footer.line}</p>
      </div>
      <div className="f-grid">
        <p>Rua do Poço dos Negros, 1<br />1200-335 Lisboa</p>
        <p><a href={`mailto:${c.footer.email}`}>{c.footer.email}</a><br /><a href="https://www.instagram.com/themillpt/" target="_blank" rel="noopener">Instagram @themillpt</a></p>
        <LangSwitch lang={lang} onLang={onLang} />
      </div>
      <p className="f-proto">{c.footer.proto}</p>
    </footer>
  )
}
