import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const CallToAction = () => {
  return <section className="relative bg-black text-white py-16 md:py-24">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/f41a175c-7eb1-4094-9bc5-c6ed5fd0340d.png')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">¿Listo para descubrir tu espacio perfecto?</h2>
          <p className="md:text-xl text-gray-300 mb-8 text-sm">
            Únete a nuestra exclusiva comunidad y experimenta un nuevo nivel de vida de lujo con tecnología de vanguardia y compromiso con la sostenibilidad.
          </p>
          <Link to="/find-room" className="inline-flex items-center bg-white text-black px-6 py-3 font-medium hover:bg-white/90 transition">
            DESCUBRE TU RESIDENCIA <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>;
};
export default CallToAction;