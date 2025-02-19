import { getAllPosts } from "../../../utils/blogUtils";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const seed = searchParams.get("seed") || "default";

    const posts = await getAllPosts();

    // Use the seed to create a different but consistent shuffle
    const shuffledPosts = [...posts].sort((a, b) => {
      const hashA = hashString(`${a.id}${seed}`);
      const hashB = hashString(`${b.id}${seed}`);
      return hashA - hashB;
    });

    const randomPosts = shuffledPosts.slice(0, 3);
    return Response.json(randomPosts);
  } catch (error) {
    return Response.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

// Simple hash function for consistent random sorting
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash;
}
