import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import DeletePost from "./DeletePost";

function PostCard({ post }) {
  const { id, title_sr, subtitle_sr, image_url, created_at } = post;

  return (
    <div className="flex flex-col sm:flex-row w-full bg-white rounded-2xl shadow-md overflow-hidden border border-pink-200">
      {/* Slika */}
      <div className="relative w-full sm:w-32 h-48 sm:h-auto flex-shrink-0">
        <img
          src={image_url}
          alt={title_sr}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Tekstualni sadržaj */}
      <div className="flex flex-col justify-between flex-grow px-4 py-4">
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
      <div className="flex sm:flex-col justify-between items-center gap-2 px-4 py-4 border-t sm:border-t-0 sm:border-l border-pink-200 bg-pink-50 text-xs">
        <a
          href={`/my_posts/form/${id}`}
          className="group flex items-center gap-1 text-pink-600 font-bold hover:text-pink-800 transition-colors"
        >
          <PencilSquareIcon className="h-4 w-4 text-pink-500 group-hover:text-pink-800 transition-colors" />
          <span>Izmeni</span>
        </a>
        <DeletePost postId={id} />
      </div>
    </div>
  );
}

export default PostCard;
