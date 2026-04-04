# WGL Consulting LLC / Ori Company — Website Project Brief
## Filed: April 4, 2026
## Status: Ready for Claude Code

---

## Project Overview

Build a new website for WGL Consulting LLC, operating under the trade name **Ori Company**. The site is a full service consulting landing page focused on medical cannabis, agriculture, indoor horticulture, government compliance, and operations. It also showcases the Dr. Pesos product line and provides direct links to the Ori Corp site and the Ori App.

The site should give every visitor a clear, confident understanding: Ori Company / WGL Consulting is a full service consulting firm specializing in medical cannabis and community development through education.

---

## Brand Identity

**Legal Entity:** WGL Consulting LLC
**Trade Name:** Ori Company
**Tagline:** WGL stands for "We Grow Life"
**Logo Mark:** Spiral "O" symbol — used across all logo variants and icon set

### Color Palette (extracted from logos and brand assets)

| Role | Color | Hex (approximate) | Notes |
|------|-------|--------------------|-------|
| Primary Background | Black | #000000 | Used on all logo badges, site background |
| Primary Accent | Sage Green | #7BC49A | Used on all icons, one logo variant, "We Grow Life" illustration text — this is the main brand color |
| Secondary Accent | Lavender / Purple | #B088CC | Logo variant — use sparingly for callouts or highlights |
| Tertiary Accent | Warm Orange / Copper | #D4925A | Logo variant — use for warmth, earthy tones |
| Text on Dark | White | #FFFFFF | Used on all logo text rings |

**Primary palette recommendation for the website:** Black backgrounds, Sage Green as the hero accent, White text. Use Purple and Orange as selective highlights or section differentiators. This creates a premium, grounded, cannabis and nature forward feel.

### Assets Inventory

**Logos (assets/logos/):**
- `WGLConsultingLogo.png` — WGL Consulting LLC wordmark/logo
- `Ori-Badge01.png` — Ori Company circular badge, black version (outline only)
- `Ori-Badge02.png` — Ori Company circular badge, lavender/purple version
- `Ori-Badge03.png` — Ori Company circular badge, orange/copper version
- `Ori-Badge04.png` — Ori Company circular badge, sage green version ← PRIMARY for web use

**Icons (assets/icons/) — all in sage green with black spiral O:**
- `ORI Icon14.png` — Monitor icon (represents the Ori App / digital products)
- `ORI Icon15.png` — Water drop icon (represents agriculture, cultivation, water)
- `ORI Icon16.png` — Medical cross icon (represents medical cannabis, compliance)
- `ORI Icon18.png` — Cannabis leaf icon (represents the plant / core business)

**Illustrations (assets/illustrations/):**
- `We Grow Life (artwork).png` — vibrant full color cannabis plant on black background. Features lush green, purple, and orange/gold leaves, white clouds at the base, and brown roots with "We Grow Life" banner. Use on Home page hero or About section for visual impact.

---

## Pages (4 at Launch)

### 1. Home
- **Hero:** Full width, black background, "We Grow Life" as the anchor statement. Use the plant illustration or the primary green logo as the hero visual. Strong subheadline establishing Ori Company as a full service medical cannabis consulting firm.
- **Services Overview:** Icon grid using the 4 brand icons (monitor, water drop, medical cross, cannabis leaf) with brief labels and a link to the full Services page
- **Dr. Pesos Featured Section:** Clean callout with brief description of each product and a button linking to each
- **Quick Links:** Ori Corp site and Ori App (Beta)
- **Call to Action:** Direct visitors to Contact

### 2. Services
- Full breakdown of consulting services:
  - Agriculture Consulting
  - Indoor Horticulture (cannabis focused)
  - Government Compliance (ABCA and licensing)
  - Operations Consulting
  - Medical Cannabis specialization
- **Dr. Pesos Product Section (full):**
  - Dr. Pesos Grow Coach AI — live at drpesos-growcoach-ai.vercel.app — describe fully, link with a button
  - Dr. Pesos Indoor Cultivation Guidebook — describe fully, "Coming Soon" or placeholder CTA until sales page is live
- **External Links Section:**
  - Ori Corp (placeholder — domain oricorpdc.com not yet acquired)
  - Ori App Beta — ori-company-app.vercel.app

### 3. About
- Who is WGL Consulting / Ori Company and what "We Grow Life" means
- Mission: community development through education and medical cannabis expertise
- Background: Founded and led by John Che Larracuente — FAA Part 107 certified, Advanced Indoor Horticulture (Oaksterdam University), full stack developer, DC cannabis ecosystem
- Connection to Ori Corp and the broader vision

### 4. Contact
- Contact form: name, email, subject, message
- Business email: wglconsultingdc@gmail.com
- No personal address or phone number on the site

---

## Icon Usage Guide

Use the 4 sage green icons as visual anchors throughout the site:

| Icon | Represents | Suggested Use |
|------|-----------|---------------|
| Monitor + spiral | Digital products / Ori App | Tech and product sections |
| Water drop + spiral | Agriculture, cultivation, water | Services section, horticulture |
| Medical cross + spiral | Medical cannabis, compliance | Compliance and licensing services |
| Cannabis leaf | Core business, the plant | Hero, brand identity moments |

---

## Technical Specifications

| Detail | Info |
|--------|------|
| Deployment | Vercel (soft launch on Vercel domain first) |
| Repository | GitHub under CreationsXJohnC |
| Custom Domain (eventual) | oricorpdc.com (acquired after soft launch review) |
| Framework | Next.js preferred (matches existing Ori App and Dr. Pesos stack) |
| Responsiveness | Fully mobile responsive — required |
| Performance | Lightweight, fast load — no heavy animations or bloat |
| Font suggestion | Clean sans serif — match premium, grounded feel |

---

## Deployment Plan

1. Build and deploy to Vercel domain (e.g., wgl-consulting.vercel.app) for review
2. Che reviews and approves the soft launch
3. Acquire oricorpdc.com
4. Swap oricorpdc.com onto the existing GoDaddy hosted site at www.oricompany.com
5. Build new Ori Corp site from scratch (separate project, later phase)
6. Once Ori Corp site is ready, move oricorpdc.com to Ori Corp — WGL Consulting gets its own domain
7. End state: GoDaddy used for domain registration only

---

## Folder Structure (this project)

```
wgl-consulting-website/
├── PROJECT-BRIEF.md          (this file)
├── assets/
│   ├── logos/                (Ori Company logo variants)
│   ├── icons/                (4 sage green icons)
│   └── illustrations/        (We Grow Life plant illustration)
└── src/                      (Claude Code builds here)
```

---

## What This Site Is NOT

- Not the Ori Corp investor site (separate build, later phase)
- Not the personal portfolio (johnccreations.design)
- Not the Dr. Pesos standalone sales page (Priority 5, separate task)

---

**Entity:** WGL Consulting LLC / Ori Company
**Lane:** WGL Consulting / Ori Company — Priority 3
**Next Step for Claude Code:** Build the site using this brief. Start with the home page. Deploy to Vercel for soft launch review.
**Last Updated:** April 4, 2026
