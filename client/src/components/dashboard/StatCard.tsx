import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CustomBadge } from "@/components/ui/custom-badge";
import { ArrowUp, ArrowDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend: {
    value: string;
    isPositive: boolean;
    description: string;
  };
  iconColor: string;
  badgeVariant: "success" | "info" | "warning" | "error";
}

export function StatCard({ title, value, icon: Icon, trend, iconColor, badgeVariant }: StatCardProps) {
  const getBorderColor = (variant: string) => {
    switch (variant) {
      case 'success': return 'border-l-4 border-l-success';
      case 'info': return 'border-l-4 border-l-info';
      case 'warning': return 'border-l-4 border-l-warning';
      case 'error': return 'border-l-4 border-l-error';
      default: return 'border-l-4 border-l-muted';
    }
  };

  return (
    <Card className={`hover:shadow-lg transition-shadow ${getBorderColor(badgeVariant)}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground">{value}</p>
          </div>
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${iconColor}`}>
            <Icon className="w-6 h-6" />
          </div>
        </div>
        <div className="flex items-center mt-4">
          <CustomBadge variant={badgeVariant} className="flex items-center">
            {trend.isPositive ? (
              <ArrowUp className="w-3 h-3 mr-1" />
            ) : (
              <ArrowDown className="w-3 h-3 mr-1" />
            )}
            {trend.value}
          </CustomBadge>
          <span className="text-sm text-muted-foreground ml-2">{trend.description}</span>
        </div>
      </CardContent>
    </Card>
  );
}
