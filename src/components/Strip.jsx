import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import mesa from '../assets/img/mesa.webp'
import latte from '../assets/img/latte.webp'
import bagel from '../assets/img/bagel.webp'
import fachada from '../assets/img/fachada.webp'
import salada from '../assets/img/salada.webp'
import rosti from '../assets/img/rosti.webp'
import chavena from '../assets/img/chavena.webp'

const PHOTOS = [
  [mesa, 'w3'], [latte, 'w3'], [fachada, 'w3'], [salada, 'w4'], [rosti, 'w2'], [bagel, 'w3'], [chavena, 'w4'],
]

export default function Strip({ c }) {
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const plugins = reduce ? [] : [AutoScroll({ speed: 0.6, stopOnMouseEnter: true, stopOnFocusIn: true, stopOnInteraction: false })]
  const [ref] = useEmblaCarousel({ loop: true, dragFree: true, align: 'start' }, plugins)
  return (
    <section className="strip" aria-label={c.strip.aria}>
      <p className="rot strip-k">{c.strip.kicker}</p>
      <div className="embla" ref={ref}>
        <div className="embla-track">
          {PHOTOS.map(([src, w], i) => (
            <figure className={`embla-slide ${w}`} key={i}>
              <img src={src} alt="" loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
