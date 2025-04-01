
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommunitySection from "@/components/CommunitySection";
import CallToAction from "@/components/CallToAction";

const Communities = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-8 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Our Communities</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Experience the power of connection in our thoughtfully designed living spaces where community and personal growth are at the heart of everything we do.
          </p>
        </div>
      </div>
      <CommunitySection />
      <div className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-serif mb-6">Community Events</h2>
              <p className="text-lg text-gray-600 mb-6">
                We organize regular social events, workshops, and networking opportunities to help residents connect and grow together. From movie nights to skill-sharing sessions, there's always something happening at Nera Living.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Weekly social gatherings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Professional development workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Wellness and fitness activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Cultural experiences</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-4xl font-serif mb-6">Community Values</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Nera Living, we're built around core values that promote a positive, inclusive, and supportive environment for all residents.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Respect for individual boundaries and differences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Shared responsibility for common spaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Environmental consciousness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Support for personal and professional growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Communities;
