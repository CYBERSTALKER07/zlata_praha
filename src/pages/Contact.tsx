import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="min-h-screen bg-darkBg pt-20 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto glass-card p-8">
          <h1 className="text-4xl font-bold text-golden mb-8">Contact Us</h1>
          <form className="space-y-6">
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
        </div>
      </div>
    </div>
  );
};

export default Contact;