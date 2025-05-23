import fs from "fs";
import path from "path";

export async function GET(req, { params }) {
  const { id } = params;
  const filePath = path.join(process.cwd(), "article", `${id}.json`);

  if (!fs.existsSync(filePath)) {
    return new Response(JSON.stringify({ error: "Статья не найдена" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // Читаем файл
    const jsonData = fs.readFileSync(filePath, "utf8");
    const article = JSON.parse(jsonData);

    return new Response(JSON.stringify(article), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
