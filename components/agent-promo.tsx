import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AgentPromo() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section 1: Agent Section */}
        <div className="mb-16">
          {/* Main Heading */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-text-primary">
              ¿Eres un agente de bienes raíces?
            </h1>
          </div>

          {/* Image on left, Two text boxes stacked on right */}
          <div className="grid grid-cols-2 gap-12">
            {/* Left: Single Image */}
            <div className="flex items-center justify-center">
              <div className="relative h-[600px] w-full overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                  alt="Agente de bienes raíces"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 50vw, 640px"
                />
              </div>
            </div>

            {/* Right: Two text boxes stacked */}
            <div className="flex flex-col gap-8">
              {/* Box 1: Para agentes de bienes raíces */}
              <div className="flex flex-col justify-center">
                <h2 className="mb-4 text-2xl font-bold text-text-primary">
                  Para agentes de bienes raíces
                </h2>
                <p className="mb-6 text-lg text-text-secondary">
                  Descubre cómo nuestros servicios pueden impulsar el éxito de agentes y equipos de bienes raíces.
                </p>
                <div>
                  <Button className="h-12 rounded-3xl bg-findit-blue px-8 text-base font-medium text-white transition-all duration-200 hover:bg-findit-blue/90">
                    Ver más
                  </Button>
                </div>
              </div>

              {/* Box 2: Para servicios relacionados */}
              <div className="flex flex-col justify-center">
                <h2 className="mb-4 text-2xl font-bold text-text-primary">
                  Para servicios relacionados
                </h2>
                <p className="mb-6 text-lg text-text-secondary">
                  Explora las oportunidades de promoción diseñadas exclusivamente para originadores de préstamos, abogados, tasadores y más
                </p>
                <div>
                  <Button className="h-12 rounded-3xl bg-findit-blue px-8 text-base font-medium text-white transition-all duration-200 hover:bg-findit-blue/90">
                    Ver más
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Property Listing Section */}
        <div className="grid grid-cols-2 gap-12">
          {/* Left: Text */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-2xl font-bold text-text-primary">
              ¿Vendes o alquilas una propiedad?
            </h2>
            <p className="mb-6 text-lg text-text-secondary">
              Anuncia tu propiedad en venta o alquiler sin ningún costo con nuestro plan gratuito.
            </p>
            <div>
              <Button className="h-12 rounded-3xl bg-findit-blue px-8 text-base font-medium text-white transition-all duration-200 hover:bg-findit-blue/90">
                Ver opciones
              </Button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex items-center justify-center">
            <div className="relative h-80 w-full overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop"
                alt="Vende o alquila una propiedad"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 50vw, 640px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
