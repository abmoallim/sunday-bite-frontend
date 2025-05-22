
import React from 'react';
import { MenuItem as MenuItemType } from '@/types';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { useFavourites } from '@/hooks/useFavourites';
import { useAuth } from '@/hooks/useAuth'; // To check if user is logged in

const MenuItemCard: React.FC<{ item: MenuItemType }> = ({ item }) => {
  const { addToCart } = useCart();
  const { toggleFavourite, isFavourite } = useFavourites();
  const { user } = useAuth();

  const handleAddToCart = () => {
    // Later, check if user is logged in for cart functionality if required by guest rules
    addToCart(item);
    // toast({ title: `${item.name} added to cart!` }); // Example if using shadcn toast
  };

  const handleToggleFavourite = () => {
    if (!user) {
      alert("Please sign in to add to favourites."); // Or open login modal
      return;
    }
    toggleFavourite(item);
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300 ease-in-out">
      <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-card-foreground mb-2">{item.name}</h3>
        <p className="text-muted-foreground text-sm mb-2 h-10 overflow-hidden">{item.description}</p>
        <p className="text-lg font-bold text-primary mb-4">${item.price.toFixed(2)}</p>
        <div className="flex justify-between items-center">
          <Button onClick={handleAddToCart} variant="outline" size="sm">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
          <Button onClick={handleToggleFavourite} variant="ghost" size="icon" className={` ${isFavourite(item.id) && user ? 'text-red-500' : 'text-muted-foreground'}`}>
            <Heart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
