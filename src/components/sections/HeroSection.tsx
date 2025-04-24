
const HeroSection = () => {
  return (
    <section id="home" className="min-h-[85vh] relative flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-bakery-cream to-transparent opacity-90"></div>
        <img 
          src="https://images.unsplash.com/photo-1565182363525-f95648bbeee0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Freshly baked goods" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-bakery-chocolate leading-tight">
            Handcrafted Baked Goods With Love
          </h1>
          <p className="text-lg md:text-xl text-bakery-brown mb-8 max-w-lg">
            Fresh pastries, breads, and indulgent desserts baked daily with the finest ingredients.
          </p>

           {/* New Information Section */}
        <ul className="text-bakery-brown text-base md:text-lg mb-8 list-disc list-inside">
          <li>Curd and milk available daily</li>
          <li>Pre-orders on cakes and sweets accepted</li>
          <li>Custom cakes made to order</li>
        </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#products" className="inline-block text-center">
              <button className="bg-bakery-brown text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-bakery-chocolate hover:shadow-md">
                Explore Our Menu
              </button>
            </a>
            <a href="#contact" className="inline-block text-center">
              <button className="px-6 py-3 border-2 border-bakery-brown text-bakery-brown rounded-full font-medium transition-all duration-300 hover:bg-bakery-brown hover:text-white hover:shadow-md">
                Visit Us Today
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
