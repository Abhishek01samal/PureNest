import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heritageFarm from '@/assets/heritage-farm.jpg';

const timelineEvents = [
  {
    year: '1946',
    title: 'The Beginning',
    description: 'Amul was formed as a cooperative in Anand, Gujarat, empowering local dairy farmers.',
  },
  {
    year: '1955',
    title: 'Amul Butter',
    description: 'The iconic Amul Butter was launched, becoming a household name across India.',
  },
  {
    year: '1966',
    title: 'Amul Girl Born',
    description: 'The famous Amul Girl mascot made her debut, becoming a cultural icon.',
  },
  {
    year: '1994',
    title: 'Chocolate Excellence',
    description: 'Amul entered the chocolate market, bringing premium taste to Indian consumers.',
  },
  {
    year: '2020',
    title: 'Dark Chocolate Range',
    description: 'Launch of the premium Dark Chocolate collection with 55%, 75%, and 99% cocoa variants.',
  },
  {
    year: 'Today',
    title: 'Global Legacy',
    description: 'Serving over 36 million liters of milk daily, Amul continues to innovate and inspire.',
  },
];

const HeritageTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section
      ref={containerRef}
      id="heritage"
      className="relative py-32 overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <img
          src={heritageFarm}
          alt="Amul Heritage"
          className="w-full h-[120%] object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            className="font-elegant text-lg text-primary mb-2 italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            75+ Years of Excellence
          </motion.p>
          <motion.h2
            className="font-display text-4xl md:text-6xl text-cream font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our Heritage
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-primary mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          />
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 -translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              className={`relative flex items-center mb-20 last:mb-0 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {/* Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                <motion.div
                  className="p-6 rounded-2xl bg-chocolate/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <span className="font-display text-4xl text-primary font-bold">
                    {event.year}
                  </span>
                  <h3 className="font-display text-xl text-cream mt-2 mb-3">
                    {event.title}
                  </h3>
                  <p className="font-body text-cream/70 text-sm">
                    {event.description}
                  </p>
                </motion.div>
              </div>

              {/* Center Dot */}
              <div className="absolute left-1/2 -translate-x-1/2">
                <motion.div
                  className="w-6 h-6 rounded-full bg-primary border-4 border-background relative z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              {/* Empty Space */}
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { number: '36M+', label: 'Liters/Day' },
            { number: '3.6M+', label: 'Farmers' },
            { number: '75+', label: 'Years' },
            { number: '50+', label: 'Products' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-chocolate/30 backdrop-blur-sm border border-primary/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: 'hsl(var(--primary) / 0.5)' }}
            >
              <motion.span
                className="font-display text-4xl md:text-5xl text-primary font-bold block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.span>
              <span className="font-body text-sm text-cream/70 uppercase tracking-wider mt-2 block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeritageTimeline;
