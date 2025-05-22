
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const AboutUsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16">
        <section id="about" className="text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-8">About Us</h1>
          <div className="max-w-3xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
              alt="Restaurant Interior" 
              className="rounded-lg shadow-xl mb-8 w-full h-auto object-cover"
              style={{ maxHeight: '400px' }}
            />
            <p className="text-lg text-muted-foreground mb-6">
              Sunday Bite is dedicated to bringing you the finest Halal Muslim food, prepared with fresh ingredients and traditional recipes. 
              Our journey began with a passion for authentic flavors and a desire to share them with our community.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We believe in quality, flavor, and a warm, welcoming atmosphere for all our guests. Each dish is crafted with care, ensuring an unforgettable dining experience. From our family to yours, we invite you to taste the tradition and love we put into every meal.
            </p>
            <p className="text-lg text-muted-foreground">
              Join us at Sunday Bite, where every bite tells a story of heritage and culinary excellence.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
