import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import dark99 from '@/assets/products/dark-99.png';
import dark75 from '@/assets/products/dark-75.png';
import dark55 from '@/assets/products/dark-55.png';
import butter from '@/assets/products/butter.png';
import cheese from '@/assets/products/cheese.png';
import milk from '@/assets/products/milk.png';

const products = [
  {
    id: 1,
    name: 'Dark 99%',
    subtitle: 'Pure Intensity',
    description: 'For the true connoisseur. Extreme cocoa richness.',
    image: dark99,
    color: 'from-amber-900/80',
  },
  {
    id: 2,
    name: 'Dark 75%',
    subtitle: 'Bold Excellence',
    description: 'Perfect balance of intensity and smoothness.',
    image: dark75,
    color: 'from-red-900/80',
  },
  {
    id: 3,
    name: 'Dark 55%',
    subtitle: 'Smooth Harmony',
    description: 'Gateway to dark chocolate perfection.',
    image: dark55,
    color: 'from-orange-900/80',
  },
  {
    id: 4,
    name: 'Premium Butter',
    subtitle: 'Golden Delight',
    description: 'Creamy, smooth, and utterly delicious.',
    image: butter,
    color: 'from-yellow-600/80',
  },
  {
    id: 5,
    name: 'Cheese Slices',
    subtitle: 'Perfect Melt',
    description: 'The taste that brings smiles.',
    image: cheese,
    color: 'from-yellow-700/80',
  },
  {
    id: 6,
    name: 'Fresh Milk',
    subtitle: 'Pure Goodness',
    description: 'From farm to your table.',
    image: milk,
    color: 'from-blue-100/80',
  },
];

const HorizontalProductScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66%']);

  return (
    <section
      ref={containerRef}
      id="products"
      className="relative h-[300vh] bg-gradient-to-b from-background via-chocolate to-background"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">

        {/* Horizontal Scroll Container */}
        <motion.div
          className="flex gap-8 pl-[10vw]"
          style={{ x }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="relative flex-shrink-0 w-[80vw] md:w-[40vw] h-[70vh] group perspective-1000"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br ${product.color} to-chocolate-dark border border-primary/10 backdrop-blur-lg transform-style-3d transition-all duration-500 shadow-2xl`}>

                {/* Shine Effect */}
                <div className="absolute inset-0 z-20 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                {/* Product Image */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center z-10"
                  whileHover={{
                    scale: 1.1,
                    rotateY: 5,
                    rotateX: 5,
                    z: 50
                  }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover drop-shadow-2xl"
                  />
                </motion.div>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate-dark via-transparent to-transparent z-20 pointer-events-none" />

                <div className="absolute bottom-0 left-0 right-0 p-8 z-30">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="font-elegant text-primary text-lg mb-1 italic">
                      {product.subtitle}
                    </p>
                    <h3 className="font-display text-3xl md:text-4xl text-cream font-bold mb-3">
                      {product.name}
                    </h3>
                    <p className="font-body text-cream/70 mb-6 drop-shadow-md">
                      {product.description}
                    </p>

                    <motion.button
                      className="group/btn flex items-center gap-3 font-body text-sm tracking-widest uppercase text-primary hover:text-cream transition-colors pointer-events-auto"
                      whileHover={{ x: 10 }}
                      data-hover
                    >
                      <span>View Details</span>
                      <svg
                        className="w-5 h-5 transition-transform group-hover/btn:translate-x-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </motion.button>
                  </motion.div>
                </div>

                {/* Hover Glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at center, hsla(40, 50%, 55%, 0.15), transparent 70%)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Bar */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-1 bg-chocolate-light rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
          />
        </div>
      </div>
    </section>
  );
};

export default HorizontalProductScroll;
