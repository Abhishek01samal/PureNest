import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import chocolateSplash from '@/assets/chocolate-splash.png';

const products = [
  {
    name: '99% Superdark',
    cocoa: '99%',
    subtitle: 'Single Origin Chocolate',
    description: 'For the true dark chocolate connoisseur. Intense, bold, and unapologetically bitter with complex flavor notes.',
    image: chocolateSplash,
  },
  {
    name: '75% Rich Cocoa',
    cocoa: '75%',
    subtitle: 'Premium Dark Chocolate',
    description: 'The perfect balance of intensity and smoothness. Rich cocoa flavor with subtle fruity undertones.',
    image: chocolateSplash,
  },
  {
    name: '55% Fine Cocoa',
    cocoa: '55%',
    subtitle: 'Classic Dark Chocolate',
    description: 'An approachable dark chocolate with a mild bitterness and creamy finish. Perfect for everyday indulgence.',
    image: chocolateSplash,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-chocolate relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-elegant text-primary italic text-lg mb-3">Premium Selection</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
            Our Dark Chocolate Range
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20 bg-primary/30" />
            <div className="w-2 h-2 bg-primary rounded-full" />
            <div className="h-px w-20 bg-primary/30" />
          </div>
          <p className="font-body text-cream/60 max-w-2xl mx-auto">
            Discover our exquisite collection of dark chocolates, each crafted with the finest cocoa beans 
            to deliver an unparalleled taste experience.
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.name}
              {...product}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
