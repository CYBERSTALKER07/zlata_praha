import { ProductCard } from "@/components/ProductCard";

const products = [
  {
    name: "Zlata Praha Premium",
    image: "/lovable-uploads/25cbab06-aea9-4069-a47c-2dfa09481209.png",
    price: "$4.99",
    description: "Classic Czech Pilsner"
  },
  {
    name: "Zlata Praha Rift",
    image: "/lovable-uploads/aea943cc-456f-4ae5-aee5-06ef77efb8e7.png",
    price: "$5.99",
    description: "Fruit-infused Beer"
  },
  {
    name: "Spencer Ale",
    image: "/lovable-uploads/a048cf85-697d-4a5c-a6af-37e34615f7b3.png",
    price: "$6.99",
    description: "Traditional Trappist Ale"
  },
  {
    name: "Zlata Praha Draft",
    image: "/lovable-uploads/9776da23-499d-4a35-9364-12051ba74e72.png",
    price: "$4.49",
    description: "Fresh Draft Beer"
  }
];

const Shop = () => {
  return (
    <div className="min-h-screen bg-darkBg pt-20 pb-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-golden mb-8">Our Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              image={product.image}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;