import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { ShoppingCart, User, Menu as MenuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LoginForm from '@/components/auth/LoginForm';
import { useCart } from '@/hooks/useCart';
import { Badge } from '@/components/ui/badge';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleSmoothScrollToSection = (sectionId: string, event?: React.MouseEvent<HTMLAnchorElement>) => {
    if (event) event.preventDefault();
    
    const navigateAndScroll = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Element might not be there immediately after navigation
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    };

    if (location.pathname === '/') {
      navigateAndScroll();
    } else {
      navigate(`/#${sectionId}`);
      // Scrolling will be handled by browser or useEffect in target page if needed,
      // but react-router-dom v6 often handles hash scrolling well.
      // For more robust cross-page scroll, HomePage could have a useEffect for location.hash
    }
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-background/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <ThemeToggle />
            <Link to="/" className="ml-4 text-2xl font-serif font-bold text-primary">
              Sunday Bite
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <a 
              href="/#menu" 
              onClick={(e) => handleSmoothScrollToSection('menu', e)}
              className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
            >
              Menu
            </a>
            <Link to="/about" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">About</Link>
            <Link to="/cart" className="relative flex items-center text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              <ShoppingCart className="h-5 w-5" />
              <span className="ml-1">Cart</span>
              {cartItemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 min-w-[1.25rem] flex items-center justify-center rounded-full bg-orange-500 text-white text-xs px-1 border-transparent">
                  {cartItemCount}
                </Badge>
              )}
            </Link>
            {user ? (
               <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                     <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout}>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Dialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline">Sign In / Sign Up</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Access Your Account</DialogTitle>
                    <DialogDescription>
                      Sign in or create an account to enjoy full features.
                    </DialogDescription>
                  </DialogHeader>
                  <LoginForm onSuccess={() => setLoginDialogOpen(false)} />
                </DialogContent>
              </Dialog>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="relative text-foreground hover:text-primary p-2 rounded-md">
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <Badge className="absolute top-0 right-0 h-5 min-w-[1.25rem] flex items-center justify-center rounded-full bg-orange-500 text-white text-xs px-1 border-transparent transform translate-x-1/3 -translate-y-1/3">
                  {cartItemCount}
                </Badge>
              )}
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="ml-2">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <a 
              href="/#menu" 
              onClick={(e) => { handleSmoothScrollToSection('menu', e); }}
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            >
              Menu
            </a>
            <Link to="/about" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>About</Link>
             {user ? (
              <>
                <Link to="/dashboard" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
                <Button onClick={() => { logout(); setMobileMenuOpen(false); }} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-red-500 hover:bg-red-100 dark:hover:bg-red-900">Log Out</Button>
              </>
            ) : (
               <Dialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen}>
                <DialogTrigger asChild>
                   <Button className="w-full text-left block px-3 py-2 rounded-md text-base font-medium" onClick={() => { setMobileMenuOpen(false); /* Keep dialog open if triggered from here */ }}>Sign In / Sign Up</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Access Your Account</DialogTitle>
                    <DialogDescription>
                      Sign in or create an account to enjoy full features.
                    </DialogDescription>
                  </DialogHeader>
                  <LoginForm onSuccess={() => { setLoginDialogOpen(false); setMobileMenuOpen(false); }} />
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
