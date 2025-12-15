import { Card } from "@/components/ui/card";

export default function PueblosSection() {
  const pueblos = [
    {
      name: "San Juan",
      properties: "1,245",
      avgPrice: "$325,000",
    },
    {
      name: "Bayamón",
      properties: "892",
      avgPrice: "$265,000",
    },
    {
      name: "Carolina",
      properties: "756",
      avgPrice: "$285,000",
    },
    {
      name: "Ponce",
      properties: "534",
      avgPrice: "$215,000",
    },
    {
      name: "Caguas",
      properties: "487",
      avgPrice: "$235,000",
    },
    {
      name: "Mayagüez",
      properties: "423",
      avgPrice: "$198,000",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-text-primary">
            Explora propiedades por pueblo
          </h2>
          <p className="text-lg text-text-secondary">
            Encuentra tu hogar ideal en las principales ciudades de Puerto Rico
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {pueblos.map((pueblo, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden border-0 bg-white shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="h-40 bg-gradient-to-br from-findit-blue/30 to-purple/30 transition-all duration-200 group-hover:from-findit-blue/40 group-hover:to-purple/40"></div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-text-primary">
                  {pueblo.name}
                </h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">
                    {pueblo.properties} propiedades
                  </span>
                  <span className="font-semibold text-findit-blue">
                    {pueblo.avgPrice}
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
