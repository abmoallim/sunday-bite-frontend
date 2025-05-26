
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroBanner from '@/components/home/HeroBanner';
import MenuSection from '@/components/home/MenuSection';
import ComboSection from '@/components/home/ComboSection';
import AboutSection from '@/components/home/AboutSection';
import RateUsSection from '@/components/home/RateUsSection';
import ReservationSection from '@/components/home/ReservationSection';
import ThemeToggle from '@/components/layout/ThemeToggle';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ThemeToggle />
      <main>
        <HeroBanner />
        <MenuSection />
        <ComboSection />
        <AboutSection />
        <RateUsSection />
        <ReservationSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
