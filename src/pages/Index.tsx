
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ApartmentCarousel from "@/components/ApartmentCarousel";
import CommunitySection from "@/components/CommunitySection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ApartmentCarousel />
      <CommunitySection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
