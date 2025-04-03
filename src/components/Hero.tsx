import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
const Hero = () => {
  return <div className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" style={{
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/lovable-uploads/f41a175c-7eb1-4094-9bc5-c6ed5fd0340d.png)'
  }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent my-[70px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 text-white text-center my-[80px] relative">
        <div className="absolute inset-0 flex justify-center items-center">
          <img src="/lovable-uploads/3bd870a2-7898-4890-a275-cbee1dbc4c52.png" alt="Intimate moment" className="w-full h-full opacity-85 object-contain" />
        </div>
        
        <div className="relative z-10 p-8 rounded-lg px-[50px] py-[120px]">
          <h2 className="text-lg uppercase tracking-widest mb-2 md:mb-4 my-[40px] md:text-base">BIENVENIDO A ABJB</h2>
          
          <h1 className="hero-heading md:text-6xl lg:text-8xl mb-6 md:mb-8 max-w-4xl mx-auto text-3xl">VIVE LA EXPERIENCIA QUE SIEMPRE IMAGINASTE</h1>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto font-thin md:text-base">
            Exclusividad, comunidad, tecnología y sostenibilidad en perfecta armonía
          </p>
          
          <Link to="/find-room" className="inline-flex items-center bg-black/70 hover:bg-black transition-colors py-3 text-lg uppercase tracking-wider px-[19px]">
            <Search size={18} className="mr-2" /> Descubre Tu Espacio
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