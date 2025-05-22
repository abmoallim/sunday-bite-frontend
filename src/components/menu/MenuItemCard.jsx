
import React from 'react';
import { MenuItem as MenuItemType } from '@/types';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { useFavourites } from '@/hooks/useFavourites';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/components/ui/sonner';

const MenuItemCard: React.FC<{ item: MenuItemType }> = ({ item }) => {
  const { addToCart } = useCart();
  const { toggleFavourite, isFavourite } = useFavourites();
  const { user } = useAuth();

  const handleAddToCart = () => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`, {
      description: `Price: $${item.price.toFixed(2)}`,
      // Action button could navigate to cart page if router is available here
    });
  };

  const handleToggleFavourite = () => {
    if (!user) {
      toast.error("Please sign in to add to favourites.", {
        description: "Login is required to save your favourite items."
      });
      return;
    }
    
    const currentlyFavourite = isFavourite(item.id);
    toggleFavourite(item); // This will update the state for the next render

    // Toast based on the action performed (toggling the state)
    if (currentlyFavourite) {
        toast.info(`${item.name} removed from favourites.`);
    } else {
        toast.success(`${item.name} added to favourites!`);
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300 ease-in-out flex flex-col">
      <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-card-foreground mb-2">{item.name}</h3>
        <p className="text-muted-foreground text-sm mb-2 h-10 overflow-hidden">{item.description}</p> {/* Ensure consistent height for description */}
        <p className="text-lg font-bold text-primary mb-4 mt-auto pt-2">${item.price.toFixed(2)}</p> {/* Added pt-2 for spacing */}
        <div className="flex justify-between items-center mt-2">
          <Button onClick={handleAddToCart} variant="outline" size="sm" className="flex-grow mr-2"> {/* Changed w-full to flex-grow */}
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
          <Button 
            onClick={handleToggleFavourite} 
            variant="ghost" 
            size="icon" 
            className={`
              ${isFavourite(item.id) && user ? 'text-red-500 hover:text-red-600' : 'text-muted-foreground hover:text-red-500'}
              transition-colors duration-150
            `}
          >
            <Heart className={`h-5 w-5 ${isFavourite(item.id) && user ? 'fill-current' : ''}`} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;

