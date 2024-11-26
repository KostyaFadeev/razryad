import { Link } from "@nextui-org/link";

export default function StocksPage() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold lg:text-5xl lg:font-extrabold mb-10">
        Акции от RAZRYAD ⚡️
      </h1>
      <div className="flex flex-col justify-center w-auto mb-20">
        <h2 className="text-start text-2xl font-bold lg:text-4xl lg:font-extrabold mb-8">
          100 рублей за отзыв на OZON 💸
        </h2>

        <h3 className="text-start text-xl font-bold lg:text-2xl mb-2">
          Инструкция для получения подарка за отзыв на OZON:
        </h3>

        <div className="flex flex-wrap gap-4 mb-8">
          <div className="hover:drop-shadow-xl border-blue-500 relative px-4 pt-16 pb-4 drop-shadow-sm border-3 rounded-xl w-lg xl:w-72">
            <div className="absolute w-12 p-2 rounded-md bg-blue-500 text-center text-white mb-4 top-3 left-3">
              1
            </div>
            <h3 className="font-medium text-xl uppercase">
              Зайдите в карточку приобретенного товара и найдите в нижней части
              страницы кнопку «Написать отзыв».
            </h3>
          </div>

          <div className="hover:drop-shadow-xl border-blue-500 relative px-4 pt-16 pb-4 drop-shadow-sm border-3 rounded-xl w-full xl:w-72">
            <div className="absolute w-12 p-2 rounded-md bg-blue-500 text-center text-white mb-4 top-3 left-3">
              2
            </div>
            <h3 className="font-medium text-xl uppercase">
              Напишите положительный отзыв с 5 звездами и дождитесь его
              публикации.
            </h3>
          </div>

          <div className="hover:drop-shadow-xl border-blue-500 relative px-4 pt-16 pb-4 drop-shadow-sm border-3 rounded-xl w-full xl:w-72">
            <div className="absolute w-12 p-2 rounded-md bg-blue-500 text-center text-white mb-4 top-3 left-3">
              3
            </div>
            <h3 className="font-medium text-xl uppercase">
              Сделайте скриншот вашего отзыва. Важным условием является наличие
              на скриншоте кнопки «редактировать отзыв».
            </h3>
          </div>

          <div className="hover:drop-shadow-xl border-blue-500 relative px-4 pt-16 pb-4 drop-shadow-sm border-3 rounded-xl w-full xl:w-72">
            <div className="absolute w-12 p-2 rounded-md bg-blue-500 text-center text-white mb-4 top-3 left-3">
              4
            </div>
            <h3 className="font-medium text-xl uppercase">
              Отправьте скриншот отзыва на почту{" "}
              <Link href={`mailto:nikos.work@mail.ru`}>nikos.work@mail.ru</Link>
              , напишите номер телефона и банк, на который будет отправлен
              денежный приз в размере 100 рублей.
            </h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center w-auto mb-20">
        <h2 className="text-start text-2xl font-bold lg:text-4xl lg:font-extrabold mb-8">
          Промокод на первую покупку на OZON 🏷️
        </h2>

        <div className="flex flex-wrap gap-8 items-center">
          <div className="hover:drop-shadow-xl border-indigo-800 relative px-4 pt-4 pb-4 drop-shadow-sm border-3 rounded-xl w-lg xl:w-72">
            <h3 className="font-light text-lg text-center">PODAROCHEK25</h3>
          </div>
          <Link
            isExternal
            className="flex text-xl items-center gap-1 text-current text-blue-600"
            href="https://www.ozon.ru/seller/nikos-983197/products/?miniapp=seller_983197"
          >
            — Ссылка на наш магазин на OZON
          </Link>
        </div>
      </div>
    </div>
  );
}
