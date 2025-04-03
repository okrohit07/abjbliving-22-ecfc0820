
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Bath, Bed, Wifi, Home, Car, Thermometer } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

// Actualizado con las nuevas imágenes
const apartments: ApartmentProps[] = [{
  id: "studio",
  type: "studio",
  title: "STUDIO APARTMENTS",
  description: "Espacios creados para ser funcionales, proporcionando todo lo que necesitas en un ambiente práctico con un diseño moderno y acogedor.",
  images: ["/lovable-uploads/f55620b5-ae48-47a7-be46-aede9cdf47cd.png"],
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
  description: "Diseñados para comodidad y eficiencia, aprovechando al máximo el espacio con una estética contemporánea.",
  images: ["/lovable-uploads/37d7672f-2797-4c56-b644-0d223cf2ce70.png"],
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
}, {
  id: "two-bedroom",
  type: "2 bedrooms",
  title: "2-BEDROOM APARTMENTS",
  description: "Amplias áreas de estar con dormitorios separados, perfectos para compartir o familias que buscan espacio y confort adicional.",
  images: ["/lovable-uploads/9d67340a-5162-4a7d-9c29-6e7da1bfc070.png"],
  features: {
    bathrooms: 2,
    bedType: "Queen beds",
    wifi: true,
    furnished: true,
    size: "From 65 m²",
    parking: "Included parking",
    climate: "Air conditioning and heating"
  },
  price: {
    amount: 2250,
    period: "/month",
    condition: "(furnished)"
  }
}, {
  id: "luxury-suite",
  type: "luxury suite",
  title: "LUXURY SUITES",
  description: "Apartamentos premium con acabados de alta gama, espacios de vida ampliados y comodidades premium para aquellos que buscan el máximo confort.",
  images: ["/lovable-uploads/8733dfb8-abd8-48c1-a120-3bfa7952a9d0.png"],
  features: {
    bathrooms: 2,
    bedType: "King bed",
    wifi: true,
    furnished: true,
    size: "From 85 m²",
    parking: "Premium parking included",
    climate: "Smart climate control"
  },
  price: {
    amount: 3500,
    period: "/month",
    condition: "(fully furnished)"
  }
}];

const ApartmentCard = ({ apartment }: { apartment: ApartmentProps }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % apartment.images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + apartment.images.length) % apartment.images.length);
  };
  
  return (
    <div className="flex flex-col h-full">
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
        <img 
          src={apartment.images[currentImageIndex]} 
          alt={apartment.title} 
          className="w-full h-full object-cover"
        />
        {apartment.images.length > 1 && (
          <>
            <button 
              onClick={prevImage} 
              className="carousel-button left-2" 
              aria-label="Previous image"
            >
              <ArrowLeft size={18} />
            </button>
            <button 
              onClick={nextImage} 
              className="carousel-button right-2" 
              aria-label="Next image"
            >
              <ArrowRight size={18} />
            </button>
          </>
        )}
      </div>
      
      <h3 className="text-lg font-serif mb-2">{apartment.title}</h3>
      
      <p className="text-xs text-gray-700 mb-3 flex-grow">
        {apartment.description}
      </p>
      
      <div className="grid grid-cols-2 gap-y-2 mb-4 border-l-2 border-gray-300 pl-3 text-xs">
        <div className="flex items-center">
          <Bath className="w-3 h-3 mr-1 opacity-80" />
          <span>{apartment.features.bathrooms} bathroom</span>
        </div>
        <div className="flex items-center">
          <Home className="w-3 h-3 mr-1 opacity-80" />
          <span>{apartment.features.size}</span>
        </div>
        <div className="flex items-center">
          <Bed className="w-3 h-3 mr-1 opacity-80" />
          <span>{apartment.features.bedType}</span>
        </div>
        <div className="flex items-center">
          <Thermometer className="w-3 h-3 mr-1 opacity-80" />
          <span>{apartment.features.climate}</span>
        </div>
      </div>
      
      <div className="mt-auto">
        <div className="text-xs text-gray-500">from</div>
        <div className="flex items-baseline">
          <span className="text-xl font-semibold">{apartment.price.amount}€</span>
          <span className="text-xs ml-1">{apartment.price.period}</span>
        </div>
        {apartment.price.condition && (
          <div className="text-xs text-gray-500">{apartment.price.condition}</div>
        )}
        
        <button className="w-full bg-black text-white px-3 py-1.5 mt-2 font-medium hover:bg-black/80 transition text-xs">
          VIEW DETAILS
        </button>
      </div>
    </div>
  );
};

const ApartmentCarousel = () => {
  return (
    <div className="py-12 bg-background md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-serif text-center mb-8">Our Apartments</h2>
        
        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {/* Group apartments in pairs */}
            {[0, 2].map((startIdx) => (
              <CarouselItem key={startIdx} className="md:basis-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {apartments.slice(startIdx, startIdx + 2).map((apartment) => (
                    <div key={apartment.id} className="h-full">
                      <ApartmentCard apartment={apartment} />
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="relative inset-0 translate-y-0 !bg-black/10 !hover:bg-black/20 !border-none !w-10 !h-10 mr-2" />
            <CarouselNext className="relative inset-0 translate-y-0 !bg-black/10 !hover:bg-black/20 !border-none !w-10 !h-10 ml-2" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ApartmentCarousel;
