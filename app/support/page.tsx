import { Link } from "@nextui-org/link";

export default function SupportPage() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold lg:text-5xl lg:font-extrabold mb-10">
        Поддержка
      </h1>
      <div>
        Возникли трудности с заказом? Не спешите оставлять негативный отзыв!
        Если ваш товар оказался бракованным или не подошел, напишите нам на
        почту <Link href={`mailto:nikos.work@mail.ru`}>nikos.work@mail.ru</Link>
        . Мы обязательно решим ваш вопрос и предложим решение. Ваше
        удовлетворение для нас очень важно!
      </div>
    </div>
  );
}
