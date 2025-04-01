
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-7xl md:text-8xl font-serif mb-6">404</h1>
          <p className="text-2xl md:text-3xl mb-8">Page not found</p>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center bg-black text-white px-6 py-3 font-medium hover:bg-black/80 transition"
          >
            <ArrowLeft size={18} className="mr-2" /> Return to Home
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
