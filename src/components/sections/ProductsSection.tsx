
const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Chocolate Cake",
      description: "Rich and moist chocolate cake with vanilla or chocolate cream of your choice",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      name: "Cookies",
      description: "Classic butter cookies,sesame cookies that are soft and chewy ",
      image: "https://img.freepik.com/free-photo/delicious-chocolate-chip-cookies-arrangement_23-2150714604.jpg?ga=GA1.1.1018984189.1745385472&semt=ais_hybrid&w=740"
    },
    {
      id: 3,
      name: "Bread",
      description: "Naturally leavened sourdough bread with a crispy crust and soft, chewy interior.",
      image: "https://img.freepik.com/free-photo/bread-wooden-tray-red-white-cloth_1150-23896.jpg?ga=GA1.1.1018984189.1745385472&semt=ais_hybrid&w=740"
    },
    {
      id: 4,
      name: "Sweets",
      description: "Traditional Indian sweets crafted with rich ingredients and authentic flavors.",
      image: "https://img.freepik.com/free-psd/top-view-traditional-indian-dessert_23-2150634512.jpg?ga=GA1.1.1018984189.1745385472&semt=ais_hybrid&w=740"
    },
    {
      id: 5,
      name: "Banana Chips",
      description: "Buttery pastry shell filled with vanilla custard and topped with seasonal fresh fruits.",
      image: "https://img.freepik.com/free-photo/delicious-baked-banana-slices_23-2150764324.jpg?ga=GA1.1.1018984189.1745385472&semt=ais_hybrid&w=740"
    },
    {
      id: 6,
      name: "Puffs",
      description: "Crispy, flaky pastry puffs filled with a deliciously spiced vegetable or egg filling.",
      image: "https://img.freepik.com/free-photo/chicken-pie-kurnik-that-is-beautifully-decorated-table_1150-23100.jpg?ga=GA1.1.1018984189.1745385472&semt=ais_hybrid&w=740"
    },
    {
      id: 7,
      name: "Ice cream",
      description: "Creamy, delicious ice cream available in a variety of mouthwatering flavors.",
      image: "https://hangyo.in/cdn/shop/collections/Group_76_3d6c629c-41c0-48a0-986b-c1674ca5e3ea.jpg?v=1715803681&width=535"
    },
    {
      id: 8,
      name: "Bread toast",
      description: "A crispy bread toast layered with fresh vegetables and  sauce — perfect for a quick, tasty, and satisfying bite",
      image: "https://img.freepik.com/free-photo/high-angle-triangle-sandwiches-with-tomatoes_23-2148640141.jpg?ga=GA1.1.1018984189.1745385472&semt=ais_hybrid&w=740"
    },
    {
      id: 9,
      name: "Soft drinks",
      description: "Refreshing carbonated beverages available in assorted popular flavors",
      image: "https://images-cdn.ubuy.co.in/64a5bf33ff11083f18096ce5-soft-drink-assortment-cola-pepsi.jpg"
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
                {/* <button className="text-bakery-brown border-b border-bakery-brown hover:text-bakery-chocolate transition-colors">
                  Add to cart
                </button> */}
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="text-center mt-12">
          <a href="#" className="bakery-button inline-block">
            View Full Menu
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default ProductsSection;
