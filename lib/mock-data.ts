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
  imageUrls?: string[];
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

export interface FeatureCard {
  iconName: "Search" | "Heart" | "Users";
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  buttonText: string;
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
      imageUrls: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
      ],
    },
    {
      id: 3,
      price: 575000,
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3200,
      location: "Dorado",
      propertyType: "Casa",
      imageUrls: [
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      ],
    },
    {
      id: 4,
      price: 650000,
      bedrooms: 5,
      bathrooms: 4,
      sqft: 4000,
      location: "Bayamón",
      propertyType: "Casa",
      imageUrls: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
      ],
    },
    {
      id: 5,
      price: 380000,
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 2300,
      location: "Ponce",
      propertyType: "Casa",
      imageUrls: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
      ],
    },
    {
      id: 101,
      price: 525000,
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3000,
      location: "Guaynabo",
      propertyType: "Casa",
      imageUrls: [
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
      ],
    },
    {
      id: 102,
      price: 720000,
      bedrooms: 5,
      bathrooms: 3.5,
      sqft: 4200,
      location: "Caguas",
      propertyType: "Casa",
      imageUrls: [
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      ],
    },
    {
      id: 103,
      price: 495000,
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 2800,
      location: "Carolina",
      propertyType: "Casa",
      imageUrls: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      ],
    },
    {
      id: 104,
      price: 615000,
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3500,
      location: "Trujillo Alto",
      propertyType: "Casa",
      imageUrls: [
        "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      ],
    },
    {
      id: 105,
      price: 425000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2400,
      location: "Toa Alta",
      propertyType: "Casa",
      imageUrls: [
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
      ],
    },
    {
      id: 106,
      price: 560000,
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3300,
      location: "Mayagüez",
      propertyType: "Casa",
      imageUrls: [
        "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      ],
    },
    {
      id: 107,
      price: 680000,
      bedrooms: 5,
      bathrooms: 4,
      sqft: 3900,
      location: "Arecibo",
      propertyType: "Casa",
      imageUrls: [
        "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800&q=80",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      ],
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
      imageUrls: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
      ],
    },
    {
      id: 7,
      price: 395000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2200,
      location: "Caguas",
      propertyType: "Apartamento",
      imageUrls: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80",
      ],
    },
    {
      id: 8,
      price: 275000,
      bedrooms: 2,
      bathrooms: 1,
      sqft: 1500,
      location: "San Juan",
      propertyType: "Apartamento",
      imageUrls: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      ],
    },
    {
      id: 9,
      price: 425000,
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 2100,
      location: "Carolina",
      propertyType: "Apartamento",
      imageUrls: [
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
      ],
    },
    {
      id: 201,
      price: 365000,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1900,
      location: "San Juan",
      propertyType: "Apartamento",
      imageUrls: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      ],
    },
    {
      id: 202,
      price: 295000,
      bedrooms: 2,
      bathrooms: 1.5,
      sqft: 1650,
      location: "Bayamón",
      propertyType: "Apartamento",
      imageUrls: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      ],
    },
    {
      id: 203,
      price: 445000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2250,
      location: "Dorado",
      propertyType: "Apartamento",
      imageUrls: [
        "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&q=80",
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      ],
    },
    {
      id: 204,
      price: 315000,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1750,
      location: "Ponce",
      propertyType: "Apartamento",
      imageUrls: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
      ],
    },
    {
      id: 205,
      price: 385000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2050,
      location: "Trujillo Alto",
      propertyType: "Apartamento",
      imageUrls: [
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      ],
    },
    {
      id: 206,
      price: 265000,
      bedrooms: 1,
      bathrooms: 1,
      sqft: 1200,
      location: "Mayagüez",
      propertyType: "Apartamento",
      imageUrls: [
        "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
      ],
    },
    {
      id: 207,
      price: 475000,
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 2350,
      location: "Guaynabo",
      propertyType: "Apartamento",
      imageUrls: [
        "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80",
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      ],
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
      imageUrls: [
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=800&q=80",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
      ],
    },
    {
      id: 11,
      price: 95000,
      bedrooms: 0,
      bathrooms: 0,
      sqft: 3500,
      location: "Mayagüez",
      propertyType: "Terrenos",
      imageUrls: [
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=800&q=80",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
      ],
    },
    {
      id: 12,
      price: 180000,
      bedrooms: 0,
      bathrooms: 0,
      sqft: 8000,
      location: "Rincón",
      propertyType: "Terrenos",
      imageUrls: [
        "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=800&q=80",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=800&q=80",
      ],
    },
    {
      id: 13,
      price: 225000,
      bedrooms: 0,
      bathrooms: 0,
      sqft: 10000,
      location: "Isabela",
      propertyType: "Terrenos",
      imageUrls: [
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=800&q=80",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
      ],
    },
    {
      id: 301,
      price: 150000,
      bedrooms: 0,
      bathrooms: 0,
      sqft: 6500,
      location: "Cabo Rojo",
      propertyType: "Terrenos",
      imageUrls: [
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&q=80",
        "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=800&q=80",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
      ],
    },
    {
      id: 302,
      price: 85000,
      bedrooms: 0,
      bathrooms: 0,
      sqft: 3000,
      location: "Utuado",
      propertyType: "Terrenos",
      imageUrls: [
        "https://images.unsplash.com/photo-1440186347098-386cfda5f424?w=800&q=80",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=800&q=80",
      ],
    },
    {
      id: 303,
      price: 195000,
      bedrooms: 0,
      bathrooms: 0,
      sqft: 8500,
      location: "Aguadilla",
      propertyType: "Terrenos",
      imageUrls: [
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
        "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=800&q=80",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
      ],
    },
    {
      id: 304,
      price: 165000,
      bedrooms: 0,
      bathrooms: 0,
      sqft: 7200,
      location: "Fajardo",
      propertyType: "Terrenos",
      imageUrls: [
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=800&q=80",
      ],
    },
    {
      id: 305,
      price: 135000,
      bedrooms: 0,
      bathrooms: 0,
      sqft: 5500,
      location: "Guánica",
      propertyType: "Terrenos",
      imageUrls: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
        "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=800&q=80",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
      ],
    },
    {
      id: 306,
      price: 210000,
      bedrooms: 0,
      bathrooms: 0,
      sqft: 9500,
      location: "Luquillo",
      propertyType: "Terrenos",
      imageUrls: [
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=800&q=80",
      ],
    },
    {
      id: 307,
      price: 175000,
      bedrooms: 0,
      bathrooms: 0,
      sqft: 7800,
      location: "Vega Baja",
      propertyType: "Terrenos",
      imageUrls: [
        "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80",
        "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=800&q=80",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
      ],
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
      imageUrls: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
        "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      ],
    },
    {
      id: 15,
      price: 1200000,
      bedrooms: 0,
      bathrooms: 3,
      sqft: 6800,
      location: "Guaynabo",
      propertyType: "Comercial",
      imageUrls: [
        "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      ],
    },
    {
      id: 16,
      price: 675000,
      bedrooms: 0,
      bathrooms: 2,
      sqft: 3200,
      location: "Carolina",
      propertyType: "Comercial",
      imageUrls: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
        "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      ],
    },
    {
      id: 17,
      price: 950000,
      bedrooms: 0,
      bathrooms: 4,
      sqft: 5500,
      location: "Bayamón",
      propertyType: "Comercial",
      imageUrls: [
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
        "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80",
      ],
    },
    {
      id: 401,
      price: 775000,
      bedrooms: 0,
      bathrooms: 3,
      sqft: 4200,
      location: "Ponce",
      propertyType: "Comercial",
      imageUrls: [
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
        "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80",
      ],
    },
    {
      id: 402,
      price: 1150000,
      bedrooms: 0,
      bathrooms: 5,
      sqft: 7200,
      location: "Caguas",
      propertyType: "Comercial",
      imageUrls: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      ],
    },
    {
      id: 403,
      price: 625000,
      bedrooms: 0,
      bathrooms: 2,
      sqft: 3500,
      location: "Mayagüez",
      propertyType: "Comercial",
      imageUrls: [
        "https://images.unsplash.com/photo-1524813686514-a57563d77965?w=800&q=80",
        "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      ],
    },
    {
      id: 404,
      price: 890000,
      bedrooms: 0,
      bathrooms: 4,
      sqft: 5000,
      location: "Dorado",
      propertyType: "Comercial",
      imageUrls: [
        "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?w=800&q=80",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      ],
    },
    {
      id: 405,
      price: 1050000,
      bedrooms: 0,
      bathrooms: 5,
      sqft: 6500,
      location: "Trujillo Alto",
      propertyType: "Comercial",
      imageUrls: [
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
        "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      ],
    },
    {
      id: 406,
      price: 725000,
      bedrooms: 0,
      bathrooms: 3,
      sqft: 4000,
      location: "Arecibo",
      propertyType: "Comercial",
      imageUrls: [
        "https://images.unsplash.com/photo-1529408632839-a54952c491e5?w=800&q=80",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      ],
    },
    {
      id: 407,
      price: 985000,
      bedrooms: 0,
      bathrooms: 4,
      sqft: 5800,
      location: "Toa Alta",
      propertyType: "Comercial",
      imageUrls: [
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
        "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80",
      ],
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
// FEATURE CARDS DATA
// ============================================================================

export const featureCards: FeatureCard[] = [
  {
    iconName: "Search",
    iconBg: "rgba(42, 125, 230, 0.1)",
    iconColor: "#2A7DE6",
    title: "Búsqueda avanzada",
    description: "Encuentra tu propiedad ideal con nuestros filtros personalizados y búsqueda inteligente.",
    buttonText: "Explorar propiedades",
  },
  {
    iconName: "Heart",
    iconBg: "rgba(250, 173, 20, 0.1)",
    iconColor: "#FAAD14",
    title: "Favoritos",
    description: "Guarda tus propiedades favoritas y compártelas con quien quieras.",
    buttonText: "Ver favoritos",
  },
  {
    iconName: "Users",
    iconBg: "rgba(82, 196, 26, 0.1)",
    iconColor: "#52C41A",
    title: "Agentes verificados",
    description: "Conecta con agentes profesionales certificados en toda la isla.",
    buttonText: "Conocer agentes",
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
    imageUrl: "https://images.unsplash.com/photo-1642939487851-3fbe8fec4be4?w=800&q=80",
  },
  {
    name: "Carolina",
    properties: "892",
    avgPrice: "$265,000",
    imageUrl: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&q=80",
  },
  {
    name: "Dorado",
    properties: "756",
    avgPrice: "$285,000",
    imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
  },
  {
    name: "Cabo Rojo",
    properties: "534",
    avgPrice: "$215,000",
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
  },
  {
    name: "San Juan",
    properties: "2,156",
    avgPrice: "$425,000",
    imageUrl: "https://images.unsplash.com/photo-1580599991155-8fc4d36ffbb3?w=800&q=80",
  },
  {
    name: "Bayamón",
    properties: "1,534",
    avgPrice: "$295,000",
    imageUrl: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&q=80",
  },
  {
    name: "Trujillo Alto",
    properties: "678",
    avgPrice: "$255,000",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  },
  {
    name: "Toa Alta",
    properties: "487",
    avgPrice: "$235,000",
    imageUrl: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&q=80",
  },
  {
    name: "Ponce",
    properties: "923",
    avgPrice: "$245,000",
    imageUrl: "https://images.unsplash.com/photo-1580599991155-8fc4d36ffbb3?w=800&q=80",
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
