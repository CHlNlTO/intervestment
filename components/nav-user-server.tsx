// app/components/nav-user-server.tsx
"user server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { NavUser } from "./nav-user";
import { redirect } from "next/navigation";
import { UserMapper } from "@/types/user";

export async function NavUserServer() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const userToMap = await currentUser();

  const user = userToMap ? UserMapper(userToMap) : null;

  if (!user) {
    return <div>User not found</div>;
  }

  return <NavUser user={user} />;
}
