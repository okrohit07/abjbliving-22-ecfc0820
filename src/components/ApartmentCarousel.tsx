
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const apartmentData = [
  {
    id: 1,
    title: 'Studio Apartment',
    location: 'Downtown',
    image: '/lovable-uploads/9d67340a-5162-4a7d-9c29-6e7da1bfc070.png',
    price: '$1,800',
    size: '450 sq ft',
    features: ['Smart Home Integration', 'Sustainable Materials', 'Communal Lounge Access']
  },
  {
    id: 2,
    title: 'One Bedroom Suite',
    location: 'Midtown',
    image: '/lovable-uploads/c9b1fdff-26ae-4e8d-8a60-c566edd614fe.png',
    price: '$2,400',
    size: '650 sq ft',
    features: ['Private Balcony', 'Co-working Space', 'Weekly Cleaning Service']
  },
  {
    id: 3,
    title: 'Premium Loft',
    location: 'Arts District',
    image: '/lovable-uploads/3bd870a2-7898-4890-a275-cbee1dbc4c52.png',
    price: '$3,200',
    size: '850 sq ft',
    features: ['Floor-to-Ceiling Windows', 'Rooftop Garden Access', 'Pet Friendly']
  }
];

const ApartmentCarousel = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Featured Living Spaces</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully designed living spaces that combine comfort, functionality, and style.
            Each unit is uniquely crafted to enhance your lifestyle.
          </p>
        </div>
        
        <Carousel className="w-full">
          <CarouselContent>
            {apartmentData.map((apartment) => (
              <CarouselItem key={apartment.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={apartment.image}
                      alt={apartment.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-xl">{apartment.title}</h3>
                      <span className="text-primary font-bold">{apartment.price}/mo</span>
                    </div>
                    <p className="text-gray-500 mb-3">{apartment.location} • {apartment.size}</p>
                    
                    <ul className="mb-5 space-y-1">
                      {apartment.features.map((feature, index) => (
                        <li key={index} className="text-gray-700 text-sm flex items-center">
                          <span className="mr-2 text-primary">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link to="/find-room">
                      <Button className="w-full">View Details</Button>
                    </Link>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="static transform-none" />
            <CarouselNext className="static transform-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ApartmentCarousel;
