import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import { Wifi, Coffee, Tv, Dumbbell, Utensils, Users, Lock, Bike, Check } from "lucide-react";
import { Link } from "react-router-dom";
const Amenities = () => {
  return <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-cover bg-center flex items-end" style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/lovable-uploads/f41a175c-7eb1-4094-9bc5-c6ed5fd0340d.png)'
    }}>
        <div className="container mx-auto px-4 md:px-6 pb-20">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-serif mb-6">Nuestros servicios</h1>
            <p className="text-xl">
              Descubre todas las comodidades y servicios diseñados para elevar tu experiencia de vida.
            </p>
          </div>
        </div>
      </div>

      {/* Main Description */}
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Vive con Todo Incluido</h2>
            <p className="text-xl text-gray-700">
              En ABJB, no solo ofrecemos un espacio para vivir, sino un estilo de vida completo. Nuestras amenidades están cuidadosamente diseñadas para satisfacer todas tus necesidades y superar tus expectativas.
            </p>
          </div>
        </div>
      </div>

      {/* Amenities Grid */}
      <div className="bg-background py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 shadow-md">
              <Wifi className="h-10 w-10 text-black mb-4" />
              <h3 className="text-2xl font-serif mb-3">Internet Alta Velocidad</h3>
              <p className="text-gray-600">
                Conexión wifi ultrarrápida en todas las áreas comunes y privadas.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-md">
              <Coffee className="h-10 w-10 text-black mb-4" />
              <h3 className="text-2xl font-serif mb-3">Espacios de Co-working</h3>
              <p className="text-gray-600">
                Áreas dedicadas al trabajo con mobiliario ergonómico y servicios integrados.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-md">
              <Tv className="h-10 w-10 text-black mb-4" />
              <h3 className="text-2xl font-serif mb-3">Salas de Entretenimiento</h3>
              <p className="text-gray-600">
                Espacios de ocio equipados con la última tecnología audiovisual.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-md">
              <Dumbbell className="h-10 w-10 text-black mb-4" />
              <h3 className="text-2xl font-serif mb-3">Gimnasio Completo</h3>
              <p className="text-gray-600">
                Equipamiento de última generación disponible 24/7.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-md">
              <Utensils className="h-10 w-10 text-black mb-4" />
              <h3 className="text-2xl font-serif mb-3">Cocinas Gourmet</h3>
              <p className="text-gray-600">
                Electrodomésticos premium y espacios diseñados para los amantes de la gastronomía.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-md">
              <Users className="h-10 w-10 text-black mb-4" />
              <h3 className="text-2xl font-serif mb-3">Eventos de Comunidad</h3>
              <p className="text-gray-600">
                Actividades regulares para fomentar conexiones entre residentes.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-md">
              <Lock className="h-10 w-10 text-black mb-4" />
              <h3 className="text-2xl font-serif mb-3">Seguridad 24/7</h3>
              <p className="text-gray-600">
                Sistemas avanzados y personal cualificado para tu tranquilidad.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-md">
              <Bike className="h-10 w-10 text-black mb-4" />
              <h3 className="text-2xl font-serif mb-3">Almacenamiento de Bicicletas</h3>
              <p className="text-gray-600">
                Espacios seguros para guardar tu bicicleta y fomentar la movilidad sostenible.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Services */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-serif mb-8">Servicios Premium</h2>
              <p className="text-lg text-gray-700 mb-8">
                Además de nuestras amenidades estándar, ofrecemos servicios adicionales para quienes buscan una experiencia aún más exclusiva:
              </p>
              <ul className="space-y-6">
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center mr-4">
                    <Check className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-xl">Limpieza Profesional</h4>
                    <p className="text-gray-600">Servicio opcional de limpieza semanal o quincenal.</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center mr-4">
                    <Check className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-xl">Recepción de Paquetes</h4>
                    <p className="text-gray-600">Gestión segura de envíos y notificaciones inmediatas.</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center mr-4">
                    <Check className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-xl">Soporte de Mantenimiento</h4>
                    <p className="text-gray-600">Respuesta rápida a solicitudes a través de nuestra plataforma digital.</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center mr-4">
                    <Check className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-xl">Aplicación Comunitaria</h4>
                    <p className="text-gray-600">Acceso digital a servicios, eventos y foros comunitarios.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 h-auto min-h-[400px] bg-cover bg-center" style={{
            backgroundImage: 'url(/lovable-uploads/f41a175c-7eb1-4094-9bc5-c6ed5fd0340d.png)'
          }}></div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-serif mb-12 text-center">Preguntas Frecuentes</h2>
          <div className="max-w-3xl mx-auto divide-y">
            <div className="py-6">
              <h3 className="text-xl font-medium mb-2">¿Todas las amenidades están incluidas en el alquiler?</h3>
              <p className="text-gray-600">
                Sí, todas las amenidades estándar están incluidas en tu alquiler mensual. Los servicios premium pueden tener costos adicionales según el plan que elijas.
              </p>
            </div>
            <div className="py-6">
              <h3 className="text-xl font-medium mb-2">¿Las amenidades están disponibles 24/7?</h3>
              <p className="text-gray-600">
                El gimnasio, áreas de coworking y algunas áreas comunes están disponibles las 24 horas. Otras amenidades pueden tener horarios específicos que se comunican a todos los residentes.
              </p>
            </div>
            <div className="py-6">
              <h3 className="text-xl font-medium mb-2">¿Puedo reservar espacios para eventos privados?</h3>
              <p className="text-gray-600">
                Absolutamente. Nuestras áreas comunes pueden reservarse para eventos privados a través de nuestra aplicación o contactando con el equipo de administración.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="text-white py-12 bg-stone-400">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">¿Con ganas de más?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Programa una visita y descubre personalmente todo lo que ABJB tiene para ofrecer.
          </p>
          <Link to="/find-room" className="inline-flex items-center bg-white text-black px-6 py-3 font-medium hover:bg-white/90 transition">
            PROGRAMA TU VISITA
          </Link>
        </div>
      </div>
      
      <CallToAction />
      <Footer />
    </div>;
};
export default Amenities;