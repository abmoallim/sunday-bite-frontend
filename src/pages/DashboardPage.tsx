import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import AddMenuItemForm from '@/components/admin/AddMenuItemForm';
import { Plus } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const [isAddMenuItemDialogOpen, setIsAddMenuItemDialogOpen] = useState(false);

  const renderCustomerDashboard = () => (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p>View your recent order details and status.</p>
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
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>Order #12350: Chicken Tikka - Pending Confirmation</li>
            <li>Order #12351: Mango Lassi x2 - Preparing</li>
          </ul>
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
      <Card>
        <CardHeader>
          <CardTitle>Daily Sales Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Total Sales Today: $350.75</p>
          <p>Total Orders: 15</p>
        </CardContent>
      </Card>
    </div>
  );

  const renderAdminDashboard = () => (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Manage Menu Items</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-4">
          <p>Add, edit, or delete menu and combo items.</p>
          <Dialog open={isAddMenuItemDialogOpen} onOpenChange={setIsAddMenuItemDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full sm:w-auto">
                <Plus className="mr-2 h-4 w-4" /> Add New Menu Item
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] md:sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Add New Menu Item</DialogTitle>
              </DialogHeader>
              <AddMenuItemForm onFormSubmit={() => setIsAddMenuItemDialogOpen(false)} />
            </DialogContent>
          </Dialog>
          <p className="text-sm text-muted-foreground mt-4">Menu item list for editing/deleting will be shown here.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>View All Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Access sales, customer, and operational reports.</p>
          <div className="mt-4">
            <h4 className="font-semibold text-md">Sales Overview (Mock)</h4>
            <p className="text-sm text-muted-foreground">Total Revenue (Month): $5,430.00</p>
            <p className="text-sm text-muted-foreground">Total Orders (Month): 215</p>
            <p className="text-sm text-muted-foreground">Average Order Value: $25.25</p>
          </div>
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
