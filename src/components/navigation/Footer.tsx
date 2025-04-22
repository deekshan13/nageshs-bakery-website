
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bakery-brown text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Nagesh's Bakery</h3>
            <p className="text-white/80 mb-4">
              Handcrafted baked goods made with love and the finest ingredients since 2010.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Artisan Breads</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Pastries</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Cakes</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Cookies</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Seasonal Specials</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; {currentYear} Nagesh's Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
