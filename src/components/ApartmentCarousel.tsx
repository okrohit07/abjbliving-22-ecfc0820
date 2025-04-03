import { useState } from 'react';
import { ArrowLeft, ArrowRight, Bath, Bed, Wifi, Home, Car, User } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
interface ApartmentProps {
  id: string;
  type: string;
  title: string;
  description: string;
  images: string[];
  features: {
    bathrooms: number;
    bedType: string;
    pax: string;
    wifi: boolean;
    size: string;
    parking: boolean;
    smartTv: boolean;
    fullKitchen: boolean;
    climate: string;
    amenities: boolean;
    accessibility: boolean;
    smartHome: boolean;
  };
  price: {
    amount: number;
    period: string;
    condition?: string;
  };
}

// Updated with new apartment information
const apartments: ApartmentProps[] = [{
  id: "street-view",
  type: "apartment",
  title: "STREET VIEW APARTMENT",
  description: "Acogedor apartamento con impresionantes vistas al bulevar de Juan Bravo. Espacio creado para ser funcional, proporcionando todo lo que necesitas en un ambiente práctico con un diseño moderno.",
  images: ["/lovable-uploads/f55620b5-ae48-47a7-be46-aede9cdf47cd.png"],
  features: {
    bathrooms: 1,
    bedType: "2 camas individuales",
    pax: "2 pax",
    wifi: true,
    size: "40 m²",
    parking: true,
    smartTv: true,
    fullKitchen: true,
    climate: "Calefacción/Refrigeración",
    amenities: true,
    accessibility: true,
    smartHome: true
  },
  price: {
    amount: 955,
    period: "/mes",
    condition: "(amueblado)"
  }
}, {
  id: "street-view-studio",
  type: "studio",
  title: "STREET VIEW STUDIO",
  description: "Estudio con vistas a la ciudad, ideal tanto para estancias en solitario como en pareja. Diseñado para proporcionar confort en un espacio optimizado.",
  images: ["/lovable-uploads/37d7672f-2797-4c56-b644-0d223cf2ce70.png"],
  features: {
    bathrooms: 1,
    bedType: "1 cama doble",
    pax: "1-2 pax",
    wifi: true,
    size: "35 m²",
    parking: true,
    smartTv: true,
    fullKitchen: true,
    climate: "Calefacción/Refrigeración",
    amenities: true,
    accessibility: true,
    smartHome: true
  },
  price: {
    amount: 1620,
    period: "/mes",
    condition: "(sin amueblar)"
  }
}, {
  id: "standard-studio-twin",
  type: "studio twin",
  title: "STANDARD STUDIO TWIN",
  description: "Estudio perfecto para parejas, diseñados para comodidad y privacidad, aprovechando al máximo el espacio con una estética contemporánea.",
  images: ["/lovable-uploads/9d67340a-5162-4a7d-9c29-6e7da1bfc070.png"],
  features: {
    bathrooms: 1,
    bedType: "2 camas individuales",
    pax: "2 pax",
    wifi: true,
    size: "30 m²",
    parking: true,
    smartTv: true,
    fullKitchen: true,
    climate: "Calefacción/Refrigeración",
    amenities: true,
    accessibility: true,
    smartHome: true
  },
  price: {
    amount: 2250,
    period: "/mes",
    condition: "(amueblado)"
  }
}, {
  id: "deluxe-apartment",
  type: "deluxe",
  title: "DELUXE APARTMENT",
  description: "Apartamento elegante y espacioso, con diseño moderno y premium. Una experiencia de lujo para aquellos que buscan lo mejor en confort y estilo.",
  images: ["/lovable-uploads/8733dfb8-abd8-48c1-a120-3bfa7952a9d0.png"],
  features: {
    bathrooms: 1,
    bedType: "1 cama doble",
    pax: "2 pax",
    wifi: true,
    size: "45 m²",
    parking: true,
    smartTv: true,
    fullKitchen: true,
    climate: "Calefacción/Refrigeración",
    amenities: true,
    accessibility: true,
    smartHome: true
  },
  price: {
    amount: 3500,
    period: "/mes",
    condition: "(totalmente amueblado)"
  }
}];
const ApartmentCard = ({
  apartment
}: {
  apartment: ApartmentProps;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % apartment.images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + apartment.images.length) % apartment.images.length);
  };
  return <div className="flex flex-col h-full">
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
        <img src={apartment.images[currentImageIndex]} alt={apartment.title} className="w-full h-full object-cover" />
        {apartment.images.length > 1 && <>
            <button onClick={prevImage} className="carousel-button left-2" aria-label="Previous image">
              <ArrowLeft size={18} />
            </button>
            <button onClick={nextImage} className="carousel-button right-2" aria-label="Next image">
              <ArrowRight size={18} />
            </button>
          </>}
      </div>
      
      <h3 className="text-lg font-serif mb-2">{apartment.title}</h3>
      
      <p className="text-xs text-gray-700 mb-3 flex-grow">
        {apartment.description}
      </p>
      
      <div className="grid grid-cols-2 gap-y-2 mb-4 border-l-2 border-gray-300 pl-3 text-xs">
        <div className="flex items-center">
          <Bath className="w-3 h-3 mr-1 opacity-80" />
          <span>{apartment.features.bathrooms} baño</span>
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
          <User className="w-3 h-3 mr-1 opacity-80" />
          <span>{apartment.features.pax}</span>
        </div>
      </div>
      
      <div className="mt-auto">
        <div className="text-xs text-gray-500">
      </div>
        <div className="flex items-baseline">
          <span className="text-xl font-semibold">{apartment.price.amount}€</span>
          <span className="text-xs ml-1">{apartment.price.period}</span>
        </div>
        {apartment.price.condition && <div className="text-xs text-gray-500">{apartment.price.condition}</div>}
        
        <button className="w-full bg-black text-white px-3 py-1.5 mt-2 font-medium hover:bg-black/80 transition text-xs">
          VER DETALLES
        </button>
      </div>
    </div>;
};
const ApartmentCarousel = () => {
  return <div className="py-12 bg-background md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-serif text-center mb-8">Our Apartments</h2>
        
        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {/* Group apartments in pairs */}
            {[0, 2].map(startIdx => <CarouselItem key={startIdx} className="md:basis-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {apartments.slice(startIdx, startIdx + 2).map(apartment => <div key={apartment.id} className="h-full">
                      <ApartmentCard apartment={apartment} />
                    </div>)}
                </div>
              </CarouselItem>)}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="relative inset-0 translate-y-0 !bg-black/10 !hover:bg-black/20 !border-none !w-10 !h-10 mr-2" />
            <CarouselNext className="relative inset-0 translate-y-0 !bg-black/10 !hover:bg-black/20 !border-none !w-10 !h-10 ml-2" />
          </div>
        </Carousel>
      </div>
    </div>;
};
export default ApartmentCarousel;