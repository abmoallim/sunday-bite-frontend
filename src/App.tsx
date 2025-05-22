
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import DashboardPage from "./pages/DashboardPage";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./components/auth/ProtectedRoute"; 

import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import { FavouriteProvider } from "./contexts/FavouriteContext";
import { MenuProvider } from "./contexts/MenuContext"; // Import MenuProvider


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <MenuProvider> {/* Wrap with MenuProvider */}
          <CartProvider>
            <FavouriteProvider>
              <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    
                    <Route element={<ProtectedRoute />}>
                      <Route path="/cart" element={<CartPage />} />
                      <Route path="/dashboard" element={<DashboardPage />} />
                    </Route>
                    
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </BrowserRouter>
              </TooltipProvider>
            </FavouriteProvider>
          </CartProvider>
        </MenuProvider> {/* Close MenuProvider */}
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

