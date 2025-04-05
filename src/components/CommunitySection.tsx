
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const CommunitySection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 overflow-hidden rounded-2xl">
            <img 
              src="/lovable-uploads/8733dfb8-abd8-48c1-a120-3bfa7952a9d0.png" 
              alt="Community gathering in a modern coliving space" 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Join a Community of Like-minded Professionals</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our coliving spaces are designed to foster meaningful connections while respecting your privacy.
              From networking events to wellness activities, we create opportunities to build a community
              that enhances both your personal and professional life.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Experience the perfect balance between social interaction and personal space
              in our thoughtfully designed environments.
            </p>
            <Link to="/communities">
              <Button size="lg" className="rounded-full">
                Explore Our Communities
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
