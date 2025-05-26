
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'appetizer' | 'main' | 'dessert' | 'beverage' | 'kids';
  isKidsItem: boolean;
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

export interface CartItem extends MenuItem {
  quantity: number;
  isCombo?: boolean;
  comboId?: string;
}

export interface Reservation {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  date: string;
  time: string;
  partySize: number;
  specialRequests?: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  tableId?: string;
}

export interface Table {
  id: string;
  number: number;
  capacity: number;
  isAvailable: boolean;
  location: 'indoor' | 'outdoor' | 'private';
}

export interface Order {
  id: string;
  customerId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
  orderDate: string;
  deliveryAddress?: string;
  orderType: 'dine-in' | 'takeaway' | 'delivery';
}
