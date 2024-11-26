import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { TelegramIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
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
          href={siteConfig.links.stocks}
        >
          Получить подарок
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.telegram}
        >
          <TelegramIcon size={20} />
          Задать вопрос
        </Link>
      </div>
    </section>
  );
}
