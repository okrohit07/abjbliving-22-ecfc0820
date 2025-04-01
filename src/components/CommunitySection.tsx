
import { Users, Coffee, Dumbbell, Wifi } from 'lucide-react';

const CommunitySection = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif mb-6">OUR COMMUNITIES</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join a vibrant community of like-minded individuals. Our coliving spaces are designed to foster connection while respecting privacy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-background p-8 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-serif mb-4">Community Events</h3>
            <p className="text-gray-600">
              Regular social gatherings and events to help you connect with your neighbors and build meaningful relationships.
            </p>
          </div>
          
          <div className="bg-background p-8 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Coffee className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-serif mb-4">Shared Spaces</h3>
            <p className="text-gray-600">
              Beautifully designed common areas where you can work, socialize, or simply relax outside your private apartment.
            </p>
          </div>
          
          <div className="bg-background p-8 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Dumbbell className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-serif mb-4">Wellness Facilities</h3>
            <p className="text-gray-600">
              Access to fitness centers, yoga spaces, and wellness programs to maintain a healthy lifestyle.
            </p>
          </div>
          
          <div className="bg-background p-8 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Wifi className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-serif mb-4">Digital Connectivity</h3>
            <p className="text-gray-600">
              High-speed internet throughout the property and smart home features for a seamless living experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
