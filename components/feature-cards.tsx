import { Search, Home, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function FeatureCards() {
  const features = [
    {
      icon: Search,
      title: "Encuentra tu hogar ideal",
      description:
        "Miles de propiedades en toda la isla. Usa nuestros filtros avanzados para encontrar exactamente lo que buscas.",
    },
    {
      icon: Home,
      title: "Publica tu propiedad",
      description:
        "Alcanza miles de compradores potenciales. Publica tu propiedad de forma rápida y sencilla en nuestra plataforma.",
    },
    {
      icon: TrendingUp,
      title: "Invierte con confianza",
      description:
        "Datos del mercado en tiempo real y análisis de tendencias para tomar decisiones informadas en tus inversiones.",
    },
  ];

  return (
    <section className="bg-background-section py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-text-primary">
          Todo lo que necesitas para tu próxima propiedad
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="flex flex-col items-center border-0 bg-white p-8 text-center shadow-sm transition-all duration-200 hover:shadow-md"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-findit-blue/10">
                  <Icon className="h-8 w-8 text-findit-blue" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-text-primary">
                  {feature.title}
                </h3>
                <p className="text-text-secondary">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
