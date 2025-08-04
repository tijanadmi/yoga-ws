// middleware.js
import { createMiddlewareSupabaseClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareSupabaseClient({ req, res });
  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return res;
}

export const config = { matcher: ["/my_posts/:path*"] };
