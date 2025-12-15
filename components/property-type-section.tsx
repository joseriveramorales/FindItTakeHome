"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bed, Bath, Maximize2, MapPin } from "lucide-react";
import Image from "next/image";

// Hardcoded property data organized by type
const propertyData = {
  Casa: [
    {
      id: 1,
      price: 450000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2500,
      location: "San Juan",
      propertyType: "Casa",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    },
    {
      id: 2,
      price: 575000,
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3200,
      location: "Dorado",
      propertyType: "Casa",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    },
    {
      id: 3,
      price: 650000,
      bedrooms: 5,
      bathrooms: 4,
      sqft: 4000,
      location: "Bayamón",
      propertyType: "Casa",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    },
    {
      id: 4,
      price: 380000,
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 2300,
      location: "Ponce",
      propertyType: "Casa",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    },
  ],
  Apartamento: [
    {
      id: 5,
      price: 325000,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1800,
      location: "Guaynabo",
      propertyType: "Apartamento",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    },
    {
      id: 6,
      price: 395000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2200,
      location: "Caguas",
      propertyType: "Apartamento",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    },
    {
      id: 7,
      price: 275000,
      bedrooms: 2,
      bathrooms: 1,
      sqft: 1500,
      location: "San Juan",
      propertyType: "Apartamento",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    },
    {
      id: 8,
      price: 425000,
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 2100,
      location: "Carolina",
      propertyType: "Apartamento",
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80",
    },
  ],
  Terrenos: [
    {
      id: 13,
      price: 125000,
      bedrooms: 0,
      bathrooms: 0,
      sqft: 5000,
      location: "Arecibo",
      propertyType: "Terrenos",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    },
    {
      id: 14,
      price: 95000,
      bedrooms: 0,
      bathrooms: 0,
      sqft: 3500,
      location: "Mayagüez",
      propertyType: "Terrenos",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    },
    {
      id: 15,
      price: 180000,
      bedrooms: 0,
      bathrooms: 0,
      sqft: 8000,
      location: "Rincón",
      propertyType: "Terrenos",
      image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=800&q=80",
    },
    {
      id: 16,
      price: 225000,
      bedrooms: 0,
      bathrooms: 0,
      sqft: 10000,
      location: "Isabela",
      propertyType: "Terrenos",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    },
  ],
  Comercial: [
    {
      id: 17,
      price: 850000,
      bedrooms: 0,
      bathrooms: 2,
      sqft: 4500,
      location: "San Juan",
      propertyType: "Comercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    },
    {
      id: 18,
      price: 1200000,
      bedrooms: 0,
      bathrooms: 3,
      sqft: 6800,
      location: "Guaynabo",
      propertyType: "Comercial",
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80",
    },
    {
      id: 19,
      price: 675000,
      bedrooms: 0,
      bathrooms: 2,
      sqft: 3200,
      location: "Carolina",
      propertyType: "Comercial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    },
    {
      id: 20,
      price: 950000,
      bedrooms: 0,
      bathrooms: 4,
      sqft: 5500,
      location: "Bayamón",
      propertyType: "Comercial",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    },
  ],
};

// Mixed properties for "Todos" tab - one from each category
const todosProperties = [
  propertyData.Casa[0],       // Casa in San Juan
  propertyData.Apartamento[0], // Apartamento in Guaynabo
  propertyData.Terrenos[0],    // Terrenos in Arecibo
  propertyData.Comercial[0],   // Comercial in San Juan
];

// Format price to currency string
function formatPrice(price: number): string {
  return `$${price.toLocaleString("en-US")}`;
}

// Format square feet with comma separator
function formatSqft(sqft: number): string {
  return sqft.toLocaleString("en-US");
}

// Property card component
function PropertyCard({ property }: { property: typeof propertyData.Casa[0] }) {
  return (
    <Card
      className="group border-[1px] p-0 shadow-sm hover:shadow-lg"
      style={{
        borderRadius: "250px 250px var(--radius-card) var(--radius-card)",
        borderColor: "var(--border-primary)",
        transition: "all 200ms",
        overflow: "hidden",
      }}
    >
      {/* Property Image with curved border radius */}
      <div
        className="relative h-[220px] w-full"
        style={{
          borderRadius: "250px 250px var(--radius-card) var(--radius-card)",
          overflow: "hidden"
        }}
      >
        <Image
          src={property.image}
          alt={`${property.propertyType} in ${property.location}`}
          fill
          className="object-cover"
          sizes="(max-width: 1440px) 25vw, 350px"
        />
        {/* Property Type Badge */}
        <div
          className="absolute left-4 top-4 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
          style={{
            borderRadius: "var(--radius-button)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          {property.propertyType}
        </div>
      </div>

      {/* Property Details */}
      <div className="p-5">
        {/* Price */}
        <div className="mb-4">
          <p className="text-[32px] font-bold leading-tight" style={{ color: "var(--text-primary)" }}>
            {formatPrice(property.price)}
          </p>
        </div>

        {/* Property Features - Only show if applicable */}
        {(property.bedrooms > 0 || property.bathrooms > 0) && (
          <div className="mb-4 flex items-center gap-4">
            {/* Bedrooms */}
            {property.bedrooms > 0 && (
              <div className="flex items-center gap-1.5">
                <Bed className="h-4 w-4" style={{ color: "var(--text-secondary)" }} />
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {property.bedrooms} hab
                </span>
              </div>
            )}

            {/* Bathrooms */}
            {property.bathrooms > 0 && (
              <div className="flex items-center gap-1.5">
                <Bath className="h-4 w-4" style={{ color: "var(--text-secondary)" }} />
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {property.bathrooms} baños
                </span>
              </div>
            )}

            {/* Square Feet */}
            <div className="flex items-center gap-1.5">
              <Maximize2 className="h-4 w-4" style={{ color: "var(--text-secondary)" }} />
              <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {formatSqft(property.sqft)} sqft
              </span>
            </div>
          </div>
        )}

        {/* Location */}
        <div className="flex items-center gap-1.5">
          <MapPin className="h-4 w-4" style={{ color: "var(--text-secondary)" }} />
          <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
            {property.location}, PR
          </span>
        </div>
      </div>
    </Card>
  );
}

export default function PropertyTypeSection() {
  return (
    <section className="w-full py-20" style={{ backgroundColor: "var(--bg-section)" }}>
      <div className="mx-auto max-w-[1440px] px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-[32px] font-bold leading-tight" style={{ color: "var(--text-primary)" }}>
            ¿En qué tipo de propiedad estás interesado?
          </h2>
        </div>

        {/* Property Type Tabs */}
        <Tabs defaultValue="Todos" className="w-full">
          <TabsList
            className="mb-8 inline-flex h-auto gap-2 bg-transparent p-0"
            style={{ borderBottom: "1px solid var(--border-light)" }}
          >
            <TabsTrigger
              value="Todos"
              className="rounded-t-lg border-b-2 border-transparent px-6 py-3 text-base font-medium data-[state=active]:border-findit-blue data-[state=active]:bg-white data-[state=active]:text-findit-blue"
              style={{
                color: "var(--text-secondary)",
                transition: "all 200ms",
              }}
            >
              Todos
            </TabsTrigger>
            <TabsTrigger
              value="Casa"
              className="rounded-t-lg border-b-2 border-transparent px-6 py-3 text-base font-medium data-[state=active]:border-findit-blue data-[state=active]:bg-white data-[state=active]:text-findit-blue"
              style={{
                color: "var(--text-secondary)",
                transition: "all 200ms",
              }}
            >
              Casa
            </TabsTrigger>
            <TabsTrigger
              value="Apartamento"
              className="rounded-t-lg border-b-2 border-transparent px-6 py-3 text-base font-medium data-[state=active]:border-findit-blue data-[state=active]:bg-white data-[state=active]:text-findit-blue"
              style={{
                color: "var(--text-secondary)",
                transition: "all 200ms",
              }}
            >
              Apartamento
            </TabsTrigger>
            <TabsTrigger
              value="Terrenos"
              className="rounded-t-lg border-b-2 border-transparent px-6 py-3 text-base font-medium data-[state=active]:border-findit-blue data-[state=active]:bg-white data-[state=active]:text-findit-blue"
              style={{
                color: "var(--text-secondary)",
                transition: "all 200ms",
              }}
            >
              Terrenos
            </TabsTrigger>
            <TabsTrigger
              value="Comercial"
              className="rounded-t-lg border-b-2 border-transparent px-6 py-3 text-base font-medium data-[state=active]:border-findit-blue data-[state=active]:bg-white data-[state=active]:text-findit-blue"
              style={{
                color: "var(--text-secondary)",
                transition: "all 200ms",
              }}
            >
              Comercial
            </TabsTrigger>
          </TabsList>

          {/* Todos Tab Content - Mixed properties from all categories */}
          <TabsContent value="Todos" className="mt-0">
            <div className="grid grid-cols-4 gap-6">
              {todosProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </TabsContent>

          {/* Casa Tab Content */}
          <TabsContent value="Casa" className="mt-0">
            <div className="grid grid-cols-4 gap-6">
              {propertyData.Casa.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </TabsContent>

          {/* Apartamento Tab Content */}
          <TabsContent value="Apartamento" className="mt-0">
            <div className="grid grid-cols-4 gap-6">
              {propertyData.Apartamento.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </TabsContent>

          {/* Terrenos Tab Content */}
          <TabsContent value="Terrenos" className="mt-0">
            <div className="grid grid-cols-4 gap-6">
              {propertyData.Terrenos.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </TabsContent>

          {/* Comercial Tab Content */}
          <TabsContent value="Comercial" className="mt-0">
            <div className="grid grid-cols-4 gap-6">
              {propertyData.Comercial.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
