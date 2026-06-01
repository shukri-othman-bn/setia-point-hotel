# Setia Point Hotel — Web Sample (Reference)

A single-page static website sample for **Setia Point Hotel & Apartment**, based on the staff PDF design (brown, beige, and light blue palette). This is a **reference layout** for review — not a live booking system.

## Preview

1. Open `index.html` in Chrome, Edge, or Firefox (double-click the file).
2. Or run a local server from this folder:
   ```bash
   python -m http.server 8080
   ```
   Then visit: http://localhost:8080

## Project structure

```
index.html      Main page (all sections)
css/styles.css  Layout and design system
js/main.js      Mobile menu, scroll effects
assets/         Put your logo and real photos here later
```

## Sections (matches staff PDF)

- Hero — welcome and tagline
- About Us — hotel on 6th floor, connected to mall
- Setia Point — integrated destination (Berakas)
- Rooms and Suites — pricing from PDF
- Family Suite — detail and floor plan placeholder
- Facilities and Services
- Event Halls — Munawwarah & Mawwaddah
- Gallery — auto-scrolling photo strips (24 extra photos from staff set)
- Contact — address, phone, hours, map

## Replace before going live

| Item | Current sample | Action |
|------|----------------|--------|
| Email | `reservations@setiapoint.bn` (placeholder) | Set official hotel email |
| Phone | +673 235 1022 | Confirm number |
| Social links | `#` placeholders | Add real Facebook / Instagram URLs |
| Images | Real hotel photos in `assets/images/` (from staff WhatsApp set, Jun 2026) | Replace individual JPGs if higher-res versions available |
| Logo | `assets/logo.png` | Official Setia Point Hotel transparent PNG |
| Hero background | `assets/images/hero-lobby.jpg` | Update in `css/styles.css` if needed |
| Google Maps | Approximate embed | Replace iframe `src` with exact Setia Point coordinates |
| Floor plan | Striped placeholder box | Upload official family suite layout |
| Footer note | “Sample reference site” | Remove when publishing |

## Hosting

**Live site:** [https://shukri-othman-bn.github.io/setia-point-hotel/](https://shukri-othman-bn.github.io/setia-point-hotel/)

**Custom domain (target):** `https://www.setiapoint-hotel.com.bn`

Upload the entire folder to any static host (cPanel, Netlify, GitHub Pages, etc.). No build step required. The `CNAME` file is for GitHub Pages custom domain.

### GitHub Pages + `www.setiapoint-hotel.com.bn`

1. Repo **Settings → Pages → Custom domain** → enter `www.setiapoint-hotel.com.bn` → Save.
2. At your `.com.bn` registrar DNS panel, add:

   | Type | Host / Name | Value |
   |------|-------------|--------|
   | CNAME | `www` | `shukri-othman-bn.github.io` |

3. Optional — root `setiapoint-hotel.com.bn` (no www): four **A** records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (see [GitHub Pages custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
4. Wait for DNS check ✓ in GitHub, then enable **Enforce HTTPS**.
5. Push the `CNAME` file: `git add CNAME && git commit -m "Add custom domain" && git push`
6. QR code URL: `https://www.setiapoint-hotel.com.bn`

## Design colors

- Brown: `#5C4033`, `#3D2B1F`
- Beige: `#F5F0E8`, `#E8DFD0`
- Light blue: `#B8D4E8`, `#7EB8DA`

Fonts load from Google Fonts (Cormorant Garamond + Source Sans 3). Photos and logo are local under `assets/`. Internet is only needed for fonts (and the optional map embed).

### Image assets (from staff PDF)

Photos were extracted from the reference PDF and saved as JPEG in `assets/images/`. The **Shopping Complex** section uses the building exterior from PDF page 2 (`destination-building.jpg`, 1004×1004). Raw extraction files are in `assets/pdf-extract/` (optional to delete before deploy).
