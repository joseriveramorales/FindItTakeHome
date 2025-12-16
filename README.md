# FindIT Homepage Replication

A replication of the [finditpr.com](https://finditpr.com) homepage built with Next.js, shadcn/ui, and Tailwind CSS.

## Live Demo

🔗 [View Live Demo](#) *(Deployment URL will be added after Vercel deployment)*

## Project Overview

This project is a take-home assignment that replicates the FindIT Puerto Rico real estate platform homepage. The goal was to demonstrate proficiency in modern web development technologies while maintaining high code quality and design consistency.

### Why I Chose the Homepage

I chose to replicate the FindIT homepage for several strategic reasons:

1. **Comprehensive Feature Set**: The homepage showcases a wide variety of UI patterns - navigation menus, search interfaces, property cards, tabbed content, promotional sections, and more. This demonstrates versatility in component development.

2. **Real-World Complexity**: Unlike simpler pages, the homepage includes realistic features like dropdown menus, dynamic tabs, card grids, and complex layouts that mirror production-level requirements.

3. **Design System Opportunities**: The consistent use of brand colors, spacing, and typography throughout the page allowed me to extract and implement a cohesive design system, showcasing systematic thinking.

4. **User-Facing Impact**: The homepage is the first impression for users and the most critical page for business success, making it the most valuable page to perfect.

## Thought Process & Key Decisions

### 1. Design System First Approach

Before writing any component code, I:
- Used browser DevTools to extract exact color values from finditpr.com
- Identified border radius patterns (16px for cards, 24px for buttons)
- Documented spacing and typography scales
- Configured these values in `tailwind.config.ts` and `app/globals.css`

This ensured consistency from the start rather than refactoring later.

### 2. Component Architecture

I structured components following Next.js App Router best practices:

```
components/
├── navbar.tsx           # Top navigation with dropdowns
├── hero.tsx            # Hero section with search
├── featured-property.tsx # Unique featured card design
├── property-cards.tsx   # Property grid section
├── property-type-section.tsx # Tabbed property browser
├── feature-cards.tsx    # Platform benefits cards
├── agent-promo.tsx      # Agent/services promotional sections
├── media-mentions.tsx   # Media logos section
├── blog-section.tsx     # Blog articles grid
├── pueblos-section.tsx  # Cities/towns browser
├── footer.tsx          # Site footer
└── ui/                 # shadcn components
lib/
└── mock-data.ts        # Centralized data structures with TypeScript types
```

Each component is:
- **Self-contained**: Manages its own data and state
- **Well-documented**: Includes comments explaining key features
- **Type-safe**: Uses TypeScript for all props and data structures
- **Consistent**: Follows the same styling patterns

**Data Architecture:**
All hardcoded data (properties, media mentions, cities) is centralized in `lib/mock-data.ts` with TypeScript interfaces:
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

export const properties: Property[] = [...];
```
This centralized approach makes it easy to replace with API calls in the future.

### 3. Desktop-Only Strategy

I deliberately chose desktop-only (1440px) implementation because:
- **Time constraints**: 6-8 hours total development time
- **Quality over quantity**: A polished desktop experience is better than mediocre responsive design
- **Interview preparation**: Easier to explain a well-crafted solution than to debug responsive issues

### 4. Hardcoded Data Strategy

All property listings, blog posts, and city data are centralized in `lib/mock-data.ts`:
- **Faster development**: No backend/API setup needed
- **Centralized management**: Single source of truth for all data
- **Type-safe**: TypeScript interfaces ensure data consistency
- **Production-ready structure**: Easy to replace with API calls later

Example data structure:
```typescript
// lib/mock-data.ts
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

export const properties: Property[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/...",
    price: "$350,000",
    beds: 4,
    baths: 3,
    sqft: "2,500",
    location: "San Juan, PR",
    type: "Casa",
  },
  // ... more properties
];
```

### 5. Styling Consistency Decisions

**Border Radius System:**
- Buttons: `rounded-3xl` (24px) - Pill-shaped for CTAs
- Property Cards: `rounded-[250px]` (250px curved top) - Matches featured property design
- Featured Property: `rounded-t-[250px]` - Signature curved design element
- Pills/Badges: `rounded-full` - Circular badges
- Media logos: `rounded-lg` (8px) - Subtle corners

**Transition Timing:**
- All hover effects: `duration-200` (200ms)
- Consistent `transition-all` for smooth property changes

**Color Application:**
- Primary actions: `bg-findit-blue` (#2A7DE6)
- Hover states: `hover:bg-findit-blue/90` (90% opacity)
- Outlined buttons: `border-findit-blue` + `text-findit-blue`
- Backgrounds: `bg-background-section` (#F5F5F5) for sections

**Responsive Breakpoints:**
- Featured property hidden at `xl` and below using `hidden xl:block`
- Ensures proper layout at specific screen sizes

## shadcn/ui Components Used

I installed and utilized the following shadcn components:

| Component | Usage |
|-----------|-------|
| `button` | All CTA buttons, navigation links, form actions |
| `card` | Property cards, blog cards, feature cards, city cards |
| `dropdown-menu` | Navigation dropdowns ("Propiedades", "Profesionales") |
| `tabs` | Property type section, hero search tabs |
| `input` | Search bar in hero section |
| `popover` | Property type multi-select dropdown (Todas, Casas, Apartamentos, Terrenos) |
| `checkbox` | Multi-select options within property type filter |

All components were customized to match FindIT's brand colors and styling while maintaining shadcn's accessibility features.

## Deviations from Pixel-Perfect

While the implementation closely matches finditpr.com, there are intentional deviations:

### 1. Font Weights (Visual Judgment)
- **Live site**: Custom font weights
- **My implementation**: Standard font weights (400, 500, 600, 700)
- **Reason**: No Figma access; used visual approximation

### 2. Spacing Variations (Acceptable)
- **Live site**: Exact pixel measurements
- **My implementation**: Tailwind's spacing scale (closest match)
- **Reason**: Maintaining Tailwind's design system while staying visually consistent

### 3. Icon Variations (Design Choice)
- **Live site**: Custom icons
- **My implementation**: Lucide React icons (Search, Home, TrendingUp, Bed, Bath, Maximize)
- **Reason**: Faster implementation; professional icon library

## Enhanced Features Beyond Reference

Several features were added or enhanced beyond the original finditpr.com design:

### 1. Real Property Images
- **Implementation**: Integrated real images from finditpr.com and Unsplash
- **Benefit**: More realistic visual presentation compared to gradient placeholders

### 2. Media Mentions Section
- **Implementation**: Added `media-mentions.tsx` component with actual media logos
- **Benefit**: Builds credibility and trust with recognizable brands

### 3. Complete Footer with All 78 Municipalities
- **Implementation**: Expandable footer with "Ver más" functionality to show all Puerto Rican municipalities
- **Benefit**: Comprehensive location coverage while maintaining clean initial view

### 4. Advanced Property Type Filtering
- **Implementation**: Popover-based multi-select dropdown with checkboxes
- **Options**: Todas (all), Casas, Apartamentos, Terrenos
- **Benefit**: More intuitive filtering than basic tabs

### 5. "Todos" Tab with Mixed Property Types
- **Implementation**: Tab showing combination of all property types
- **Benefit**: Users can see variety at a glance

### 6. Curved Property Cards
- **Implementation**: All property cards use 250px border-radius to match featured property
- **Benefit**: Consistent, distinctive visual identity throughout

### 7. Responsive Featured Property Display
- **Implementation**: Featured property hidden at `xl` breakpoint and below
- **Benefit**: Better layout adaptation for different screen sizes

### 8. Centralized Data Architecture
- **Implementation**: `lib/mock-data.ts` with TypeScript interfaces
- **Benefit**: Single source of truth, easier maintenance, type safety

## Technical Implementation Highlights

### Design System Configuration

**Tailwind CSS v4 with CSS-first config:**
```css
@theme inline {
  --color-findit-blue: #2A7DE6;
  --color-text-primary: rgba(0, 0, 0, 0.88);
  --color-bg-section: #F5F5F5;
  /* ... more design tokens */
}
```

### Component Patterns

**Consistent hover effects:**
```tsx
<Card className="shadow-sm transition-all duration-200 hover:shadow-md">
```

**Reusable property card structure with curved borders:**
```tsx
{properties.map((property) => (
  <Card key={property.id} className="overflow-hidden rounded-[250px]">
    <img src={property.image} alt={property.location} className="h-48 w-full object-cover" />
    <div className="p-4">
      <h3 className="text-2xl font-bold">{property.price}</h3>
      <div className="mt-2 flex gap-4 text-sm text-text-secondary">
        <span className="flex items-center gap-1">
          <Bed className="h-4 w-4" />
          {property.beds}
        </span>
        <span className="flex items-center gap-1">
          <Bath className="h-4 w-4" />
          {property.baths}
        </span>
        <span className="flex items-center gap-1">
          <Maximize className="h-4 w-4" />
          {property.sqft} sqft
        </span>
      </div>
    </div>
  </Card>
))}
```

**Property type filter with Popover:**
```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Todas las propiedades</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-2">
      {["Todas", "Casas", "Apartamentos", "Terrenos"].map((type) => (
        <div key={type} className="flex items-center space-x-2">
          <Checkbox id={type} />
          <label htmlFor={type}>{type}</label>
        </div>
      ))}
    </div>
  </PopoverContent>
</Popover>
```

**Expandable footer for municipalities:**
```tsx
const [showAll, setShowAll] = useState(false);
const displayedCities = showAll ? allMunicipalities : allMunicipalities.slice(0, 10);

return (
  <>
    <div className="grid grid-cols-5 gap-4">
      {displayedCities.map((city) => (
        <Link key={city} href={`/buscar/${city}`}>{city}</Link>
      ))}
    </div>
    <Button onClick={() => setShowAll(!showAll)}>
      {showAll ? "Ver menos" : "Ver más"}
    </Button>
  </>
);
```

### Code Quality Measures

1. **TypeScript strict mode**: Type safety for all components
2. **Consistent naming**: BEM-inspired class organization
3. **Comments**: Complex sections documented inline
4. **No unused code**: Clean imports, no dead code
5. **Accessibility**: Semantic HTML, proper ARIA attributes from shadcn

## Setup & Run Instructions

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd FindItTakeHome
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

The production build will be available at http://localhost:3000

## Project Structure

```
FindItTakeHome/
├── app/
│   ├── page.tsx          # Main homepage
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles + design tokens
├── components/
│   ├── navbar.tsx        # Navigation with dropdowns
│   ├── hero.tsx          # Hero section with search
│   ├── featured-property.tsx # Curved featured card
│   ├── property-cards.tsx # Property grid
│   ├── property-type-section.tsx # Tabbed property browser with filter
│   ├── feature-cards.tsx # Platform benefits
│   ├── agent-promo.tsx   # Agent/services promos
│   ├── media-mentions.tsx # Media logos section
│   ├── blog-section.tsx  # Blog grid
│   ├── pueblos-section.tsx # Cities browser
│   ├── footer.tsx        # Expandable footer (78 municipalities)
│   └── ui/               # shadcn components
│       ├── button.tsx
│       ├── card.tsx
│       ├── dropdown-menu.tsx
│       ├── tabs.tsx
│       ├── input.tsx
│       ├── popover.tsx
│       └── checkbox.tsx
├── lib/
│   ├── utils.ts          # Utility functions
│   └── mock-data.ts      # Centralized data with TypeScript types
├── public/               # Static assets
└── [config files...]
```

## Design System Documentation

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `findit-blue` | #2A7DE6 | Primary brand color |
| `findit-gold` | #FAAD14 | Accent (badges) |
| `findit-green` | #52C41A | Success states |
| `findit-purple` | #9254DE | Secondary accent |
| `text-primary` | rgba(0,0,0,0.88) | Headings, primary text |
| `text-secondary` | rgba(0,0,0,0.65) | Body text, descriptions |

### Typography

- **Headings**: Bold (700), text-primary
- **Body**: Regular (400), text-secondary
- **Buttons**: Medium (500), white on blue

### Spacing

Follows Tailwind's spacing scale with common values:
- Section padding: `py-16` (4rem)
- Card padding: `p-6` (1.5rem)
- Grid gaps: `gap-8` (2rem) for main grids, `gap-4` (1rem) for tight layouts

## Performance Considerations

- **Static Generation**: All pages pre-rendered at build time
- **Optimized Images**: Using gradient placeholders (no image loading overhead)
- **Minimal JavaScript**: Server components where possible
- **CSS-first**: Tailwind JIT compilation for minimal CSS bundle

## Future Enhancements

If I had more time, I would add:

1. **Full Responsive Design**: Comprehensive mobile and tablet breakpoints
2. **Animations**: Framer Motion for page transitions and property card reveals
3. **Search Functionality**: Working property search with filters and map integration
4. **Map Integration**: Mapbox for property locations and interactive browsing
5. **SEO Optimization**: Meta tags, Open Graph, structured data
6. **Analytics**: Track user interactions and property views
7. **Accessibility Audit**: Full WCAG 2.1 AA compliance testing
8. **Image Optimization**: Next.js Image component with lazy loading
9. **API Integration**: Replace mock data with real backend endpoints
10. **User Accounts**: Save favorites, search history, and preferences

## Lessons Learned

1. **Tailwind CSS v4 Migration**: New `@theme inline` syntax required adjustment from v3
2. **Design System Extraction**: DevTools is invaluable for extracting exact design tokens
3. **Component Composition**: shadcn's approach to component libraries is excellent for customization
4. **Centralized Data Management**: Single `mock-data.ts` file improved maintainability significantly
5. **Curved Border Consistency**: Applying 250px border-radius across all property cards created distinctive visual identity
6. **Real Images Over Placeholders**: Integrating actual images from finditpr.com and Unsplash dramatically improved visual quality
7. **Expandable Patterns**: "Ver más" footer pattern provides comprehensive data without overwhelming initial view
8. **Multi-select Filters**: Popover + Checkbox combination offers better UX than simple tabs
9. **Time Management**: Strategic feature prioritization allowed for higher quality implementation
10. **Documentation Matters**: Clear README demonstrates code understanding before interviews

## Technologies Used

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## Code Review Checklist

- [x] Can explain every component in detail
- [x] All colors match finditpr.com
- [x] Border radius is consistent (250px curved cards)
- [x] Transitions are consistent (200ms)
- [x] No unused imports or code
- [x] TypeScript types are meaningful
- [x] Centralized data in lib/mock-data.ts
- [x] Real images from finditpr.com and Unsplash
- [x] Media mentions section implemented
- [x] Footer expanded to all 78 municipalities
- [x] Property type multi-select filter working
- [x] "Todos" tab showing mixed property types
- [x] Responsive featured property display
- [x] Comments added for complex logic
- [x] README is comprehensive
- [ ] Deployed to Vercel and tested *(Next step)*

## Contact

Created by Jose Rivera for FindIT take-home project.

---

**Note**: This project is a demonstration of front-end development skills and is not affiliated with or endorsed by FindIT PR.
