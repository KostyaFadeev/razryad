import { AboutBlock } from "@/components/AboutBlock";

export default function AboutPage() {
  return (
    <div className="px-4 py-12">
      <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 text-gray-900">
        О нас
      </h1>
      <AboutBlock />
    </div>
  );
}
