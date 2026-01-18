import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-chocolate relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 border border-primary rounded-full" />
        <div className="absolute bottom-20 right-10 w-60 h-60 border border-primary rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-primary rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-primary/50" />
              <span className="font-elegant text-primary italic text-lg">Our Story</span>
              <div className="h-px w-16 bg-primary/50" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
              Crafted with Passion
            </h2>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-secondary/30 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-gold/10"
          >
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-primary" />
              ))}
            </div>

            <p className="font-elegant text-xl md:text-2xl text-cream text-center leading-relaxed mb-6 italic">
              "For over decades, Amul has been India's most beloved dairy brand. 
              Our dark chocolate range continues this legacy of excellence, 
              bringing you the finest cocoa from across the world."
            </p>

            <p className="font-body text-cream/60 text-center leading-relaxed mb-8">
              Each bar is carefully crafted using premium single-origin cocoa beans, 
              roasted to perfection to bring out complex flavor profiles. From the intense 
              99% Superdark to the approachable 55% Fine Cocoa, there's a perfect dark 
              chocolate for every palate.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gold/10">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">75+</p>
                <p className="font-body text-cream/60 text-sm">Years of Trust</p>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">100%</p>
                <p className="font-body text-cream/60 text-sm">Pure Cocoa</p>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">50M+</p>
                <p className="font-body text-cream/60 text-sm">Happy Customers</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
