// app/my_posts/PostsList.js
import PostCard from "@/components/PostCard";
import { getPosts } from "@/lib/data-service";

// Veštačko kašnjenje od 2 sekunde
// async function wait(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

export default async function PostsList() {
  // await wait(2000); // simulacija učitavanja
  const posts = await getPosts();

  if (posts.length === 0) {
    return (
      <p className="text-lg">
        Još uvek nemaš ni jedan post. Klikni ovde{" "}
        <a className="underline text-accent-500" href="/my_posts/form/new">
          da uneseš novi &rarr;
        </a>
      </p>
    );
  }

  return (
    <ul className="space-y-6">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </ul>
  );
}
