import { useState } from 'react';
import { ArrowLeft, ArrowRight, Bath, Bed, Wifi, Home, Car, Thermometer } from 'lucide-react';
interface ApartmentProps {
  id: string;
  type: string;
  title: string;
  description: string;
  images: string[];
  features: {
    bathrooms: number;
    bedType: string;
    wifi: boolean;
    furnished: boolean;
    size: string;
    parking: string;
    climate: string;
  };
  price: {
    amount: number;
    period: string;
    condition?: string;
  };
}
const apartments: ApartmentProps[] = [{
  id: "studio",
  type: "studio",
  title: "STUDIO APARTMENTS",
  description: "Spaces created to be functional, providing everything you need in a practical environment with a modern and inviting design.",
  images: ["/lovable-uploads/c9b1fdff-26ae-4e8d-8a60-c566edd614fe.png"],
  features: {
    bathrooms: 1,
    bedType: "Double bed",
    wifi: true,
    furnished: true,
    size: "From 36 m²",
    parking: "Optional car park",
    climate: "Air conditioning and heating"
  },
  price: {
    amount: 955,
    period: "/month",
    condition: "(furnished)"
  }
}, {
  id: "one-bedroom",
  type: "1 bedroom",
  title: "1-BEDROOM APARTMENTS",
  description: "Designed for comfort and efficiency, making the best use of space with a contemporary aesthetic.",
  images: ["/lovable-uploads/c9b1fdff-26ae-4e8d-8a60-c566edd614fe.png"],
  features: {
    bathrooms: 1,
    bedType: "Double bed",
    wifi: true,
    furnished: true,
    size: "From 45 m²",
    parking: "Optional car park",
    climate: "Air conditioning and heating"
  },
  price: {
    amount: 1620,
    period: "/month",
    condition: "(unfurnished)"
  }
}];
const ApartmentCarousel = () => {
  const [currentApartmentIndex, setCurrentApartmentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentApartment = apartments[currentApartmentIndex];
  const nextApartment = () => {
    setCurrentApartmentIndex(prev => (prev + 1) % apartments.length);
    setCurrentImageIndex(0);
  };
  const prevApartment = () => {
    setCurrentApartmentIndex(prev => (prev - 1 + apartments.length) % apartments.length);
    setCurrentImageIndex(0);
  };
  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % currentApartment.images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + currentApartment.images.length) % currentApartment.images.length);
  };
  return <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative overflow-hidden rounded-lg">
              
              
              {currentApartment.images.length > 1 && <>
                  <button onClick={prevImage} className="carousel-button left-4" aria-label="Previous image">
                    <ArrowLeft size={20} />
                  </button>
                  <button onClick={nextImage} className="carousel-button right-4" aria-label="Next image">
                    <ArrowRight size={20} />
                  </button>
                </>}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="apartment-heading text-5xl">{currentApartment.title}</h2>
              <div className="flex space-x-2">
                <button onClick={prevApartment} className="carousel-button !static !translate-y-0 !bg-black/10 !hover:bg-black/20 !w-10 !h-10" aria-label="Previous apartment">
                  <ArrowLeft size={18} className="text-black" />
                </button>
                <button onClick={nextApartment} className="carousel-button !static !translate-y-0 !bg-black/10 !hover:bg-black/20 !w-10 !h-10" aria-label="Next apartment">
                  <ArrowRight size={18} className="text-black" />
                </button>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mb-8">
              {currentApartment.description}
            </p>
            
            <div className="grid grid-cols-2 gap-y-4 mb-10 border-l-2 border-gray-300 pl-4">
              <div className="flex items-center">
                <Bath className="amenity-icon" />
                <span>{currentApartment.features.bathrooms} bathroom</span>
              </div>
              <div className="flex items-center">
                <Home className="amenity-icon" />
                <span>{currentApartment.features.size}</span>
              </div>
              <div className="flex items-center">
                <Bed className="amenity-icon" />
                <span>{currentApartment.features.bedType}</span>
              </div>
              <div className="flex items-center">
                <Car className="amenity-icon" />
                <span>{currentApartment.features.parking}</span>
              </div>
              <div className="flex items-center">
                <Wifi className="amenity-icon" />
                <span>Wi-Fi</span>
              </div>
              <div className="flex items-center">
                <Thermometer className="amenity-icon" />
                <span>{currentApartment.features.climate}</span>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="text-sm text-gray-500">from</div>
              <div className="flex items-baseline">
                <span className="text-4xl font-semibold">{currentApartment.price.amount}€</span>
                <span className="text-xl ml-1">{currentApartment.price.period}</span>
              </div>
              {currentApartment.price.condition && <div className="text-sm text-gray-500">{currentApartment.price.condition}</div>}
            </div>
            
            <button className="bg-black text-white px-6 py-3 font-medium hover:bg-black/80 transition">
              VIEW DETAILS
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default ApartmentCarousel;