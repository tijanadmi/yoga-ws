import { supabase } from "./supabase";

export const getPosts = async function () {
  const { data, error } = await supabase
    .from("posts")
    .select("id, created_at, title_sr, subtitle_sr, content_sr,  image_url")
    .order("created_at", { ascending: false });

  // For testing
  // await new Promise((res) => setTimeout(res, 2000));

  if (error) {
    console.error(error);
    throw new Error("Posts could not be loaded");
  }

  return data;
};

export async function getPostById(id) {
  const { data, error } = await supabase
    .from("posts")
    .select(
      "id, created_at, title_sr, subtitle_sr, content_sr, content_en,  image_url, likes"
    )
    .eq("id", id)
    .single();

  if (error) {
    console.error("Greška pri dohvatanju posta:", error);
    return null;
  }

  return data;
}
