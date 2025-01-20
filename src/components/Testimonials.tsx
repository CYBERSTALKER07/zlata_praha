export const Testimonials = () => {
  const testimonials = [
    {
      name: "Михаил К.",
      text: "Лучшее пиво, которое я когда-либо пробовал. Настоящий чешский вкус!",
      role: "Сомелье"
    },
    {
      name: "Анна П.",
      text: "Превосходное качество и богатый выбор. Всегда возвращаюсь за добавкой.",
      role: "Ценитель пива"
    },
    {
      name: "Дмитрий С.",
      text: "Злата Прага - это гарантия качества и традиций.",
      role: "Шеф-повар"
    }
  ];

  return (
    <section className="py-24 bg-darkBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-golden text-center mb-12">Отзывы</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
              <p className="text-gray-300 mb-4">{testimonial.text}</p>
              <div className="flex flex-col">
                <span className="text-golden font-semibold">{testimonial.name}</span>
                <span className="text-gray-400 text-sm">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};