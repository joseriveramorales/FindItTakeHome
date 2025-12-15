"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Bed, Bath, Maximize2, MapPin } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  propertiesForSale,
  getMixedProperties,
  formatPrice,
  formatSqft,
  type Property
} from "@/lib/mock-data";
import { PROPERTY_TABS, ICON_SIZE, SECTION_PADDING, CONTAINER_WIDTH, TRANSITION_DURATION } from "@/lib/constants";

// Property card component
function PropertyCard({ property }: { property: Property }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const images = property.imageUrls || (property.imageUrl ? [property.imageUrl] : []);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Card
      className="group border-[1px] p-0 shadow-sm hover:shadow-lg"
      style={{
        borderRadius: "var(--radius-card)",
        borderColor: "var(--border-primary)",
        transition: "all 200ms",
        overflow: "hidden",
      }}
    >
      {/* Property Image Carousel */}
      <div
        className="relative h-[320px] w-full"
        style={{
          borderRadius: "var(--radius-card) var(--radius-card) 0 0",
          overflow: "hidden"
        }}
      >
        <Carousel
          setApi={setApi}
          className="w-full h-full"
          opts={{ loop: true }}
        >
          <CarouselContent>
            {images.map((imageUrl, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[320px] w-full">
                  <Image
                    src={imageUrl}
                    alt={`${property.propertyType} in ${property.location} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1440px) 25vw, 350px"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows - Only show on hover and if there are multiple images */}
          {images.length > 1 && (
            <>
              <CarouselPrevious
                className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  border: "none",
                }}
              />
              <CarouselNext
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  border: "none",
                }}
              />
            </>
          )}
        </Carousel>

        {/* Property Type Badge */}
        <div
          className="absolute left-6 top-6 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm z-10"
          style={{
            borderRadius: "var(--radius-button)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          {property.propertyType}
        </div>

        {/* Carousel Dots - Only show if there are multiple images */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {Array.from({ length: count }).map((_, index) => (
              <div
                key={index}
                className="h-1.5 w-1.5 rounded-full transition-all"
                style={{
                  backgroundColor: current === index ? "white" : "rgba(255, 255, 255, 0.5)",
                  width: current === index ? "16px" : "6px",
                }}
              />
            ))}
          </div>
        )}
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
                <Bed className={ICON_SIZE.sm} style={{ color: "var(--text-secondary)" }} />
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {property.bedrooms} hab
                </span>
              </div>
            )}

            {/* Bathrooms */}
            {property.bathrooms > 0 && (
              <div className="flex items-center gap-1.5">
                <Bath className={ICON_SIZE.sm} style={{ color: "var(--text-secondary)" }} />
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {property.bathrooms} baños
                </span>
              </div>
            )}

            {/* Square Feet */}
            <div className="flex items-center gap-1.5">
              <Maximize2 className={ICON_SIZE.sm} style={{ color: "var(--text-secondary)" }} />
              <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {formatSqft(property.sqft)} sqft
              </span>
            </div>
          </div>
        )}

        {/* Location */}
        <div className="flex items-center gap-1.5">
          <MapPin className={ICON_SIZE.sm} style={{ color: "var(--text-secondary)" }} />
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
    <section className={`w-full ${SECTION_PADDING.lg}`} style={{ backgroundColor: "var(--bg-section)" }}>
      <div className={`mx-auto ${CONTAINER_WIDTH} px-8`}>
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
            {PROPERTY_TABS.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="rounded-t-lg border-b-2 border-transparent px-6 py-3 text-base font-medium data-[state=active]:border-findit-blue data-[state=active]:bg-white data-[state=active]:text-findit-blue"
                style={{
                  color: "var(--text-secondary)",
                  transition: `all ${TRANSITION_DURATION}`,
                }}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Todos Tab Content */}
          <TabsContent value="Todos" className="mt-0">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-6">
                {getMixedProperties().map((property) => (
                  <CarouselItem key={property.id} className="pl-6 basis-1/4">
                    <PropertyCard property={property} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-12" />
              <CarouselNext className="-right-12" />
            </Carousel>
          </TabsContent>

          {/* Dynamic Tab Contents */}
          {PROPERTY_TABS.slice(1).map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="mt-0">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-6">
                  {propertiesForSale[tab.value as keyof typeof propertiesForSale]?.map((property) => (
                    <CarouselItem key={property.id} className="pl-6 basis-1/4">
                      <PropertyCard property={property} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-12" />
                <CarouselNext className="-right-12" />
              </Carousel>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
