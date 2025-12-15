"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bed, Bath, Maximize2, MapPin } from "lucide-react";
import Image from "next/image";
import {
  propertiesForSale,
  getMixedProperties,
  formatPrice,
  formatSqft,
  type Property
} from "@/lib/mock-data";

// Property card component
function PropertyCard({ property }: { property: Property }) {
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
          src={property.imageUrl || ""}
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
              {getMixedProperties().map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </TabsContent>

          {/* Casa Tab Content */}
          <TabsContent value="Casa" className="mt-0">
            <div className="grid grid-cols-4 gap-6">
              {propertiesForSale.Casa.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </TabsContent>

          {/* Apartamento Tab Content */}
          <TabsContent value="Apartamento" className="mt-0">
            <div className="grid grid-cols-4 gap-6">
              {propertiesForSale.Apartamento.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </TabsContent>

          {/* Terrenos Tab Content */}
          <TabsContent value="Terrenos" className="mt-0">
            <div className="grid grid-cols-4 gap-6">
              {propertiesForSale.Terrenos.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </TabsContent>

          {/* Comercial Tab Content */}
          <TabsContent value="Comercial" className="mt-0">
            <div className="grid grid-cols-4 gap-6">
              {propertiesForSale.Comercial.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
