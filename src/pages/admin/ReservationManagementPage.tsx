
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ReservationManagementPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Reservation Management</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Reservations</CardTitle>
            <CardDescription>Manage customer reservations</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Reservation management interface will be implemented here.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default ReservationManagementPage;
