import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import FeaturedProperty from "@/components/featured-property";
import PropertyTypeSection from "@/components/property-type-section";
import FeatureCards from "@/components/feature-cards";
import AgentPromo from "@/components/agent-promo";
import MediaMentions from "@/components/media-mentions";
import BlogSection from "@/components/blog-section";
import PueblosSection from "@/components/pueblos-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Side-by-side layout: Hero/Search and Propiedad Destacada */}
        <section className="w-full bg-white py-16">
          <div className="mx-auto max-w-7xl px-8">
            <div className="grid grid-cols-[1fr_400px] gap-12">
              {/* Left: Hero/Search section */}
              <Hero />
              {/* Right: Propiedad destacada section */}
              <FeaturedProperty />
            </div>
          </div>
        </section>
        <PropertyTypeSection />

        <FeatureCards />
        <AgentPromo />

        {/* Media Mentions Section */}
        <MediaMentions />

        <BlogSection />
        <PueblosSection />
      </main>
      <Footer />
    </div>
  );
}
