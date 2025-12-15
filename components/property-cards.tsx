"use client";

import { Bed, Bath, Maximize2, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  propertiesForRent,
  formatPrice,
  formatSqft,
  type Property
} from "@/lib/mock-data";

// For backward compatibility, create propertiesForSale from first 3 rental properties
const propertiesForSale = propertiesForRent.slice(0, 3);

// Property Card Component
function PropertyCard({ property, isRental = false }: { property: Property; isRental?: boolean }) {
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
