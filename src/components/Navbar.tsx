import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif font-bold tracking-tight">
          ABJB <span className="font-light"></span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/apartments" className="text-sm font-medium hover:text-black/70 transition">NUESTROS APARTAMENTOS</Link>
          <Link to="/communities" className="text-sm font-medium hover:text-black/70 transition">
            COMUNIDAD
          </Link>
          <Link to="/amenities" className="text-sm font-medium hover:text-black/70 transition">SERVICIOS</Link>
          <Link to="/about" className="text-sm font-medium hover:text-black/70 transition">
            NOSOTROS
          </Link>
          <Link to="/find-room" className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-black/80 transition">DESCUBRE TU ESPACIO</Link>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && <div className="md:hidden bg-background absolute top-full left-0 right-0 border-t border-gray-200 shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/apartments" className="text-sm font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
              RESIDENCIAS
            </Link>
            <Link to="/communities" className="text-sm font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
              COMUNIDAD
            </Link>
            <Link to="/amenities" className="text-sm font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
              AMENIDADES
            </Link>
            <Link to="/about" className="text-sm font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
              NOSOTROS
            </Link>
            <Link to="/find-room" className="bg-black text-white px-4 py-2 text-sm font-medium text-center" onClick={() => setIsMobileMenuOpen(false)}>
              ENCUENTRA TU ESPACIO
            </Link>
          </div>
        </div>}
    </header>;
};
export default Navbar;