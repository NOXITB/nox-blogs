import { getCollection } from "astro:content";

async function getPosts() {
  const latestPosts = await getCollection("blog", ({ data }) => {
    return data.draft !== true;
  });

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
