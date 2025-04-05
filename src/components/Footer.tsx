
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-playfair text-2xl font-bold text-white mb-6">ABJB Living</h3>
            <p className="mb-4">
              Modern coliving spaces that blend luxury, technology, and sustainability for today's urban professionals.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Explore</h3>
            <ul className="space-y-3">
              <li><Link to="/apartments" className="hover:text-white transition-colors">Apartments</Link></li>
              <li><Link to="/amenities" className="hover:text-white transition-colors">Amenities</Link></li>
              <li><Link to="/communities" className="hover:text-white transition-colors">Communities</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/find-room" className="hover:text-white transition-colors">Find Your Room</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Locations</h3>
            <ul className="space-y-3">
              <li>New York, NY</li>
              <li>San Francisco, CA</li>
              <li>Boston, MA</li>
              <li>Austin, TX</li>
              <li>Miami, FL</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:info@abjbliving.com" className="hover:text-white transition-colors">info@abjbliving.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} ABJB Living. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
