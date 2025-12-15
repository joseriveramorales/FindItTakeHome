import { ArrowRight, Heart, Search, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { featureCards } from "@/lib/mock-data";
import { ICON_SIZE, SECTION_PADDING } from "@/lib/constants";

const iconMap = {
  Search,
  Heart,
  Users,
};

export default function FeatureCards() {
  return (
    <section className={`bg-background-section ${SECTION_PADDING.md}`}>
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-2 gap-16">
          {/* Left side: Heading and subtitle */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-4xl font-bold leading-tight text-text-primary">
              Todo lo que necesitas, en un solo lugar
            </h2>
            <p className="text-lg text-text-secondary">
              Con nuestras herramientas y recursos, adquirir tu próxima
              propiedad será un proceso sencillo y efectivo.
            </p>
          </div>

          {/* Right side: Feature cards stacked vertically */}
          <div className="flex flex-col gap-6">
            {featureCards.map((feature, index) => {
              const Icon = iconMap[feature.iconName];
              return (
                <Card
                  key={index}
                  className="flex items-start gap-6 border-0 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md"
                >
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: feature.iconBg }}
                  >
                    <Icon className={ICON_SIZE.xl} style={{ color: feature.iconColor }} />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <h3 className="mb-2 text-xl font-semibold text-text-primary">
                      {feature.title}
                    </h3>
                    <p className="mb-4 text-text-secondary">
                      {feature.description}
                    </p>
                    <Button
                      variant="ghost"
                      className="w-fit gap-2 px-0 text-findit-blue hover:bg-transparent hover:text-findit-blue/80"
                    >
                      {feature.buttonText}
                      <ArrowRight className={ICON_SIZE.sm} />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
