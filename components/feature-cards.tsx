import { Search, Heart, Users, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FeatureCards() {
  const features = [
    {
      icon: Search,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-500/10",
      title: "Busca propiedades",
      description:
        "Utiliza el mapa y filtros para encontrar tu propiedad ideal rápido.",
      buttonText: "Buscar propiedades",
    },
    {
      icon: Heart,
      iconColor: "text-green-500",
      iconBg: "bg-green-500/10",
      title: "Guarda tus búsquedas",
      description: "Te notificamos de nuevos listados al instante.",
      buttonText: "Guardar búsquedas",
    },
    {
      icon: Users,
      iconColor: "text-purple-500",
      iconBg: "bg-purple-500/10",
      title: "Consigue servicios",
      description:
        "Encuentra los servicios que necesitas para comprar tu propiedad.",
      buttonText: "Ver proveedores",
    },
  ];

  return (
    <section className="bg-background-section py-16">
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
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="flex items-start gap-6 border-0 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md"
                >
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${feature.iconBg}`}
                  >
                    <Icon className={`h-7 w-7 ${feature.iconColor}`} />
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
                      <ArrowRight className="h-4 w-4" />
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
