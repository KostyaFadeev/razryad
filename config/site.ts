export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Razryad",
  description:
    "Razryad — ваш надежный партнер в мире кабелей. Мы предлагаем широкий ассортимент высококачественных кабелей и " +
    "аксессуаров для мобильных устройств, ноутбуков и компьютеров. Наша продукция сочетает в себе надежность, " +
    "долговечность и современные технологии, что обеспечивает идеальную связь и зарядку ваших устройств. " +
    "Мы стремимся удовлетворить потребности каждого клиента, предлагая доступные цены и отличное качество.",
  navItems: [
    {
      label: "Акции",
      href: "/stocks",
    },
    {
      label: "Гарантия",
      href: "/warranty",
    },
    {
      label: "Обратная связь",
      href: "/support",
    },
    {
      label: "Полезные статьи",
      href: "/doc",
    },
    {
      label: "О нас",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Гарантия",
      href: "/warranty",
    },
    {
      label: "Обратная связь",
      href: "/support",
    },
    {
      label: "О нас",
      href: "/about",
    },
  ],
  links: {
    about: "/",
    telegram: "https://t.me/Nikitosa22",
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    stocks: "stocks",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
