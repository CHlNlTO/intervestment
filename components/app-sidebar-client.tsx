// components/app-sidebar-client.tsx
"use client";

import * as React from "react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

export interface SerializableUser {
  id: string;
  fullName: string | null;
  imageUrl: string | null;
  username: string | null;
  primaryEmailAddress: string | null;
}

interface AppSidebarClientProps {
  user: SerializableUser | null;
  teams: any[];
  navItems: any[];
}

export function AppSidebarClient({
  user,
  teams,
  navItems,
}: AppSidebarClientProps) {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <TeamSwitcher teams={teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter>{user && <NavUser user={user} />}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
