import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="bg-black text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between mb-12 md:mb-16">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="text-3xl font-serif font-bold tracking-tight block mb-6">
              ABJB <span className="font-light">LIVING</span>
            </Link>
            <p className="max-w-xs text-gray-300 mb-6 text-xs">
              Elevando tu estilo de vida con nuestros espacios de coliving premium diseñados para una vida moderna, conectada y sostenible.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Navegación</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/apartments" className="text-gray-300 hover:text-white transition">Nuestros apartamentos</Link>
                </li>
                <li>
                  <Link to="/communities" className="text-gray-300 hover:text-white transition">
                    Comunidad
                  </Link>
                </li>
                <li>
                  <Link to="/amenities" className="text-gray-300 hover:text-white transition">Serivicios</Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white transition">
                    Nosotros
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Residencias</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/apartments/studio" className="text-gray-300 hover:text-white transition">
                    Estudio
                  </Link>
                </li>
                <li>
                  <Link to="/apartments/1-bedroom" className="text-gray-300 hover:text-white transition">
                    1-Recámara
                  </Link>
                </li>
                <li>
                  <Link to="/apartments/2-bedroom" className="text-gray-300 hover:text-white transition">
                    2-Recámaras
                  </Link>
                </li>
                <li>
                  <Link to="/apartments/pricing" className="text-gray-300 hover:text-white transition">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link to="/apartments/availability" className="text-gray-300 hover:text-white transition">
                    Disponibilidad
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-medium mb-4">Contáctanos</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">
                    Av. Paseo de la Reforma 296, Ciudad de México, 06600
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="mr-2 flex-shrink-0" />
                  <a href="tel:+5215512345678" className="text-gray-300 hover:text-white transition">
                    +52 (55) 1234-5678
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="mr-2 flex-shrink-0" />
                  <a href="mailto:info@abjb.com" className="text-gray-300 hover:text-white transition">
                    info@abjb.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ABJB Living. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">
              Términos de Servicio
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;