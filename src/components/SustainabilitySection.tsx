
import React from 'react';

const SustainabilitySection = () => {
  return (
    <section className="py-16 md:py-24 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="max-w-xl">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Committed to Sustainability</h2>
              <p className="text-lg text-gray-700 mb-6">
                At ABJB Living, we believe sustainable living should be accessible without compromising on luxury or comfort.
                Our spaces are designed with eco-friendly practices from conception to daily operations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <span className="text-green-600 text-xl font-semibold">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Renewable Energy</h3>
                    <p className="text-gray-600">All our buildings are powered by renewable energy sources and equipped with energy-efficient systems.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <span className="text-green-600 text-xl font-semibold">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Water Conservation</h3>
                    <p className="text-gray-600">Smart water systems that reduce waste while maintaining excellent water quality and pressure.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <span className="text-green-600 text-xl font-semibold">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Eco-friendly Materials</h3>
                    <p className="text-gray-600">Our interiors feature sustainable materials and non-toxic finishes for a healthier living environment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="/lovable-uploads/f55620b5-ae48-47a7-be46-aede9cdf47cd.png" 
                alt="Sustainable living environment with plants and natural light" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
