
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';

// Context Providers
import { AuthProvider } from '@/contexts/AuthContext';
import { CartProvider } from '@/contexts/CartContext';
import { FavouriteProvider } from '@/contexts/FavouriteContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { MenuProvider } from '@/contexts/MenuContext';

// Pages
import HomePage from '@/pages/HomePage';
import CartPage from '@/pages/CartPage';
import DashboardPage from '@/pages/DashboardPage';
import ReservationTrackingPage from '@/pages/ReservationTrackingPage';

// CRUD Pages
import MenuManagementPage from '@/pages/admin/MenuManagementPage';
import ComboManagementPage from '@/pages/admin/ComboManagementPage';
import ReservationManagementPage from '@/pages/admin/ReservationManagementPage';
import TableManagementPage from '@/pages/admin/TableManagementPage';
import UserManagementPage from '@/pages/admin/UserManagementPage';
import ReportsPage from '@/pages/admin/ReportsPage';

// Components
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import RoleGuard from '@/components/auth/RoleGuard';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <MenuProvider>
            <CartProvider>
              <FavouriteProvider>
                <TooltipProvider>
                  <div className="min-h-screen w-full">
                    <Toaster />
                    <Sonner />
                    <BrowserRouter>
                      <Routes>
                        {/* Public Routes */}
                        <Route path="/" element={<HomePage />} />
                        
                        {/* Protected Routes - Require Authentication */}
                        <Route element={<ProtectedRoute />}>
                          <Route path="/cart" element={<CartPage />} />
                          <Route path="/dashboard" element={<DashboardPage />} />
                          <Route path="/reservation-tracking" element={<ReservationTrackingPage />} />
                        </Route>

                        {/* Admin Only Routes */}
                        <Route element={<ProtectedRoute />}>
                          <Route element={<RoleGuard allowedRoles={['admin']} />}>
                            <Route path="/admin/menu" element={<MenuManagementPage />} />
                            <Route path="/admin/combos" element={<ComboManagementPage />} />
                            <Route path="/admin/users" element={<UserManagementPage />} />
                            <Route path="/admin/reports" element={<ReportsPage />} />
                          </Route>
                        </Route>

                        {/* Staff & Admin Routes */}
                        <Route element={<ProtectedRoute />}>
                          <Route element={<RoleGuard allowedRoles={['staff', 'admin']} />}>
                            <Route path="/admin/reservations" element={<ReservationManagementPage />} />
                            <Route path="/admin/tables" element={<TableManagementPage />} />
                          </Route>
                        </Route>
                      </Routes>
                    </BrowserRouter>
                  </div>
                </TooltipProvider>
              </FavouriteProvider>
            </CartProvider>
          </MenuProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
