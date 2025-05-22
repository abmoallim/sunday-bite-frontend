
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus } from 'lucide-react';
import { toast } from '@/components/ui/sonner'; // For potential notifications on this page

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();

  const handleQuantityChange = (itemId: string, currentQuantity: number, change: number) => {
    const newQuantity = currentQuantity + change;
    updateQuantity(itemId, newQuantity);
  };

  const handleRemoveItem = (itemId: string, itemName: string) => {
    removeFromCart(itemId);
    toast.success(`${itemName} removed from cart.`);
  };

  const handleClearCart = () => {
    clearCart();
    toast.success("Cart cleared.");
  };

  const cartTotal = getCartTotal();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold text-primary mb-8 text-center">Your Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-center text-muted-foreground">Your cart is empty. Start adding some delicious items!</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map(item => (
              <div key={item.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border rounded-lg bg-card shadow-sm">
                <div className="flex items-center mb-4 sm:mb-0">
                  <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-md mr-4"/>
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-muted-foreground text-sm">${item.price.toFixed(2)} each</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-auto">
                  <div className="flex items-center space-x-2 mb-2 sm:mb-0 sm:mr-4">
                    <Button variant="outline" size="icon" onClick={() => handleQuantityChange(item.id, item.quantity, -1)} disabled={item.quantity <= 1}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-10 text-center font-medium">{item.quantity}</span>
                    <Button variant="outline" size="icon" onClick={() => handleQuantityChange(item.id, item.quantity, 1)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center w-full sm:w-auto">
                     <p className="text-lg font-bold text-primary mr-4 w-24 text-right">${(item.price * item.quantity).toFixed(2)}</p>
                     <Button variant="ghost" size="icon" onClick={() => handleRemoveItem(item.id, item.name)} className="text-red-500 hover:text-red-600">
                       <Trash2 className="h-5 w-5" />
                     </Button>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-8 pt-6 border-t">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold">Total:</h3>
                <p className="text-2xl font-bold text-primary">${cartTotal.toFixed(2)}</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
                <Button variant="outline" size="lg" onClick={handleClearCart} className="w-full sm:w-auto">
                  Clear Cart
                </Button>
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                  Proceed to Checkout (Not Implemented)
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;

