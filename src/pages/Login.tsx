import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Users, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [studentCredentials, setStudentCredentials] = useState({ id: "", password: "" });
  const [facultyCredentials, setFacultyCredentials] = useState({ id: "", password: "" });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleStudentLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - replace with real auth later
    if (studentCredentials.id && studentCredentials.password) {
      localStorage.setItem("userRole", "student");
      localStorage.setItem("userInfo", JSON.stringify({
        id: studentCredentials.id,
        name: "John Smith",
        role: "student"
      }));
      toast({
        title: "Login Successful!",
        description: "Welcome to SFMCS Dashboard",
      });
      navigate("/dashboard");
    } else {
      toast({
        title: "Login Failed",
        description: "Please enter your student ID and password",
        variant: "destructive"
      });
    }
  };

  const handleFacultyLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - replace with real auth later
    if (facultyCredentials.id && facultyCredentials.password) {
      localStorage.setItem("userRole", "faculty");
      localStorage.setItem("userInfo", JSON.stringify({
        id: facultyCredentials.id,
        name: "Dr. Sarah Johnson",
        role: "faculty",
        department: "Computer Science"
      }));
      toast({
        title: "Faculty Login Successful!",
        description: "Welcome to Faculty Dashboard",
      });
      navigate("/faculty-dashboard");
    } else {
      toast({
        title: "Login Failed",
        description: "Please enter your faculty ID and password",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mb-4">
            <GraduationCap className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold gradient-text mb-2">SFMCS Portal</h1>
          <p className="text-muted-foreground">Student-Faculty Management & Communication System</p>
        </div>

        {/* Login Tabs */}
        <Card className="academic-card">
          <CardHeader className="pb-4">
            <CardTitle className="text-center">Welcome Back</CardTitle>
            <CardDescription className="text-center">
              Sign in to access your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="student" className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  Student
                </TabsTrigger>
                <TabsTrigger value="faculty" className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Faculty
                </TabsTrigger>
              </TabsList>

              {/* Student Login */}
              <TabsContent value="student">
                <form onSubmit={handleStudentLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="student-id">Student ID</Label>
                    <Input
                      id="student-id"
                      type="text"
                      placeholder="Enter your student ID"
                      value={studentCredentials.id}
                      onChange={(e) => setStudentCredentials({ ...studentCredentials, id: e.target.value })}
                      className="bg-muted/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="student-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={studentCredentials.password}
                        onChange={(e) => setStudentCredentials({ ...studentCredentials, password: e.target.value })}
                        className="bg-muted/50 pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <Button type="submit" className="w-full academic-button-primary">
                    Sign In as Student
                  </Button>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground mt-2">
                      Demo: Use any ID and password to login
                    </p>
                  </div>
                </form>
              </TabsContent>

              {/* Faculty Login */}
              <TabsContent value="faculty">
                <form onSubmit={handleFacultyLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="faculty-id">Faculty ID</Label>
                    <Input
                      id="faculty-id"
                      type="text"
                      placeholder="Enter your faculty ID"
                      value={facultyCredentials.id}
                      onChange={(e) => setFacultyCredentials({ ...facultyCredentials, id: e.target.value })}
                      className="bg-muted/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="faculty-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="faculty-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={facultyCredentials.password}
                        onChange={(e) => setFacultyCredentials({ ...facultyCredentials, password: e.target.value })}
                        className="bg-muted/50 pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <Button type="submit" className="w-full academic-button-secondary">
                    Sign In as Faculty
                  </Button>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground mt-2">
                      Demo: Use any ID and password to login
                    </p>
                  </div>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <Button variant="link" className="text-sm text-muted-foreground">
                Forgot your password?
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-xs text-muted-foreground">
          © 2024 SFMCS. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Login;