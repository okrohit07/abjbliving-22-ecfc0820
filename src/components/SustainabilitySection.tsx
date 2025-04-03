
import { Leaf, Recycle, Wind, Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';

const SustainabilitySection = () => {
  return (
    <div 
      className="relative py-16 md:py-24 bg-cover bg-center text-white"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/lovable-uploads/438883b0-ffdc-4170-80dd-fe2e1e51b951.png)' 
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif mb-6">COMPROMISO CON LA SOSTENIBILIDAD</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            En ABJB, creemos que el lujo y la responsabilidad ambiental pueden coexistir. Nuestro compromiso con la sostenibilidad está presente en cada aspecto de nuestras residencias.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="backdrop-blur-sm bg-black/30 p-8 text-center rounded-lg border border-white/10">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-serif mb-4">Materiales Sostenibles</h3>
            <p className="text-gray-300">
              Utilizamos materiales ecoamigables y de origen responsable en la construcción y decoración de nuestros espacios.
            </p>
          </div>
          
          <div className="backdrop-blur-sm bg-black/30 p-8 text-center rounded-lg border border-white/10">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
              <Recycle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-serif mb-4">Cero Desperdicio</h3>
            <p className="text-gray-300">
              Programas de reciclaje y compostaje para reducir nuestro impacto ambiental y fomentar prácticas responsables en nuestra comunidad.
            </p>
          </div>
          
          <div className="backdrop-blur-sm bg-black/30 p-8 text-center rounded-lg border border-white/10">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
              <Wind className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-serif mb-4">Energía Renovable</h3>
            <p className="text-gray-300">
              Nuestras propiedades utilizan energía solar y otras fuentes renovables para reducir nuestra huella de carbono.
            </p>
          </div>
          
          <div className="backdrop-blur-sm bg-black/30 p-8 text-center rounded-lg border border-white/10">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
              <Droplet className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-serif mb-4">Gestión del Agua</h3>
            <p className="text-gray-300">
              Sistemas inteligentes de ahorro de agua y reutilización para un consumo responsable y eficiente.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            to="/about"
            className="inline-flex items-center px-6 py-3 border border-white hover:bg-white hover:text-black transition-colors"
          >
            CONOCE MÁS SOBRE NUESTRAS INICIATIVAS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SustainabilitySection;
