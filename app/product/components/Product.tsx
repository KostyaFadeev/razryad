"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import BreadcrumbsComponent from "@/components/Breadcrumbs";
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Image,
  ScrollShadow,
  Select,
  SelectItem,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import Link from "next/link";
import { button as buttonStyles } from "@nextui-org/theme";

const Product = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  const [product, setProduct] = useState<ProductType>({} as ProductType);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState(
    {} as ProductType["sizes"][0],
  );

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (productId) {
          const response = await fetch(`/api/product/${productId}`);
          if (!response.ok) return;

          const data = await response.json();
          setProduct(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <div className={"w-full "}>
      {loading ? (
        <div className={"w-full flex justify-center"}>
          <Spinner size="md" />
        </div>
      ) : (
        <div>
          <BreadcrumbsComponent crumbs={product.breadcrumbs} />

          <div className="mb-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Изображение товара */}
            <Image
              alt={product.title}
              src={product.imageUrl}
              width={500}
              className="rounded-lg shadow-lg"
            />

            {/* Описание товара */}
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl lg:text-4xl font-extrabold">
                {product.title}
              </h1>

              {/* Селектор размера и цена */}
              <div className="flex flex-col items-center md:flex-row gap-6">
                {/* Селектор размера */}
                <Select
                  className="max-w-xs"
                  label="Размер"
                  placeholder="Выберите размер"
                  onChange={(e) =>
                    setSelectedSize(product.sizes[Number(e.target.value)])
                  }
                >
                  {product.sizes.map((size, index) => (
                    <SelectItem key={index}>{size?.name}</SelectItem>
                  ))}
                </Select>

                {/* Кнопки ссылок на магазины */}
                <div className="flex flex-wrap gap-4">
                  {product.storeLinks.map((store, index) => (
                    <Button
                      key={index}
                      color="primary"
                      variant="ghost"
                      target="_blank"
                      as="a"
                      href={selectedSize?.link}
                    >
                      {store.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto py-10">
            {/* Блок "Детальная информация" */}
            <div className="mb-12 bg-gray-50 p-8 rounded-xl shadow-xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-gray-300 pb-3 text-left">
                Детальная информация
              </h2>
              <ScrollShadow className="h-[350px] overflow-y-auto rounded-lg p-4 bg-white shadow-md">
                <div className="text-gray-700 text-lg leading-8 space-y-6 text-left">
                  {product.details.map((detail, index) => (
                    <p key={index}>
                      <span className="font-semibold text-gray-900">
                        {detail.title}:
                      </span>{" "}
                      {detail.description}
                    </p>
                  ))}
                </div>
              </ScrollShadow>
            </div>

            {/* Секция "Видеообзор" */}
            {product.videoUrl && (
              <div className="flex flex-wrap gap-8">
                <div className="flex-shrink-0 w-full lg:w-[600px]">
                  <h2 className="text-2xl font-bold mb-4">Видеообзор</h2>
                  <video
                    controls
                    className="w-full max-h-[350px] object-contain rounded-xl shadow-md"
                  >
                    <source src={product.videoUrl} type="video/mp4" />
                    <track
                      src=""
                      kind="captions"
                      srcLang="en"
                      label="English"
                    />
                    Ваш браузер не поддерживает элемент <code>video</code>.
                  </video>
                </div>

                <div className="flex-1 bg-gray-50 rounded-xl p-8 shadow-xl">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    Основные преимущества
                  </h2>
                  <p className="text-gray-700 mb-6 leading-8">
                    {product.videoDescription}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-6 space-y-3">
                    {product?.videoFeatures?.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Секция "Характеристики" */}
            <div className="mt-12 mb-10">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
                Характеристики продукта
              </h2>
              <Table aria-label="Таблица характеристик">
                <TableHeader>
                  <TableColumn className="text-left text-lg ">
                    Характеристики
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  {product.features.map((feature, index) => (
                    <TableRow key={index}>
                      <TableCell className="text-lg ">{feature}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Секция "Фотогалерея" */}
            <div className="mb-20">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
                Фотогалерея
              </h2>
              {product.imageUrls && product.imageUrls.length > 0 ? (
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 3000 }}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {product.imageUrls.map((url, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        src={url}
                        alt={`Изображение ${index + 1}`}
                        width={500}
                        className="rounded-lg shadow-lg"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <p>Нет доступных изображений.</p>
              )}
            </div>

            {/* Секция "Еще" */}
            <div className="mb-20">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
                Рекомендуем обратить внимание
              </h2>
              {product.imageUrls && product.imageUrls.length > 0 ? (
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 3000 }}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {product.moreCards &&
                    product?.moreCards?.map((card, index) => (
                      <SwiperSlide className={"p-4"} key={index}>
                        <Card
                          isFooterBlurred
                          className="w-full h-[300px] col-span-12 sm:col-span-5"
                        >
                          <CardHeader className="absolute z-10 top-1 flex-col items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">
                              {card.subTitle}
                            </p>
                            <h4 className="text-white font-medium text-2xl">
                              {card.title}
                            </h4>
                          </CardHeader>
                          <Image
                            removeWrapper
                            alt={card.title}
                            className="w-full h-full object-contain"
                            src={card?.image || ""}
                          />
                          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                            <div>
                              {card.features?.map((feature, index) => (
                                <p key={index} className="text-black text-tiny">
                                  {feature}
                                </p>
                              ))}
                            </div>
                            <Link
                              className={buttonStyles({
                                color: "primary",
                                radius: "full",
                                variant: "shadow",
                              })}
                              href={`/product?id=${card.id}`}
                            >
                              Подробнее
                            </Link>
                          </CardFooter>
                        </Card>
                      </SwiperSlide>
                    ))}
                </Swiper>
              ) : (
                <p>Нет доступных изображений.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;

interface ProductType {
  breadcrumbs: Array<{
    title: string;
    link: string;
  }>;
  title: string;
  imageUrl: string;
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
