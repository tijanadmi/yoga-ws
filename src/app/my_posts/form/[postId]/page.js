import Layout from "@/components/Layout";
import PostForm from "@/components/PostForm";
import { getPostById } from "@/lib/data-service";
import { createPost, updatePost } from "@/lib/actions";

export default async function PostFormPage({ params }) {
  const { postId } = params;
  const isEdit = postId !== "new";
  const post = isEdit ? await getPostById(postId) : null;

  return (
    <Layout>
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-teal-700">
            {isEdit ? `Izmeni blog post #${postId}` : "Novi blog post"}
          </h2>

          <PostForm
            isEdit={isEdit}
            postId={postId}
            post={post}
            action={isEdit ? updatePost : createPost}
          />
        </div>
      </section>
    </Layout>
  );
}
