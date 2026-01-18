import { motion } from 'framer-motion';
import { Leaf, Heart, Brain } from 'lucide-react';
import benefitsImage from '@/assets/benefits-section.png';

const benefits = [
  {
    icon: Leaf,
    title: 'Rich in Antioxidants',
    description: 'Packed with antioxidants that help combat free radicals & promote overall health.',
  },
  {
    icon: Heart,
    title: 'Heart Health',
    description: 'Contains flavonoids that support heart health by improving blood circulation.',
  },
  {
    icon: Brain,
    title: 'Boosts Brain Function',
    description: 'Enhances cognitive function by increasing blood flow to the brain.',
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={benefitsImage}
          alt="Dark chocolate benefits"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-chocolate-dark/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-primary/50" />
            <span className="font-elegant text-primary italic text-lg">Why Choose Us</span>
            <div className="h-px w-16 bg-primary/50" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">
            Benefits
          </h2>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="text-center"
            >
              {/* Icon */}
              <motion.div
                className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-primary flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <benefit.icon className="w-8 h-8 text-primary" />
              </motion.div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-cream mb-3">
                {benefit.title}
              </h3>
              <p className="font-body text-cream/60 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
