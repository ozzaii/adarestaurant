# Ada Restaurant - Ultra-Luxe Multilingual Website

Premium restaurant website for Ada Restaurant in Uzungöl, featuring an editorial design with Gulf-audience appeal.

## Features

✓ **Multilingual** - EN/TR/AR with full RTL support
✓ **Ultra-luxe design** - Opulent night theme with brass accents
✓ **Premium animations** - Framer Motion with magnetic hovers
✓ **Responsive** - Mobile-first with sticky CTA bar
✓ **Performance optimized** - SSG/ISR, lazy loading, priority hints
✓ **Accessible** - WCAG AA compliant
✓ **SEO ready** - JSON-LD, meta tags, Open Graph

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- next-intl (i18n)

## Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
ada-restaurant/
├── app/
│   ├── [locale]/         # Localized routes
│   │   ├── page.tsx       # Home
│   │   ├── menu/          # Menu with tabs
│   │   ├── gallery/       # Photo gallery
│   │   ├── reservations/  # Contact/booking
│   │   ├── location/      # Map & hours
│   │   └── about/         # About page
│   ├── globals.css        # Design tokens
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
├── messages/              # i18n translations
└── public/               # Static assets
```

## Design System

### Color Tokens
- `--ada-ivory`: #F7F4EF (light canvas)
- `--ada-deep-navy`: #0A1630 (dark canvas, primary)
- `--ada-brass`: #B08D57 (accents, hairlines)
- `--ada-sea-mist`: #BFD3D6 (subtle backgrounds)
- `--ada-pine`: #1E3A34 (sections)

### Typography
- Display: Playfair Display
- Body: Inter
- Arabic: IBM Plex Sans Arabic

### Motion
- Fast: 120ms
- Base: 180ms
- Rich: 240ms
- Easing: cubic-bezier(0.2, 0, 0, 1)

## Adding Content

### Menu Items
Edit `/app/[locale]/menu/page.tsx` - Update the `menuSections` array

### Gallery Images
Edit `/app/[locale]/gallery/page.tsx` - Add to the `images` array

### Translations
Edit `/messages/{locale}.json` files

## Deployment

### Vercel (Recommended)
```bash
vercel
```

### Docker
```bash
docker build -t ada-restaurant .
docker run -p 3000:3000 ada-restaurant
```

## Performance Targets

- Lighthouse Performance: ≥95
- Lighthouse Accessibility: ≥95
- Lighthouse Best Practices: ≥95
- Lighthouse SEO: ≥95

## Browser Support

- Chrome 90+
- Safari 14+
- Firefox 88+
- Edge 90+

## License

© Ada Restaurant. All rights reserved.