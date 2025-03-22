"use client";

import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import React, { useEffect, useState } from "react";
import { button as buttonStyles } from "@nextui-org/theme";

/**
 * Компонент Usb4Section загружает и отображает список карточек.
 *
 * При монтировании компонента отправляется запрос на сервер для
 * получения данных карточек. В процессе загрузки отображается
 * сообщение "Загрузка...". Если данные отсутствуют, отображается
 * сообщение "Нет данных для отображения". В случае успешного
 * получения данных, карточки выводятся на экран.
 *
 * @return {JSX.Element} Возвращает JSX-элемент секции с карточками,
 * либо сообщения об отсутствии данных или процессе загрузки.
 */

export default function Usb4Section() {
  const [cards, setCards] = useState<CardType[]>({} as CardType[]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/hero/preview-cards");
        if (!response.ok) {
          console.error(response);
        }

        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Ошибка при загрузке карточек:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (!cards || cards?.length === 0) {
    return <div>Нет данных для отображения.</div>;
  }

  return (
    <section>
      <div className="gap-4 grid grid-cols-12 grid-rows-2 px-8">
        {cards?.length > 0 &&
          cards?.map((card: CardType, index: number) => (
            <DynamicCard key={index} card={card} />
          ))}
      </div>
    </section>
  );
}

function DynamicCard({ card }: { card: any }) {
  return (
    <Card
      className={`${card.className} ${card.isFooterBlurred ? "is-footer-blurred" : ""}`}
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">
          {card.subtitle}
        </p>
        <h4
          className={`text-${card.titleColor || "white"} font-medium ${
            card.titleSize || "text-large"
          }`}
        >
          {card.title}
        </h4>
      </CardHeader>

      <Image
        removeWrapper
        alt={card.image.alt}
        className={`w-full h-full object-cover ${card.image.className}`}
        src={card.image.src}
      />

      {card.footer && (
        <CardFooter
          className={`absolute bottom-0 z-10 ${card.footer.bgClass || ""} ${
            card.footer.borderClass || ""
          }`}
        >
          {card.footer.type === "features" && (
            <div className="flex justify-between w-full">
              <div>
                {card.footer.features?.map((feature: string, index: number) => (
                  <p key={index} className="text-black text-tiny">
                    {feature}
                  </p>
                ))}
              </div>
              {card.footer.link && (
                <Link
                  className={buttonStyles({
                    color: "primary",
                    radius: "full",
                    variant: "shadow",
                  })}
                  href={card.footer.link.href}
                >
                  {card.footer.link.label}
                </Link>
              )}
            </div>
          )}
          {card.footer.type === "appCard" && (
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <Image
                  alt={card.footer.appIcon.alt}
                  className="rounded-full w-10 h-11 bg-black"
                  src={card.footer.appIcon.src}
                />
                <div>
                  <p className="text-tiny text-white/60">
                    {card.footer.appInfo.main}
                  </p>
                  <p className="text-tiny text-white/60">
                    {card.footer.appInfo.sub}
                  </p>
                </div>
              </div>
              <Button
                radius={card.footer.button.radius}
                size={card.footer.button.size}
              >
                {card.footer.button.label}
              </Button>
            </div>
          )}
        </CardFooter>
      )}
    </Card>
  );
}

interface CardType {
  breadcrumbs: Array<{
    title: string;
    link: string;
  }>;
  type: string;
  title: string;
  subTitle: string;
  image: {
    src: string;
    alt: string;
    className: string;
  };
  className: string;
  isFooterBlurred: boolean;
  footer: {
    type: string;
    bgClass: string;
    borderClass: string;
    features?: string[];
    link?: {
      href: string;
    };
  };
}
