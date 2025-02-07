import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToggleThemeProps {
  children?: React.ReactNode;
  size?: "default" | "xs" | "sm" | "lg" | "icon";
  iconClassName?: string;
  buttonClassName?: string;
}

export const ToggleTheme = ({
  children,
  size,
  iconClassName,
  buttonClassName,
}: ToggleThemeProps) => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      size={size ?? "sm"}
      variant="ghost"
      className={(cn("w-full justify-start"), buttonClassName)}
    >
      <div className="flex gap-2 dark:hidden">
        <Moon className={(cn("size-5"), iconClassName)} />
        <span className="block lg:hidden"> Dark </span>
      </div>

      <div className="dark:flex gap-2 hidden">
        <Sun className={(cn("size-5"), iconClassName)} />
        <span className="block lg:hidden">Light</span>
      </div>
      {children}
      <span className="sr-only">Change Theme</span>
    </Button>
  );
};
