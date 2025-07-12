import { Link } from "@nextui-org/link";
import { Gift, PercentCircle, ShoppingCart } from "lucide-react";

export default function StocksPage() {
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-16">
        Акции от RAZRYAD ⚡️
      </h1>

      {/* 💸 100 рублей за отзыв */}
      <div className="mb-24">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 flex items-center gap-2">
          <Gift className="w-7 h-7 text-green-600" />
          100 рублей за отзыв на OZON 💸
        </h2>

        <h3 className="text-xl lg:text-2xl font-semibold mb-6">
          Как получить подарок:
        </h3>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Зайдите в карточку приобретенного товара и нажмите «Написать отзыв».",
            "Напишите положительный отзыв с 5 звездами и дождитесь публикации.",
            "Сделайте скриншот отзыва с кнопкой «редактировать отзыв».",
            `Отправьте скрин на почту 
             nikos.work@mail.ru, добавьте номер телефона и банк.`,
          ].map((text, i) => (
            <div
              key={i}
              className="relative bg-white border-2 border-blue-500 p-6 pt-16 rounded-2xl shadow-sm hover:shadow-lg transition duration-200"
            >
              <div className="absolute top-4 left-4 bg-blue-500 text-white font-bold w-10 h-10 rounded-md flex items-center justify-center text-lg">
                {i + 1}
              </div>
              <p className="text-gray-800 text-base font-medium">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🏷️ Промокод */}
      <div className="mb-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 flex items-center gap-2">
          <PercentCircle className="w-7 h-7 text-pink-500" />
          Промокод на первую покупку на OZON 🏷️
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          <div className="bg-indigo-100 text-indigo-800 border-2 border-indigo-700 rounded-xl px-6 py-4 text-center text-xl font-bold tracking-wide">
            PODAROCHEK
          </div>
          <Link
            isExternal
            className="text-blue-600 text-lg hover:underline flex items-center gap-1"
            href="https://www.ozon.ru/seller/nikos-983197/products/?miniapp=seller_983197"
          >
            <ShoppingCart className="w-5 h-5" />
            Ссылка на магазин на OZON
          </Link>
        </div>
      </div>
    </div>
  );
}
