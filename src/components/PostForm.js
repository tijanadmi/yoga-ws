"use client";

import SubmitButton from "@/components/SubmitButton";
import Image from "next/image";

export default function PostForm({ isEdit, postId, post = {}, action }) {
  const safePost = post || {};
  const {
    title_sr = "",
    subtitle_sr = "",
    content_sr = "",
    image_url = "",
  } = safePost;

  return (
    <form
      action={action}
      method="POST"
      encType="multipart/form-data"
      className="space-y-6"
    >
      {isEdit && <input type="hidden" name="postId" value={postId} />}
      <input type="hidden" name="existing_image_url" value={image_url} />

      {/* Naslov */}
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

      {/* Podnaslov */}
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

      {/* Trenutna slika */}
      {image_url && (
        <div className="space-y-2 text-center">
          <label className="block font-medium text-left">Trenutna slika</label>
          <div className="mx-auto max-w-sm">
            <Image
              src={image_url}
              alt="Slika posta"
              width={400}
              height={250}
              className="rounded-md object-cover w-full h-auto border"
            />
          </div>
        </div>
      )}

      {/* Nova slika */}
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

      {/* Sadržaj */}
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

      {/* Submit dugme */}
      <div className="flex justify-end">
        <SubmitButton pendingLabel={isEdit ? "Ažuriram..." : "Kreiram..."}>
          {isEdit ? "Sačuvaj izmene" : "Kreiraj post"}
        </SubmitButton>
      </div>
    </form>
  );
}
