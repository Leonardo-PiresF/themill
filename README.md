# the mill · site (protótipo da proposta)

Site do the mill (Rua do Poço dos Negros 1, Lisboa) na **Direção C, "Do grão à chávena"**.
Vite + React, bilingue PT-PT / EN.

## Rodar

```bash
npm install
npm run dev            # desenvolvimento
npm run build          # site para publicar (pasta dist/)
npm run build:preview  # um único HTML autocontido (pasta preview/), para mandar ao cliente
```

## Idiomas

- `/pt/` e `/en/` (o `vercel.json` já faz o rewrite). Sem prefixo, o site usa o idioma do navegador.
- No arquivo único aberto localmente, o idioma vai no hash: `index.html#pt` ou `#en`.
- Todo o texto está em `src/content.js`.

## Estrutura

| Seção | Componente | Observação |
| --- | --- | --- |
| Hero | `Hero.jsx` | Foto em sangria, cartão com estado ao vivo, selo girando (40s) |
| Do grão à chávena | `Sequence.jsx` | GSAP + ScrollTrigger com pin, carregados só perto da seção; só no desktop e sem reduced-motion |
| Ementa em pratos | `Menu.jsx` | Categorias em círculo, filtros de dieta, troca com View Transition |
| Na mesa | `Strip.jsx` | Embla em loop com auto-scroll lento, pausa no hover e no foco |
| Grãos | `Beans.jsx` | Encomenda por e-mail (confirmar se ainda vendem) |
| A casa | `House.jsx` | 2016, 2025, La Marzocco e selos de prova |
| Visitar | `Visit.jsx` | Horário com o dia de hoje, mapa do Google Maps incorporado (sem chave de API), FAQ |

O estado "Aberto agora" é calculado no fuso Europe/Lisbon (`src/useLisbon.js`).
Horário: seg a sex 8h às 15h, sáb e dom 8h às 16h (bio do Instagram, set. 2026).

## A confirmar com o cliente antes de publicar

- Preços (hoje aparecem como `€ x,xx`) e dietas de cada prato
- Ementa atual completa
- Se a torra a lenha em Santos continua e se podemos nomear a torrefação
- Se ainda vendem grãos (seção Grãos)
- Regra dos portáteis ao fim de semana (FAQ)
- Linha do elétrico que passa à porta

## Fotografias

Todas vêm do Instagram @themillpt, algumas de publicações de clientes marcados.
Servem só para o protótipo. O site final precisa de fotos próprias:
meio dia de ensaio com pratos vistos de cima na loiça de salpicos azuis, a torra em Santos,
uma extração na La Marzocco, a fachada e as mãos à mesa.
Espaço reservado: o painel terracota "Santos" na sequência do café espera a foto da torra.

## Orçamento de JS

- App: ~87 KB gzip (React + Embla)
- GSAP + ScrollTrigger: ~45 KB gzip, carregados sob demanda só no desktop
