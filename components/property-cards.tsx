"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bed, Bath, Maximize2, MapPin } from "lucide-react";

// Hardcoded property data - En Venta (For Sale)
const propertiesForSale = [
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
    price: 325000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1800,
    location: "Guaynabo",
    propertyType: "Apartamento",
    imageGradient: "from-purple-400 to-purple-600",
  },
  {
    id: 3,
    price: 575000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    location: "Dorado",
    propertyType: "Casa",
    imageGradient: "from-teal-400 to-teal-600",
  },
];

// Hardcoded property data - En Alquiler (For Rent)
const propertiesForRent = [
  {
    id: 4,
    price: 2800,
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1500,
    location: "Carolina",
    propertyType: "Condo",
    imageGradient: "from-orange-400 to-orange-600",
  },
  {
    id: 5,
    price: 3500,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2200,
    location: "Bayamón",
    propertyType: "Casa",
    imageGradient: "from-green-400 to-green-600",
  },
  {
    id: 6,
    price: 2200,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1800,
    location: "Caguas",
    propertyType: "Apartamento",
    imageGradient: "from-pink-400 to-pink-600",
  },
];

// Format price to currency string
function formatPrice(price: number): string {
  return `$${price.toLocaleString("en-US")}`;
}

// Format square feet with comma separator
function formatSqft(sqft: number): string {
  return sqft.toLocaleString("en-US");
}

// Property Card Component
function PropertyCard({ property, isRental = false }: { property: typeof propertiesForSale[0]; isRental?: boolean }) {
  return (
    <Card
      className="group overflow-hidden border-[1px] p-0 shadow-sm hover:shadow-lg"
      style={{
        borderRadius: "var(--radius-card)",
        borderColor: "var(--border-primary)",
        transition: "all 200ms",
      }}
    >
      {/* Property Image - Using gradient placeholder */}
      <div className="relative h-[220px] w-full">
        <div
          className={`h-full w-full bg-gradient-to-br ${property.imageGradient}`}
          style={{ borderRadius: "var(--radius-card) var(--radius-card) 0 0" }}
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
          <p className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
            {formatPrice(property.price)}
            {isRental && <span className="text-sm font-normal">/mes</span>}
          </p>
        </div>

        {/* Property Features */}
        <div className="mb-4 flex items-center gap-4">
          {/* Bedrooms */}
          <div className="flex items-center gap-1.5">
            <Bed className="h-4 w-4" style={{ color: "var(--text-secondary)" }} />
            <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
              {property.bedrooms} hab
            </span>
          </div>

          {/* Bathrooms */}
          <div className="flex items-center gap-1.5">
            <Bath className="h-4 w-4" style={{ color: "var(--text-secondary)" }} />
            <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
              {property.bathrooms} baños
            </span>
          </div>

          {/* Square Feet */}
          <div className="flex items-center gap-1.5">
            <Maximize2 className="h-4 w-4" style={{ color: "var(--text-secondary)" }} />
            <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
              {formatSqft(property.sqft)} sqft
            </span>
          </div>
        </div>

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

export default function PropertyCards() {
  return (
    <div>
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-[32px] font-bold leading-tight" style={{ color: "var(--text-primary)" }}>
          Descubre propiedades en Puerto Rico
        </h2>
        <p className="mt-2 text-base" style={{ color: "var(--text-secondary)" }}>
          Explora nuestra selección de propiedades disponibles
        </p>
      </div>

      {/* Tabs for En Venta / En Alquiler */}
      <Tabs defaultValue="venta" className="w-full">
        <TabsList
          className="mb-6 w-auto h-auto p-1 bg-transparent border-b-[1px]"
          style={{
            borderColor: "var(--border-primary)",
            borderRadius: "0",
          }}
        >
          <TabsTrigger
            value="venta"
            className="px-6 py-3 text-base font-medium rounded-none bg-transparent shadow-none border-b-2 border-transparent data-[state=active]:border-b-2 transition-colors duration-200"
            style={{
              color: "var(--text-secondary)",
            }}
            data-state-active-color="var(--primary)"
            data-state-active-border="var(--primary)"
          >
            En Venta
          </TabsTrigger>
          <TabsTrigger
            value="alquiler"
            className="px-6 py-3 text-base font-medium rounded-none bg-transparent shadow-none border-b-2 border-transparent data-[state=active]:border-b-2 transition-colors duration-200"
            style={{
              color: "var(--text-secondary)",
            }}
            data-state-active-color="var(--primary)"
            data-state-active-border="var(--primary)"
          >
            En Alquiler
          </TabsTrigger>
        </TabsList>

        <TabsContent value="venta" className="mt-0">
          <div className="grid grid-cols-1 gap-6">
            {propertiesForSale.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="alquiler" className="mt-0">
          <div className="grid grid-cols-1 gap-6">
            {propertiesForRent.map((property) => (
              <PropertyCard key={property.id} property={property} isRental={true} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
