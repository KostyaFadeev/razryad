"use client";

import React, { useRef } from "react";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { TelegramIcon } from "@/components/icons";
import Usb4Section from "@/components/Usb4Section/Usb4Section";

export default function HeroSection() {
  const usb4SectionRef = useRef(null);

  const scrollToSection = () => {
    usb4SectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Раздел с заголовком */}
      <section className="flex flex-col items-center justify-center gap-4 h-screen">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Молодой и &nbsp;</span>
          <span className={title({ color: "violet" })}>амбициозный&nbsp;️</span>
          <span className={title()}>⚡️</span>
          <br />
          <span className={title()}>бренд аксессуаров для ваших девайсов.</span>
          <div className={subtitle({ class: "mt-4" })}>
            Практичность, доступная каждому.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.discounts}
          >
            Получить подарок
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={`mailto:${siteConfig.links.mail_support}`}
          >
            <TelegramIcon size={20} />
            Задать вопрос
          </Link>
        </div>

        <div
          className="absolute bottom-10 cursor-pointer hover:animate-moveArrow"
          role="button"
          tabIndex={0}
          aria-label="Прокрутить вниз до секции USB4"
          onClick={scrollToSection}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              scrollToSection();
              event.preventDefault(); // Предотвращаем стандартное поведение прокрутки при нажатии "Space"
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 text-gray-600 hover:text-violet-500 transition-colors"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </div>
      </section>
      <section ref={usb4SectionRef} id="Usb4Section" className=" py-10">
        <Usb4Section />
      </section>
    </>
  );
}
