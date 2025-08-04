// app/api/me/route.js
// app/api/me/route.js
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export async function GET() {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY,
    {
      cookies: {
        get(name) {
          return cookies().get(name)?.value;
        },
        set(name, value, opts) {
          cookies().set({ name, value, ...opts });
        },
        remove(name) {
          cookies().delete(name);
        },
      },
    }
  );

  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    return NextResponse.json({ user: null });
  }

  return NextResponse.json({ user: data.user });
}
