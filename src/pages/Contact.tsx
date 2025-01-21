import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-darkBg pt-20 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <img 
            src="/lovable-uploads/a048cf85-697d-4a5c-a6af-37e34615f7b3.png" 
            alt="Zlata Praha Contact" 
            className="w-full h-[400px] object-cover rounded-lg mb-12"
          />
          
          <div className="glass-card p-8">
            <h1 className="text-4xl font-bold text-golden mb-8">Contact Us</h1>
            
            <form className="space-y-6 mb-12">
              <div>
                <label className="text-golden block mb-2">Name</label>
                <Input className="bg-black/30 border-golden/20" />
              </div>
              <div>
                <label className="text-golden block mb-2">Email</label>
                <Input className="bg-black/30 border-golden/20" type="email" />
              </div>
              <div>
                <label className="text-golden block mb-2">Message</label>
                <Textarea className="bg-black/30 border-golden/20 min-h-[150px]" />
              </div>
              <Button className="w-full bg-golden hover:bg-golden/80 text-black">
                Send Message
              </Button>
            </form>

            <div className="border-t border-golden/20 pt-8">
              <h2 className="text-2xl text-golden mb-6">Follow Us</h2>
              <div className="flex justify-center gap-8">
                <a href="#" className="text-golden hover:text-golden/80 transition-colors">
                  <Facebook size={32} />
                </a>
                <a href="#" className="text-golden hover:text-golden/80 transition-colors">
                  <Instagram size={32} />
                </a>
                <a href="#" className="text-golden hover:text-golden/80 transition-colors">
                  <Twitter size={32} />
                </a>
                <a href="#" className="text-golden hover:text-golden/80 transition-colors">
                  <Youtube size={32} />
                </a>
                <a href="#" className="text-golden hover:text-golden/80 transition-colors">
                  <Linkedin size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;