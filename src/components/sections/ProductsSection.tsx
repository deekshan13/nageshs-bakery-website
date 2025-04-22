
const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Artisan Sourdough",
      description: "Naturally leavened sourdough bread with a crispy crust and soft, chewy interior.",
      price: "$6.99",
      image: "https://images.unsplash.com/photo-1585478259715-4d3a2dd0b3b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      name: "Chocolate Croissant",
      description: "Buttery, flaky croissants filled with rich chocolate and dusted with powdered sugar.",
      price: "$4.50",
      image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      name: "Blueberry Muffins",
      description: "Moist muffins bursting with fresh blueberries and topped with a crunchy streusel.",
      price: "$3.75",
      image: "https://images.unsplash.com/photo-1614706180229-5ed8026f9253?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      name: "Classic Cinnamon Rolls",
      description: "Soft, pillowy rolls swirled with cinnamon sugar and topped with cream cheese frosting.",
      price: "$4.25",
      image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      name: "Fruit Tart",
      description: "Buttery pastry shell filled with vanilla custard and topped with seasonal fresh fruits.",
      price: "$5.99",
      image: "https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      name: "Chocolate Cake",
      description: "Rich, moist chocolate cake layered with ganache and chocolate buttercream.",
      price: "$7.50",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
  ];

  return (
    <section id="products" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-script text-3xl md:text-4xl text-bakery-chocolate mb-4">Our Specialties</h2>
          <p className="text-bakery-brown max-w-2xl mx-auto">
            Each item is baked fresh daily using traditional methods and the finest ingredients.
            Here's a selection of our most loved products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bakery-card group">
              <div className="h-60 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-bakery-chocolate">{product.name}</h3>
                  <span className="text-lg font-bold text-bakery-brown">{product.price}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                <button className="text-bakery-brown border-b border-bakery-brown hover:text-bakery-chocolate transition-colors">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="bakery-button inline-block">
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
