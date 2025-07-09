import { ChevronRight, ChevronLeft, Download, RefreshCw, Settings, FileText, FileSpreadsheet, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RightPanelProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function RightPanel({ collapsed, onToggle }: RightPanelProps) {
  return (
    <aside className={`${collapsed ? 'w-16' : 'w-80'} bg-card border-l border-border flex-shrink-0 relative z-10 transition-all duration-300`}>
      {/* Right Panel Toggle Button */}
      <button
        onClick={onToggle}
        className="absolute -left-3 top-8 w-6 h-6 bg-card border border-border rounded-full flex items-center justify-center text-foreground hover:bg-accent transition-colors z-20"
      >
        {collapsed ? (
          <ChevronLeft className="w-3 h-3" />
        ) : (
          <ChevronRight className="w-3 h-3" />
        )}
      </button>

      {/* Right Panel Header */}
      <div className="p-4 border-b border-border">
        {!collapsed && <h3 className="text-lg font-semibold text-foreground">Quick Actions</h3>}
      </div>

      {/* Right Panel Content */}
      <div className={`p-4 space-y-6 overflow-y-auto scrollbar-thin h-[calc(100vh-80px)] ${collapsed ? 'items-center' : ''}`}>
        {collapsed ? (
          <div className="flex flex-col items-center space-y-4">
            <div className="p-2 rounded-lg hover:bg-accent cursor-pointer">
              <Download className="w-5 h-5 text-foreground" />
            </div>
            <div className="p-2 rounded-lg hover:bg-accent cursor-pointer">
              <RefreshCw className="w-5 h-5 text-foreground" />
            </div>
            <div className="p-2 rounded-lg hover:bg-accent cursor-pointer">
              <Settings className="w-5 h-5 text-foreground" />
            </div>
            <div className="p-2 rounded-lg hover:bg-accent cursor-pointer">
              <FileText className="w-5 h-5 text-foreground" />
            </div>
          </div>
        ) : (
          <>
            {/* Quick Actions */}
            <div>
              <div className="space-y-2">
                <Button className="w-full justify-start" variant="default">
                  <Download className="w-4 h-4 mr-2" />
                  Export Data
                </Button>
                <Button className="w-full justify-start bg-warning text-warning-foreground hover:bg-warning/90">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh Dashboard
                </Button>
                <Button className="w-full justify-start bg-error text-error-foreground hover:bg-error/90">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>

            {/* Recent Files */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-3">Recent Files</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent cursor-pointer">
                  <FileText className="w-5 h-5 text-info" />
                  <div className="flex-1">
                    <p className="text-sm text-foreground">report.pdf</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent cursor-pointer">
                  <FileSpreadsheet className="w-5 h-5 text-success" />
                  <div className="flex-1">
                    <p className="text-sm text-foreground">data.xlsx</p>
                    <p className="text-xs text-muted-foreground">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent cursor-pointer">
                  <Image className="w-5 h-5 text-warning" />
                  <div className="flex-1">
                    <p className="text-sm text-foreground">design.png</p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}