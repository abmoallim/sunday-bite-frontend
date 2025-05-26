
import React from 'react';
import { useMenu } from '@/contexts/MenuContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, ShoppingCart } from 'lucide-react';

const ComboSection: React.FC = () => {
  const { comboItems } = useMenu();

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Combo Deals</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-6">Regular Combos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comboItems.filter(combo => !combo.isKidsCombo).map(combo => (
              <Card key={combo.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <img src={combo.imageUrl} alt={combo.name} className="w-full h-48 object-cover" />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg">{combo.name}</CardTitle>
                  <CardDescription className="mt-2">{combo.description}</CardDescription>
                  <div className="flex items-center gap-2 mt-2">
                    <p className="text-lg font-bold text-orange-600">${combo.price.toFixed(2)}</p>
                    <p className="text-sm text-muted-foreground line-through">${combo.originalPrice.toFixed(2)}</p>
                  </div>
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
          <h3 className="text-2xl font-semibold mb-6">Kids Combos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comboItems.filter(combo => combo.isKidsCombo).map(combo => (
              <Card key={combo.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <img src={combo.imageUrl} alt={combo.name} className="w-full h-48 object-cover" />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg">{combo.name}</CardTitle>
                  <CardDescription className="mt-2">{combo.description}</CardDescription>
                  <div className="flex items-center gap-2 mt-2">
                    <p className="text-lg font-bold text-orange-600">${combo.price.toFixed(2)}</p>
                    <p className="text-sm text-muted-foreground line-through">${combo.originalPrice.toFixed(2)}</p>
                  </div>
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

export default ComboSection;
