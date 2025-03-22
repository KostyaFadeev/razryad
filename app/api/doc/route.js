import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "doc.json");

  if (!fs.existsSync(filePath)) {
    return new Response(JSON.stringify({ error: "Файл не найден" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const jsonData = fs.readFileSync(filePath, "utf8");
    const articles = JSON.parse(jsonData);

    return new Response(JSON.stringify(articles), {
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
