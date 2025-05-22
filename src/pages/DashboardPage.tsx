
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useAuth } from '@/hooks/useAuth';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold text-primary mb-8 text-center">Dashboard</h1>
        {user ? (
          <div>
            <p className="text-center text-lg">Welcome, <span className="font-semibold">{user.name}</span>!</p>
            <p className="text-center text-muted-foreground">Your role: <span className="capitalize">{user.role}</span></p>
            <p className="text-center mt-4">This is a placeholder for the {user.role} dashboard.</p>
            {/* Specific content based on role will be added here */}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">Please sign in to view your dashboard.</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
