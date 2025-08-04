"use client";

import { TrashIcon } from "@heroicons/react/24/solid";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";
import { deletePost } from "@/lib/actions";

function DeletePost({ postId }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    const confirmed = confirm(
      "Da li ste sigurni da želite da obrišete ovaj post?"
    );
    if (!confirmed) return;

    startTransition(async () => {
      const formData = new FormData();
      formData.set("postId", postId);
      await deletePost(formData);
    });
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="group flex items-center justify-center gap-2 text-xs font-bold text-red-600 flex-grow px-3 py-3 hover:bg-red-100 transition-colors"
    >
      {!isPending ? (
        <>
          <TrashIcon className="h-5 w-5 text-red-600 group-hover:text-red-800 transition-colors" />
          <span>Obriši</span>
        </>
      ) : (
        <span className="mx-auto">
          <SpinnerMini />
        </span>
      )}
    </button>
  );
}

export default DeletePost;
