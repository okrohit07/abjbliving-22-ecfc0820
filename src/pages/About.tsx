
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";

const About = () => {
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
            <h1 className="text-5xl md:text-6xl font-serif mb-6">About Us</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Pioneers in modern coliving spaces for today's urban professionals.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-serif mb-8">Our Story</h2>
            <p className="text-xl text-gray-700 mb-6">
              Nera Living was founded in 2018 with a simple yet powerful vision: to transform how people live in urban environments. We recognized that traditional housing options often failed to meet the needs of modern professionals seeking both community and convenience.
            </p>
            <p className="text-xl text-gray-700 mb-6">
              What began as a single property has grown into a network of thoughtfully designed coliving spaces across multiple cities. Our approach combines beautiful private apartments with vibrant shared spaces and community programming.
            </p>
            <p className="text-xl text-gray-700">
              Today, Nera Living is home to hundreds of residents who value connection, convenience, and quality in their living environment.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif mb-8">Our Values</h2>
              <ul className="space-y-6">
                <li>
                  <h3 className="text-2xl font-medium mb-2">Community</h3>
                  <p className="text-gray-600">
                    We believe in the power of meaningful connections between people. Our spaces are designed to foster interaction while respecting privacy.
                  </p>
                </li>
                <li>
                  <h3 className="text-2xl font-medium mb-2">Quality</h3>
                  <p className="text-gray-600">
                    From construction to furnishings, we invest in quality that lasts and creates a comfortable, beautiful living environment.
                  </p>
                </li>
                <li>
                  <h3 className="text-2xl font-medium mb-2">Sustainability</h3>
                  <p className="text-gray-600">
                    We're committed to environmentally responsible practices in both construction and operations.
                  </p>
                </li>
                <li>
                  <h3 className="text-2xl font-medium mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    We continuously seek new ways to improve the coliving experience through thoughtful design and technology.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-4xl font-serif mb-8">Our Team</h2>
              <p className="text-gray-600 mb-8">
                The Nera Living team brings together expertise from real estate, hospitality, technology, and community building. We're united by our passion for creating exceptional living experiences.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-medium">Sofia Garcia</h3>
                  <p className="text-gray-600">Founder & CEO</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-medium">Michael Chen</h3>
                  <p className="text-gray-600">Chief Operating Officer</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-medium">Elena Kowalski</h3>
                  <p className="text-gray-600">Head of Community</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-medium">James Wilson</h3>
                  <p className="text-gray-600">Design Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default About;
