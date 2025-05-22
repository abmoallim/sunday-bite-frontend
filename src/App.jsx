import { Toaster } from "@/components/ui/toaster.jsx";
import { Toaster as Sonner } from "@/components/ui/sonner.jsx";
import { TooltipProvider } from "@/components/ui/tooltip.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import NotFound from "./pages/NotFound.jsx";

import ProtectedRoute from "./components/auth/ProtectedRoute.jsx"; 

import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { FavouriteProvider } from "./contexts/FavouriteContext.jsx";
import { MenuProvider } from "./contexts/MenuContext.jsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <MenuProvider>
          <CartProvider>
            <FavouriteProvider>
              <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutUsPage />} />
                    
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
        </MenuProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
