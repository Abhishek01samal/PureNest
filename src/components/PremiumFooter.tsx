import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const footerLinks = {
  products: [
    { name: 'Dark Chocolate', href: '#' },
    { name: 'Milk Chocolate', href: '#' },
    { name: 'Premium Butter', href: '#' },
    { name: 'Cheese Range', href: '#' },
    { name: 'Fresh Milk', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Heritage', href: '#heritage' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  support: [
    { name: 'FAQ', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Store Locator', href: '#' },
    { name: 'Bulk Orders', href: '#' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const PremiumFooter = () => {
  return (
    <footer className="relative bg-chocolate-dark border-t border-primary/10">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#" className="inline-block mb-6">
              <span className="font-display text-4xl text-primary font-bold">Amul</span>
            </a>
            <p className="font-body text-cream/60 mb-6 max-w-sm">
              The Taste of India. Bringing premium dairy products to millions of 
              families since 1946. Quality you can trust, taste you'll love.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-chocolate flex items-center justify-center text-cream/60 hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  data-hover
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="font-display text-lg text-cream mb-6 capitalize">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="font-body text-sm text-cream/60 hover:text-primary transition-colors inline-block"
                      whileHover={{ x: 5 }}
                      data-hover
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-8 border-t border-primary/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[
            { icon: MapPin, text: 'Amul Dairy Road, Anand, Gujarat 388001' },
            { icon: Phone, text: '+91 2692 258506' },
            { icon: Mail, text: 'care@amul.coop' },
          ].map((contact, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 text-cream/60"
              whileHover={{ color: 'hsl(var(--primary))' }}
            >
              <contact.icon className="w-5 h-5 text-primary" />
              <span className="font-body text-sm">{contact.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-cream/40">
              © {new Date().getFullYear()} Gujarat Cooperative Milk Marketing Federation Ltd. 
              All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookies'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-body text-xs text-cream/40 hover:text-primary transition-colors"
                  data-hover
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg z-40"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        data-hover
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </motion.button>
    </footer>
  );
};

export default PremiumFooter;
