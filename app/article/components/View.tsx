import React, { MouseEvent, useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import Aside from "./Aside";

interface Article {
  id: string;
  title: string;
  content: string;
}

interface Heading {
  level: number;
  text: string;
  id: string;
}

interface ViewProps {
  article: Article; // Указываем тип для article
}

const View: React.FC<ViewProps> = ({ article }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    if (article?.content) {
      const regex = /^(#{1,6})\s+(.+)/gm; // Регулярное выражение для заголовков
      const matches: Heading[] = [];
      let match;

      while ((match = regex.exec(article.content)) !== null) {
        const level = match[1].length; // Уровень заголовка
        const text = match[2]; // Текст заголовка
        const id = text
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, ""); // Генерация id
        matches.push({ level, text, id });
      }
      setHeadings(matches);
    }
  }, [article]);

  const handleHeadingClick = (
    e: MouseEvent<HTMLElement>,
    link: {
      //Updated parameters
      title: React.ReactNode;
      href: string;
    },
  ) => {
    e.preventDefault();
    const id = link.href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={"w-full flex min-h-screen"}>
      <div className={"flex-1"}>
        {article ? (
          <>
            <h2 className={"font-medium text-2xl mb-4"}>{article.title}</h2>
            <div data-color-mode="light">
              <MDEditor.Markdown source={article.content} />
            </div>
          </>
        ) : (
          <p>Статья не найдена.</p>
        )}
      </div>
      <Aside headings={headings} onHeadingClick={handleHeadingClick} />
    </div>
  );
};

export default View;
