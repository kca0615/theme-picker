import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { RightPanel } from "@/components/layout/RightPanel";
import { StatCard } from "@/components/dashboard/StatCard";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { ChartPlaceholder } from "@/components/dashboard/ChartPlaceholder";
import { ProjectTabs } from "@/components/dashboard/ProjectTabs";
import { ThemeDebug } from "@/components/debug/ThemeDebug";
import { useSidebar } from "@/hooks/useSidebar";
import { Users, DollarSign, FolderOpen, AlertTriangle } from "lucide-react";

export default function Dashboard() {
  const { leftSidebarCollapsed, rightPanelCollapsed, isMobile, toggleLeftSidebar, toggleRightPanel } = useSidebar();

  return (
    <div className="flex h-screen overflow-hidden driftline">
      {/* Left Sidebar */}
      <Sidebar
        collapsed={leftSidebarCollapsed}
        onToggle={toggleLeftSidebar}
        isMobile={isMobile}
      />

      {/* Mobile Overlay */}
      {isMobile && !leftSidebarCollapsed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={toggleLeftSidebar}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden bg-sidebar">
        {/* Header */}
        <Header
          onMobileSidebarToggle={toggleLeftSidebar}
          isMobile={isMobile}
        />

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto scrollbar-thin bg-sidebar">
          <div className="p-6 space-y-6">
            {/* Stats Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Users"
                value="12,345"
                icon={Users}
                trend={{ value: "+12%", isPositive: true, description: "from last month" }}
                iconColor="bg-success/10 text-success"
                badgeVariant="success"
              />
              <StatCard
                title="Revenue"
                value="$45,678"
                icon={DollarSign}
                trend={{ value: "+8%", isPositive: true, description: "from last month" }}
                iconColor="bg-info/10 text-info"
                badgeVariant="info"
              />
              <StatCard
                title="Active Projects"
                value="23"
                icon={FolderOpen}
                trend={{ value: "-3%", isPositive: false, description: "from last month" }}
                iconColor="bg-warning/10 text-warning"
                badgeVariant="warning"
              />
              <StatCard
                title="Issues"
                value="7"
                icon={AlertTriangle}
                trend={{ value: "+2", isPositive: false, description: "from last week" }}
                iconColor="bg-error/10 text-error"
                badgeVariant="error"
              />
            </div>

            {/* Charts and Content Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartPlaceholder />
              <ActivityFeed />
            </div>

            {/* Tabs and Interactive Elements */}
            <ProjectTabs />
          </div>
        </div>
      </main>

      {/* Right Panel */}
      <RightPanel collapsed={rightPanelCollapsed} onToggle={toggleRightPanel} />

      {/* Theme Debug Component */}
      {/* <ThemeDebug /> */}
    </div>
  );
}
