
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ReservationTrackingPage: React.FC = () => {
  // Mock reservation data
  const reservations = [
    {
      id: 'RES001',
      date: '2024-01-15',
      time: '19:00',
      guests: 4,
      status: 'confirmed'
    },
    {
      id: 'RES002',
      date: '2024-01-20',
      time: '18:30',
      guests: 2,
      status: 'pending'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-500';
      case 'pending': return 'bg-yellow-500';
      case 'cancelled': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Track Your Reservations</h1>
        
        <div className="space-y-4">
          {reservations.map(reservation => (
            <Card key={reservation.id}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Reservation {reservation.id}</CardTitle>
                  <Badge className={getStatusColor(reservation.status)}>
                    {reservation.status.toUpperCase()}
                  </Badge>
                </div>
                <CardDescription>
                  {reservation.date} at {reservation.time} for {reservation.guests} guests
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We'll notify you of any updates regarding your reservation.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReservationTrackingPage;
