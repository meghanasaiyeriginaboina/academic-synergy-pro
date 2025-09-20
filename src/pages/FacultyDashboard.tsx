import { Users, TrendingUp, ClipboardList, Calendar, Award, BookOpen, AlertCircle, CheckCircle } from "lucide-react";
import FacultyHeader from "@/components/FacultyHeader";
import FacultyNavigation from "@/components/FacultyNavigation";
import MetricCard from "@/components/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from "recharts";

const classPerformanceData = [
  { month: "Sep", avgGPA: 3.2, attendance: 82 },
  { month: "Oct", avgGPA: 3.4, attendance: 85 },
  { month: "Nov", avgGPA: 3.6, attendance: 88 },
  { month: "Dec", avgGPA: 3.5, attendance: 86 },
  { month: "Jan", avgGPA: 3.7, attendance: 90 },
  { month: "Feb", avgGPA: 3.8, attendance: 92 },
];

const courseData = [
  { course: "CS101", enrolled: 45, avgGrade: 88, completion: 92 },
  { course: "CS201", enrolled: 38, avgGrade: 85, completion: 89 },
  { course: "CS301", enrolled: 32, avgGrade: 90, completion: 95 },
  { course: "CS401", enrolled: 28, avgGrade: 87, completion: 91 },
];

const recentFeedback = [
  {
    id: 1,
    student: "John Smith",
    course: "CS101",
    rating: 4.5,
    comment: "Great explanation of algorithms!",
    date: "2024-01-15",
    type: "positive"
  },
  {
    id: 2,
    student: "Emily Davis", 
    course: "CS201",
    rating: 3.0,
    comment: "Need more practice sessions",
    date: "2024-01-14",
    type: "neutral"
  },
  {
    id: 3,
    student: "Michael Brown",
    course: "CS301",
    rating: 5.0,
    comment: "Excellent course structure",
    date: "2024-01-13",
    type: "positive"
  },
];

const pendingTasks = [
  { id: 1, title: "Grade Midterm Exams", course: "CS101", due: "2024-01-18", priority: "high" },
  { id: 2, title: "Update Course Materials", course: "CS201", due: "2024-01-20", priority: "medium" },
  { id: 3, title: "Review Lab Reports", course: "CS301", due: "2024-01-22", priority: "medium" },
  { id: 4, title: "Prepare Final Exam", course: "CS401", due: "2024-01-25", priority: "high" },
];

const FacultyDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <FacultyHeader />
      
      <div className="flex">
        <FacultyNavigation />
        
        <main className="flex-1 p-6 space-y-6">
          {/* Welcome Section */}
          <div className="academic-card p-6 bg-gradient-to-br from-accent/10 to-accent-bright/20 border-accent/20">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-accent-foreground mb-2">
                  Welcome back, Dr. Sarah Johnson! 
                </h1>
                <p className="text-muted-foreground">
                  Faculty Dashboard - Spring 2024 Semester
                </p>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <Button className="academic-button-secondary">
                  <Users className="w-4 h-4 mr-2" />
                  Student Search
                </Button>
                <Button variant="outline">
                  Create Assignment
                </Button>
              </div>
            </div>
          </div>

          {/* Faculty Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Total Students"
              value="143"
              description="Across 4 courses"
              icon={Users}
              trend="up"
              trendValue="+12"
              variant="success"
            />
            <MetricCard
              title="Average Class GPA"
              value="3.65"
              description="This semester"
              icon={Award}
              trend="up"
              trendValue="+0.25"
              variant="success"
            />
            <MetricCard
              title="Pending Tasks"
              value="8"
              description="Require attention"
              icon={ClipboardList}
              trend="down"
              trendValue="-3"
              variant="warning"
            />
            <MetricCard
              title="Feedback Score"
              value="4.3/5"
              description="Student ratings"
              icon={TrendingUp}
              trend="up"
              trendValue="+0.2"
              variant="success"
            />
          </div>

          {/* Charts and Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="academic-card">
              <CardHeader>
                <CardTitle>Class Performance Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={classPerformanceData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="month" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="avgGPA" 
                      stroke="hsl(var(--accent-bright))" 
                      strokeWidth={3}
                      name="Average GPA"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="attendance" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      name="Attendance %"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="academic-card">
              <CardHeader>
                <CardTitle>Course Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={courseData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="course" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }}
                    />
                    <Bar 
                      dataKey="avgGrade" 
                      fill="hsl(var(--accent-bright))"
                      radius={[4, 4, 0, 0]}
                      name="Average Grade"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Lower Section - Feedback and Tasks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Feedback */}
            <Card className="academic-card">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between">
                  Recent Student Feedback
                  <Button size="sm" variant="outline">
                    View All
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentFeedback.map((feedback) => (
                  <div
                    key={feedback.id}
                    className="flex items-start justify-between p-3 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-sm">{feedback.student}</h4>
                        <Badge variant="outline" className="text-xs">
                          {feedback.course}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        "{feedback.comment}"
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {"★".repeat(Math.floor(feedback.rating))}
                          <span className="text-xs ml-1">{feedback.rating}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {new Date(feedback.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    {feedback.type === "positive" ? (
                      <CheckCircle className="h-4 w-4 text-success mt-1" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-warning mt-1" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Pending Tasks */}
            <Card className="academic-card">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between">
                  Pending Faculty Tasks
                  <Button size="sm" variant="outline">
                    Manage Tasks
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {pendingTasks.map((task) => {
                  const daysUntilDue = Math.ceil(
                    (new Date(task.due).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
                  );
                  
                  return (
                    <div
                      key={task.id}
                      className="flex items-center justify-between p-3 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                          <ClipboardList className="h-4 w-4 text-accent-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm">{task.title}</h4>
                          <p className="text-xs text-muted-foreground">{task.course}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">
                            {daysUntilDue > 0 ? `${daysUntilDue} days left` : "Overdue"}
                          </p>
                          <p className="text-xs font-medium">
                            {new Date(task.due).toLocaleDateString()}
                          </p>
                        </div>
                        <Badge 
                          variant={task.priority === "high" ? "destructive" : "secondary"}
                          className="text-xs"
                        >
                          {task.priority}
                        </Badge>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FacultyDashboard;