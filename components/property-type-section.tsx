"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bed, Bath, Maximize2, MapPin } from "lucide-react";

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
      imageGradient: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      price: 575000,
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3200,
      location: "Dorado",
      propertyType: "Casa",
      imageGradient: "from-teal-400 to-teal-600",
    },
    {
      id: 3,
      price: 650000,
      bedrooms: 5,
      bathrooms: 4,
      sqft: 4000,
      location: "Bayamón",
      propertyType: "Casa",
      imageGradient: "from-green-400 to-green-600",
    },
    {
      id: 4,
      price: 380000,
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 2300,
      location: "Ponce",
      propertyType: "Casa",
      imageGradient: "from-indigo-400 to-indigo-600",
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
      imageGradient: "from-purple-400 to-purple-600",
    },
    {
      id: 6,
      price: 395000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2200,
      location: "Caguas",
      propertyType: "Apartamento",
      imageGradient: "from-pink-400 to-pink-600",
    },
    {
      id: 7,
      price: 275000,
      bedrooms: 2,
      bathrooms: 1,
      sqft: 1500,
      location: "San Juan",
      propertyType: "Apartamento",
      imageGradient: "from-rose-400 to-rose-600",
    },
    {
      id: 8,
      price: 425000,
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 2100,
      location: "Carolina",
      propertyType: "Apartamento",
      imageGradient: "from-violet-400 to-violet-600",
    },
  ],
  Condo: [
    {
      id: 9,
      price: 280000,
      bedrooms: 2,
      bathrooms: 1,
      sqft: 1500,
      location: "Carolina",
      propertyType: "Condo",
      imageGradient: "from-orange-400 to-orange-600",
    },
    {
      id: 10,
      price: 350000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1900,
      location: "Guaynabo",
      propertyType: "Condo",
      imageGradient: "from-amber-400 to-amber-600",
    },
    {
      id: 11,
      price: 315000,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1650,
      location: "Dorado",
      propertyType: "Condo",
      imageGradient: "from-yellow-400 to-yellow-600",
    },
    {
      id: 12,
      price: 485000,
      bedrooms: 3,
      bathrooms: 3,
      sqft: 2400,
      location: "San Juan",
      propertyType: "Condo",
      imageGradient: "from-lime-400 to-lime-600",
    },
  ],
  Solar: [
    {
      id: 13,
      price: 125000,
      bedrooms: 0,
      bathrooms: 0,
      sqft: 5000,
      location: "Arecibo",
      propertyType: "Solar",
      imageGradient: "from-emerald-400 to-emerald-600",
    },
    {
      id: 14,
      price: 95000,
      bedrooms: 0,
      bathrooms: 0,
      sqft: 3500,
      location: "Mayagüez",
      propertyType: "Solar",
      imageGradient: "from-cyan-400 to-cyan-600",
    },
    {
      id: 15,
      price: 180000,
      bedrooms: 0,
      bathrooms: 0,
      sqft: 8000,
      location: "Rincón",
      propertyType: "Solar",
      imageGradient: "from-sky-400 to-sky-600",
    },
    {
      id: 16,
      price: 225000,
      bedrooms: 0,
      bathrooms: 0,
      sqft: 10000,
      location: "Isabela",
      propertyType: "Solar",
      imageGradient: "from-blue-300 to-blue-500",
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
      imageGradient: "from-slate-400 to-slate-600",
    },
    {
      id: 18,
      price: 1200000,
      bedrooms: 0,
      bathrooms: 3,
      sqft: 6800,
      location: "Guaynabo",
      propertyType: "Comercial",
      imageGradient: "from-gray-400 to-gray-600",
    },
    {
      id: 19,
      price: 675000,
      bedrooms: 0,
      bathrooms: 2,
      sqft: 3200,
      location: "Carolina",
      propertyType: "Comercial",
      imageGradient: "from-zinc-400 to-zinc-600",
    },
    {
      id: 20,
      price: 950000,
      bedrooms: 0,
      bathrooms: 4,
      sqft: 5500,
      location: "Bayamón",
      propertyType: "Comercial",
      imageGradient: "from-neutral-400 to-neutral-600",
    },
  ],
};

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
      className="group overflow-hidden border-[1px] p-0 shadow-sm hover:shadow-lg"
      style={{
        borderRadius: "var(--radius-card)",
        borderColor: "var(--border-primary)",
        transition: "all 200ms",
      }}
    >
      {/* Property Image - Using gradient placeholder with rounded top */}
      <div className="relative h-[220px] w-full">
        <div
          className={`h-full w-full bg-gradient-to-br ${property.imageGradient}`}
          style={{ borderRadius: "250px 250px var(--radius-card) var(--radius-card)" }}
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
        <Tabs defaultValue="Casa" className="w-full">
          <TabsList
            className="mb-8 inline-flex h-auto gap-2 bg-transparent p-0"
            style={{ borderBottom: "1px solid var(--border-light)" }}
          >
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
              value="Condo"
              className="rounded-t-lg border-b-2 border-transparent px-6 py-3 text-base font-medium data-[state=active]:border-findit-blue data-[state=active]:bg-white data-[state=active]:text-findit-blue"
              style={{
                color: "var(--text-secondary)",
                transition: "all 200ms",
              }}
            >
              Condo
            </TabsTrigger>
            <TabsTrigger
              value="Solar"
              className="rounded-t-lg border-b-2 border-transparent px-6 py-3 text-base font-medium data-[state=active]:border-findit-blue data-[state=active]:bg-white data-[state=active]:text-findit-blue"
              style={{
                color: "var(--text-secondary)",
                transition: "all 200ms",
              }}
            >
              Solar
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

          {/* Condo Tab Content */}
          <TabsContent value="Condo" className="mt-0">
            <div className="grid grid-cols-4 gap-6">
              {propertyData.Condo.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </TabsContent>

          {/* Solar Tab Content */}
          <TabsContent value="Solar" className="mt-0">
            <div className="grid grid-cols-4 gap-6">
              {propertyData.Solar.map((property) => (
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
