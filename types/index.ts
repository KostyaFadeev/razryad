import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface ProductType {
  breadcrumbs: Array<{
    title: string;
    link: string;
  }>;
  title: string;
  imageUrl: string;
  defaultOzonLink: string;
  defaultYaLink: string;
  price: number;
  sizes: Array<{
    name: string;
    link: string;
  }>;
  storeLinks: Array<{
    name: string;
    link: string;
  }>;
  details: Array<{
    title: string;
    description: string;
  }>;
  videoUrl?: string; // Поле помечено как необязательное (вдруг видео отсутствует)
  videoDescription?: string; // Так же необязательное
  videoFeatures?: string[]; // Массив строк (необязательное для гибкости)
  articleLink: string;
  features: string[];
  imageUrls: string[];
  moreCards: Array<{
    id: string;
    title: string;
    subTitle: string;
    link: string;
    image: string;
    features: string[];
  }>;
}
