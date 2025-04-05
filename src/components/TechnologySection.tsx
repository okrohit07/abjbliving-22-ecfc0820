
import React from 'react';
import { Laptop, Wifi, Lock, Shield } from 'lucide-react';

const featureItems = [
  {
    icon: <Wifi className="w-10 h-10 text-primary" />,
    title: 'High-Speed Internet',
    description: 'Fiber optic connections throughout all our spaces ensuring seamless work and entertainment experiences.'
  },
  {
    icon: <Lock className="w-10 h-10 text-primary" />,
    title: 'Smart Access',
    description: 'Keyless entry systems and smartphone-controlled access to all building amenities.'
  },
  {
    icon: <Laptop className="w-10 h-10 text-primary" />,
    title: 'Home Automation',
    description: 'Voice-controlled lighting, climate, and entertainment systems in all our living spaces.'
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: 'Advanced Security',
    description: 'Round-the-clock monitoring and AI-powered security systems for your peace of mind.'
  }
];

const TechnologySection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Smart Living Technology</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our spaces are equipped with cutting-edge technology to enhance your living experience 
            and provide ultimate convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureItems.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="mb-5">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
