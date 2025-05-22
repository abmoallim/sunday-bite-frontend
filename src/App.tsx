
import { Toaster } from "@/components/ui/toaster"; // .jsx extension removed if present
import { Toaster as Sonner } from "@/components/ui/sonner"; // .jsx extension removed if present
import { TooltipProvider } from "@/components/ui/tooltip"; // .jsx extension removed if present
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx"; // Keep .jsx for now as it's a .jsx file
import CartPage from "./pages/CartPage.jsx"; // Keep .jsx
import DashboardPage from "./pages/DashboardPage.tsx"; // This is already .tsx
import AboutUsPage from "./pages/AboutUsPage.jsx"; // Keep .jsx
import NotFound from "./pages/NotFound.jsx"; // Keep .jsx

import ProtectedRoute from "./components/auth/ProtectedRoute.jsx"; // Keep .jsx

import { ThemeProvider } from "./contexts/ThemeContext.jsx"; // Keep .jsx
import { AuthProvider } from "./contexts/AuthContext.jsx"; // Keep .jsx
import { CartProvider } from "./contexts/CartContext.jsx"; // Keep .jsx
import { FavouriteProvider } from "./contexts/FavouriteContext.jsx"; // Keep .jsx
import { MenuProvider } from "./contexts/MenuContext.tsx"; // This is .tsx

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

