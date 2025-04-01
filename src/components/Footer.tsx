
import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between mb-12 md:mb-16">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="text-3xl font-serif font-bold tracking-tight block mb-6">
              NERA <span className="font-light">LIVING</span>
            </Link>
            <p className="max-w-xs text-gray-300 mb-6">
              Elevate your lifestyle with our premium coliving spaces designed for modern living and community connection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-green-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-400 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-400 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-400 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/apartments" className="text-gray-300 hover:text-white transition">
                    Apartments
                  </Link>
                </li>
                <li>
                  <Link to="/communities" className="text-gray-300 hover:text-white transition">
                    Communities
                  </Link>
                </li>
                <li>
                  <Link to="/amenities" className="text-gray-300 hover:text-white transition">
                    Amenities
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white transition">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Apartments</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/apartments/studio" className="text-gray-300 hover:text-white transition">
                    Studio
                  </Link>
                </li>
                <li>
                  <Link to="/apartments/1-bedroom" className="text-gray-300 hover:text-white transition">
                    1-Bedroom
                  </Link>
                </li>
                <li>
                  <Link to="/apartments/2-bedroom" className="text-gray-300 hover:text-white transition">
                    2-Bedroom
                  </Link>
                </li>
                <li>
                  <Link to="/apartments/pricing" className="text-gray-300 hover:text-white transition">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/apartments/availability" className="text-gray-300 hover:text-white transition">
                    Availability
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-medium mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">
                    123 Coliving Street, City Center, 12345
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="mr-2 flex-shrink-0" />
                  <a href="tel:+12345678901" className="text-gray-300 hover:text-white transition">
                    +1 (234) 567-8901
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="mr-2 flex-shrink-0" />
                  <a href="mailto:info@neraliving.com" className="text-gray-300 hover:text-white transition">
                    info@neraliving.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Nera Living. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
