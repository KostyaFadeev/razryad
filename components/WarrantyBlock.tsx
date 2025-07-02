"use client";

import { Card, CardBody } from "@nextui-org/react";
import { Mail, RefreshCcw, ShieldCheck } from "lucide-react";
import { Link } from "@nextui-org/link";

export const WarrantyBlock = () => {
  return (
    <section className="grid gap-6 sm:grid-cols-2">
      {/* Гарантия */}
      <Card className="shadow-lg hover:shadow-xl transition-shadow">
        <CardBody className="flex flex-col items-start gap-4 p-6">
          <ShieldCheck className="w-8 h-8 text-green-600" aria-hidden />
          <h3 className="text-xl font-semibold text-gray-800">
            6 месяцев гарантии
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            Мы предоставляем гарантию на всю продукцию сроком на 6 месяцев с
            момента покупки.
          </p>
        </CardBody>
      </Card>

      {/* Возврат */}
      <Card className="shadow-lg hover:shadow-xl transition-shadow">
        <CardBody className="flex flex-col items-start gap-4 p-6">
          <RefreshCcw className="w-8 h-8 text-blue-600" aria-hidden />
          <h3 className="text-xl font-semibold text-gray-800">
            Возврат 100% стоимости
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            В случае неисправности товара мы возвращаем полную стоимость при
            наличии фото или видео подтверждения.
          </p>
        </CardBody>
      </Card>

      {/* Контакты */}
      <Card className="shadow-lg hover:shadow-xl transition-shadow sm:col-span-2">
        <CardBody className="flex flex-col sm:flex-row sm:items-center gap-4 p-6">
          <Mail className="w-8 h-8 text-purple-600" aria-hidden />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Куда обращаться?
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Отправьте подтверждение неисправности на нашу почту:&nbsp;
              <Link
                href="mailto:nikos.work@mail.ru"
                className="text-primary font-semibold underline underline-offset-2"
              >
                nikos.work@mail.ru
              </Link>
            </p>
          </div>
        </CardBody>
      </Card>
    </section>
  );
};
