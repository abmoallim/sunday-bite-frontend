
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About TestHub</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Welcome to TestHub, where culinary excellence meets exceptional service. 
            For over a decade, we've been serving our community with fresh, delicious meals 
            prepared with love and the finest ingredients.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Our chefs are passionate about creating memorable dining experiences, 
            whether you're dining in or ordering for delivery. From our signature dishes 
            to our kids-friendly options, every meal is crafted to perfection.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
              <p className="text-muted-foreground">We source only the freshest, highest quality ingredients for our dishes.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Expert Chefs</h3>
              <p className="text-muted-foreground">Our experienced chefs bring passion and creativity to every dish.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">Quick and reliable delivery service to bring our food to your doorstep.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
