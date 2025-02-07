"use client";

import { LayoutDashboard, type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const currentRoute = usePathname();

  if (!items.length) return null;

  const isActive = (url: string) => {
    const cleanedUrl = url.toLowerCase();
    const cleanedRoute = currentRoute.toLowerCase().replace(/^\/+|\/+$/g, "");
    const normalizedUrl = cleanedUrl.replace(/^\/+|\/+$/g, "");
    return cleanedRoute === normalizedUrl;
  };

  items = items.map((item) => ({
    ...item,
    isActive: isActive(item.title),
  }));

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              tooltip={item.title}
              className={
                item.isActive
                  ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                  : ""
              }
            >
              <LayoutDashboard className="ml-1" />
              <span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
