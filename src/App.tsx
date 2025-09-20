import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import FacultyDashboard from "./pages/FacultyDashboard";
import NotFound from "./pages/NotFound";

// Protected Route Component
const ProtectedRoute = ({ children, allowedRole }: { children: React.ReactNode; allowedRole: string }) => {
  const userRole = localStorage.getItem("userRole");
  const userInfo = localStorage.getItem("userInfo");
  
  if (!userRole || !userInfo) {
    return <Navigate to="/" replace />;
  }
  
  if (userRole !== allowedRole) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute allowedRole="student">
                <Index />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/faculty-dashboard" 
            element={
              <ProtectedRoute allowedRole="faculty">
                <FacultyDashboard />
              </ProtectedRoute>
            } 
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
