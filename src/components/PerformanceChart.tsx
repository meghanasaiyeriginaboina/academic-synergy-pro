import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from "recharts";

const performanceData = [
  { month: "Sep", gpa: 3.4, attendance: 85 },
  { month: "Oct", gpa: 3.6, attendance: 88 },
  { month: "Nov", gpa: 3.8, attendance: 92 },
  { month: "Dec", gpa: 3.7, attendance: 90 },
  { month: "Jan", gpa: 3.9, attendance: 94 },
  { month: "Feb", gpa: 4.0, attendance: 96 },
];

const subjectData = [
  { subject: "Mathematics", grade: 92, color: "hsl(var(--excellent))" },
  { subject: "Physics", grade: 88, color: "hsl(var(--good))" },
  { subject: "Chemistry", grade: 85, color: "hsl(var(--good))" },
  { subject: "English", grade: 78, color: "hsl(var(--average))" },
  { subject: "History", grade: 95, color: "hsl(var(--excellent))" },
];

export const PerformanceChart = () => {
  return (
    <Card className="academic-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Academic Performance Trend
        </CardTitle>
        <CardDescription>
          Your GPA and attendance over the past 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceData}>
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
              dataKey="gpa" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
              name="GPA"
            />
            <Line 
              type="monotone" 
              dataKey="attendance" 
              stroke="hsl(var(--accent-bright))" 
              strokeWidth={3}
              dot={{ fill: "hsl(var(--accent-bright))", strokeWidth: 2, r: 4 }}
              name="Attendance %"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export const SubjectGrades = () => {
  return (
    <Card className="academic-card">
      <CardHeader>
        <CardTitle>Subject Performance</CardTitle>
        <CardDescription>
          Current semester grades by subject
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={subjectData} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis type="number" domain={[0, 100]} className="text-xs" />
            <YAxis dataKey="subject" type="category" className="text-xs" width={80} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px"
              }}
            />
            <Bar 
              dataKey="grade" 
              fill="hsl(var(--primary))"
              radius={[0, 4, 4, 0]}
              name="Grade"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};