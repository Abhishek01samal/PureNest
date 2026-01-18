import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Brain, Sparkles, Shield, Zap, Leaf } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: 'Heart Health',
    description: 'Dark chocolate contains flavonoids that support cardiovascular health and improve blood flow.',
    stat: '27%',
    statLabel: 'Lower heart risk',
  },
  {
    icon: Brain,
    title: 'Brain Function',
    description: 'Cocoa compounds enhance cognitive function, memory, and focus.',
    stat: '40%',
    statLabel: 'Better cognition',
  },
  {
    icon: Sparkles,
    title: 'Rich Antioxidants',
    description: 'More antioxidants than most superfoods, fighting free radicals effectively.',
    stat: '8x',
    statLabel: 'More than berries',
  },
  {
    icon: Shield,
    title: 'Immunity Boost',
    description: 'Essential minerals like zinc and selenium strengthen your immune system.',
    stat: '15%',
    statLabel: 'Stronger immunity',
  },
  {
    icon: Zap,
    title: 'Natural Energy',
    description: 'Theobromine provides sustained energy without the caffeine crash.',
    stat: '4hrs',
    statLabel: 'Sustained energy',
  },
  {
    icon: Leaf,
    title: 'Pure Natural',
    description: '100% natural ingredients with no artificial preservatives or colors.',
    stat: '0%',
    statLabel: 'Artificial additives',
  },
];

const PremiumBenefits = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={containerRef}
      id="benefits"
      className="relative py-32 bg-gradient-to-b from-background to-chocolate-dark overflow-hidden"
    >
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-20 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
      />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            className="font-elegant text-lg text-primary mb-2 italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Power of Dark Chocolate
          </motion.p>
          <motion.h2
            className="font-display text-4xl md:text-6xl text-cream font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Health Benefits
          </motion.h2>
          <motion.p
            className="font-body text-cream/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Indulgence meets wellness. Discover why dark chocolate is one of 
            nature's most powerful superfoods.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-chocolate/80 to-chocolate-dark/80 border border-primary/10 backdrop-blur-sm overflow-hidden"
                whileHover={{ 
                  scale: 1.03,
                  borderColor: 'hsl(var(--primary) / 0.5)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <benefit.icon className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="font-display text-2xl text-cream mb-3">
                  {benefit.title}
                </h3>
                <p className="font-body text-cream/70 text-sm mb-6">
                  {benefit.description}
                </p>

                {/* Stat */}
                <div className="flex items-end gap-2">
                  <span className="font-display text-4xl text-primary font-bold">
                    {benefit.stat}
                  </span>
                  <span className="font-body text-sm text-cream/50 pb-1">
                    {benefit.statLabel}
                  </span>
                </div>

                {/* Hover Glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at top right, hsla(40, 50%, 55%, 0.1), transparent 60%)',
                  }}
                />

                {/* Corner Accent */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumBenefits;
