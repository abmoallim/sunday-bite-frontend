
import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { ShoppingCart, User, Menu as MenuIcon } from 'lucide-react'; // Added MenuIcon for mobile
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


const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

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
            <Link to="/#menu" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Menu</Link>
            <Link to="/#about" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">About</Link>
            <Link to="/cart" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              <ShoppingCart className="h-5 w-5 inline-block" /> Cart
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
              <Button onClick={() => alert('Login modal/page to be implemented. For now, mock login: useAuth().login("test@example.com", "customer")')} variant="outline">
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="text-foreground hover:text-primary p-2 rounded-md">
              <ShoppingCart className="h-6 w-6" />
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
            <Link to="/#menu" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>Menu</Link>
            <Link to="/#about" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>About</Link>
             {user ? (
              <>
                <Link to="/dashboard" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
                <Button onClick={() => { logout(); setMobileMenuOpen(false); }} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-red-500 hover:bg-red-100 dark:hover:bg-red-900">Log Out</Button>
              </>
            ) : (
               <Button onClick={() => { alert('Login modal/page to be implemented.'); setMobileMenuOpen(false); }} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium">Sign In</Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
