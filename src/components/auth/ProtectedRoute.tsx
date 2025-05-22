
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { toast } from "@/hooks/use-toast"; // Assuming you have a toast system

const ProtectedRoute: React.FC = () => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  React.useEffect(() => {
    if (!isLoading && !user) {
      toast({
        title: "Authentication Required",
        description: "You need to sign in to access this page.",
        variant: "destructive",
      });
    }
  }, [isLoading, user, location.pathname]);

  if (isLoading) {
    // You can render a loading spinner here
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading user session...</p>
      </div>
    );
  }

  if (!user) {
    // Redirect them to the home page, but save the current location they were
    // trying to go to so we can send them along after they login.
    // For now, we just redirect to home. The login modal is on Navbar available globally.
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />; // User is authenticated, render the child component
};

export default ProtectedRoute;
