
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Sunday Bite. All rights reserved.</p>
        <p className="text-xs mt-1">Delicious Halal Food, Served with Love.</p>
        {/* Add social media icons or other links here if needed */}
      </div>
    </footer>
  );
};

export default Footer;
