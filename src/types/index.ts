
export type UserRole = "guest" | "customer" | "staff" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

export interface ComboItem extends MenuItem {
  items: string[]; // Names or IDs of items in the combo
}
