import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px)] bg-[size:40px] bg-[position:center] mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px] bg-[position:center] mix-blend-overlay" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <span className={cn(
          "inline-block text-sm font-medium text-gray-600 mb-4 tracking-wider opacity-0",
          isVisible && "animate-fadeIn [animation-delay:0.2s]"
        )}>
          WELCOME TO THE FUTURE
        </span>
        
        <h1 className={cn(
          "text-4xl md:text-6xl font-bold text-gray-900 mb-6 opacity-0",
          isVisible && "animate-fadeIn [animation-delay:0.4s]"
        )}>
          Create Something Amazing
        </h1>
        
        <p className={cn(
          "max-w-2xl mx-auto text-lg text-gray-600 mb-8 opacity-0",
          isVisible && "animate-fadeIn [animation-delay:0.6s]"
        )}>
          Experience the perfect blend of design and functionality. Build something extraordinary with our cutting-edge platform.
        </p>
        
        <div className={cn(
          "opacity-0",
          isVisible && "animate-fadeIn [animation-delay:0.8s]"
        )}>
          <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};