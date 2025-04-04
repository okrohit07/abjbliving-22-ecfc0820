import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApartmentCarousel from "@/components/ApartmentCarousel";
import CallToAction from "@/components/CallToAction";
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
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8">
              <h3 className="text-2xl font-serif mb-4 text-left">Viviendas todo incluido</h3>
              <p className="text-gray-600 mb-4 text-xs text-left">Nuestras viviendas cuentan con todos los servicios que necesitas para una vida cómoda y sin preocupaciones. Desde el mobiliario de lujo hasta el mantenimiento continuo, todo está incluido para que disfrutes de un estilo de vida premium sin complicaciones.</p>
            </div>
            <div className="bg-background p-8">
              <h3 className="text-2xl font-serif mb-4">Contratos flexibles</h3>
              <p className="text-gray-600 mb-4 text-xs">Sabemos que cada residente tiene sus propias necesidades, por eso ofrecemos contratos flexibles que se adaptan a tus planes. Ya sea que busques una estancia corta o a largo plazo, en ABJB tenemos opciones que se ajustan a tu ritmo de vida.</p>
            </div>
            <div className="bg-background p-8">
              <h3 className="text-2xl font-serif mb-4">Ubicación privilegiada</h3>
              <p className="text-gray-600 mb-4 text-xs">Situadas en una de las zonas más exclusivas de la ciudad, nuestras viviendas ofrecen acceso directo a los mejores restaurantes, tiendas y servicios. Vivir en ABJB es tener la ciudad a tus pies, combinando la comodidad del hogar con la energía y dinamismo del entorno urbano.</p>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </div>;
};
export default Apartments;