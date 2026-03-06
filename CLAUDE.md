# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page 30th Anniversary Tutor Time Indonesia (berdiri 1996). Single-page website celebratory + marketing CTA via WhatsApp.

## Tech Stack

- **Framework:** Nuxt 4 (`app/` directory sebagai srcDir)
- **Styling:** UnoCSS dengan `presetWind3` (Tailwind-compatible)
- **Typography:** Zabal (local font, `public/fonts/`) + Dosis (Google Fonts via `presetWebFonts`)
- **Package Manager:** pnpm

## Commands

```bash
pnpm dev          # Dev server
pnpm build        # Production build
pnpm generate     # Static site generation
pnpm preview      # Preview production build
pnpm typecheck    # TypeScript check
```

## Architecture

```
app/
  app.vue                    # Root — renders NuxtPage
  pages/index.vue            # Landing page — composes all sections
  components/
    SectionHero.vue          # Hero: 30th logo, tagline, floating bubbles
    SectionStory.vue         # History: narrative, animated counters, timeline
    SectionPrograms.vue      # 6 program cards (MiniMe → Kindergarten)
    SectionTrust.vue         # 5 value propositions
    SectionCenters.vue       # 7 location cards + WhatsApp CTA per center
    SectionAlumni.vue        # Alumni stats, quote
    SectionFooter.vue        # CTA final + footer with social links
  composables/
    useCountUp.ts            # Animated number counter (IntersectionObserver)
    useScrollReveal.ts       # Scroll-triggered reveal animation
  assets/css/
    fonts.css                # @font-face for Zabal, base styles
```

## Design System

### Colors (defined in `uno.config.ts`)
| Token | Hex | Source |
|-------|-----|--------|
| `sky` | `#89CFF0` | 30th logo "3" |
| `rose` | `#D44B6D` | 30th logo "0" |
| `leaf` | `#9AB973` | 30th logo "TH" |
| `sunshine` | `#F8D34F` | Tutor Time logo circle |
| `tt-red` | `#E23741` | Tutor Time text |
| `tt-cream` | `#FEF6E4` | Section bg alternate |
| `tt-warm` | `#FFF9F0` | Section bg warm white |

### UnoCSS Shortcuts
- `section-container` — max-width + horizontal padding
- `section-padding` — vertical padding responsive
- `heading-display` — Zabal bold
- `heading-sub` — Dosis semibold
- `body-text` — Dosis regular relaxed
- `card-base` — rounded-3xl padded with transition
- `btn-wa` — green WhatsApp button style

## Brand Context

- **Tagline:** "30 Years of Little Steps: Built on Experience, Guided by Care"
- 7 centers: Kemang, Pondok Indah, Pluit, Kelapa Gading, Intercon, Serpong, Bandung
- Target: anak 6 bulan - 6 tahun
- 5,000+ alumni

## Notes

- **Font Zabal:** Belum ada file font — perlu ditambahkan ke `public/fonts/` (Zabal-Regular.woff2, Zabal-Bold.woff2)
- **WhatsApp numbers:** Menggunakan placeholder — perlu diganti nomor asli per center di `SectionCenters.vue` dan `SectionFooter.vue`
- **Favicon:** Perlu ditambahkan `public/favicon.png`
- `docs/` berisi brand assets dan copy deck asli — referensi, bukan source code
