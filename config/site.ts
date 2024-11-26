export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "О нас",
      href: "/about",
    },
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
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
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
