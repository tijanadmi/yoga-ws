import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import { getPosts } from "@/lib/data-service";

export const metadata = {
  title: "Moji postovi",
};

async function PostsPage() {
  const posts = await getPosts();
  return (
    <Layout>
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-semibold text-2xl text-accent-400 mb-7">
            Moji postovi
          </h2>

          {posts.length === 0 ? (
            <p className="text-lg">
              Još uvek nemaš ni jedan post. Klikni ovde{" "}
              <a className="underline text-accent-500" href="/my_posts/newpost">
                da uneseš novi &rarr;
              </a>
            </p>
          ) : (
            <ul className="space-y-6">
              {posts.map((post) => (
                <PostCard post={post} key={post.id} />
              ))}
            </ul>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default PostsPage;
