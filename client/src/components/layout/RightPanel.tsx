import { ChevronRight, Download, RefreshCw, Settings, FileText, FileSpreadsheet, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RightPanelProps {
  open: boolean;
  onClose: () => void;
}

export function RightPanel({ open, onClose }: RightPanelProps) {
  return (
    <aside className="w-80 bg-card border-l border-border flex-shrink-0 relative z-10">
      {/* Right Panel Toggle Button */}
      <button
        onClick={onClose}
        className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-card border border-border rounded-full flex items-center justify-center text-foreground hover:bg-accent transition-colors z-20"
      >
        <ChevronRight className="w-3 h-3" />
      </button>

      {/* Right Panel Header */}
      <div className="p-4 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">Control Panel</h3>
      </div>

      {/* Right Panel Content */}
      <div className="p-4 space-y-6 overflow-y-auto scrollbar-thin h-[calc(100vh-80px)]">
        {/* Theme Settings */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">Theme Settings</h4>
          <div className="space-y-3">
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="theme"
                value="dark"
                defaultChecked
                className="text-primary focus:ring-ring"
              />
              <span className="text-sm text-foreground">Dark Mode</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="theme"
                value="light"
                className="text-primary focus:ring-ring"
              />
              <span className="text-sm text-foreground">Light Mode</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="theme"
                value="auto"
                className="text-primary focus:ring-ring"
              />
              <span className="text-sm text-foreground">Auto</span>
            </label>
          </div>
        </div>

        {/* Notification Settings */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">Notifications</h4>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-sm text-foreground">Email Notifications</span>
              <input
                type="checkbox"
                defaultChecked
                className="text-primary focus:ring-ring"
              />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm text-foreground">Push Notifications</span>
              <input type="checkbox" className="text-primary focus:ring-ring" />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm text-foreground">SMS Alerts</span>
              <input
                type="checkbox"
                defaultChecked
                className="text-primary focus:ring-ring"
              />
            </label>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">Quick Actions</h4>
          <div className="space-y-2">
            <Button className="w-full justify-start" variant="default">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
            <Button className="w-full justify-start" variant="secondary">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh Dashboard
            </Button>
            <Button className="w-full justify-start" variant="secondary">
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
      </div>
    </aside>
  );
}
