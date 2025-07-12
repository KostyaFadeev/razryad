import Container from "@/components/Container";
import NextLink from "next/link";
import { TelegramIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";

export default function Footer() {
  return (
    <footer className="relative bg-black pb-[2.37rem] pt-[2.25rem] text-neutral-100 sm:pb-[2.88rem] sm:pt-[3.75rem] 2xl:pb-[3rem] 2xl:pt-[3.69rem]">
      <Container>
        <span className="absolute left-1/2 top-0 block h-[0.25rem] w-[6.3125rem] -translate-x-1/2 bg-orange sm:left-[unset] sm:-translate-x-0"></span>
        <div className="flex flex-col items-center sm:items-stretch">
          <div className="flex flex-col items-center gap-12 sm:items-start sm:justify-between sm:gap-8 lg:flex-row">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <p className="font-bold text-inherit text-2xl">RAZ⚡️RYAD</p>
            </NextLink>
          </div>
          <p className="mt-12 text-center text-base opacity-70 sm:mt-8 sm:text-left lg:max-w-[44.75rem]">
            Мы специализируемся на высококачественных кабелях и аксессуарах,
            сочетая надежность и долговечность. <br />
            Наша миссия — предоставить вам товары, которые будут соответствовать
            вашим высоким ожиданиям. Каждый продукт в нашем ассортименте
            проходит строгий отбор, чтобы гарантировать его качество и
            надежность. <br />
            Будем рады помочь вам с выбором, а также ответить на любые вопросы.{" "}
            <br />
            Мы открыты каждый день.
          </p>
          <div className="mt-12 flex flex-col justify-between gap-12 sm:flex-row sm:gap-0 lg:mt-20 2xl:mt-12">
            <p className="text-center text-base font-same-bold">Make with ❤️</p>
            <ul className="flex items-center justify-center gap-4 [&>li>a:hover]:text-orange [&>li>a]:cursor-pointer">
              <li>
                <Link
                  isExternal
                  aria-label="Telegramm"
                  href={siteConfig.links.telegram}
                >
                  <TelegramIcon className="text-default-600" />
                </Link>
              </li>
            </ul>
          </div>
          <p className="text-start text-base font-same-bold">
            Сайт не собирает и не обрабатывает персональные данные
            пользователей.
          </p>
        </div>
      </Container>
    </footer>
  );
}
