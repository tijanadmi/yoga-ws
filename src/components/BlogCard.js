// app/_components/BlogCard.js
import Link from "next/link";

function BlogCard({ post }) {
  const { id, image_url, title_sr, subtitle_sr, created_at } = post;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={image_url}
        alt={title_sr}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-bold text-teal-700">{title_sr}</h2>
        <p className="text-sm text-gray-500">
          {new Date(created_at).toLocaleDateString("sr-RS")}
        </p>
        <p className="mt-4 text-gray-700">{subtitle_sr}</p>
        <Link
          href={`/blog/${id}`}
          className="inline-block mt-4 text-teal-600 hover:text-teal-700"
        >
          Pročitaj više →
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
