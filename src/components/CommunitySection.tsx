
import { Users, Coffee, Dumbbell, Wifi } from 'lucide-react';

const CommunitySection = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif mb-6">COMUNIDAD EXCLUSIVA</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Únete a una comunidad exclusiva de mentes brillantes e inspiradoras. Nuestros espacios están diseñados para fomentar conexiones significativas mientras respetan tu privacidad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-background p-8 text-center shadow-md">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-serif mb-4">Eventos Exclusivos</h3>
            <p className="text-gray-600">
              Reuniones sociales y eventos exclusivos para conectar con los miembros de nuestra comunidad y crear relaciones significativas.
            </p>
          </div>
          
          <div className="bg-background p-8 text-center shadow-md">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
              <Coffee className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-serif mb-4">Espacios Compartidos</h3>
            <p className="text-gray-600">
              Áreas comunes diseñadas con elegancia donde puedes trabajar, socializar o simplemente relajarte fuera de tu apartamento privado.
            </p>
          </div>
          
          <div className="bg-background p-8 text-center shadow-md">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
              <Dumbbell className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-serif mb-4">Bienestar Premium</h3>
            <p className="text-gray-600">
              Acceso a gimnasios de alta gama, espacios para yoga y programas de bienestar para mantener un estilo de vida saludable y equilibrado.
            </p>
          </div>
          
          <div className="bg-background p-8 text-center shadow-md">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
              <Wifi className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-serif mb-4">Conectividad Avanzada</h3>
            <p className="text-gray-600">
              Internet de alta velocidad en toda la propiedad y funciones inteligentes para una experiencia de vida perfectamente conectada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
