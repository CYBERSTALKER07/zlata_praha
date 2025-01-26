import { Home, ShoppingBag, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const BottomNav = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.95)] rounded-t-[50px] backdrop-blur-sm z-50">
      <div className="max-w-md mx-auto px-8 h-16">
        <div className="flex justify-between items-center h-full">
          <Link
            to="/"
            className={cn(
              "flex flex-col items-center text-sm relative pb-1",
              isActive("/")
                ? "text-golden border-b-2 border-golden"
                : "text-gray-400"
            )}
          >
            <Home size={24} />
            <span className="text-xs">Главная</span>
          </Link>
          
          <Link
            to="/shop"
            className={cn(
              "flex flex-col items-center text-sm relative pb-1",
              isActive("/shop")
                ? "text-golden border-b-2 border-golden"
                : "text-gray-400"
            )}
          >
            <ShoppingBag size={24} />
            <span className="text-xs">Магазин</span>
          </Link>

          <Link
            to="/contact"
            className={cn(
              "flex flex-col items-center text-sm relative pb-1",
              isActive("/contact")
                ? "text-golden border-b-2 border-golden"
                : "text-gray-400"
            )}
          >
            <Mail size={24} />
            <span className="text-xs">Контакты</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};