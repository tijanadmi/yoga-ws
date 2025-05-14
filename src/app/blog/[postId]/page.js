// import Layout from "@/components/Layout";
// import { getPostById } from "@/lib/data-service";
// import Image from "next/image";

// export async function generateMetadata({ params }) {
//   const post = await getPostById(params.id);
//   return {
//     title: post?.title_sr || "Blog post",
//   };
// }

// export default async function PostDetailPage({ params }) {
//   const post = await getPostById(params.postId);

//   if (!post) {
//     return (
//       <Layout>
//         <div className="py-20 text-center text-gray-700">
//           <h1 className="text-3xl font-bold">Post nije pronađen</h1>
//         </div>
//       </Layout>
//     );
//   }

//   return (
//     <Layout>
//       <section className="py-16 bg-white text-gray-800">
//         <div className="container mx-auto px-4 max-w-3xl">
//           <h1 className="text-4xl font-bold mb-4 text-teal-700">
//             {post.title_sr}
//           </h1>
//           <p className="text-sm text-gray-500 mb-6">
//             {new Date(post.created_at).toLocaleDateString("sr-RS")}
//           </p>

//           {post.image_url && (
//             <div className="mb-8">
//               <Image
//                 src={post.image_url}
//                 alt={post.title_sr}
//                 width={800}
//                 height={400}
//                 className="rounded-lg object-cover w-full"
//               />
//             </div>
//           )}

//           <div className="text-lg leading-relaxed text-gray-700">
//             {post.content_sr}
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }

import Layout from "@/components/Layout";
import { getPostById } from "@/lib/data-service";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export async function generateMetadata({ params }) {
  const post = await getPostById(params.postId);
  return {
    title: post?.title_sr || "Blog post",
  };
}

export default async function PostDetailPage({ params }) {
  const post = await getPostById(params.postId);

  if (!post) {
    return (
      <Layout>
        <div className="py-20 text-center text-gray-700">
          <h1 className="text-3xl font-bold">Post nije pronađen</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-2 text-teal-700">
            {post.title_sr}
          </h1>

          {post.subtitle_sr && (
            <p className="text-lg italic text-gray-600 mb-4">
              {post.subtitle_sr}
            </p>
          )}

          <p className="text-sm text-gray-500 mb-6">
            {new Date(post.created_at).toLocaleDateString("sr-RS")}
          </p>

          {post.image_url && (
            <div className="mb-8">
              <Image
                src={post.image_url}
                alt={post.title_sr}
                width={800}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none text-gray-700">
            <ReactMarkdown>{post.content_sr}</ReactMarkdown>
          </div>
        </div>
      </section>
    </Layout>
  );
}
