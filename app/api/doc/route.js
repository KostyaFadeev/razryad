// app/api/doc/route.js
import fs from "fs";
import path from "path";

export async function GET(req) {
  // Путь к вашему JSON файлу
  const filePath = path.join(process.cwd(), "doc.json");

  // Проверяем, существует ли файл
  if (!fs.existsSync(filePath)) {
    return new Response(JSON.stringify({ error: "Файл не найден" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const jsonData = fs.readFileSync(filePath, "utf8");
    const articles = JSON.parse(jsonData); // Парсинг JSON данных

    return new Response(JSON.stringify(articles), {
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
