
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative w-full min-h-[90vh] flex items-center">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/37d7672f-2797-4c56-b644-0d223cf2ce70.png")',
          filter: 'brightness(0.6)'
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">
        <div className="max-w-2xl text-white">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Modern Living Spaces for Today's Professionals
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Discover perfectly balanced coliving communities that combine luxury, technology, and sustainability in prime urban locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/find-room">
              <Button className="text-lg px-6 py-6">Find Your Room</Button>
            </Link>
            <Link to="/communities">
              <Button variant="outline" className="text-lg px-6 py-6 border-white text-white hover:bg-white/20">
                Explore Communities
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
