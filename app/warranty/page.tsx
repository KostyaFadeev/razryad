"use client";

import { Link } from "@nextui-org/link";
import { Card, CardBody } from "@nextui-org/react";

import { Mail, ShieldCheck, RefreshCcw } from "lucide-react";

export default function WarrantyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Заголовок */}
      <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-12 text-gray-900">
        Гарантия
      </h1>

      {/* Карточки информации */}
      <div className="grid gap-6 sm:grid-cols-2">
        <Card className="shadow-lg">
          <CardBody className="flex flex-col items-start gap-4 p-6">
            <ShieldCheck className="w-8 h-8 text-green-600" />
            <h3 className="text-xl font-bold text-gray-800">
              6 месяцев гарантии
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Мы предоставляем гарантию на всю продукцию сроком на 6 месяцев с
              момента покупки.
            </p>
          </CardBody>
        </Card>

        <Card className="shadow-lg">
          <CardBody className="flex flex-col items-start gap-4 p-6">
            <RefreshCcw className="w-8 h-8 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-800">
              Возврат 100% стоимости
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              В случае неисправности товара мы возвращаем полную стоимость при
              наличии фото или видео подтверждения.
            </p>
          </CardBody>
        </Card>

        <Card className="shadow-lg sm:col-span-2">
          <CardBody className="flex flex-col sm:flex-row sm:items-center gap-4 p-6">
            <Mail className="w-8 h-8 text-purple-600" />
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Куда обращаться?
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Отправьте подтверждение неисправности на нашу почту:&nbsp;
                <Link
                  href="mailto:nikos.work@mail.ru"
                  className="text-primary font-semibold"
                >
                  nikos.work@mail.ru
                </Link>
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
