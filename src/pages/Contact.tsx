import { Navigation } from "@/components/Navigation"
import { Phone, Facebook, Instagram, Linkedin, Mail } from "lucide-react"
import { useState } from "react"

const Contact = () => {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail("")
  }

  return (
    <div className="min-h-screen bg-darkBg">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-golden mb-8 sm:mb-12 text-center animate-fadeIn">
          Контактная Информация
        </h2>

        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 animate-slideIn">
          <Phone className="text-golden w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
          <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl">+7 (123) 456-78-90</p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8 sm:mb-12 glass-card p-4 sm:p-8 animate-fadeIn">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Mail className="text-golden w-6 h-6 sm:w-8 sm:h-8" />
            <h3 className="text-lg sm:text-xl text-golden">Подпишитесь на новости</h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ваш email"
              className="flex-1 px-3 sm:px-4 py-2 rounded-lg bg-black/30 border border-golden/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-golden"
              required
            />
            <button
              type="submit"
              className="px-4 sm:px-6 py-2 bg-golden text-black rounded-lg hover:bg-golden/80 transition-colors"
            >
              Отправить
            </button>
          </div>
          {submitted && <p className="text-green-500 mt-3 sm:mt-4 animate-fadeIn">Спасибо за подписку!</p>}
        </form>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-12 items-center mb-8 sm:mb-12 animate-fadeIn">
          <div className="aspect-[4/3] overflow-hidden rounded-[30px_0_30px_0] sm:rounded-[50px_0_50px_0]">
            <img
              src="/lovable-uploads/7c91b3cb-2446-412e-a501-418abc1954bb.png"
              alt="Наше местоположение"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="text-gray-300">
            <p className="text-lg sm:text-xl mb-2 sm:mb-4">Адрес:</p>
            <p className="text-base sm:text-lg">ул. Пивоваров, 1</p>
            <p className="text-base sm:text-lg">Прага, Чехия</p>
          </div>
        </div>

        <div className="flex justify-center gap-6 sm:gap-8 mt-8 sm:mt-12 animate-slideIn">
          <a
            href="#"
            className="text-golden hover:text-golden/80 transition-colors transform hover:-translate-y-1 duration-300"
          >
            <Facebook className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
          </a>
          <a
            href="#"
            className="text-golden hover:text-golden/80 transition-colors transform hover:-translate-y-1 duration-300"
          >
            <Instagram className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
          </a>
          <a
            href="#"
            className="text-golden hover:text-golden/80 transition-colors transform hover:-translate-y-1 duration-300"
          >
            <Linkedin className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact

