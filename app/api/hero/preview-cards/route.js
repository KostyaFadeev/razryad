import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "data/preview-cards.json");

  if (!fs.existsSync(filePath)) {
    return new Response(JSON.stringify({ error: "Файл не найден" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const jsonData = fs.readFileSync(filePath, "utf8");
    const cards = JSON.parse(jsonData);

    return new Response(JSON.stringify(cards), {
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
