import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-chocolate.jpeg';
import dark99 from '@/assets/products/dark-99.png';
import dark75 from '@/assets/products/dark-75.png';
import dark55 from '@/assets/products/dark-55.png';

const PremiumHero = () => {
  const products = [
    { image: dark99, name: '99% Cocoa', delay: 0.8 },
    { image: dark75, name: '75% Cocoa', delay: 1 },
    { image: dark55, name: '55% Cocoa', delay: 1.2 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Amul Dark Chocolate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-chocolate-dark/80 via-chocolate-dark/60 to-background" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center w-full py-20">
        <div className="container mx-auto px-4 text-center">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.p
              className="font-elegant text-xl md:text-2xl text-cream/80 mb-4 italic tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Experience the Art of
            </motion.p>

            <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold text-cream mb-6 relative">
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, rotateX: 90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                AMUL
              </motion.span>
              <br />
              <motion.span
                className="text-primary inline-block"
                initial={{ opacity: 0, rotateX: 90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Premium
              </motion.span>
            </h1>

            {/* Animated line */}
            <motion.div
              className="flex items-center justify-center gap-4 mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="h-px w-20 md:w-32 bg-gradient-to-r from-transparent to-primary" />
              <span className="font-elegant text-2xl md:text-3xl text-primary italic">
                Dark Chocolate Collection
              </span>
              <div className="h-px w-20 md:w-32 bg-gradient-to-l from-transparent to-primary" />
            </motion.div>

            <motion.p
              className="font-body text-lg md:text-xl text-cream/70 max-w-2xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              Indulge in the rich, velvety symphony of premium cocoa.
              Crafted with passion, each bar is a masterpiece of flavor.
            </motion.p>

            {/* CTA */}
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              <motion.a
                href="#products"
                className="group relative px-10 py-5 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                data-hover
              >
                <span className="relative z-10">Explore Collection</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent to-primary"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Products Reveal */}
      <div className="relative z-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {products.map((product) => (
              <motion.div
                key={product.name}
                className="relative group"
                initial={{ opacity: 0, y: 100, rotate: -10 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: product.delay,
                  duration: 0.8,
                  type: 'spring',
                  stiffness: 100,
                }}
              >
                <motion.div
                  className="relative w-64 h-80 md:w-72 md:h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300 transform-style-3d cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    rotateY: 10,
                    rotateX: 5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Shine Effect */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                  <div className="absolute inset-0 z-0 bg-gradient-to-b from-chocolate-dark/50 to-transparent mix-blend-overlay" />

                  <div className="relative z-10 w-full h-full">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover filter brightness-110"
                    />

                    {/* Product glow */}
                    <div className="absolute inset-0 bg-gradient-radial from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-xl z-[-1]" />
                  </div>
                </motion.div>

                <motion.p
                  className="text-center mt-4 font-elegant text-xl text-cream/80"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: product.delay + 0.3 }}
                >
                  {product.name}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default PremiumHero;
