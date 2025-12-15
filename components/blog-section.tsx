import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BlogSection() {
  const blogPosts = [
    {
      title: "5 consejos para comprar tu primera casa en Puerto Rico",
      excerpt:
        "Descubre los pasos esenciales que debes seguir para hacer una compra inteligente y segura de tu primera propiedad.",
      date: "15 de diciembre, 2024",
      category: "Guías",
    },
    {
      title: "Tendencias del mercado inmobiliario en San Juan",
      excerpt:
        "Análisis detallado de cómo ha evolucionado el mercado en la zona metro y qué esperar para el próximo año.",
      date: "12 de diciembre, 2024",
      category: "Análisis",
    },
    {
      title: "Cómo preparar tu propiedad para vender más rápido",
      excerpt:
        "Tips profesionales para aumentar el valor de tu propiedad y atraer más compradores potenciales.",
      date: "8 de diciembre, 2024",
      category: "Consejos",
    },
  ];

  return (
    <section className="bg-background-section py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-text-primary">
            Noticias y artículos
          </h2>
          <Button
            variant="outline"
            className="h-10 rounded-3xl border-2 border-findit-blue text-findit-blue transition-all duration-200 hover:bg-findit-blue/5"
          >
            Ver todos los artículos
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="flex flex-col overflow-hidden border-0 bg-white shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="h-48 bg-gradient-to-br from-findit-blue/20 to-purple/20"></div>
              <div className="flex flex-col p-6">
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full bg-findit-blue/10 px-3 py-1 text-xs font-medium text-findit-blue">
                    {post.category}
                  </span>
                  <span className="text-xs text-text-secondary">
                    {post.date}
                  </span>
                </div>
                <h3 className="mb-3 text-lg font-semibold text-text-primary">
                  {post.title}
                </h3>
                <p className="mb-4 flex-1 text-sm text-text-secondary">
                  {post.excerpt}
                </p>
                <Button
                  variant="ghost"
                  className="h-auto w-fit p-0 text-findit-blue transition-all duration-200 hover:bg-transparent hover:underline"
                >
                  Leer más →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
