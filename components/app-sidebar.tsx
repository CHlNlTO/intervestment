// components/app-sidebar.tsx
import { auth, currentUser } from "@clerk/nextjs/server";
import { AppSidebarClient } from "./app-sidebar-client";

// Define types for serializable user data
interface SerializableUser {
  id: string;
  fullName: string | null;
  imageUrl: string | null;
  username: string | null;
  primaryEmailAddress: string | null;
}

const data = {
  teams: [
    {
      name: "Intervestment",
      plan: "Pro",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      isActive: true,
    },
  ],
};

export async function AppSidebar() {
  const { userId } = await auth();
  const user = userId ? await currentUser() : null;

  // Transform Clerk user object into a plain serializable object
  const serializableUser: SerializableUser | null = user
    ? {
        id: user.id,
        fullName: user.fullName,
        imageUrl: user.imageUrl,
        username: user.username,
        primaryEmailAddress: user.primaryEmailAddress?.emailAddress ?? null,
      }
    : null;

  return (
    <AppSidebarClient
      user={serializableUser}
      teams={data.teams}
      navItems={data.navMain}
    />
  );
}
