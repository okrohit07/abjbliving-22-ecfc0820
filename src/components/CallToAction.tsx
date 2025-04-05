
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/90 to-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
          Ready to Experience Modern Coliving?
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
          Join our community of professionals in a space that adapts to your lifestyle. 
          Limited rooms available in prime locations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/find-room">
            <Button size="lg" variant="secondary" className="text-primary font-semibold px-8">
              Find Your Room
            </Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20 px-8">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
