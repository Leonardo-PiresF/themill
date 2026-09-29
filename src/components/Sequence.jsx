import { useEffect, useRef, useState } from 'react'
import marzocco from '../assets/img/marzocco.webp'
import chavena from '../assets/img/chavena.webp'

// Assinatura do site: sequência fixa "do grão à chávena" (GSAP + ScrollTrigger).
// Só entra no desktop e sem prefers-reduced-motion; no resto, os passos aparecem empilhados.
export default function Sequence({ c }) {
  const section = useRef(null)
  const pin = useRef(null)
  const layers = useRef([])
  const [step, setStep] = useState(0)
  const [pinned, setPinned] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 960px) and (prefers-reduced-motion: no-preference)')
    if (!mq.matches) return
    let ctx
    let cancelled = false
    const io = new IntersectionObserver(async ([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')])
      if (cancelled) return
      gsap.registerPlugin(ScrollTrigger)
      setPinned(true)
      ctx = gsap.context(() => {
        const [, l2, l3] = layers.current
        gsap.set([l2, l3], { clipPath: 'inset(100% 0% 0% 0%)' })
        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: section.current,
            pin: pin.current,
            start: 'top top',
            end: '+=220%',
            scrub: 0.6,
            onUpdate: (st) => setStep(st.progress < 0.36 ? 0 : st.progress < 0.72 ? 1 : 2),
          },
        })
        tl.to({}, { duration: 0.25 })
          .to(l2, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.5 })
          .to(layers.current[0], { scale: 0.95, filter: 'brightness(0.72)', duration: 0.5 }, '<')
          .to({}, { duration: 0.25 })
          .to(l3, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.5 })
          .to(l2, { scale: 0.95, filter: 'brightness(0.72)', duration: 0.5 }, '<')
          .to({}, { duration: 0.25 })
      }, section)
    }, { rootMargin: '600px 0px' })
    io.observe(section.current)
    return () => { cancelled = true; io.disconnect(); ctx?.revert() }
  }, [])

  const steps = c.seq.steps
  return (
    <section className={`seq ${pinned ? 'is-pinned' : ''}`} id="cafe" ref={section} aria-labelledby="seq-title">
      <div className="seq-pin" ref={pin}>
        <div className="seq-text">
          <p className="rot">{c.seq.kicker}</p>
          <h2 id="seq-title" className="h2">{c.seq.title[0]}<br />{c.seq.title[1]}</h2>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.t} className={`step ${!pinned || i === step ? 'on' : ''}`} aria-current={pinned && i === step ? 'step' : undefined}>
                <span className="n">0{i + 1}</span>
                <div>
                  <h3>{s.t}</h3>
                  <p>{s.p}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="seq-stage">
          <p className="seq-prog" aria-hidden="true">0{step + 1} / 03</p>
          <div className="layer roast" ref={(el) => (layers.current[0] = el)}>
            <div className="roast-card">
              <span className="roast-big">{c.seq.roastCard[0]}</span>
              <span className="rot">{c.seq.roastCard[1]}</span>
            </div>
            <span className="roast-note">{c.seq.roastNote}</span>
          </div>
          <div className="layer" ref={(el) => (layers.current[1] = el)}>
            <img src={marzocco} alt="" loading="lazy" width="1080" height="1350" />
          </div>
          <div className="layer" ref={(el) => (layers.current[2] = el)}>
            <img src={chavena} alt="" loading="lazy" width="977" height="740" />
          </div>
        </div>
      </div>
    </section>
  )
}
