import fs from "fs";
import path from "path";

export async function GET(req, { params }) {
  const { id } = params; // Извлекаем id из маршрута
  const filePath = path.join(process.cwd(), "article", `${id}.json`); // Определяем путь к файлу

  // Проверяем, существует ли файл
  if (!fs.existsSync(filePath)) {
    console.error("Файл не найден:", filePath); // добавлено логирование
    return new Response(JSON.stringify({ error: "Статья не найдена" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // Читаем файл
    const jsonData = fs.readFileSync(filePath, "utf8");
    const article = JSON.parse(jsonData); // Парсинг JSON данных

    return new Response(JSON.stringify(article), {
      status: 200,
      headers: {
        "Content-Type": "application/json", // Установим заголовок контента
      },
    });
  } catch (error) {
    console.error("Ошибка при обработке файла:", error);
    return new Response(JSON.stringify({ error: "Ошибка сервера" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
