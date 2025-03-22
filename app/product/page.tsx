"use client";
import { Suspense } from "react";

import Product from "@/app/product/components/Product";

/**
 * Асинхронный компонент страницы продукта.
 * Отображает компонент загрузки до полной загрузки компонента продукта.
 *
 * Возвращает компонент страницы продукта с отложенной загрузкой.
 */

export default async function ProductPage() {
  return (
    <Suspense fallback={<div>Loading product...</div>}>
      <Product />
    </Suspense>
  );
}
