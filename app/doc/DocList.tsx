"use client";
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Image,
  Spinner,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Article {
  id: string; // or number, depending on your data structure
  title: string;
  subTitle?: string; // Optional if it may not be present
  description?: string; // Optional if it may not be present
  image?: string; // Optional if it may not be present
}

const DocList = () => {
  const router = useRouter();
  const [articles, setArticles] = useState<Article[]>([]); // Specify the state type
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/doc");
        if (!response.ok) {
          return;
        }

        const data = await response.json(); // Wait for response and parse JSON
        setArticles(data); // Set articles state with fetched data
      } catch (error) {
        console.error("Ошибка при загрузке статей:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return loading ? (
    <div className={"w-full flex justify-center"}>
      <Spinner size="md" />
    </div>
  ) : (
    <div className="gap-2 grid grid-cols-12 grid-rows-2 px-8">
      {articles.length > 0 &&
        articles.map((article) => (
          <Card
            key={article.id}
            className="col-span-12 sm:col-span-4 h-[300px]"
          >
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                {article?.subTitle}
              </p>
              <h4 className="text-white font-medium text-large">
                {article.title}
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src={article?.image || ""}
            />
            <CardFooter className="absolute bg-white/40 bottom-0 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-tiny text-white/60 uppercase font-sameBold">
                  {article?.description}
                </p>
              </div>
              <Button
                onClick={() => {
                  router.push(`/article?id=${article.id}`);
                }}
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Читать
              </Button>
            </CardFooter>
          </Card>
        ))}
    </div>
  );
};

export default DocList;
