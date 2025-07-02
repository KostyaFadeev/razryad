import { WarrantyBlock } from "@/components/WarrantyBlock";

export default function WarrantyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-12 text-gray-900">
        Гарантия
      </h1>
      <WarrantyBlock />
    </div>
  );
}
