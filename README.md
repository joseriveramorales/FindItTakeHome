# FindIT Homepage Replication

A pixel-perfect replication of the [finditpr.com](https://finditpr.com) homepage built with Next.js, shadcn/ui, and Tailwind CSS.

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
├── blog-section.tsx     # Blog articles grid
├── pueblos-section.tsx  # Cities/towns browser
├── footer.tsx          # Site footer
└── ui/                 # shadcn components
```

Each component is:
- **Self-contained**: Manages its own data and state
- **Well-documented**: Includes comments explaining key features
- **Type-safe**: Uses TypeScript for all props and data structures
- **Consistent**: Follows the same styling patterns

### 3. Desktop-Only Strategy

I deliberately chose desktop-only (1440px) implementation because:
- **Time constraints**: 6-8 hours total development time
- **Quality over quantity**: A polished desktop experience is better than mediocre responsive design
- **Interview preparation**: Easier to explain a well-crafted solution than to debug responsive issues

### 4. Hardcoded Data Strategy

All property listings, blog posts, and city data are hardcoded in components:
- **Faster development**: No backend/API setup needed
- **Easier to review**: Reviewers can see all data inline
- **Production-ready structure**: Easy to replace with API calls later

Example data structure:
```typescript
const properties = [
  {
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
- Cards: `rounded-2xl` (16px) - Softer corners for content
- Pills/Badges: `rounded-full` - Circular badges
- Featured Property: `rounded-t-[250px]` - Unique design element

**Transition Timing:**
- All hover effects: `duration-200` (200ms)
- Consistent `transition-all` for smooth property changes

**Color Application:**
- Primary actions: `bg-findit-blue` (#2A7DE6)
- Hover states: `hover:bg-findit-blue/90` (90% opacity)
- Outlined buttons: `border-findit-blue` + `text-findit-blue`
- Backgrounds: `bg-background-section` (#F5F5F5) for sections

## shadcn/ui Components Used

I installed and utilized the following shadcn components:

| Component | Usage |
|-----------|-------|
| `button` | All CTA buttons, navigation links, form actions |
| `card` | Property cards, blog cards, feature cards, city cards |
| `dropdown-menu` | Navigation dropdowns ("Propiedades", "Profesionales") |
| `tabs` | Property type section, hero search tabs |
| `input` | Search bar in hero section |

All components were customized to match FindIT's brand colors and styling while maintaining shadcn's accessibility features.

## Deviations from Pixel-Perfect

While the implementation closely matches finditpr.com, there are intentional deviations:

### 1. Simplified Footer (Intentional)
- **Live site**: Lists all 156 Puerto Rican municipalities
- **My implementation**: Only 5 major cities (San Juan, Bayamón, Carolina, Ponce, Caguas)
- **Reason**: Per project requirements to simplify implementation

### 2. Gradient Placeholders (Technical)
- **Live site**: Real property images
- **My implementation**: CSS gradient placeholders
- **Reason**: No access to actual images; gradients provide visual interest

### 3. Font Weights (Visual Judgment)
- **Live site**: Custom font weights
- **My implementation**: Standard font weights (400, 500, 600, 700)
- **Reason**: No Figma access; used visual approximation

### 4. Spacing Variations (Acceptable)
- **Live site**: Exact pixel measurements
- **My implementation**: Tailwind's spacing scale (closest match)
- **Reason**: Maintaining Tailwind's design system while staying visually consistent

### 5. Icon Variations (Design Choice)
- **Live site**: Custom icons
- **My implementation**: Lucide React icons (Search, Home, TrendingUp)
- **Reason**: Faster implementation; professional icon library

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

**Reusable property card structure:**
```tsx
{properties.map((property) => (
  <Card key={property.id}>
    <div className="h-48 bg-gradient-to-br from-findit-blue/20 to-purple/20" />
    <div className="p-4">
      <h3>{property.price}</h3>
      {/* ... property details */}
    </div>
  </Card>
))}
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
│   ├── navbar.tsx        # Navigation
│   ├── hero.tsx          # Hero section
│   ├── [other components...]
│   └── ui/               # shadcn components
├── lib/
│   └── utils.ts          # Utility functions
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

1. **Responsive Design**: Mobile and tablet breakpoints
2. **Real Images**: Property photos from a CDN
3. **Animations**: Framer Motion for page transitions
4. **Search Functionality**: Working property search with filters
5. **Map Integration**: Mapbox for property locations
6. **SEO Optimization**: Meta tags, Open Graph, structured data
7. **Analytics**: Track user interactions
8. **Accessibility Audit**: Full WCAG 2.1 AA compliance testing

## Lessons Learned

1. **Tailwind CSS v4 Migration**: New `@theme inline` syntax required adjustment from v3
2. **Design System Extraction**: DevTools is invaluable for extracting exact design tokens
3. **Component Composition**: shadcn's approach to component libraries is excellent for customization
4. **Time Management**: Desktop-only focus allowed for higher quality implementation
5. **Documentation Matters**: Clear README demonstrates code understanding before interviews

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
- [x] Border radius is consistent
- [x] Transitions are consistent (200ms)
- [x] No unused imports or code
- [x] TypeScript types are meaningful
- [x] Comments added for complex logic
- [x] README is comprehensive
- [ ] Deployed to Vercel and tested *(Next step)*

## Contact

Created by Jose Rivera for FindIT take-home project.

---

**Note**: This project is a demonstration of front-end development skills and is not affiliated with or endorsed by FindIT PR.
