import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Zap, Shield, Star } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Молниеносная Скорость",
    description: "Испытайте невероятную скорость и производительность нашей платформы."
  },
  {
    icon: Shield,
    title: "Безопасность в Основе",
    description: "Создано с учетом безопасности, гарантируя защиту ваших данных."
  },
  {
    icon: Star,
    title: "Премиум Качество",
    description: "Наслаждайтесь первоклассными функциями, превосходящими ожидания."
  }
];

export const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("features");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Почему Выбирают Нас
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Откройте для себя, что делает нашу платформу уникальной
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "relative p-8 rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 opacity-0",
                isVisible && "animate-fadeIn",
                isVisible && `[animation-delay:${index * 200}ms]`
              )}
            >
              <div className="h-12 w-12 rounded-xl bg-gray-900 text-white flex items-center justify-center mb-6">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};