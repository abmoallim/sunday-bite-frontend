
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus } from 'lucide-react';

const MenuManagementPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Menu Management</h1>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add New Item
          </Button>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Menu Items</CardTitle>
            <CardDescription>Manage your restaurant menu items</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Menu management interface will be implemented here.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default MenuManagementPage;
