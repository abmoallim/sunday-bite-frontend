
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

export type UserRole = 'guest' | 'customer' | 'staff' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role?: UserRole) => Promise<void>;
  register: (name: string, email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const storedUser = localStorage.getItem('testHub_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user data:', error);
        localStorage.removeItem('testHub_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, role?: UserRole) => {
    // Mock authentication - replace with actual API call
    const mockUser: User = {
      id: Date.now().toString(),
      name: email.split('@')[0],
      email,
      role: role || 'customer'
    };

    setUser(mockUser);
    localStorage.setItem('testHub_user', JSON.stringify(mockUser));
  };

  const register = async (name: string, email: string, password: string, role: UserRole) => {
    // Mock registration - replace with actual API call
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      role
    };

    setUser(newUser);
    localStorage.setItem('testHub_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('testHub_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
