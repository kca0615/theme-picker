import { ChevronLeft, ChevronRight, Home, BarChart3, Users, Settings, Folder, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  isMobile: boolean;
}

export function Sidebar({ collapsed, onToggle, isMobile }: SidebarProps) {
  return (
    <aside
      className={cn(
        "bg-sidebar border-r border-border flex flex-col relative z-20 transition-width",
        collapsed ? "sidebar-collapsed" : "sidebar-expanded"
      )}
    >
      {/* Sidebar Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <TrendingUp className="text-primary-foreground w-4 h-4" />
            </div>
            {!collapsed && (
              <span className="font-semibold text-sidebar-foreground">Dashboard</span>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto scrollbar-thin">
        <div className="space-y-1">
          <a
            href="#"
            className="flex items-center space-x-3 px-2 py-2 rounded-lg bg-sidebar-accent text-sidebar-accent-foreground group"
          >
            <Home className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span>Overview</span>}
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 px-2 py-2 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors group"
          >
            <BarChart3 className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span>Analytics</span>}
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 px-2 py-2 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors group"
          >
            <Users className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span>Users</span>}
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 px-2 py-2 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors group"
          >
            <Settings className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span>Settings</span>}
          </a>
        </div>

        {!collapsed && (
          <div className="pt-4 mt-4 border-t border-border">
            <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Projects
            </h3>
            <div className="space-y-1">
              <a
                href="#"
                className="flex items-center space-x-3 px-2 py-2 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors group"
              >
                <Folder className="w-5 h-5 flex-shrink-0" />
                <span>Project Alpha</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 px-2 py-2 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors group"
              >
                <Folder className="w-5 h-5 flex-shrink-0" />
                <span>Project Beta</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Sidebar Toggle Button */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-8 w-6 h-6 bg-card border border-border rounded-full flex items-center justify-center text-foreground hover:bg-accent transition-colors z-10"
      >
        {collapsed ? (
          <ChevronRight className="w-3 h-3" />
        ) : (
          <ChevronLeft className="w-3 h-3" />
        )}
      </button>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Users className="text-primary-foreground w-4 h-4" />
          </div>
          {!collapsed && (
            <div>
              <p className="text-sm font-medium text-sidebar-foreground">John Doe</p>
              <p className="text-xs text-muted-foreground">Admin</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
