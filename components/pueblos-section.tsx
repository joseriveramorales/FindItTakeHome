import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function PueblosSection() {
  const pueblos = [
    {
      name: "Guaynabo",
      properties: "1,245",
      avgPrice: "$325,000",
      imageUrl: "https://dvvjkgh94f2v6.cloudfront.net/735d922b/698875038/83dcefb7.jpeg",
    },
    {
      name: "Carolina",
      properties: "892",
      avgPrice: "$265,000",
      imageUrl: "https://dvvjkgh94f2v6.cloudfront.net/735d922b/703472555/83dcefb7.jpeg",
    },
    {
      name: "Dorado",
      properties: "756",
      avgPrice: "$285,000",
      imageUrl: "https://dvvjkgh94f2v6.cloudfront.net/735d922b/680667453/83dcefb7.jpeg",
    },
    {
      name: "Cabo Rojo",
      properties: "534",
      avgPrice: "$215,000",
      imageUrl: "https://dvvjkgh94f2v6.cloudfront.net/735d922b/701746563/7d65264f.jpeg",
    },
    {
      name: "Toa Alta",
      properties: "487",
      avgPrice: "$235,000",
      imageUrl: "https://dvvjkgh94f2v6.cloudfront.net/735d922b/577066182/83dcefb7.jpeg",
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
        <div className="grid grid-cols-5 gap-6">
          {pueblos.map((pueblo, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden border-0 bg-white shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="relative h-40">
                <Image
                  src={pueblo.imageUrl}
                  alt={pueblo.name}
                  fill
                  className="object-cover transition-all duration-200 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 20vw"
                />
              </div>
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
