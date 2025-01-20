import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ProductCard } from "./ProductCard";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const products = [
    {
      name: "Премиум Пилснер",
      image: "/lovable-uploads/d7ff8b91-8d4f-484c-b95c-8d13a67f361d.png",
      price: "$7.99",
      description: "Классический чешский вкус"
    },
    {
      name: "Тёмный Лагер",
      image: "/lovable-uploads/34befac8-ca41-4fa1-8153-d63903be83bb.png",
      price: "$8.99",
      description: "Богатый и насыщенный"
    }
  ];

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
        
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 opacity-0",
          isVisible && "animate-fadeIn [animation-delay:0.8s]"
        )}>
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};