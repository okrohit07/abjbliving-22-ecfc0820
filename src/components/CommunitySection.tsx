import { Users, Coffee, Dumbbell, Wifi, Heart } from 'lucide-react';
const CommunitySection = () => {
  return <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif mb-6 text-4xl">COMUNIDAD EXCLUSIVA</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-normal text-sm">En ABJB formarás parte de una comunidad exclusiva compuesta por jóvenes profesionales, emprendedores y perfiles creativos que comparten una misma visión de vida. Más que un lugar para vivir, es un espacio para conectar, crecer y compartir experiencias con personas afines, en un entorno diseñado para inspirar relaciones auténticas y estilo de vida premium. 


¿Lo mejor? Tú eliges cuánto te implicas. Siempre tendrás tu espacio, pero también la oportunidad de conectar cuando quieras.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
            <p className="text-gray-600">Acceso a gimnasios de alta gama, spa y programas de bienestar para mantener un estilo de vida saludable y equilibrado.</p>
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
          
          <div className="bg-background p-8 text-center shadow-md">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-serif mb-4">Bravo Society</h3>
            <p className="text-gray-600">
              Comunidad exclusiva solo para residentes donde podrás reservar espacios, participar en eventos exclusivos y controlar tu vivienda desde nuestra app.
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default CommunitySection;