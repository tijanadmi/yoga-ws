// app/_components/BlogList.js
import BlogCard from "./BlogCard";
import { getPosts } from "@/lib/data-service";

// Veštačko kašnjenje od 2 sekunde
// async function wait(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

async function BlogList() {
  // await wait(2000); // simulacija učitavanja
  const blogPosts = await getPosts();

  if (!blogPosts.length)
    return <p className="text-center">Nema blog postova.</p>;

  return (
    <section className="py-10 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogList;
