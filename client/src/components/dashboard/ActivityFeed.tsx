import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomBadge } from "@/components/ui/custom-badge";
import { Check, User, AlertTriangle, X } from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Project Alpha completed",
    time: "2 hours ago",
    icon: Check,
    iconColor: "bg-success/10 text-success",
    badgeVariant: "success" as const,
    badgeText: "Complete",
  },
  {
    id: 2,
    title: "New user registered",
    time: "4 hours ago",
    icon: User,
    iconColor: "bg-info/10 text-info",
    badgeVariant: "info" as const,
    badgeText: "New",
  },
  {
    id: 3,
    title: "Server maintenance scheduled",
    time: "6 hours ago",
    icon: AlertTriangle,
    iconColor: "bg-warning/10 text-warning",
    badgeVariant: "warning" as const,
    badgeText: "Scheduled",
  },
  {
    id: 4,
    title: "Deployment failed",
    time: "8 hours ago",
    icon: X,
    iconColor: "bg-error/10 text-error",
    badgeVariant: "error" as const,
    badgeText: "Failed",
  },
];

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activity.iconColor}`}>
                <activity.icon className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{activity.title}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
              <CustomBadge variant={activity.badgeVariant}>
                {activity.badgeText}
              </CustomBadge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
