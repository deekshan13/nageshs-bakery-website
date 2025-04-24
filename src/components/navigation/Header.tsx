
import { useState } from 'react';
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-bakery-brown heading-script text-2xl">Nagesh's Bakery</span>
        </a>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden text-bakery-brown"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </Button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-bakery-brown hover:text-bakery-chocolate font-medium">Home</a>
          <a href="#about" className="text-bakery-brown hover:text-bakery-chocolate font-medium">About</a>
          <a href="#products" className="text-bakery-brown hover:text-bakery-chocolate font-medium">Products</a>
          <a href="#contact" className="text-bakery-brown hover:text-bakery-chocolate font-medium">Contact</a>
          {/* <Button className="bakery-button">Order Now</Button> */}
        </nav>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 md:hidden">
            <nav className="flex flex-col items-center space-y-4">
              <a href="#home" className="text-bakery-brown hover:text-bakery-chocolate font-medium">Home</a>
              <a href="#about" className="text-bakery-brown hover:text-bakery-chocolate font-medium">About</a>
              <a href="#products" className="text-bakery-brown hover:text-bakery-chocolate font-medium">Products</a>
              <a href="#contact" className="text-bakery-brown hover:text-bakery-chocolate font-medium">Contact</a>
              {/* <Button className="bakery-button">Order Now</Button> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
