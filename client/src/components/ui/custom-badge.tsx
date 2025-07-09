import { cn } from "@/lib/utils";

export interface CustomBadgeProps {
  variant: "success" | "info" | "warning" | "error";
  children: React.ReactNode;
  className?: string;
}

const variantStyles = {
  success: "bg-success-badge text-success-badge-foreground",
  info: "bg-info-badge text-info-badge-foreground",
  warning: "bg-warning-badge text-warning-badge-foreground",
  error: "bg-error-badge text-error-badge-foreground",
};

export function CustomBadge({ variant, children, className }: CustomBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
