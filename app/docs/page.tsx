import { title } from "@/components/primitives";
import { Card, CardBody } from "@nextui-org/react";

export default function DocsPage() {
  return (
    <div>
      <h1 className={title()}>Гарантия</h1>
      <Card className={"mt-4"}>
        <CardBody>
          <p>
            Мы предоставляем гарантию на нашу продукцию сроком на 6 месяцев с
            момента покупки товара на маркетплейсе.
          </p>
          <p>
            В случае неисправности товара мы возвращаем 100% от стоимости при
            наличии фото- или видеоподтверждения неисправности.
          </p>
          <p>
            Обращение должно быть направлено на нашу почту nikos.work@mail.ru.
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
