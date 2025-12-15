import { Button } from "@/components/ui/button";

export default function AgentPromo() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-12">
          {/* Agent Section */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold text-text-primary">
              ¿Eres profesional inmobiliario?
            </h2>
            <p className="mb-6 text-lg text-text-secondary">
              Únete a la plataforma inmobiliaria líder en Puerto Rico. Conecta
              con miles de clientes potenciales y haz crecer tu negocio.
            </p>
            <div className="flex gap-4">
              <Button className="h-12 rounded-3xl bg-findit-blue px-8 text-base font-medium text-white transition-all duration-200 hover:bg-findit-blue/90">
                Crear cuenta profesional
              </Button>
              <Button
                variant="outline"
                className="h-12 rounded-3xl border-2 border-findit-blue px-8 text-base font-medium text-findit-blue transition-all duration-200 hover:bg-findit-blue/5"
              >
                Conocer más
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-80 w-full rounded-2xl bg-gradient-to-br from-findit-blue/20 to-purple/20"></div>
          </div>

          {/* Services Section */}
          <div className="flex items-center justify-center">
            <div className="h-80 w-full rounded-2xl bg-gradient-to-br from-gold/20 to-green/20"></div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold text-text-primary">
              Servicios profesionales a tu alcance
            </h2>
            <p className="mb-6 text-lg text-text-secondary">
              Conecta con profesionales verificados: tasadores, inspectores,
              abogados, y más. Todo lo que necesitas en un solo lugar.
            </p>
            <div className="flex gap-4">
              <Button className="h-12 rounded-3xl bg-findit-blue px-8 text-base font-medium text-white transition-all duration-200 hover:bg-findit-blue/90">
                Explorar servicios
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
