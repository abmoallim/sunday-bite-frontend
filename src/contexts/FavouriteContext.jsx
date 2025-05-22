
import React, { createContext, useState, ReactNode } from 'react';
import { MenuItem } from '@/types';

interface FavouriteContextType {
  favourites: MenuItem[];
  toggleFavourite: (item: MenuItem) => void;
  isFavourite: (itemId: string) => boolean;
}

export const FavouriteContext = createContext<FavouriteContextType | undefined>(undefined);

interface FavouriteProviderProps {
  children: ReactNode;
}

export const FavouriteProvider: React.FC<FavouriteProviderProps> = ({ children }) => {
  const [favourites, setFavourites] = useState<MenuItem[]>([]);

  const toggleFavourite = (item: MenuItem) => {
    setFavourites(prevFavourites => {
      if (prevFavourites.find(fav => fav.id === item.id)) {
        return prevFavourites.filter(fav => fav.id !== item.id);
      }
      return [...prevFavourites, item];
    });
    console.log(`${item.name} toggled in favourites`);
  };

  const isFavourite = (itemId: string) => {
    return favourites.some(fav => fav.id === itemId);
  };

  return (
    <FavouriteContext.Provider value={{ favourites, toggleFavourite, isFavourite }}>
      {children}
    </FavouriteContext.Provider>
  );
};
