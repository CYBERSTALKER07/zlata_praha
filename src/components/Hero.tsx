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
      image: "/lovable-uploads/34befac8-ca41-4fa1-8153-d63903be83bb.png",
    },
    {
      name: "Злата Прага Светлое",
      image: "/lovable-uploads/7c91b3cb-2446-412e-a501-418abc1954bb.png",
    },
  ];

  const floatingImages = [
    "/lovable-uploads/33e66d6a-f443-4d74-891f-7ac706802738.png",
    "/lovable-uploads/34befac8-ca41-4fa1-8153-d63903be83bb.png",
    "/lovable-uploads/7c91b3cb-2446-412e-a501-418abc1954bb.png",
    "/lovable-uploads/8790bde9-715c-451b-9619-1726b04249c4.png",
    "/lovable-uploads/a048cf85-697d-4a5c-a6af-37e34615f7b3.png",
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-darkBg">
      {/* Floating Beer Images */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Floating Beer"
            className={cn(
              "absolute w-24 md:w-32 opacity-20 animate-float",
              index === 0 && "top-[10%] left-[10%] [animation-delay:0s]",
              index === 1 && "top-[20%] right-[15%] [animation-delay:1.1s]",
              index === 2 && "bottom-[30%] left-[20%] [animation-delay:2.2s]",
              index === 3 && "top-[40%] right-[25%] [animation-delay:3.3s]",
              index === 4 && "bottom-[15%] right-[10%] [animation-delay:4.4s]"
            )}
          />
        ))}
      </div>

      {/* Neon Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#D4AF3722_1px,transparent_1px)] bg-[size:30px_30px] bg-[position:center] mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,#D4AF3711_1px,transparent_1px)] bg-[size:20px_20px] bg-[position:center] mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-darkBg/80" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex items-center justify-between">
        <div className="flex-1">
          <span className={cn(
            "inline-block text-sm font-medium text-golden mb-4 tracking-wider opacity-0 bg-golden/10 px-4 py-1 rounded-full",
            isVisible && "animate-fadeIn [animation-delay:0.2s]"
          )}>
            ПРЕМИАЛЬНАЯ КОЛЛЕКЦИЯ
          </span>
          
          <h1 className={cn(
            "text-4xl md:text-6xl font-bold mb-6 opacity-0 bg-gradient-to-r from-golden via-amber-400 to-golden bg-clip-text text-transparent",
            isVisible && "animate-fadeIn [animation-delay:0.4s]"
          )}>
            Злата Прага
          </h1>
          
          <p className={cn(
            "max-w-2xl text-lg text-gray-400 mb-12 opacity-0 backdrop-blur-sm bg-black/20 p-4 rounded-xl",
            isVisible && "animate-fadeIn [animation-delay:0.6s]"
          )}>
            Откройте для себя изысканную коллекцию премиального чешского пива, созданного с вековыми традициями.
          </p>
        </div>

        <div className={cn(
          "hidden md:block w-1/3 opacity-0",
          isVisible && "animate-fadeIn [animation-delay:0.8s]"
        )}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-xl rounded-full" />
            <img 
              src="/lovable-uploads/8790bde9-715c-451b-9619-1726b04249c4.png"
              alt="Golden Splash"
              className="w-full relative rounded-3xl h-auto object-contain animate-float"
            />
          </div>
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
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-[50px_0_50px_0] blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative aspect-square overflow-hidden rounded-[50px_0_50px_0]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                      />
                    </div>
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