
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, DollarSign, Home, Map, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/components/ui/use-toast";

const FindRoom = () => {
  const { toast } = useToast();
  const [priceRange, setPriceRange] = useState([900, 2000]);
  const [location, setLocation] = useState("");
  const [apartmentType, setApartmentType] = useState("");
  const [moveInDate, setMoveInDate] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Search submitted",
      description: "We'll find the perfect room for you based on your preferences.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div 
        className="relative py-24 md:py-32 bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/lovable-uploads/f41a175c-7eb1-4094-9bc5-c6ed5fd0340d.png)' 
        }}
      >
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-serif mb-6">Find Your Room</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Discover the perfect living space to match your lifestyle and preferences.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white p-8 md:p-10 shadow-md max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif mb-6">Filter Your Search</h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <Map className="mt-1 h-5 w-5 text-gray-500" />
                  <div className="flex-1">
                    <Label htmlFor="location" className="text-lg font-medium">
                      Location
                    </Label>
                    <Input 
                      id="location" 
                      placeholder="City or neighborhood" 
                      className="mt-1"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Home className="mt-1 h-5 w-5 text-gray-500" />
                  <div className="flex-1">
                    <Label htmlFor="apartment-type" className="text-lg font-medium">
                      Apartment Type
                    </Label>
                    <select 
                      id="apartment-type"
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                      value={apartmentType}
                      onChange={(e) => setApartmentType(e.target.value)}
                    >
                      <option value="">Any type</option>
                      <option value="studio">Studio</option>
                      <option value="1-bedroom">1-Bedroom</option>
                      <option value="2-bedroom">2-Bedroom</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <DollarSign className="mt-1 h-5 w-5 text-gray-500" />
                  <div className="flex-1">
                    <Label className="text-lg font-medium">
                      Price Range (€{priceRange[0]} - €{priceRange[1]})
                    </Label>
                    <div className="pt-6 pb-2">
                      <Slider 
                        defaultValue={[900, 2000]} 
                        max={3000} 
                        min={500} 
                        step={50} 
                        value={priceRange}
                        onValueChange={setPriceRange}
                      />
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>€500</span>
                      <span>€3000</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Calendar className="mt-1 h-5 w-5 text-gray-500" />
                  <div className="flex-1">
                    <Label htmlFor="move-in-date" className="text-lg font-medium">
                      Move-in Date
                    </Label>
                    <Input 
                      id="move-in-date" 
                      type="date"
                      className="mt-1"
                      value={moveInDate}
                      onChange={(e) => setMoveInDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full bg-black hover:bg-black/80 text-white py-6">
                FIND AVAILABLE ROOMS
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Need Assistance?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team is here to help you find the perfect room. Get in touch and we'll guide you through the process.
            </p>
            <div className="flex justify-center">
              <Button className="bg-black hover:bg-black/80 text-white">
                CONTACT US
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FindRoom;
