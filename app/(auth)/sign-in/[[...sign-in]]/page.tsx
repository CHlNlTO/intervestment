import { SignIn } from "@clerk/nextjs";
import { createUserIfNotExists } from "@/utils/supabase/middleware";

export default function Page() {
  createUserIfNotExists();
  return <SignIn forceRedirectUrl={"/dashboard"} />;
}
