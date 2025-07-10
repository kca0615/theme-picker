import { useTheme } from "@/contexts/ThemeContext";

export function ThemeDebug() {
  const { theme, themes } = useTheme();
  
  return (
    <div className="fixed bottom-4 right-4 bg-card border border-border rounded-lg p-4 text-sm shadow-lg z-50">
      <div className="font-semibold mb-2">Theme Debug</div>
      <div>Current: <span className="font-mono">{theme}</span></div>
      <div>Available: {themes.length} themes</div>
      <div className="mt-2 text-xs text-muted-foreground">
        HTML class: {document.documentElement.className}
      </div>
    </div>
  );
}
