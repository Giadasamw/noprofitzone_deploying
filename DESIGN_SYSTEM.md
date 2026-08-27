# No Profit Zone — Design System

Handover per costruire prodotti, siti e software coerenti con l'identità di
No Profit Zone. Tutti i valori qui documentati sono estratti direttamente dal
codice del sito (`src/app/globals.css` + componenti in `src/components/`).

> **Fonte di verità dei token:** `src/app/globals.css` (`:root`).
> File riutilizzabili pronti all'uso: [`design-system/tokens.css`](design-system/tokens.css) e [`design-system/tokens.json`](design-system/tokens.json).

L'estetica è **editoriale e cartacea**: fondo color carta, un serif con
carattere (Mackinac) per i titoli, un grottesco caldo (Mallory) per testo e
interfaccia, un unico accento terracotta e un tocco di gradiente pastello come
firma. Poche regole, molto respiro.

---

## 1. Colori

### Palette base (token)

| Token | Hex | Ruolo |
|---|---|---|
| `--paper` | `#faf6ec` | Sfondo principale (carta) |
| `--paper-2` | `#f3e0d0` | Superficie secondaria / immagini placeholder (più calda) |
| `--ink` | `#4a4744` | Testo primario |
| `--ink-soft` | `#5a544d` | Testo secondario / paragrafi lunghi |
| `--muted` | `#8a8175` | Eyebrow, label, meta, testo terziario |
| `--line` | `#e3d9c4` | Bordi e divisori |
| `--line-soft` | `#ece3d2` | Divisori tenui (es. bordo header) |
| `--accent` | `#cc5a2c` | Accento primario (terracotta): CTA, bordi, numeri |
| `--accent-deep` | `#a8451f` | Accento in hover / stato profondo |
| `--accent-yellow` | `#f5d76a` | Accento secondario (giallo) |
| `--accent-lilac` | `#e0a4e8` | Accento secondario (lilla) |

### Gradienti firma

Usati per banner/poster decorativi. Non usarli sotto al testo lungo.

```css
--gradient:      radial-gradient(120% 130% at 70% 30%, #f5d76a 0%, #f3a07a 35%, #e0a4e8 75%, #cdb9e8 100%);
--gradient-soft: radial-gradient(120% 130% at 30% 30%, #fbe8b6 0%, #f5c4a8 40%, #e7c0eb 75%, #d9c5e6 100%);
```

Stop cromatici disponibili come singoli colori: `#fbe8b6`, `#f5c4a8`, `#f3a07a`,
`#e7c0eb`, `#e0a4e8`, `#cdb9e8`, `#d9c5e6`, `#d9825f`.

### Regole d'uso

- **Un solo accento per volta.** Terracotta (`--accent`) è l'unico colore
  d'azione: bottoni, link attivi, numeri di sezione, bordi enfatici. Giallo e
  lilla sono decorativi (gradienti, dettagli), mai per testo o CTA.
- **Testo:** `--ink` per titoli e testo primario, `--ink-soft` per paragrafi,
  `--muted` per label/eyebrow. Non usare nero puro.
- **Contrasto:** `--ink` su `--paper` ≈ 8:1 (AA/AAA ok). Testo terracotta su
  carta va bene per label e link; per CTA piene usare testo `#fff` su `--accent`.
- I neutri sono **caldi** (bias verso l'accento), mai grigi puri.

---

## 2. Tipografia

Due famiglie, ruoli distinti.

| Famiglia | Uso | Pesi | Stile |
|---|---|---|---|
| **Mackinac** (P22 Mackinac Pro) — serif | Titoli, display, enfasi in corsivo | 400 (Book), 700 (Bold) | Regular + Italic |
| **Mallory** — sans-serif | Testo, UI, bottoni, nav, eyebrow | 400 (Book), 700 (Bold) | Regular + Italic |

Fallback stack:
- Serif: `"Mackinac", "Iowan Old Style", Georgia, serif`
- Sans: `"Mallory", "Helvetica Neue", Helvetica, Arial, sans-serif`

> I file font (`.otf`/`.ttf`) sono in `public/`. Per riusarli in un altro
> prodotto vanno licenziati/copiati insieme (P22 Mackinac e Mallory sono font
> commerciali).

### Base

Il sito imposta un **root font-size ridotto (`10.5px`)** e usa dimensioni in
`px` costruite su quella base compatta, con `line-height` di `1.6`.
Per un nuovo prodotto puoi adottare la **scala in `rem`** qui sotto (più
portabile) mantenendo le stesse proporzioni.

### Scala tipografica (ruoli)

| Ruolo | Famiglia | Size (sito) | Consigliato (rem) | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|---|
| Display / H1 | Mackinac | `clamp(33.6px, 3.64vw, 50.4px)` | `clamp(2.1rem, 3.6vw, 3.15rem)` | 700 | 1.04 | −0.018em |
| H2 sezione | Mackinac | `clamp(22.4px, 2.24vw, 33.6px)` | `clamp(1.4rem, 2.2vw, 2.1rem)` | 700 | 1.05 | −0.012em |
| H3 | Mackinac | ~24–28px | `1.5–1.75rem` | 700 | 1.1 | −0.01em |
| H4 / titolo step | Mackinac | ~15–18px | `1.05rem` | 700 | 1.15 | −0.005em |
| Enfasi in titolo | Mackinac *italic* | eredita | eredita | 400 *italic* | eredita | eredita |
| Lead / intro | Mallory | 13.2–15.4px | `0.95–1.05rem` | 400 | 1.6 | −0.005em |
| Body | Mallory | 12.5–13px | `0.85rem` | 400 | 1.6–1.65 | normale |
| Small / caption | Mallory | 11–11.8px | `0.78rem` | 400 | 1.55 | normale |
| Eyebrow / label | Mallory | 7–11px | `0.7rem` | 400 | 1 | **0.24em** (uppercase) |
| Nav | Mallory | 11px | `0.75rem` | 400 | 1 | 0.04em (uppercase) |
| Bottone / pill | Mallory | ~11px | `0.75rem` | 400 | 1 | 0.01em |

### Pattern ricorrenti

- **Titolo con corsivo di enfasi:** frase in Mackinac 700 con una parte chiave
  in `<em>` corsivo peso 400. È la firma tipografica del brand.
  ```html
  <h1>Le idee che meritano di esistere hanno bisogno di
    <em>essere scritte bene.</em>
  </h1>
  ```
- **Eyebrow:** label Mallory, `UPPERCASE`, `letter-spacing: 0.24em`,
  `color: var(--muted)`, sopra i titoli di sezione.
- **Numeri di fase/step:** Mackinac *italic*, `color: var(--accent)`.
- Titoli sempre con `text-wrap: balance`.

---

## 3. Spacing & Layout

### Scala di spaziatura

Base **4px**. Valori effettivamente usati nel sito:

`4 · 8 · 10 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 56 · 64 · 96 · 120`

Ritmo verticale consigliato: 8 → 16 → 24 → 32 tra elementi correlati;
48 → 64 tra blocchi; 96 → 120 tra macro-sezioni.

### Sezioni (padding verticale)

| Densità | Padding | Uso |
|---|---|---|
| Ampia | `140px 0` / `160px 0` | Sezioni hero e respiro forte |
| Media | `100px 0` / `120px 0` | Sezioni standard |
| Compatta | `60px 0` / `80px 0` | Sezioni dense, liste |
| Minima | `32px–48px 0` | Header, footer, micro-blocchi |

### Container

```css
.container {
  max-width: 1240px;   /* larghezza massima layout */
  margin: 0 auto;
  padding: 0 72px;     /* 24px su mobile */
}
```

- **Larghezza di lettura** (testo lungo): `max-width: 768px` (anche 640 / 560
  per colonne più strette).
- **Breakpoint mobile unico:** `max-width: 768px` → padding orizzontale `24px`,
  griglie che collassano in colonna, dimensioni titoli ridotte (es. H1 → 28px).

### Griglia

- Hero e blocchi a due colonne: `grid-template-columns: 1.05fr 1fr; gap: 96px;`
- Gap tipici tra colonne: `40 · 56 · 64 · 96 · 120px`.

### Raggi e bordi

| Token | Valore | Uso |
|---|---|---|
| Radius S | `12px` | Piccoli elementi |
| Radius M | `16px` | Card standard, immagini |
| Radius L | `20px` | Card evidenziate |
| Radius XL | `24px` | Blocchi grandi |
| Pill | `999px` | Bottoni |
| Bordo linea | `1px solid var(--line)` | Divisori |
| Bordo accento | `1.5px solid var(--accent)` | Card enfatiche, pill |

---

## 4. Componenti

### Bottone / Pill

```css
.pill {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: "Mallory", sans-serif;
  font-size: 0.75rem; letter-spacing: 0.01em;
  padding: 14px 22px; border-radius: 999px;
  border: 1.5px solid var(--accent);
  transition: background .2s, color .2s;
}
.pill--filled { background: var(--accent); color: #fff; }
.pill--ghost  { background: transparent; color: var(--accent); }
.pill--filled:hover { background: var(--accent-deep); }
.pill--ghost:hover  { background: var(--accent); color: #fff; }
```

La freccia `→` nei bottoni è resa in Mackinac serif.

### Card

```css
.card {
  border: 1.5px solid var(--accent);   /* oppure 1px solid var(--line) */
  border-radius: 20px;
  padding: 16px 20px;
  background: var(--paper);
}
```

### Header

- `position: sticky; top: 0;`
- Sfondo semi-trasparente + blur: `background: rgba(250,246,236,0.88);
  backdrop-filter: blur(10px);`
- `border-bottom: 1px solid var(--line-soft);`
- Nav: Mallory `11px`, uppercase, `letter-spacing: 0.04em`; link attivo con
  `border-bottom: 1px solid var(--ink)`.

### Lista a fasi / step

- Righe separate da `border-top: 1px solid var(--line)` (l'ultima anche
  `border-bottom`).
- Numero in Mackinac *italic* terracotta; titolo Mackinac 700; corpo
  `var(--ink-soft)`, `line-height: 1.65`.

### Immagini

- Placeholder / cornice: `background: var(--paper-2)`.
- Foto trattate in **bianco e nero**:
  `filter: grayscale(1) contrast(1.04);` — cifra stilistica ricorrente.
- Aspect ratio comuni: `3/4` (ritratti), `4/3` su mobile.

---

## 5. Principi guida

1. **Carta, non schermo.** Fondo caldo, neutri caldi, molto spazio bianco.
2. **Un serif con voce + un sans pulito.** Mackinac dà personalità, Mallory
   dà chiarezza. Mai invertirne i ruoli.
3. **Il corsivo è l'enfasi.** Niente grassetto colorato nei titoli: si sottolinea
   con Mackinac italic 400.
4. **Un solo accento.** Terracotta per l'azione; giallo/lilla solo decorativi.
5. **Foto in bianco e nero.** Coerenza visiva su tutte le immagini.
6. **Respiro.** Sezioni generose (100–140px), lettura a 768px, ritmo su base 4px.
7. **Bordi sottili, angoli morbidi.** 1px linee, 1.5px accento, raggi 16–24px.

---

## 6. Quick start per un nuovo prodotto

1. Copia [`design-system/tokens.css`](design-system/tokens.css) e importalo per primo.
2. Includi i font Mackinac e Mallory (o i fallback dichiarati).
3. Usa la scala tipografica della sezione 2 e la spaziatura su base 4px.
4. Applica i pattern di componente della sezione 4.
5. Per design tool / codice non-CSS, usa [`design-system/tokens.json`](design-system/tokens.json).
</content>
</invoke>
