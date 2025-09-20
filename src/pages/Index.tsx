import { GraduationCap, TrendingUp, Users, Calendar, Award, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import MetricCard from "@/components/MetricCard";
import UpcomingTasks from "@/components/UpcomingTasks";
import { PerformanceChart, SubjectGrades } from "@/components/PerformanceChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <Header />
      
      <div className="flex">
        <Navigation />
        
        <main className="flex-1 p-6 space-y-6">
          {/* Welcome Section */}
          <div className="academic-card p-6 bg-gradient-to-br from-primary/5 to-primary-light/10 border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold gradient-text mb-2">
                  Welcome back, John Smith! 
                </h1>
                <p className="text-muted-foreground">
                  Here's your academic overview for Spring 2024
                </p>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <Button className="academic-button-primary">
                  <Calendar className="w-4 h-4 mr-2" />
                  View Schedule
                </Button>
                <Button variant="outline">
                  Quick Actions
                </Button>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Current GPA"
              value="3.85"
              description="Above average"
              icon={Award}
              trend="up"
              trendValue="+0.15"
              variant="success"
            />
            <MetricCard
              title="Attendance"
              value="94%"
              description="This semester"
              icon={Users}
              trend="up"
              trendValue="+2%"
              variant="success"
            />
            <MetricCard
              title="Pending Tasks"
              value="7"
              description="Due this week"
              icon={BookOpen}
              trend="down"
              trendValue="-3"
              variant="warning"
            />
            <MetricCard
              title="Courses Enrolled"
              value="6"
              description="Spring 2024"
              icon={GraduationCap}
              trend="neutral"
              variant="default"
            />
          </div>

          {/* Charts and Tasks Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <PerformanceChart />
              <SubjectGrades />
            </div>
            
            <div className="space-y-6">
              <UpcomingTasks />
              
              {/* Quick Stats Card */}
              <Card className="academic-card bg-gradient-to-br from-accent/10 to-accent-bright/20">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Completed Assignments</span>
                    <span className="font-semibold">24/28</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Course Progress</span>
                    <span className="font-semibold">68%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Feedback Submitted</span>
                    <span className="font-semibold">5/6</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Study Hours</span>
                    <span className="font-semibold">42h this week</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
