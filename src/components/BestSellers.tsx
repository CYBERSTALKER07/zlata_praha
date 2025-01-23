import { ProductCard } from "./ProductCard";

export const BestSellers = () => {
  const products = [
    {
      name: "Премиум Пилснер",
      image: "/lovable-uploads/d7ff8b91-8d4f-484c-b95c-8d13a67f361d.png",
      price: "$7.99",
      description: "Классический чешский пилснер"
    },
    {
      name: "Тёмный Лагер",
      image: "/lovable-uploads/34befac8-ca41-4fa1-8153-d63903be83bb.png",
      price: "$8.99",
      description: "Насыщенный тёмный лагер"
    }
  ];

  return (
    <section className="py-24 bg-darkBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-golden text-center mb-12">Бестселлеры</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};