import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, FileText } from "lucide-react";

const tasks = [
  {
    id: 1,
    title: "Mathematics Assignment",
    course: "Advanced Calculus",
    dueDate: "2024-01-15",
    priority: "high",
    type: "assignment",
    status: "pending"
  },
  {
    id: 2,
    title: "Physics Lab Report",
    course: "Quantum Physics",
    dueDate: "2024-01-18",
    priority: "medium",
    type: "lab",
    status: "in-progress"
  },
  {
    id: 3,
    title: "Course Feedback Form",
    course: "English Literature",
    dueDate: "2024-01-20",
    priority: "low",
    type: "feedback",
    status: "pending"
  },
  {
    id: 4,
    title: "Final Project Proposal",
    course: "Computer Science",
    dueDate: "2024-01-25",
    priority: "high",
    type: "project",
    status: "draft"
  },
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "destructive";
    case "medium":
      return "warning";
    case "low":
      return "secondary";
    default:
      return "secondary";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "success";
    case "in-progress":
      return "warning";
    case "pending":
      return "secondary";
    case "draft":
      return "accent";
    default:
      return "secondary";
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case "assignment":
      return FileText;
    case "lab":
      return Calendar;
    case "feedback":
      return Clock;
    case "project":
      return FileText;
    default:
      return FileText;
  }
};

const UpcomingTasks = () => {
  return (
    <Card className="academic-card">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between">
          Upcoming Tasks
          <Button size="sm" variant="outline">
            View All
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {tasks.map((task) => {
          const TypeIcon = getTypeIcon(task.type);
          const daysUntilDue = Math.ceil(
            (new Date(task.dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
          );
          
          return (
            <div
              key={task.id}
              className="flex items-center justify-between p-3 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <TypeIcon className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm truncate">{task.title}</h4>
                  <p className="text-xs text-muted-foreground truncate">{task.course}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">
                    {daysUntilDue > 0 ? `${daysUntilDue} days left` : "Overdue"}
                  </p>
                  <p className="text-xs font-medium">
                    {new Date(task.dueDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex flex-col space-y-1">
                  <Badge 
                    variant={getPriorityColor(task.priority) as any}
                    className="text-xs px-2 py-0"
                  >
                    {task.priority}
                  </Badge>
                  <Badge 
                    variant={getStatusColor(task.status) as any}
                    className="text-xs px-2 py-0"
                  >
                    {task.status}
                  </Badge>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default UpcomingTasks;