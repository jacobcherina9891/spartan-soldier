import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Process from "@/components/Process";
import ServiceAreas from "@/components/ServiceAreas";
import CTAFooter from "@/components/CTAFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Reviews />
      <Process />
      <ServiceAreas />
      <CTAFooter />
    </div>
  );
};

export default Index;
