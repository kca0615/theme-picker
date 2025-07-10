import { Palette } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ThemePickerProps {
  variant?: "dropdown" | "button";
  className?: string;
}

export function ThemePicker({ variant = "dropdown", className }: ThemePickerProps) {
  const { theme, setTheme, themes } = useTheme();

  const currentTheme = themes.find(t => t.value === theme);

  if (variant === "button") {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={`text-sidebar-foreground hover:text-sidebar-primary ${className}`}
          >

            <Palette className="w-5 h-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Current theme: {currentTheme?.label}</p>
        </TooltipContent>
      </Tooltip>
    );
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      
      {/* <Palette className="w-4 h-4 pr-1 text-muted-foreground" /> */}
      <span className="pl-5">THEME:</span>
      <Select value={theme} onValueChange={setTheme}>
        <SelectTrigger className="w-[180px] h-8 text-sm">
          <SelectValue placeholder="Select theme" />
        </SelectTrigger>
        <SelectContent>
          {themes.map((themeOption) => (
            <SelectItem key={themeOption.value} value={themeOption.value}>
              <div className="flex flex-col">
                <span className="font-medium">{themeOption.label}</span>
                {/* <span className="text-xs text-muted-foreground">
                  {themeOption.description}
                </span> */}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
