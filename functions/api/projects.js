/**
 * Cloudflare Pages Function для получения проектов из Sanity (Dynamic API)
 * Полная замена локального src/pages/api/projects.json.ts
 */

export async function onRequestGet(context) {
  const { env, request } = context;

  // 1. Получаем параметры (lang)
  const url = new URL(request.url);
  const locale = url.searchParams.get("lang") || "en";

  try {
    // 2. Настройки Sanity
    const projectId = env.SANITY_PROJECT_ID || "py6y7j4v";
    const dataset = env.SANITY_DATASET || "production";
    // ВАЖНО: Токен обычно не нужен для чтения публичных проектов, 
    // но если dataset приватный - раскомментируйте использование токена.
    // const token = env.SANITY_API_TOKEN;

    // 3. Формируем GROQ запрос
    const query = encodeURIComponent(
      `*[_type == "project"] | order(order asc) {
        _id,
        content,
        mainImage,
        gallery,
        videoUrl
      }`
    );

    const sanityUrl = `https://${projectId}.api.sanity.io/v2021-06-07/data/query/${dataset}?query=${query}`;

    // 4. Делаем запрос к Sanity (Native Fetch)
    const response = await fetch(sanityUrl, {
      method: "GET",
      // headers: { Authorization: `Bearer ${token}` } // Если нужен токен
    });

    if (!response.ok) {
      throw new Error(`Sanity API error: ${response.statusText}`);
    }

    const { result } = await response.json();

    // 5. Обрабатываем данные (как в локальном файле)
    if (result && result.length > 0) {
      const projects = result.map((p, idx) => {
        const content = p.content?.[locale] || p.content?.en;
        return {
          id: idx + 1,
          title: content?.title || "Untitled",
          location: content?.location || "",
          type: content?.type || "",
          description: content?.description || "",
          videoUrl: p.videoUrl || "",
          mainImg: p.mainImage ? buildImageUrl(p.mainImage, projectId, dataset) : "",
          gallery: (p.gallery || []).map((img) => buildImageUrl(img, projectId, dataset)),
        };
      });

      return new Response(JSON.stringify({ success: true, data: projects }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(JSON.stringify({ success: true, data: [] }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

  } catch (error) {
    console.error("Projects API Error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message, data: [] }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

/**
 * Helper: Превращает Sanity Image Object в URL
 * (Аналог imageUrlBuilder без внешней библиотеки)
 * Формат: image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg
 * -> https://cdn.sanity.io/images/{projectId}/{dataset}/Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000.jpg
 */
function buildImageUrl(source, projectId, dataset) {
  if (!source || !source.asset || !source.asset._ref) return "";

  const ref = source.asset._ref;
  // Разбираем строку: image-<id>-<width>x<height>-<format>
  const parts = ref.split("-");
  if (parts.length !== 4) return "";

  const id = parts[1];
  const size = parts[2];
  const format = parts[3];

  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${size}.${format}`;
}
