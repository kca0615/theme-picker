import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

export function ChartPlaceholder() {
  return (
    <Card className="border-l-4 border-l-success">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Analytics Overview</CardTitle>
          <div className="flex space-x-2">
            <Button variant="default" size="sm">7d</Button>
            <Button variant="secondary" size="sm">30d</Button>
            <Button variant="secondary" size="sm">90d</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="chart-placeholder flex items-center justify-center">
          <div className="text-center">
            <TrendingUp className="text-white w-12 h-12 mx-auto mb-2" />
            <p className="text-white text-sm">Chart Placeholder</p>
            <p className="text-white/60 text-xs mt-1">Revenue trends visualization</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
