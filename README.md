# FindIT Homepage Replication

A replication of the [finditpr.com](https://finditpr.com) homepage built with Next.js, shadcn/ui, and Tailwind CSS.

🔗 **[View Live Demo](https://find-it-take-home.vercel.app)**

## Project Overview

This take-home assignment replicates the FindIT Puerto Rico real estate platform homepage, demonstrating proficiency in modern web development while maintaining high code quality and design consistency.

### Why the Homepage?

I chose the homepage because it offers:
- **Comprehensive feature set** with varied UI patterns (navigation, search, cards, tabs)
- **Real-world complexity** mirroring production requirements
- **Design system opportunities** with consistent colors, spacing, and typography
- **High business impact** as the user's first impression

## Key Technical Decisions

### 1. Design System First
Extracted exact design tokens from finditpr.com using DevTools before coding:
- Colors, border radius patterns, spacing scales
- Configured in `tailwind.config.ts` and `app/globals.css`
- Ensured consistency from the start

### 2. Component Architecture
```
components/
├── navbar.tsx, hero.tsx, footer.tsx
├── property-cards.tsx, property-type-section.tsx
├── feature-cards.tsx, blog-section.tsx
└── ui/ (shadcn components)
lib/
└── mock-data.ts  # Centralized TypeScript data
```

All components are self-contained, type-safe, and well-documented.

### 3. Centralized Data
All data in `lib/mock-data.ts` with TypeScript interfaces:
```typescript
export interface Property {
  id: string;
  image: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  location: string;
  type: "Casa" | "Apartamento" | "Terreno";
}
```
Easy to replace with API calls in the future.

### 4. Desktop-First Strategy
Focused on polished desktop experience (1440px) due to time constraints. Quality over quantity.

## shadcn/ui Components

| Component | Usage |
|-----------|-------|
| `button` | CTAs, navigation, form actions |
| `card` | Property, blog, feature, city cards |
| `dropdown-menu` | Navigation dropdowns |
| `tabs` | Property type section, hero search |
| `input` | Search bar |
| `popover` | Property type multi-select filter |
| `checkbox` | Multi-select options |

## Enhanced Features

Beyond the original finditpr.com:
1. **Real images** from finditpr.com and Unsplash
2. **Media mentions section** with actual logos
3. **Complete footer** with all 78 Puerto Rican municipalities (expandable)
4. **Advanced filtering** with Popover + Checkbox multi-select
5. **Curved property cards** (250px border-radius) matching featured property
6. **"Todos" tab** showing mixed property types

## Design System

### Colors
- Primary: `#2A7DE6` (findit-blue)
- Text: `rgba(0,0,0,0.88)` primary, `rgba(0,0,0,0.65)` secondary
- Background: `#F5F5F5` for sections

### Border Radius
- Buttons: `24px` (pill-shaped)
- Property cards: `250px` curved top
- Icons/badges: `rounded-full`

### Transitions
- All hover effects: `200ms` for consistency

## Setup & Run

```bash
# Clone and install
git clone <repository-url>
cd FindItTakeHome
npm install

# Development
npm run dev
# Open http://localhost:3000

# Production
npm run build
npm run start
```

**Prerequisites**: Node.js 18+

## Project Structure

```
FindItTakeHome/
├── app/
│   ├── page.tsx         # Main homepage
│   ├── layout.tsx       # Root layout
│   └── globals.css      # Design tokens
├── components/
│   ├── [11 page components]
│   └── ui/              # shadcn components
├── lib/
│   ├── utils.ts
│   └── mock-data.ts     # Centralized data
└── public/
```

## Technologies

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## Intentional Deviations

1. **Font weights**: Standard weights (400-700) vs custom weights (no Figma access)
2. **Spacing**: Tailwind scale vs exact pixels (maintaining design system)
3. **Icons**: Lucide React vs custom icons (faster implementation)

## Future Enhancements

Given more time:
- Full responsive design (mobile/tablet)
- Framer Motion animations
- Working search with filters
- Map integration (Mapbox)
- SEO optimization
- API integration

## Key Learnings

1. Tailwind CSS v4's `@theme inline` syntax
2. DevTools for design token extraction
3. shadcn's component customization approach
4. Centralized data management benefits
5. Strategic feature prioritization for quality

---

**Created by Jose Rivera** for FindIT take-home project.

*This is a demonstration project not affiliated with FindIT PR.*
