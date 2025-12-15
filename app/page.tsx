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
        {/* Hero + Featured Property side-by-side */}
        <section className="w-full bg-gradient-to-b from-white to-[#ededed]">
          <div className="mx-auto max-w-7xl px-4 py-20">
            {/* Heading and Subheading */}
            <div className="mb-10">
              <h1 className="mb-4 text-[52px] font-bold leading-tight" style={{ color: "var(--text-primary)" }}>
                Descubre propiedades en Puerto Rico
              </h1>
              <p className="mb-10 text-lg" style={{ color: "var(--text-secondary)" }}>
                Encuentra tu próximo hogar o inversión comercial con tan solo unos clics.
              </p>
            </div>

            {/* Hero + Featured side-by-side grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_460px] gap-8 items-center">
              {/* Hero on left */}
              <div className="flex items-center">
                <Hero />
              </div>

              {/* Featured Property on right */}
              <div className="hidden lg:flex items-center">
                <FeaturedProperty />
              </div>
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
