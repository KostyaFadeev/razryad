"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import View from "@/app/article/components/View";
import BreadcrumbsComponent from "@/components/Breadcrumbs";
import PaginationComponent from "@/components/Pagination";
import { Spinner } from "@nextui-org/react";

interface ArticleType {
  id: string;
  title: string;
  content: string;
}

const Article = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const articleId = searchParams.get("id");
  const [article, setArticle] = useState<ArticleType>({} as ArticleType);
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const responseArt = await fetch("/api/doc");
        if (!responseArt.ok) return;

        const articlesData = await responseArt.json();
        setArticles(articlesData);

        if (articleId) {
          const response = await fetch(`/api/article/${articleId}`);
          if (!response.ok) return;

          const data = await response.json();
          setArticle(data);
        }
      } catch (error) {
        console.error("Ошибка при загрузке статей:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [articleId]);

  const currentIndexArticle = articleId
    ? articles.findIndex((item) => item.id === articleId)
    : -1;

  return (
    <div className={"w-full "}>
      {loading ? (
        <div className={"w-full flex justify-center"}>
          <Spinner size="md" />
        </div>
      ) : (
        <>
          <BreadcrumbsComponent
            crumbs={[
              { title: "Главная", link: "/" },
              { title: "Полезные статьи", link: "/doc" },
              { title: article.title, link: `/article?id=${article.id}` },
            ]}
          />
          <View article={article} />
          <PaginationComponent
            onChange={(value: number) => {
              const newArticleId = articles[value - 1]?.id;
              if (newArticleId) {
                router.push(`/article?id=${newArticleId}`);
              } else {
                return null;
              }
            }}
            initialPage={currentIndexArticle + 1}
            total={articles.length}
          />
        </>
      )}
    </div>
  );
};

export default Article;
