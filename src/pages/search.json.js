import { getCollection } from "astro:content";

export const latestPosts = await getCollection("blog", ({ data }) => {
  return data.draft !== true;
});

async function getPosts() {
  // Use the latestPosts array to avoid fetching the collection again
  return latestPosts.map((post) => ({
    slug: post.slug,
    title: post.data.title,
    description: post.data.excerpt,
    date: post.data.publishDate,
    category: post.data.category,
    tags: post.data.tags,
  }));
}

export async function get() {
  const posts = await getPosts();
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
