
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const bestProducts = [
    {
      name: "Злата Прага Премиум",
      image: "/lovable-uploads/33e66d6a-f443-4d74-891f-7ac706802738.png",
    },
    {
      name: "Злата Прага Тёмное",
      image: "/lovable-uploads/aea943cc-456f-4ae5-aee5-06ef77efb8e7.png",

    },
    {
      name: "Злата Прага Светлое",
      image: "/lovable-uploads/7c91b3cb-2446-412e-a501-418abc1954bb.png",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-darkBg">
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
            className="w-full rounded-3xl h-auto object-contain animate-float"
          />
        </div>
      </div>

      <div className={cn(
        "w-full max-w-5xl px-4 opacity-0",
        isVisible && "animate-fadeIn [animation-delay:1s]"
      )}>
        <h2 className="text-2xl md:text-3xl font-bold text-golden mb-8 text-center">
          Лучшие Сорта
        </h2>
        <Carousel className="w-full">
          <CarouselContent>
            {bestProducts.map((product, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <div className="relative aspect-square overflow-hidden rounded-[50px_0_50px_0]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <h3 className="text-golden font-semibold text-lg mt-4 text-center">
                    {product.name}
                  </h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
};
