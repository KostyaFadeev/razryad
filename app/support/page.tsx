"use client";

import { Link } from "@nextui-org/link";
import { Card, CardBody } from "@nextui-org/react";
import { AlertTriangle, ThumbsUp, MailCheck } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Заголовок */}
      <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-12 text-gray-900">
        Поддержка
      </h1>

      {/* Карточки информации */}
      <div className="grid gap-6 sm:grid-cols-2">
        <Card className="shadow-lg">
          <CardBody className="flex flex-col items-start gap-4 p-6">
            <AlertTriangle className="w-8 h-8 text-red-600" />
            <h3 className="text-xl font-bold text-gray-800">
              Возникли проблемы с заказом?
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Не спешите оставлять негативный отзыв — мы решим вашу проблему
              быстро и с уважением.
            </p>
          </CardBody>
        </Card>

        <Card className="shadow-lg">
          <CardBody className="flex flex-col items-start gap-4 p-6">
            <ThumbsUp className="w-8 h-8 text-green-600" />
            <h3 className="text-xl font-bold text-gray-800">
              Мы заботимся о вас
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Если товар оказался бракованным или не подошел — мы предложим
              решение, удобное именно вам.
            </p>
          </CardBody>
        </Card>

        <Card className="shadow-lg sm:col-span-2">
          <CardBody className="flex flex-col sm:flex-row sm:items-center gap-4 p-6">
            <MailCheck className="w-8 h-8 text-blue-600" />
            <div>
              <h3 className="text-xl font-bold text-gray-800">Связь с нами</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Напишите нам по любым вопросам:{" "}
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
