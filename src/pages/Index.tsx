import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { BestSellers } from "@/components/BestSellers";
import { Story } from "@/components/Story";
import { Heritage } from "@/components/Heritage";
import { Craftsmanship } from "@/components/Craftsmanship";
import { Testimonials } from "@/components/Testimonials";
import SplashScreen from "@/components/SplashScreen";

const Index = () => {
  return (
    <div className="min-h-screen bg-darkBg">
      <SplashScreen />
      <Navigation />
      <Hero />
      <BestSellers />
      <Story />
      <Heritage />
      <Craftsmanship />
      <Testimonials />
    </div>
  );
};

export default Index;