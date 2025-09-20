import { 
  LayoutDashboard, 
  User, 
  ClipboardList, 
  MessageSquare, 
  BarChart3, 
  Settings,
  BookOpen,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navigationItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: User, label: "Profile" },
    { icon: BookOpen, label: "Courses" },
    { icon: ClipboardList, label: "Tasks" },
    { icon: Calendar, label: "Schedule" },
    { icon: BarChart3, label: "Performance" },
    { icon: MessageSquare, label: "Feedback" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <nav className="hidden md:flex w-64 bg-card border-r min-h-screen flex-col">
      <div className="p-4 space-y-2">
        {navigationItems.map((item, index) => (
          <Button
            key={index}
            variant={item.active ? "default" : "ghost"}
            className={`w-full justify-start ${
              item.active 
                ? "academic-button-primary" 
                : "hover:bg-muted"
            }`}
          >
            <item.icon className="h-4 w-4 mr-3" />
            {item.label}
          </Button>
        ))}
      </div>
      
      <div className="mt-auto p-4">
        <div className="academic-card p-4 bg-gradient-to-br from-accent to-accent-bright/20">
          <h4 className="font-semibold text-accent-foreground mb-2">Quick Tip</h4>
          <p className="text-sm text-accent-foreground/80">
            Check your performance analytics to track your academic progress.
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;