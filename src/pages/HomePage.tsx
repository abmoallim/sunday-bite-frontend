import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MenuItemCard from '@/components/menu/MenuItemCard';
import { MenuItem } from '@/types';
import { Button } from '@/components/ui/button';

const mockMenuItems: MenuItem[] = [
  { id: '1', name: 'Spicy Lamb Biryani', description: 'Aromatic basmati rice cooked with tender lamb and exotic spices.', price: 15.99, imageUrl: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', category: 'Main Course' },
  { id: '2', name: 'Chicken Tikka Masala', description: 'Grilled chicken chunks in a rich, creamy tomato sauce.', price: 14.50, imageUrl: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', category: 'Main Course' },
  { id: '3', name: 'Falafel Platter', description: 'Crispy falafel balls served with hummus, pita, and salad.', price: 12.00, imageUrl: 'https://images.unsplash.com/photo-1627308594192-9cf5feb955c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', category: 'Appetizer' },
  { id: '4', name: 'Mango Lassi', description: 'Refreshing yogurt-based mango smoothie.', price: 4.50, imageUrl: 'https://images.unsplash.com/photo-1600317698382-235376c87234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', category: 'Drinks' },
];

const HomePage: React.FC = () => {
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
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              View Our Menu
            </Button>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-center text-primary mb-12">Our Delicious Menu</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {mockMenuItems.map(item => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section (Placeholder) */}
        <section id="about" className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">About Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sunday Bite is dedicated to bringing you the finest Halal Muslim food, prepared with fresh ingredients and traditional recipes. 
              Join us for an unforgettable dining experience. We believe in quality, flavor, and a warm, welcoming atmosphere for all our guests.
            </p>
          </div>
        </section>
        
        {/* Other sections (Combo, Rate Us, Reservation) will be added later */}

      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
