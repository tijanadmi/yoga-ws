import SubmitButton from "@/components/SubmitButton";
import Layout from "@/components/Layout";
import { updatePost } from "@/lib/actions";
import { getPostById } from "@/lib/data-service";
import Image from "next/image";

export default async function EditPostPage({ params }) {
  const { postId } = params;
  const post = await getPostById(postId);

  if (!post) {
    return (
      <Layout>
        <div className="py-20 text-center text-gray-700">
          <h1 className="text-3xl font-bold">Post nije pronađen</h1>
        </div>
      </Layout>
    );
  }

  const { title_sr, subtitle_sr, content_sr, image_url } = post;

  return (
    <Layout>
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-teal-700">
            Izmeni blog post #{postId}
          </h2>

          <form
            action={updatePost}
            method="POST"
            encType="multipart/form-data"
            className="space-y-6"
          >
            <input type="hidden" name="postId" value={postId} />

            <div className="space-y-2">
              <label htmlFor="title_sr" className="block font-medium">
                Naslov
              </label>
              <input
                type="text"
                name="title_sr"
                id="title_sr"
                defaultValue={title_sr}
                required
                className="w-full px-5 py-3 border rounded-md bg-gray-100 text-gray-800"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="subtitle_sr" className="block font-medium">
                Podnaslov
              </label>
              <input
                type="text"
                name="subtitle_sr"
                id="subtitle_sr"
                defaultValue={subtitle_sr}
                className="w-full px-5 py-3 border rounded-md bg-gray-100 text-gray-800"
              />
            </div>

            <input type="hidden" name="existing_image_url" value={image_url} />

            <div className="space-y-2 text-center">
              <label className="block font-medium text-left">
                Trenutna slika
              </label>
              {image_url ? (
                <div className="mx-auto max-w-sm">
                  <Image
                    src={image_url}
                    alt="Slika posta"
                    width={400}
                    height={250}
                    className="rounded-md object-cover w-full h-auto border"
                  />
                </div>
              ) : (
                <p className="text-gray-500 italic">Nema slike</p>
              )}
              <input
                type="hidden"
                name="existing_image_url"
                value={image_url || ""}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="image" className="block font-medium">
                Nova slika (opciono)
              </label>
              <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="content_sr" className="block font-medium">
                Sadržaj
              </label>
              <textarea
                name="content_sr"
                id="content_sr"
                rows="10"
                defaultValue={content_sr}
                required
                className="w-full px-5 py-3 border rounded-md bg-gray-100 text-gray-800"
              />
            </div>

            <div className="flex justify-end">
              <SubmitButton pendingLabel="Ažuriram...">
                Sačuvaj izmene
              </SubmitButton>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
