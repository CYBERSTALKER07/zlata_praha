export const Craftsmanship = () => {
  return (
    <section className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 md:p-12">
          <h2 className="text-3xl font-bold text-golden mb-8 text-center">Мастерство Пивоварения</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300">
                Наши мастера-пивовары вкладывают душу в каждую варку, используя только лучшие ингредиенты и соблюдая строгие стандарты качества.
              </p>
              <p className="text-gray-300">
                Современные технологии в сочетании с традиционными методами позволяют нам создавать пиво непревзойденного качества, достойное самых взыскательных ценителей.
              </p>
            </div>
            <div className="relative aspect-square">
              <img 
                src="/lovable-uploads/d7ff8b91-8d4f-484c-b95c-8d13a67f361d.png"
                alt="Процесс пивоварения"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};