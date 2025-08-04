import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import DeletePost from "./DeletePost";
// import { deletePost } from "@/lib/actions";

function PostCard({ post }) {
  const { id, title_sr, subtitle_sr, /*content_sr,*/ image_url, created_at } =
    post;

  return (
    <div className="flex bg-white rounded-2xl shadow-md overflow-hidden border border-pink-200">
      {/* Slika */}
      <div className="relative w-32 h-32 flex-shrink-0">
        <img
          src={image_url}
          alt={title_sr}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Tekstualni sadržaj */}
      <div className="flex-grow px-6 py-4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">
            {title_sr}
          </h3>
          <p className="text-sm text-pink-600 mt-1">{subtitle_sr}</p>
        </div>

        <p className="text-xs text-gray-400 mt-3">
          Napisan {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
        </p>
      </div>

      {/* Akcije */}
      <div className="flex flex-col justify-between border-l border-pink-200 w-[100px] bg-pink-50">
        <a
          href={`/my_posts/form/${id}`}
          className="group flex items-center justify-center gap-2 text-xs font-bold text-pink-600 flex-grow px-3 py-3 hover:bg-pink-100 transition-colors"
        >
          <PencilSquareIcon className="h-5 w-5 text-pink-500 group-hover:text-pink-800 transition-colors" />
          <span>Izmeni</span>
        </a>

        <DeletePost postId={id} />
      </div>
    </div>
  );
}

export default PostCard;
