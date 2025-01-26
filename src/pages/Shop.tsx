import { ProductCard } from "@/components/ProductCard";

const products = [
  {
    name: "Zlata Praha Premium",
    image: "/lovable-uploads/fb766ddb-6cc9-46d1-b576-0e81efd8cef3.png",
    price: "€4.99",
    description: "Classic Czech Pilsner"
  },
  {
    name: "Zlata Praha Gold",
    image: "/lovable-uploads/bd89be56-b5aa-4f43-a913-d1f854b34c27.png",
    price: "€5.99",
    description: "Premium Gold Lager with Fruit Notes"
  },
  {
    name: "Zlata Praha Cherry",
    image: "/lovable-uploads/66e24078-2693-4560-8001-8f39b851af7f.png",
    price: "€6.49",
    description: "Cherry-Flavored Special Edition"
  },
  {
    name: "Zlata Praha Dark",
    image: "/lovable-uploads/6d822156-8730-41ef-82b6-2f0cba44f895.png",
    price: "€5.49",
    description: "Rich Dark Lager"
  },
  {
    name: "Zlata Praha Fruit Mix",
    image: "/lovable-uploads/3e56b4de-1186-4e76-91a5-f3edcd5ca952.png",
    price: "€6.99",
    description: "Tropical Fruit-Infused Beer"
  },
  {
    name: "Samarkand Special",
    image: "/lovable-uploads/c4fc5405-073f-4c80-8f13-3d7c6613c270.png",
    price: "€7.99",
    description: "Oriental-Inspired Premium Brew"
  },
  {
    name: "Zlata Praha Apple",
    image: "/lovable-uploads/3e277e33-5bec-4c60-8334-e6b6ad7e3b30.png",
    price: "€5.99",
    description: "Apple-Infused Light Beer"
  },
  {
    name: "Zlata Praha Original",
    image: "/lovable-uploads/51658791-8693-4df6-8bc3-ec3c59d06874.png",
    price: "€4.99",
    description: "Traditional Czech Recipe"
  },
  {
    name: "Zlata Praha Heritage",
    image: "/lovable-uploads/9ab96122-2703-418d-a9c2-d00b213ba9b9.png",
    price: "€6.99",
    description: "Limited Edition Prague Collection"
  }
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