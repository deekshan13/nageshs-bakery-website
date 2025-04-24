
const AboutSection = () => {
  return (
    <section id="about" className="section-padding bakery-gradient">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1602903403203-c5d75ab63549?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3VwY2FrZXxlbnwwfHwwfHx8Mg%3D%3D" 
              alt="Nagesh's Bakery" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="heading-script text-3xl md:text-4xl text-bakery-chocolate mb-6">Our Story</h2>
            <p className="text-bakery-brown mb-4">
              Founded in 2003, Nagesh's Bakery began with a simple mission: to bring joy through authentic, 
              handcrafted baked goods made with love and the finest ingredients.
            </p>
            <p className="text-bakery-brown mb-4">
              What started as a small family operation has grown into a beloved community staple, 
              but our dedication to quality has never wavered. Each day, we wake before dawn to 
              prepare fresh breads, pastries, and cookies using time-honored techniques.
            </p>
            <p className="text-bakery-brown mb-8">
              At Nagesh's Bakery, we believe that good food brings people together. We're proud to be 
              part of your special moments, family gatherings, and everyday pleasures.
            </p>
            <div className="flex justify-center">
              <div className="flex flex-col sm:flex-row gap-4" >
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-bakery-brown">20+</span>
                  <span className="text-sm text-bakery-chocolate">Years of Excellence</span>
                </div>
                </div>
              {/* <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-bakery-brown">50+</span>
                <span className="text-sm text-bakery-chocolate">Unique Recipes</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-bakery-brown">1000+</span>
                <span className="text-sm text-bakery-chocolate">Happy Customers</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
