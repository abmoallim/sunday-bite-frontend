import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MenuItemCard from '@/components/menu/MenuItemCard';
import { Button } from '@/components/ui/button';
import { useMenu } from '@/contexts/MenuContext';

const HomePage: React.FC = () => {
  const { menuItems } = useMenu();

  const handleViewMenuClick = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Home Banner Section */}
        <section
          className="relative bg-cover bg-center py-32 sm:py-48 text-center text-white"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative container mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4">Welcome to Sunday Bite</h1>
            <p className="text-lg sm:text-xl mb-8">Experience the Authentic Flavors of Halal Cuisine.</p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={handleViewMenuClick} // Added onClick handler
            >
              View Our Menu
            </Button>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-center text-primary mb-12">Our Delicious Menu</h2>
            {menuItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {menuItems.map(item => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground">No menu items available at the moment. Admin can add items from the dashboard.</p>
            )}
          </div>
        </section>
        
        {/* Other sections (Combo, Rate Us, Reservation) will be added later */}

      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
