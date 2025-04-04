import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommunitySection from "@/components/CommunitySection";
import CallToAction from "@/components/CallToAction";
const Communities = () => {
  return <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-8 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Nuestra comunidad</h1>
          <p className="text-gray-600 max-w-3xl text-sm">Experimenta el poder de la conexión en nuestros espacios de vida cuidadosamente diseñados, donde la comunidad y el crecimiento personal son el corazón de todo lo que hacemos.</p>
        </div>
      </div>
      <CommunitySection />
      <div className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-serif mb-6">Eventos y experiencias comunitarias</h2>
              <p className="text-gray-600 mb-6 text-sm">En ABJB, creemos que la comunidad no solo se vive dentro de los apartamentos, sino que también se extiende a toda la ciudad. Además de los eventos exclusivos organizados en nuestros espacios, la app Bravo Society te permite descubrir y unirte a experiencias únicas con tus compañeros. Ya sea una cena privada, una exposición de arte o una actividad de bienestar, la ciudad se convierte en tu lugar de encuentro.</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Eventos privados en los espacios comunes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Acceso a eventos exclusivos a través de la app Bravo Society</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Experiencias culturales y sociales por la ciudad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Conexiones únicas con tus compañeros de comunidad</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-4xl font-serif mb-6">Community Values</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Nera Living, we're built around core values that promote a positive, inclusive, and supportive environment for all residents.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Respect for individual boundaries and differences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Shared responsibility for common spaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Environmental consciousness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Support for personal and professional growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </div>;
};
export default Communities;