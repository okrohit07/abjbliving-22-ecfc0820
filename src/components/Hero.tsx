import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
const Hero = () => {
  return <div className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" style={{
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/lovable-uploads/f41a175c-7eb1-4094-9bc5-c6ed5fd0340d.png)'
  }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent my-[70px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 text-white text-center my-[80px] relative flex flex-col items-center justify-center">
        <div className="absolute inset-0 flex justify-center items-center">
          <img src="/lovable-uploads/3bd870a2-7898-4890-a275-cbee1dbc4c52.png" alt="Intimate moment" className="w-full h-full object-cover opacity-85" />
        </div>
        
        <div className="relative z-10 p-8 rounded-lg flex flex-col items-center justify-center">
          <h2 className="text-base uppercase tracking-widest mb-2 md:mb-4 text-center">





BIENVENIDO A ABJB</h2>
          
          <h1 className="hero-heading md:text-5xl lg:text-7xl mb-6 md:mb-8 max-w-4xl mx-auto text-2xl text-center">VIVE LA EXPERIENCIA QUE SIEMPRE IMAGINASTE</h1>
          
          <p className="text-lg mb-8 max-w-2xl mx-auto font-thin md:text-base text-center">
            Exclusividad, comunidad, tecnología y sostenibilidad en perfecta armonía
          </p>
          
          <Link to="/find-room" className="inline-flex items-center bg-black/70 hover:bg-black transition-colors py-2 text-base uppercase tracking-wider px-4">
            <Search size={16} className="mr-2" /> Descubre Tu Espacio
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        
      </div>

      <div className="absolute bottom-0 left-0 right-0 text-center py-4 text-white/80 text-sm">
    </div>
    </div>;
};
export default Hero;