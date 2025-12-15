import Image from "next/image";

export default function MediaMentions() {
  const mediaLogos = [
    { name: "Forbes", src: "https://finditpr.com/assets/home-page/icons/forbes.svg" },
    { name: "WAPA TV", src: "https://finditpr.com/assets/home-page/icons/wapa.svg" },
    { name: "El Nuevo Día", src: "https://finditpr.com/assets/home-page/icons/endi.svg" },
    { name: "Metro PR", src: "https://finditpr.com/assets/home-page/icons/metro.svg" },
    { name: "Telemundo PR", src: "https://finditpr.com/assets/home-page/icons/telemundo.svg" },
  ];

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-8">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-[32px] font-bold leading-tight" style={{ color: "var(--text-primary)" }}>
            Nos han mencionado
          </h2>
          <p className="mt-2 text-base" style={{ color: "var(--text-secondary)" }}>
            Reconocidos por los principales medios de comunicación
          </p>
        </div>

        {/* Media Logos Grid */}
        <div className="grid grid-cols-5 gap-8">
          {mediaLogos.map((media) => (
            <div
              key={media.name}
              className="flex items-center justify-center"
              style={{ transition: "all 200ms" }}
            >
              {/* Logo */}
              <div
                className="flex h-24 w-full items-center justify-center opacity-70 hover:opacity-100"
                style={{
                  borderRadius: "var(--radius-card)",
                  transition: "all 200ms",
                }}
              >
                <Image
                  src={media.src}
                  alt={media.name}
                  width={150}
                  height={80}
                  className="h-auto w-auto max-h-20 max-w-[140px]"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
