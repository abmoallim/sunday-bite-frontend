
import { useContext } from 'react';
import { FavouriteContext } from '@/contexts/FavouriteContext';

export const useFavourites = () => {
  const context = useContext(FavouriteContext);
  if (context === undefined) {
    throw new Error('useFavourites must be used within a FavouriteProvider');
  }
  return context;
};
