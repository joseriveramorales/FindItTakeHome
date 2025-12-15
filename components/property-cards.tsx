import { Card } from "@/components/ui/card";
import { Bed, Bath, Maximize2, MapPin } from "lucide-react";

// Hardcoded property data
const properties = [
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
  {
    id: 4,
    price: 280000,
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1500,
    location: "Carolina",
    propertyType: "Condo",
    imageGradient: "from-orange-400 to-orange-600",
  },
  {
    id: 5,
    price: 650000,
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4000,
    location: "Bayamón",
    propertyType: "Casa",
    imageGradient: "from-green-400 to-green-600",
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
];

// Format price to currency string
function formatPrice(price: number): string {
  return `$${price.toLocaleString("en-US")}`;
}

// Format square feet with comma separator
function formatSqft(sqft: number): string {
  return sqft.toLocaleString("en-US");
}

export default function PropertyCards() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-[32px] font-bold leading-tight" style={{ color: "var(--text-primary)" }}>
            Propiedades Destacadas
          </h2>
          <p className="mt-2 text-base" style={{ color: "var(--text-secondary)" }}>
            Descubre las mejores oportunidades en bienes raíces
          </p>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-3 gap-6">
          {properties.map((property) => (
            <Card
              key={property.id}
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
          ))}
        </div>
      </div>
    </section>
  );
}
