import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bed, Bath, Maximize2, MapPin } from "lucide-react";
import Image from "next/image";
import { featuredProperty, formatPrice, formatSqft } from "@/lib/mock-data";

export default function FeaturedProperty() {
  return (
    <div>
      {/* Featured Property Card - Centered */}
      <div className="mx-auto">
          <Card
            className="group border-[1px] p-0 shadow-md hover:shadow-xl"
            style={{
              borderRadius: "250px 250px var(--radius-card) var(--radius-card)",
              borderColor: "var(--border-primary)",
              transition: "all 200ms",
              overflow: "hidden",
            }}
          >
            {/*
              KEY FEATURE: Unique rounded-top image design
              The 250px border radius on the top corners creates a distinctive "dome-shaped" look
              This is the signature design element that makes FindIT cards unique
            */}
            <div className="relative h-[380px] w-full overflow-hidden">
              <div
                className="relative h-full w-full"
                style={{
                  borderRadius: "250px 250px var(--radius-card) var(--radius-card)",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={featuredProperty.imageUrl || ""}
                  alt={featuredProperty.title || ""}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
              </div>
              {/* Property Type Badge - Positioned on the image */}
              <div
                className="absolute left-6 top-6 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm"
                style={{
                  borderRadius: "var(--radius-button)",
                  backgroundColor: "rgba(42, 125, 230, 0.9)",
                }}
              >
                {featuredProperty.propertyType}
              </div>
              {/* Featured Badge */}
              <div
                className="absolute right-6 top-6 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm"
                style={{
                  borderRadius: "var(--radius-button)",
                  backgroundColor: "rgba(250, 173, 20, 0.95)",
                }}
              >
                Destacada
              </div>
            </div>

            {/* Property Content Section */}
            <div className="p-8">
              {/* Price - Large and prominent */}
              <div className="mb-3">
                <p className="text-[32px] font-bold leading-tight" style={{ color: "var(--text-primary)" }}>
                  {formatPrice(featuredProperty.price)}
                </p>
              </div>

              {/* Property Title and Location */}
              <div className="mb-6">
                <h3 className="mb-2 text-[24px] font-semibold leading-tight" style={{ color: "var(--text-primary)" }}>
                  {featuredProperty.title}
                </h3>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" style={{ color: "var(--text-secondary)" }} />
                  <span className="text-base font-medium" style={{ color: "var(--text-secondary)" }}>
                    {featuredProperty.location}, PR
                  </span>
                </div>
              </div>

              {/* Property Features - Icons with labels */}
              <div className="mb-6 flex items-center gap-6">
                {/* Bedrooms */}
                <div className="flex items-center gap-2">
                  <Bed className="h-5 w-5" style={{ color: "var(--findit-blue)" }} />
                  <span className="text-base font-medium" style={{ color: "var(--text-primary)" }}>
                    {featuredProperty.bedrooms}
                  </span>
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    habitaciones
                  </span>
                </div>

                {/* Bathrooms */}
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5" style={{ color: "var(--findit-blue)" }} />
                  <span className="text-base font-medium" style={{ color: "var(--text-primary)" }}>
                    {featuredProperty.bathrooms}
                  </span>
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    baños
                  </span>
                </div>

                {/* Square Feet */}
                <div className="flex items-center gap-2">
                  <Maximize2 className="h-5 w-5" style={{ color: "var(--findit-blue)" }} />
                  <span className="text-base font-medium" style={{ color: "var(--text-primary)" }}>
                    {formatSqft(featuredProperty.sqft)}
                  </span>
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    sqft
                  </span>
                </div>
              </div>

              {/* Property Description */}
              <div className="mb-8">
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {featuredProperty.description}
                </p>
              </div>

              {/* Call-to-Action Button */}
              <Button
                className="w-full text-base font-semibold text-white sm:w-auto"
                style={{
                  borderRadius: "var(--radius-button)",
                  backgroundColor: "var(--findit-blue)",
                  paddingLeft: "32px",
                  paddingRight: "32px",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                  transition: "all 200ms",
                }}
              >
                Ver detalles
              </Button>
            </div>
          </Card>
        </div>
    </div>
  );
}
