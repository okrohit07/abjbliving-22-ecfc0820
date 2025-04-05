
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApartmentCarousel from "@/components/ApartmentCarousel";
import CallToAction from "@/components/CallToAction";
import { Wifi, Thermometer, AirVent, Tv, Utensils, Armchair, Towel, Bed, Gift, Wheelchair, Car } from "lucide-react";

const Apartments = () => {
  return <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-8 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Nuestros apartamentos</h1>
          <p className="text-gray-600 max-w-3xl text-justify text-sm">En ABJB, nuestros apartamentos están diseñados para ofrecer una experiencia de vida única, combinando lujo, confort y tecnología avanzada. Cada espacio está cuidadosamente planificado para maximizar el bienestar de nuestros residentes, con acabados de alta gama y soluciones sostenibles que promueven un estilo de vida moderno y eficiente. Perfectos para aquellos que buscan un hogar exclusivo y funcional en el corazón de la ciudad.</p>
        </div>
      </div>
      <ApartmentCarousel />
      
      {/* New Amenities Section */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Todo lo que incluye tu apartamento</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-3">
                <Wifi className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">WiFi</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-3">
                <Thermometer className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">Calefacción / Refrigeración</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-3">
                <AirVent className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">Aire renovado</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-3">
                <Tv className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">Smart TV</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-3">
                <Utensils className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">Cocina completa</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-3">
                <Armchair className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">Armario</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-3">
                <Towel className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">Toallas y ropa de cama</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-3">
                <Gift className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">Amenities</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-3">
                <Bed className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">Materiales biosaludables</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-3">
                <Car className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">Parking</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-3">
                <Wheelchair className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">Accesibilidad universal</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-3">
                <Wifi className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">Domótica inteligente</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8">
              <h3 className="text-2xl font-serif mb-4 text-left">Todo incluido</h3>
              <p className="text-gray-600 mb-4 text-xs text-left">Nuestras viviendas cuentan con todos los servicios que necesitas para una vida cómoda y sin preocupaciones. Desde el mobiliario de lujo hasta el mantenimiento continuo, todo está incluido para que disfrutes de un estilo de vida premium sin complicaciones.</p>
            </div>
            <div className="bg-background p-8">
              <h3 className="text-2xl font-serif mb-4">Contratos flexibles</h3>
              <p className="text-gray-600 mb-4 text-xs">Sabemos que cada residente tiene sus propias necesidades, por eso ofrecemos contratos flexibles adaptados a ellas. Ya sea que busques una estancia corta o a largo plazo, en ABJB tenemos opciones que se ajustan a tu ritmo de vida.</p>
            </div>
            <div className="bg-background p-8">
              <h3 className="text-2xl font-serif mb-4">Ubicación privilegiada</h3>
              <p className="text-gray-600 mb-4 text-xs">Situado en una de las zonas más exclusivas de Madrid, vivir en ABJB es tener la ciudad a tus pies, combinando la comodidad del hogar con la energía y dinamismo del entorno urbano.</p>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </div>;
};
export default Apartments;
