import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-chocolate-dark pt-20 pb-8 relative">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl font-bold text-primary mb-4">Amul</h3>
            <p className="font-elegant text-cream/60 italic mb-4">Dark Chocolate</p>
            <p className="font-body text-cream/50 text-sm leading-relaxed">
              Experience the finest dark chocolate crafted with premium cocoa beans. 
              The taste of India, now in luxurious chocolate form.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display text-lg font-semibold text-cream mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Products', 'Benefits', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-body text-cream/50 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display text-lg font-semibold text-cream mb-6">Our Products</h4>
            <ul className="space-y-3">
              {['99% Superdark', '75% Rich Cocoa', '55% Fine Cocoa', 'Milk Chocolate', 'Fruit & Nut'].map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="font-body text-cream/50 hover:text-primary transition-colors text-sm"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display text-lg font-semibold text-cream mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <a href="tel:18002583333" className="font-body text-cream/50 hover:text-primary transition-colors text-sm">
                  1800 258 3333
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <a href="mailto:care@amul.coop" className="font-body text-cream/50 hover:text-primary transition-colors text-sm">
                  care@amul.coop
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="font-body text-cream/50 text-sm">
                  Amul Dairy, Anand, Gujarat 388001, India
                </span>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/50 hover:border-primary hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1, y: -3 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-cream/40 text-sm">
              © 2026 Amul Dark Chocolate. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-body text-cream/40 hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-cream/40 hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
