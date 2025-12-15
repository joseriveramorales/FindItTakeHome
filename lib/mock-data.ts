/**
 * Centralized mock data for the FindIT application
 * Simulates data structure as if it came from API calls
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface Property {
  id: number;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  location: string;
  propertyType: PropertyType;
  title?: string;
  description?: string;
  imageUrl?: string;
  imageGradient?: string;
  isFeatured?: boolean;
}

export type PropertyType = "Casa" | "Apartamento" | "Terrenos" | "Comercial" | "Condo";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}

export interface Municipality {
  name: string;
  properties: string;
  avgPrice: string;
  imageUrl: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

// ============================================================================
// PROPERTY DATA
// ============================================================================

/**
 * Featured property - prominently displayed on homepage
 */
export const featuredProperty: Property = {
  id: 1,
  price: 275000,
  title: "Haciendas del Real",
  location: "Luquillo",
  bedrooms: 3,
  bathrooms: 2,
  sqft: 2200,
  propertyType: "Casa",
  description: "Hermosa propiedad con vistas espectaculares y acabados de lujo.",
  imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
  isFeatured: true,
};

/**
 * Properties for sale - organized by property type
 */
export const propertiesForSale: Record<PropertyType, Property[]> = {
  Casa: [
    {
      id: 2,
      price: 450000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2500,
      location: "San Juan",
      propertyType: "Casa",
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    },
    {
      id: 3,
      price: 575000,
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3200,
      location: "Dorado",
      propertyType: "Casa",
      imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    },
    {
      id: 4,
      price: 650000,
      bedrooms: 5,
      bathrooms: 4,
      sqft: 4000,
      location: "Bayamón",
      propertyType: "Casa",
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    },
    {
      id: 5,
      price: 380000,
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 2300,
      location: "Ponce",
      propertyType: "Casa",
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    },
  ],
  Apartamento: [
    {
      id: 6,
      price: 325000,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1800,
      location: "Guaynabo",
      propertyType: "Apartamento",
      imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    },
    {
      id: 7,
      price: 395000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2200,
      location: "Caguas",
      propertyType: "Apartamento",
      imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    },
    {
      id: 8,
      price: 275000,
      bedrooms: 2,
      bathrooms: 1,
      sqft: 1500,
      location: "San Juan",
      propertyType: "Apartamento",
      imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    },
    {
      id: 9,
      price: 425000,
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 2100,
      location: "Carolina",
      propertyType: "Apartamento",
      imageUrl: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80",
    },
  ],
  Terrenos: [
    {
      id: 10,
      price: 125000,
      bedrooms: 0,
      bathrooms: 0,
      sqft: 5000,
      location: "Arecibo",
      propertyType: "Terrenos",
      imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    },
    {
      id: 11,
      price: 95000,
      bedrooms: 0,
      bathrooms: 0,
      sqft: 3500,
      location: "Mayagüez",
      propertyType: "Terrenos",
      imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    },
    {
      id: 12,
      price: 180000,
      bedrooms: 0,
      bathrooms: 0,
      sqft: 8000,
      location: "Rincón",
      propertyType: "Terrenos",
      imageUrl: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=800&q=80",
    },
    {
      id: 13,
      price: 225000,
      bedrooms: 0,
      bathrooms: 0,
      sqft: 10000,
      location: "Isabela",
      propertyType: "Terrenos",
      imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    },
  ],
  Comercial: [
    {
      id: 14,
      price: 850000,
      bedrooms: 0,
      bathrooms: 2,
      sqft: 4500,
      location: "San Juan",
      propertyType: "Comercial",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    },
    {
      id: 15,
      price: 1200000,
      bedrooms: 0,
      bathrooms: 3,
      sqft: 6800,
      location: "Guaynabo",
      propertyType: "Comercial",
      imageUrl: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80",
    },
    {
      id: 16,
      price: 675000,
      bedrooms: 0,
      bathrooms: 2,
      sqft: 3200,
      location: "Carolina",
      propertyType: "Comercial",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    },
    {
      id: 17,
      price: 950000,
      bedrooms: 0,
      bathrooms: 4,
      sqft: 5500,
      location: "Bayamón",
      propertyType: "Comercial",
      imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    },
  ],
  Condo: [],
};

/**
 * Properties for rent - with gradient placeholders
 */
export const propertiesForRent: Property[] = [
  {
    id: 18,
    price: 2800,
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1500,
    location: "Carolina",
    propertyType: "Condo",
    imageGradient: "from-orange-400 to-orange-600",
  },
  {
    id: 19,
    price: 3500,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2200,
    location: "Bayamón",
    propertyType: "Casa",
    imageGradient: "from-green-400 to-green-600",
  },
  {
    id: 20,
    price: 2200,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1800,
    location: "Caguas",
    propertyType: "Apartamento",
    imageGradient: "from-pink-400 to-pink-600",
  },
];

// ============================================================================
// BLOG DATA
// ============================================================================

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 consejos para comprar tu primera casa en Puerto Rico",
    excerpt:
      "Descubre los pasos esenciales que debes seguir para hacer una compra inteligente y segura de tu primera propiedad.",
    date: "15 de diciembre, 2024",
    category: "Guías",
    imageUrl: "https://images.finditpr.com/blog-images/posts/e1c21ccb-33b2-4cd5-aa2c-48f22c186b40.jpg",
  },
  {
    id: 2,
    title: "Tendencias del mercado inmobiliario en San Juan",
    excerpt:
      "Análisis detallado de cómo ha evolucionado el mercado en la zona metro y qué esperar para el próximo año.",
    date: "12 de diciembre, 2024",
    category: "Análisis",
    imageUrl: "https://images.finditpr.com/blog-images/posts/f2f8c09e-0f43-4c9d-b6e0-0c1871bee20b.jpg",
  },
  {
    id: 3,
    title: "Cómo preparar tu propiedad para vender más rápido",
    excerpt:
      "Tips profesionales para aumentar el valor de tu propiedad y atraer más compradores potenciales.",
    date: "8 de diciembre, 2024",
    category: "Consejos",
    imageUrl: "https://images.finditpr.com/blog-images/posts/44380ff7-2afc-497f-ad1b-bab6e4870865.jpg",
  },
];

// ============================================================================
// MUNICIPALITY DATA
// ============================================================================

export const municipalities: Municipality[] = [
  {
    name: "Guaynabo",
    properties: "1,245",
    avgPrice: "$325,000",
    imageUrl: "https://dvvjkgh94f2v6.cloudfront.net/735d922b/698875038/83dcefb7.jpeg",
  },
  {
    name: "Carolina",
    properties: "892",
    avgPrice: "$265,000",
    imageUrl: "https://dvvjkgh94f2v6.cloudfront.net/735d922b/703472555/83dcefb7.jpeg",
  },
  {
    name: "Dorado",
    properties: "756",
    avgPrice: "$285,000",
    imageUrl: "https://dvvjkgh94f2v6.cloudfront.net/735d922b/680667453/83dcefb7.jpeg",
  },
  {
    name: "Cabo Rojo",
    properties: "534",
    avgPrice: "$215,000",
    imageUrl: "https://dvvjkgh94f2v6.cloudfront.net/735d922b/701746563/7d65264f.jpeg",
  },
  {
    name: "Toa Alta",
    properties: "487",
    avgPrice: "$235,000",
    imageUrl: "https://dvvjkgh94f2v6.cloudfront.net/735d922b/577066182/83dcefb7.jpeg",
  },
];

// ============================================================================
// FOOTER DATA
// ============================================================================

/**
 * All 78 municipalities in Puerto Rico
 */
export const allMunicipalities: string[] = [
  "Adjuntas", "Aguada", "Aguadilla", "Aibonito", "Añasco", "Arecibo", "Arroyo",
  "Barceloneta", "Barranquitas", "Bayamón", "Cabo Rojo", "Caguas", "Camuy",
  "Canóvanas", "Carolina", "Cataño", "Cayey", "Ceiba", "Ciales", "Cidra",
  "Coamo", "Comerío", "Corozal", "Culebra", "Dorado", "Fajardo", "Florida",
  "Guánica", "Guayama", "Guayanilla", "Guaynabo", "Gurabo", "Hatillo",
  "Hormigueros", "Humacao", "Isabela", "Jayuya", "Juana Díaz", "Juncos",
  "Lajas", "Lares", "Las Marías", "Las Piedras", "Loíza", "Luquillo",
  "Manatí", "Maricao", "Maunabo", "Mayagüez", "Moca", "Morovis", "Naguabo",
  "Naranjito", "Orocovis", "Patillas", "Peñuelas", "Ponce", "Quebradillas",
  "Rincón", "Río Grande", "Sabana Grande", "Salinas", "San Germán", "San Juan",
  "San Lorenzo", "San Sebastián", "Santa Isabel", "Toa Alta", "Toa Baja",
  "Trujillo Alto", "Utuado", "Vega Alta", "Vega Baja", "Vieques", "Villalba",
  "Yabucoa", "Yauco"
];

export const companyLinks: FooterLink[] = [
  { name: "Contáctanos", href: "/contacto" },
  { name: "Términos de Uso", href: "/terminos" },
  { name: "Política de Privacidad", href: "/privacidad" },
  { name: "Mapa del Sitio", href: "/mapa" },
];

export const exploreLinks: FooterLink[] = [
  { name: "Findit Blog", href: "/blog" },
  { name: "Acerca de Nosotros", href: "/acerca" },
];

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Get all properties for sale across all types
 */
export function getAllPropertiesForSale(): Property[] {
  return Object.values(propertiesForSale).flat();
}

/**
 * Get a mixed selection of properties (one from each category)
 */
export function getMixedProperties(): Property[] {
  return [
    propertiesForSale.Casa[0],
    propertiesForSale.Apartamento[0],
    propertiesForSale.Terrenos[0],
    propertiesForSale.Comercial[0],
  ];
}

/**
 * Format price to currency string
 */
export function formatPrice(price: number): string {
  return `$${price.toLocaleString("en-US")}`;
}

/**
 * Format square feet with comma separator
 */
export function formatSqft(sqft: number): string {
  return sqft.toLocaleString("en-US");
}
