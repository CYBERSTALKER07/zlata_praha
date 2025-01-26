import { ProductCard } from "@/components/ProductCard";
const products = [
  {
    name: "Zlata Praha Premium",
    image: "/lovable-uploads/7c91b3cb-2446-412e-a501-418abc1954bb.png",
    price: "€4.99",
    description: "Classic Czech Pilsner"
  },
  {
    name: "Zlata Praha Gold",
    image: "/lovable-uploads/cff69c7c-241d-44e7-8ba3-0393505e4ac1.png",
    price: "€5.99",
    description: "Premium Gold Lager"
  },
  {
    name: "Zlata Praha Collection",
    image: "/lovable-uploads/33e66d6a-f443-4d74-891f-7ac706802738.png",
    price: "€24.99",
    description: "Exclusive Beer Collection"
  },
  {
    name: "Zlata Praha Dark",
    image: "/lovable-uploads/7c91b3cb-2446-412e-a501-418abc1954bb.png",
    price: "€5.49",
    description: "Rich Dark Lager"
  },
  // {
  //   name: "Zlata Praha Light",
  //   image: "/lovable-uploads/cff69c7c-241d-44e7-8ba3-0393505e4ac1.png",
  //   price: "€4.49",
  //   description: "Refreshing Light Beer"
  // },
  // {
  //   name: "Zlata Praha Special",
  //   image: "/lovable-uploads/33e66d6a-f443-4d74-891f-7ac706802738.png",
  //   price: "€6.99",
  //   description: "Limited Edition Brew"
  // }
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