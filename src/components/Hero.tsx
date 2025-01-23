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
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
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
          "max-w-2xl mx-auto text-lg text-gray-400 mb-12 opacity-0",
          isVisible && "animate-fadeIn [animation-delay:0.6s]"
        )}>
          Откройте для себя изысканную коллекцию премиального чешского пива, созданного с вековыми традициями.
        </p>
      </div>
    </div>
  );
};