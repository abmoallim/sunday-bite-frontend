
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { MenuItem, ComboItem } from '@/types';

interface MenuContextType {
  menuItems: MenuItem[];
  comboItems: ComboItem[];
  addMenuItem: (item: Omit<MenuItem, 'id'>) => void;
  updateMenuItem: (id: string, item: Partial<MenuItem>) => void;
  deleteMenuItem: (id: string) => void;
  addComboItem: (item: Omit<ComboItem, 'id'>) => void;
  updateComboItem: (id: string, item: Partial<ComboItem>) => void;
  deleteComboItem: (id: string) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};

// Mock data
const initialMenuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Spicy Chicken Wings',
    description: 'Crispy chicken wings tossed in our signature spicy sauce',
    price: 12.99,
    imageUrl: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400',
    category: 'appetizer',
    isKidsItem: false
  },
  {
    id: '2',
    name: 'Grilled Beef Burger',
    description: 'Juicy beef patty with fresh lettuce, tomatoes, and our special sauce',
    price: 16.99,
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
    category: 'main',
    isKidsItem: false
  },
  {
    id: '3',
    name: 'Kids Chicken Nuggets',
    description: 'Tender chicken nuggets served with fries and a drink',
    price: 8.99,
    imageUrl: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400',
    category: 'kids',
    isKidsItem: true
  }
];

const initialComboItems: ComboItem[] = [
  {
    id: 'c1',
    name: 'Family Feast',
    description: 'Perfect for sharing - includes main dishes, sides, and drinks',
    price: 39.99,
    originalPrice: 49.99,
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400',
    items: [],
    isKidsCombo: false
  }
];

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);
  const [comboItems, setComboItems] = useState<ComboItem[]>(initialComboItems);

  const addMenuItem = (item: Omit<MenuItem, 'id'>) => {
    const newItem: MenuItem = { ...item, id: Date.now().toString() };
    setMenuItems(prev => [...prev, newItem]);
  };

  const updateMenuItem = (id: string, item: Partial<MenuItem>) => {
    setMenuItems(prev => prev.map(menuItem => 
      menuItem.id === id ? { ...menuItem, ...item } : menuItem
    ));
  };

  const deleteMenuItem = (id: string) => {
    setMenuItems(prev => prev.filter(item => item.id !== id));
  };

  const addComboItem = (item: Omit<ComboItem, 'id'>) => {
    const newItem: ComboItem = { ...item, id: Date.now().toString() };
    setComboItems(prev => [...prev, newItem]);
  };

  const updateComboItem = (id: string, item: Partial<ComboItem>) => {
    setComboItems(prev => prev.map(comboItem => 
      comboItem.id === id ? { ...comboItem, ...item } : comboItem
    ));
  };

  const deleteComboItem = (id: string) => {
    setComboItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <MenuContext.Provider value={{
      menuItems,
      comboItems,
      addMenuItem,
      updateMenuItem,
      deleteMenuItem,
      addComboItem,
      updateComboItem,
      deleteComboItem
    }}>
      {children}
    </MenuContext.Provider>
  );
};
