import DocList from "@/app/doc/DocList";

export default function DocPage() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold lg:text-4xl lg:font-extrabold mb-10">
        Статьи
      </h1>
      <DocList />
    </div>
  );
}
