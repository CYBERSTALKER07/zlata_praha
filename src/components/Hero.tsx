import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-darkBg">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF3733_1px,transparent_1px)] bg-[size:40px] bg-[position:center] mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#D4AF3733_1px,transparent_1px)] bg-[size:40px] bg-[position:center] mix-blend-overlay" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex items-center justify-between">
        <div className="flex-1">
          <span className={cn(
            "inline-block text-sm font-medium text-golden mb-4 tracking-wider opacity-0",
            isVisible && "animate-fadeIn [animation-delay:0.2s]"
          )}>
            ПРЕМИАЛЬНАЯ КОЛЛЕКЦИЯ
          </span>
          
          <h1 className={cn(
            "text-4xl md:text-6xl font-bold text-white mb-6 opacity-0",
            isVisible && "animate-fadeIn [animation-delay:0.4s]"
          )}>
            Злата Прага
          </h1>
          
          <p className={cn(
            "max-w-2xl text-lg text-gray-400 mb-12 opacity-0",
            isVisible && "animate-fadeIn [animation-delay:0.6s]"
          )}>
            Откройте для себя изысканную коллекцию премиального чешского пива, созданного с вековыми традициями.
          </p>
        </div>

        <div className={cn(
          "hidden md:block w-1/3 opacity-0",
          isVisible && "animate-fadeIn [animation-delay:0.8s]"
        )}>
          <img 
            src="/lovable-uploads/8790bde9-715c-451b-9619-1726b04249c4.png"
            alt="Golden Splash"
            className="w-full h-auto object-contain animate-float"
          />
        </div>
      </div>
    </div>
  );
};