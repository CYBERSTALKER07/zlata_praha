export const Story = () => {
  return (
    <section className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 md:p-12">
          <h2 className="text-3xl font-bold text-golden mb-8 text-center">История Злата Прага</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300">
                Основанная в сердце Праги, наша пивоварня продолжает вековые традиции чешского пивоварения. Каждая бутылка - это история, рассказанная через вкус и аромат отборных ингредиентов.
              </p>
              <p className="text-gray-300">
                Мы гордимся тем, что сохраняем аутентичные методы производства, при этом внедряя современные технологии для создания непревзойденного качества.
              </p>
            </div>
            <div className="relative aspect-square">
              <img 
                src="/lovable-uploads/aea943cc-456f-4ae5-aee5-06ef77efb8e7.png"
                alt="Историческая пивоварня"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};