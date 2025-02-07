import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "./admin";
import { auth, currentUser } from "@clerk/nextjs/server";

export const createClient = (request: NextRequest) => {
  // Create an unmodified response
  let supabaseResponse = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  return supabaseResponse;
};

export async function createUserIfNotExists() {
  console.log("Initializing createUserIfNotExists() method.");
  const { userId } = await auth();
  const user = await currentUser();
  if (!userId) return;

  console.log("user exists", userId);

  const { data, error } = await supabaseAdmin.from("users").upsert({
    clerk_id: userId,
    email: user?.emailAddresses[0]?.emailAddress || null,
    fullname: `${user?.firstName} ${user?.lastName}` || null,
    google_id: null,
    image_url: user?.imageUrl || null,
  });

  if (error) console.error("Error inserting user:", error);

  return data;
}
