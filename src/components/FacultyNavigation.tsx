import { 
  LayoutDashboard, 
  Users, 
  ClipboardList, 
  MessageSquare, 
  BarChart3, 
  Settings,
  BookOpen,
  Calendar,
  FileText,
  UserSearch,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";

const FacultyNavigation = () => {
  const navigationItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: UserSearch, label: "Student Search" },
    { icon: Users, label: "My Classes" },
    { icon: ClipboardList, label: "Task Management" },
    { icon: Calendar, label: "Schedule" },
    { icon: TrendingUp, label: "Analytics" },
    { icon: MessageSquare, label: "Feedback Review" },
    { icon: FileText, label: "Reports" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <nav className="hidden md:flex w-64 bg-gradient-to-b from-accent/5 to-accent-bright/5 border-r min-h-screen flex-col">
      <div className="p-4 space-y-2">
        {navigationItems.map((item, index) => (
          <Button
            key={index}
            variant={item.active ? "default" : "ghost"}
            className={`w-full justify-start ${
              item.active 
                ? "academic-button-secondary" 
                : "hover:bg-accent/20 hover:text-accent-foreground"
            }`}
          >
            <item.icon className="h-4 w-4 mr-3" />
            {item.label}
          </Button>
        ))}
      </div>
      
      <div className="mt-auto p-4">
        <div className="academic-card p-4 bg-gradient-to-br from-primary/10 to-primary-light/20 border-primary/20">
          <h4 className="font-semibold text-primary mb-2">Faculty Resources</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Access teaching materials and academic resources.
          </p>
          <Button size="sm" variant="outline" className="w-full">
            Resource Center
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default FacultyNavigation;