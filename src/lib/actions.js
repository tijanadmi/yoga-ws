"use server";

import { supabase, supabaseUrl } from "./supabase";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { deletePostById } from "@/lib/data-service";

export async function updatePost(formData) {
  const postId = formData.get("postId");
  const title_sr = formData.get("title_sr");
  const subtitle_sr = formData.get("subtitle_sr");
  const content_sr = formData.get("content_sr");

  const existingImageUrl = formData.get("existing_image_url"); // iz hidden inputa
  const imageFile = formData.get("image"); // iz file inputa

  let image_url = existingImageUrl;

  // Ako je poslata nova slika
  if (imageFile && typeof imageFile !== "string" && imageFile.size > 0) {
    // obrisi staru sliku ako postoji
    if (existingImageUrl) {
      // Extract relative path after "/storage/v1/object/public/"
      const prefix = `${supabaseUrl}/storage/v1/object/public/`;
      const imageRelativePath = existingImageUrl.replace(prefix, "");

      const { error: deleteError } = await supabase.storage
        .from("yoga")
        .remove([imageRelativePath]);

      if (deleteError) {
        console.warn(
          "Greška pri brisanju prethodne slike:",
          deleteError.message
        );
        // Not fatal, možeš ignorisati ako nije kritično
      }
    }
    // Upload nove slike
    const imageName = `${Math.random().toString(36).substring(2, 12)}-${
      imageFile.name
    }`.replaceAll("/", "");
    const imagePath = imageName;

    const { error: uploadError } = await supabase.storage
      .from("yoga")
      .upload(imagePath, imageFile, {
        cacheControl: "3600",
        upsert: true,
      });

    if (uploadError) {
      console.error("Greška pri upload-u slike:", uploadError.message);
      throw new Error("Greška pri dodavanju slike.");
    }

    image_url = `${supabaseUrl}/storage/v1/object/public/yoga/${imagePath}`;
  }

  // Ažuriranje u bazi
  const { error } = await supabase
    .from("posts")
    .update({
      title_sr,
      subtitle_sr,
      content_sr,
      image_url,
    })
    .eq("id", postId);

  if (error) {
    console.error("Greška pri ažuriranju posta:", error.message);
    throw new Error("Greška pri ažuriranju posta.");
  }

  // Redirekcija na /my_posts
  revalidatePath("/my_posts");
  revalidatePath("/blog");
  revalidatePath("/blog/" + postId);
  redirect("/my_posts");
}

// Kreiranje novog posta
export async function createPost(formData) {
  const title_sr = formData.get("title_sr");
  const subtitle_sr = formData.get("subtitle_sr");
  // const image_url = formData.get("image_url");
  const content_sr = formData.get("content_sr");
  const imageFile = formData.get("image"); // nova slika
  let image_url = null;

  // Ako je slika odabrana — uradi upload
  if (imageFile && imageFile.size > 0) {
    const imageName = `${Math.random().toString(36).substring(2, 12)}-${
      imageFile.name
    }`.replaceAll("/", "");

    const { error: uploadError } = await supabase.storage
      .from("yoga")
      .upload(imageName, imageFile, {
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      console.error("Greška pri upload-u slike:", uploadError.message);
      throw new Error("Greška pri dodavanju slike.");
    }

    // Postavljanje URL-a slike
    image_url = `${supabaseUrl}/storage/v1/object/public/yoga/${imageName}`;
  }

  const { error } = await supabase
    .from("posts")
    .insert([{ title_sr, subtitle_sr, image_url, content_sr }]);

  if (error) {
    console.error("Greška pri kreiranju posta:", error.message);
    throw new Error("Greška pri kreiranju posta.");
  }

  revalidatePath("/my_posts");
  revalidatePath("/blog");
  redirect("/my_posts");
}

export async function deletePost(formData) {
  const postId = formData.get("postId");

  if (!postId) {
    throw new Error("Nedostaje postId za brisanje");
  }

  await deletePostById(postId);
  revalidatePath("/my_posts");
  revalidatePath("/blog");
  redirect("/my_posts");
}
