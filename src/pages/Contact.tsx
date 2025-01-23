import { Navigation } from "@/components/Navigation";

const Contact = () => {
  return (
    <div className="min-h-screen bg-darkBg">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-golden mb-8 text-center">Контактная Информация</h2>
        <p className="text-gray-300 mb-4">Если у вас есть вопросы, не стесняйтесь обращаться к нам!</p>
        <p className="text-gray-300 mb-4">Email: info@zlatapraha.com</p>
        <p className="text-gray-300 mb-4">Телефон: +7 (123) 456-78-90</p>
        <p className="text-gray-300 mb-4">Адрес: ул. Пивоваров, 1, Прага, Чехия</p>
      </div>
    </div>
  );
};

export default Contact;
