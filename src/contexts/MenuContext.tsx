
import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import { MenuItem } from '@/types';
// Initial menu items will be moved here from HomePage
const initialMenuItems: MenuItem[] = [
  { id: '1', name: 'Spicy Lamb Biryani', description: 'Aromatic basmati rice cooked with tender lamb and exotic spices.', price: 15.99, imageUrl: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', category: 'Main Course' },
  { id: '2', name: 'Chicken Tikka Masala', description: 'Grilled chicken chunks in a rich, creamy tomato sauce.', price: 14.50, imageUrl: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', category: 'Main Course' },
  { id: '3', name: 'Falafel Platter', description: 'Crispy falafel balls served with hummus, pita, and salad.', price: 12.00, imageUrl: 'https://images.unsplash.com/photo-1627308594192-9cf5feb955c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', category: 'Appetizer' },
  { id: '4', name: 'Mango Lassi', description: 'Refreshing yogurt-based mango smoothie.', price: 4.50, imageUrl: 'https://images.unsplash.com/photo-1600317698382-235376c87234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', category: 'Drinks' },
  { id: '5', name: 'Beef Samosas', description: 'Crispy pastry filled with spiced minced beef and peas.', price: 6.99, imageUrl: 'https://images.unsplash.com/photo-1562800282-86e7671e3db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', category: 'Appetizer' },
  { id: '6', name: 'Shish Taouk (Chicken Kebab)', description: 'Grilled skewers of marinated chicken pieces, served with garlic sauce.', price: 13.75, imageUrl: 'https://images.unsplash.com/photo-1607509358942-7a56a5505023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', category: 'Main Course' },
  { id: '7', name: 'Hummus with Shawarma Meat', description: 'Creamy hummus topped with seasoned shawarma meat, served with pita.', price: 9.50, imageUrl: 'https://images.unsplash.com/photo-1625944001499-2079a3609f15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', category: 'Appetizer' },
  { id: '8', name: 'Gulab Jamun', description: 'Soft berry-sized balls made of milk solids, flour & a leavening agent, soaked in rose-flavored sugar syrup.', price: 5.00, imageUrl: 'https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', category: 'Dessert' },
  { id: '9', name: 'Mint Lemonade', description: 'Refreshing homemade lemonade with fresh mint.', price: 3.50, imageUrl: 'https://images.unsplash.com/photo-1595015491694-58805967239f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', category: 'Drinks' },
  { id: '10', name: 'Vegetable Korma', description: 'Mixed vegetables cooked in a creamy, mildly spiced sauce.', price: 11.99, imageUrl: 'https://images.unsplash.com/photo-1587601933799-9258810e7115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', category: 'Main Course' },
];

const MENU_STORAGE_KEY = 'sundaybite-menu';

interface MenuContextType {
  menuItems: MenuItem[];
  addMenuItem: (item: Omit<MenuItem, 'id'>) => void;
  // Later we can add updateMenuItem and deleteMenuItem
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(() => {
    const storedMenu = localStorage.getItem(MENU_STORAGE_KEY);
    return storedMenu ? JSON.parse(storedMenu) : initialMenuItems;
  });

  useEffect(() => {
    localStorage.setItem(MENU_STORAGE_KEY, JSON.stringify(menuItems));
  }, [menuItems]);

  const addMenuItem = (item: Omit<MenuItem, 'id'>) => {
    const newItem: MenuItem = {
      ...item,
      id: Date.now().toString(), // Simple ID generation
    };
    setMenuItems(prevItems => [...prevItems, newItem]);
  };

  return (
    <MenuContext.Provider value={{ menuItems, addMenuItem }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};

