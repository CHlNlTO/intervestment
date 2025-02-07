import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Intervestment - Dashboard",
  description: "Intervestment is a platform to track your manual investments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={cn("min-h-screen bg-background")}>
      <SidebarProvider>
        <AppSidebar />
        {children}
      </SidebarProvider>
    </body>
  );
}
