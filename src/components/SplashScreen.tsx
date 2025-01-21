import { useState, useEffect } from "react";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-darkBg animate-fade-in">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-golden mb-4 animate-scale-in">
          Zlata Praha
        </h1>
        <div className="w-16 h-16 border-4 border-golden border-t-transparent rounded-full animate-spin mx-auto" />
      </div>
    </div>
  );
};

export default SplashScreen;