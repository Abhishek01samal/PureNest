import Header from '@/components/Header';
import PremiumHero from '@/components/PremiumHero';
import HorizontalProductScroll from '@/components/HorizontalProductScroll';
import AmulGirlGallery from '@/components/AmulGirlGallery';
import NewsletterSection from '@/components/NewsletterSection';
import PremiumFooter from '@/components/PremiumFooter';
import { useGsapScroll } from '@/hooks/useGsapScroll';
import IntroVideo from '@/components/IntroVideo';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  useGsapScroll();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroVideo key="intro" onComplete={() => setShowIntro(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Header />
            <main>
              <PremiumHero />
              <HorizontalProductScroll />
              <AmulGirlGallery />
              <NewsletterSection />
            </main>
            <PremiumFooter />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
