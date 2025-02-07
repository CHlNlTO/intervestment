import { auth } from "@clerk/nextjs/server";
import { createClient } from "@/utils/supabase/client";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  const { data, error } = await createClient()
    .from("investments")
    .select("*")
    .eq("clerk_id", userId);

  if (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
}
