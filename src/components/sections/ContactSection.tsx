
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-script text-3xl md:text-4xl text-bakery-chocolate mb-4">Visit Us Today</h2>
          <p className="text-bakery-brown max-w-2xl mx-auto">
            Stop by our bakery to experience the aroma of freshly baked goods and take home your favorites.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-secondary rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-bakery-chocolate mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-bakery-brown mr-4" />
                  <div>
                    <h4 className="font-medium text-bakery-chocolate">Address</h4>
                    <p className="text-bakery-brown">Nagesh's Bakery, Chandan towers, Mahaveer Rd, Kalasa, Karnataka 577124</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-bakery-brown mr-4" />
                  <div>
                    <h4 className="font-medium text-bakery-chocolate">Phone</h4>
                    <p className="text-bakery-brown">8660871161</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-bakery-brown mr-4" />
                  <div>
                    <h4 className="font-medium text-bakery-chocolate">Email</h4>
                    <p className="text-bakery-brown">nageshlingayath61@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-bakery-brown mr-4" />
                  <div>
                    <h4 className="font-medium text-bakery-chocolate">Hours</h4>
                    <p className="text-bakery-brown">Everyday: 7 AM - 10 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124474.55155428182!2d75.72287623125!3d13.39470300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbad7a4b7de7183%3A0xf29babf33f909afc!2sKalasa%2C%20Karnataka!5e0!3m2!1sen!2sus!4v1713020304688!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Bakery Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
