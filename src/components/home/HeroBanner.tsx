
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to TestHub</h1>
        <p className="text-xl mb-8">Delicious food delivered to your doorstep</p>
        <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
          Order Now
        </Button>
      </div>
    </section>
  );
};

export default HeroBanner;
