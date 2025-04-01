
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import { Wifi, Coffee, Tv, Dumbbell, Utensils, Users, Lock, Bike } from "lucide-react";

const Amenities = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div 
        className="relative py-24 md:py-32 bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/lovable-uploads/f41a175c-7eb1-4094-9bc5-c6ed5fd0340d.png)' 
        }}
      >
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-serif mb-6">Amenities</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Experience premium features designed to enhance your everyday living.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mb-12">
            <h2 className="text-4xl font-serif mb-6">Elevating Your Living Experience</h2>
            <p className="text-xl text-gray-700">
              At Nera Living, we believe that exceptional amenities create exceptional living experiences. Our thoughtfully curated selection of features and services are designed to make your everyday life more comfortable, productive, and enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-8">
              <Wifi className="h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-2xl font-serif mb-3">High-Speed WiFi</h3>
              <p className="text-gray-600">
                Stay connected with lightning-fast internet throughout all common areas and private spaces.
              </p>
            </div>
            
            <div className="bg-background p-8">
              <Coffee className="h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-2xl font-serif mb-3">Co-Working Spaces</h3>
              <p className="text-gray-600">
                Dedicated areas for productive work, complete with comfortable seating and printing services.
              </p>
            </div>
            
            <div className="bg-background p-8">
              <Tv className="h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-2xl font-serif mb-3">Entertainment Lounges</h3>
              <p className="text-gray-600">
                Relax and socialize in our entertainment areas featuring large-screen TVs and comfortable seating.
              </p>
            </div>
            
            <div className="bg-background p-8">
              <Dumbbell className="h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-2xl font-serif mb-3">Fitness Center</h3>
              <p className="text-gray-600">
                State-of-the-art gym equipment available 24/7 for your health and wellness needs.
              </p>
            </div>
            
            <div className="bg-background p-8">
              <Utensils className="h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-2xl font-serif mb-3">Gourmet Kitchens</h3>
              <p className="text-gray-600">
                Premium appliances and ample space for cooking and entertaining in style.
              </p>
            </div>
            
            <div className="bg-background p-8">
              <Users className="h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-2xl font-serif mb-3">Community Events</h3>
              <p className="text-gray-600">
                Regular social gatherings, workshops, and networking opportunities for residents.
              </p>
            </div>
            
            <div className="bg-background p-8">
              <Lock className="h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-2xl font-serif mb-3">24/7 Security</h3>
              <p className="text-gray-600">
                Advanced security systems and controlled access for your peace of mind.
              </p>
            </div>
            
            <div className="bg-background p-8">
              <Bike className="h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-2xl font-serif mb-3">Bike Storage</h3>
              <p className="text-gray-600">
                Secure storage for bicycles, encouraging eco-friendly transportation options.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-6">Premium Services</h2>
              <p className="text-lg text-gray-700 mb-8">
                Beyond our standard amenities, Nera Living offers additional premium services to enhance your living experience even further:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">•</span>
                  <div>
                    <h4 className="font-medium">Professional Cleaning</h4>
                    <p className="text-gray-600">Optional weekly or bi-weekly cleaning services for your apartment.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">•</span>
                  <div>
                    <h4 className="font-medium">Package Receipt</h4>
                    <p className="text-gray-600">Secure package handling and notification service.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">•</span>
                  <div>
                    <h4 className="font-medium">Maintenance Support</h4>
                    <p className="text-gray-600">Prompt response to maintenance requests via our digital platform.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">•</span>
                  <div>
                    <h4 className="font-medium">Community App</h4>
                    <p className="text-gray-600">Digital access to building services, event registrations, and community forums.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 p-8 h-80"></div>
          </div>
        </div>
      </div>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default Amenities;
