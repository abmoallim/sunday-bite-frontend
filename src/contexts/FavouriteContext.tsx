
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { MenuItem } from '@/types';

interface FavouriteContextType {
  favourites: MenuItem[];
  addToFavourites: (item: MenuItem) => void;
  removeFromFavourites: (itemId: string) => void;
  isFavourite: (itemId: string) => boolean;
  clearFavourites: () => void;
}

const FavouriteContext = createContext<FavouriteContextType | undefined>(undefined);

export const useFavourites = () => {
  const context = useContext(FavouriteContext);
  if (context === undefined) {
    throw new Error('useFavourites must be used within a FavouriteProvider');
  }
  return context;
};

interface FavouriteProviderProps {
  children: ReactNode;
}

export const FavouriteProvider: React.FC<FavouriteProviderProps> = ({ children }) => {
  const [favourites, setFavourites] = useState<MenuItem[]>([]);

  useEffect(() => {
    const storedFavourites = localStorage.getItem('testHub_favourites');
    if (storedFavourites) {
      try {
        setFavourites(JSON.parse(storedFavourites));
      } catch (error) {
        console.error('Failed to parse favourites data:', error);
        localStorage.removeItem('testHub_favourites');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('testHub_favourites', JSON.stringify(favourites));
  }, [favourites]);

  const addToFavourites = (item: MenuItem) => {
    setFavourites(prev => {
      if (prev.find(fav => fav.id === item.id)) {
        return prev;
      }
      return [...prev, item];
    });
  };

  const removeFromFavourites = (itemId: string) => {
    setFavourites(prev => prev.filter(item => item.id !== itemId));
  };

  const isFavourite = (itemId: string) => {
    return favourites.some(item => item.id === itemId);
  };

  const clearFavourites = () => {
    setFavourites([]);
  };

  return (
    <FavouriteContext.Provider value={{
      favourites,
      addToFavourites,
      removeFromFavourites,
      isFavourite,
      clearFavourites
    }}>
      {children}
    </FavouriteContext.Provider>
  );
};
