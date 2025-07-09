import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DashboardCardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function DashboardCard({ title, description, children, action }: DashboardCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          {action && (
            <Button onClick={action.onClick} variant="outline">
              {action.label}
            </Button>
          )}
        </div>
      </CardHeader>
      {children && <CardContent>{children}</CardContent>}
    </Card>
  );
}
