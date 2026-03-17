# Qvarta Siteform — Astro + Tailwind

## Stack
- **Astro** v4 — static site generator, zero JS by default
- **Tailwind CSS** v3 — utility-first styling
- **Netlify** — recommended hosting with built-in form handling

## Pages
- `/` → Hungarian landing page
- `/en` → English landing page

Language switcher (top-right corner) links between them.

## Setup

```bash
npm install
npm run dev       # localhost:4321
npm run build     # outputs to ./dist
npm run preview   # preview the build locally
```

## Forms
The lead-magnet form uses **Netlify Forms** — zero backend needed.

When you deploy to Netlify:
1. Push the repo to GitHub
2. Connect to Netlify → New site from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. The form (`name="sample-download"`) is detected automatically by Netlify

Form submissions appear in Netlify Dashboard → Forms.

## Fonts
- **Syne** — headings (Google Fonts)
- **DM Sans** — body text (Google Fonts)

## Color palette
| Token          | Value     | Usage                    |
|----------------|-----------|--------------------------|
| `brand`        | `#1a1a1a` | Primary text & dark bg   |
| `brand-accent` | `#C8A96E` | Gold accent, CTAs        |
| `brand-light`  | `#F5F2ED` | Main light background    |
| `brand-mid`    | `#E8E2D9` | Secondary bg sections    |
| `brand-dark`   | `#111111` | Darkest backgrounds      |

## Structure
```
src/
  components/
    Hero.astro          ← Hero section
    PainPoints.astro    ← 3 pain point cards
    HowItWorks.astro    ← 3-step process
    Services.astro      ← Deliverables cards
    Pricing.astro       ← 3 pricing plans
    LeadForm.astro      ← Email capture + download
    About.astro         ← Company bio
    FAQ.astro           ← Accordion FAQ
    ClosingCTA.astro    ← Final CTA + footer
  layouts/
    BaseLayout.astro    ← HTML shell + lang switcher
  pages/
    index.astro         ← HU page
    en/index.astro      ← EN page
  styles/
    global.css          ← Font imports + Tailwind + base styles
```

## Customisation tips
- **Booking link**: Replace `#contact` hrefs with your Calendly/Cal.com URL
- **Download asset**: Replace the LeadForm to link to your actual PDF or trigger an email automation
- **Images**: Currently pulling from the Webflow CDN. Self-host in `public/` for production
- **Pricing**: Update in each page's `<Pricing>` props
