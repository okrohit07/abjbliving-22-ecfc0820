
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="font-playfair text-2xl font-bold text-gray-800">ABJB Living</span>
        </Link>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            {isOpen && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 flex flex-col gap-4 animate-fade-in">
                <Link to="/apartments" className="py-2 text-gray-800 hover:text-primary transition-colors" onClick={toggleMenu}>Apartments</Link>
                <Link to="/amenities" className="py-2 text-gray-800 hover:text-primary transition-colors" onClick={toggleMenu}>Amenities</Link>
                <Link to="/communities" className="py-2 text-gray-800 hover:text-primary transition-colors" onClick={toggleMenu}>Communities</Link>
                <Link to="/about" className="py-2 text-gray-800 hover:text-primary transition-colors" onClick={toggleMenu}>About Us</Link>
                <Link to="/find-room">
                  <Button className="w-full bg-primary hover:bg-primary/90">Find Your Room</Button>
                </Link>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-8">
            <Link to="/apartments" className="text-gray-800 hover:text-primary transition-colors">Apartments</Link>
            <Link to="/amenities" className="text-gray-800 hover:text-primary transition-colors">Amenities</Link>
            <Link to="/communities" className="text-gray-800 hover:text-primary transition-colors">Communities</Link>
            <Link to="/about" className="text-gray-800 hover:text-primary transition-colors">About Us</Link>
            <Link to="/find-room">
              <Button>Find Your Room</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
