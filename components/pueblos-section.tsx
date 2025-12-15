import { Card } from "@/components/ui/card";
import Image from "next/image";
import { municipalities } from "@/lib/mock-data";
import { SECTION_PADDING, CONTAINER_WIDTH } from "@/lib/constants";

export default function PueblosSection() {
  // Irregular distribution pattern: [2, 1, 1, 2, 1, 2]
  const distribution = [
    municipalities.slice(0, 2),
    municipalities.slice(2, 3),
    municipalities.slice(3, 4),
    municipalities.slice(4, 6),
    municipalities.slice(6, 7),
    municipalities.slice(7, 9),
  ];

  return (
    <section className={`bg-white ${SECTION_PADDING.sm}`}>
      <div className={`mx-auto ${CONTAINER_WIDTH} px-6`}>
        <h2 className="mb-12 text-5xl font-bold text-text-primary text-center">
          Pueblos más buscados
        </h2>
        <div className="flex gap-4">
          {distribution.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4 flex-1">
              {column.map((pueblo, index) => (
                <div
                  key={index}
                  className="group relative cursor-pointer overflow-hidden rounded-3xl"
                >
                  <div className="relative h-80">
                    <Image
                      src={pueblo.imageUrl}
                      alt={pueblo.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 1200px) 33vw, 16vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">
                      {pueblo.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
