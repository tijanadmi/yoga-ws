// import Image from "next/image";
import Layout from "@/components/Layout";
import Link from "next/link";
import { getPosts } from "@/lib/data-service";

export const metadata = {
  title: "Blog",
};

async function BlogPage() {
  const blogPosts = await getPosts();

  // console.log(posts);
  // const blogPosts = [
  //   {
  //     id: 1,
  //     title: "Uvod u jogu: Osnove i početni koraci",
  //     excerpt:
  //       "Joga je drevna praksa koja pomaže u balansiranju tela, uma i duha. U ovom blogu ćemo istražiti osnovne vežbe i principe joge.",
  //     date: "10. Jun 2023.",
  //     image: "/images/b1.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "5 razloga zašto biste trebali da praktikujete jogu svakog dana",
  //     excerpt:
  //       "Joga nije samo fizička vežba, ona donosi mnoge mentalne i emotivne koristi. Otkrijte 5 razloga zašto biste je trebali prakticirati svakodnevno.",
  //     date: "5. Jun 2023.",
  //     image: "/images/b2.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Meditacija: Vežba za miran um",
  //     excerpt:
  //       "Meditacija je ključni deo joge koji pomaže da se oslobodimo stresa. Saznajte kako meditacija može pozitivno uticati na vaš život.",
  //     date: "30. Maj 2023.",
  //     image: "/images/b3.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: "Uvod u jogu: Osnove i početni koraci",
  //     excerpt:
  //       "Joga je drevna praksa koja pomaže u balansiranju tela, uma i duha. U ovom blogu ćemo istražiti osnovne vežbe i principe joge.",
  //     date: "10. Jun 2023.",
  //     image: "/images/b1.jpg",
  //   },
  //   {
  //     id: 5,
  //     title: "5 razloga zašto biste trebali da praktikujete jogu svakog dana",
  //     excerpt:
  //       "Joga nije samo fizička vežba, ona donosi mnoge mentalne i emotivne koristi. Otkrijte 5 razloga zašto biste je trebali prakticirati svakodnevno.",
  //     date: "5. Jun 2023.",
  //     image: "/images/b2.jpg",
  //   },
  //   {
  //     id: 6,
  //     title: "Meditacija: Vežba za miran um",
  //     excerpt:
  //       "Meditacija je ključni deo joge koji pomaže da se oslobodimo stresa. Saznajte kako meditacija može pozitivno uticati na vaš život.",
  //     date: "30. Maj 2023.",
  //     image: "/images/b3.jpg",
  //   },
  // ];

  return (
    <Layout>
      <section className="py-16 bg-gray-50 text-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-teal-700">
            Blog
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={post.image_url}
                  alt={post.title_sr}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-teal-700">
                    {post.title_sr}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {new Date(post.created_at).toLocaleDateString("sr-RS")}
                  </p>

                  <p className="mt-4 text-gray-700">{post.subtitle_sr}</p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-block mt-4 text-teal-600 hover:text-teal-700"
                  >
                    Pročitaj više →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default BlogPage;
