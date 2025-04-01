
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ApartmentCarousel from "@/components/ApartmentCarousel";
import CommunitySection from "@/components/CommunitySection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import TechnologySection from "@/components/TechnologySection";
import SustainabilitySection from "@/components/SustainabilitySection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ApartmentCarousel />
      <CommunitySection />
      <TechnologySection />
      <SustainabilitySection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
