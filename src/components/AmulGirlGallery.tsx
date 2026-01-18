import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import amulGirl1 from '@/assets/amul-girl-1.png';
import amulGirl2 from '@/assets/amul-girl-2.png';
import amulGirl3 from '@/assets/amul-girl-3.png';

const galleryImages = [
  {
    id: 1,
    src: amulGirl1,
    title: 'Classic Amul Girl',
    year: '1966',
    description: 'The original mascot that captured hearts across India.',
  },
  {
    id: 2,
    src: amulGirl2,
    title: 'Cultural Icon',
    year: '1980s',
    description: 'A symbol of Indian dairy heritage and tradition.',
  },
  {
    id: 3,
    src: amulGirl3,
    title: 'Modern Era',
    year: '2000s',
    description: 'Continuing to spread smiles with every campaign.',
  },
];

const AmulGirlGallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section className="relative py-32 bg-gradient-to-b from-background via-chocolate-dark to-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            className="font-elegant text-lg text-primary mb-2 italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            India's Beloved Mascot
          </motion.p>
          <motion.h2
            className="font-display text-4xl md:text-6xl text-cream font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            The Amul Girl
          </motion.h2>
          <motion.p
            className="font-body text-cream/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            For over five decades, the Amul Girl has been a witty commentator on 
            Indian life, bringing smiles to millions with her topical humor.
          </motion.p>
        </div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              onClick={() => setSelectedImage(image)}
              data-hover
            >
              <motion.div
                className="relative overflow-hidden rounded-2xl bg-cream/5 border border-primary/10"
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <motion.img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-chocolate-dark via-chocolate-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Content Overlay */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                >
                  <span className="font-elegant text-primary text-sm italic">{image.year}</span>
                  <h3 className="font-display text-xl text-cream mt-1">{image.title}</h3>
                  <p className="font-body text-cream/70 text-sm mt-2">{image.description}</p>
                </motion.div>

                {/* Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary/90 rounded-full font-body text-xs text-primary-foreground uppercase tracking-wider">
                  {image.year}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 border-2 border-primary/30 text-primary font-body text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            data-hover
          >
            View Full Gallery
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-chocolate-dark/95 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.button
            className="absolute top-6 right-6 p-3 text-cream hover:text-primary transition-colors"
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </motion.button>

          <motion.div
            className="relative max-w-4xl max-h-[80vh] mx-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[70vh] w-auto mx-auto rounded-2xl shadow-2xl"
            />
            <div className="text-center mt-6">
              <span className="font-elegant text-primary italic">{selectedImage.year}</span>
              <h3 className="font-display text-3xl text-cream mt-2">{selectedImage.title}</h3>
              <p className="font-body text-cream/70 mt-2">{selectedImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default AmulGirlGallery;
