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
      <div className="flex flex-wrap gap-4">
        {cards?.length > 0 &&
          cards?.map((card: CardType, index: number) => (
            <DynamicCard key={index} card={card} />
          ))}
      </div>
    </section>
  );
}

type CardType = {
  className?: string;
  isFooterBlurred?: boolean;
  subtitle?: string;
  title: string;
  titleColor?: string;
  titleSize?: string;
  image: {
    src: string;
    alt: string;
    className?: string;
  };
  footer?: {
    type: "features" | "appCard";
    bgClass?: string;
    borderClass?: string;
    features?: string[];
    link?: {
      href: string;
      label: string;
    };
    appIcon?: {
      src: string;
      alt: string;
    };
    appInfo?: {
      main: string;
      sub: string;
    };
    button?: {
      label: string;
      radius: any;
      size: any;
    };
  };
};

export function DynamicCard({ card }: { card: CardType }) {
  return (
    <Card
      isFooterBlurred={card.isFooterBlurred}
      className={`relative overflow-hidden rounded-xl shadow-lg ${card.className || ""}`}
      style={{ width: "360px", height: "480px" }}
    >
      <CardHeader className="absolute z-10 top-0 left-0 flex-col items-start bg-black/40 p-4 w-full">
        {card.subtitle && (
          <p className="text-tiny text-white/60 uppercase font-bold">
            {card.subtitle}
          </p>
        )}
        <h4
          className={`${
            card.titleSize || "text-lg"
          } font-semibold text-${card.titleColor || "white"}`}
        >
          {card.title}
        </h4>
      </CardHeader>

      <Image
        removeWrapper
        src={card.image.src}
        alt={card.image.alt}
        className={`object-cover w-full h-full ${card.image.className || ""}`}
        radius="none"
      />

      {card.footer && (
        <CardFooter
          className={`absolute bottom-0 z-10 p-4 w-full flex-col justify-end bg-black/40 backdrop-blur-md ${
            card.footer.bgClass || ""
          } ${card.footer.borderClass || ""}`}
        >
          {card.footer.type === "features" && (
            <div className="flex justify-between items-center w-full">
              <div className="text-white space-y-1 text-tiny">
                {card.footer.features?.map((feature, idx) => (
                  <p key={idx}>{feature}</p>
                ))}
              </div>
              {card.footer.link && (
                <Link
                  href={card.footer.link.href}
                  className={buttonStyles({
                    color: "primary",
                    radius: "full",
                    variant: "shadow",
                  })}
                >
                  {card.footer.link.label}
                </Link>
              )}
            </div>
          )}

          {card.footer.type === "appCard" && (
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                {card.footer.appIcon && (
                  <Image
                    src={card.footer.appIcon.src}
                    alt={card.footer.appIcon.alt}
                    className="rounded-full w-10 h-10"
                  />
                )}
                <div>
                  <p className="text-tiny text-white/70">
                    {card.footer.appInfo?.main}
                  </p>
                  <p className="text-tiny text-white/50">
                    {card.footer.appInfo?.sub}
                  </p>
                </div>
              </div>
              {card.footer.button && (
                <Button
                  radius={card.footer.button.radius}
                  size={card.footer.button.size}
                  className="text-sm"
                >
                  {card.footer.button.label}
                </Button>
              )}
            </div>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
