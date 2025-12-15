import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { blogPosts } from "@/lib/mock-data";

export default function BlogSection() {

  return (
    <section className="bg-background-section py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-text-primary">
            Recursos y noticias relevantes
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
              <div className="relative h-48">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
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
