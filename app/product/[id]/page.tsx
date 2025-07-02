import fs from "fs";
import path from "path";
import Product from "@/app/product/components/Product";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const filePath = path.join(
    process.cwd(),
    "public/product",
    `${params.id}.json`,
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileData = fs.readFileSync(filePath, "utf-8");
  const product = JSON.parse(fileData);

  return <Product product={product} />;
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "public/product");
  const files = fs.readdirSync(dir);

  return files.map((file) => ({
    id: file.replace(".json", ""),
  }));
}
