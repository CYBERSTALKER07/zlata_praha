import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { BestSellers } from "@/components/BestSellers";
import { Story } from "@/components/Story";
import { Testimonials } from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-darkBg">
      <Navigation />
      <Hero />
      <Features />
      <BestSellers />
      <Story />
      <Testimonials />
    </div>
  );
};

export default Index;