
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Assuming Card components are available

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  const renderCustomerDashboard = () => (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p>View your recent order details and status.</p>
          {/* Mock content */}
          <p className="mt-2 text-sm text-muted-foreground">Order #12345: Spicy Lamb Biryani - Processing</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Order History</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Access all your past orders.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Favourite Items</CardTitle>
        </CardHeader>
        <CardContent>
          <p>See your saved favourite dishes.</p>
        </CardContent>
      </Card>
    </div>
  );

  const renderStaffDashboard = () => (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Manage Customer Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <p>View and update status of active orders.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Manage Reservations</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Approve or reject new reservation requests.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Table Availability</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Update and view current table status.</p>
        </CardContent>
      </Card>
    </div>
  );

  const renderAdminDashboard = () => (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>View All Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Access sales, customer, and operational reports.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Manage Menu Items</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Add, edit, or delete menu and combo items.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Manage Staff</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Add or remove staff accounts and manage permissions.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>System Controls</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Access full system settings and controls.</p>
        </CardContent>
      </Card>
    </div>
  );

  const renderDashboardContent = () => {
    if (!user) return null;
    switch (user.role) {
      case 'customer':
        return renderCustomerDashboard();
      case 'staff':
        return renderStaffDashboard();
      case 'admin':
        return renderAdminDashboard();
      default:
        return <p className="text-center text-muted-foreground">No specific dashboard for your role.</p>;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold text-primary mb-2 text-center">Dashboard</h1>
        {user ? (
          <>
            <p className="text-center text-lg mb-1">Welcome, <span className="font-semibold">{user.name}</span>!</p>
            <p className="text-center text-muted-foreground mb-8">Your role: <span className="capitalize font-medium">{user.role}</span></p>
            {renderDashboardContent()}
          </>
        ) : (
          <p className="text-center text-muted-foreground">Please sign in to view your dashboard.</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
