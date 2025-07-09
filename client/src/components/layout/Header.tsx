import { Search, Bell, Menu, Sliders } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  onMobileSidebarToggle: () => void;
  onRightPanelToggle: () => void;
  isMobile: boolean;
}

export function Header({ onMobileSidebarToggle, onRightPanelToggle, isMobile }: HeaderProps) {
  return (
    <header className="bg-card border-b border-border p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onMobileSidebarToggle}
            className="md:hidden"
          >
            <Menu className="w-5 h-5" />
          </Button>
        )}
        <h1 className="text-xl font-semibold text-foreground">Dashboard Overview</h1>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search..."
            className="w-64 pl-3 pr-10"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        </div>

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-error rounded-full"></span>
        </Button>

        <Button onClick={onRightPanelToggle} className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Sliders className="w-4 h-4 mr-2" />
          Controls
        </Button>
      </div>
    </header>
  );
}
