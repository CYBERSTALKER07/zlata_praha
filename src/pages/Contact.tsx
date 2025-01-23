import { Navigation } from "@/components/Navigation";
import { Phone, Facebook, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-darkBg">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-golden mb-12 text-center">Контактная Информация</h2>
        
        {/* Contact Info with Phone Icon */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <Phone className="text-golden w-8 h-8" />
          <p className="text-gray-300 text-xl">+7 (123) 456-78-90</p>
        </div>

        {/* Email */}
        <p className="text-gray-300 text-center mb-12 text-lg">Email: info@zlatapraha.com</p>

        {/* Address with larger image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img 
              src="/lovable-uploads/a048cf85-697d-4a5c-a6af-37e34615f7b3.png"
              alt="Наше местоположение"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="text-gray-300">
            <p className="text-xl mb-4">Адрес:</p>
            <p className="text-lg">ул. Пивоваров, 1</p>
            <p className="text-lg">Прага, Чехия</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-8 mt-12">
          <a href="#" className="text-golden hover:text-golden/80 transition-colors">
            <Facebook className="w-8 h-8" />
          </a>
          <a href="#" className="text-golden hover:text-golden/80 transition-colors">
            <Instagram className="w-8 h-8" />
          </a>
          <a href="#" className="text-golden hover:text-golden/80 transition-colors">
            <Linkedin className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;