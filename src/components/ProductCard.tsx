import { cn } from "@/lib/utils";

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
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
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
      <span className="text-golden font-bold">{price}</span>
    </div>
  );
};