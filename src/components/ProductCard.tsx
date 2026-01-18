import { motion } from 'framer-motion';

interface ProductCardProps {
  name: string;
  cocoa: string;
  subtitle: string;
  description: string;
  image: string;
  delay?: number;
}

const ProductCard = ({ name, cocoa, subtitle, description, image, delay = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="bg-secondary/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gold/10 hover:border-primary/30 transition-all duration-500 shadow-card">
        {/* Image container */}
        <div className="relative h-80 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-chocolate-dark via-transparent to-transparent opacity-60" />
          
          {/* Cocoa percentage badge */}
          <div className="absolute top-4 right-4 bg-chocolate-dark/80 backdrop-blur-sm px-4 py-2 rounded-sm border border-primary/30">
            <span className="font-display text-2xl font-bold text-primary">{cocoa}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-display text-2xl font-semibold text-cream mb-1">{name}</h3>
          <p className="font-elegant text-primary italic mb-3">{subtitle}</p>
          <p className="font-body text-cream/60 text-sm leading-relaxed mb-4">{description}</p>
          
          <motion.button
            className="w-full py-3 border border-primary/50 text-primary font-body text-sm tracking-widest uppercase rounded-sm hover:bg-primary hover:text-primary-foreground transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Details
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
