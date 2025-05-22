
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';

const CartPage: React.FC = () => {
  const { cartItems } = useCart();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold text-primary mb-8 text-center">Your Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-center text-muted-foreground">Your cart is empty. Start adding some delicious items!</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center p-4 border rounded-lg bg-card">
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-muted-foreground">Quantity: {item.quantity}</p>
                </div>
                <p className="text-lg font-bold text-primary">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            <div className="text-right mt-8">
              <Button size="lg">Proceed to Checkout (Not Implemented)</Button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
