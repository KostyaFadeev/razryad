import { Link } from "@nextui-org/link";

export default function WarrantyPage() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold lg:text-5xl lg:font-extrabold mb-10">
        Гарантия
      </h1>
      <div>
        Мы предоставляем гарантию на нашу продукцию сроком на 6 месяцев с
        момента покупки товара на маркетплейсе. В случае неисправности товара мы
        возвращаем 100% от стоимости при наличии фото- или видеоподтверждения
        неисправности. Обращение должно быть направлено на нашу почту
        <Link href={`mailto:nikos.work@mail.ru`}>nikos.work@mail.ru</Link>
      </div>
    </div>
  );
}
