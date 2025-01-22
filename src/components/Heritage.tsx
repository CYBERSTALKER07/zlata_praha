export const Heritage = () => {
  return (
    <section className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 md:p-12">
          <h2 className="text-3xl font-bold text-golden mb-8 text-center">Наследие Качества</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
              <img 
                src="/lovable-uploads/34befac8-ca41-4fa1-8153-d63903be83bb.png"
                alt="Традиционное производство"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="space-y-6">
              <p className="text-gray-300">
                Каждая капля нашего пива несет в себе вековые традиции чешского пивоварения. Мы бережно храним рецепты, передаваемые из поколения в поколение.
              </p>
              <p className="text-gray-300">
                Наша преданность качеству и аутентичности делает каждый глоток особенным, позволяя вам прикоснуться к богатой истории чешского пивоварения.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};