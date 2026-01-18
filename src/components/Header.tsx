import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Products', href: '#products' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main navigation */}
      <nav className="bg-chocolate-dark/95 backdrop-blur-md border-b border-gold/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <span className="font-display text-3xl font-bold text-primary">Amul</span>
              <span className="hidden sm:block text-cream/80 font-elegant text-lg">Dark Chocolate</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-cream/80 hover:text-primary transition-colors font-body text-sm tracking-wide uppercase"
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#products"
                className="px-6 py-2.5 bg-primary text-primary-foreground font-body text-sm tracking-wide uppercase rounded-sm hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Shop Now
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-cream p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-chocolate border-t border-gold/10"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-cream/80 hover:text-primary transition-colors font-body text-sm tracking-wide uppercase py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#products"
                className="px-6 py-3 bg-primary text-primary-foreground font-body text-sm tracking-wide uppercase rounded-sm text-center"
                onClick={() => setIsOpen(false)}
              >
                Shop Now
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
