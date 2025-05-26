
import React from 'react';
import { useMenu } from '@/contexts/MenuContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, ShoppingCart } from 'lucide-react';

const MenuSection: React.FC = () => {
  const { menuItems } = useMenu();

  return (
    <section id="menu" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-6">Regular Menu</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.filter(item => !item.isKidsItem).map(item => (
              <Card key={item.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription className="mt-2">{item.description}</CardDescription>
                  <p className="text-lg font-bold text-orange-600 mt-2">${item.price.toFixed(2)}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex gap-2">
                  <Button size="sm" className="flex-1">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button size="sm" variant="outline">
                    <Heart className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">Kids Menu</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.filter(item => item.isKidsItem).map(item => (
              <Card key={item.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription className="mt-2">{item.description}</CardDescription>
                  <p className="text-lg font-bold text-orange-600 mt-2">${item.price.toFixed(2)}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex gap-2">
                  <Button size="sm" className="flex-1">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button size="sm" variant="outline">
                    <Heart className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
