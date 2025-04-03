import { Smartphone, Cpu, Shield, Lightbulb } from 'lucide-react';
const TechnologySection = () => {
  return <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif mb-6 text-4xl">TECNOLOGÍA AVANZADA</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            En ABJB, la tecnología no es solo una comodidad, es parte integral de nuestra filosofía para ofrecerte la experiencia de vida más innovadora y conectada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center flex-shrink-0">
              <Smartphone className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-serif mb-3">Hogar Inteligente</h3>
              <p className="text-gray-600">
                Controla todos los aspectos de tu residencia desde la iluminación hasta la temperatura y la seguridad mediante nuestra aplicación exclusiva. Personaliza tu espacio según tus preferencias en cualquier momento y desde cualquier lugar.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center flex-shrink-0">
              <Cpu className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-serif mb-3">Conectividad Premium</h3>
              <p className="text-gray-600">
                Disfruta de internet de alta velocidad mediante fibra óptica en toda la propiedad. Nuestros espacios de trabajo compartidos están equipados con la tecnología más avanzada para satisfacer tus necesidades profesionales.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-serif mb-3">Seguridad Avanzada</h3>
              <p className="text-gray-600">
                Sistemas de seguridad biométricos, acceso sin llave mediante reconocimiento facial y monitoreo de última generación. Tu seguridad y privacidad son nuestra prioridad absoluta.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center flex-shrink-0">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-serif mb-3">Eficiencia Energética</h3>
              <p className="text-gray-600">
                Sistemas inteligentes que optimizan el consumo energético de tu residencia, reduciendo costos y minimizando el impacto ambiental sin comprometer tu confort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default TechnologySection;