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
              <h3 className="text-2xl font-serif mb-4">All-Inclusive Living</h3>
              <p className="text-gray-600 mb-4">
                Our apartments come with utilities included, making budgeting simple and hassle-free.
              </p>
            </div>
            <div className="bg-background p-8">
              <h3 className="text-2xl font-serif mb-4">Flexible Leasing</h3>
              <p className="text-gray-600 mb-4">
                Choose from various lease options to find the perfect arrangement for your lifestyle.
              </p>
            </div>
            <div className="bg-background p-8">
              <h3 className="text-2xl font-serif mb-4">Prime Locations</h3>
              <p className="text-gray-600 mb-4">
                All our properties are situated in vibrant neighborhoods with excellent transportation links.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </div>;
};
export default Apartments;