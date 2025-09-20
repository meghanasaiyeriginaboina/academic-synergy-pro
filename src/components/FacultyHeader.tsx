import { Bell, Search, User, Menu, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const FacultyHeader = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("userInfo");
    toast({
      title: "Logged out successfully",
      description: "Thank you for using SFMCS",
    });
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-accent/10 to-accent-bright/10 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-accent-bright to-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">SF</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-accent-foreground">SFMCS Faculty</h1>
              <p className="text-xs text-muted-foreground">Faculty Management Portal</p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search students, courses, reports..."
              className="pl-10 bg-muted/50 border-border focus:bg-background"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-warning rounded-full flex items-center justify-center">
              <span className="text-xs text-warning-foreground font-bold">5</span>
            </span>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-accent-bright text-primary-foreground text-sm">
                    SJ
                  </AvatarFallback>
                </Avatar>
                <div className="hidden sm:block text-sm text-left">
                  <p className="font-medium">Dr. Sarah Johnson</p>
                  <p className="text-xs text-muted-foreground">Computer Science</p>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default FacultyHeader;