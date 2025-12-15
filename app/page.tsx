import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import FeaturedProperty from "@/components/featured-property";
import PropertyCards from "@/components/property-cards";
import PropertyTypeSection from "@/components/property-type-section";
import FeatureCards from "@/components/feature-cards";
import AgentPromo from "@/components/agent-promo";
import BlogSection from "@/components/blog-section";
import PueblosSection from "@/components/pueblos-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProperty />
        <PropertyCards />
        <PropertyTypeSection />
        <FeatureCards />
        <AgentPromo />
        <BlogSection />
        <PueblosSection />
      </main>
      <Footer />
    </div>
  );
}
