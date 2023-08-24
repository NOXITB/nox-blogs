import { getCollection } from "astro:content";

export const latestPosts = (
  await getCollection("blog", ({ data }) => {
    return data.draft !== true;
  })
).sort(
  (a, b) =>
    new Date(b.data.publishDate).valueOf() -
    new Date(a.data.publishDate).valueOf()
);

async function getPosts() {
  // Use the latestPosts array to avoid fetching the collection again
  const posts = latestPosts;
  return posts.map((post) => ({
    slug: post.slug,
    title: post.data.title,
    description: post.data.excerpt,
    date: post.data.publishDate,
    category: post.data.category 
  }));
}

export async function get() {
  return new Response(JSON.stringify(await getPosts()), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
