
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  isKidsItem: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface ComboItem {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  imageUrl: string;
  items: MenuItem[];
  isKidsCombo: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'guest' | 'customer' | 'staff' | 'admin';
}

export interface Reservation {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}
