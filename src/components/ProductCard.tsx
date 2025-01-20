import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface ProductCardProps {
  name: string;
  image: string;
  price: string;
  description?: string;
}

export const ProductCard = ({
  name,
  image,
  price,
  description
}: ProductCardProps) => {
  return (
    <div className="product-card">
      <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
        />
      </div>
      <h3 className="text-golden font-semibold text-lg mb-2">{name}</h3>
      {description && (
        <p className="text-gray-400 text-sm mb-4">{description}</p>
      )}
      <div className="flex items-center justify-between">
        <span className="text-golden font-bold">{price}</span>
        <Button 
          className="bg-golden hover:bg-golden/80 text-black"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};