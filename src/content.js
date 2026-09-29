// Todo o texto do site, em PT-PT e EN.
// Preços, dietas e alguns detalhes estão marcados como provisórios até o the mill confirmar.

export const PRICE_TBC = '€ x,xx'

export const content = {
  pt: {
    meta: { lang: 'pt-PT', other: 'en', otherLabel: 'EN' },
    nav: { cafe: 'O café', menu: 'Ementa', beans: 'Grãos', visit: 'Visitar', skip: 'Saltar para o conteúdo' },
    hero: {
      kicker: 'Specialty coffee · Lisboa, desde 2016',
      slogan: 'Brunch australiano. Alma portuguesa.',
      noBooking: 'Sem reservas',
      cta: 'Como chegar',
      seal: 'Torrado a lenha · em Santos · desde 2016 · ',
      alt: 'Flat white numa chávena de salpicos azuis, com um rösti de salmão ao fundo',
    },
    status: {
      openUntil: (h) => `Aberto agora · fecha às ${h}h`,
      opensToday: 'Fechado · abre hoje às 8h',
      opensTomorrow: 'Fechado · abre amanhã às 8h',
      openShort: 'Aberto agora',
      closedShort: 'Fechado agora',
    },
    seq: {
      kicker: 'O café',
      title: ['Do grão', 'à chávena'],
      steps: [
        { t: 'Torrado a lenha, em Santos', p: 'Os grãos de arábica são torrados à mão, num forno a lenha, a poucas ruas daqui.' },
        { t: 'Extraído na La Marzocco', p: 'Dois espressos de origem única, sempre a rodar, com uma torra pensada para o paladar português.' },
        { t: 'Servido à mesa', p: 'Flat white, long black ou um pingado. Na loiça de salpicos azuis, com tempo para o beber.' },
      ],
      roastCard: ['Santos', 'forno a lenha'],
      roastNote: 'Fotografia da torra em produção',
    },
    menu: {
      kicker: 'Ementa',
      title: 'Tudo, o dia todo',
      intro: 'Pequeno-almoço e brunch até ao fecho, com produto português. Os extras estão sempre indicados.',
      filters: { all: 'Todos', v: 'Vegetariano', vg: 'Vegano', gf: 'Sem glúten' },
      tags: { v: 'Vegetariano', vg: 'Vegano', gf: 'Sem glúten' },
      count: (n) => `${n} opções`,
      empty: 'Nada nesta categoria com este filtro.',
      tbc: 'Preços a confirmar',
    },
    strip: { kicker: 'Na mesa', aria: 'Fotografias da mesa' },
    beans: {
      kicker: 'Grãos',
      title: 'Leve o café para casa',
      p: 'Os mesmos grãos do espresso, em sacos de 250 g. Moemos na hora para a sua cafeteira, se precisar.',
      cta: 'Encomendar por e-mail',
      alt: 'Chávenas brancas em cima da La Marzocco',
      note: 'Disponível no balcão. Pergunte pelo café da semana.',
    },
    house: {
      kicker: 'A casa',
      title: 'Um clássico de Lisboa, numa nova fase',
      timeline: [
        { y: '2016', t: 'Abre na Rua do Poço dos Negros um café luso-australiano, com brunch o dia todo e café torrado aqui ao lado.' },
        { y: '2025', t: 'Nova direção, com hospitalidade inspirada na costa oeste americana e uma equipa internacional.' },
        { y: 'Hoje', t: 'Parte da comunidade La Marzocco. Um ponto de encontro para quem mora aqui e para quem está de passagem.' },
      ],
      alt: 'Clientes à mesa, com a parede de cortiça ao fundo',
    },
    visit: {
      kicker: 'Visitar',
      title: ['Sem reserva.', 'Chega-se.'],
      today: 'hoje',
      days: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
      address: ['Rua do Poço dos Negros, 1', '1200-335 Lisboa'],
      between: 'Entre São Bento e Santos. O elétrico passa à porta.',
      maps: 'Abrir no Google Maps',
      faqTitle: 'Antes de vir',
      faq: [
        { q: 'Fazem reservas?', a: 'Não. As mesas são por ordem de chegada. Antes das 10h ou depois das 14h costuma haver lugar.' },
        { q: 'Posso trabalhar com o portátil?', a: 'Durante a semana, sim. Ao fim de semana pedimos que os portáteis fiquem na mala, para caber toda a gente.' },
        { q: 'Têm opções vegetarianas, veganas e sem glúten?', a: 'Sim. Na ementa estão assinaladas, e há pão sem glúten e bebidas vegetais.' },
        { q: 'Como posso pagar?', a: 'Numerário, cartão de débito e crédito e contactless.' },
      ],
      mapAria: 'Mapa com a localização do the mill',
    },
    footer: {
      line: 'Brunch australiano. Alma portuguesa.',
      email: 'info@themillpt.com',
      rights: 'the mill, Lisboa',
      proto: 'Protótipo de proposta · fotografias do Instagram @themillpt',
    },
    fixedCta: 'Como chegar',
  },

  en: {
    meta: { lang: 'en', other: 'pt', otherLabel: 'PT' },
    nav: { cafe: 'Coffee', menu: 'Menu', beans: 'Beans', visit: 'Visit', skip: 'Skip to content' },
    hero: {
      kicker: 'Specialty coffee · Lisbon, since 2016',
      slogan: 'Aussie brunch. Portuguese soul.',
      noBooking: 'No reservations',
      cta: 'Get directions',
      seal: 'Wood-fire roasted · in Santos · since 2016 · ',
      alt: 'Flat white in a blue-speckled cup, with a salmon rösti behind it',
    },
    status: {
      openUntil: (h) => `Open now · closes at ${h === 15 ? '3' : '4'}pm`,
      opensToday: 'Closed · opens today at 8am',
      opensTomorrow: 'Closed · opens tomorrow at 8am',
      openShort: 'Open now',
      closedShort: 'Closed now',
    },
    seq: {
      kicker: 'The coffee',
      title: ['From bean', 'to cup'],
      steps: [
        { t: 'Wood-fire roasted in Santos', p: 'Arabica beans, hand-roasted over a wood fire, a few streets away.' },
        { t: 'Pulled on the La Marzocco', p: 'Two rotating single-origin espressos, roasted with the Portuguese palate in mind.' },
        { t: 'Served at the table', p: 'Flat white, long black or a pingado. In our blue-speckled cups, with time to enjoy it.' },
      ],
      roastCard: ['Santos', 'wood-fire roast'],
      roastNote: 'Roastery photo in production',
    },
    menu: {
      kicker: 'Menu',
      title: 'All of it, all day',
      intro: 'Breakfast and brunch until closing, made with Portuguese produce. Extras are always listed.',
      filters: { all: 'All', v: 'Vegetarian', vg: 'Vegan', gf: 'Gluten-free' },
      tags: { v: 'Vegetarian', vg: 'Vegan', gf: 'Gluten-free' },
      count: (n) => `${n} options`,
      empty: 'Nothing in this category with this filter.',
      tbc: 'Prices to be confirmed',
    },
    strip: { kicker: 'At the table', aria: 'Photos from the table' },
    beans: {
      kicker: 'Beans',
      title: 'Take the coffee home',
      p: 'The same beans we use for espresso, in 250 g bags. We will grind them for your brewer on the spot.',
      cta: 'Order by email',
      alt: 'White cups on top of the La Marzocco',
      note: 'Available at the counter. Ask about the coffee of the week.',
    },
    house: {
      kicker: 'The house',
      title: 'A Lisbon classic, in a new chapter',
      timeline: [
        { y: '2016', t: 'A Luso-Australian café opens on Rua do Poço dos Negros, with all-day brunch and coffee roasted around the corner.' },
        { y: '2025', t: 'New direction, with West Coast inspired hospitality and an international team.' },
        { y: 'Today', t: 'Part of the La Marzocco community. A meeting point for locals and travellers alike.' },
      ],
      alt: 'Guests at a table, with the cork wall behind them',
    },
    visit: {
      kicker: 'Visit',
      title: ['No bookings.', 'Just come by.'],
      today: 'today',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      address: ['Rua do Poço dos Negros, 1', '1200-335 Lisbon'],
      between: 'Between São Bento and Santos. The tram runs right past the door.',
      maps: 'Open in Google Maps',
      faqTitle: 'Before you come',
      faq: [
        { q: 'Do you take reservations?', a: 'No. Tables are first come, first served. Before 10am or after 2pm you will usually find a seat.' },
        { q: 'Can I work on my laptop?', a: 'On weekdays, yes. On weekends we ask that laptops stay in the bag, so everyone gets a seat.' },
        { q: 'Do you have vegetarian, vegan and gluten-free options?', a: 'Yes. They are marked on the menu, and we have gluten-free bread and plant milks.' },
        { q: 'How can I pay?', a: 'Cash, debit and credit cards, and contactless.' },
      ],
      mapAria: 'Map showing where the mill is',
    },
    footer: {
      line: 'Aussie brunch. Portuguese soul.',
      email: 'info@themillpt.com',
      rights: 'the mill, Lisbon',
      proto: 'Proposal prototype · photos from Instagram @themillpt',
    },
    fixedCta: 'Get directions',
  },
}

// Ementa. Pratos citados em guias e no Instagram; preços e dietas por confirmar.
export const menu = [
  {
    id: 'pratos', img: 'rosti', pos: '50% 40%',
    name: { pt: 'Pratos', en: 'Plates' },
    items: [
      { pt: ['Rösti com salmão fumado', 'Batata ralada estaladiça, salmão fumado, molho de iogurte com hortelã, salada'], en: ['Rösti with smoked salmon', 'Crispy grated potato, smoked salmon, mint yoghurt sauce, greens'], tags: [], star: true, extra: { pt: 'Ovo escalfado', en: 'Poached egg' } },
      { pt: ['Sweet corn fritters', 'Bolinhos de milho doce, abacate, bacon ou salmão fumado'], en: ['Sweet corn fritters', 'Sweet corn fritters, avocado, bacon or smoked salmon'], tags: [] },
      { pt: ['Ovos com chouriço', 'Ovos mexidos, chouriço, pão de fermentação natural'], en: ['Eggs and chouriço', 'Scrambled eggs, chouriço, sourdough'], tags: [] },
      { pt: ['Pequeno-almoço completo', 'O pequeno-almoço australiano, com torrada'], en: ['Full breakfast', 'The Aussie big breakfast, with toast'], tags: [] },
      { pt: ['Omelete de salmão', 'Com salmão fumado'], en: ['Salmon omelette', 'With smoked salmon'], tags: ['gf'] },
      { pt: ['Frango piri-piri', 'Com salada da época'], en: ['Piri-piri chicken', 'With seasonal salad'], tags: ['gf'] },
    ],
  },
  {
    id: 'toasts', img: 'bagel', pos: '50% 75%',
    name: { pt: 'Bagels e toasts', en: 'Bagels & toasts' },
    items: [
      { pt: ['Avocado toast', 'Pão de fermentação natural, abacate, ovo escalfado'], en: ['Avocado toast', 'Sourdough, avocado, poached egg'], tags: ['v'], star: true },
      { pt: ['Bagel de bacon e ovo', 'Ovos mexidos, bacon estaladiço, salada'], en: ['Bacon & egg bagel', 'Scrambled eggs, crispy bacon, greens'], tags: [] },
      { pt: ['Bagel de salmão fumado', 'Em bagel fresco'], en: ['Smoked salmon bagel', 'On a fresh bagel'], tags: [] },
      { pt: ['Vegemite na torrada', 'O clássico australiano'], en: ['Vegemite on toast', 'The Aussie classic'], tags: ['v'] },
      { pt: ['Banana bread', 'Com mascarpone e frutos vermelhos'], en: ['Banana bread', 'With mascarpone and berries'], tags: ['v'] },
    ],
  },
  {
    id: 'tacas', img: 'salada', pos: '50% 60%',
    name: { pt: 'Doces e taças', en: 'Sweet & bowls' },
    items: [
      { pt: ['Panquecas de mirtilo', ''], en: ['Blueberry pancakes', ''], tags: ['v'] },
      { pt: ['Bircher muesli', 'Aveia demolhada durante a noite'], en: ['Bircher muesli', 'Oats soaked overnight'], tags: ['v'] },
      { pt: ['Chia porridge', 'Com fruta da época'], en: ['Chia porridge', 'With seasonal fruit'], tags: ['v'] },
      { pt: ['Power oatmeal', 'Papas de aveia reforçadas'], en: ['Power oatmeal', 'A hearty bowl of oats'], tags: ['v'] },
      { pt: ['Iogurte com granola da casa', 'Granola feita cá'], en: ['Yoghurt with house granola', 'Granola made in-house'], tags: ['v'] },
    ],
  },
  {
    id: 'cafe', img: 'chavena', pos: '50% 30%',
    name: { pt: 'Café', en: 'Coffee' },
    items: [
      { pt: ['Espresso', 'Origem única, a rodar'], en: ['Espresso', 'Rotating single origin'], tags: ['v', 'vg', 'gf'] },
      { pt: ['Pingado', 'Espresso com uma gota de leite'], en: ['Pingado', 'Espresso with a drop of milk'], tags: ['v', 'gf'] },
      { pt: ['Flat white', 'O clássico australiano'], en: ['Flat white', 'The Aussie classic'], tags: ['v', 'gf'], star: true, extra: { pt: 'Bebida vegetal', en: 'Plant milk' } },
      { pt: ['Long black', 'Espresso duplo sobre água quente'], en: ['Long black', 'Double espresso over hot water'], tags: ['v', 'vg', 'gf'] },
      { pt: ['Cappuccino', ''], en: ['Cappuccino', ''], tags: ['v', 'gf'] },
      { pt: ['Cold brew', 'Infusão a frio'], en: ['Cold brew', 'Slow cold steep'], tags: ['v', 'vg', 'gf'] },
      { pt: ['Filtro do dia', 'Método e origem no quadro'], en: ['Filter of the day', 'Method and origin on the board'], tags: ['v', 'vg', 'gf'] },
    ],
  },
]

export const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=the+mill+Rua+do+Po%C3%A7o+dos+Negros+1+Lisboa'
