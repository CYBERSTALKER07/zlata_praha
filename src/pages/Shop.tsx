import { ProductCard } from "@/components/ProductCard";
const products = [
  {
    name: "Zlata Praha Premium",
    image: "/lovable-uploads/photo_2_2025-01-26_15-56-11.png",
    price: "13 000 so'm",
    description: "Легкое пиво с яблочным вкусом"
  },
  {
    name: "Zlata Praha Gold",
    image: "/lovable-uploads/photo_4_2025-01-26_15-56-11.png",
    price: "13 000 so'm",
    description: "Особое издание с вишневым вкусом"
  },
  {
    name: "Zlata Praha Cherry",
    image: "/lovable-uploads/photo_9_2025-01-26_15-56-11.png",
    price: "12 200 so'm",
    description: "Самарканд"
  },
  {
    name: "Zlata Praha Dark",
    image: "/lovable-uploads/photo_10_2025-01-26_15-56-11.png",
    price: "10 500 so'm",
    description: "Богатое темное пиво"
  },
  {
    name: "Zlata Praha Fruit Mix",
    image: "/lovable-uploads/photo_12_2025-01-26_15-56-11.png",
    price: "13 000 so'm",
    description: "Пиво с фруктовым миксом из ананаса"
  },
  {
    name: "Samarkand Special",
    image: "/lovable-uploads/photo_17_2025-01-26_15-56-11.png",
    price: "",
    description: "Премиум-напиток в восточном стиле"
  },
  {
    name: "Zlata Praha Apple",
    image: "/lovable-uploads/photo_18_2025-01-26_15-56-11.png",
    price: "12 00 so'm",
    description: "Регенстанский сад"
  },
  {
    name: "Zlata Praha Original",
    image: "/lovable-uploads/photo_19_2025-01-26_15-56-11.png",
    price: "12 200 so'm",
    description: "Традиционный чешский рецепт"
  },
  {
    name: "Zlata Praha Heritage",
    image: "/lovable-uploads/photo_1_2025-01-26_15-56-11.png",
    price: "€6.99",
    description: "Ограниченная коллекция Пражская коллекция"
  },
  {
    name: "Zlata Praha Rift",
    image: "/lovable-uploads/25cbab06-aea9-4069-a47c-2dfa09481209.png",
    price: "€6.99",
    description: "Особое издание с фруктовым вкусом"
  },
  {
    name: "Zlata Praha Collection",
    image: "/lovable-uploads/9776da23-499d-4a35-9364-12051ba74e72.png",
    price: "",
    description: "Набор премиум-пива"
  },
  {
    name: "Zlata Praha Classic",
    image: "/lovable-uploads/aea943cc-456f-4ae5-aee5-06ef77efb8e7.png",
    price: "13 000 so'm",
    description: "Пиво с тропическим фруктовым вкусом"
  },
  {
    name: "Zlata Praha Classic",
    image: "/lovable-uploads/photo_3_2025-01-26_16-58-06.png",
    price: "2 200 so'm",
    description: "Тархун"
  },
  {
    name: "Zlata Praha Classic",
    image: "/lovable-uploads/photo_5_2025-01-26_16-58-06.png",
    price: "8 200 so'm",
    description: "Квас"
  },

];


const Shop = () => {
  return (
    <div className="min-h-screen bg-darkBg pt-20 pb-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-golden mb-12 animate-fadeIn">Our Products</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={product.name} className="opacity-0 animate-fadeIn" style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}>
              <ProductCard
                name={product.name}
                image={product.image}
                price={product.price}
                description={product.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
